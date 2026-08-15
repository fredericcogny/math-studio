---
id: "1re-dot-product"
order: 5
title: "Le Produit Scalaire dans le Plan"
level: "1re"
strand: "Géométrie & Vecteurs"
difficulty: "core"
estimatedMinutes: 35
summary: "Définitions géométriques et algébriques du produit scalaire, orthogonalité, projection et théorème d'Al Kashi."
objectives:
  - "Calculer un produit scalaire par coordonnées u.v = xx' + yy'"
  - "Utiliser la projection orthogonale et la formule avec cosinus"
  - "Appliquer le théorème d'Al Kashi pour calculer des longueurs et angles dans un triangle"
prerequisites:
  - "Vecteurs, coordonnées et normes"
  - "Trigonométrie"
vocabulary:
  - en: "Dot product"
    fr: "Produit scalaire"
    definition: "Opération associant à deux vecteurs u et v un nombre réel noté u . v."
  - en: "Orthogonality"
    fr: "Orthogonalité"
    definition: "Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul."
flashcards:
  - front: "Quelle est l'expression analytique du produit scalaire u(x;y) et v(x';y') ?"
    back: "u . v = x*x' + y*y'"
  - front: "Que dit le théorème d'Al Kashi pour un triangle ABC ?"
    back: "a^2 = b^2 + c^2 - 2bc cos(A)"
generator:
  type: "signed-arithmetic"
  seed: 105
  count: 4
  min: -5
  max: 8
tieredExercises:
  - id: "1re-dot-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "In an orthonormal coordinate system, let $\\vec u=(3,-2)$ and $\\vec v=(4,5)$. Compute $\\vec u\\cdot\\vec v$."
    solution: "$\\vec u\\cdot\\vec v=3\\times4+(-2)\\times5=12-10=2$."
    hints:
      - "Multiply corresponding coordinates and add."
    assessment:
      kind: "numeric"
      expected: 2
  - id: "1re-dot-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "In triangle $ABC$, $AB=5$, $AC=8$, and $\\widehat{BAC}=60^\\circ$. Use a dot-product identity to calculate $BC$."
    solution: "First, $\\vec{AB}\\cdot\\vec{AC}=AB\\,AC\\cos60^\\circ=20$. Since $\\vec{BC}=\\vec{AC}-\\vec{AB}$, $BC^2=AC^2+AB^2-2\\vec{AB}\\cdot\\vec{AC}=64+25-40=49$. Hence $BC=7$."
    hints:
      - "Compute $\\vec{AB}\\cdot\\vec{AC}$ first."
      - "Expand $\\|\\vec{AC}-\\vec{AB}\\|^2$."
    assessment:
      kind: "numeric"
      expected: 7
  - id: "1re-dot-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Let $A=(-2,1)$ and $B=(4,3)$. Determine and identify geometrically the locus of points $M=(x,y)$ satisfying $MA^2-MB^2=12$."
    solution: "Using coordinates, $MA^2=(x+2)^2+(y-1)^2$ and $MB^2=(x-4)^2+(y-3)^2$. Their difference is $12x+4y-20$. Thus the condition is $12x+4y-20=12$, or $3x+y=8$. The locus is therefore the straight line with equation $3x+y=8$; its normal vector $(3,1)$ is parallel to $\\vec{AB}=(6,2)$, so the line is perpendicular to $AB$."
    hints:
      - "Write both squared distances before expanding."
      - "The quadratic terms cancel; interpret the normal vector of the resulting equation."
    assessment:
      kind: "reasoning"
      rubric:
        - "Expands the dot-product condition into a valid Cartesian equation."
        - "Obtains a line equivalent to $3x+y=8$."
        - "Justifies geometrically why the locus is perpendicular to $AB$."
  - id: "1re-dot-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Let $ABC$ be a non-equilateral triangle with circumcenter $O$, centroid $G$, and orthocenter $H$. Taking $O$ as vector origin, prove by dot products that $\\vec{OH}=\\vec{OA}+\\vec{OB}+\\vec{OC}$. Deduce that $O,G,H$ are collinear and that $GH=2OG$."
    solution: "Write $\\vec{OA}=a$, $\\vec{OB}=b$, and $\\vec{OC}=c$. Since $O$ is the circumcenter, $\\|a\\|=\\|b\\|=\\|c\\|$. Put $h=a+b+c$. Then the direction of $AH$ is $h-a=b+c$, while the direction of $BC$ is $c-b$. Their dot product is $(b+c)\\cdot(c-b)=\\|c\\|^2-\\|b\\|^2=0$, so $AH\\perp BC$. Cyclically, the point with position vector $h$ lies on all three altitudes; it is $H$. The centroid has position vector $g=(a+b+c)/3=h/3$, hence $\\vec{OH}=3\\vec{OG}$. Therefore $O,G,H$ are collinear, with $G$ between $O$ and $H$, and $GH=OH-OG=2OG$."
    hints:
      - "The three vectors $a,b,c$ have equal norms because their endpoints lie on the circumcircle."
      - "Test whether the point with vector $a+b+c$ lies on the altitude from $A$."
      - "Use the centroid formula $g=(a+b+c)/3$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Uses equal circumradii to prove $(b+c)\\cdot(c-b)=0$ and its cyclic analogues."
        - "Correctly identifies the point with vector $a+b+c$ as the orthocenter."
        - "Uses the centroid vector formula to derive $\\vec{OH}=3\\vec{OG}$."
        - "Concludes collinearity and the length relation $GH=2OG$."
---

# Le Produit Scalaire dans le Plan

Le **produit scalaire** relie les longueurs et les angles entre deux vecteurs. C'est l'outil privilégié pour traiter de l'orthogonalité et calculer des distances en géométrie analytique.

## 1. Définitions du produit scalaire

Soient deux vecteurs $\vec{u}$ et $\vec{v}$ :

### Formule trigonométrique
Si $\vec{u} \neq \vec{0}$ et $\vec{v} \neq \vec{0}$ :

$$\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\vec{u}, \vec{v})$$

### Formule analytique (dans un repère orthonormé)
Si $\vec{u}(x, y)$ et $\vec{v}(x', y')$ :

$$\vec{u} \cdot \vec{v} = x x' + y y'$$

## 2. Théorème d'Al Kashi (Pythagore généralisé)

Dans n'importe quel triangle $ABC$ :

$$BC^2 = AB^2 + AC^2 - 2 \times AB \times AC \times \cos(\widehat{BAC})$$

Si le triangle est rectangle en $A$, alors $\cos(\widehat{BAC}) = 0$, et on retrouve le théorème de Pythagore classique : $BC^2 = AB^2 + AC^2$.

## 3. Équation cartésienne de droite et vecteur normal

Une droite $d$ passant par $A(x_A, y_A)$ et de vecteur normal $\vec{n}(a, b)$ a pour équation cartésienne :

$$a(x - x_A) + b(y - y_A) = 0 \implies a x + b y + c = 0$$
