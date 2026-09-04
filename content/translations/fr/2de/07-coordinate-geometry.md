---
id: 2de-coordinate-geometry
locale: fr
title: Distance, milieu et raisonnement dans un plan repéré
strand: Géométrie
summary: Utiliser les formules de distance et de milieu dans un repère orthonormé pour démontrer qu'une figure est isocèle, rectangle ou inscrite dans un cercle donné.
objectives:
  - Calculer une distance et un milieu à partir de coordonnées
  - Déterminer la nature d'un triangle avec la réciproque du théorème de Pythagore dans un repère
  - Caractériser l'ensemble des points équidistants de deux points donnés
prerequisites:
  - Théorème de Pythagore et sa réciproque
  - Calcul exact avec les racines carrées
vocabulary:
  - en: orthonormal frame
    definition: Repère dont les deux axes sont perpendiculaires et portent la même unité de longueur.
  - en: midpoint
    definition: Point d'un segment équidistant de ses deux extrémités, dont les coordonnées sont les moyennes des leurs.
  - en: perpendicular bisector
    definition: Droite perpendiculaire à un segment passant par son milieu, formée exactement des points équidistants des extrémités.
flashcards:
  - front: Quelle est la distance entre $A(x_{A} ; y_{A})$ et $B(x_{B} ; y_{B})$ ?
    back: $AB=\sqrt{(x_{B}-x_{A})^{2}+(y_{B}-y_{A})^{2}}$. Cette formule exige un repère orthonormé.
  - front: Quelles sont les coordonnées du milieu de $[AB]$ ?
    back: $M\left(\dfrac{x_{A}+x_{B}}{2} \;;\; \dfrac{y_{A}+y_{B}}{2}\right)$, les moyennes des coordonnées.
  - front: Comment démontrer qu'un triangle est rectangle à partir de coordonnées ?
    back: Calculer les trois carrés des longueurs et vérifier si le plus grand est égal à la somme des deux autres, ce qui est la réciproque du théorème de Pythagore.
  - front: Quel est l'ensemble des points équidistants de $A$ et de $B$ ?
    back: La médiatrice de $[AB]$. Dans un repère, on la trouve en résolvant $AM^{2}=BM^{2}$.
exercises:
  - id: 2de-coordgeo-t1
    tierTitle: Application directe
    prompt: Dans un repère orthonormé, $A(1 ; 2)$ et $B(4 ; 6)$. Calculer la distance $AB$.
    solution: $AB=\sqrt{(4-1)^{2}+(6-2)^{2}}=\sqrt{9+16}=\sqrt{25}=5$.
    hints:
      - Soustraire les coordonnées dans le même ordre pour les deux axes, puis élever au carré.
  - id: 2de-coordgeo-t2
    tierTitle: Entraînement standard
    prompt: Donner les coordonnées du milieu $M$ du segment joignant $A(-3 ; 5)$ et $B(7 ; -1)$.
    solution: Les coordonnées de $M$ sont les moyennes, $x_{M}=\dfrac{-3+7}{2}=2$ et $y_{M}=\dfrac{5+(-1)}{2}=2$, donc $M(2 ; 2)$.
    hints:
      - Faire la moyenne des deux abscisses, puis celle des deux ordonnées.
      - Conserver les parenthèses autour d'une coordonnée négative lors de l'addition.
    expected: "(2 ; 2)"
  - id: 2de-coordgeo-t3
    tierTitle: Synthèse du programme officiel
    prompt: Dans un repère orthonormé, $A(1 ; 1)$, $B(5 ; 3)$ et $C(3 ; 7)$. Déterminer la nature du triangle $ABC$, puis donner le centre et le rayon exact de son cercle circonscrit.
    solution: >-
      Carrés des longueurs : $AB^{2}=(5-1)^{2}+(3-1)^{2}=16+4=20$, $BC^{2}=(3-5)^{2}+(7-3)^{2}=4+16=20$ et $AC^{2}=(3-1)^{2}+(7-1)^{2}=4+36=40$. Comme $AB^{2}=BC^{2}$, le triangle est isocèle en $B$. Comme $AB^{2}+BC^{2}=20+20=40=AC^{2}$, la réciproque du théorème de Pythagore montre qu'il est rectangle en $B$. Le triangle est donc rectangle isocèle en $B$. Dans un triangle rectangle, l'hypoténuse est un diamètre du cercle circonscrit, donc le centre est le milieu de $[AC]$, c'est-à-dire $\left(\dfrac{1+3}{2} ; \dfrac{1+7}{2}\right)=(2 ; 4)$, et le rayon vaut $\dfrac{AC}{2}=\dfrac{\sqrt{40}}{2}=\sqrt{10}$.
    hints:
      - Travailler avec les carrés des longueurs pour éviter toute racine carrée dans la comparaison.
      - Le centre du cercle circonscrit d'un triangle rectangle est le milieu de son hypoténuse.
    rubric:
      - Calcule correctement les trois carrés des longueurs.
      - Conclut que le triangle est isocèle et rectangle en B par la réciproque du théorème de Pythagore.
      - Identifie le milieu de l'hypoténuse comme centre et donne le rayon exact.
  - id: 2de-coordgeo-t4
    tierTitle: Défi avancé
    prompt: Soit $A(1 ; 2)$ et $B(5 ; 4)$. Trouver tous les points de l'axe des abscisses équidistants de $A$ et de $B$. Démontrer ensuite, par le calcul dans un repère, que l'ensemble des points $M$ du plan tels que $MA=MB$ est une droite, et identifier cette droite.
    solution: >-
      Un point de l'axe des abscisses s'écrit $M(x ; 0)$. Alors $MA^{2}=(x-1)^{2}+4$ et $MB^{2}=(x-5)^{2}+16$. L'égalité donne $x^{2}-2x+1+4=x^{2}-10x+25+16$, donc $-2x+5=-10x+41$, puis $8x=36$ et $x=4{,}5$. Le seul point convenant est $(4{,}5 \;;\; 0)$. Dans le cas général, pour $M(x ; y)$ la condition $MA=MB$ équivaut à $MA^{2}=MB^{2}$, puisque les deux distances sont positives. En développant, $(x-1)^{2}+(y-2)^{2}=(x-5)^{2}+(y-4)^{2}$ donne $x^{2}-2x+1+y^{2}-4y+4=x^{2}-10x+25+y^{2}-8y+16$. Les termes $x^{2}$ et $y^{2}$ se simplifient, il reste $-2x-4y+5=-10x-8y+41$, donc $8x+4y=36$, c'est-à-dire $2x+y=9$. C'est une équation de droite. Elle passe par le milieu de $[AB]$, à savoir $(3 ; 3)$, car $2\times 3+3=9$, et sa direction est perpendiculaire à $[AB]$ : c'est donc la médiatrice de $[AB]$.
    hints:
      - Comparer les carrés des distances pour faire disparaître les racines carrées.
      - Observer la simplification des termes carrés, qui est la raison pour laquelle le résultat est une droite et non une courbe.
    rubric:
      - Trouve le point de l'axe des abscisses d'abscisse 4,5.
      - Montre que les termes carrés se simplifient, laissant une équation du premier degré en x et y.
      - Identifie la droite obtenue comme la médiatrice, par exemple en vérifiant que le milieu lui appartient.
