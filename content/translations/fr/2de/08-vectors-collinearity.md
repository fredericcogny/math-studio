---
id: 2de-vectors-collinearity
locale: fr
title: Vecteurs, coordonnées et colinéarité
strand: Géométrie
summary: Calculer avec les coordonnées de vecteurs, utiliser le déterminant pour tester la colinéarité, et démontrer alignements et propriétés de parallélogramme par des égalités vectorielles.
objectives:
  - Calculer les coordonnées d'un vecteur et d'une somme de vecteurs
  - Tester la colinéarité de deux vecteurs avec le déterminant
  - Démontrer des alignements et des propriétés de parallélogramme par des égalités vectorielles
prerequisites:
  - Translation et vecteurs
  - Coordonnées, distance et milieu
vocabulary:
  - en: collinear vectors
    definition: Deux vecteurs sont colinéaires lorsque l'un est un multiple de l'autre, ce qui signifie qu'ils ont la même direction.
  - en: determinant
    definition: Pour deux vecteurs donnés par leurs coordonnées, le nombre x fois y prime moins y fois x prime, qui est nul exactement lorsqu'ils sont colinéaires.
  - en: position vector
    definition: Vecteur joignant l'origine du repère à un point, et dont les coordonnées sont celles du point.
flashcards:
  - front: Quelles sont les coordonnées de $\vec{AB}$ ?
    back: $\vec{AB}(x_{B}-x_{A} \;;\; y_{B}-y_{A})$, toujours les coordonnées de l'extrémité moins celles de l'origine.
  - front: Comment tester si $\vec{u}(x ; y)$ et $\vec{v}(x' ; y')$ sont colinéaires ?
    back: Calculer le déterminant $xy'-yx'$. Les vecteurs sont colinéaires exactement lorsqu'il vaut $0$.
  - front: Comment démontrer que $A$, $B$ et $C$ sont alignés ?
    back: Montrer que $\vec{AB}$ et $\vec{AC}$ sont colinéaires, c'est-à-dire que leur déterminant est nul.
  - front: Quelle égalité vectorielle caractérise le parallélogramme $ABCD$ ?
    back: $\vec{AB}=\vec{DC}$. L'ordre des lettres compte, car $\vec{AB}=\vec{CD}$ décrit au contraire un quadrilatère croisé.
exercises:
  - id: 2de-vect-t1
    tierTitle: Application directe
    prompt: On donne $A(-1 ; 4)$ et $B(3 ; -2)$. Donner les coordonnées de $\vec{AB}$.
    solution: $\vec{AB}(3-(-1) \;;\; -2-4)=(4 \;;\; -6)$.
    hints:
      - Soustraire les coordonnées du point de départ à celles du point d'arrivée.
    expected: "(4 ; -6)"
  - id: 2de-vect-t2
    tierTitle: Entraînement standard
    prompt: Calculer le déterminant de $\vec{u}(3 ; -2)$ et $\vec{v}(-6 ; 4)$, puis dire si les deux vecteurs sont colinéaires.
    solution: Le déterminant vaut $3\times 4-(-2)\times(-6)=12-12=0$. Comme il est nul, les vecteurs sont colinéaires, et en effet $\vec{v}=-2\vec{u}$.
    hints:
      - Le déterminant de $(x ; y)$ et $(x' ; y')$ est $xy'-yx'$.
      - Attention au signe du produit de deux nombres négatifs.
  - id: 2de-vect-t3
    tierTitle: Synthèse du programme officiel
    prompt: Soit $A(1 ; -1)$, $B(4 ; 1)$ et $C(2 ; 5)$. Déterminer les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme, puis vérifier la réponse en comparant les milieux des deux diagonales.
    solution: >-
      Le quadrilatère $ABCD$ est un parallélogramme exactement lorsque $\vec{AB}=\vec{DC}$. On a $\vec{AB}(4-1 \;;\; 1-(-1))=(3 \;;\; 2)$ et $\vec{DC}(2-x_{D} \;;\; 5-y_{D})$. L'égalité des coordonnées donne $2-x_{D}=3$ et $5-y_{D}=2$, donc $x_{D}=-1$ et $y_{D}=3$, c'est-à-dire $D(-1 ; 3)$. Pour la vérification, le milieu de $[AC]$ est $\left(\dfrac{1+2}{2} ; \dfrac{-1+5}{2}\right)=(1{,}5 \;;\; 2)$ et le milieu de $[BD]$ est $\left(\dfrac{4+(-1)}{2} ; \dfrac{1+3}{2}\right)=(1{,}5 \;;\; 2)$. Les diagonales ont le même milieu, ce qui confirme le parallélogramme.
    hints:
      - Écrire l'égalité vectorielle caractéristique avant tout calcul.
      - Un quadrilatère est un parallélogramme exactement lorsque ses diagonales ont le même milieu.
    rubric:
      - Énonce l'égalité vectorielle correcte pour le parallélogramme ABCD.
      - Résout les équations sur les coordonnées pour obtenir le point de coordonnées -1 et 3.
      - Vérifie la réponse avec le milieu commun des diagonales.
  - id: 2de-vect-t4
    tierTitle: Défi avancé
    prompt: Soit $ABCD$ un quadrilatère quelconque du plan, et soient $P$, $Q$, $R$, $S$ les milieux de $[AB]$, $[BC]$, $[CD]$ et $[DA]$. Démontrer que $PQRS$ est toujours un parallélogramme, et expliquer ce qui se passe lorsque $A$, $B$, $C$ et $D$ sont alignés.
    solution: >-
      Comme $P$ et $Q$ sont les milieux de $[AB]$ et $[BC]$, le segment $[PQ]$ est une droite des milieux du triangle $ABC$, donc $\vec{PQ}=\tfrac{1}{2}\vec{AC}$. De même, $S$ et $R$ sont les milieux de $[DA]$ et $[CD]$, donc $[SR]$ est une droite des milieux du triangle $ACD$ et $\vec{SR}=\tfrac{1}{2}\vec{AC}$. Par conséquent $\vec{PQ}=\vec{SR}$, ce qui est exactement la condition pour que le quadrilatère $PQRS$ soit un parallélogramme. La démonstration n'utilise aucune hypothèse sur $ABCD$, elle vaut donc pour tout quadrilatère, convexe ou non. Si les quatre points sont alignés, tous les milieux appartiennent à la même droite, l'égalité vectorielle $\vec{PQ}=\vec{SR}$ reste vraie, mais le parallélogramme est aplati : il est dégénéré et d'aire nulle.
    hints:
      - Exprimer chaque côté du quadrilatère intérieur à l'aide d'une droite des milieux d'un triangle construit sur une diagonale.
      - Les deux côtés opposés se révèlent être la moitié d'une même diagonale.
    rubric:
      - Utilise la propriété de la droite des milieux pour exprimer deux côtés opposés comme la moitié d'une même diagonale.
      - Conclut par une égalité vectorielle qui caractérise le parallélogramme.
      - Discute le cas dégénéré de quatre points alignés.
