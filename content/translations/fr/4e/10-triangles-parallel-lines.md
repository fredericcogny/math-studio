---
id: 4e-triangles-parallel-lines
locale: fr
title: Triangles, milieux et droites parallèles
strand: Géométrie
summary: Apprendre le théorème des milieux reliant le segment joignant deux milieux au troisième côté, et l'appliquer en géométrie repérée.
objectives:
  - Énoncer et appliquer le théorème des milieux
  - Utiliser la réciproque du théorème des milieux
  - Calculer des milieux et des longueurs dans le plan repéré
prerequisites:
  - Droites parallèles et sécantes
  - Coordonnées d'un point
vocabulary:
  - en: midpoint
    definition: Point qui partage un segment en deux parties de même longueur.
  - en: parallel
    definition: Deux droites du même plan qui ne se coupent jamais, quelle que soit leur prolongation.
  - en: midpoint theorem
    definition: Dans un triangle, le segment joignant les milieux de deux côtés est parallèle au troisième côté et mesure la moitié de sa longueur.
flashcards:
  - front: Que dit le théorème des milieux ?
    back: Si $M$ et $N$ sont les milieux des côtés $AB$ et $AC$ du triangle $ABC$, alors $MN \parallel BC$ et $MN = \frac{1}{2}BC$.
  - front: Quelle est la réciproque du théorème des milieux ?
    back: Si une droite passe par le milieu d'un côté d'un triangle et est parallèle à un deuxième côté, alors elle passe par le milieu du troisième côté.
  - front: Comment trouver le milieu d'un segment en coordonnées ?
    back: Le milieu de $A(x_1 ; y_1)$ et $B(x_2 ; y_2)$ est $M\!\left(\frac{x_1+x_2}{2} ; \frac{y_1+y_2}{2}\right)$.
exercises:
  - id: 4e-tripar-t1
    tierTitle: Application directe
    prompt: Dans le triangle $ABC$, $M$ est le milieu de $AB$ et $N$ est le milieu de $AC$. Si $BC=12$ cm, trouver la longueur $MN$.
    solution: D'après le théorème des milieux, $MN=\frac{1}{2}BC=\frac{1}{2}\times 12=6$ cm.
    hints:
      - Le théorème des milieux affirme que le segment joignant deux milieux mesure la moitié du troisième côté.
  - id: 4e-tripar-t2
    tierTitle: Entraînement standard
    prompt: Le triangle $ABC$ a pour sommets $A(0 ; 0)$, $B(8 ; 0)$, $C(4 ; 6)$. Calculer les milieux $M$ de $AB$ et $N$ de $AC$. Vérifier que $MN=\frac{1}{2}BC$.
    solution: $M=(4 ; 0)$ et $N=(2 ; 3)$. Alors $MN=\sqrt{(4-2)^2+(0-3)^2}=\sqrt{13}$. De plus $BC=\sqrt{(8-4)^2+(0-6)^2}=2\sqrt{13}$. On a bien $MN=\frac{1}{2}BC=\sqrt{13}$.
    hints:
      - Utiliser la formule du milieu pour chaque coordonnée.
      - Calculer les deux longueurs avec la formule de la distance et comparer.
  - id: 4e-tripar-t3
    tierTitle: Synthèse du programme officiel
    prompt: Dans le triangle $PQR$, $M$ est le milieu de $PQ$ et la droite passant par $M$ parallèle à $QR$ coupe $PR$ en $N$. On donne $QR=10$ cm et $PM=7$ cm. Trouver $PQ$, $MN$ et justifier pourquoi $N$ est le milieu de $PR$ à l'aide de la réciproque du théorème des milieux.
    solution: Puisque $M$ est le milieu de $PQ$, $PQ=2\times PM=14$ cm. D'après la réciproque du théorème des milieux, comme la droite passant par $M$ est parallèle à $QR$ et $M$ est le milieu de $PQ$, le point $N$ est nécessairement le milieu de $PR$. Le théorème des milieux donne alors $MN=\frac{1}{2}QR=5$ cm.
    hints:
      - Si $M$ est le milieu d'un côté et la droite est parallèle à un autre côté, la réciproque indique où se trouve $N$.
      - Une fois que l'on sait que $N$ est un milieu, appliquer le théorème des milieux pour la longueur.
    rubric:
      - Calcule correctement PQ à partir de PM.
      - Applique la réciproque du théorème des milieux pour justifier que N est le milieu de PR.
      - Utilise le théorème des milieux pour déterminer MN.
  - id: 4e-tripar-t4
    tierTitle: Défi avancé
    prompt: Dans le triangle $ABC$, soient $M$, $N$, $P$ les milieux respectifs de $AB$, $BC$, $CA$. Démontrer que les trois segments $MN$, $NP$, $PM$ découpent le triangle $ABC$ en quatre triangles isométriques, chacun semblable à $ABC$.
    solution: >-
      D'après le théorème des milieux appliqué trois fois : $MN \parallel AC$ et $MN=\frac{1}{2}AC$ ; $NP \parallel AB$ et $NP=\frac{1}{2}AB$ ; $PM \parallel BC$ et $PM=\frac{1}{2}BC$. Chacun des quatre petits triangles a des côtés mesurant la moitié de ceux de $ABC$, donc les quatre sont isométriques et semblables à $ABC$ avec un rapport $\frac{1}{2}$.
    hints:
      - Appliquer le théorème des milieux à chaque couple de milieux.
      - Montrer que chaque petit triangle a des côtés exactement égaux à la moitié des côtés du triangle initial.
    rubric:
      - Applique correctement le théorème des milieux aux trois couples.
      - Identifie que les quatre triangles ont les mêmes longueurs de côtés.
      - Conclut à l'isométrie et à la similitude avec le rapport correct.
---
## Le théorème des milieux

Considérons un triangle $ABC$. Soient $M$ le milieu de $AB$ et $N$ le milieu de $AC$. Le **théorème des milieux** affirme :

$$MN \parallel BC \quad\text{et}\quad MN = \tfrac{1}{2}\,BC$$

Ce résultat relie la structure interne d'un triangle au parallélisme. Le segment $MN$ est parfois appelé **segment médian**.

## Idée de la démonstration

Plaçons $A$ à l'origine. Notons $\vec{b}$ le vecteur position de $B$ et $\vec{c}$ celui de $C$. Alors $M=\frac{1}{2}\vec{b}$ et $N=\frac{1}{2}\vec{c}$. Le vecteur $\vec{MN}=\frac{1}{2}\vec{c}-\frac{1}{2}\vec{b}=\frac{1}{2}(\vec{c}-\vec{b})=\frac{1}{2}\vec{BC}$. Comme $\vec{MN}$ est un multiple scalaire de $\vec{BC}$, les deux segments sont parallèles, et $MN=\frac{1}{2}BC$.

## La réciproque

Si une droite passe par le milieu d'un côté d'un triangle et est **parallèle** à un deuxième côté, alors elle passe par le milieu du troisième côté. Cette réciproque est utile pour prouver qu'un point est un milieu.

## Milieux en géométrie repérée

Le milieu de $A(x_1 ; y_1)$ et $B(x_2 ; y_2)$ est :

$$M = \left(\frac{x_1+x_2}{2} ;\; \frac{y_1+y_2}{2}\right)$$

Combinée à la formule de la distance, cette formule permet de vérifier numériquement le théorème des milieux pour tout triangle défini par ses coordonnées.

### Pour aller plus loin

Peut-on étendre le théorème des milieux aux quadrilatères ? Quelle figure obtient-on en reliant dans l'ordre les milieux des côtés d'un quadrilatère quelconque ?
