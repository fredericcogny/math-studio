---
id: 5e-expressions-formulas
locale: en
title: Expressions and Formulas as Calculation Machines
strand: Algebraic Thinking
summary: Use mental arithmetic, operation language, and plausibility checks while reading, evaluating, and building literal expressions and formulas.
objectives:
  - Substitute values into an expression or formula
  - Name operations and apply their priority correctly
  - Translate a situation into a literal expression
  - Use a formula and introduce distributivity
prerequisites:
  - Whole-number and decimal arithmetic
  - Signed numbers
  - Area and perimeter of rectangles
vocabulary:
  - en: variable
    definition: A letter or symbol that represents a number whose value may change.
  - en: expression
    definition: A mathematical phrase made from numbers, variables, and operations, without an equality sign.
  - en: formula
    definition: An equality that describes a general relationship between quantities.
flashcards:
  - front: In $3x+5$, what are the terms and factors?
    back: The sum has terms $3x$ and $5$; the product $3x$ has factors $3$ and $x$.
  - front: How do you calculate $47.6\div100$ mentally?
    back: Move the decimal point two places left to obtain $0.476$.
  - front: State the distributive property for $k(a+b)$.
    back: $k(a+b)=ka+kb$.
exercises:
  - id: 5e-expressions-t1
    tierTitle: Direct Application
    prompt: Evaluate $a\div100+3b$ for $a=468$ and $b=0.4$. Calculate mentally and give an estimate that shows the result is plausible.
    solution: "Substitute first: $468\\div100+3\\times0.4$. The quotient is $4.68$ and the product is $1.2$, so the sum of these two terms is $4.68+1.2=5.88$. Estimating with $5+1=6$ confirms that $5.88$ is plausible."
    hints:
      - Dividing by $100$ moves the decimal point two places left.
      - Estimate each term before adding them.
  - id: 5e-expressions-t2
    tierTitle: Standard Practice
    prompt: A rectangular garden has length $L=8.5$ m and width $w=4$ m. Its perimeter is $P=2(L+w)$. A fence costs $C=3P+12$ dollars, including a fixed delivery charge. Calculate $C$, then use an order-of-magnitude estimate to check that it is plausible.
    solution: First, $P=2(8.5+4)=2\times12.5=25$ m. Then $C=3\times25+12=75+12=87$ dollars. Using $L+w\approx13$ gives $P\approx26$ and $C\approx3\times26+12=90$ dollars, so $87$ dollars is plausible.
    hints:
      - Calculate $P$ before using the cost formula.
      - For the check, round $8.5+4$ to about $13$.
  - id: 5e-expressions-t3
    tierTitle: Official Core Synthesis
    prompt: A square has side length $x$ cm. A rectangle has length $x+3$ cm and width $x$ cm. Write and simplify both perimeter formulas and explain why the rectangle's perimeter is always $6$ cm greater. The square's perimeter is $24$ cm; use $4x=24$ to find $x$, then infer the rectangle's perimeter.
    solution: The square has perimeter $4x$. The rectangle has perimeter $2[(x+3)+x]=2(2x+3)=4x+6$ by distributivity. The extra $6$ is independent of $x$. Since the square's perimeter is $24$ cm, $4x=24$, so $x=6$ cm. The rectangle's perimeter is therefore $24+6=30$ cm (or $4\times6+6=30$ cm).
    hints:
      - Use $P=2(L+w)$ for the rectangle.
      - Distribute the factor $2$ across $2x+3$.
      - Once the square's perimeter is known, add the constant difference to find the rectangle's perimeter.
    rubric:
      - Obtains the formulas $4x$ and $4x+6$.
      - Uses distributivity to justify the constant difference of $6$ cm.
      - Uses $4x=24$ to obtain $x=6$ cm, then infers that the rectangle's perimeter is $30$ cm.
  - id: 5e-expressions-t4
    tierTitle: Advanced Challenge
    prompt: A two-digit whole number has tens digit $a$ and units digit $b$. The number equals four times the sum of its digits. Find every such number. Then prove that reversing the digits always gives a multiple of $7$.
    solution: The number is $10a+b$, so $10a+b=4(a+b)$. Distributivity and collection give $6a=3b$, hence $b=2a$. Since $a$ is from $1$ to $9$ and $b$ is a digit, $2a\le9$, so $a=1,2,3,4$. The numbers are $12,24,36,48$. The reversed number is $10b+a=10(2a)+a=21a=7(3a)$, so every reverse is a multiple of $7$. The digit bounds prove the list is complete.
    hints:
      - Represent the number as $10a+b$ and its digit sum as $a+b$.
      - After finding $b$ in terms of $a$, use $1\le a\le9$ and $0\le b\le9$.
    rubric:
      - Models the condition as $10a+b=4(a+b)$ and derives $b=2a$.
      - Uses the digit bounds to find exactly $12,24,36,48$.
      - Writes the reversed number as $21a$ and proves divisibility by $7$.
