---
id: 4e-programming-conditionals
locale: en
title: Variables, Loops, and Conditionals
strand: Algorithms and Programming
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
    definition: A named storage location in a program that holds a value which can change during execution.
  - en: loop
    definition: A control structure that repeats a block of instructions a certain number of times or while a condition is true.
  - en: conditional
    definition: A statement that tests whether a condition is true or false and executes different instructions accordingly.
flashcards:
  - front: What happens when you write `x = x + 3` in a program?
    back: The computer reads the current value of $x$, adds $3$, and stores the result back in $x$. If $x$ was $5$, it becomes $8$.
  - front: How many times does `for i in range(5)` execute its body?
    back: Five times, with $i$ taking values $0, 1, 2, 3, 4$.
  - front: What is the difference between `if` and `if/else`?
    back: With `if` alone, the block runs only when the condition is true and nothing happens otherwise. With `if/else`, one block runs when true and a different block runs when false.
exercises:
  - id: 4e-progcond-t1
    tierTitle: Direct Application
    prompt: "Trace the following program and give the final value of $s$.\n```\ns = 0\nfor i in range(4):\n    s = s + i\n```"
    solution: The loop runs for $i=0,1,2,3$. After each iteration, $s=0$, $s=1$, $s=3$, $s=6$. The final value is $6$.
    hints:
      - List the values of $i$ and update $s$ step by step.
  - id: 4e-progcond-t2
    tierTitle: Standard Practice
    prompt: "Trace the following program and give the final value of `count`.\n```\ncount = 0\nfor i in range(1, 11):\n    if i % 3 == 0:\n        count = count + 1\n```"
    solution: The loop runs for $i=1,2,\ldots,10$. The condition $i \% 3 = 0$ is true when $i=3,6,9$. So `count` is incremented three times. The final value is $3$.
    hints:
      - The operator `%` gives the remainder of division.
      - List all values of $i$ from 1 to 10 and check which are divisible by 3.
  - id: 4e-progcond-t3
    tierTitle: Official Core Synthesis
    prompt: "Read the program below and explain what it computes. Then give the output for the input $n=20$.\n```\nn = 20\nresult = 0\nfor i in range(1, n+1):\n    if i % 2 == 0:\n        result = result + i\n    else:\n        result = result - i\nprint(result)\n```"
    solution: The program computes $-1+2-3+4-\cdots+20$. Pairing consecutive terms, $(-1+2)+(-3+4)+\cdots+(-19+20)$, each pair gives $1$, and there are $10$ pairs, so the result is $10$.
    hints:
      - Track whether each $i$ is even or odd and the corresponding operation.
      - Look for a pattern by pairing consecutive terms.
    rubric:
      - Correctly identifies the alternating sum pattern.
      - Groups terms into pairs and computes each pair's value.
      - Arrives at the correct output of 10 with clear reasoning.
  - id: 4e-progcond-t4
    tierTitle: Advanced Challenge
    prompt: Write a program that finds all two-digit numbers equal to the sum of the cubes of their digits. Then prove mathematically that your list is complete by bounding the possible values.
    solution: >-
      Let $\overline{ab}=10a+b$. We need $10a+b=a^3+b^3$. Testing all two-digit numbers from 10 to 99 with a loop shows no solution exists. The program confirms this. Mathematical proof: for $a\ge 3$, $a^3\ge 27$ grows faster than $10a$, but $a^3+b^3$ can exceed 99 while $10a+b\le 99$, so exhaustive search over a finite range is complete.
    hints:
      - Extract digits using integer division and remainder.
      - Use a loop from 10 to 99 and check the condition for each number.
    rubric:
      - Writes a correct program to check all two-digit numbers.
      - Correctly concludes that no two-digit number satisfies the condition.
      - Provides a mathematical argument bounding the search space.
---
## Variables and Assignment

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

## Combining Loops and Conditionals

The real power emerges when you place conditionals inside loops:

```
count = 0
for i in range(1, 21):
    if i % 2 == 0:
        count = count + 1
```

This counts even numbers from $1$ to $20$. The result is $10$.

### Stretch Thought

What value does `x` hold after this program runs? Try to predict before tracing.
```
x = 1
for i in range(6):
    if x < 10:
        x = x * 2
    else:
        x = x - 5
```
