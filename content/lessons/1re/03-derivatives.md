---
id: "1re-derivatives"
order: 3
title: "Dérivation et Tangentes"
level: "1re"
strand: "Analyse & Fonctions"
difficulty: "core"
estimatedMinutes: 30
summary: "Maîtriser le nombre dérivé, l'équation de la tangente et l'étude des variations d'une fonction."
objectives:
  - "Calculer le nombre dérivé comme limite d'un taux de variation"
  - "Établir l'équation cartésienne de la tangente en un point"
  - "Dresser le tableau de variations à partir du signe de la dérivée"
prerequisites:
  - "Fonctions et représentations graphiques"
  - "Équations de droites et pente"
vocabulary:
  - en: "Derivative at a point"
    fr: "Nombre dérivé"
    definition: "Pente de la tangente à la courbe en un point a, notée f'(a)."
  - en: "Tangent line"
    fr: "Tangente"
    definition: "Droite qui touche la courbe au point (a, f(a)) en épousant sa direction localement."
flashcards:
  - front: "Quelle est la formule de l'équation de la tangente au point d'abscisse a ?"
    back: "y = f'(a)(x - a) + f(a)"
  - front: "Que signifie f'(a) > 0 sur un intervalle I ?"
    back: "La fonction f est strictement croissante sur l'intervalle I."
generator:
  type: "quadratic-value"
  seed: 103
  count: 4
  coefficientMin: 1
  coefficientMax: 4
  xMin: -3
  xMax: 5
tieredExercises:
  - id: "1re-derivatives-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Find the equation of the tangent to $f(x)=x^2$ at $x=2$."
    solution: "$f'(x)=2x$, so $f'(2)=4$ and $f(2)=4$. The tangent is $y=4(x-2)+4=4x-4$."
    hints:
      - "Use $y=f'(a)(x-a)+f(a)$ with $a=2$."
    assessment:
      kind: "exact"
      expected: "y = 4x - 4"
      accepted:
        - "y=4x-4"
        - "y = 4(x - 2) + 4"
  - id: "1re-derivatives-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Let $f(x)=x^3-3x^2-9x+5$. Use the derivative to determine the minimum value of $f$ on $[0,4]$."
    solution: "$f'(x)=3x^2-6x-9=3(x+1)(x-3)$. On $[0,4]$, the derivative is negative on $[0,3)$ and positive on $(3,4]$, so $f$ decreases then increases and reaches its minimum at $x=3$. Since $f(3)=27-27-27+5=-22$, the minimum value is $-22$."
    hints:
      - "Factor the derivative and make its sign table."
      - "Compare the critical point with the interval endpoints."
    assessment:
      kind: "numeric"
      expected: -22
  - id: "1re-derivatives-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Find every tangent to the parabola $y=x^2$ that passes through the point $P(0,-4)$."
    solution: "At abscissa $a$, the tangent has equation $y=2a(x-a)+a^2=2ax-a^2$. It passes through $P$ exactly when $-4=-a^2$, so $a=2$ or $a=-2$. The two tangents are $y=4x-4$ and $y=-4x-4$."
    hints:
      - "Write the tangent at a generic abscissa $a$."
      - "Substitute the coordinates of $P$ into that tangent equation."
    assessment:
      kind: "reasoning"
      rubric:
        - "Derives the generic tangent $y=2ax-a^2$."
        - "Finds both contact abscissas $a=2$ and $a=-2$."
        - "Gives both tangent equations and no extras."
  - id: "1re-derivatives-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "For $f(x)=x^3-3x$ and a real parameter $k$, classify the number of distinct tangents to the graph of $f$ that pass through $P(1,k)$. Prove the classification, including the boundary values of $k$."
    solution: "The tangent at abscissa $a$ is $y=(3a^2-3)(x-a)+a^3-3a$. It passes through $(1,k)$ exactly when $k=g(a)=-2a^3+3a^2-3$. Now $g'(a)=6a(1-a)$, so $g$ decreases on $(-\\infty,0]$, increases on $[0,1]$, and decreases on $[1,+\\infty)$. Its local minimum and maximum are $g(0)=-3$ and $g(1)=-2$. Therefore there are three contact abscissas when $-3<k<-2$, two when $k=-3$ or $k=-2$, and one when $k<-3$ or $k>-2$. At $k=-3$, $g(a)+3=a^2(3-2a)$ gives $a=0$ or $a=3/2$; at $k=-2$, $g(a)+2=-(a-1)^2(2a+1)$ gives $a=1$ or $a=-1/2$, confirming two distinct tangents at each boundary. Distinct contact abscissas here give distinct tangent lines, so this is also the tangent count."
    hints:
      - "Write the tangent at a generic contact abscissa $a$ and impose that it contains $(1,k)$."
      - "Study the variations of the resulting cubic function $g(a)$."
      - "Factor the equations at $k=-3$ and $k=-2$ to count distinct boundary solutions."
    assessment:
      kind: "reasoning"
      rubric:
        - "Derives the condition $k=-2a^3+3a^2-3$."
        - "Uses the variation of this cubic to obtain counts one, two, and three in the correct parameter ranges."
        - "Checks both boundary values and justifies that the resulting tangent lines are distinct."
---

# Dérivation et Tangentes

Le **nombre dérivé** mesure la sensibilité ou le taux de variation instantané d'une fonction $f$ lorsque sa variable varie très légèrement autour d'un point $a$.

## 1. Définition du nombre dérivé

Soit $f$ une fonction définie sur un intervalle $I$ et $a \in I$. Le taux de variation de $f$ entre $a$ et $a+h$ (avec $h \neq 0$) est :

$$\tau(h) = \frac{f(a+h) - f(a)}{h}$$

Si ce taux de variation admet une limite finie lorsque $h \to 0$, la fonction $f$ est dite **dérivable en $a$**, et cette limite est le nombre dérivé $f'(a)$ :

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

## 2. Équation de la tangente

La **tangente** à la courbe représentative $\mathcal{C}_f$ au point $A(a ; f(a))$ est la droite de pente $f'(a)$ passant par $A$. Son équation est :

$$y = f'(a)(x - a) + f(a)$$

## 3. Lien entre signe de la dérivée et variations

* Si $f'(x) > 0$ pour tout $x \in I$, alors $f$ est **strictement croissante** sur $I$.
* Si $f'(x) < 0$ pour tout $x \in I$, alors $f$ est **strictement décroissante** sur $I$.
* Si $f'(x) = 0$ pour tout $x \in I$, alors $f$ est **constante** sur $I$.
