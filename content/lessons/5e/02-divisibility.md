---
id: 5e-divisibility
order: 2
title: Divisibility and factor pairs
level: 5e
strand: Arithmetic and reasoning
difficulty: core
estimatedMinutes: 35
summary: Use the divisibility criteria for 2, 3, 5, 9, and 10, then organize divisors with factor pairs.
objectives:
  - Apply the divisibility criteria for 2, 3, 5, 9, and 10
  - Distinguish divisors, multiples, quotients, and remainders
  - Find all divisors of a whole number using factor pairs
  - Use divisibility and factor pairs in a synthesis problem
prerequisites:
  - Multiplication tables
  - Whole-number division
  - Place value and digit sums
vocabulary:
  - en: divisor
    fr: diviseur
    definition: A whole number that divides another whole number with remainder zero.
  - en: multiple
    fr: multiple
    definition: A number obtained by multiplying a whole number by another whole number.
  - en: remainder
    fr: reste
    definition: What remains after forming as many complete equal groups as possible.
  - en: factor pair
    fr: couple de facteurs
    definition: Two whole numbers whose product is the number being studied.
flashcards:
  - front: State the divisibility criteria for $2$, $5$, and $10$.
    back: The last digit is even for $2$, is $0$ or $5$ for $5$, and is $0$ for $10$.
  - front: State the divisibility criteria for $3$ and $9$.
    back: The sum of the digits is divisible by $3$ or by $9$, respectively.
  - front: How do factor pairs help list every divisor?
    back: Test factors in increasing order and pair each divisor $a$ with the quotient $n\div a$ until the factors meet or cross.
generator:
  type: remainder
  seed: 51202
  count: 6
  divisorMin: 3
  divisorMax: 11
  quotientMin: 4
  quotientMax: 20
tieredExercises:
  - id: "5e-divisibility-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: 'For each of $2,3,5,9,10$, decide whether $4\,590$ is divisible by it. Justify each answer with the appropriate criterion.'
    solution: '$4\,590$ ends in $0$, so it is divisible by $2$, $5$, and $10$. Its digit sum is $4+5+9+0=18$, which is divisible by $3$ and $9$. Therefore $4\,590$ is divisible by all five numbers.'
    hints:
      - "Use the last digit for $2$, $5$, and $10$."
      - "Use the digit sum for $3$ and $9$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly concludes divisibility by all five numbers."
        - "Uses the last digit to justify the criteria for $2$, $5$, and $10$."
        - "Computes the digit sum $18$ and uses it for $3$ and $9$."
  - id: "5e-divisibility-t2"
    tier: 2
    tierTitle: "Factor-Pair Practice"
    curriculumStatus: "core"
    prompt: "List every positive divisor of $84$ by writing its factor pairs. Explain why your list is complete."
    solution: 'Testing every possible first factor from $1$ through $9=\lfloor\sqrt{84}\rfloor$ gives the exact products $1\times84$, $2\times42$, $3\times28$, $4\times21$, $6\times14$, and $7\times12$; $5$, $8$, and $9$ do not divide $84$. The positive divisors are $1,2,3,4,6,7,12,14,21,28,42,84$. Any factor greater than $\sqrt{84}$ must be paired with one smaller than $\sqrt{84}$, so the list is complete.'
    hints:
      - "Start with $1$ and test possible divisors in increasing order."
      - "Each exact division produces two divisors. Stop when the two factors would cross."
    assessment:
      kind: "reasoning"
      rubric:
        - "Finds the six factor pairs without omission or duplication."
        - "Lists exactly the twelve positive divisors."
        - "Explains that testing up to the point where factor pairs cross proves completeness."
  - id: "5e-divisibility-t3"
    tier: 3
    tierTitle: "Official Core Synthesis"
    curriculumStatus: "core"
    prompt: "The three-digit number $3a0$ has tens digit $a$. Find $a$ so that the number is divisible by $2,3,5,9$, and $10$. Then list all factor pairs of the number obtained and justify that the list is complete."
    solution: 'The final digit $0$ guarantees divisibility by $2$, $5$, and $10$. Divisibility by $9$ requires $3+a+0$ to be a multiple of $9$. Since $a$ is a digit, only $3+a=9$ works, so $a=6$ and the number is $360$; divisibility by $9$ also guarantees divisibility by $3$. Its factor pairs are $(1,360)$, $(2,180)$, $(3,120)$, $(4,90)$, $(5,72)$, $(6,60)$, $(8,45)$, $(9,40)$, $(10,36)$, $(12,30)$, $(15,24)$, and $(18,20)$. The first factors were tested in order through $18$, and the next integer is $19>\sqrt{360}$, so every pair has been found.'
    hints:
      - "The last digit settles three of the five criteria."
      - "For divisibility by $9$, study the digit sum $3+a$."
      - "For factor pairs, test possible first factors only until they cross their partners."
    assessment:
      kind: "reasoning"
      rubric:
        - "Uses the criteria to obtain uniquely $a=6$ and the number $360$."
        - "Lists all twelve factor pairs of $360$ correctly."
        - 'Justifies completeness by systematic testing through $18<\sqrt{360}<19$.'
  - id: "5e-divisibility-t4"
    tier: 4
    tierTitle: "Olympiad Residue Challenge"
    curriculumStatus: "olympiad"
    prompt: "Using residue notation, prove that no three perfect squares can have a sum congruent to $7$ modulo $8$."
    solution: 'Every integer is congruent modulo $8$ to one of $0,1,2,3,4,5,6,7$. Squaring these representatives gives $0,1,4,1,0,1,4,1$, so a square is congruent only to $0,1$, or $4$. For an exhaustive check, record how many of the three residues equal $4$. With none, the sum of three residues from $\{0,1\}$ is $0,1,2$, or $3$. With one $4$, it is $4,5$, or $6$. With two $4$s, it is $8$ or $9$, congruent to $0$ or $1$. With three, it is $12$, congruent to $4$. Thus the possible residues are exactly $0,1,2,3,4,5,6$, never $7$.'
    hints:
      - "First find every possible square residue modulo $8$."
      - "For an exhaustive sum argument, separate cases according to the number of residues equal to $4$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Proves that square residues modulo $8$ are only $0,1,4$."
        - "Exhausts the sums by considering zero, one, two, or three occurrences of $4$."
        - "Concludes rigorously that residue $7$ is impossible."
