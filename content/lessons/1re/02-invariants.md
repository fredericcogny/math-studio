---
id: 1re-invariants
order: 2
title: Proof through parity and invariants
level: 1re
strand: Advanced problem solving
difficulty: olympiad
estimatedMinutes: 35
summary: Learn to search for what remains unchanged when a process appears too large to simulate.
objectives:
  - Formalise parity
  - Select a useful invariant
  - Prove impossibility
prerequisites:
  - Algebraic proof
  - Modular arithmetic basics
vocabulary:
  - en: parity
    fr: parité
    definition: Whether an integer is even or odd.
  - en: invariant
    fr: invariant
    definition: Information preserved by every allowed transformation.
  - en: colouring argument
    fr: argument de coloriage
    definition: A proof that tracks categories assigned by a colouring, often on a board.
flashcards:
  - front: How do you represent an arbitrary even integer?
    back: 2k for some integer k.
  - front: How do you represent an arbitrary odd integer?
    back: 2k+1 for some integer k.
  - front: What is the first invariant question to ask?
    back: Which simple quantity changes predictably, or does not change at all, under every legal move?
generator:
  type: remainder
  seed: 11602
  count: 7
  divisorMin: 5
  divisorMax: 17
  quotientMin: 40
  quotientMax: 150
---
## Why simulation is sometimes the wrong tool

In a process with many possible moves, checking paths one by one cannot prove impossibility. An **invariant** compresses every path into one argument.

Start with simple candidates:

- parity;
- remainder modulo a small integer;
- sum or product;
- a weighted sum;
- a colouring of positions.

## Parity as algebra

An even integer is $2k$ and an odd integer is $2k+1$. Therefore the square of an odd integer is

$$(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1,$$

which is odd. This proves the statement for every odd integer, not just tested examples.

## Choose an invariant from the moves

If every allowed move changes a total by either $+8$ or $-12$, both changes are multiples of $4$. The total modulo $4$ is invariant. A starting total congruent to $1$ modulo $4$ can never become a target congruent to $2$ modulo $4$.

The moves suggest the modulus: look for a common divisor of their changes.

> A useful invariant separates the initial and desired states while being preserved by every legal move.

## A colouring argument

Remove two opposite corners from a chessboard. Those corners have the same colour. Every domino covers one square of each colour, but the damaged board has unequal colour counts. Tiling is therefore impossible.

### Olympiad workflow

1. Compute small cases, looking for structure rather than evidence.
2. List quantities affected by one move.
3. Find one that is preserved or changes monotonically.
4. State explicitly why every move preserves it.
5. Compare the initial and target states.
