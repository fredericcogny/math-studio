---
id: 5e-powers
order: 6
title: Powers, squares, and cubes
level: 5e
strand: Number and algebra
difficulty: core
estimatedMinutes: 35
summary: Read, write, and evaluate positive integer powers, use essential squares and cubes, and place powers correctly in numerical and literal calculations.
objectives:
  - Interpret a positive integer power as repeated multiplication
  - Know the squares from $0^2$ through $12^2$ and the cube of $10$
  - Build and recognize powers of $2$ and $3$
  - Apply powers in the priority of operations
  - Evaluate numerical and literal expressions containing powers
prerequisites:
  - Whole-number multiplication
  - Priority of multiplication over addition and subtraction
  - Substitution in a literal expression
vocabulary:
  - en: power
    fr: puissance
    definition: A compact notation for repeated multiplication by the same factor.
  - en: base
    fr: base
    definition: The repeated factor in a power.
  - en: exponent
    fr: exposant
    definition: The small raised positive integer that tells how many equal factors are multiplied.
  - en: square
    fr: carré
    definition: The second power of a number, obtained by multiplying the number by itself.
  - en: cube
    fr: cube
    definition: The third power of a number, obtained by multiplying three equal factors.
flashcards:
  - front: What does $5^3$ mean?
    back: $5\times5\times5=125$; the base is $5$ and the exponent is $3$.
  - front: What are the squares from $0^2$ through $5^2$?
    back: $0,1,4,9,16,25$.
  - front: What is $10^3$?
    back: $10\times10\times10=1000$.
  - front: Which is evaluated first in $7+3^2\times2$?
    back: "The power: $3^2=9$, then the multiplication, then the addition."
  - front: Is $2^5$ equal to $2\times5$?
    back: No. $2^5=2\times2\times2\times2\times2=32$, while $2\times5=10$.
generator:
  type: quadratic-value
  seed: 51206
  count: 8
  coefficientMin: 1
  coefficientMax: 4
  xMin: 0
  xMax: 12
tieredExercises:
  - id: "5e-powers-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Calculate $12^2$."
    solution: '$12^2=12\times12=144$.'
    hints:
      - "A square is the product of two equal factors."
      - 'Use $12\times12$.'
    assessment:
      kind: "numeric"
      expected: 144
  - id: "5e-powers-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: 'Evaluate $3+2^3\times5-4^2$.'
    solution: 'Powers come first: $2^3=8$ and $4^2=16$. Then multiply: $3+8\times5-16=3+40-16=27$.'
    hints:
      - "Evaluate both powers before any multiplication, addition, or subtraction."
      - "After the powers, multiply $8$ by $5$."
    assessment:
      kind: "numeric"
      expected: 27
  - id: "5e-powers-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "core"
    prompt: "For $a=4$ and $b=3$, evaluate $2a^2+b^3-(a-b)^2$. Show the substituted expression and respect operation priority."
    solution: 'Substitute first: $2\times4^2+3^3-(4-3)^2$. Evaluate the parentheses and powers: $2\times16+27-1$. Then perform the multiplication before the addition and subtraction: $32+27-1=58$.'
    hints:
      - "Replace every letter before calculating."
      - "Calculate the parentheses and powers before the multiplication, addition, and subtraction."
    assessment:
      kind: "reasoning"
      rubric:
        - 'Substitutes correctly to obtain $2\times4^2+3^3-(4-3)^2$.'
        - "Evaluates the squares, cube, and parentheses before the remaining operations."
        - "Obtains the final value $58$."
  - id: "5e-powers-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: 'A whole number has the form $N=2^a\times3^b$, where $a$ and $b$ are positive integers. The number $N$ is both a square and a cube, and $N<1\,000\,000\,000$. Find every possible value of $N$ and prove that your list is complete.'
    solution: 'In a square, equal prime factors can be paired, so $a$ and $b$ are even. In a cube, they can be grouped in threes, so $a$ and $b$ are divisible by $3$. Therefore both exponents are positive multiples of $6$. Starting with $(a,b)=(6,6)$ gives $2^6\times3^6=46\,656$. Increasing one exponent by $6$ gives $2^{12}\times3^6=2\,985\,984$, $2^{18}\times3^6=191\,102\,976$, and $2^6\times3^{12}=34\,012\,224$. The next possibilities already exceed the bound: $2^{24}\times3^6=12\,230\,590\,464$, $2^{12}\times3^{12}=2\,176\,782\,336$, and $2^6\times3^{18}=24\,794\,911\,296$. Any further increase only makes the number larger. Thus the four listed values are all the possibilities.'
    hints:
      - "Ask what must be true of each prime exponent for factors to form pairs and also groups of three."
      - "Once $a$ and $b$ are multiples of $6$, increase them systematically from $(6,6)$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Proves that both exponents must be positive multiples of $6$."
        - 'Finds exactly $46\,656$, $2\,985\,984$, $34\,012\,224$, and $191\,102\,976$.'
        - "Uses the lower excluded exponent pairs and monotonicity to prove completeness."
