---
id: 5e-algorithmic-thinking
order: 12
title: Block algorithms, formulas, and loops
level: 5e
strand: Algorithmics and programming
difficulty: core
estimatedMinutes: 40
summary: Execute block sequences, identify inputs and outputs, use parameters, evaluate formulas, and trace fixed unconditional loops.
objectives:
  - Execute and write ordered sequences of blocks
  - Identify inputs, outputs, and parameters
  - Evaluate a formula from supplied input values
  - Trace an unconditional loop repeated a fixed number of times
prerequisites:
  - Use signed coordinates
  - Substitute numbers into a formula
  - Recognize repeated movement patterns
vocabulary:
  - en: algorithm
    fr: algorithme
    definition: A finite, ordered sequence of unambiguous instructions for completing a task.
  - en: input
    fr: entrée
    definition: Data supplied to an algorithm before or during its execution.
  - en: output
    fr: sortie
    definition: A result produced or displayed by an algorithm.
  - en: parameter
    fr: paramètre
    definition: A named input that controls how a block or algorithm behaves.
  - en: unconditional loop
    fr: boucle inconditionnelle
    definition: A loop that repeats its whole block a fixed number of times without a test.
flashcards:
  - front: Why does block order matter?
    back: Each block acts on the state left by the preceding blocks, so changing the order can change the output.
  - front: What is the difference between an input and an output?
    back: An input is supplied to the algorithm; an output is produced by it.
  - front: What is a parameter?
    back: A named input, such as a distance or repetition count, that changes a block's behavior.
  - front: How many times does an unconditional `repeat 4 times` loop execute its body?
    back: Exactly four times.
generator:
  type: signed-arithmetic
  seed: 51210
  count: 6
  min: -10
  max: 10
tieredExercises:
  - id: 5e-algorithmic-thinking-t1
    tier: 1
    tierTitle: Core Block Sequence
    curriculumStatus: core
    prompt: >-
      A robot starts at $(-2,3)$ facing right. Execute these blocks in order: move forward $5$ units; turn right $90^\circ$; move forward $2$ units. Give its final coordinates and direction.
    solution: >-
      The first move changes the point to $(3,3)$. Turning right makes the robot face down, and the second move changes only the vertical coordinate to $3-2=1$. It finishes at $(3,1)$ facing down.
    hints:
      - Execute one block at a time and keep the current direction.
      - A downward move subtracts from the vertical coordinate.
    assessment:
      kind: exact
      expected: "(3,1), down"
      accepted:
        - "(3, 1), down"
        - "(3,1) facing down"
  - id: 5e-algorithmic-thinking-t2
    tier: 2
    tierTitle: Inputs, Outputs, and Formula Evaluation
    curriculumStatus: core
    prompt: >-
      An algorithm takes rectangle length $L$ and width $W$ as input parameters. It outputs $P=2(L+W)$ and $A=LW$. Identify the inputs and outputs, then evaluate both outputs for $L=4.5$ cm and $W=3$ cm.
    solution: >-
      The input parameters are $L$ and $W$; the outputs are perimeter $P$ and area $A$. Substitution gives $P=2(4.5+3)=2\times7.5=15$ cm and $A=4.5\times3=13.5\text{ cm}^2$.
    hints:
      - Inputs are supplied values; outputs are calculated results.
      - Substitute before performing operations in the formula order.
    assessment:
      kind: reasoning
      rubric:
        - "Identifies $L,W$ as inputs and $P,A$ as outputs."
        - "Evaluates $P=15$ cm correctly."
        - 'Evaluates $A=13.5\text{ cm}^2$ with the correct unit.'
  - id: 5e-algorithmic-thinking-t3
    tier: 3
    tierTitle: Official Core Synthesis
    curriculumStatus: core
    prompt: >-
      A custom block `staircase(n, a)` starts a robot at $(0,0)$ and repeats exactly $n$ times, without any condition: move $a$ units right, then move $1$ unit up. For inputs $n=4$ and $a=2.5$, list the endpoint after each repetition, give the final output, and write formulas for the final coordinates and total distance for any positive whole number $n$.
    solution: >-
      The endpoints are $(2.5,1)$, $(5,2)$, $(7.5,3)$, and $(10,4)$, so the output is $(10,4)$. Each repetition adds $a$ horizontally and $1$ vertically, hence after $n$ repetitions the coordinates are $(na,n)$. Each repetition travels $a+1$ units, so total distance is $n(a+1)$. For $n=4,a=2.5$, this is $4\times3.5=14$ units.
    hints:
      - One full repetition contains both moves.
      - Replace repeated addition of $a$ by multiplication by $n$.
      - Distance traveled is not the same as either final coordinate.
    assessment:
      kind: reasoning
      rubric:
        - "Lists all four endpoints and obtains $(10,4)$."
        - "Identifies $n,a$ as parameters and the final point as an output."
        - "Derives final coordinates $(na,n)$ and distance $n(a+1)$, then evaluates $14$."
  - id: 5e-algorithmic-thinking-t4
    tier: 4
    tierTitle: Olympiad Invariant Challenge
    curriculumStatus: olympiad
    prompt: >-
      A robot starts at $(0,0)$. Every instruction is either $P:(x,y)\leftarrow(x+2,y+1)$ or $Q:(x,y)\leftarrow(x-1,y+2)$. Prove that no sequence reaches $(2,8)$. Then find a shortest sequence reaching $(1,8)$ and prove it is shortest.
    solution: >-
      Let $I=2x+y$. Initially $I=0$. Instruction $P$ changes $I$ by $2\times2+1=5$, while $Q$ changes it by $2(-1)+2=0$. Thus $I$ remains divisible by $5$. At $(2,8)$, $I=12$, so the point is unreachable. For $(1,8)$, if $p,q$ count the two instructions, then $2p-q=1$ and $p+2q=8$. Solving gives $p=2,q=3$, so every reaching sequence has five instructions. The sequence $PPQQQ$ reaches $(1,8)$, and the forced counts prove no shorter sequence can do so.
    hints:
      - Compute how each command changes $2x+y$.
      - For minimality, count commands rather than testing every order.
    assessment:
      kind: reasoning
      rubric:
        - "Proves the invariant that $2x+y$ is divisible by $5$."
        - "Uses it to rule out $(2,8)$."
        - "Solves for two $P$ and three $Q$ commands and gives a valid sequence."
        - "Uses the forced command counts to prove minimality."
