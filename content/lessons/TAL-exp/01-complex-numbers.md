---
id: "tal-exp-complex"
order: 1
title: "Nombres Complexes - Formes & Géométrie"
level: "TAL-exp"
strand: "Mathématiques Expertes"
difficulty: "stretch"
estimatedMinutes: 40
summary: "Découvrir le corps des nombres complexes, la forme algébrique, le module, l'argument et l'interprétation géométrique."
objectives:
  - "Manipuler l'unité imaginaire i t.q. i^2 = -1"
  - "Passer de la forme algébrique a + ib à la forme exponentielle r e^(i theta)"
  - "Résoudre des équations polynomiales dans C et utiliser les complexes en géométrie"
prerequisites:
  - "Trigonométrie dans le cercle et géométrie vectorielle"
vocabulary:
  - en: "Complex conjugate"
    fr: "Nombre complexe conjugué"
    definition: "Le conjugué de z = a + ib est bar(z) = a - ib."
  - en: "Modulus"
    fr: "Module"
    definition: "La distance de l'origine au point image M(z), donnée par |z| = sqrt(a^2 + b^2)."
flashcards:
  - front: "Quelle est la forme exponentielle d'un nombre complexe de module r et d'argument theta ?"
    back: "z = r e^(i theta) = r (cos theta + i sin theta)"
  - front: "Que vaut |z|^2 en fonction de z et de son conjugué bar(z) ?"
    back: "|z|^2 = z * bar(z)"
generator:
  type: "quadratic-value"
  seed: 301
  count: 4
  coefficientMin: 1
  coefficientMax: 3
  xMin: -2
  xMax: 4
tieredExercises:
  - id: "tal-cpx-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Write $\\frac{3+4i}{1-i}$ in algebraic form."
    solution: "Multiply numerator and denominator by $1+i$: $\\frac{(3+4i)(1+i)}{(1-i)(1+i)}=\\frac{-1+7i}{2}=-\\frac12+\\frac72i$."
    hints:
      - "Multiply by the conjugate of the denominator."
    assessment:
      kind: "exact"
      expected: "-1/2+(7/2)i"
      accepted:
        - "(-1+7i)/2"
  - id: "tal-cpx-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Using exponential form, compute the exact value of $z^6$ for $z=-2+2\\sqrt3i$."
    solution: "The modulus is $\\sqrt{4+12}=4$. Since the point lies in quadrant II with reference angle $\\pi/3$, an argument is $2\\pi/3$. Thus $z=4e^{2i\\pi/3}$ and, by de Moivre's formula, $z^6=4^6e^{4i\\pi}=4096$."
    hints:
      - "Compute the modulus and identify the quadrant before choosing the argument."
      - "Raise the modulus and multiply the argument by 6."
    assessment:
      kind: "numeric"
      expected: 4096
  - id: "tal-cpx-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Solve $z^3=8i$ in $\\mathbb C$. Give the roots in algebraic form and describe the geometry of their images in the complex plane."
    solution: "Since $8i=8e^{i(\\pi/2+2m\\pi)}$, the roots have modulus $2$ and arguments $\\pi/6+2k\\pi/3$ for $k=0,1,2$. They are $\\sqrt3+i$, $-\\sqrt3+i$, and $-2i$. Their images lie on the circle of centre $O$ and radius $2$, with successive angular gaps $2\\pi/3$; therefore they are the vertices of an equilateral triangle centred at $O$."
    hints:
      - "For cube roots, take the cube root of the modulus and divide all arguments by 3."
      - "Use arguments separated by $2\\pi/3$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Finds all three roots with modulus $2$ and the correct arguments."
        - "Converts the roots correctly to algebraic form."
        - "Uses equal angular spacing to prove the images form an equilateral triangle centered at $O$."
  - id: "tal-cpx-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "Let $\\zeta=e^{2i\\pi/3}$ and $N\\in\\mathbb N$. First prove the roots-of-unity filter $1+\\zeta^m+\\zeta^{2m}=3$ when $3\\mid m$ and $0$ otherwise. Use it with the binomial theorem to derive a formula for $\\sum_{\\substack{0\\leq k\\leq N\\\\3\\mid k}}\\binom{N}{k}$, then evaluate $\\binom{12}{0}+\\binom{12}{3}+\\binom{12}{6}+\\binom{12}{9}+\\binom{12}{12}$ without adding the five coefficients individually."
    solution: "If $3\\mid m$, every term in the filter is $1$. Otherwise $q=\\zeta^m$ is a nontrivial cube root of unity, so $1+q+q^2=(q^3-1)/(q-1)=0$. Expand $(1+\\zeta^j)^N=\\sum_k\\binom Nk\\zeta^{jk}$ for $j=0,1,2$ and sum over $j$. The filter keeps exactly those terms with $3\\mid k$, each with factor $3$, hence $\\sum_{3\\mid k}\\binom Nk=\\frac13\\left(2^N+(1+\\zeta)^N+(1+\\zeta^2)^N\\right)$. Since $1+\\zeta=e^{i\\pi/3}$ and $1+\\zeta^2=e^{-i\\pi/3}$, for $N=12$ both powers equal $1$. The required sum is $(2^{12}+2)/3=1366$."
    hints:
      - "Sum the three binomial expansions for $1$, $\\zeta$, and $\\zeta^2$."
      - "The inner coefficient of $\\binom Nk$ is exactly the roots-of-unity filter."
    assessment:
      kind: "reasoning"
      rubric:
        - "Proves the three-term roots-of-unity filter for every integer $m$."
        - "Combines three binomial expansions to isolate indices divisible by $3$."
        - "Derives the general filtered-sum formula before substituting $N=12$."
        - "Evaluates the conjugate powers correctly and obtains $1366$."
---

# Nombres Complexes

L'ensemble des **nombres complexes**, noté $\mathbb{C}$, étend l'ensemble des réels $\mathbb{R}$ en introduisant le nombre imaginaire $i$ tel que :

$$i^2 = -1$$

## 1. Forme algébrique et conjugué

Tout nombre complexe $z \in \mathbb{C}$ s'écrit de manière unique sous **forme algébrique** :

$$z = a + i b \quad (a, b \in \mathbb{R})$$

* $a = \text{Re}(z)$ est la **partie réelle**.
* $b = \text{Im}(z)$ est la **partie imaginaire**.
* Le **conjugué** de $z$ est $\bar{z} = a - i b$.

Propriété remarquable : $z \bar{z} = (a+ib)(a-ib) = a^2 + b^2 = |z|^2$.

## 2. Forme trigonométrique et exponentielle

Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, chaque complexe $z \neq 0$ est associé au point image $M(a ; b)$.

* **Module** : $|z| = \sqrt{a^2 + b^2} = OM$
* **Argument** : $\arg(z) \equiv \theta \pmod{2\pi}$ tel que $\cos\theta = \frac{a}{|z|}$ et $\sin\theta = \frac{b}{|z|}$.

Forme trigonométrique et formule d'Euler :

$$z = |z| (\cos\theta + i\sin\theta) = |z| e^{i\theta}$$

avec $e^{i\theta} = \cos\theta + i\sin\theta$.

## 3. Formules de Moivre et d'Euler

Pour tout $\theta \in \mathbb{R}$ et $n \in \mathbb{Z}$ :

* **Formule de Moivre** : $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$
* **Formules d'Euler** :
  $$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \quad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$
