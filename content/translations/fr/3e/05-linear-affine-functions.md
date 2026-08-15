---
id: 3e-linear-affine-functions
locale: fr
title: Fonctions linéaires et affines
strand: Fonctions et modélisation
summary: Relier formules, tableaux et graphiques pour interpréter des relations linéaires ou affines et construire des modèles.
objectives:
  - Calculer et interpréter des images et des antécédents
  - Lire et relier formules, tableaux et graphiques
  - Reconnaître les fonctions linéaires et affines
  - Déterminer et interpréter un coefficient directeur et une ordonnée à l'origine
prerequisites:
  - Repère du plan et couples de coordonnées
  - Proportionnalité
  - Résolution d'équations du premier degré
vocabulary:
  - en: image
    definition: Valeur $f(x)$ associée par une fonction à un nombre $x$.
  - en: preimage
    definition: Nombre dont l'image est une valeur donnée.
  - en: slope
    definition: Quotient de la variation des ordonnées par la variation correspondante des abscisses le long d'une droite.
  - en: vertical intercept
    definition: Image de zéro, c'est-à-dire ordonnée du point où une droite coupe l'axe vertical.
flashcards:
  - front: Comment trouver l'image de $3$ à partir d'une formule de $f$ ?
    back: Remplacer $x$ par $3$ dans la formule et calculer $f(3)$.
  - front: Comment trouver un antécédent de $7$ ?
    back: Résoudre l'équation $f(x)=7$ ou lire sur le graphique l'abscisse d'un point d'ordonnée $7$.
  - front: Qu'est-ce qui distingue $f(x)=ax$ de $f(x)=ax+b$ ?
    back: La première fonction est linéaire et sa droite passe par l'origine ; la seconde est affine et son ordonnée à l'origine vaut $b$.
  - front: Comment calcule-t-on le coefficient directeur à partir de deux points ?
    back: $a=(y_2-y_1)/(x_2-x_1)$, à condition que $x_2\ne x_1$.
