---
id: 3e-arithmetic-primes
locale: en
title: Prime Factors and the Euclidean Algorithm
strand: Arithmetic
summary: Use prime factorization and the Euclidean algorithm to calculate greatest common divisors and reduce fractions completely.
objectives:
  - Recognize prime numbers and find prime factorizations
  - Calculate a greatest common divisor by an appropriate method
  - Reduce a fraction to lowest terms
  - Explain and apply the Euclidean algorithm
prerequisites:
  - Multiplication tables and divisibility tests
  - Euclidean division
  - Equivalent fractions
vocabulary:
  - en: prime number
    definition: A whole number greater than 1 with exactly two positive divisors, 1 and itself.
  - en: prime factorization
    definition: An expression of a positive integer as a product of prime numbers.
  - en: greatest common divisor
    definition: The greatest positive integer that divides each of two integers.
  - en: irreducible fraction
    definition: A fraction whose numerator and denominator have greatest common divisor 1.
flashcards:
  - front: Is 1 a prime number?
    back: No. A prime number has exactly two positive divisors; 1 has only one.
  - front: How does prime factorization reveal a greatest common divisor?
    back: Keep each common prime factor with the smaller exponent appearing in the two factorizations.
  - front: State one step of the Euclidean algorithm.
    back: Replace the pair (a,b), with a greater than b, by (b,r), where r is the remainder when a is divided by b.
  - front: When is a fraction irreducible?
    back: When the greatest common divisor of its numerator and denominator is 1.
exercises:
  - id: 3e-primes-t1
    tierTitle: Direct Application
    prompt: Write $756$ as a product of prime factors.
    solution: $756=2\times378=2^2\times189=2^2\times3\times63=2^2\times3^3\times7$.
    hints:
      - Divide successively by the smallest possible prime.
    expected: 2^2 * 3^3 * 7
    accepted:
      - 2² × 3³ × 7
      - 2^2x3^3x7
  - id: 3e-primes-t2
    tierTitle: Brevet-Standard Problem
    prompt: A club has $84$ red badges and $126$ blue badges. It wants to make the greatest possible number of identical prize bags, using every badge. How many bags can it make, and what will each bag contain?
    solution: The number of bags must divide both $84$ and $126$. Since $84=2^2\times3\times7$ and $126=2\times3^2\times7$, their greatest common divisor is $2\times3\times7=42$. The club can make $42$ bags, each containing $84/42=2$ red badges and $126/42=3$ blue badges.
    hints:
      - The number of bags is a common divisor of the two quantities.
      - The words greatest possible indicate that you need the greatest common divisor.
    expected: 42 bags; 2 red and 3 blue per bag
    accepted:
      - 42, 2 red, 3 blue
      - 42 bags with 2 red and 3 blue
  - id: 3e-primes-t3
    tierTitle: Synthesis
    prompt: Reduce $\frac{378}{630}$ to lowest terms using the Euclidean algorithm, then prove that the resulting fraction is irreducible.
    solution: $630=378\times1+252$, $378=252\times1+126$, and $252=126\times2+0$. Thus $\gcd(378,630)=126$, so $\frac{378}{630}=\frac{3}{5}$. Since $3$ and $5$ are distinct prime numbers, their only common positive divisor is $1$; therefore $\frac35$ is irreducible.
    hints:
      - Continue dividing the previous divisor by the previous remainder.
      - The last nonzero remainder is the greatest common divisor.
    rubric:
      - Performs valid Euclidean divisions and obtains the greatest common divisor $126$.
      - Divides numerator and denominator by $126$ to obtain $\frac35$.
      - Justifies that $3$ and $5$ are coprime, rather than merely asserting that the work is finished.
  - id: 3e-primes-t4
    tierTitle: Advanced Challenge
    prompt: For an integer $n\ge2$, let $A=n(n+1)$ and $B=(n+1)(n+2)$. Determine $\gcd(A,B)$ for every $n$, giving separate cases when necessary. Hence write $\frac AB$ in lowest terms and prove that your classification is complete.
    solution: Both numbers contain $n+1$, so $\gcd(A,B)=(n+1)\gcd(n,n+2)$. By the Euclidean algorithm, $\gcd(n,n+2)=\gcd(n,2)$. If $n$ is odd, this gcd is $1$, so $\gcd(A,B)=n+1$ and $\frac AB=\frac{n}{n+2}$ is irreducible. If $n$ is even, the gcd is $2$, so $\gcd(A,B)=2(n+1)$ and $\frac AB=\frac{n/2}{(n+2)/2}$. The two new consecutive integers $n/2$ and $n/2+1$ are coprime, so this fraction is irreducible. Every integer is either odd or even, which proves that the two cases are exhaustive.
    hints:
      - First factor out the common factor $n+1$ from the gcd.
      - Use $\gcd(n,n+2)=\gcd(n,2)$ and classify $n$ by parity.
    rubric:
      - Reduces the calculation to $(n+1)\gcd(n,2)$ with a valid gcd argument.
      - Treats odd and even $n$ separately and obtains both correct gcd formulas.
      - Gives the reduced fraction in each case and proves that it is irreducible.
      - Explains why parity makes the classification exhaustive.
