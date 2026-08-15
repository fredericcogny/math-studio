---
id: "tal-continuity-tvi"
order: 3
title: "Continuité & Théorème des Valeurs Intermédiaires"
level: "TAL-spe"
strand: "Analyse & Fonctions"
difficulty: "core"
estimatedMinutes: 35
summary: "Notions de continuité, Théorème des Valeurs Intermédiaires (TVI), corollaire de la stricte monotonie et dichotomie."
objectives:
  - "Justifier la continuité d'une fonction sur un intervalle"
  - "Enoncer et appliquer le TVI pour prouver l'existence de solutions"
  - "Utiliser le corollaire de la stricte monotonie pour prouver l'unicite"
prerequisites:
  - "Limites de fonctions et variations"
vocabulary:
  - en: "Intermediate Value Theorem"
    fr: "Théorème des Valeurs Intermédiaires (TVI)"
    definition: "Pour toute fonction continue f sur [a, b], tout réel k compris entre f(a) et f(b) admet au moins un antécédent c dans [a, b]."
  - en: "Dichotomy algorithm"
    fr: "Algorithme de dichotomie"
    definition: "Méthode numérique de découpage successif de l'intervalle en deux pour encadrer la solution d'une équation."
flashcards:
  - front: "Quelles sont les deux conditions nécessaires pour garantir l'existence ET l'unicité d'une solution de f(x) = k ?"
    back: "1. f est continue sur [a, b]. 2. f est strictement monotone sur [a, b]."
  - front: "Que signifie graphiquement qu'une fonction est continue sur un intervalle ?"
    back: "Sa courbe représentative se trace d'un seul trait sans lever le crayon."
generator:
  type: "quadratic-value"
  seed: 203
  count: 4
  coefficientMin: 1
  coefficientMax: 3
  xMin: -2
  xMax: 4
tieredExercises:
  - id: "tal-tvi-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "For $f(x)=x^3+x-3$, calculate the ordered pair $(f(1),f(2))$."
    solution: "$f(1)=1+1-3=-1$ and $f(2)=8+2-3=7$, so the ordered pair is $(-1,7)$."
    hints:
      - "Substitute each endpoint directly into the polynomial."
    assessment:
      kind: "exact"
      expected: "(-1, 7)"
  - id: "tal-tvi-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Prove that $f(x)=x^3+x-3$ has exactly one zero in $(1,2)$."
    solution: "The polynomial $f$ is continuous on $[1,2]$. Since $f(1)=-1<0<7=f(2)$, the intermediate value theorem gives at least one zero in $(1,2)$. Moreover $f'(x)=3x^2+1>0$ for every real $x$, so $f$ is strictly increasing and can have at most one zero. Hence the zero in $(1,2)$ is unique."
    hints:
      - "Use continuity and opposite endpoint signs for existence."
      - "Use the derivative to obtain strict monotonicity and uniqueness."
    assessment:
      kind: "reasoning"
      rubric:
        - "States continuity on $[1,2]$ and computes opposite endpoint signs."
        - "Applies the intermediate value theorem to prove existence."
        - "Shows $f'(x)>0$ and uses strict increase to prove uniqueness."
  - id: "tal-tvi-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Starting from $[1,2]$, perform three bisection steps for the unique zero $\\alpha$ of $f(x)=x^3+x-3$. Give the resulting interval and its length."
    solution: "$f(1)<0<f(2)$. At $3/2$, $f(3/2)=15/8>0$, so retain $[1,3/2]$. At $5/4$, $f(5/4)=13/64>0$, so retain $[1,5/4]$. At $9/8$, $f(9/8)=-231/512<0$, so retain $[9/8,5/4]$. Its length is $5/4-9/8=1/8$."
    hints:
      - "At each step retain the half whose endpoint values have opposite signs."
      - "The successive midpoints are $3/2$, $5/4$, and $9/8$."
    assessment:
      kind: "exact"
      expected: "[9/8, 5/4], length 1/8"
      accepted:
        - "[1.125, 1.25], length 0.125"
  - id: "tal-tvi-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "For real parameters $a$ and $m$, classify completely the number of distinct real solutions of $x^3-3ax=m$. Your proof must include the cases $a\\leq0$ and $a>0$, derive the parameter-dependent extremum values, and locate the three roots when they exist."
    solution: "Let $g_a(x)=x^3-3ax$. If $a\\leq0$, then $g_a'(x)=3(x^2-a)>0$ except at the isolated point $a=x=0$; $g_a$ is strictly increasing from $-\\infty$ to $+\\infty$, so every $m$ gives exactly one real solution. Now let $a>0$. The critical points are $-\\sqrt a$ and $\\sqrt a$. The function increases on $(-\\infty,-\\sqrt a]$, decreases on $[-\\sqrt a,\\sqrt a]$, then increases on $[\\sqrt a,+\\infty)$. Its local maximum is $g_a(-\\sqrt a)=2a^{3/2}$ and its local minimum is $g_a(\\sqrt a)=-2a^{3/2}$. Therefore there are three distinct roots when $|m|<2a^{3/2}$, one in each monotonicity interval; two distinct roots, one of them double, when $|m|=2a^{3/2}$; and exactly one real root when $|m|>2a^{3/2}$. Continuity gives existence on each stated branch and strict monotonicity gives uniqueness there."
    hints:
      - "Separate $a\\leq0$ from $a>0$ before solving $g_a'(x)=0$."
      - "For $a>0$, evaluate $g_a$ at $x=\\pm\\sqrt a$."
      - "Apply the IVT separately on each interval of strict monotonicity."
    assessment:
      kind: "reasoning"
      rubric:
        - "Proves that every $m$ gives exactly one solution when $a\\leq0$."
        - "For $a>0$, derives the critical points and extremum values $\\pm2a^{3/2}$."
        - "Classifies correctly the three-, two-, and one-root regimes and locates roots by branch."
        - "Uses continuity for existence and strict monotonicity for uniqueness on every branch."
---

# Continuité & Théorème des Valeurs Intermédiaires

La **continuité** est la propriété fondamentale des fonctions dont le graphe ne présente aucune rupture ni saut.

## 1. Définition de la continuité

Une fonction $f$ est **continue en $a$** si :

$$\lim_{x \to a} f(x) = f(a)$$

Toutes les fonctions usuelles (polynômes, exponentielle, sinus, cosinus, racine carrée) sont continues sur leur ensemble de définition.

## 2. Théorème des Valeurs Intermédiaires (TVI)

Si $f$ est une fonction **continue** sur un intervalle $[a, b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe **au moins un** réel $c \in [a, b]$ tel que :

$$f(c) = k$$

## 3. Corollaire (Théorème de la bijection)

Si $f$ est **continue** ET **strictement monotone** sur $[a, b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ possède une **unique** solution $c \in [a, b]$.