---
## A Short Notation for Repeated Multiplication

When the same number is multiplied several times, a **power** gives a compact notation. For a number $a$ and a positive integer $n$,

$$a^n=\underbrace{a\times a\times\cdots\times a}_{n\text{ factors}}.$$

The number $a$ is the **base** and the raised number $n$ is the **exponent**. We read $a^n$ as “$a$ to the power $n$.” For example,

$$4^3=4\times4\times4=64.$$

The exponent counts factors, not multiplications: three factors contain two multiplication signs. Also, $4^3$ is not $4\times3$.

> This lesson uses positive integer exponents. The base may be zero: for example, $0^2=0\times0=0$.

## Squares and Cubes

The power $a^2$ is read “$a$ squared.” It is the area of a square with side length $a$. The power $a^3$ is read “$a$ cubed.” It is the volume of a cube with edge length $a$.

The squares from $0$ through $12$ should become familiar:

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $n^2$ | $0$ | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ | $49$ | $64$ | $81$ | $100$ | $121$ | $144$ |

In particular,

$$10^2=100\qquad\text{and}\qquad10^3=10\times10\times10=1000.$$

Do not confuse a square with a double or a cube with a triple: $6^2=36$, not $12$, and $6^3=216$, not $18$.

## Powers of 2 and Powers of 3

Each new power is obtained by multiplying the previous one by the base:

| Power of $2$ | $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ | $2^7$ | $2^8$ | $2^9$ | $2^{10}$ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Value | $2$ | $4$ | $8$ | $16$ | $32$ | $64$ | $128$ | $256$ | $512$ | $1024$ |

| Power of $3$ | $3^1$ | $3^2$ | $3^3$ | $3^4$ | $3^5$ | $3^6$ |
|---|---:|---:|---:|---:|---:|---:|
| Value | $3$ | $9$ | $27$ | $81$ | $243$ | $729$ |

These lists also reveal useful patterns. Powers of $2$ are even, and the units digits of powers of $3$ repeat $3,9,7,1$. A table can help recognize a power without multiplying from the beginning.

## Powers in the Priority of Operations

Powers are evaluated after parentheses and before multiplication or division. Addition and subtraction come last:

1. calculate inside parentheses;
2. evaluate powers;
3. multiply and divide from left to right;
4. add and subtract from left to right.

For example,

$$5+3\times2^4=5+3\times16=5+48=53.$$

Parentheses can change the base:

$$2+3^2=11,\qquad (2+3)^2=25.$$

> Common error: $(2+3)^2$ means $(2+3)(2+3)$, not $2^2+3^2$. The latter equals $13$, not $25$.

## Numerical and Literal Evaluation

A numerical expression contains only numbers. A literal expression also contains letters. To evaluate a literal expression, substitute each given value with parentheses, then follow operation priority.

For $x=3$, evaluate $2x^2+5$:

$$2\times3^2+5=2\times9+5=23.$$

For $a=2$ and $b=5$,

$$b^2-3a^3=5^2-3\times2^3=25-24=1.$$

The exponent applies only to its base. In $3x^2$, only $x$ is squared; the expression means $3\times x\times x$. By contrast, $(3x)^2$ means $(3x)(3x)$.

## Checking and Reasoning With Powers

Estimate before accepting a result. Since $7^2=49$ and $8^2=64$, a claimed square of $57$ cannot come from a whole number. Similarly, the consecutive powers $3^4=81$ and $3^5=243$ show that $150$ is not a power of $3$.

Repeated factors also support proofs. A square can have its equal prime factors arranged in pairs; a cube can have them arranged in groups of three. Therefore $2^6=64$ is both a square, $(2^3)^2$, and a cube, $(2^2)^3$. This grouping idea is a powerful bridge between powers and divisibility.

### Stretch Connection

If a product of prime powers is both a square and a cube, every prime exponent must be divisible by both $2$ and $3$, hence by $6$. This observation turns a potentially long search into a short, complete argument.
