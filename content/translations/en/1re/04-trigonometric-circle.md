---
id: "1re-trigonometric-circle"
locale: "en"
title: "The Unit Circle and Sine/Cosine Functions"
strand: "Geometry and Trigonometry"
summary: "Wrapping the number line around the unit circle, radian measure, special-angle values, and properties of the cosine and sine functions."
objectives:
  - "Convert degrees to radians and plot angles on the unit circle"
  - "Know the special-angle values of cos(x) and sin(x) perfectly"
  - "Solve simple trigonometric equations on [0, 2π)"
prerequisites:
  - "The Pythagorean theorem and right-triangle trigonometry"
vocabulary:
  - en: "Radian"
    definition: "A unit of angle measure such that a half-turn (180 deg) is equal to pi radians."
  - en: "Trigonometric circle"
    definition: "A circle centered at the origin with radius 1, oriented counterclockwise in the positive direction."
flashcards:
  - front: "What are the exact values of cos(pi/3) and sin(pi/3)?"
    back: "cos(pi/3) = 1/2 and sin(pi/3) = sqrt(3)/2"
  - front: "What fundamental identity relates cos(x) and sin(x) for every real number x?"
    back: "cos^2(x) + sin^2(x) = 1"
exercises:
  - id: "1re-trig-t1"
    tierTitle: "Direct Application"
    prompt: "Give the exact values of $\\cos(7\\pi/6)$ and $\\sin(7\\pi/6)$."
    solution: "The angle $7\\pi/6=\\pi+\\pi/6$ lies in the third quadrant. Therefore $\\cos(7\\pi/6)=-\\cos(\\pi/6)=-\\sqrt{3}/2$ and $\\sin(7\\pi/6)=-\\sin(\\pi/6)=-1/2$."
    hints:
      - "Use the reference angle $\\pi/6$ and the signs in the third quadrant."
  - id: "1re-trig-t2"
    tierTitle: "Standard Practice"
    prompt: "Solve $2\\cos(x-\\pi/3)=1$ for $x\\in[0,2\\pi)$. Give the complete solution set."
    solution: "The equation is $\\cos(x-\\pi/3)=1/2$. Thus $x-\\pi/3=\\pm\\pi/3+2k\\pi$, so $x=2k\\pi$ or $x=2\\pi/3+2k\\pi$. In $[0,2\\pi)$, the solutions are $0$ and $2\\pi/3$."
    hints:
      - "First solve $\\cos y=1/2$ with $y=x-\\pi/3$."
      - "Keep only the representatives that lie in $[0,2\\pi)$."
  - id: "1re-trig-t3"
    tierTitle: "Synthesis"
    prompt: "Let $S$ be the sum of all distinct solutions of $2\\sin^2 x-3\\sin x+1=0$ on $[0,2\\pi)$. Find the coefficient $c$ such that $S=c\\pi$."
    solution: "Set $s=\\sin x$. The equation factors as $(2s-1)(s-1)=0$, so $\\sin x=1/2$ or $\\sin x=1$. On $[0,2\\pi)$ this gives $x=\\pi/6,5\\pi/6,\\pi/2$. Their sum is $\\pi/6+5\\pi/6+\\pi/2=3\\pi/2$, so the requested coefficient is $3/2$."
    hints:
      - "Treat $\\sin x$ as the unknown in a quadratic equation."
      - "Solve each resulting basic trigonometric equation on the stated interval."
  - id: "1re-trig-t4"
    tierTitle: "Advanced Challenge"
    prompt: "Prove that, for real $a,b$ not both zero, the range of $a\\cos x+b\\sin x$ is $[-\\sqrt{a^2+b^2},\\sqrt{a^2+b^2}]$. Hence determine all real parameters $m$ for which $(m-1)\\cos x+(m+1)\\sin x=2m$ has a real solution, and describe what is special at the boundary parameter values."
    solution: "Let $R=\\sqrt{a^2+b^2}>0$ and choose $\\varphi$ with $\\cos\\varphi=a/R$ and $\\sin\\varphi=b/R$. The addition formula gives $a\\cos x+b\\sin x=R\\cos(x-\\varphi)$, whose range is $[-R,R]$. In the parameter equation, $R^2=(m-1)^2+(m+1)^2=2m^2+2$. A solution exists exactly when $|2m|\\le R$, equivalently $4m^2\\le2m^2+2$, hence $|m|\\le1$. If $|m|<1$, the target lies strictly inside the range and there are two solutions modulo $2\\pi$. If $m=1$ or $m=-1$, equality holds, so there is one solution modulo $2\\pi$ (the harmonic expression is at an extremum)."
    hints:
      - "Normalize $(a,b)$ by its Euclidean norm and introduce an angle $\\varphi$."
      - "Existence is equivalent to $|2m|\\le\\sqrt{(m-1)^2+(m+1)^2}$."
    rubric:
      - "Derives the harmonic identity $a\\cos x+b\\sin x=R\\cos(x-\\varphi)$ with $R=\\sqrt{a^2+b^2}$."
      - "Uses the range of cosine to obtain a necessary and sufficient existence condition."
      - "Solves the parameter inequality correctly to get $m\\in[-1,1]$."
      - "Explains the two-solution interior case and the tangency/extremum behavior at $m=\\pm1$."
---

# The Unit Circle and Sine/Cosine Functions

**Trigonometry** relates angles to distances and coordinates in the plane by wrapping the number line around the unit circle.

## 1. Wrapping and Radian Measure

The **unit circle** is a circle with center $O$ and radius $1$, oriented in the positive direction (counterclockwise).

A **radian** is the measure of a central angle that subtends an arc whose length is equal to the circle's radius. Thus:

$$\pi \text{ radians} = 180^\circ$$

## 2. Essential Special-Angle Values

| $x$ (rad) | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $\cos(x)$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| $\sin(x)$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ |

## 3. Properties and Fundamental Identities

For every real number $x$:

$$\cos^2(x) + \sin^2(x) = 1$$

Symmetry and shift identities:
* $\cos(-x) = \cos(x)$ and $\sin(-x) = -\sin(x)$ (parity)
* $\cos(x + \pi) = -\cos(x)$ and $\sin(x + \pi) = -\sin(x)$
* $\cos(\pi - x) = -\cos(x)$ and $\sin(\pi - x) = \sin(x)$