exercises:
  - id: 3e-functions-t1
    tierTitle: Application directe
    prompt: Soit $f(x)=-3x+7$. Compléter le tableau pour $x=-2,0,3,5$. Indiquer ensuite l'image de $3$ et l'antécédent de $7$ visibles dans le tableau.
    solution: La ligne complétée est $f(x)=13,7,-2,-8$. Ainsi, l'image de $3$ est $-2$ et l'antécédent de $7$ est $0$.
    hints:
      - Remplacer séparément $x$ par chaque valeur dans $-3x+7$.
    rubric:
      - Complète le tableau par $13,7,-2,-8$ dans les bonnes colonnes.
      - Indique que l'image de $3$ est $-2$.
      - Indique que l'antécédent de $7$ est $0$.
  - id: 3e-functions-t2
    tierTitle: Problème type brevet
    prompt: Une location de vélo coûte $C(x)=3x+6$ euros pour $x$ heures. Compléter un tableau de valeurs pour $x=0,2,5,8$, puis tracer la droite avec une graduation de $1$ heure par carreau horizontal et de $3$ euros par carreau vertical. Utiliser le graphique pour donner l'image de $4$, un antécédent de $21$, l'intersection avec l'axe vertical et préciser si la droite coupe l'axe horizontal pour $x\ge0$.
    solution: Les coûts complétés sont $6,12,21,30$ euros. On place $(0;6),(2;12),(5;21),(8;30)$, puis on trace la droite. L'image de $4$ est $18$ et un antécédent de $21$ est $5$. La droite coupe l'axe vertical en $(0;6)$, ce qui représente le forfait fixe. Comme $C(x)\ge6$ pour $x\ge0$, la partie pertinente de la droite ne coupe pas l'axe horizontal.
    hints:
      - Calculer les quatre coûts avant de choisir les coordonnées sur les axes gradués.
      - Pour un antécédent, partir du coût demandé sur l'axe vertical et lire l'abscisse.
    rubric:
      - Complète le tableau par $6,12,21,30$ et place les points avec les graduations imposées.
      - Lit ou calcule l'image $18$ de $4$ et l'antécédent $5$ de $21$.
      - Identifie $(0;6)$ comme intersection avec l'axe vertical et interprète le forfait fixe.
      - Explique qu'il n'y a pas d'intersection avec l'axe horizontal pour $x\ge0$.
  - id: 3e-functions-t3
    tierTitle: Synthèse
    prompt: Dans un repère gradué d'une unité par carreau sur chaque axe, la représentation d'une fonction affine $f$ passe par $A(-2;7)$ et $B(4;-5)$. Déterminer son expression, calculer l'image de $2$ et l'antécédent de $0$, puis trouver l'intersection avec la droite représentant $g(x)=x$. Donner toutes les coordonnées utiles pour vérifier les tracés et les intersections avec les axes.
    solution: Le coefficient directeur vaut $a=\frac{-5-7}{4-(-2)}=-2$. Comme $7=-2(-2)+b$, on obtient $b=3$, donc $f(x)=-2x+3$. Ainsi, $f(2)=-1$. L'intersection avec l'axe horizontal vérifie $f(x)=0$, d'où $x=3/2$ et le point $(3/2;0)$ ; l'intersection avec l'axe vertical est $(0;3)$. Les deux droites se coupent lorsque $-2x+3=x$, donc en $(1;1)$. Les points $A,B,(0;3),(3/2;0)$ vérifient le tracé de $f$, tandis que $(0;0)$ et $(1;1)$ vérifient celui de $g$.
    hints:
      - Calculer la variation des ordonnées divisée par celle des abscisses.
      - Utiliser ensuite l'un des points pour déterminer l'ordonnée à l'origine, puis résoudre $f(x)=0$ et $f(x)=g(x)$.
    rubric:
      - Calcule le coefficient directeur $-2$ à partir des deux points.
      - Détermine $b=3$ et l'expression $f(x)=-2x+3$.
      - Calcule $f(2)=-1$ et l'antécédent $3/2$ de $0$.
      - Trouve l'intersection $(1;1)$ et donne assez de coordonnées pour les tracés et les intersections avec les axes.
  - id: 3e-functions-t4
    tierTitle: Défi avancé
    prompt: Pour un paramètre entier $a$, on considère $f_a(x)=(a-1)x+2a$ et $g(x)=2x-3$. Classer d'abord les cas où leurs représentations graphiques ont un point d'intersection, n'en ont aucun ou sont confondues. Déterminer ensuite tous les entiers $a$ pour lesquels le point d'intersection a des coordonnées entières et démontrer que la liste est complète.
    solution: >-
      Un point d'intersection vérifie $(a-1)x+2a=2x-3$, donc $(a-3)x=-2a-3$. Si $a=3$, l'équation devient $0=-9$ : les droites sont parallèles et distinctes. Elles ne peuvent jamais être confondues, car l'égalité des coefficients directeurs impose $a=3$, mais les ordonnées à l'origine valent alors $6$ et $-3$. Si $a\ne3$, il existe un unique point d'intersection et $x=\frac{-2a-3}{a-3}=-2-\frac9{a-3}$. Pour $a$ entier, $x$ est entier si et seulement si $a-3$ divise $9$. Ainsi, $a-3\in\{-9,-3,-1,1,3,9\}$, d'où $a\in\{-6,0,2,4,6,12\}$. Pour chacune de ces valeurs, $y=2x-3$ est également entier. Réciproquement, un point d'intersection à coordonnées entières exige une abscisse entière ; $a-3$ doit donc diviser $9$, ce qui exclut tout autre entier $a$.
    hints:
      - Résoudre $f_a(x)=g(x)$, mais traiter le cas $a=3$ avant de diviser.
      - Réécrire l'abscisse sous la forme $-2-9/(a-3)$.
      - Énumérer tous les diviseurs positifs et négatifs de $9$.
    rubric:
      - Isole $a=3$ et classe correctement le cas des droites parallèles.
      - Montre que tout $a\ne3$ donne un point d'intersection et obtient $x=-2-9/(a-3)$.
      - Utilise la divisibilité dans les entiers pour obtenir exactement $a=-6,0,2,4,6,12$.
      - Démontre qu'une abscisse entière donne une ordonnée entière et que la liste des diviseurs assure l'exhaustivité.
