import type { Locale } from "./types";

export interface SocraticMessage {
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

export async function askSocraticTutor(
  exercisePrompt: string,
  exerciseSolution: string,
  userQuestion: string,
  history: SocraticMessage[],
  lessonTitle: string,
  locale: Locale,
): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const modelName = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash";

  // System Prompt strictly enforcing Socratic rules
  const responseLanguage = locale === "fr" ? "French" : "English";
  const systemPrompt = `You are a mathematics tutor for students from middle school through the end of high school.
Lesson context: "${lessonTitle}"
Exercise problem: "${exercisePrompt}"
Exercise Reference Solution (DO NOT REVEAL THIS TO THE STUDENT): "${exerciseSolution}"

CRITICAL INSTRUCTIONS:
1. NEVER output the final numerical answer, direct algebraic expression, or step-by-step solution.
2. NEVER calculate the answer for the student.
3. Respond only in ${responseLanguage}, matching the selected interface language.
4. Provide a single focused guiding question, a subtle conceptual clue, or point out a theorem/definition.
5. If the student makes an error or is stuck, break the step down into a simpler sub-question without doing the math.
6. Use standard LaTeX notation (inline \\(...\\) or block $$...$$) for mathematical expressions.`;

  if (apiKey && apiKey !== "your_google_ai_studio_api_key_here") {
    try {
      const contents = [
        ...history.map((msg) => ({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        })),
        {
          role: "user",
          parts: [{ text: userQuestion }],
        },
      ];

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents,
          }),
          signal: AbortSignal.timeout(15_000),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidateText) {
          return candidateText.trim();
        }
      }
    } catch (err) {
      console.warn("Google AI Studio API error, falling back to Socratic engine:", err);
    }
  }

  // Smart Socratic Fallback Engine (when API key is absent or offline)
  return generateOfflineSocraticResponse(userQuestion, exercisePrompt, history.length, locale);
}

function generateOfflineSocraticResponse(question: string, prompt: string, turnCount: number, locale: Locale): string {
  const lower = question.toLowerCase();

  if (locale === "fr") {
    if (lower.includes("comment") || lower.includes("commencer") || lower.includes("début")) {
      return "Pour commencer, quelle est la relation mathématique principale donnée dans l'énoncé ? Pouvez-vous d'abord identifier les informations connues et l'inconnue ?";
    }
    if (lower.includes("réponse") || lower.includes("solution") || lower.includes("résultat")) {
      return "Partagez votre calcul ou votre hypothèse actuelle : quelle étape précise souhaitez-vous vérifier ?";
    }
    if (lower.includes("bloqué") || lower.includes("comprends pas")) {
      return `Décomposons le problème. Quelle propriété ou quel théorème pourrait s'appliquer à « ${prompt.slice(0, 30)}... » ?`;
    }
    const frenchHints = [
      "Avant de calculer, quelle définition relie les informations données à ce qu'il faut trouver ?",
      "Que se passe-t-il si vous isolez le terme principal ou représentez la situation par un schéma ?",
      "Quelle règle utilisée dans l'exemple précédent s'applique à ce type de problème ?",
      "En testant un cas simple ou une valeur limite, quel motif observez-vous ?",
    ];
    return frenchHints[turnCount % frenchHints.length];
  }

  if (lower.includes("how") || lower.includes("comment") || lower.includes("start") || lower.includes("commencer")) {
    return `To begin solving this problem, ask yourself: what is the main mathematical relationship or formula given in the problem statement? Can you identify the known variables first?`;
  }
  if (lower.includes("answer") || lower.includes("réponse") || lower.includes("solution") || lower.includes("result")) {
    return `I cannot give you the final answer directly! However, if you share your current calculation or hypothesis, I can help you verify if your reasoning is on the right track. What did you calculate so far?`;
  }
  if (lower.includes("stuck") || lower.includes("bloqué") || lower.includes("don't understand") || lower.includes("comprends pas")) {
    return `Let's break it down into a smaller step. What key property or theorem applies to "${prompt.slice(0, 30)}..."?`;
  }

  const defaultHints = [
    `Good question! Before calculating, what mathematical definition connects the given information to what you need to find?`,
    `What happens if you isolate the main term or draw a diagram for this situation?`,
    `Take a look at the previous worked example in this lesson. Which rule applies to this type of equation?`,
    `If you try substituting a simple value or testing the boundary condition, what pattern do you observe?`,
  ];

  return defaultHints[turnCount % defaultHints.length];
}
