---
id: 4e-fraction-operations
order: 1
title: Fraction operations, all four
level: 4e
strand: Numbers and calculation
difficulty: core
estimatedMinutes: 20
summary: Master addition, subtraction, multiplication, and division of fractions by building on common denominators and reciprocals.
objectives:
  - Add and subtract fractions with different denominators
  - Multiply and divide fractions fluently
  - Simplify results to lowest terms
prerequisites:
  - Equivalent fractions
  - Greatest common divisor
vocabulary:
  - en: fraction
    fr: fraction
    definition: A number written as the ratio of a numerator to a nonzero denominator.
  - en: common denominator
    fr: dénominateur commun
    definition: A shared denominator used to add or subtract fractions with different denominators.
  - en: reciprocal
    fr: inverse
    definition: The fraction obtained by swapping numerator and denominator; the product of a number and its reciprocal is 1.
flashcards:
  - front: How do you add two fractions with different denominators?
    back: Rewrite each fraction with a common denominator, then add the numerators. For example, $\frac{2}{3}+\frac{1}{4}=\frac{8}{12}+\frac{3}{12}=\frac{11}{12}$.
  - front: How do you divide by a fraction?
    back: Multiply by its reciprocal. $\frac{a}{b}\div\frac{c}{d}=\frac{a}{b}\times\frac{d}{c}$.
  - front: When is a fraction in lowest terms?
    back: When the numerator and denominator share no common factor other than 1.
generator:
  type: signed-arithmetic
  seed: 40101
  count: 6
  min: -20
  max: 20
tieredExercises:
  - id: "4e-frac-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Calculate $\\frac{2}{3}+\\frac{1}{4}$ and give the result as a simplified fraction."
    solution: "The LCM of 3 and 4 is 12. $\\frac{2}{3}=\\frac{8}{12}$ and $\\frac{1}{4}=\\frac{3}{12}$, so $\\frac{8}{12}+\\frac{3}{12}=\\frac{11}{12}$."
    hints:
      - "Find a common denominator for 3 and 4."
    assessment:
      kind: "exact"
      expected: "11/12"
  - id: "4e-frac-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "A recipe uses $\\frac{3}{4}$ of a litre of milk. Marie has already poured $\\frac{1}{3}$ of a litre. What fraction of a litre must she still add? Then she wants to triple the recipe. How much milk does the full tripled recipe need?"
    solution: "She must still add $\\frac{3}{4}-\\frac{1}{3}=\\frac{9}{12}-\\frac{4}{12}=\\frac{5}{12}$ of a litre. The tripled recipe needs $3\\times\\frac{3}{4}=\\frac{9}{4}$ litres, i.e. $2\\frac{1}{4}$ litres."
    hints:
      - "Subtract the amount already poured from the total needed."
      - "To triple, multiply the original amount by 3."
    assessment:
      kind: "exact"
      expected: "5/12"
  - id: "4e-frac-t3"
    tier: 3
    tierTitle: "Official Core Synthesis"
    curriculumStatus: "core"
    prompt: "Show that $\\frac{2}{5}\\div\\frac{3}{7}+\\frac{1}{2}=\\frac{59}{30}$. Justify each step, citing the rule you use."
    solution: "First, $\\frac{2}{5}\\div\\frac{3}{7}=\\frac{2}{5}\\times\\frac{7}{3}=\\frac{14}{15}$ (dividing means multiplying by the reciprocal). Then $\\frac{14}{15}+\\frac{1}{2}=\\frac{28}{30}+\\frac{15}{30}=\\frac{43}{30}$. Note: $\\frac{43}{30}\\neq\\frac{59}{30}$, so the statement is false. The correct result is $\\frac{43}{30}$."
    hints:
      - "Handle the division before the addition (order of operations)."
      - "Convert the division into multiplication by the reciprocal, then find a common denominator for the addition."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly converts the division into multiplication by the reciprocal."
        - "Finds a common denominator and performs the addition accurately."
        - "States whether the equation holds and gives the correct simplified result."
  - id: "4e-frac-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Find all pairs of positive integers $(a,b)$ with $a<b$ such that $\\frac{1}{a}+\\frac{1}{b}=\\frac{1}{4}$. Prove that you have found them all."
    solution: "$\\frac{1}{a}+\\frac{1}{b}=\\frac{1}{4}$ gives $\\frac{a+b}{ab}=\\frac{1}{4}$, so $4(a+b)=ab$. Rearranging: $ab-4a-4b=0$, hence $(a-4)(b-4)=16$. Since $a<b$ and both are positive integers with $a>4$, the factor pairs of 16 with $d_1<d_2$ are $(1,16)$ and $(2,8)$ (also $(4,4)$ but then $a=b$). So $(a,b)=(5,20)$ or $(a,b)=(6,12)$. Check: $\\frac{1}{5}+\\frac{1}{20}=\\frac{4+1}{20}=\\frac{5}{20}=\\frac{1}{4}$ and $\\frac{1}{6}+\\frac{1}{12}=\\frac{2+1}{12}=\\frac{3}{12}=\\frac{1}{4}$."
    hints:
      - "Clear the denominators to get a product equation in $a$ and $b$."
      - "Use the factoring trick: add 16 to both sides so the left side factors as $(a-4)(b-4)$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly derives the equation $(a-4)(b-4)=16$."
        - "Systematically lists all valid factor pairs and converts back to $(a,b)$."
        - "Verifies each solution and argues completeness."