---
## Prime Numbers: The Building Blocks

A **prime number** is a whole number greater than $1$ with exactly two positive divisors: $1$ and itself. The first primes are

$$2,3,5,7,11,13,17,19,23,29,\ldots$$

The number $2$ is the only even prime. The number $1$ is not prime, because it has only one positive divisor. A number greater than $1$ that is not prime is composite.

To test whether $n$ is prime, it is enough to try prime divisors no greater than $\sqrt n$. For example, $97$ is not divisible by $2$, $3$, $5$, or $7$, and the next prime exceeds $\sqrt{97}$. Therefore $97$ is prime.

## Unique Prime Factorization

Every integer greater than $1$ can be written as a product of primes, uniquely apart from their order. Divide by the smallest available prime until the quotient is $1$:

$$360=2\times180=2^2\times90=2^3\times45=2^3\times3^2\times5.$$

A factor tree gives the same result. Check a factorization by multiplying the factors back together.

**Common misconception:** stopping at $360=4\times90$ is not a prime factorization, because $4$ and $90$ are composite. Every final factor must be prime.

## Greatest Common Divisor from Prime Factors

The greatest common divisor of $a$ and $b$, written $\gcd(a,b)$, contains exactly the prime factors shared by both numbers, each with the smaller exponent.

For example,

$$540=2^2\times3^3\times5,\qquad 756=2^2\times3^3\times7,$$

so

$$\gcd(540,756)=2^2\times3^3=108.$$

This method is transparent when both factorizations are easy. Listing every divisor works only for small numbers and is prone to omissions.

## The Euclidean Algorithm

For larger numbers, repeated Euclidean division is often faster. The key fact is

$$\gcd(a,b)=\gcd(b,r)\quad\text{when }a=bq+r.$$

Indeed, a number divides both $a$ and $b$ exactly when it divides both $b$ and $a-bq=r$. Thus replacing $(a,b)$ by $(b,r)$ does not change the common divisors.

Worked example:

$$882=630\times1+252,$$

$$630=252\times2+126,$$

$$252=126\times2+0.$$

The last nonzero remainder is $126$, so $\gcd(882,630)=126$.

**Common misconception:** the gcd is not the final remainder $0$; it is the last nonzero remainder.

## Irreducible Fractions

A fraction $\frac ab$ with $b\ne0$ is irreducible exactly when $\gcd(a,b)=1$. To reduce a fraction completely, divide both terms by their gcd:

$$\frac{882}{630}=\frac{882\div126}{630\div126}=\frac75.$$

Cancel only **factors**, never terms joined by addition. For instance, $\frac{6+3}{6}$ cannot be simplified by crossing out the two sixes; its value is $\frac96=\frac32$.

## Choosing a Method

- Use divisibility tests and a factor tree when prime factors are requested.
- Use common prime factors when factorizations are already known.
- Use the Euclidean algorithm for a gcd of two larger integers.
- In a grouping problem, check that the gcd answers the context: the number of groups must divide every available quantity.

## Extension: Why Primes Never End

Suppose there were only finitely many primes $p_1,\ldots,p_k$. The number $N=p_1p_2\cdots p_k+1$ leaves remainder $1$ when divided by every prime on the list. Yet $N>1$ has a prime divisor. That divisor is not on the supposedly complete list, a contradiction. Therefore there are infinitely many primes.
