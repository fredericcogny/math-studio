---
id: 5e-angles-triangles
locale: fr
title: Angles, triangles particuliers et droites remarquables
strand: Géométrie
summary: Utiliser les relations entre angles, construire et caractériser des triangles particuliers, puis étudier médiatrices, hauteurs, médianes et aire.
objectives:
  - Utiliser les relations entre angles et la somme des angles d'un triangle
  - Reconnaître, construire et caractériser les triangles rectangles, isocèles et équilatéraux
  - Construire des médiatrices, le cercle circonscrit, des hauteurs et des médianes
  - Utiliser la concurrence, le partage de l'aire par une médiane et la formule de l'aire du triangle
prerequisites:
  - Mesurer et construire des angles
  - Utiliser une règle, un compas et une équerre
  - Reconnaître les codages de longueurs égales, d'angles droits et de droites parallèles
vocabulary:
  - en: particular triangle
    definition: Triangle possédant une propriété qui le définit, par exemple rectangle, isocèle ou équilatéral.
  - en: perpendicular bisector
    definition: Droite perpendiculaire à un segment en son milieu ; ses points sont équidistants des extrémités du segment.
  - en: height of a triangle
    definition: Droite passant par un sommet et perpendiculaire au côté opposé ou à son prolongement.
  - en: median of a triangle
    definition: Droite passant par un sommet et par le milieu du côté opposé.
flashcards:
  - front: Quelle est la somme des angles intérieurs d'un triangle ?
    back: $180^\circ$.
  - front: Quelle propriété caractérise un point de la médiatrice de $[AB]$ ?
    back: Il est à la même distance de $A$ et de $B$.
  - front: Où se trouve le centre du cercle circonscrit à un triangle ?
    back: Au point d'intersection commun de ses trois médiatrices.
  - front: Quel est l'effet d'une médiane sur l'aire d'un triangle ?
    back: Elle partage le triangle en deux triangles de même aire.
exercises:
  - id: 5e-angles-t1
    tierTitle: Reconnaissance par le codage
    prompt: Dans le triangle $ABC$, une figure codée indique $AB=AC$ et $\widehat{A}=40^\circ$. Nommer le triangle particulier et calculer les angles $B$ et $C$.
    solution: Comme $AB=AC$, $ABC$ est isocèle en $A$ et ses angles à la base $B$ et $C$ sont égaux. Leur somme vaut $180^\circ-40^\circ=140^\circ$ ; ainsi, $B=C=70^\circ$.
    hints:
      - Le codage de deux côtés égaux indique un triangle isocèle.
      - Les angles opposés aux côtés égaux ont la même mesure.
    rubric:
      - Reconnaît grâce au codage un triangle isocèle en $A$.
      - Utilise l'égalité des angles à la base et la somme de $180^\circ$.
      - Obtient $B=C=70^\circ$.
  - id: 5e-angles-t2
    tierTitle: Construction du cercle circonscrit
    prompt: Pour un triangle non aplati $ABC$, construire son cercle circonscrit à la règle et au compas. Décrire la construction et justifier pourquoi le cercle passe par les trois sommets.
    solution: >-
      Construire les médiatrices de $[AB]$ et $[AC]$ ; elles se coupent en $O$. Comme $O$ appartient à la médiatrice de $[AB]$, $OA=OB$. Comme il appartient à celle de $[AC]$, $OA=OC$. Ainsi, $OA=OB=OC$ : le cercle de centre $O$ et de rayon $OA$ passe par $A,B,C$. La troisième médiatrice passe également par $O$ ; les trois médiatrices sont donc concourantes.
    hints:
      - Un point de la médiatrice d'un segment est équidistant de ses extrémités.
      - Deux égalités de distances suffisent pour obtenir $OA=OB=OC$.
    rubric:
      - Construit deux médiatrices et leur point d'intersection $O$.
      - Utilise leur propriété d'équidistance pour démontrer $OA=OB=OC$.
      - Trace le cercle de centre $O$ et reconnaît la concurrence des trois médiatrices.
  - id: 5e-angles-t3
    tierTitle: Synthèse du programme officiel
    prompt: Construire le triangle $ABC$ tel que $AB=AC=5$ cm et $BC=6$ cm. Construire le milieu $M$ de $[BC]$, la médiane $(AM)$ et la hauteur issue de $A$, dont le pied est $H$. Sachant que $AH=4$ cm, calculer l'aire de $ABC$ et démontrer que les triangles $ABM$ et $ACM$ ont la même aire.
    solution: Tracer $BC=6$ cm, puis les cercles de centres $B$ et $C$, chacun de rayon $5$ cm ; un point d'intersection est $A$. Construire la médiatrice de $[BC]$ pour obtenir son milieu $M$, puis tracer $(AM)$. Tracer par $A$ la perpendiculaire à $(BC)$ ; elle coupe $(BC)$ en $H$ (dans ce triangle isocèle, $H=M$). L'aire vaut $BC\times AH/2=6\times4/2=12\text{ cm}^2$. Comme $BM=MC=3$ cm et que les deux petits triangles ont la même hauteur issue de $A$ relativement à $(BC)$, chacun a pour aire $3\times4/2=6\text{ cm}^2$.
    hints:
      - Utiliser deux cercles pour placer $A$.
      - Une médiane joint un sommet au milieu du côté opposé ; une hauteur est perpendiculaire à ce côté.
      - Les deux petits triangles ont leurs bases sur la même droite et une hauteur commune.
    rubric:
      - Donne une construction correcte de $ABC$, de $M$, de la médiane et de la hauteur.
      - Utilise la hauteur perpendiculaire pour obtenir $12\text{ cm}^2$.
      - Utilise $BM=MC$ et la hauteur commune pour démontrer l'égalité des aires, chacune valant $6\text{ cm}^2$.
  - id: 5e-angles-t4
    tierTitle: Défi olympique exhaustif
    prompt: Un triangle a des côtés de longueurs entières, un périmètre de $24$ cm et un côté de longueur $9$ cm. Déterminer tous les triplets non ordonnés possibles, identifier les cas isocèles et démontrer que la liste est complète.
    solution: Ordonnons les côtés $a\le b\le c$. Le côté $9$ ne peut pas être $a$, sinon le périmètre vaudrait au moins $27$. Si $c=9$, alors $a+b=15$ avec $a\le b\le9$, ce qui donne $(a;b)=(6;9)$ ou $(7;8)$ ; les deux vérifient $a+b>c$. Si $b=9<c$, alors $a+c=15$ et $a<6$. L'inégalité $a+9>15-a$ donne $a>3$ ; ainsi, $a=4$ ou $5$, d'où $(4;9;11)$ et $(5;9;10)$. La liste complète est donc $(6;9;9)$, $(7;8;9)$, $(4;9;11)$ et $(5;9;10)$ ; seul $(6;9;9)$ est isocèle. Les cas ordonnés $b=9$ et $c=9$ épuisent toutes les positions possibles du côté $9$.
    hints:
      - Ordonner les côtés $a\le b\le c$.
      - Séparer les cas $b=9$ et $c=9$, puis appliquer l'inégalité triangulaire stricte.
    rubric:
      - Sépare et épuise les cas $b=9$ et $c=9$.
      - Trouve exactement les quatre triplets valables.
      - Identifie l'unique cas isocèle et démontre que la liste est complète.
