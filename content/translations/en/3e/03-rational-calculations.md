---
id: 3e-rational-calculations
locale: en
title: Exact Calculations with Rational Numbers
strand: Numbers and Calculation
summary: Calculate exactly with signed fractions, respect operation priorities, and validate results in Brevet-style contexts.
objectives:
  - Interpret and compare signed rational numbers
  - Add, subtract, multiply, and divide fractions exactly
  - Evaluate chained calculations using operation priorities
  - Simplify results and test their signs and magnitudes for plausibility
  - Model contextual Brevet problems with rational numbers
prerequisites:
  - Calculate with signed integers
  - Recognize equivalent fractions and common multiples
  - Use prime factorization to reduce fractions
vocabulary:
  - en: rational number
    definition: A number that can be written as a quotient of two integers with a nonzero denominator.
  - en: common denominator
    definition: A shared denominator used to add, subtract, or compare fractions.
  - en: reciprocal
    definition: For a nonzero number, the number whose product with it is $1$.
  - en: irreducible fraction
    definition: A fraction whose numerator and denominator have no common divisor greater than $1$.
  - en: operation priority
    definition: A rule determining the order in which the operations in an expression are performed.
flashcards:
  - front: When can two fractions be added directly by adding their numerators?
    back: Only after they have been written with a common denominator.
  - front: How do you divide by a nonzero fraction?
    back: Multiply by its reciprocal.
  - front: What is the preferred position for the sign of a fraction?
    back: In front of the fraction; the denominator is kept positive.
  - front: Which operations have priority in a calculation without parentheses?
    back: Multiplication and division are performed before addition and subtraction, from left to right within each priority level.
  - front: How can an estimate help with an exact fraction calculation?
    back: It can detect an impossible sign or a result whose magnitude is too large or too small.
exercises:
  - id: 3e-rational-calculations-t1
    tierTitle: Direct Application
    prompt: 'Calculate and give the irreducible result: $-\frac56+\frac79$.'
    solution: 'The least common denominator is $18$. Thus $-\frac56+\frac79=-\frac{15}{18}+\frac{14}{18}=-\frac1{18}$, which is irreducible.'
    hints:
      - Use $18$, the least common multiple of $6$ and $9$, as the denominator.
      - Keep the negative sign attached to the first numerator.
    expected: "-1/18"
    accepted:
      - "$-\\frac1{18}$"
      - "- 1/18"
  - id: 3e-rational-calculations-t2
    tierTitle: Brevet-Standard Problem
    prompt: A rainwater tank is initially $\frac34$ full. During a dry week, a volume equal to $\frac25$ of the tank's total capacity is used. Rain then adds a volume equal to $\frac16$ of its capacity. What fraction of the tank is full afterward? Is an overflow possible? Justify both answers exactly.
    solution: 'All fractions refer to the total capacity. The final filled fraction is $\frac34-\frac25+\frac16=\frac{45}{60}-\frac{24}{60}+\frac{10}{60}=\frac{31}{60}$. This fraction is between $0$ and $1$, so the tank is $\frac{31}{60}$ full and no overflow occurs.'
    hints:
      - "Express every change as a signed fraction of the same whole: the tank capacity."
      - Use a common denominator of $60$, then compare the result with $1$.
    rubric:
      - Models the successive changes as $\frac34-\frac25+\frac16$.
      - Uses a valid common denominator and obtains the irreducible fraction $\frac{31}{60}$.
      - Compares the result with $0$ and $1$ and concludes that no overflow is possible.
  - id: 3e-rational-calculations-t3
    tierTitle: Priority Calculation Synthesis
    prompt: 'Calculate exactly, showing the priority steps, and check the plausibility of the result: $A=\frac56-\frac6{17}\times\left(\frac34-\left(-\frac23\right)\right)$.'
    solution: 'Parentheses come first: $\frac34-(-\frac23)=\frac34+\frac23=\frac9{12}+\frac8{12}=\frac{17}{12}$. Then multiply, simplifying before calculating: $\frac6{17}\times\frac{17}{12}=\frac12$. Finally, $A=\frac56-\frac12=\frac56-\frac36=\frac13$. This is plausible because a positive number near $0.8$ minus $0.5$ should be positive and near $0.3$.'
    hints:
      - Evaluate the parentheses before the multiplication and final subtraction.
      - Subtracting a negative number is adding its opposite.
      - Cancel common factors in the product before multiplying.
    rubric:
      - Evaluates the parentheses exactly as $\frac{17}{12}$.
      - Performs the multiplication before the subtraction and simplifies it to $\frac12$.
      - Obtains the irreducible result $\frac13$.
      - Uses signs or a decimal estimate to support the plausibility of the answer.
  - id: 3e-rational-calculations-t4
    tierTitle: Olympiad Fraction Challenge
    prompt: 'Determine all pairs of positive integers $(x,y)$ with $x\le y$ such that $\frac1x+\frac1y=\frac16$. Prove that your list is complete.'
    solution: 'Multiplying by $6xy$ gives $6x+6y=xy$. Add $36$ to both sides after rearranging: $xy-6x-6y+36=36$, so $(x-6)(y-6)=36$. The original equation implies $x>6$ and $y>6$, so both factors are positive. Let $d=x-6$. Since $x\le y$, we have $d\le36/d$, hence $d\le6$. The positive divisors of $36$ no greater than $6$ are $1,2,3,4,6$. They yield $(x,y)=(7,42),(8,24),(9,18),(10,15),(12,12)$. Each pair satisfies the original equation. Conversely, every solution gives a positive divisor pair of $36$, and ordering selects exactly the five listed pairs, so the list is complete.'
    hints:
      - Clear the denominators, then try to create a product by adding the same constant to both sides.
      - Expand $(x-6)(y-6)$.
      - Use $x\le y$ to list each factor pair of $36$ only once.
    rubric:
      - Transforms the equation equivalently into $(x-6)(y-6)=36$.
      - Justifies that both factors are positive and uses the ordering condition.
      - Finds exactly the five pairs $(7,42),(8,24),(9,18),(10,15),(12,12)$.
      - Verifies the pairs and proves completeness through all positive divisor pairs of $36$.
