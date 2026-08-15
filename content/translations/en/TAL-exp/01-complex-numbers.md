---
id: "tal-exp-complex"
locale: "en"
title: "Complex Numbers: Forms & Geometry"
strand: "Advanced Mathematics"
summary: "Explore the field of complex numbers, algebraic form, modulus, argument, and geometric interpretation."
objectives:
  - "Manipulate the imaginary unit i such that i^2 = -1"
  - "Convert from algebraic form a + ib to exponential form r e^(i theta)"
  - "Solve polynomial equations in C and use complex numbers in geometry"
prerequisites:
  - "Trigonometry on the unit circle and vector geometry"
vocabulary:
  - en: "Complex conjugate"
    definition: "The conjugate of z = a + ib is bar(z) = a - ib."
  - en: "Modulus"
    definition: "The distance from the origin to the point M representing z, given by |z| = sqrt(a^2 + b^2)."
flashcards:
  - front: "What is the exponential form of a complex number with modulus r and argument theta?"
    back: "z = r e^(i theta) = r (cos theta + i sin theta)"
  - front: "What is |z|^2 in terms of z and its conjugate bar(z)?"
    back: "|z|^2 = z * bar(z)"
exercises:
  - id: "tal-cpx-t1"
    tierTitle: "Direct Application"
    prompt: "Write $\\frac{3+4i}{1-i}$ in algebraic form."
    solution: "Multiply numerator and denominator by $1+i$: $\\frac{(3+4i)(1+i)}{(1-i)(1+i)}=\\frac{-1+7i}{2}=-\\frac12+\\frac72i$."
    hints:
      - "Multiply by the conjugate of the denominator."
  - id: "tal-cpx-t2"
    tierTitle: "Standard Practice"
    prompt: "Using exponential form, compute the exact value of $z^6$ for $z=-2+2\\sqrt3i$."
    solution: "The modulus is $\\sqrt{4+12}=4$. Since the point lies in quadrant II with reference angle $\\pi/3$, an argument is $2\\pi/3$. Thus $z=4e^{2i\\pi/3}$ and, by de Moivre's formula, $z^6=4^6e^{4i\\pi}=4096$."
    hints:
      - "Compute the modulus and identify the quadrant before choosing the argument."
      - "Raise the modulus and multiply the argument by 6."
  - id: "tal-cpx-t3"
    tierTitle: "Synthesis"
    prompt: "Solve $z^3=8i$ in $\\mathbb C$. Give the roots in algebraic form and describe the geometry of their images in the complex plane."
    solution: "Since $8i=8e^{i(\\pi/2+2m\\pi)}$, the roots have modulus $2$ and arguments $\\pi/6+2k\\pi/3$ for $k=0,1,2$. They are $\\sqrt3+i$, $-\\sqrt3+i$, and $-2i$. Their images lie on the circle centered at $O$ with radius $2$, with successive angular gaps of $2\\pi/3$; therefore, they are the vertices of an equilateral triangle centered at $O$."
    hints:
      - "For cube roots, take the cube root of the modulus and divide all arguments by 3."
      - "Use arguments separated by $2\\pi/3$."
    rubric:
      - "Finds all three roots with modulus $2$ and the correct arguments."
      - "Converts the roots correctly to algebraic form."
      - "Uses equal angular spacing to prove the images form an equilateral triangle centered at $O$."
  - id: "tal-cpx-t4"
    tierTitle: "Advanced Challenge"
    prompt: "Let $\\zeta=e^{2i\\pi/3}$ and $N\\in\\mathbb N$. First prove the roots-of-unity filter $1+\\zeta^m+\\zeta^{2m}=3$ when $3\\mid m$ and $0$ otherwise. Use it with the binomial theorem to derive a formula for $\\sum_{\\substack{0\\leq k\\leq N\\\\3\\mid k}}\\binom{N}{k}$, then evaluate $\\binom{12}{0}+\\binom{12}{3}+\\binom{12}{6}+\\binom{12}{9}+\\binom{12}{12}$ without adding the five coefficients individually."
    solution: "If $3\\mid m$, every term in the filter is $1$. Otherwise, $q=\\zeta^m$ is a nontrivial cube root of unity, so $1+q+q^2=(q^3-1)/(q-1)=0$. Expand $(1+\\zeta^j)^N=\\sum_k\\binom Nk\\zeta^{jk}$ for $j=0,1,2$ and sum over $j$. The filter keeps exactly those terms with $3\\mid k$, each with factor $3$, hence $\\sum_{3\\mid k}\\binom Nk=\\frac13\\left(2^N+(1+\\zeta)^N+(1+\\zeta^2)^N\\right)$. Since $1+\\zeta=e^{i\\pi/3}$ and $1+\\zeta^2=e^{-i\\pi/3}$, for $N=12$ both powers equal $1$. The required sum is $(2^{12}+2)/3=1366$."
    hints:
      - "Sum the three binomial expansions for $1$, $\\zeta$, and $\\zeta^2$."
      - "The inner coefficient of $\\binom Nk$ is exactly the roots-of-unity filter."
    rubric:
      - "Proves the three-term roots-of-unity filter for every integer $m$."
      - "Combines three binomial expansions to isolate indices divisible by $3$."
      - "Derives the general filtered-sum formula before substituting $N=12$."
      - "Evaluates the conjugate powers correctly and obtains $1366$."
---

# Complex Numbers

The set of **complex numbers**, denoted $\mathbb{C}$, extends the set of real numbers $\mathbb{R}$ by introducing the imaginary number $i$ such that:

$$i^2 = -1$$

## 1. Algebraic Form and Conjugate

Every complex number $z \in \mathbb{C}$ can be written uniquely in **algebraic form**:

$$z = a + i b \quad (a, b \in \mathbb{R})$$

* $a = \text{Re}(z)$ is the **real part**.
* $b = \text{Im}(z)$ is the **imaginary part**.
* The **conjugate** of $z$ is $\bar{z} = a - i b$.

Notable property: $z \bar{z} = (a+ib)(a-ib) = a^2 + b^2 = |z|^2$.

## 2. Trigonometric and Exponential Forms

In the complex plane with a positively oriented orthonormal coordinate system $(O; \vec{u}, \vec{v})$, every nonzero complex number $z$ is represented by the point $M(a ; b)$.

* **Modulus**: $|z| = \sqrt{a^2 + b^2} = OM$
* **Argument**: $\arg(z) \equiv \theta \pmod{2\pi}$ such that $\cos\theta = \frac{a}{|z|}$ and $\sin\theta = \frac{b}{|z|}$.

Trigonometric form and Euler's formula:

$$z = |z| (\cos\theta + i\sin\theta) = |z| e^{i\theta}$$

where $e^{i\theta} = \cos\theta + i\sin\theta$.

## 3. De Moivre's and Euler's Formulas

For every $\theta \in \mathbb{R}$ and $n \in \mathbb{Z}$:

* **De Moivre's formula**: $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$
* **Euler's formulas**:
  $$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \quad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$
