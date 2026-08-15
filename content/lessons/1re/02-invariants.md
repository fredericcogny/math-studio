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
  - en: coloring argument
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
tieredExercises:
  - id: "1re-invariants-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Prove algebraically that the sum of two odd integers is even."
    solution: "Write the odd integers as $2a+1$ and $2b+1$. Their sum is $(2a+1)+(2b+1)=2(a+b+1)$, which is twice an integer and is therefore even."
    hints:
      - "Represent arbitrary odd integers using two integer variables."
    assessment:
      kind: "reasoning"
      rubric:
        - "Writes arbitrary odd integers in the form $2a+1$ and $2b+1$."
        - "Factors their sum as twice an integer."
  - id: "1re-invariants-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "A board has $20$ white squares and $18$ black squares. Every domino covers exactly one white and one black square. Can dominoes cover the whole board? Prove your answer."
    solution: "Each domino removes one square of each colour, so the difference between the numbers of white and black uncovered squares remains $20-18=2$. A fully covered board would have difference $0$. Therefore a complete domino tiling is impossible."
    hints:
      - "Track the difference between the two colour counts."
      - "Ask what that difference would be after a complete tiling."
    assessment:
      kind: "reasoning"
      rubric:
        - "Identifies the colour-count difference as invariant under placing a domino."
        - "Compares its initial value $2$ with the value $0$ required by a full tiling."
  - id: "1re-invariants-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "An $8\\times8$ chessboard has two opposite corners removed. Prove that the remaining $62$ squares cannot be tiled by $31$ dominoes, each covering two edge-adjacent squares."
    solution: "Colour the board as a chessboard. Opposite corners of an $8\\times8$ board have the same colour, so removing them leaves $30$ squares of that colour and $32$ of the other. Every edge-adjacent domino covers one square of each colour. Thus $31$ dominoes would have to cover $31$ squares of each colour, which is impossible with counts $30$ and $32$."
    hints:
      - "Use the standard two-colouring of a chessboard."
      - "Determine whether opposite corners have the same or different colours."
    assessment:
      kind: "reasoning"
      rubric:
        - "Uses a checkerboard colouring and notes that each domino covers one square of each colour."
        - "Correctly obtains remaining colour counts $30$ and $32$."
        - "Uses the mismatch to prove impossibility."
  - id: "1re-invariants-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Start from the integer pair $(1,0)$. A move replaces $(x,y)$ by either $(x+y,x-y)$ or $(x-y,x+y)$. Prove that no sequence of moves can reach $(2026,2027)$."
    solution: "Track the nonlinear quantity $Q=x^2+y^2$. Under either move it becomes $(x+y)^2+(x-y)^2=2(x^2+y^2)=2Q$. Initially $Q=1$, so after $n$ moves $Q=2^n$. At the proposed target, $Q=2026^2+2027^2$, which is odd because one square is even and the other is odd, and it is greater than $1$. But $2^0=1$, while $2^n$ is even for every $n\\ge1$. Hence the target value cannot equal $2^n$, so the target pair is unreachable."
    hints:
      - "Expand $(x+y)^2+(x-y)^2$."
      - "Determine the value of $x^2+y^2$ after $n$ moves."
      - "Use parity at the target; no large numerical calculation is needed."
    assessment:
      kind: "reasoning"
      rubric:
        - "Discovers and tracks the quantity $x^2+y^2$."
        - "Proves that each move doubles it, so its value is $2^n$."
        - "Uses parity and size to show the target's value is not a power of $2$."
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

## A coloring argument

Remove two opposite corners from a chessboard. Those corners have the same colour. Every domino covers one square of each colour, but the damaged board has unequal colour counts. Tiling is therefore impossible.

### Olympiad workflow

1. Compute small cases, looking for structure rather than evidence.
2. List quantities affected by one move.
3. Find one that is preserved or changes monotonically.
4. State explicitly why every move preserves it.
5. Compare the initial and target states.
