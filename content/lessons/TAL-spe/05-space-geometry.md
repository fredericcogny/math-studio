---
id: "tal-space-geometry"
order: 5
title: "Géométrie dans l'Espace (Droites, Plans & Orthogonalité)"
level: "TAL-spe"
strand: "Géométrie dans l'espace"
difficulty: "core"
estimatedMinutes: 40
summary: "Vecteurs de l'espace, représentation paramétrique de droite, équation cartésienne de plan et produit scalaire 3D."
objectives:
  - "Établir une représentation paramétrique de droite dans R^3"
  - "Déterminer l'équation cartésienne d'un plan ax + by + cz + d = 0 à partir d'un vecteur normal"
  - "Calculer la distance d'un point à un plan et déterminer les intersections"
prerequisites:
  - "Produit scalaire 2D et géométrie vectorielle"
vocabulary:
  - en: "Parametric representation"
    fr: "Représentation paramétrique"
    definition: "Système exprimant x, y, z en fonction d'un paramètre réel t pour décrire les points d'une droite."
  - en: "Normal vector to a plane"
    fr: "Vecteur normal à un plan"
    definition: "Vecteur non nul orthogonal à tout vecteur directeur du plan P."
flashcards:
  - front: "Quelle est l'équation cartésienne générale d'un plan de vecteur normal n(a, b, c) ?"
    back: "a*x + b*y + c*z + d = 0"
  - front: "Comment teste-t-on si deux plans sont orthogonaux dans l'espace ?"
    back: "Leurs vecteurs normaux n1 et n2 doivent avoir un produit scalaire nul (n1 . n2 = 0)."
generator:
  type: "signed-arithmetic"
  seed: 205
  count: 4
  min: -4
  max: 6
tieredExercises:
  - id: "tal-geo3d-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Does the point $A(1,2,9)$ belong to the plane $\\mathcal P:2x-3y+z-5=0$? Answer yes or no."
    solution: "Substitution gives $2(1)-3(2)+9-5=0$, so $A$ belongs to $\\mathcal P$."
    hints:
      - "Substitute the three coordinates into the plane equation."
    assessment:
      kind: "exact"
      expected: "yes"
      accepted:
        - "Yes"
  - id: "tal-geo3d-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Find the intersection of the line $D:(x,y,z)=(1,2,0)+t(1,-1,1)$ with the plane $\\mathcal P:x+y+z=5$. Give the parameter and the point."
    solution: "On $D$, $x=1+t$, $y=2-t$, and $z=t$. Substitution into the plane equation gives $3+t=5$, so $t=2$. The intersection point is $(3,0,2)$."
    hints:
      - "Substitute the parametric coordinates into the plane equation."
      - "Use the resulting parameter value in all three coordinates."
    assessment:
      kind: "exact"
      expected: "t=2; (3,0,2)"
      accepted:
        - "(3,0,2), t=2"
  - id: "tal-geo3d-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Let $S=(1,0,0)$ and $\\mathcal P:x+2y+2z-9=0$. Determine the orthogonal projection $H$ of $S$ onto $\\mathcal P$, then compute $d(S,\\mathcal P)$."
    solution: "A normal vector is $n=(1,2,2)$, so the perpendicular through $S$ is $H=S+tn=(1+t,2t,2t)$. Imposing $H\\in\\mathcal P$ gives $1+t+4t+4t-9=0$, hence $t=8/9$. Thus $H=(17/9,16/9,16/9)$. Finally, $SH=|t|\\|n\\|=(8/9)\\cdot3=8/3$."
    hints:
      - "The line from $S$ to its projection is parallel to a normal vector of the plane."
      - "Find its intersection with the plane, then compute $SH$."
    assessment:
      kind: "exact"
      expected: "H=(17/9,16/9,16/9); d=8/3"
      accepted:
        - "(17/9,16/9,16/9); 8/3"
  - id: "tal-geo3d-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "Consider $D_1:(x,y,z)=(0,0,0)+t(1,0,1)$ and $D_2:(x,y,z)=(0,1,0)+s(0,1,1)$. Prove that the lines are skew. Without quoting a line-distance formula, find points $P\\in D_1$ and $Q\\in D_2$ such that $PQ$ is perpendicular to both lines, prove that this segment realizes the minimum distance, and compute that distance."
    solution: "The directions $u=(1,0,1)$ and $v=(0,1,1)$ are not collinear. Equality $(t,0,t)=(0,1+s,s)$ would force $t=0$, $s=-1$, then contradictory third coordinates, so the lines are skew. Write $P=(t,0,t)$ and $Q=(0,1+s,s)$. Then $\\overrightarrow{PQ}=(-t,1+s,s-t)$. Orthogonality to $u$ and $v$ gives $s-2t=0$ and $1+2s-t=0$, hence $t=-1/3$, $s=-2/3$. Thus $P=(-1/3,0,-1/3)$, $Q=(0,1/3,-2/3)$ and $PQ=\\sqrt{3(1/3)^2}=1/\\sqrt3$. Any other connector equals $\\overrightarrow{PQ}+\\alpha u+\\beta v$; since $PQ$ is orthogonal to both directions, Pythagoras gives squared length $PQ^2+\\|\\alpha u+\\beta v\\|^2\\geq PQ^2$. Therefore this connector is minimal."
    hints:
      - "First test whether the two parametric representations can describe the same point."
      - "Write generic points $P(t)$ and $Q(s)$, then impose two dot-product equations."
      - "For minimality, compare any other connector with the perpendicular connector using an orthogonal decomposition."
    assessment:
      kind: "reasoning"
      rubric:
        - "Shows that the direction vectors are not collinear and that the lines do not intersect."
        - "Solves the two orthogonality equations and obtains the correct points $P$ and $Q$."
        - "Proves that the common perpendicular minimizes length rather than quoting a formula."
        - "Computes the exact distance $1/\\sqrt3$."
---

# Géométrie dans l'Espace (Droites, Plans & Orthogonalité)

La géométrie vectorielle dans l'espace $\mathbb{R}^3$ généralise les outils du plan à l'aide d'un repère orthonormé $(O; \vec{i}, \vec{j}, \vec{k})$.

## 1. Représentation paramétrique d'une droite

Une droite $D$ passant par $A(x_A, y_A, z_A)$ et de vecteur directeur $\vec{u}(a, b, c)$ est définie par :

$$\begin{cases} x = x_A + a t \\ y = y_A + b t \\ z = z_A + c t \end{cases} \quad (t \in \mathbb{R})$$

## 2. Équation cartésienne d'un plan

Un plan $\mathcal{P}$ passant par $A(x_A, y_A, z_A)$ et admettant un **vecteur normal** $\vec{n}(a, b, c)$ non nul est l'ensemble des points $M(x, y, z)$ tels que $\vec{AM} \cdot \vec{n} = 0$.

Son équation cartésienne s'écrit :

$$a x + b y + c z + d = 0$$

où $d = -(a x_A + b y_A + c z_A)$.

## 3. Projection et distance à un plan

La distance d'un point $M_0(x_0, y_0, z_0)$ à un plan $\mathcal{P} : a x + b y + c z + d = 0$ est la longueur $M_0 H$ où $H$ est le projeté orthogonal de $M_0$ sur $\mathcal{P}$ :

$$d(M_0, \mathcal{P}) = \frac{|a x_0 + b y_0 + c z_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$