---
## Des coordonnées qui mesurent

Dans un **repère orthonormé**, les axes sont perpendiculaires et portent la même unité. Les deux formules ci-dessous ne sont valables que dans un tel repère, car toutes deux reposent sur le théorème de Pythagore.

Pour $A(x_{A} ; y_{A})$ et $B(x_{B} ; y_{B})$ :

$$AB=\sqrt{(x_{B}-x_{A})^{2}+(y_{B}-y_{A})^{2}},\qquad M_{[AB]}\left(\frac{x_{A}+x_{B}}{2} \;;\; \frac{y_{A}+y_{B}}{2}\right).$$

La distance provient d'un triangle rectangle dont les côtés de l'angle droit sont les écarts horizontal et vertical. Le milieu est simplement le couple des moyennes.

## Travailler avec les carrés

Comparer $\sqrt{20}$ et $\sqrt{18}$ invite aux erreurs d'arrondi. Comparer $20$ et $18$ non. On calcule donc les longueurs **au carré** et on compare celles-ci ; on n'extrait une racine que lorsque la longueur exacte est la réponse finale.

Cette habitude rend aussi la classification rapide.

- Deux carrés de longueurs égaux signifient que le triangle est **isocèle**.
- Trois carrés de longueurs égaux signifient qu'il est **équilatéral**.
- Si le plus grand carré est égal à la somme des deux autres, la réciproque du théorème de Pythagore donne un **angle droit**, au sommet opposé au plus grand côté.

## Cercles dans un repère

Un point $M$ appartient au cercle de centre $\Omega$ et de rayon $r$ exactement lorsque $\Omega M=r$, c'est-à-dire $\Omega M^{2}=r^{2}$. Deux faits classiques en font un outil :

- le cercle circonscrit à un triangle rectangle admet l'hypoténuse pour diamètre, donc son centre est le milieu de l'hypoténuse ;
- le cercle de diamètre $[AB]$ est l'ensemble des points $M$ tels que le triangle $ABM$ soit rectangle en $M$.

## Équidistance

La condition $MA=MB$ équivaut à $MA^{2}=MB^{2}$, car les distances sont positives. En développant les deux membres, les termes $x^{2}$ et $y^{2}$ se simplifient, et il reste une équation du **premier degré** en $x$ et $y$ : l'ensemble des points équidistants de $A$ et $B$ est une droite, la **médiatrice** de $[AB]$. Cette simplification est précisément la raison pour laquelle la réponse est une droite et non une courbe.

### Pour aller plus loin

Étant donné trois points non alignés, décrire une méthode par les coordonnées qui trouve le centre du cercle circonscrit en résolvant deux conditions d'équidistance. Que se passe-t-il si les trois points sont alignés ?
