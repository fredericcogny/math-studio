---
id: 5e-fractions-decimals
locale: en
title: Fractions and Decimals Describe the Same Numbers
strand: Numbers and Calculation
summary: Connect quantities, number-line positions, equivalent fractions, calculation, and decimal notation in one coherent number system.
objectives:
  - Interpret a fraction as a quotient and as a fraction of a quantity
  - Place fractions on a number line and decompose improper fractions
  - Generate equivalent fractions and compare, add, and subtract fractions
  - Move between fractions and decimal notation
prerequisites:
  - Multiplication tables
  - Natural-number division
  - Decimal place value
vocabulary:
  - en: fraction
    definition: A number written as a quotient of two integers, with a nonzero denominator.
  - en: equivalent fractions
    definition: Fractions that have different forms but represent the same number.
  - en: common denominator
    definition: A shared denominator used to compare, add, or subtract fractions.
flashcards:
  - front: What is $3/5$ of $40$?
    back: $3/5\times40=24$.
  - front: Where is $7/4$ on a number line?
    back: $7/4=1+3/4=1.75$, so it lies between $1$ and $2$.
  - front: What fraction equals $0.35$?
    back: $35/100=7/20$.
exercises:
  - id: 5e-fractions-t1
    tierTitle: Direct Application
    prompt: Place $7/4$ on a number line by stating the two consecutive natural numbers between which it lies. Then write it as an integer plus a proper fraction and as a decimal.
    solution: Division with remainder gives $7=4\times1+3$, so $7/4=1+3/4=1\frac34=1.75$. Therefore $1<7/4<2$, and its point is three quarters of the way from $1$ to $2$.
    hints:
      - Divide $7$ by $4$ and use the quotient and remainder.
      - Each interval from one natural number to the next represents one whole unit.
    expected: "1 < 7/4 < 2; 1 3/4; 1.75"
    accepted:
      - "1 < 7/4 < 2; 1 + 3/4; 1.75"
  - id: 5e-fractions-t2
    tierTitle: Standard Practice
    prompt: A $2$ L bottle is $3/4$ full. Mia drinks $0.25$ L and then adds $2/5$ L. How much water is now in the bottle? Give an improper fraction, an integer plus a proper fraction, and a decimal.
    solution: Initially, the bottle contains $3/4\times2=3/2$ L. Since $0.25=1/4$, the final amount is $3/2-1/4+2/5=30/20-5/20+8/20=33/20$ L. Thus $33/20=1+13/20=1\frac{13}{20}=1.65$ L.
    hints:
      - First calculate $3/4$ of $2$ L, then rewrite $0.25$ as a fraction.
      - Use denominator $20$ for the three fractions.
    expected: "33/20 L; 1 13/20 L; 1.65 L"
    accepted:
      - "33/20 L; 1 + 13/20 L; 1.65 L"
  - id: 5e-fractions-t3
    tierTitle: Official Core Synthesis
    prompt: Order $0.58$, $7/12$, $3/5$, and $11/20$ from least to greatest. Then find the exact difference between the greatest and least numbers.
    solution: Using denominator $300$, the numbers are $174/300$, $175/300$, $180/300$, and $165/300$, respectively. Therefore $11/20<0.58<7/12<3/5$. The exact difference is $3/5-11/20=12/20-11/20=1/20$.
    hints:
      - Convert every number to a fraction; $0.58=29/50$.
      - A common denominator for $50,12,5,20$ is $300$.
    rubric:
      - Uses a valid common representation for all four numbers.
      - Gives the complete order $11/20<0.58<7/12<3/5$.
      - Computes the exact difference $1/20$.
  - id: 5e-fractions-t4
    tierTitle: Advanced Challenge
    prompt: Find all pairs of natural numbers $(a,b)$ with $2<a\le b$ such that $1/a+1/b=1/2$. Prove that your list is complete.
    solution: Multiplying by $2ab$ gives $2a+2b=ab$. Adding $4$ to both sides after rearranging gives $(a-2)(b-2)=4$. Since $a\le b$, the positive factor pairs of $4$ are $(1,4)$ and $(2,2)$. Thus $(a,b)=(3,6)$ or $(4,4)$. Both work, and every solution must give one of those factor pairs, so the list is complete.
    hints:
      - Clear the denominators to obtain $ab-2a-2b=0$.
      - "Complete the product by adding $4$: $ab-2a-2b+4=4$."
    rubric:
      - Transforms the equation into $(a-2)(b-2)=4$.
      - Checks all positive factor pairs allowed by $a\le b$.
      - Finds $(3,6)$ and $(4,4)$ and verifies completeness.
