---
id: 1re-derivatives
locale: en
title: Derivatives and Tangent Lines
strand: Analysis and Functions
summary: Master the derivative at a point, the equation of a tangent line, and the analysis of a function's monotonic behavior.
objectives:
  - Calculate the derivative at a point as the limit of an average rate of change
  - Determine the Cartesian equation of the tangent line at a point
  - Create a monotonicity chart from the sign of the derivative
prerequisites:
  - Functions and graphical representations
  - Equations of lines and slope
vocabulary:
  - en: Derivative at a point
    definition: The slope of the tangent line to the curve at a point a, denoted f'(a).
  - en: Tangent line
    definition: A line that touches the curve at the point (a, f(a)) and locally follows its direction.
flashcards:
  - front: What is the formula for the equation of the tangent line at the point with x-coordinate a?
    back: y = f'(a)(x - a) + f(a)
  - front: What does f'(a) > 0 on an interval I mean?
    back: The function f is strictly increasing on the interval I.
exercises:
  - id: 1re-derivatives-t1
    tierTitle: Direct Application
    prompt: Find the equation of the tangent to $f(x)=x^2$ at $x=2$.
    solution: $f'(x)=2x$, so $f'(2)=4$ and $f(2)=4$. The tangent is $y=4(x-2)+4=4x-4$.
    hints:
      - Use $y=f'(a)(x-a)+f(a)$ with $a=2$.
  - id: 1re-derivatives-t2
    tierTitle: Standard Practice
    prompt: Let $f(x)=x^3-3x^2-9x+5$. Use the derivative to determine the minimum value of $f$ on $[0,4]$.
    solution: $f'(x)=3x^2-6x-9=3(x+1)(x-3)$. On $[0,4]$, the derivative is negative on $[0,3)$ and positive on $(3,4]$, so $f$ decreases then increases and reaches its minimum at $x=3$. Since $f(3)=27-27-27+5=-22$, the minimum value is $-22$.
    hints:
      - Factor the derivative and make its sign chart.
      - Compare the critical point with the interval endpoints.
  - id: 1re-derivatives-t3
    tierTitle: Synthesis
    prompt: Find every tangent to the parabola $y=x^2$ that passes through the point $P(0,-4)$.
    solution: At x-coordinate $a$, the tangent has equation $y=2a(x-a)+a^2=2ax-a^2$. It passes through $P$ exactly when $-4=-a^2$, so $a=2$ or $a=-2$. The two tangents are $y=4x-4$ and $y=-4x-4$.
    hints:
      - Write the tangent at a generic x-coordinate $a$.
      - Substitute the coordinates of $P$ into that tangent equation.
    rubric:
      - Derives the generic tangent $y=2ax-a^2$.
      - Finds both x-coordinates of contact $a=2$ and $a=-2$.
      - Gives both tangent equations and no extras.
  - id: 1re-derivatives-t4
    tierTitle: Advanced Challenge
    prompt: For $f(x)=x^3-3x$ and a real parameter $k$, classify the number of distinct tangents to the graph of $f$ that pass through $P(1,k)$. Prove the classification, including the boundary values of $k$.
    solution: The tangent at x-coordinate $a$ is $y=(3a^2-3)(x-a)+a^3-3a$. It passes through $(1,k)$ exactly when $k=g(a)=-2a^3+3a^2-3$. Now $g'(a)=6a(1-a)$, so $g$ decreases on $(-\infty,0]$, increases on $[0,1]$, and decreases on $[1,+\infty)$. Its local minimum and maximum are $g(0)=-3$ and $g(1)=-2$. Therefore there are three x-coordinates of contact when $-3<k<-2$, two when $k=-3$ or $k=-2$, and one when $k<-3$ or $k>-2$. At $k=-3$, $g(a)+3=a^2(3-2a)$ gives $a=0$ or $a=3/2$; at $k=-2$, $g(a)+2=-(a-1)^2(2a+1)$ gives $a=1$ or $a=-1/2$, confirming two distinct tangents at each boundary. Distinct x-coordinates of contact here give distinct tangent lines, so this is also the tangent count.
    hints:
      - Write the tangent at a generic x-coordinate of contact $a$ and require it to contain $(1,k)$.
      - Analyze the monotonicity of the resulting cubic function $g(a)$.
      - Factor the equations at $k=-3$ and $k=-2$ to count distinct boundary solutions.
    rubric:
      - Derives the condition $k=-2a^3+3a^2-3$.
      - Uses the monotonicity of this cubic to obtain counts one, two, and three in the correct parameter ranges.
      - Checks both boundary values and justifies that the resulting tangent lines are distinct.
---
# Derivatives and Tangent Lines

The **derivative at a point** measures the sensitivity or instantaneous rate of change of a function $f$ when its variable changes by a very small amount around a point $a$.

## 1. Definition of the Derivative at a Point

Let $f$ be a function defined on an interval $I$ and let $a \in I$. The average rate of change of $f$ between $a$ and $a+h$ (with $h \neq 0$) is:

$$\tau(h) = \frac{f(a+h) - f(a)}{h}$$

If this average rate of change has a finite limit as $h \to 0$, the function $f$ is said to be **differentiable at $a$**, and this limit is the derivative $f'(a)$:

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

## 2. Equation of the Tangent Line

The **tangent line** to the graph $\mathcal{C}_f$ at the point $A(a ; f(a))$ is the line with slope $f'(a)$ that passes through $A$. Its equation is:

$$y = f'(a)(x - a) + f(a)$$

## 3. Relationship Between the Sign of the Derivative and Monotonic Behavior

* If $f'(x) > 0$ for every $x \in I$, then $f$ is **strictly increasing** on $I$.
* If $f'(x) < 0$ for every $x \in I$, then $f$ is **strictly decreasing** on $I$.
* If $f'(x) = 0$ for every $x \in I$, then $f$ is **constant** on $I$.
