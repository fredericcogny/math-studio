---
id: 3e-modular-patterns
order: 16
title: Clock arithmetic and invariants
level: 3e
strand: Arithmetic and proof
difficulty: olympiad
estimatedMinutes: 30
summary: Use remainders to compress large calculations and discover quantities that cannot change.
objectives:
  - Calculate modulo n
  - Detect a cycle
  - Use an invariant to prove impossibility
prerequisites:
  - Euclidean division
  - Integer powers
vocabulary:
  - en: congruent
    fr: congru
    definition: Two integers with the same remainder for a chosen divisor.
  - en: invariant
    fr: invariant
    definition: A property or quantity unchanged by the allowed operations.
  - en: residue
    fr: résidu
    definition: A possible remainder considered in modular arithmetic.
flashcards:
  - front: What does a ≡ b (mod n) mean?
    back: a and b have the same remainder when divided by n; equivalently, n divides a-b.
  - front: What are the possible residues modulo 3?
    back: 0, 1, and 2.
  - front: Why are cycles useful for large powers?
    back: Once residues repeat, only the exponent's position in the cycle matters.
generator:
  type: remainder
  seed: 31402
  count: 7
  divisorMin: 4
  divisorMax: 13
  quotientMin: 20
  quotientMax: 90
tieredExercises:
  - id: "3e-modular-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "stretch"
    prompt: "Find the remainder of $3^5$ when divided by $7$."
    solution: "$3^2\\equiv2\\pmod7$, $3^4\\equiv4\\pmod7$, and $3^5\\equiv12\\equiv5\\pmod7$. The remainder is $5$."
    hints:
      - "Reduce after each multiplication instead of calculating a large number."
    assessment:
      kind: "numeric"
      expected: 5
  - id: "3e-modular-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "stretch"
    prompt: "Determine the last digit of $7^{2026}$ by finding and using the cycle of last digits of powers of $7$."
    solution: "The last digits cycle as $7,9,3,1$ with period $4$. Since $2026=4\\times506+2$, the exponent is in the second position of the cycle. The last digit is $9$."
    hints:
      - "Compute the last digits of $7^1,7^2,7^3,7^4$."
      - "Divide $2026$ by the cycle length."
    assessment:
      kind: "numeric"
      expected: 9
  - id: "3e-modular-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "A token starts on $2$. Each move either adds $6$ or subtracts $9$. Can the token ever land on $100$? Prove your answer without listing paths."
    solution: "Both allowed changes are divisible by $3$, so the token's remainder modulo $3$ is invariant. It starts with remainder $2$, whereas $100$ has remainder $1$. Therefore the token can never land on $100$."
    hints:
      - "Find a divisor common to both possible changes."
      - "Compare the start and target modulo that divisor."
    assessment:
      kind: "reasoning"
      rubric:
        - "Identifies remainder modulo $3$ as an invariant."
        - "Shows that both moves preserve this remainder."
        - "Compares the distinct residues of $2$ and $100$ to prove impossibility."
  - id: "3e-modular-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Six integers $a_1,a_2,\\ldots,a_6$ are written around a circle, initially $(1,0,0,0,0,0)$. A move chooses two neighboring entries and adds $1$ to both. Prove that it is impossible for all six entries ever to become equal."
    solution: "Consider the alternating sum $S=a_1-a_2+a_3-a_4+a_5-a_6$. Any neighboring pair consists of one entry with a plus sign and one with a minus sign, including the pair $a_6,a_1$. Adding $1$ to both therefore changes $S$ by $1-1=0$, so $S$ is invariant. Initially $S=1$. If all six entries were equal to $k$, then $S=k-k+k-k+k-k=0$. Since the invariant cannot change from $1$ to $0$, equality is impossible."
    hints:
      - "Ordinary sum and parity do not immediately separate the states; try a weighted sum."
      - "Give alternating signs to consecutive positions around the even cycle."
    assessment:
      kind: "reasoning"
      rubric:
        - "Defines a suitable alternating-sum invariant."
        - "Proves that every neighboring-pair move preserves it, including the wraparound pair."
        - "Shows that its initial value is $1$ but any all-equal state has value $0$."
---
## Numbers on a clock

Modulo $n$, numbers are grouped by their remainder after division by $n$. We write

$$a \equiv b \pmod n$$

when $a$ and $b$ belong to the same group. For example, $38\equiv 3\pmod 7$ because both leave remainder $3$.

You may add and multiply congruences:

$$a\equiv b\pmod n \implies a+c\equiv b+c\pmod n$$

and

$$ac\equiv bc\pmod n.$$

## Large powers become small cycles

Look at powers of $2$ modulo $5$:

$$2,\ 4,\ 3,\ 1,\ 2,\ 4,\ 3,\ 1,\ldots$$

The cycle has length four. To find the final digit class of $2^{101}$ modulo $5$, only the remainder of $101$ upon division by $4$ matters.

## Invariants prove impossibility

Suppose a move always changes a number by a multiple of $3$. Its remainder modulo $3$ never changes. If a puzzle asks us to reach a number with a different remainder, the task is impossible, no matter how many moves we try.

> An invariant replaces “I tried and failed” with a proof that every possible attempt must fail.

### Optional olympiad extension

A token starts at $2$. A move either adds $6$ or subtracts $9$. Can it ever land on $100$? Find a modulus that both moves preserve, then compare the start and target.