---
## Letters Stand for Numbers

A **variable** is a letter that can take a numerical value. An expression such as $3x+5$ is a calculation instruction: multiply $x$ by $3$, then add $5$. It has no equality sign. A formula such as $P=2(L+w)$ states a relationship that works for every rectangle.

Multiplication signs are often omitted next to letters:

$$4\times x=4x,\qquad a\times b=ab.$$

However, $x+4$ cannot be shortened because addition and multiplication are different operations.

## Mental Arithmetic and Operation Names

The result of an addition is a **sum**, and the numbers or expressions added are its **terms**. The result of a multiplication is a **product**, and the multiplied numbers or expressions are its **factors**. Subtraction gives a **difference** and division gives a **quotient**. Thus $3x+5$ is a sum with terms $3x$ and $5$, while $3x$ is a product with factors $3$ and $x$.

Powers of $10$ support fast decimal calculation. Dividing by $10$, $100$, or $1000$ moves the decimal point one, two, or three places left:

$$47.6\div100=0.476.$$

Estimate before or after an exact calculation. For $468\div100+3\times0.4$, the rough calculation $5+1=6$ gives its order of magnitude; the exact result $5.88$ is plausible, whereas $58.8$ would not be.

## Substitution Without Ambiguity

To evaluate $2x-3y+1$ at $x=-2$ and $y=1.5$, replace every letter with its value in parentheses:

$$2(-2)-3(1.5)+1=-4-4.5+1=-7.5.$$

Parentheses protect a substituted sign and make each product unambiguous.

> Reliable habit: write the substituted line first, then calculate. Do not try to substitute and simplify mentally in one jump.

## Priority of Operations

Use this order:

1. parentheses;
2. multiplication and division, from left to right;
3. addition and subtraction, from left to right.

The next lesson introduces powers. When powers occur, they are evaluated after parentheses and before multiplication and division; this is the only powers prerequisite needed here.

For example,

$$18-2(3+4)=18-2\times7=18-14=4.$$

The expression $(18-2)(3+4)$ is completely different: it equals $16\times7=112$.

## Building Literal Expressions

Translate one phrase at a time.

- "Five more than three times $n$" becomes $3n+5$.
- "Three times the sum of $n$ and five" becomes $3(n+5)$.
- A taxi charging $4$ dollars plus $2.50$ dollars per kilometer costs $4+2.5d$ dollars for $d$ kilometers.

> Common error: order matters in subtraction. "Seven less than $x$" is $x-7$, not $7-x$.

## Formulas and Units

For a rectangle, $A=Lw$ and $P=2(L+w)$. If $L=7.5$ cm and $w=4$ cm, then

$$A=7.5\times4=30\text{ cm}^2$$

and

$$P=2(7.5+4)=23\text{ cm}.$$

The squared unit belongs to area, not perimeter. A formula is meaningful only when its quantities and units are understood.

## A First Use of Distributivity

Distributivity says that multiplying a sum multiplies every term:

$$k(a+b)=ka+kb.$$

For example, $3(x+4)=3x+12$. This can be checked with $x=5$: both forms equal $27$. The property also works backward, which is called factoring: $5x+10=5(x+2)$.

> Warning: $3(x+4)$ is not $3x+4$; the $4$ must also be multiplied by $3$.

### Stretch Connection

Place value itself is a literal expression. A two-digit number with digits $a$ and $b$ is $10a+b$, while the reversed number is $10b+a$. This representation turns digit puzzles into equations and makes a complete case analysis possible.
