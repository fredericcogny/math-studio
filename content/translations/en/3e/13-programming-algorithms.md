---
id: 3e-programming-algorithms
locale: en
title: Programming and Algorithmic Reasoning
strand: Algorithms and Programming
summary: Trace, design, debug, and justify algorithms using variables, conditions, loops, functions, and edge cases.
objectives:
  - Trace assignments, conditionals, and loops
  - Design and debug functions that combine conditions and loops
  - Prove an algorithm correct using an invariant and termination
prerequisites:
  - Arithmetic expressions and integer division
  - Simple probability
vocabulary:
  - en: variable
    definition: A named storage location whose value may change while an algorithm runs.
  - en: conditional
    definition: An instruction that chooses which block to execute according to a Boolean test.
  - en: loop
    definition: A structure that repeats a block of instructions.
  - en: function
    definition: A named algorithm that receives inputs and returns or produces a result.
  - en: invariant
    definition: A property that remains true before and after every iteration of a loop.
flashcards:
  - front: What does an assignment such as $x\leftarrow x+1$ mean?
    back: Read the old value of $x$, add $1$, and store the result back in $x$.
  - front: What two facts prove that a loop algorithm finishes correctly?
    back: A correctness argument, often an invariant, and a termination argument.
  - front: Does a simulation prove an exact probability?
    back: No. It estimates probability through frequency; exact reasoning is still needed for proof.
exercises:
  - id: 3e-programming-t1
    tierTitle: Direct Application
    prompt: "Trace this algorithm: set $x\\leftarrow7$; if $x$ is odd, set $x\\leftarrow3x+1$; otherwise set $x\\leftarrow x/2$. What is the final value of $x$?"
    solution: "$7$ is odd, so the first branch runs: $x\\leftarrow3\\times7+1=22$. The final value is $22$."
    hints:
      - "Evaluate the condition before choosing a branch."
  - id: 3e-programming-t2
    tierTitle: Brevet Standard
    prompt: "A function starts with $s\\leftarrow0$, then for $k$ from $1$ through $n$ adds $k$ to $s$ when $k$ is divisible by $3$, and subtracts $1$ otherwise. Make a trace table and determine the value returned for $n=8$."
    solution: "The successive values of $s$ for $k=1,2,3,4,5,6,7,8$ are $-1,-2,1,0,-1,5,4,3$. Multiples $3$ and $6$ are added; the other six iterations subtract $1$. The function returns $3$."
    hints:
      - "Create one row per iteration with columns for $k$, the condition, and $s$."
      - "Update $s$ using its value from the preceding row."
    rubric:
      - "Provides a trace row for every $k$ from $1$ through $8$."
      - "Records the successive values $-1,-2,1,0,-1,5,4,3$."
      - "Concludes that the returned value is $3$."
  - id: 3e-programming-t3
    tierTitle: Synthesis
    prompt: "A function must return the number of integers from $1$ through a nonnegative integer $n$ that are divisible by $3$ but not by $5$. A student writes: set $c\\leftarrow1$; for $k$ from $1$ through $n-1$, if $k$ is divisible by $3$ or is not divisible by $5$, set $c\\leftarrow c+1$; return $c$. Identify and explain every error, write corrected pseudocode using a loop and a condition, then give the results for $n=16$ and $n=0$."
    solution: "The counter must start at $0$, the loop must include $n$, and the two tests must be joined by 'and,' not 'or.' Corrected pseudocode is: set $c\\leftarrow0$; for $k$ from $1$ through $n$, if $k$ is divisible by $3$ and $k$ is not divisible by $5$, set $c\\leftarrow c+1$; return $c$. For $n=16$, the counted values are $3,6,9,12$, so the result is $4$; $15$ is excluded. For $n=0$, the loop has no iterations and returns $0$."
    hints:
      - "Check initialization, both loop bounds, and the logical connector separately."
      - "Test the corrected function on the boundary case $n=0$."
    rubric:
      - "Finds the incorrect initial value, excluded upper bound, and incorrect logical connector."
      - "Writes complete corrected pseudocode with initialization, loop, condition, update, and return."
      - "Obtains $4$ for $n=16$ and explains why $15$ is excluded."
      - "Handles $n=0$ as an empty loop returning $0$."
  - id: 3e-programming-t4
    tierTitle: Advanced Challenge
    prompt: "For a nonnegative integer $n$ and a positive integer $d$, consider: set $q\\leftarrow0$ and $r\\leftarrow n$; while $r\\ge d$, set $r\\leftarrow r-d$ and $q\\leftarrow q+1$; return $(q,r)$. Prove using only the taught assignment and loop tools that the algorithm terminates and returns the Euclidean quotient and remainder, meaning $n=dq+r$ with $0\\le r<d$. Trace it for $(n,d)=(47,6)$ and explain exactly what happens when $n=0$."
    solution: "The invariant is $n=dq+r$. Initially, $dq+r=d\\times0+n=n$. One iteration replaces $(q,r)$ by $(q+1,r-d)$, and $d(q+1)+(r-d)=dq+r$, so the invariant is preserved. While the loop runs, $r\\ge d>0$ and each iteration decreases $r$ by the positive integer $d$; therefore it must terminate. At termination, the condition is false, so $r<d$, while repeated subtraction from a nonnegative $r$ ensures $r\\ge0$. Together with the invariant, this is Euclidean division. For $47$ by $6$, the states after subtraction are $(q,r)=(1,41),(2,35),(3,29),(4,23),(5,17),(6,11),(7,5)$, so the return is $(7,5)$ and $47=6\\times7+5$. If $n=0$, then $r=0<d$ initially: the loop executes zero times and returns $(0,0)$."
    hints:
      - "Find an equality involving the fixed input $n$ and the changing values $q,r$."
      - "Show that one subtraction preserves that equality."
      - "Use $d>0$ to explain both termination and the final bound on $r$."
    rubric:
      - "States, initializes, and preserves the invariant $n=dq+r$."
      - "Proves termination and derives $0\\le r<d$ at exit."
      - "Traces all seven states for $(47,6)$ and returns $(7,5)$."
      - "Explains that $n=0$ causes zero iterations and returns $(0,0)$."