---
## Ordered Block Sequences

An algorithm is finite, ordered, and unambiguous. A block sequence must state its initial situation and every required action. For a drawing robot, `move 5` before `turn right 90 degrees` is not the same as turning first.

Trace a sequence one block at a time. Record position, direction, displayed value, or any other state that can affect the next block.

## Signed Coordinates

Coordinates may be signed whole or decimal numbers. The sign locates a number relative to zero; it is not part of its distance from zero. The **absolute value** is that distance, so $|-2.5|=2.5$. In $(x,y)$, $x$ is read first and controls horizontal position; $y$ controls vertical position.

## Inputs, Outputs, and Parameters

An **input** is supplied to an algorithm, while an **output** is produced by it. In

```text
ask for length L
ask for width W
display 2 × (L + W)
```

$L$ and $W$ are input parameters and the displayed perimeter is the output. A parameter is a named input that lets one general block handle many cases: `move(distance)` behaves differently when `distance` is $3$ or $7$.

## Evaluating Formulas

An algorithm can calculate an output by substituting input values into a formula. Keep parentheses and operation order visible. For $L=6$ and $W=2.5$,

$$2(L+W)=2(6+2.5)=17.$$

Attach a meaningful unit to a mathematical output. A formula should name what each input and output represents, not merely produce an unexplained number.

## Core Unconditional Loops

A fixed repeat block is unconditional: it executes the whole body the stated number of times and performs no test.

```text
repeat 4 times
  move 3 steps
  turn left 90 degrees
```

Both indented blocks execute four times. First understand one complete repetition, then make one trace row per repetition. If a movement of $a$ is repeated $n$ times in the same direction, the total movement is $na$.

## Core Debugging Checklist

Check the initial state, block order, input values, formula parentheses, the number of complete repetitions, and the requested output. Test a small case such as one repetition before generalizing.

## Stretch Only: Python Assignment and Conditions

Python-style mutation and conditional execution are explicitly stretch material here. An assignment such as

```python
x = x + 3
```

evaluates the right side using the old value, then replaces the stored value of `x`. It is not an algebraic equality. A conditional such as `if x < 0:` may or may not execute its body and therefore is not an unconditional loop. Boundary cases, including $x=0$, must be tested.

## Olympiad/T4 Only: Invariants

An invariant is a property preserved by every allowed step. To prove one, verify it initially, prove every command preserves it, and show that an impossible target violates it. This proof method and command-count minimality are reserved for the olympiad T4 task, not required in core T1-T3.
