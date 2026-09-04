---
id: 2de-lines-equations
locale: en
title: Equations of Lines, Parallelism, and Systems
strand: Geometry
summary: Move between the reduced and the Cartesian equation of a line, read a direction vector, and solve a system to find the intersection of two lines.
objectives:
  - Determine the reduced equation of a line from two points or a point and a slope
  - Read a direction vector from a Cartesian equation and test parallelism
  - Solve a two-by-two linear system and interpret the answer geometrically
prerequisites:
  - Vectors, coordinates, and collinearity
  - Affine functions
vocabulary:
  - en: reduced equation
    definition: The writing y equals mx plus p of a line that is not vertical, where m is the slope.
  - en: Cartesian equation
    definition: A writing ax plus by plus c equals zero that describes every line, vertical ones included.
  - en: direction vector
    definition: A nonzero vector collinear with the line, which gives its direction.
flashcards:
  - front: Which lines have no reduced equation?
    back: The vertical lines. A vertical line has equation $x=k$, which cannot be written as $y=mx+p$.
  - front: What is the slope of the line through $A$ and $B$?
    back: $m=\dfrac{y_{B}-y_{A}}{x_{B}-x_{A}}$, provided $x_{A}\neq x_{B}$.
  - front: What is a direction vector of the line $ax+by+c=0$?
    back: $\vec{u}(-b,\;a)$. Any nonzero multiple of it is also a direction vector.
  - front: What do the three possible outcomes of a two-by-two system mean?
    back: One solution means the lines cross, no solution means they are strictly parallel, and infinitely many means they coincide.
exercises:
  - id: 2de-lines-t1
    tierTitle: Direct Application
    prompt: Give the reduced equation of the line passing through $A(0,3)$ with slope $-2$.
    solution: The reduced equation is $y=mx+p$ with $m=-2$. Since the line passes through $A(0,3)$, we get $p=3$, so the equation is $y=-2x+3$.
    hints:
      - A point with abscissa $0$ gives the value of $p$ directly.
  - id: 2de-lines-t2
    tierTitle: Standard Practice
    prompt: The lines $d\colon y=2x-1$ and $d'\colon y=-x+5$ meet at one point. Give the abscissa of that point.
    solution: At the intersection the two expressions of $y$ are equal, so $2x-1=-x+5$, then $3x=6$ and $x=2$. Substituting gives $y=2\times 2-1=3$, so the point is $(2,3)$ and its abscissa is $2$.
    hints:
      - Set the two expressions of $y$ equal to each other.
      - Substitute back to obtain the ordinate and to check the result.
  - id: 2de-lines-t3
    tierTitle: Official Core Synthesis
    prompt: Let $A(-2,5)$ and $B(4,-1)$. Determine a Cartesian equation of the line $(AB)$, give a direction vector, and decide whether the line $\Delta\colon 2x+2y-7=0$ is parallel to $(AB)$. Say whether the two lines are strictly parallel or equal.
    solution: >-
      A direction vector of $(AB)$ is $\vec{AB}(4-(-2),\;-1-5)=(6,\;-6)$, which is collinear with $\vec{u}(1,-1)$. A point $M(x,y)$ lies on $(AB)$ exactly when $\det(\vec{AM},\vec{AB})=0$, that is $(x+2)\times(-6)-(y-5)\times 6=0$. Dividing by $-6$ gives $(x+2)+(y-5)=0$, so a Cartesian equation is $x+y-3=0$. For $\Delta$, a direction vector is $\vec{v}(-2,\;2)$, and $\det(\vec{u},\vec{v})=1\times 2-(-1)\times(-2)=2-2=0$, so the lines are parallel. They are not equal, because $A(-2,5)$ gives $2\times(-2)+2\times 5-7=-4+10-7=-1\neq 0$, so $A$ does not belong to $\Delta$. The two lines are therefore strictly parallel.
    hints:
      - Use the determinant condition to obtain the equation without dividing by a coordinate.
      - Parallel lines are equal only if one point of the first belongs to the second.
    rubric:
      - Obtains a correct Cartesian equation of the line through A and B.
      - Gives a direction vector and shows with a determinant that the two lines are parallel.
      - Tests one point to conclude that the lines are strictly parallel rather than equal.
  - id: 2de-lines-t4
    tierTitle: Advanced Challenge
    prompt: For a real parameter $m$, consider the lines $d_{m}\colon mx+y=1$ and $d'_{m}\colon 4x+my=2$. Classify, according to $m$, the number of common points of $d_{m}$ and $d'_{m}$, and describe the geometric configuration in each case.
    solution: >-
      Direction vectors are $\vec{u}(-1,\;m)$ for $d_{m}$, written as $mx+y-1=0$, and $\vec{v}(-m,\;4)$ for $d'_{m}$. Their determinant is $(-1)\times 4-m\times(-m)=m^{2}-4$. If $m^{2}-4\neq 0$, that is $m\neq 2$ and $m\neq -2$, the direction vectors are not collinear, so the lines are secant and have exactly one common point. If $m=2$, the two equations become $2x+y=1$ and $4x+2y=2$; the second is twice the first, so the lines are equal and have infinitely many common points. If $m=-2$, the equations become $-2x+y=1$ and $4x-2y=2$, that is $y=2x+1$ and $y=2x-1$; the slopes agree but the intercepts differ, so the lines are strictly parallel and have no common point.
    hints:
      - Compute the determinant of two direction vectors and factor it.
      - For each root of the determinant, compare the two equations to separate equal lines from strictly parallel ones.
    rubric:
      - Computes the determinant as the square of m minus four and finds both critical values.
      - Concludes exactly one common point whenever the determinant is nonzero.
      - Distinguishes the two critical values, one giving equal lines and the other strictly parallel lines.