---
## Signed Rational Numbers

A **rational number** is any number that can be written as

$$\frac ab\qquad\text{with }a,b\in\mathbb Z\text{ and }b\ne0.$$

Integers and terminating or repeating decimals are rational. For example, $-4=-\frac41$, $0.35=\frac7{20}$, and $0.\overline3=\frac13$.

Equivalent fractions represent the same number:

$$\frac ab=\frac{ka}{kb}\qquad(k\ne0).$$

Keep the denominator positive and place any negative sign in front: $\frac{3}{-5}=-\frac35$. A rational number is positive when numerator and denominator have the same sign and negative when their signs differ.

## Comparing and Locating Fractions

Fractions can be compared by using a common denominator, cross-products when denominators are positive, or a useful benchmark such as $0$, $\frac12$, or $1$.

For example, $-\frac34<-\frac23$ because $-\frac34=-\frac9{12}$ and $-\frac23=-\frac8{12}$. Among negative numbers, the number farther from zero is smaller.

## Addition and Subtraction

Only quantities expressed in equal-sized parts can be combined. For $b,d\ne0$,

$$\frac ab+\frac cd=\frac{ad+bc}{bd},\qquad
\frac ab-\frac cd=\frac{ad-bc}{bd}.$$

Using the least common multiple often keeps the numbers smaller than using $bd$ immediately.

**Worked example.**

$$-\frac7{12}-\frac5{18}
=-\frac{21}{36}-\frac{10}{36}
=-\frac{31}{36}.$$

The numerator $31$ shares no prime factor with $36$, so the result is irreducible. Never add denominators: $\frac12+\frac13$ is not $\frac25$.

Subtracting a number means adding its opposite:

$$\frac58-\left(-\frac34\right)=\frac58+\frac68=\frac{11}{8}.$$

## Multiplication and Division

Multiply numerators together and denominators together:

$$\frac ab\times\frac cd=\frac{ac}{bd}.$$

Simplify common factors across the product before multiplying:

$$-\frac{14}{15}\times\frac{25}{21}
=-\frac{2\times5}{3\times3}
=-\frac{10}{9}.$$

For division, multiply by the reciprocal of the nonzero divisor:

$$\frac ab\div\frac cd=\frac ab\times\frac dc
\qquad(c\ne0).$$

For example,

$$-\frac49\div\frac8{15}
=-\frac49\times\frac{15}{8}
=-\frac56.$$

Division by zero is never defined. Inverting the first fraction, or inverting both fractions, changes the calculation and is incorrect.

## Chained Calculations and Priorities

Use the same priorities as for all numbers:

1. calculate inside parentheses;
2. calculate powers, if any;
3. perform multiplication and division from left to right;
4. perform addition and subtraction from left to right.

Write one justified transformation per line. For example,

$$
B=\frac23-\frac54\times\left(\frac7{10}-\frac12\right)
=\frac23-\frac54\times\frac15
=\frac23-\frac14
=\frac5{12}.
$$

The subtraction cannot be performed before the multiplication.

## Modeling a Context

First identify the whole represented by $1$. Fractions can only be combined directly when they refer to that same whole. Then assign signs: a gain, deposit, rise, or inflow is usually positive; a loss, use, fall, or outflow is usually negative.

**Brevet method.** A route is $\frac25$ forest, $\frac13$ farmland, and the rest urban. The urban fraction is

$$1-\frac25-\frac13=\frac{15-6-5}{15}=\frac4{15}.$$

For a $30$ km route, the urban distance is $30\times\frac4{15}=8$ km. The fraction is dimensionless, while multiplying it by the total distance produces kilometers.

## Simplification and Plausibility

An exact fraction answer should normally be irreducible. Divide numerator and denominator by their greatest common divisor, or cancel factors before a product. Do not cancel terms joined by addition: in $\frac{2+6}{6}$, the sixes are not factors of the entire numerator.

Before accepting an answer, check:

- **sign:** should a gain or remaining amount be positive?
- **magnitude:** if two positive proper fractions are multiplied, the result must be smaller than each;
- **benchmark:** replace fractions by nearby decimals or simple fractions;
- **context:** a proportion of one whole is usually between $0$ and $1$;
- **form:** is the denominator nonzero and the final fraction irreducible?

For instance, $\frac{49}{50}\times\frac{21}{20}$ is close to $1\times1.05$, so a result near $1.03$ is plausible; a result near $10$ is not.

## Extension: Turning a Sum into a Product

Some fraction equations become finite divisor problems after denominators are cleared. The identity

$$xy-kx-ky=(x-k)(y-k)-k^2$$

can transform an equation involving $\frac1x+\frac1y$. Once an integer product is fixed, listing all divisor pairs and proving that the list is exhaustive completes the argument.
