---
id: "tal-exp-arithmetic"
order: 2
title: "Arithmétique, Congruences & Bézout/Gauss"
level: "TAL-exp"
strand: "Mathématiques Expertes"
difficulty: "stretch"
estimatedMinutes: 40
summary: "Divisibilité dans Z, division euclidienne, congruences modulo n, PGCD, théorème de Bézout, théorème de Gauss et équations diophantiennes."
objectives:
  - "Effectuer des calculs de congruences modulo n"
  - "Calculer le PGCD par l'algorithme d'Euclide et trouver les coefficients de Bézout"
  - "Résoudre des équations diophantiennes ax + by = c et appliquer le théorème de Gauss"
prerequisites:
  - "Division euclidienne dans N et propriétés des entiers"
vocabulary:
  - en: "Congruence"
    fr: "Congruence"
    definition: "Deux entiers a et b sont congrus modulo n (a equiv b [n]) si n divise leur différence (a - b)."
  - en: "Bézout's identity"
    fr: "Théorème de Bézout"
    definition: "Deux entiers a et b sont premiers entre eux si et seulement s'il existe u, v dans Z tels que a*u + b*v = 1."
flashcards:
  - front: "Que dit le théorème de Gauss ?"
    back: "Si a divise le produit b * c et si a est premier avec b, alors a divise c."
  - front: "Comment calcule-t-on le PGCD de deux entiers avec l'algorithme d'Euclide ?"
    back: "Par divisions euclidiennes successives jusqu'au dernier reste non nul."
generator:
  type: "remainder"
  seed: 302
  count: 4
  divisorMin: 3
  divisorMax: 15
  quotientMin: 2
  quotientMax: 10
tieredExercises:
  - id: "tal-ari-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Find the least nonnegative residue of $7^{23}$ modulo $10$."
    solution: "The powers of $7$ modulo $10$ cycle as $7,9,3,1$ with period $4$. Since $23\\equiv3\\pmod4$, $7^{23}\\equiv7^3\\equiv3\\pmod{10}$."
    hints:
      - "List the first few powers of $7$ modulo $10$."
    assessment:
      kind: "numeric"
      expected: 3
  - id: "tal-ari-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Use the extended Euclidean algorithm to find $\\gcd(252,198)$ and one pair $(u,v)$ such that $252u+198v=\\gcd(252,198)$."
    solution: "$252=198+54$, $198=3\\cdot54+36$, and $54=36+18$, so the gcd is $18$. Back-substitution gives $18=54-36=4\\cdot54-198=4\\cdot252-5\\cdot198$. Thus $(u,v)=(4,-5)$."
    hints:
      - "Continue Euclidean divisions to the last nonzero remainder."
      - "Back-substitute each remainder in reverse order."
    assessment:
      kind: "reasoning"
      rubric:
        - "Carries the Euclidean algorithm to the gcd $18$."
        - "Back-substitutes correctly to produce valid Bézout coefficients."
        - "Verifies that the reported pair satisfies $252u+198v=18$."
  - id: "tal-ari-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Determine all integer solutions of the Diophantine equation $84x+30y=6$."
    solution: "Dividing by $6$ gives $14x+5y=1$. One solution is $(x_0,y_0)=(-1,3)$. Since $\\gcd(14,5)=1$, all solutions are $x=-1+5k$ and $y=3-14k$, where $k\\in\\mathbb Z$. Substitution gives $14(-1+5k)+5(3-14k)=1$, confirming the family."
    hints:
      - "First divide the equation by the gcd of its coefficients."
      - "From one solution, add a multiple of one reduced coefficient and subtract a multiple of the other."
    assessment:
      kind: "reasoning"
      rubric:
        - "Reduces the equation correctly and finds one integer solution."
        - "Gives a valid complete one-parameter family of solutions."
        - "Verifies the family by substitution and justifies completeness."
  - id: "tal-ari-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "Using the Chinese remainder theorem, determine and justify all residue classes $x\\pmod{120}$ satisfying $x^2\\equiv1\\pmod{120}$."
    solution: "Since $120=8\\cdot3\\cdot5$ with pairwise coprime factors, CRT reduces the problem to modulo $8$, $3$, and $5$. Modulo $8$, every odd class squares to $1$, giving four choices; modulo $3$ and modulo $5$, the solutions are independently $\\pm1$, giving two choices each. CRT therefore gives $4\\cdot2\\cdot2=16$ classes. Solving the systems yields $x\\equiv1,11,19,29,31,41,49,59,61,71,79,89,91,101,109,119\\pmod{120}$, and direct squaring verifies each class."
    hints:
      - "Factor $120$ into pairwise coprime prime powers."
      - "Solve the square-root equation modulo $8$, $3$, and $5$, then combine choices by CRT."
    assessment:
      kind: "reasoning"
      rubric:
        - "Reduces the congruence correctly modulo $8$, $3$, and $5$."
        - "Finds four, two, and two local solutions respectively and invokes CRT uniqueness."
        - "Lists exactly the 16 correct classes modulo $120$ and justifies completeness."
---

# Arithmétique, Congruences & Bézout/Gauss

L'**arithmétique** étudie les propriétés structurelles des entiers relatifs $\mathbb{Z}$.

## 1. Division euclidienne et Congruences

Pour tout $a \in \mathbb{Z}$ et $b \in \mathbb{N}^*$, il existe un unique couple $(q, r) \in \mathbb{Z} \times \mathbb{N}$ tel que :

$$a = b q + r \quad \text{avec } 0 \le r < b$$

Deux entiers $a$ et $b$ sont **congrus modulo $n$** ($n \ge 2$) si $n$ divise $a - b$, noté :

$$a \equiv b \pmod n$$

Les congruences sont compatibles avec l'addition, la soustraction et la multiplication.

## 2. PGCD et Algorithme d'Euclide

Le **Plus Grand Commun Diviseur** de $a$ et $b$, noté $\text{PGCD}(a, b)$, est calculé par l'**algorithme d'Euclide** (divisions euclidiennes successives jusqu'au dernier reste non nul).

Deux entiers sont **premiers entre eux** si $\text{PGCD}(a, b) = 1$.

## 3. Théorèmes de Bézout et de Gauss

* **Théorème de Bézout** : $a$ et $b$ sont premiers entre eux si et seulement s'il existe $(u, v) \in \mathbb{Z}^2$ tels que :
  $$a u + b v = 1$$
* **Théorème de Gauss** : Si $a$ divise $b c$ et si $\text{PGCD}(a, b) = 1$, alors $a$ divise $c$.
