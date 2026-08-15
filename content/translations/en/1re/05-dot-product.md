---
id: "1re-dot-product"
locale: "en"
title: "The Dot Product in the Plane"
strand: "Geometry and Vectors"
summary: "Geometric and algebraic definitions of the dot product, orthogonality, projection, and the law of cosines."
objectives:
  - "Calculate a dot product using coordinates: u.v = xx' + yy'"
  - "Use orthogonal projection and the cosine formula"
  - "Apply the law of cosines to calculate lengths and angles in a triangle"
prerequisites:
  - "Vectors, coordinates, and norms"
  - "Trigonometry"
vocabulary:
  - en: "Dot product"
    definition: "An operation that assigns to two vectors u and v a real number denoted by u . v."
  - en: "Orthogonality"
    definition: "Two vectors are orthogonal if and only if their dot product is zero."
flashcards:
  - front: "What is the coordinate formula for the dot product of u(x; y) and v(x'; y')?"
    back: "u . v = x*x' + y*y'"
  - front: "What does the law of cosines state for a triangle ABC?"
    back: "a^2 = b^2 + c^2 - 2bc cos(A)"
exercises:
  - id: "1re-dot-t1"
    tierTitle: "Direct Application"
    prompt: "In an orthonormal coordinate system, let $\\vec u=(3,-2)$ and $\\vec v=(4,5)$. Compute $\\vec u\\cdot\\vec v$."
    solution: "$\\vec u\\cdot\\vec v=3\\times4+(-2)\\times5=12-10=2$."
    hints:
      - "Multiply corresponding coordinates and add."
  - id: "1re-dot-t2"
    tierTitle: "Standard Practice"
    prompt: "In triangle $ABC$, $AB=5$, $AC=8$, and $\\widehat{BAC}=60^\\circ$. Use a dot-product identity to calculate $BC$."
    solution: "First, $\\vec{AB}\\cdot\\vec{AC}=AB\\,AC\\cos60^\\circ=20$. Since $\\vec{BC}=\\vec{AC}-\\vec{AB}$, $BC^2=AC^2+AB^2-2\\vec{AB}\\cdot\\vec{AC}=64+25-40=49$. Hence $BC=7$."
    hints:
      - "Compute $\\vec{AB}\\cdot\\vec{AC}$ first."
      - "Expand $\\|\\vec{AC}-\\vec{AB}\\|^2$."
  - id: "1re-dot-t3"
    tierTitle: "Synthesis"
    prompt: "Let $A=(-2,1)$ and $B=(4,3)$. Determine and identify geometrically the locus of points $M=(x,y)$ satisfying $MA^2-MB^2=12$."
    solution: "Using coordinates, $MA^2=(x+2)^2+(y-1)^2$ and $MB^2=(x-4)^2+(y-3)^2$. Their difference is $12x+4y-20$. Thus the condition is $12x+4y-20=12$, or $3x+y=8$. The locus is therefore the straight line with equation $3x+y=8$; its normal vector $(3,1)$ is parallel to $\\vec{AB}=(6,2)$, so the line is perpendicular to $AB$."
    hints:
      - "Write both squared distances before expanding."
      - "The quadratic terms cancel; interpret the normal vector of the resulting equation."
    rubric:
      - "Expands the dot-product condition into a valid Cartesian equation."
      - "Obtains a line equivalent to $3x+y=8$."
      - "Justifies geometrically why the locus is perpendicular to $AB$."
  - id: "1re-dot-t4"
    tierTitle: "Advanced Challenge"
    prompt: "Let $ABC$ be a non-equilateral triangle with circumcenter $O$, centroid $G$, and orthocenter $H$. Taking $O$ as vector origin, prove by dot products that $\\vec{OH}=\\vec{OA}+\\vec{OB}+\\vec{OC}$. Deduce that $O,G,H$ are collinear and that $GH=2OG$."
    solution: "Write $\\vec{OA}=a$, $\\vec{OB}=b$, and $\\vec{OC}=c$. Since $O$ is the circumcenter, $\\|a\\|=\\|b\\|=\\|c\\|$. Put $h=a+b+c$. Then the direction of $AH$ is $h-a=b+c$, while the direction of $BC$ is $c-b$. Their dot product is $(b+c)\\cdot(c-b)=\\|c\\|^2-\\|b\\|^2=0$, so $AH\\perp BC$. Cyclically, the point with position vector $h$ lies on all three altitudes; it is $H$. The centroid has position vector $g=(a+b+c)/3=h/3$, hence $\\vec{OH}=3\\vec{OG}$. Therefore $O,G,H$ are collinear, with $G$ between $O$ and $H$, and $GH=OH-OG=2OG$."
    hints:
      - "The three vectors $a,b,c$ have equal norms because their endpoints lie on the circumcircle."
      - "Test whether the point with vector $a+b+c$ lies on the altitude from $A$."
      - "Use the centroid formula $g=(a+b+c)/3$."
    rubric:
      - "Uses equal circumradii to prove $(b+c)\\cdot(c-b)=0$ and its cyclic analogues."
      - "Correctly identifies the point with vector $a+b+c$ as the orthocenter."
      - "Uses the centroid vector formula to derive $\\vec{OH}=3\\vec{OG}$."
      - "Concludes collinearity and the length relation $GH=2OG$."
---

# The Dot Product in the Plane

The **dot product** connects the lengths of and angles between two vectors. It is the standard tool for working with orthogonality and calculating distances in analytic geometry.

## 1. Definitions of the Dot Product

Consider two vectors $\vec{u}$ and $\vec{v}$:

### Trigonometric Formula
If $\vec{u} \neq \vec{0}$ and $\vec{v} \neq \vec{0}$:

$$\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\vec{u}, \vec{v})$$

### Coordinate Formula (in an Orthonormal Coordinate System)
If $\vec{u}(x, y)$ and $\vec{v}(x', y')$:

$$\vec{u} \cdot \vec{v} = x x' + y y'$$

## 2. Law of Cosines (Generalized Pythagorean Theorem)

In any triangle $ABC$:

$$BC^2 = AB^2 + AC^2 - 2 \times AB \times AC \times \cos(\widehat{BAC})$$

If the triangle is right at $A$, then $\cos(\widehat{BAC}) = 0$, and we recover the standard Pythagorean theorem: $BC^2 = AB^2 + AC^2$.

## 3. Cartesian Equation of a Line and Normal Vector

A line $d$ passing through $A(x_A, y_A)$ with normal vector $\vec{n}(a, b)$ has Cartesian equation:

$$a(x - x_A) + b(y - y_A) = 0 \implies a x + b y + c = 0$$
