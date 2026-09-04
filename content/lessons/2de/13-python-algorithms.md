---
id: 2de-python-algorithms
order: 13
title: Algorithms in Python, functions, loops, and lists
level: 2de
strand: Algorithmics and programming
difficulty: core
estimatedMinutes: 30
summary: Read and write short Python functions with counted and conditional loops, and reason about what a loop guarantees at each step.
objectives:
  - Trace a program with a table of successive values
  - Write a function using a counted loop or a conditional loop
  - Justify that a loop terminates and that it returns the intended value
prerequisites:
  - Variables, loops, and conditionals
  - Powers with integer exponents
vocabulary:
  - en: counted loop
    fr: boucle bornée
    definition: A loop whose number of repetitions is known before it starts, written with the word for.
  - en: conditional loop
    fr: boucle non bornée
    definition: A loop that repeats while a condition remains true, written with the word while.
  - en: loop invariant
    fr: invariant de boucle
    definition: A property that is true before the loop and remains true after every repetition, used to prove what the loop computes.
flashcards:
  - front: Which values does range(1, 5) produce?
    back: The integers $1$, $2$, $3$, $4$. The lower bound is included and the upper bound is excluded.
  - front: When should a while loop be preferred to a for loop?
    back: When the number of repetitions is not known in advance, for instance when searching for the first value that crosses a threshold.
  - front: What must be checked for every while loop?
    back: That it terminates, which usually means exhibiting a quantity that changes monotonically until the condition fails.
  - front: How do you trace a program reliably?
    back: Build a table with one column per variable and one row per repetition, and fill it in step by step without skipping any.
generator:
  type: remainder
  seed: 21301
  count: 6
  divisorMin: 2
  divisorMax: 10
  quotientMin: 1
  quotientMax: 15
tieredExercises:
  - id: '2de-python-t1'
    tier: 1
    tierTitle: 'Direct Application'
    curriculumStatus: 'core'
    prompt: "Trace the following program and give the final value of $s$.\n```\ns = 0\nfor k in range(1, 5):\n    s = s + k\n```"
    solution: "The loop runs for $k=1$, then $2$, then $3$, then $4$, since the upper bound is excluded. The successive values of $s$ are $1$, $3$, $6$, $10$, so the final value is $10$."
    hints:
      - "In range(1, 5) the value 5 is excluded."
    assessment:
      kind: 'numeric'
      expected: 10
  - id: '2de-python-t2'
    tier: 2
    tierTitle: 'Standard Practice'
    curriculumStatus: 'core'
    prompt: "The function below is called with the argument $4$. Give the value it returns.\n```\ndef f(n):\n    r = 1\n    for k in range(1, n + 1):\n        r = r * k\n    return r\n```"
    solution: "The loop multiplies $r$ successively by $1$, $2$, $3$ and $4$, because range(1, 5) produces those four values. So $r$ takes the values $1$, $2$, $6$, $24$, and the function returns $24$. The function computes the product of the integers from $1$ to $n$."
    hints:
      - "Write down the value of r after each repetition."
      - "The upper bound n + 1 is excluded, so the last value of k is n."
    assessment:
      kind: 'numeric'
      expected: 24
  - id: '2de-python-t3'
    tier: 3
    tierTitle: 'Official Core Synthesis'
    curriculumStatus: 'core'
    prompt: "Write a Python function that takes a list of numbers and returns the mean of the values that are strictly greater than $10$, or the value $0$ if there is no such value. Then trace your function on the list [4, 12, 20, 7, 16] and give the result."
    solution: "A possible function accumulates a sum and a count.\n```\ndef moyenne_grands(valeurs):\n    total = 0\n    effectif = 0\n    for v in valeurs:\n        if v > 10:\n            total = total + v\n            effectif = effectif + 1\n    if effectif == 0:\n        return 0\n    return total / effectif\n```\nThe guard on effectif is what prevents a division by zero on a list with no value above $10$. On the list [4, 12, 20, 7, 16], the values kept are $12$, $20$ and $16$, so total is $48$ and effectif is $3$. The function returns $48/3=16$."
    hints:
      - "Accumulate two quantities during the loop, a sum and a count."
      - "Handle the empty case before dividing, otherwise the program fails."
    assessment:
      kind: 'reasoning'
      rubric:
        - "Writes a loop that filters the values strictly greater than 10 and accumulates a sum and a count."
        - "Protects the division against a count equal to zero."
        - "Traces the function on the given list and obtains the mean 16."
  - id: '2de-python-t4'
    tier: 4
    tierTitle: 'Advanced Challenge'
    curriculumStatus: 'cpge'
    prompt: "Consider the function below.\n```\ndef seuil(S):\n    n = 0\n    u = 1\n    while u <= S:\n        n = n + 1\n        u = 2 * u\n    return n\n```\nProve that at the start of every test of the condition the equality $u=2^{n}$ holds, prove that the loop terminates for every $S\\geqslant 0$, and prove that the returned value is the smallest integer $n$ such that $2^{n}>S$. Give the value returned for $S=1000$."
    solution: "Before the first test, $n=0$ and $u=1=2^{0}$, so the property $u=2^{n}$ holds. Suppose it holds at the start of some test and that the body runs. The body replaces $n$ by $n+1$ and $u$ by $2u=2\\times 2^{n}=2^{n+1}$, so the property holds again at the start of the next test. It is therefore an invariant of the loop. For termination, $u$ is multiplied by $2$ at each repetition, so $u=2^{n}$ grows without bound and eventually exceeds any fixed $S$; the condition $u\\leqslant S$ then fails and the loop stops. When the loop stops, the invariant gives $2^{n}>S$, so the returned value satisfies the required inequality. It is the smallest such integer, because the loop only exited at this step: for every earlier value $k<n$ the test succeeded, which means $2^{k}\\leqslant S$. For $S=1000$, the powers of two are $1,2,4,\\dots,512,1024$, and $2^{9}=512\\leqslant 1000$ while $2^{10}=1024>1000$, so the function returns $10$."
    hints:
      - "Check the property before the loop, then show that one repetition preserves it."
      - "To prove minimality, use the fact that the test succeeded at every earlier step."
    assessment:
      kind: 'reasoning'
      rubric:
        - "Establishes the invariant by checking it initially and after one repetition."
        - "Justifies termination by the unbounded growth of the doubling variable."
        - "Proves minimality from the earlier successful tests and gives the value 10 for S equal to 1000."