---
## Divisors and Multiples

For whole numbers $a$ and $n$, $a$ is a **divisor** of $n$ when the division of $n$ by $a$ has remainder zero. Equivalently, there is a whole number $q$ such that

$$n=a\times q.$$

Then $n$ is a **multiple** of $a$. For example, $7$ divides $42$ because $42=7\times6$. The number $42$ is a multiple of $7$, and $7$ is a divisor of $42$.

Euclidean division writes

$$n=dq+r\qquad\text{with}\qquad 0\le r<d.$$

Divisibility means precisely that $r=0$.

## Core Divisibility Criteria

The decimal notation of a whole number gives five essential tests:

- divisible by $2$: its last digit is $0,2,4,6$, or $8$;
- divisible by $5$: its last digit is $0$ or $5$;
- divisible by $10$: its last digit is $0$;
- divisible by $3$: the sum of its digits is divisible by $3$;
- divisible by $9$: the sum of its digits is divisible by $9$.

For $7\,290$, the last digit shows divisibility by $2$, $5$, and $10$. The digit sum is $7+2+9+0=18$, so the number is also divisible by $3$ and $9$.

> A criterion is an equivalence: it can justify both a “yes” and a “no.” A number divisible by $9$ is automatically divisible by $3$, but the converse is not always true.

## Factor Pairs and Complete Lists

A factor pair of $n$ is a pair of positive whole numbers whose product is $n$. For $60$:

$$1\times60,\quad2\times30,\quad3\times20,\quad4\times15,\quad5\times12,\quad6\times10.$$

These pairs give every positive divisor of $60$:

$$1,2,3,4,5,6,10,12,15,20,30,60.$$

To prove a list complete, test possible first factors in increasing order. Once the first factor would exceed the second, every later pair is just a reversed pair already recorded. For a perfect square, the equal pair, such as $6\times6$ for $36$, is written only once.

## Core Problem-Solving Routine

Identify the criterion requested, show the relevant last digit or digit sum, and state the conclusion. For divisor lists, write factor pairs systematically and explain where the factors meet or cross. Examples alone do not prove that a list is complete.

## Stretch Only: Residues and Proofs

Residue notation compresses a remainder statement. The expression

$$n\equiv2\pmod5$$

means that dividing $n$ by $5$ leaves remainder $2$. This notation and proofs that classify all residue cases are stretch material here; they are not required for the core divisibility criteria or factor-pair exercises.

For example, every integer is congruent to $0,1$, or $2$ modulo $3$. Their squares are congruent to $0,1$, and $1$, respectively. Such an exhaustive residue check can establish a statement for every integer and is the method used in T4.
