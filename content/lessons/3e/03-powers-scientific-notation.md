---
id: 3e-powers-scientific-notation
order: 4
title: Powers and scientific notation
level: 3e
strand: Numbers and calculation
difficulty: core
estimatedMinutes: 35
summary: Calculate with integer powers, write extreme quantities scientifically, and use exponents to judge magnitude.
objectives:
  - Apply exponent laws with positive and negative integer exponents
  - Calculate with powers of ten
  - Convert between decimal and scientific notation
  - Compare and estimate orders of magnitude
prerequisites:
  - Multiplication and division of signed numbers
  - Place value for decimals
  - Prime factorization
vocabulary:
  - en: exponent
    fr: exposant
    definition: For a positive integer exponent, the number indicating how many equal factors occur in a power.
  - en: scientific notation
    fr: écriture scientifique
    definition: An expression $a\times10^n$ where $1\le |a|<10$ and $n$ is an integer.
  - en: order of magnitude
    fr: ordre de grandeur
    definition: A nearby power of ten used to describe the scale of a quantity.
  - en: magnitude
    fr: grandeur
    definition: The numerical size of a quantity, independently of how it is written.
flashcards:
  - front: What is $a^m\times a^n$?
    back: $a^{m+n}$, because the equal factors are combined.
  - front: What is $a^{-n}$ for nonzero $a$?
    back: $1/a^n$.
  - front: What condition must the coefficient satisfy in scientific notation?
    back: Its absolute value is at least 1 and strictly less than 10.
  - front: How does multiplying by $10^3$ affect a decimal number?
    back: It makes the number one thousand times as large, shifting each digit three places toward greater place values.
generator:
  type: signed-arithmetic
  seed: 31404
  count: 8
  min: -12
  max: 12
tieredExercises:
  - id: "3e-powers-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: 'Simplify and calculate $\frac{2^3\times2^5}{2^4}$.'
    solution: '$\frac{2^3\times2^5}{2^4}=2^{3+5-4}=2^4=16$.'
    hints:
      - "For the same base, add exponents in a product and subtract them in a quotient."
    assessment:
      kind: "numeric"
      expected: 16
  - id: "3e-powers-t2"
    tier: 2
    tierTitle: "Standard Conversion"
    curriculumStatus: "core"
    prompt: 'Write $0.000072$ m in scientific notation.'
    solution: 'Move from $0.000072$ to $7.2$ by multiplying by $10^5$, so compensate with $10^{-5}$: $0.000072\text{ m}=7.2\times10^{-5}\text{ m}$.'
    hints:
      - "The coefficient must be at least $1$ and less than $10$."
      - "Count how many place-value positions separate $0.000072$ and $7.2$."
    assessment:
      kind: "exact"
      expected: "7.2 * 10^-5 m"
      accepted:
        - "7.2×10^-5 m"
        - "7.2e-5 m"
  - id: "3e-powers-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "core"
    prompt: 'A $12$ m observation channel is intended to hold bacteria end to end with no gaps. Each bacterium is approximately $4.8\times10^{-6}$ m long. A report claims that $3.0\times10^6$ bacteria fit in the channel. Estimate the length occupied by that many bacteria, decide whether the claim is plausible, and estimate how many bacteria actually fit. Show the calculations in scientific notation and interpret the comparison.'
    solution: 'The claimed bacteria would occupy $(3.0\times10^6)(4.8\times10^{-6})=14.4\times10^0=1.44\times10^1$ m, or $14.4$ m. This exceeds $12$ m, so the claim is not plausible. The channel capacity is $N=\frac{1.2\times10^1}{4.8\times10^{-6}}=0.25\times10^7=2.5\times10^6$ bacteria. The claim exceeds this estimate by $5.0\times10^5$ bacteria, or about $20\%$ of the capacity.'
    hints:
      - "First multiply the claimed count by the length of one bacterium."
      - "Then divide the channel length by one bacterium's length and compare the two counts."
    assessment:
      kind: "reasoning"
      rubric:
        - 'Estimates the claimed occupied length as $1.44\times10^1$ m, or $14.4$ m.'
        - "Compares $14.4$ m with $12$ m and explains why the claim is not plausible."
        - 'Models and estimates the actual capacity as $2.5\times10^6$ bacteria.'
        - 'Interprets the discrepancy, for example as $5.0\times10^5$ too many bacteria or about $20\%$ above capacity.'
  - id: "3e-powers-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: 'Let $p$ and $q$ be positive integers and $N=2^p5^q$. Prove that the number of trailing zeros in the decimal writing of $N$ is $\min(p,q)$. Then determine every pair $(p,q)$ for which $N$ has exactly $12$ digits and exactly $8$ trailing zeros. Prove that no pair is missing.'
    solution: 'Each trailing zero contributes a factor $10=2\times5$, so the number of complete pairs of factors $2$ and $5$ is $\min(p,q)$. Exactly eight zeros therefore means $\min(p,q)=8$. If $p=8\le q$, write $q=8+k$: then $N=10^8 5^k$. Having $12$ digits means $10^{11}\le N<10^{12}$, so $10^3\le5^k<10^4$. Since $5^4=625$, $5^5=3125$, and $5^6=15625$, only $k=5$ works, giving $(p,q)=(8,13)$. If $q=8\le p$, write $p=8+k$: then $N=10^8 2^k$, so $10^3\le2^k<10^4$. Since $2^9=512$, $2^{10}=1024$, $2^{13}=8192$, and $2^{14}=16384$, exactly $k=10,11,12,13$ work. They give $(18,8),(19,8),(20,8),(21,8)$. The two cases cover whether the minimum exponent is $p$ or $q$, including equality, so the list is complete.'
    hints:
      - "Pair one factor $2$ with one factor $5$ for each factor $10$."
      - 'Twelve digits is equivalent to $10^{11}\le N<10^{12}$.'
      - "After removing $10^8$, bound either $2^k$ or $5^k$ between $10^3$ and $10^4$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Proves the trailing-zero formula using paired prime factors."
        - "Converts the digit condition into the correct powers-of-ten inequality."
        - "Solves both cases and obtains exactly the five pairs $(8,13),(18,8),(19,8),(20,8),(21,8)$."
        - "Uses monotonicity and exhaustive cases to prove completeness."