---
# Programming and Algorithmic Reasoning

## Variables and assignment

A **variable** stores a value. The assignment

$$x\leftarrow x+3$$

does not state an algebraic equality. It reads the current value of $x$, adds $3$, and replaces the stored value. A trace table records variable values after every instruction and prevents mental updates from being lost.

## Conditions and loops

A **conditional** executes one block if a Boolean test is true and another block otherwise. Tests include comparisons such as $x<10$, equality, and divisibility.

A counted loop repeats a known number of times. A `while` loop repeats while its condition remains true, so its designer must also explain why the condition eventually becomes false.

For a loop from $1$ through $n$, the boundary case $n=0$ has no iterations. A correct initialization must already give the required result in this empty-loop case.

## Functions

A **function** packages an algorithm under a name. It has parameters for inputs, local variables for intermediate work, and a returned result. For example:

```text
function squarePlusOne(x)
    return x*x + 1
```

For input $4$, this returns $17$. A function should have a clear contract: the permitted inputs and the meaning of its output.

## Worked trace

Consider:

```text
s <- 0
for k from 1 through 4
    s <- s + 2*k
return s
```

The successive values of $s$ are $2,6,12,20$. The algorithm returns $20$. The loop computes twice the sum $1+2+3+4$.

## Designing and Debugging

Start from a precise contract: permitted inputs and required output. Then check initialization, inclusive or exclusive loop bounds, the Boolean connector (`and` versus `or`), each update, and the returned value. Trace ordinary inputs and boundary cases such as $n=0$. A trace table is part of the evidence, so an assessment asking for one must include every iteration rather than only the final number.

## Simulation

To simulate a random experiment:

1. Initialize a success counter.
2. Repeat many independent trials.
3. Generate every random choice required in one trial.
4. Increment the counter exactly when the event occurs.
5. Return success count divided by trial count.

A fixed random seed makes debugging reproducible. A larger sample generally improves an estimate, but it does not turn the estimate into an exact proof.

## Reasoning about algorithms

Testing examples can reveal bugs but cannot prove correctness for every input. A **loop invariant** is true before the loop and remains true after each iteration. A complete proof shows initialization, preservation, and how the invariant yields the result when the loop ends. A separate termination argument identifies a nonnegative integer quantity that strictly decreases.

## Common errors

- Reading assignment as an equation and using the new value too early.
- Confusing `<` with `<=`, creating an off-by-one iteration.
- Forgetting to initialize or update an accumulator.
- Generating one random die and reusing it when two independent dice are required.
- Writing a `while` loop without guaranteeing progress toward termination.
- Claiming correctness from a few successful test cases.

## Extension: Quotient and Remainder by Subtraction

Repeatedly subtracting a positive divisor $d$ from $n$ while counting the subtractions produces a quotient $q$ and a remainder $r$. The equality $n=dq+r$ remains true after each update. When subtraction can no longer continue, $0\le r<d$, which is exactly the definition of Euclidean division.