---
## One Number, Several Meanings

In the fraction $a/b$, the **denominator** $b$ tells how many equal parts make one whole, and the **numerator** $a$ tells how many of those parts are taken. The denominator cannot be zero.

A fraction is also a quotient. Sharing $3$ pizzas equally among $4$ people gives each person

$$3\div4=\frac34=0.75.$$

Thus a fraction is a number, not just a picture or two integers stacked together.

To find a fraction of a quantity, multiply the quantity by that fraction. For example,

$$\frac35\text{ of }40=\frac35\times40=24.$$

## Fractions on the Number Line

Every fraction has one precise position on the number line. A **proper fraction** is less than $1$. An **improper fraction** is at least $1$ and can be decomposed into an integer plus a proper fraction. Division with remainder gives

$$\frac74=1+\frac34=1\frac34,$$

so $7/4$ lies between $1$ and $2$, three quarters of the way from $1$ to $2$.

## Equivalent Fractions

Multiplying or dividing the numerator and denominator by the same nonzero number does not change the quotient:

$$\frac{5}{7}=\frac{5\times3}{7\times3}=\frac{15}{21}.$$

To simplify $24/36$, divide both terms by their greatest useful common factor: $24/36=2/3$.

> Warning: changing only the numerator or only the denominator changes the number.

## Comparing Fractions

Fractions with the same denominator can be compared by their numerators. Otherwise, rewrite them with a common denominator:

$$\frac58=\frac{15}{24},\qquad \frac23=\frac{16}{24},$$

so $5/8<2/3$. Cross multiplication gives the same result because $5\times3<2\times8$, but common denominators show why the method works.

For a quick estimate, compare both numbers with a benchmark such as $1/2$ or $1$. For example, $7/15<1/2$ because $7<7.5$, while $5/9>1/2$.

## Adding and Subtracting

Only equal-sized parts can be counted together. For $3/4+5/6$, use denominator $12$:

$$\frac34+\frac56=\frac9{12}+\frac{10}{12}=\frac{19}{12}=1\frac7{12}.$$

Similarly,

$$\frac7{10}-\frac14=\frac{14}{20}-\frac5{20}=\frac9{20}.$$

> Common error: $2/3+1/4$ is not $3/7$. The thirds and fourths are different-sized pieces; first rewrite both as twelfths.

## Decimal Links

A **decimal number** is a number that can be written as $a/10^n$, where $a$ is an integer and $n$ is a nonnegative integer. Equivalently, it has a finite decimal representation. It is not defined merely as a number written with a decimal point:

$$0.375=\frac{375}{1000}=\frac38.$$

To obtain the decimal representation of any fraction, divide its numerator by its denominator. The representation may terminate, as for $7/20=0.35$, or repeat forever, as for $1/3=0.333\ldots$. Thus $7/20$ is a decimal number, whereas $1/3$ is not a decimal number even though it has an infinite decimal representation.

### Stretch: Terminating Denominators

A fraction in simplest form has a terminating decimal representation exactly when the only prime factors of its denominator are $2$ and $5$. This prime-factor theorem is useful for predicting termination without carrying out the division, but it is stretch material here.

### Stretch Connection

An **Egyptian fraction** writes a number as a sum of fractions with numerator $1$. For example, $2/3=1/2+1/6$. Searching systematically for such decompositions turns fraction calculation into an equation and a factor problem.
