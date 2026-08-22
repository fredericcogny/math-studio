---
id: 4e-programming-conditionals
order: 12
title: Variables, loops, and conditionals
level: 4e
strand: Algorithms and programming
difficulty: core
estimatedMinutes: 20
summary: Learn to use variables, for and while loops, and if/else conditionals to write and trace simple programs.
objectives:
  - Assign and update variables in a program
  - Trace the execution of for and while loops
  - Use if/else conditionals to control program flow
prerequisites:
  - Basic arithmetic operations
  - Algorithmic thinking from 5e
vocabulary:
  - en: variable
    fr: variable
    definition: A named storage location in a program that holds a value which can change during execution.
  - en: loop
    fr: boucle
    definition: A control structure that repeats a block of instructions a certain number of times or while a condition is true.
  - en: conditional
    fr: condition
    definition: A statement that tests whether a condition is true or false and executes different instructions accordingly.
flashcards:
  - front: What happens when you write `x = x + 3` in a program?
    back: The computer reads the current value of $x$, adds $3$, and stores the result back in $x$. If $x$ was $5$, it becomes $8$.
  - front: How many times does `for i in range(5)` execute its body?
    back: Five times, with $i$ taking values $0, 1, 2, 3, 4$.
  - front: What is the difference between `if` and `if/else`?
    back: With `if` alone, the block runs only when the condition is true and nothing happens otherwise. With `if/else`, one block runs when true and a different block runs when false.
generator:
  type: signed-arithmetic
  seed: 41201
  count: 6
  min: -20
  max: 20
tieredExercises:
  - id: "4e-progcond-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Trace the following program and give the final value of $s$.\n```\ns = 0\nfor i in range(4):\n    s = s + i\n```"
    solution: "The loop runs for $i=0,1,2,3$. After each iteration: $s=0$, $s=1$, $s=3$, $s=6$. The final value is $6$."
    hints:
      - "List the values of $i$ and update $s$ step by step."
    assessment:
      kind: "numeric"
      expected: 6
  - id: "4e-progcond-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Trace the following program and give the final value of `count`.\n```\ncount = 0\nfor i in range(1, 11):\n    if i % 3 == 0:\n        count = count + 1\n```"
    solution: "The loop runs for $i=1,2,\\ldots,10$. The condition $i \\% 3 = 0$ is true when $i=3,6,9$. So `count` is incremented three times. The final value is $3$."
    hints:
      - "The operator `%` gives the remainder of division."
      - "List all values of $i$ from 1 to 10 and check which are divisible by 3."
    assessment:
      kind: "numeric"
      expected: 3
  - id: "4e-progcond-t3"
    tier: 3
    tierTitle: "Official Core Synthesis"
    curriculumStatus: "core"
    prompt: "Read the program below and explain what it computes. Then give the output for the input $n=20$.\n```\nn = 20\nresult = 0\nfor i in range(1, n+1):\n    if i % 2 == 0:\n        result = result + i\n    else:\n        result = result - i\nprint(result)\n```"
    solution: "The program computes $-1+2-3+4-5+6-\\cdots+20$. Each even number is added and each odd number is subtracted. Pair them: $(-1+2)+(-3+4)+\\cdots+(-19+20)$. Each pair gives $1$, and there are $10$ pairs, so the result is $10$."
    hints:
      - "Track whether each $i$ is even or odd and the corresponding operation."
      - "Look for a pattern by pairing consecutive terms."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly identifies the alternating sum pattern."
        - "Groups terms into pairs and computes each pair's value."
        - "Arrives at the correct output of 10 with clear reasoning."
  - id: "4e-progcond-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Write a program that finds all two-digit numbers equal to the sum of the cubes of their digits. Then prove mathematically that your list is complete by bounding the possible values."
    solution: "Let the two-digit number be $\\overline{ab}=10a+b$ where $1\\le a\\le 9$ and $0\\le b\\le 9$. We need $10a+b=a^3+b^3$. The maximum of $a^3+b^3$ is $9^3+9^3=1458$, but we need a two-digit result, so $10a+b\\le 99$. Testing all values: no two-digit number satisfies this equation (the closest is $a=1,b=0$ giving $10=1$, which fails). In fact there are no two-digit numbers equal to the sum of cubes of their digits. The only single-digit solution is $1$ ($1=1^3$). A program:\n```\nfor n in range(10, 100):\n    a = n // 10\n    b = n % 10\n    if a**3 + b**3 == n:\n        print(n)\n```\nThis prints nothing, confirming there are no solutions."
    hints:
      - "Extract digits using integer division and remainder."
      - "Use a loop from 10 to 99 and check the condition for each number."
    assessment:
      kind: "reasoning"
      rubric:
        - "Writes a correct program to check all two-digit numbers."
        - "Correctly concludes that no two-digit number satisfies the condition."
        - "Provides a mathematical argument bounding the search space."
---
## Variables and assignment

A **variable** is a named container that stores a value. When you write `x = 5`, the variable `x` holds the value $5$. The key idea: the `=` sign in programming means **assignment**, not mathematical equality. The instruction `x = x + 3` takes the current value of `x`, adds $3$, and stores the result back.

Tracing a program means following each instruction in order and recording how each variable changes.

## Loops

A **for loop** repeats a block of code a fixed number of times:

```
for i in range(5):
    print(i)
```

This prints $0, 1, 2, 3, 4$. The variable `i` is called the **loop counter**. `range(n)` produces the integers from $0$ to $n-1$.

A **while loop** repeats as long as a condition remains true:

```
x = 1
while x < 100:
    x = x * 2
```

After the loop, $x=128$ because $1\to 2\to 4\to 8\to 16\to 32\to 64\to 128$, and $128\ge 100$ stops the loop.

## Conditionals

An **if/else** statement tests a condition and chooses which block of code to run:

```
if age >= 18:
    print("adult")
else:
    print("minor")
```

The condition `age >= 18` is either true or false. Only one branch executes. Common comparison operators are `==` (equal), `!=` (not equal), `<`, `>`, `<=`, `>=`.

## Combining loops and conditionals

The real power emerges when you place conditionals inside loops:

```
count = 0
for i in range(1, 21):
    if i % 2 == 0:
        count = count + 1
```

This counts even numbers from $1$ to $20$. The result is $10$.

### Stretch thought

What value does `x` hold after this program runs? Try to predict before tracing.
```
x = 1
for i in range(6):
    if x < 10:
        x = x * 2
    else:
        x = x - 5
```