---
## Relations entre angles

Deux angles adjacents ont le même sommet et un côté commun, sans se recouvrir. Des angles complémentaires ont une somme de $90^\circ$ ; des angles supplémentaires ont une somme de $180^\circ$. Les angles opposés par le sommet formés par deux droites sécantes ont la même mesure.

Lorsque deux droites parallèles **distinctes** sont coupées par une sécante, les angles correspondants et alternes-internes ont la même mesure, tandis que les angles intérieurs du même côté sont supplémentaires. Le parallélisme doit être donné, codé ou démontré avant d'utiliser ces propriétés.

La somme des angles intérieurs de tout triangle vaut $180^\circ$. Un angle extérieur est égal à la somme des deux angles intérieurs non adjacents.

## Triangles particuliers

- Un **triangle rectangle** possède un angle droit. Réciproquement, un triangle dont un angle est codé droit est rectangle.
- Un **triangle isocèle** possède deux côtés de même longueur. Ses angles à la base ont la même mesure. Réciproquement, si deux angles ont la même mesure, les côtés opposés ont la même longueur.
- Un **triangle équilatéral** possède trois côtés de même longueur. Ses trois angles mesurent $60^\circ$. Réciproquement, un triangle dont les trois angles mesurent $60^\circ$ est équilatéral.

Le codage est essentiel : des traits indiquent des longueurs égales, des arcs des angles égaux et un petit carré un angle droit. Une propriété ne se déduit jamais de la seule apparence. Un triangle peut appartenir à plusieurs catégories ; un triangle rectangle isocèle est à la fois rectangle et isocèle.

## Construire un triangle

Pour construire des côtés de longueurs $a$, $b$ et $c$, tracer un côté, puis deux cercles dont les rayons sont les deux autres longueurs. Un point d'intersection donne le troisième sommet. Un triangle non aplati existe exactement lorsque la plus grande longueur est inférieure à la somme des deux autres.

## Médiatrices et cercle circonscrit

La médiatrice de $[AB]$ est perpendiculaire à $(AB)$ en son milieu. Un point $P$ lui appartient exactement lorsque $PA=PB$. Les trois médiatrices d'un triangle sont concourantes au **centre du cercle circonscrit** $O$. Comme $OA=OB=OC$, le cercle de centre $O$ passant par un sommet passe par les trois.

## Hauteurs et médianes

Une hauteur est une droite passant par un sommet et perpendiculaire au côté opposé ou à son prolongement. Les trois hauteurs sont concourantes à l'**orthocentre**.

Une médiane joint un sommet au milieu du côté opposé. Les trois médianes sont concourantes au **centre de gravité**. Une médiane partage un triangle en deux triangles de même aire : leurs bases sont égales et la hauteur perpendiculaire à leur droite commune est la même.

## Aire d'un triangle

Pour une base choisie $b$ et sa hauteur perpendiculaire correspondante $h$,

$$A=\frac{b\times h}{2}.$$

Dans un triangle obtusangle, le pied de la hauteur peut être extérieur au triangle ; la hauteur reste la distance perpendiculaire à la droite portant la base. Les constructions utilisent des unités de longueur et les aires des unités carrées.

## Approfondissement

Les médiatrices, les hauteurs et les médianes forment chacune une famille de droites concourantes, mais généralement en trois points différents. Démontrer des relations plus avancées entre ces points ou classer exhaustivement des triangles à côtés entiers relève de l'approfondissement ou des olympiades, comme en T4.