---
## Two Writings of a Line

A line that is not vertical has a **reduced equation**

$$y=mx+p,$$

where $m$ is the **slope** and $p$ the $y$-intercept. Through two points $A$ and $B$ with $x_{A}\neq x_{B}$,

$$m=\frac{y_{B}-y_{A}}{x_{B}-x_{A}}.$$

Vertical lines have no reduced equation; they are written $x=k$. To cover every line, use a **Cartesian equation**

$$ax+by+c=0,\qquad (a,b)\neq(0,0).$$

A Cartesian equation is not unique: multiplying all three coefficients by the same nonzero number gives the same line.

## Direction Vectors

The line $ax+by+c=0$ admits the **direction vector**

$$\vec{u}(-b,\;a).$$

This one fact links the two chapters. Two lines are **parallel** exactly when their direction vectors are collinear, that is when the determinant of those vectors is zero. Two parallel lines are **equal** when, in addition, one point of the first belongs to the second; otherwise they are **strictly parallel**.

To build the equation of the line through $A$ with direction vector $\vec{u}$, write that $\vec{AM}$ and $\vec{u}$ are collinear:

$$\det(\vec{AM},\vec{u})=0.$$

This method never divides by a coordinate, so it also handles vertical lines.

## Systems and Intersections

Finding the common points of two lines means solving

$$\begin{cases}a x+b y=c\\ a'x+b'y=c'\end{cases}$$

by substitution or by combination. The number of solutions is decided by the determinant $ab'-a'b$ of the system.

| Determinant | Solutions | Configuration |
| --- | --- | --- |
| nonzero | exactly one | secant lines |
| zero | none | strictly parallel lines |
| zero | infinitely many | equal lines |

When the determinant vanishes, comparing the two equations separates the last two cases: if one equation is a multiple of the other, the lines coincide.

## A Parameter Changes the Picture

When a coefficient depends on a parameter $m$, the determinant becomes an expression in $m$. Factoring it gives the **critical values** where the configuration changes, and each critical value then needs its own check. That kind of complete classification, rather than a single answer, is what a rigorous discussion looks like.

### Stretch Thought

Three lines are given. Find a condition, using determinants only, that guarantees that they pass through the same point.
