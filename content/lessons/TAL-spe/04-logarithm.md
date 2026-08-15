---
id: "tal-logarithm"
order: 4
title: "La Fonction Logarithme Népérien"
level: "TAL-spe"
strand: "Analyse & Fonctions"
difficulty: "core"
estimatedMinutes: 35
summary: "Fonction réciproque de l'exponentielle, propriétés algébriques ln(ab) = ln(a) + ln(b), dérivée et limites."
objectives:
  - "Utiliser la fonction ln comme réciproque de exp : ln(e^x) = x"
  - "Transformer des produits en sommes grâce à la propriété fondamentale"
  - "Résoudre des équations et inéquations comportant des logarithmes et exponentielles"
prerequisites:
  - "Fonction exponentielle et dérivation"
vocabulary:
  - en: "Natural logarithm"
    fr: "Logarithme népérien"
    definition: "Fonction réciproque de l'exponentielle, définie sur ]0, +infini[ et notée ln(x)."
  - en: "Euler's number e"
    fr: "Nombre e"
    definition: "L'unique réel tel que ln(e) = 1, e approx 2,71828."
flashcards:
  - front: "Quelle est la propriété algébrique fondamentale de ln(a * b) pour a > 0 et b > 0 ?"
    back: "ln(a * b) = ln(a) + ln(b)"
  - front: "Quelle est la dérivée de f(x) = ln(x) sur ]0, +infini[ ?"
    back: "f'(x) = 1 / x"
generator:
  type: "linear-equation"
  seed: 204
  count: 4
  coefficientMin: 1
  coefficientMax: 4
  solutionMin: 1
  solutionMax: 6
  offsetMin: 1
  offsetMax: 4
tieredExercises:
  - id: "tal-log-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Simplify $\\ln(e^4\\sqrt{e})$."
    solution: "Since $e^4\\sqrt{e}=e^{4+1/2}=e^{9/2}$, $\\ln(e^4\\sqrt{e})=\\frac{9}{2}$."
    hints:
      - "Write $\\sqrt{e}$ as a power of $e$."
    assessment:
      kind: "exact"
      expected: "9/2"
      accepted:
        - "4.5"
  - id: "tal-log-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Respecting the logarithm's domain, solve $\\ln(x-1)+\\ln(x+1)=\\ln 8$. What is the solution?"
    solution: "Both logarithms are defined when $x-1>0$ and $x+1>0$, so the domain is $x>1$. On this domain, the product rule gives $\\ln((x-1)(x+1))=\\ln 8$, hence $x^2-1=8$. The candidates are $x=\\pm3$, but only $x=3$ belongs to the domain."
    hints:
      - "Impose positivity of both logarithm arguments first."
      - "Then use $\\ln a+\\ln b=\\ln(ab)$."
    assessment:
      kind: "numeric"
      expected: 3
  - id: "tal-log-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Prove the global inequality $\\ln x\\leq x-1$ for every $x>0$, and determine when equality holds."
    solution: "Let $f(x)=x-1-\\ln x$ on $(0,+\\infty)$. Then $f'(x)=1-1/x=(x-1)/x$. Thus $f$ decreases on $(0,1]$ and increases on $[1,+\\infty)$, so its global minimum is $f(1)=0$. Therefore $\\ln x\\leq x-1$ for all $x>0$, with equality only at $x=1$."
    hints:
      - "Move all terms to one side and study a function on $(0,+\\infty)$."
      - "Locate its global minimum using its derivative."
    assessment:
      kind: "reasoning"
      rubric:
        - "Defines an appropriate difference function on the correct domain."
        - "Computes and uses the derivative sign correctly."
        - "Concludes the global inequality and the unique equality case $x=1$."
  - id: "tal-log-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "For a real parameter $a$, classify the number and location of positive solutions of $\\ln x=ax$. Then, for $0<a<1/e$, let $v(a)>e$ be the larger solution. Prove that $v(a)\\to+\\infty$ and that $\\frac{a v(a)}{\\ln(1/a)}\\to1$ as $a\\to0^+$."
    solution: "For $x>0$, write the equation as $g(x)=a$ with $g(x)=\\ln(x)/x$. Since $g'(x)=(1-\\ln x)/x^2$, $g$ increases on $(0,e]$ and decreases on $[e,+\\infty)$, with limits $-\\infty$ at $0^+$ and $0^+$ at $+\\infty$, values $g(1)=0$ and $g(e)=1/e$. Thus there is one root in $(0,1)$ for $a<0$; root $1$ for $a=0$; two roots, one in $(1,e)$ and one in $(e,+\\infty)$, for $0<a<1/e$; root $e$ for $a=1/e$; none for $a>1/e$. For the larger root, $g(v(a))=a\\to0^+$ on the decreasing branch forces $v(a)\\to+\\infty$. Put $L=\\ln(1/a)$ and $y=a v(a)$. The equation becomes $y=L+\\ln y$. For large $L$, the increasing function $y-\\ln y$ on $(1,+\\infty)$ takes a value below $L$ at $y=L$ and above $L$ at $y=2L$, so $L<y<2L$. Hence $0\\leq\\ln y/L\\leq\\ln(2L)/L\\to0$, and $y/L=1+\\ln y/L\\to1$."
    hints:
      - "Rewrite the equation as $\\frac{\\ln x}{x}=a$."
      - "Study the variations and endpoint limits of this quotient."
      - "For the asymptotic part, set $L=\\ln(1/a)$ and $y=av(a)$, then bound $y$ between $L$ and $2L$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Introduces $g(x)=\\ln(x)/x$ on $(0,+\\infty)$ and computes $g'$ correctly."
        - "Establishes the maximum $g(e)=1/e$ and all relevant limits and signs."
        - "Gives all five parameter cases with correct numbers and locations of solutions."
        - "Proves the upper root tends to infinity and derives $y=L+\\ln y$ with $L<y<2L$."
        - "Concludes rigorously that $av(a)/\\ln(1/a)\\to1$."
---

# La Fonction Logarithme Népérien

Le **logarithme népérien**, noté $\ln$, est la fonction réciproque de la fonction exponentielle.

## 1. Définition et courbe

Pour tout réel $x > 0$ et tout réel $y$ :

$$y = \ln(x) \iff x = e^y$$

* **Ensemble de définition** : $]0, +\infty[$
* **Valeurs particulières** : $\ln(1) = 0$ et $\ln(e) = 1$
* **Variations** : $\ln$ est strictement croissante et continue sur $]0, +\infty[$

## 2. Propriétés algébriques

Pour tous réels $a > 0$ et $b > 0$ et tout $n \in \mathbb{Z}$ :

$$\ln(a \times b) = \ln(a) + \ln(b)$$
$$\ln\left(\frac{a}{b}\right) = \ln(a) - \ln(b)$$
$$\ln(a^n) = n \ln(a)$$
$$\ln\left(\frac{1}{a}\right) = -\ln(a)$$

## 3. Dérivation et limites

$$\left(\ln(x)\right)' = \frac{1}{x} \quad (x > 0)$$

Limites aux bornes et croissances comparées :
* $\lim_{x \to 0^+} \ln(x) = -\infty$ et $\lim_{x \to +\infty} \ln(x) = +\infty$
* $\lim_{x \to +\infty} \frac{\ln(x)}{x^n} = 0 \quad (n \ge 1)$