---
## Adding and subtracting fractions

To add or subtract fractions, they must share the same denominator. When denominators differ, rewrite each fraction using a **common denominator**, typically the least common multiple (LCM) of the two denominators.

$$\frac{2}{3}+\frac{1}{4}=\frac{8}{12}+\frac{3}{12}=\frac{11}{12}$$

For subtraction the process is identical:

$$\frac{5}{6}-\frac{1}{4}=\frac{10}{12}-\frac{3}{12}=\frac{7}{12}$$

Always simplify the result. If the numerator and denominator share a common factor, divide both by their GCD.

## Multiplying fractions

Multiply numerators together and denominators together:

$$\frac{a}{b}\times\frac{c}{d}=\frac{a\times c}{b\times d}$$

Simplify before multiplying when possible. For example:

$$\frac{3}{8}\times\frac{4}{9}=\frac{3\times 4}{8\times 9}=\frac{12}{72}=\frac{1}{6}$$

Cross-cancelling first: $\frac{3}{8}\times\frac{4}{9}=\frac{\cancel{3}}{\cancel{8}\,2}\times\frac{\cancel{4}\,1}{\cancel{9}\,3}=\frac{1}{6}$.

## Dividing fractions

Dividing by a fraction means multiplying by its **reciprocal**:

$$\frac{a}{b}\div\frac{c}{d}=\frac{a}{b}\times\frac{d}{c}$$

The reciprocal of $\frac{c}{d}$ is $\frac{d}{c}$ (with $c\neq 0$). Example:

$$\frac{5}{6}\div\frac{2}{3}=\frac{5}{6}\times\frac{3}{2}=\frac{15}{12}=\frac{5}{4}$$

## Mixed operations and order of operations

When an expression contains several fraction operations, follow the usual order: multiplication and division before addition and subtraction, and left to right within the same level.

$$\frac{1}{2}+\frac{3}{4}\times\frac{2}{5}=\frac{1}{2}+\frac{6}{20}=\frac{1}{2}+\frac{3}{10}=\frac{5}{10}+\frac{3}{10}=\frac{8}{10}=\frac{4}{5}$$

### Stretch thought

Can $\frac{1}{a}+\frac{1}{b}$ ever equal $\frac{1}{a+b}$? Try a few values and explain what you notice.