---
## Une fonction associe une image à chaque nombre

Une fonction $f$ associe à chaque nombre $x$ autorisé une unique valeur, notée $f(x)$. Si $f(3)=11$, alors $11$ est l'**image** de $3$ et $3$ est un **antécédent** de $11$.

Un nombre n'a qu'une image, mais une valeur peut avoir zéro, un ou plusieurs antécédents. Chercher une image revient à calculer ; chercher un antécédent revient souvent à résoudre une équation ou à lire un graphique en sens inverse.

## Quatre représentations reliées

Une fonction peut être décrite par un texte, une formule, un tableau ou un graphique. Pour $f(x)=2x-1$ :

| $x$ | $-1$ | $0$ | $2$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $-3$ | $-1$ | $3$ |

Le tableau donne les points $(-1;-3)$, $(0;-1)$ et $(2;3)$. L'ensemble des points $(x;f(x))$ constitue la représentation graphique.

Sur un graphique, on lit une image verticalement à partir d'une abscisse. Pour trouver un antécédent, on part de l'ordonnée demandée, on rejoint horizontalement la courbe, puis on lit l'abscisse.

## Fonctions linéaires et proportionnalité

Une fonction linéaire est de la forme $f(x)=ax$. Son tableau est un tableau de proportionnalité, sa représentation est une droite passant par l'origine et $a$ est à la fois le coefficient de proportionnalité et le coefficient directeur. Une droite qui ne passe pas par l'origine ne représente pas une situation de proportionnalité.

## Fonctions affines

Une fonction affine est de la forme $f(x)=ax+b$. Sa représentation est une droite. Le nombre $a$ est son coefficient directeur : lorsque $x$ augmente de $1$, $f(x)$ varie de $a$. Le nombre $b=f(0)$ est l'ordonnée à l'origine.

- Si $a>0$, la fonction est croissante.
- Si $a<0$, la fonction est décroissante.
- Si $a=0$, la fonction est constante.

À partir de deux points d'abscisses distinctes, $a=\frac{y_2-y_1}{x_2-x_1}$. On remplace ensuite les coordonnées d'un point dans $y=ax+b$ pour trouver $b$.

## Reconstruction rédigée

Une droite passant par $(1;5)$ et $(4;11)$ a pour coefficient directeur $a=\frac{11-5}{4-1}=2$. Le point $(1;5)$ donne $5=2\times1+b$, donc $b=3$. La fonction est $f(x)=2x+3$. Vérification : $2\times4+3=11$.

## Modéliser une situation

Un réservoir contenant $120$ litres et perdant $8$ litres par minute est modélisé par $V(t)=120-8t$. L'ordonnée à l'origine représente le volume initial et le coefficient directeur le taux de variation. Le modèle n'a de sens que pour $0\le t\le15$.

Il faut toujours définir les variables, indiquer les unités et préciser l'intervalle réaliste.

## Choix de méthode et erreurs fréquentes

- Utiliser une substitution pour une image et une équation pour un antécédent.
- Utiliser deux points pour calculer un coefficient directeur ; ne pas diviser $y$ par $x$ sauf si la droite passe par l'origine.
- Conserver le même ordre de soustraction au numérateur et au dénominateur.
- Une lecture graphique est souvent approchée, tandis qu'une formule peut donner un résultat exact.
- L'ordonnée à l'origine est le nombre $b$, et non le point $(0;b)$ lui-même.

## Prolongement : comparer deux modèles

On résout $ax+b=cx+d$. Si $a\ne c$, les droites ont un unique point d'intersection. Si $a=c$ et $b\ne d$, elles sont parallèles. Si les deux coefficients sont égaux, les formules définissent la même droite.
