---
id: "1re-dot-product"
locale: "fr"
title: "Le produit scalaire dans le plan"
strand: "Géométrie et vecteurs"
summary: "Définitions géométriques et algébriques du produit scalaire, orthogonalité, projection et théorème d'Al-Kashi."
objectives:
  - "Calculer un produit scalaire à l'aide des coordonnées : u.v = xx' + yy'"
  - "Utiliser la projection orthogonale et la formule avec le cosinus"
  - "Appliquer le théorème d'Al-Kashi pour calculer des longueurs et des angles dans un triangle"
prerequisites:
  - "Vecteurs, coordonnées et normes"
  - "Trigonométrie"
vocabulary:
  - en: "Dot product"
    definition: "Opération qui associe à deux vecteurs u et v un nombre réel noté u . v."
  - en: "Orthogonality"
    definition: "Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul."
flashcards:
  - front: "Quelle est l'expression analytique du produit scalaire de u(x ; y) et v(x' ; y') ?"
    back: "u . v = x*x' + y*y'"
  - front: "Que dit le théorème d'Al-Kashi pour un triangle ABC ?"
    back: "a^2 = b^2 + c^2 - 2bc cos(A)"
exercises:
  - id: "1re-dot-t1"
    tierTitle: "Application directe"
    prompt: "Dans un repère orthonormé, soient $\\vec u=(3,-2)$ et $\\vec v=(4,5)$. Calculer $\\vec u\\cdot\\vec v$."
    solution: "$\\vec u\\cdot\\vec v=3\\times4+(-2)\\times5=12-10=2$."
    hints:
      - "Multiplier les coordonnées correspondantes, puis additionner les produits."
  - id: "1re-dot-t2"
    tierTitle: "Entraînement standard"
    prompt: "Dans le triangle $ABC$, $AB=5$, $AC=8$ et $\\widehat{BAC}=60^\\circ$. Utiliser une identité du produit scalaire pour calculer $BC$."
    solution: "Tout d'abord, $\\vec{AB}\\cdot\\vec{AC}=AB\\,AC\\cos60^\\circ=20$. Comme $\\vec{BC}=\\vec{AC}-\\vec{AB}$, $BC^2=AC^2+AB^2-2\\vec{AB}\\cdot\\vec{AC}=64+25-40=49$. Ainsi, $BC=7$."
    hints:
      - "Calculer d'abord $\\vec{AB}\\cdot\\vec{AC}$."
      - "Développer $\\|\\vec{AC}-\\vec{AB}\\|^2$."
  - id: "1re-dot-t3"
    tierTitle: "Synthèse"
    prompt: "Soient $A=(-2,1)$ et $B=(4,3)$. Déterminer et caractériser géométriquement le lieu des points $M=(x,y)$ tels que $MA^2-MB^2=12$."
    solution: "À l'aide des coordonnées, $MA^2=(x+2)^2+(y-1)^2$ et $MB^2=(x-4)^2+(y-3)^2$. Leur différence vaut $12x+4y-20$. La condition s'écrit donc $12x+4y-20=12$, soit $3x+y=8$. Le lieu est ainsi la droite d'équation $3x+y=8$ ; son vecteur normal $(3,1)$ est parallèle à $\\vec{AB}=(6,2)$, donc cette droite est perpendiculaire à $AB$."
    hints:
      - "Écrire les deux distances au carré avant de développer."
      - "Les termes du second degré s'annulent ; interpréter le vecteur normal de l'équation obtenue."
    rubric:
      - "Développe la condition sur les distances en une équation cartésienne correcte."
      - "Obtient une droite d'équation équivalente à $3x+y=8$."
      - "Justifie géométriquement que le lieu est perpendiculaire à $AB$."
  - id: "1re-dot-t4"
    tierTitle: "Défi avancé"
    prompt: "Soit $ABC$ un triangle non équilatéral dont $O$ est le centre du cercle circonscrit, $G$ le centre de gravité et $H$ l'orthocentre. En prenant $O$ pour origine des vecteurs, démontrer à l'aide de produits scalaires que $\\vec{OH}=\\vec{OA}+\\vec{OB}+\\vec{OC}$. En déduire que $O,G,H$ sont alignés et que $GH=2OG$."
    solution: "Posons $\\vec{OA}=a$, $\\vec{OB}=b$ et $\\vec{OC}=c$. Comme $O$ est le centre du cercle circonscrit, $\\|a\\|=\\|b\\|=\\|c\\|$. Posons $h=a+b+c$. La direction de $AH$ est alors $h-a=b+c$, tandis que celle de $BC$ est $c-b$. Leur produit scalaire vaut $(b+c)\\cdot(c-b)=\\|c\\|^2-\\|b\\|^2=0$, donc $AH\\perp BC$. Par permutation cyclique, le point de vecteur-position $h$ appartient aux trois hauteurs : c'est $H$. Le centre de gravité a pour vecteur-position $g=(a+b+c)/3=h/3$, d'où $\\vec{OH}=3\\vec{OG}$. Par conséquent, $O,G,H$ sont alignés, $G$ se situe entre $O$ et $H$, et $GH=OH-OG=2OG$."
    hints:
      - "Les trois vecteurs $a,b,c$ ont la même norme, car leurs extrémités appartiennent au cercle circonscrit."
      - "Vérifier si le point de vecteur $a+b+c$ appartient à la hauteur issue de $A$."
      - "Utiliser la formule du centre de gravité $g=(a+b+c)/3$."
    rubric:
      - "Utilise l'égalité des rayons du cercle circonscrit pour démontrer $(b+c)\\cdot(c-b)=0$ et ses analogues cycliques."
      - "Identifie correctement le point de vecteur $a+b+c$ comme l'orthocentre."
      - "Utilise la formule vectorielle du centre de gravité pour obtenir $\\vec{OH}=3\\vec{OG}$."
      - "Conclut à l'alignement et à la relation de longueurs $GH=2OG$."
---

# Le produit scalaire dans le plan

Le **produit scalaire** relie les longueurs et les angles entre deux vecteurs. C'est l'outil privilégié pour traiter l'orthogonalité et calculer des distances en géométrie analytique.

## 1. Définitions du produit scalaire

Soient deux vecteurs $\vec{u}$ et $\vec{v}$ :

### Formule trigonométrique
Si $\vec{u} \neq \vec{0}$ et $\vec{v} \neq \vec{0}$ :

$$\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\vec{u}, \vec{v})$$

### Formule analytique (dans un repère orthonormé)
Si $\vec{u}(x, y)$ et $\vec{v}(x', y')$ :

$$\vec{u} \cdot \vec{v} = x x' + y y'$$

## 2. Théorème d'Al-Kashi (Pythagore généralisé)

Dans tout triangle $ABC$ :

$$BC^2 = AB^2 + AC^2 - 2 \times AB \times AC \times \cos(\widehat{BAC})$$

Si le triangle est rectangle en $A$, alors $\cos(\widehat{BAC}) = 0$, et l'on retrouve le théorème de Pythagore classique : $BC^2 = AB^2 + AC^2$.

## 3. Équation cartésienne d'une droite et vecteur normal

Une droite $d$ passant par $A(x_A, y_A)$ et de vecteur normal $\vec{n}(a, b)$ a pour équation cartésienne :

$$a(x - x_A) + b(y - y_A) = 0 \implies a x + b y + c = 0$$