---
## Meaning and notation

For an integer $n>0$, $a^n$ is a product of $n$ equal factors:

$$a^n=\underbrace{a\times a\times\cdots\times a}_{n\text{ factors}}.$$

Here $a$ is the base and $n$ is the exponent. Repeated multiplication defines powers only when $n$ is a positive integer. The zero and negative cases are extensions chosen to preserve the exponent laws. For $a\ne0$, the quotient $a^n/a^n=1$ corresponds to $a^{n-n}=a^0$, so we define $a^0=1$. Then $a^0/a^n=1/a^n$ corresponds to $a^{-n}$, so we define $a^{-n}=\frac1{a^n}$. Thus $10^{-3}=0.001$.

Parentheses matter: $(-3)^2=9$, whereas $-3^2=-(3^2)=-9$.

## Exponent laws

For nonzero bases whenever a quotient or negative exponent occurs,

$$a^m a^n=a^{m+n},\qquad \frac{a^m}{a^n}=a^{m-n},\qquad (a^m)^n=a^{mn},$$

$$ (ab)^n=a^nb^n,\qquad \left(\frac ab\right)^n=\frac{a^n}{b^n}. $$

Worked example:

$$\frac{(3^2)^4\times3^{-1}}{3^5}=3^{8-1-5}=3^2=9.$$

These laws require the same base for adding or subtracting exponents. In general, $2^3+2^4$ is not $2^7$; it is $8+16=24$.

## Powers of ten and decimal position

Positive powers of ten move digits toward larger place values; negative powers move them toward smaller ones:

$$10^4=10,000,\qquad 10^0=1,\qquad10^{-4}=0.0001.$$

Therefore

$$37.2\times10^3=37,200,\qquad37.2\times10^{-3}=0.0372.$$

Think about multiplication or division by a power of ten, not about a decimal point physically moving.

## Scientific notation

A nonzero number is in scientific notation when it is written

$$a\times10^n\quad\text{with}\quad1\le |a|<10$$

and integer $n$. For example,

$$6,430,000=6.43\times10^6,
\qquad0.000072=7.2\times10^{-5}.$$

The signs of the number and the exponent play different roles: $-4.1\times10^{-3}$ is a negative number close to zero.

For multiplication, multiply coefficients and add exponents, then normalize:

$$(4\times10^7)(6\times10^{-3})=24\times10^4=2.4\times10^5.$$

For addition, first use a common power of ten:

$$3.2\times10^5+7\times10^4=3.2\times10^5+0.7\times10^5=3.9\times10^5.$$

## Magnitude and comparison

For positive numbers in normalized scientific notation, compare exponents first. If they are equal, compare coefficients:

$$8.1\times10^{-7}<2.4\times10^{-6}.$$

An order of magnitude is a nearby power of ten. For a quick product estimate,

$$(2.9\times10^4)(4.2\times10^{-3})\approx(3\times10^4)(4\times10^{-3})=1.2\times10^2.$$

This predicts a result around one hundred and helps detect an exponent error.

## Method and misconceptions

- Translate units before calculating; a correct exponent with inconsistent units is still wrong.
- Keep extra digits during the calculation and round only the final result.
- Normalize the coefficient at the end: $35\times10^4$ is equal to $3.5\times10^5$, but only the second is scientific notation.
- A negative exponent does not make the number negative: $10^{-2}=0.01>0$.

## Extension: counting digits

For a positive integer $N$, if $10^k\le N<10^{k+1}$, then $N$ has $k+1$ decimal digits. This connects powers, inequalities, and magnitude without writing every digit of a large number.
