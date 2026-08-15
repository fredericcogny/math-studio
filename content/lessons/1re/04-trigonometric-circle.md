---
id: "1re-trigonometric-circle"
order: 4
title: "Le Cercle Trigonométrique & Fonctions Sinus/Cosinus"
level: "1re"
strand: "Géométrie & Trigonométrie"
difficulty: "core"
estimatedMinutes: 30
summary: "Enroulement de la droite numérique, mesure en radians, valeurs remarquables et propriétés des fonctions cosinus et sinus."
objectives:
  - "Convertir des degrés en radians et placer des angles sur le cercle trigonométrique"
  - "Connaître parfaitement les valeurs remarquables de cos(x) et sin(x)"
  - "Résoudre des équations trigonométriques simples sur [0, 2pi["
prerequisites:
  - "Théorème de Pythagore et trigonométrie du triangle rectangle"
vocabulary:
  - en: "Radian"
    fr: "Radian"
    definition: "Unité de mesure d'angle telle qu'un demi-tour complet (180 deg) équivaut à pi radians."
  - en: "Trigonometric circle"
    fr: "Cercle trigonométrique"
    definition: "Cercle centré à l'origine de rayon 1, orienté dans le sens direct (anti-horaire)."
flashcards:
  - front: "Quelle est la valeur exacte de cos(pi/3) et sin(pi/3) ?"
    back: "cos(pi/3) = 1/2 et sin(pi/3) = sqrt(3)/2"
  - front: "Quelle relation fondamentale relie cos(x) et sin(x) pour tout réel x ?"
    back: "cos^2(x) + sin^2(x) = 1"
generator:
  type: "linear-equation"
  seed: 104
  count: 4
  coefficientMin: 1
  coefficientMax: 4
  solutionMin: 0
  solutionMax: 6
  offsetMin: 0
  offsetMax: 4
tieredExercises:
  - id: "1re-trig-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Give the exact values of $\\cos(7\\pi/6)$ and $\\sin(7\\pi/6)$."
    solution: "The angle $7\\pi/6=\\pi+\\pi/6$ lies in the third quadrant. Therefore $\\cos(7\\pi/6)=-\\cos(\\pi/6)=-\\sqrt{3}/2$ and $\\sin(7\\pi/6)=-\\sin(\\pi/6)=-1/2$."
    hints:
      - "Use the reference angle $\\pi/6$ and the signs in the third quadrant."
    assessment:
      kind: "exact"
      expected: "(-sqrt(3)/2, -1/2)"
      accepted:
        - "(-√3/2, -1/2)"
  - id: "1re-trig-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Solve $2\\cos(x-\\pi/3)=1$ for $x\\in[0,2\\pi)$. Give the complete solution set."
    solution: "The equation is $\\cos(x-\\pi/3)=1/2$. Thus $x-\\pi/3=\\pm\\pi/3+2k\\pi$, so $x=2k\\pi$ or $x=2\\pi/3+2k\\pi$. In $[0,2\\pi)$, the solutions are $0$ and $2\\pi/3$."
    hints:
      - "First solve $\\cos y=1/2$ with $y=x-\\pi/3$."
      - "Keep only the representatives that lie in $[0,2\\pi)$."
    assessment:
      kind: "exact"
      expected: "{0, 2pi/3}"
      accepted:
        - "0, 2π/3"
        - "{0; 2π/3}"
        - "{2pi/3, 0}"
        - "2π/3, 0"
  - id: "1re-trig-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Let $S$ be the sum of all distinct solutions of $2\\sin^2 x-3\\sin x+1=0$ on $[0,2\\pi)$. Find the coefficient $c$ such that $S=c\\pi$."
    solution: "Set $s=\\sin x$. The equation factors as $(2s-1)(s-1)=0$, so $\\sin x=1/2$ or $\\sin x=1$. On $[0,2\\pi)$ this gives $x=\\pi/6,5\\pi/6,\\pi/2$. Their sum is $\\pi/6+5\\pi/6+\\pi/2=3\\pi/2$, so the requested coefficient is $3/2$."
    hints:
      - "Treat $\\sin x$ as the unknown in a quadratic equation."
      - "Solve each resulting basic trigonometric equation on the stated interval."
    assessment:
      kind: "numeric"
      expected: 1.5
      tolerance: 0
  - id: "1re-trig-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "Prove that, for real $a,b$ not both zero, the range of $a\\cos x+b\\sin x$ is $[-\\sqrt{a^2+b^2},\\sqrt{a^2+b^2}]$. Hence determine all real parameters $m$ for which $(m-1)\\cos x+(m+1)\\sin x=2m$ has a real solution, and describe what is special at the boundary parameter values."
    solution: "Let $R=\\sqrt{a^2+b^2}>0$ and choose $\\varphi$ with $\\cos\\varphi=a/R$ and $\\sin\\varphi=b/R$. The addition formula gives $a\\cos x+b\\sin x=R\\cos(x-\\varphi)$, whose range is $[-R,R]$. In the parameter equation, $R^2=(m-1)^2+(m+1)^2=2m^2+2$. A solution exists exactly when $|2m|\\le R$, equivalently $4m^2\\le2m^2+2$, hence $|m|\\le1$. If $|m|<1$, the target lies strictly inside the range and there are two solutions modulo $2\\pi$. If $m=1$ or $m=-1$, equality holds, so there is one solution modulo $2\\pi$ (the harmonic expression is at an extremum)."
    hints:
      - "Normalize $(a,b)$ by its Euclidean norm and introduce an angle $\\varphi$."
      - "Existence is equivalent to $|2m|\\le\\sqrt{(m-1)^2+(m+1)^2}$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Derives the harmonic identity $a\\cos x+b\\sin x=R\\cos(x-\\varphi)$ with $R=\\sqrt{a^2+b^2}$."
        - "Uses the range of cosine to obtain a necessary and sufficient existence condition."
        - "Solves the parameter inequality correctly to get $m\\in[-1,1]$."
        - "Explains the two-solution interior case and the tangency/extremum behavior at $m=\\pm1$."
---

# Le Cercle Trigonométrique & Fonctions Sinus/Cosinus

La **trigonométrie** permet de relier les angles aux distances et aux coordonnées dans le plan grâce à l'enroulement de la droite numérique autour du cercle unité.

## 1. Enroulement et mesure en radians

Le **cercle trigonométrique** est un cercle de centre $O$ et de rayon $1$, muni d'un sens direct (sens anti-horaire).

Un **radian** est la mesure d'un angle au centre qui intercepte un arc de longueur égale au rayon du cercle. Ainsi :

$$\pi \text{ radians} = 180^\circ$$

## 2. Valeurs remarquables à connaître absolument

| $x$ (rad) | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $\cos(x)$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| $\sin(x)$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ |

## 3. Propriétés et relations fondamentales

Pour tout réel $x$ :

$$\cos^2(x) + \sin^2(x) = 1$$

Formules de symétrie et de décalage :
* $\cos(-x) = \cos(x)$ et $\sin(-x) = -\sin(x)$ (Parité)
* $\cos(x + \pi) = -\cos(x)$ et $\sin(x + \pi) = -\sin(x)$
* $\cos(\pi - x) = -\cos(x)$ et $\sin(\pi - x) = \sin(x)$