---
## Trace before you write

A program is read by tracing it. Build a table with one column per variable and one row per repetition, and fill it in without skipping steps. Most errors in a loop come from a boundary, not from an idea, and only a table reveals a boundary error.

```
s = 0
for k in range(1, 5):
    s = s + k
```

| repetition | $k$ | $s$ after |
| --- | --- | --- |
| 1 | $1$ | $1$ |
| 2 | $2$ | $3$ |
| 3 | $3$ | $6$ |
| 4 | $4$ | $10$ |

Note the boundary: `range(1, 5)` includes $1$ and excludes $5$.

## Two kinds of loop

A **counted loop**, written with `for`, repeats a known number of times. Use it when the number of steps is decided in advance.

A **conditional loop**, written with `while`, repeats as long as a condition holds. Use it when the number of steps is unknown, for example when searching for the first term that crosses a threshold.

```
n = 0
u = 1
while u <= 1000:
    n = n + 1
    u = 2 * u
```

Every `while` loop needs a reason to stop. Here $u$ doubles at each repetition, so it eventually exceeds $1000$; a loop with no such quantity may never end.

## Functions

A **function** packages a computation, receives arguments, and returns a value with `return`. Naming a computation makes it reusable and testable.

```
def aire_disque(r):
    return 3.14159 * r * r
```

A function that returns a value is preferable to one that only prints, because the value can be reused in a later computation.

## Lists

A list gathers values in order, and a `for` loop can run over them directly.

```
def somme(valeurs):
    total = 0
    for v in valeurs:
        total = total + v
    return total
```

The standard patterns of Seconde all follow this shape: accumulate a sum, count the elements satisfying a condition, or keep track of the largest value seen so far. Filtering with an `if` inside the loop combines them.

Guarding against the empty case matters. A mean is a sum divided by a count, and a count equal to zero must be handled before the division, not after.

## What a loop guarantees

To justify that a program is correct, exhibit an **invariant**: a property true before the loop and preserved by one repetition. Combined with a reason for termination, the invariant gives the value at exit. In the doubling loop above, the invariant is $u=2^{n}$, which is what turns a program into a proof.

### Stretch thought

Modify the doubling loop so that it also returns the number of repetitions needed to exceed a threshold when the starting value is $3$ instead of $1$. State and prove the new invariant.