---
## Un vecteur est un déplacement

Un **vecteur** porte une direction, un sens et une longueur, mais aucune position fixe. Le vecteur allant de $A$ à $B$ se note $\vec{AB}$, et dans un repère ses coordonnées sont

$$\vec{AB}(x_{B}-x_{A} \;;\; y_{B}-y_{A}).$$

Deux vecteurs sont **égaux** exactement lorsque leurs coordonnées sont égales. Écrire $\vec{AB}=\vec{DC}$ remplace donc une figure par deux équations numériques, et c'est ce qui fait des vecteurs un outil de calcul et non un dessin.

## Opérations en coordonnées

Pour $\vec{u}(x ; y)$, $\vec{v}(x' ; y')$ et un réel $k$ :

$$\vec{u}+\vec{v}\;(x+x' \;;\; y+y'),\qquad k\vec{u}\;(kx \;;\; ky),\qquad \|\vec{u}\|=\sqrt{x^{2}+y^{2}}.$$

La dernière formule exige un repère orthonormé, comme toute formule de longueur.

## Colinéarité et déterminant

Deux vecteurs sont **colinéaires** lorsque l'un est un multiple de l'autre. Plutôt que de chercher ce multiple, on calcule le **déterminant**

$$\det(\vec{u},\vec{v})=xy'-yx'.$$

$$\vec{u}\text{ et }\vec{v}\text{ sont colinéaires}\iff xy'-yx'=0.$$

Ce seul nombre répond à trois questions à la fois.

- **Alignement** : $A$, $B$, $C$ sont alignés exactement lorsque $\det(\vec{AB},\vec{AC})=0$.
- **Droites parallèles** : $(AB)\parallel(CD)$ exactement lorsque $\det(\vec{AB},\vec{CD})=0$.
- **Direction d'une droite** : tout vecteur non nul colinéaire à $\vec{AB}$ dirige la droite $(AB)$.

## Les démonstrations types

La plupart des démonstrations de géométrie de Seconde se ramènent à une égalité vectorielle.

| Objectif | Condition |
| --- | --- |
| $ABCD$ est un parallélogramme | $\vec{AB}=\vec{DC}$ |
| $M$ est le milieu de $[AB]$ | $\vec{AM}=\tfrac{1}{2}\vec{AB}$ |
| $A$, $B$, $C$ sont alignés | $\det(\vec{AB},\vec{AC})=0$ |
| $[PQ]$ est une droite des milieux du triangle $ABC$ | $\vec{PQ}=\tfrac{1}{2}\vec{AC}$ |

Lire les lettres dans le bon ordre est essentiel : $\vec{AB}=\vec{DC}$ donne un parallélogramme, tandis que $\vec{AB}=\vec{CD}$ donne un quadrilatère croisé.

### Pour aller plus loin

Étant donné trois points $A$, $B$, $C$, combien de points $D$ font de $ABCD$ un parallélogramme si l'on autorise le changement d'ordre des lettres ? Les trouver tous.
