---
id: "tal-space-geometry"
locale: "en"
title: "Three-Dimensional Geometry (Lines, Planes, and Orthogonality)"
strand: "Three-Dimensional Geometry"
summary: "Vectors in space, parametric representations of lines, Cartesian equations of planes, and the 3D dot product."
objectives:
  - "Establish a parametric representation of a line in R^3"
  - "Determine the Cartesian equation of a plane ax + by + cz + d = 0 from a normal vector"
  - "Calculate the distance from a point to a plane and determine intersections"
prerequisites:
  - "The 2D dot product and vector geometry"
vocabulary:
  - en: "Parametric representation"
    definition: "A system expressing x, y, and z in terms of a real parameter t to describe the points on a line."
  - en: "Normal vector to a plane"
    definition: "A nonzero vector orthogonal to every direction vector of the plane P."
flashcards:
  - front: "What is the general Cartesian equation of a plane with normal vector n(a, b, c)?"
    back: "a*x + b*y + c*z + d = 0"
  - front: "How can we test whether two planes in space are orthogonal?"
    back: "Their normal vectors n1 and n2 must have a zero dot product (n1 . n2 = 0)."
exercises:
  - id: "tal-geo3d-t1"
    tierTitle: "Direct Application"
    prompt: "Does the point $A(1,2,9)$ belong to the plane $\\mathcal P:2x-3y+z-5=0$? Answer yes or no."
    solution: "Substitution gives $2(1)-3(2)+9-5=0$, so $A$ belongs to $\\mathcal P$."
    hints:
      - "Substitute the three coordinates into the plane equation."
  - id: "tal-geo3d-t2"
    tierTitle: "Standard Practice"
    prompt: "Find the intersection of the line $D:(x,y,z)=(1,2,0)+t(1,-1,1)$ with the plane $\\mathcal P:x+y+z=5$. Give the parameter and the point."
    solution: "On $D$, $x=1+t$, $y=2-t$, and $z=t$. Substitution into the plane equation gives $3+t=5$, so $t=2$. The intersection point is $(3,0,2)$."
    hints:
      - "Substitute the parametric coordinates into the plane equation."
      - "Use the resulting parameter value in all three coordinates."
  - id: "tal-geo3d-t3"
    tierTitle: "Synthesis"
    prompt: "Let $S=(1,0,0)$ and $\\mathcal P:x+2y+2z-9=0$. Determine the orthogonal projection $H$ of $S$ onto $\\mathcal P$, then compute $d(S,\\mathcal P)$."
    solution: "A normal vector is $n=(1,2,2)$, so the perpendicular through $S$ is $H=S+tn=(1+t,2t,2t)$. Imposing $H\\in\\mathcal P$ gives $1+t+4t+4t-9=0$, hence $t=8/9$. Thus $H=(17/9,16/9,16/9)$. Finally, $SH=|t|\\|n\\|=(8/9)\\cdot3=8/3$."
    hints:
      - "The line from $S$ to its projection is parallel to a normal vector of the plane."
      - "Find its intersection with the plane, then compute $SH$."
  - id: "tal-geo3d-t4"
    tierTitle: "Advanced Challenge"
    prompt: "Consider $D_1:(x,y,z)=(0,0,0)+t(1,0,1)$ and $D_2:(x,y,z)=(0,1,0)+s(0,1,1)$. Prove that the lines are skew. Without quoting a line-distance formula, find points $P\\in D_1$ and $Q\\in D_2$ such that $PQ$ is perpendicular to both lines, prove that this segment attains the minimum distance, and compute that distance."
    solution: "The directions $u=(1,0,1)$ and $v=(0,1,1)$ are not collinear. Equality $(t,0,t)=(0,1+s,s)$ would force $t=0$, $s=-1$, then contradictory third coordinates, so the lines are skew. Write $P=(t,0,t)$ and $Q=(0,1+s,s)$. Then $\\overrightarrow{PQ}=(-t,1+s,s-t)$. Orthogonality to $u$ and $v$ gives $s-2t=0$ and $1+2s-t=0$, hence $t=-1/3$, $s=-2/3$. Thus $P=(-1/3,0,-1/3)$, $Q=(0,1/3,-2/3)$ and $PQ=\\sqrt{3(1/3)^2}=1/\\sqrt3$. Any other connector equals $\\overrightarrow{PQ}+\\alpha u+\\beta v$; since $PQ$ is orthogonal to both directions, the Pythagorean theorem gives squared length $PQ^2+\\|\\alpha u+\\beta v\\|^2\\geq PQ^2$. Therefore this connector is minimal."
    hints:
      - "First test whether the two parametric representations can describe the same point."
      - "Write generic points $P(t)$ and $Q(s)$, then impose two dot-product equations."
      - "For minimality, compare any other connector with the perpendicular connector using an orthogonal decomposition."
    rubric:
      - "Shows that the direction vectors are not collinear and that the lines do not intersect."
      - "Solves the two orthogonality equations and obtains the correct points $P$ and $Q$."
      - "Proves that the common perpendicular minimizes length rather than quoting a formula."
      - "Computes the exact distance $1/\\sqrt3$."
---

# Three-Dimensional Geometry (Lines, Planes, and Orthogonality)

Vector geometry in space $\mathbb{R}^3$ generalizes the tools used in the plane by means of an orthonormal coordinate system $(O; \vec{i}, \vec{j}, \vec{k})$.

## 1. Parametric Representation of a Line

A line $D$ passing through $A(x_A, y_A, z_A)$ with direction vector $\vec{u}(a, b, c)$ is defined by:

$$\begin{cases} x = x_A + a t \\ y = y_A + b t \\ z = z_A + c t \end{cases} \quad (t \in \mathbb{R})$$

## 2. Cartesian Equation of a Plane

A plane $\mathcal{P}$ passing through $A(x_A, y_A, z_A)$ and having a nonzero **normal vector** $\vec{n}(a, b, c)$ is the set of points $M(x, y, z)$ such that $\vec{AM} \cdot \vec{n} = 0$.

Its Cartesian equation is:

$$a x + b y + c z + d = 0$$

where $d = -(a x_A + b y_A + c z_A)$.

## 3. Projection and Distance to a Plane

The distance from a point $M_0(x_0, y_0, z_0)$ to a plane $\mathcal{P} : a x + b y + c z + d = 0$ is the length $M_0 H$, where $H$ is the orthogonal projection of $M_0$ onto $\mathcal{P}$:

$$d(M_0, \mathcal{P}) = \frac{|a x_0 + b y_0 + c z_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$
