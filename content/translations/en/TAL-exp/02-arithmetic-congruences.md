---
id: "tal-exp-arithmetic"
locale: "en"
title: "Arithmetic, Congruences, Bézout's Identity, and Euclid's Lemma"
strand: "Advanced Mathematics"
summary: "Divisibility in Z, Euclidean division, congruences modulo n, GCDs, Bézout's identity, Euclid's lemma, and Diophantine equations."
objectives:
  - "Perform calculations with congruences modulo n"
  - "Calculate the GCD using the Euclidean algorithm and find Bézout coefficients"
  - "Solve Diophantine equations ax + by = c and apply Euclid's lemma"
prerequisites:
  - "Euclidean division in N and properties of integers"
vocabulary:
  - en: "Congruence"
    definition: "Two integers a and b are congruent modulo n (a equiv b [n]) if n divides their difference (a - b)."
  - en: "Bézout's identity"
    definition: "Two integers a and b are coprime if and only if there exist u, v in Z such that a*u + b*v = 1."
flashcards:
  - front: "What does Euclid's lemma state?"
    back: "If a divides the product b * c and a is coprime to b, then a divides c."
  - front: "How do we calculate the GCD of two integers using the Euclidean algorithm?"
    back: "By performing successive Euclidean divisions until reaching the last nonzero remainder."
exercises:
  - id: "tal-ari-t1"
    tierTitle: "Direct Application"
    prompt: "Find the least nonnegative residue of $7^{23}$ modulo $10$."
    solution: "The powers of $7$ modulo $10$ cycle as $7,9,3,1$ with period $4$. Since $23\\equiv3\\pmod4$, $7^{23}\\equiv7^3\\equiv3\\pmod{10}$."
    hints:
      - "List the first few powers of $7$ modulo $10$."
  - id: "tal-ari-t2"
    tierTitle: "Standard Practice"
    prompt: "Use the extended Euclidean algorithm to find $\\gcd(252,198)$ and one pair $(u,v)$ such that $252u+198v=\\gcd(252,198)$."
    solution: "$252=198+54$, $198=3\\cdot54+36$, and $54=36+18$, so the GCD is $18$. Back-substitution gives $18=54-36=4\\cdot54-198=4\\cdot252-5\\cdot198$. Thus $(u,v)=(4,-5)$."
    hints:
      - "Continue Euclidean divisions to the last nonzero remainder."
      - "Back-substitute each remainder in reverse order."
    rubric:
      - "Carries the Euclidean algorithm to the GCD $18$."
      - "Back-substitutes correctly to produce valid Bézout coefficients."
      - "Verifies that the reported pair satisfies $252u+198v=18$."
  - id: "tal-ari-t3"
    tierTitle: "Synthesis"
    prompt: "Determine all integer solutions of the Diophantine equation $84x+30y=6$."
    solution: "Dividing by $6$ gives $14x+5y=1$. One solution is $(x_0,y_0)=(-1,3)$. Since $\\gcd(14,5)=1$, all solutions are $x=-1+5k$ and $y=3-14k$, where $k\\in\\mathbb Z$. Substitution gives $14(-1+5k)+5(3-14k)=1$, confirming the family."
    hints:
      - "First divide the equation by the GCD of its coefficients."
      - "From one solution, add a multiple of one reduced coefficient and subtract a multiple of the other."
    rubric:
      - "Reduces the equation correctly and finds one integer solution."
      - "Gives a valid complete one-parameter family of solutions."
      - "Verifies the family by substitution and justifies completeness."
  - id: "tal-ari-t4"
    tierTitle: "Advanced Challenge"
    prompt: "Using the Chinese remainder theorem, determine and justify all residue classes $x\\pmod{120}$ satisfying $x^2\\equiv1\\pmod{120}$."
    solution: "Since $120=8\\cdot3\\cdot5$ with pairwise coprime factors, the Chinese remainder theorem reduces the problem to modulo $8$, $3$, and $5$. Modulo $8$, every odd class squares to $1$, giving four choices; modulo $3$ and modulo $5$, the solutions are independently $\\pm1$, giving two choices each. The Chinese remainder theorem therefore gives $4\\cdot2\\cdot2=16$ classes. Solving the systems yields $x\\equiv1,11,19,29,31,41,49,59,61,71,79,89,91,101,109,119\\pmod{120}$, and direct squaring verifies each class."
    hints:
      - "Factor $120$ into pairwise coprime prime powers."
      - "Solve the square-root equation modulo $8$, $3$, and $5$, then combine choices using the Chinese remainder theorem."
    rubric:
      - "Reduces the congruence correctly modulo $8$, $3$, and $5$."
      - "Finds four, two, and two local solutions, respectively, and invokes uniqueness in the Chinese remainder theorem."
      - "Lists exactly the 16 correct classes modulo $120$ and justifies completeness."
---

# Arithmetic, Congruences, Bézout's Identity, and Euclid's Lemma

**Arithmetic** studies the structural properties of the integers $\mathbb{Z}$.

## 1. Euclidean Division and Congruences

For every $a \in \mathbb{Z}$ and $b \in \mathbb{N}^*$, there is a unique pair $(q, r) \in \mathbb{Z} \times \mathbb{N}$ such that:

$$a = b q + r \quad \text{with } 0 \le r < b$$

Two integers $a$ and $b$ are **congruent modulo $n$** ($n \ge 2$) if $n$ divides $a - b$, denoted:

$$a \equiv b \pmod n$$

Congruences are compatible with addition, subtraction, and multiplication.

## 2. GCD and the Euclidean Algorithm

The **greatest common divisor** of $a$ and $b$, denoted $\gcd(a, b)$, is calculated using the **Euclidean algorithm** (successive Euclidean divisions until the last nonzero remainder).

Two integers are **coprime** if $\gcd(a, b) = 1$.

## 3. Bézout's Identity and Euclid's Lemma

* **Bézout's identity**: $a$ and $b$ are coprime if and only if there exists $(u, v) \in \mathbb{Z}^2$ such that:
  $$a u + b v = 1$$
* **Euclid's lemma**: If $a$ divides $b c$ and $\gcd(a, b) = 1$, then $a$ divides $c$.
