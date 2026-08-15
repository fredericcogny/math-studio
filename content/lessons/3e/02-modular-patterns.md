---
id: 3e-modular-patterns
order: 2
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

### Olympiad prompt

A token starts at $1$. A move either adds $6$ or subtracts $9$. Can it ever land on $100$? Find a modulus that both moves preserve, then compare the start and target.
