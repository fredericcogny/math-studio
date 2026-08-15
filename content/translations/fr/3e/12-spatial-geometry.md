---
id: 3e-spatial-geometry
locale: fr
title: Géométrie dans l'espace et sections
strand: Géométrie dans l'espace
summary: Étudier des sections et des coordonnées dans l'espace, puis calculer l'aire des sphères et les volumes des boules, cônes et pyramides.
objectives:
  - Reconnaître et calculer des sections planes de solides
  - Utiliser des coordonnées et des distances dans l'espace
  - Distinguer sphères et boules, puis calculer des aires, des volumes et les effets d'une échelle
prerequisites:
  - Théorème de Pythagore
  - Aires de figures planes et puissances
vocabulary:
  - en: cross-section
    definition: Figure plane formée par l'intersection d'un plan et d'un solide.
  - en: slant height
    definition: Pour un cône de révolution, distance sur la surface entre le sommet et le cercle de base.
  - en: sphere
    definition: Surface constituée de tous les points situés à une distance fixe d'un centre.
  - en: pyramid
    definition: Solide dont la base est un polygone et dont les faces triangulaires se rejoignent en un sommet.
flashcards:
  - front: Quel est le volume d'un cône ou d'une pyramide ?
    back: Le tiers du produit de l'aire de la base par la hauteur perpendiculaire.
  - front: Quelle est la différence entre une sphère et une boule ?
    back: Une sphère est une surface ; une boule est le solide formé par cette sphère et son intérieur.
  - front: Comment un volume évolue-t-il avec un coefficient d'échelle $k$ ?
    back: Il est multiplié par $k^3$.
exercises:
  - id: 3e-spatial-t1
    tierTitle: Application directe
    prompt: "Un cône de révolution a pour rayon $3$ cm et pour hauteur perpendiculaire $4$ cm. Calculer son volume exact."
    solution: "Avec $V=(1/3)\\pi r^2h$, on obtient $V=(1/3)\\pi\\times3^2\\times4=12\\pi$ cm$^3$."
    hints:
      - "Élever le rayon au carré, et non la hauteur."
    expected: "12 pi cm^3"
    accepted:
      - "12π cm^3"
      - "12pi"
  - id: 3e-spatial-t2
    tierTitle: Niveau Brevet
    prompt: "Une pyramide à base carrée a un côté de base de $10$ cm et une hauteur de $12$ cm. Un plan parallèle à la base coupe la pyramide à $4$ cm du sommet et forme une petite pyramide. Déterminer le côté de la section carrée et le volume exact du tronc de pyramide restant."
    solution: "La petite pyramide est semblable à la pyramide initiale avec un coefficient linéaire $4/12=1/3$. Le côté de sa base carrée vaut $10/3$ cm. Le volume initial vaut $(1/3)\\times10^2\\times12=400$ cm$^3$. Le petit volume est multiplié par $(1/3)^3=1/27$ ; il vaut donc $400/27$ cm$^3$. Le volume du tronc est $400-400/27=10400/27$ cm$^3$."
    hints:
      - "La distance au sommet fournit le coefficient linéaire de similitude."
      - "Soustraire le volume de la petite pyramide au volume initial."
    expected: "côté de section 10/3 cm, volume du tronc 10400/27 cm^3"
    accepted:
      - "10/3 cm ; 10400/27 cm^3"
      - "10/3 ; 10400/27"
  - id: 3e-spatial-t3
    tierTitle: Synthèse
    prompt: "Dans un repère orthonormé de l'espace, $A(0;0;0)$, $B(4;0;0)$, $C(0;3;0)$ et $D(0;0;6)$. Démontrer que $ABC$ est rectangle, calculer son aire, puis calculer le volume de la pyramide $DABC$."
    solution: "$AB=4$, $AC=3$ et $BC=\\sqrt{(4-0)^2+(0-3)^2}=5$. Comme $AB^2+AC^2=4^2+3^2=5^2=BC^2$, le triangle $ABC$ est rectangle en $A$. Son aire vaut $(1/2)\\times4\\times3=6$. Le plan $ABC$ a pour équation $z=0$, tandis que $DA$ lui est perpendiculaire et mesure $6$. Ainsi, $V=(1/3)\\times6\\times6=12$ unités de volume."
    hints:
      - "Utiliser la formule de distance dans l'espace pour $BC$."
      - "La base se trouve dans le plan $z=0$ ; identifier la hauteur perpendiculaire."
    rubric:
      - "Calcule $AB=4$, $AC=3$ et $BC=5$, puis démontre l'angle droit."
      - "Calcule l'aire de la base, égale à $6$ unités d'aire."
      - "Identifie la hauteur $DA=6$ et obtient le volume $12$."
  - id: 3e-spatial-t4
    tierTitle: Défi avancé
    prompt: "Dans un cube unité, $A$ est un sommet et $M,N,P$ sont les milieux des trois arêtes deux à deux perpendiculaires issues de $A$. Un plan coupe le coin $A$ suivant la section triangulaire $MNP$. Démontrer que $MNP$ est équilatéral, calculer son aire exacte et déterminer le rapport entre le volume du tétraèdre $AMNP$ et celui du cube. Utiliser seulement les longueurs, Pythagore et la formule du volume d'une pyramide."
    solution: "Chaque face contenant deux des trois arêtes issues de $A$ est un carré unité. Dans la face contenant $AM$ et $AN$, le théorème de Pythagore donne $MN^2=AM^2+AN^2=(1/2)^2+(1/2)^2=1/2$. Le même raisonnement sur les deux autres faces donne $NP^2=PM^2=1/2$ ; le triangle $MNP$ est donc équilatéral de côté $s=1/\\sqrt2$. Sa hauteur $h$ vérifie $h^2=s^2-(s/2)^2=1/2-1/8=3/8$, donc $h=\\sqrt6/4$ et son aire vaut $sh/2=\\sqrt3/8$. Considérons $AMNP$ comme une pyramide de base le triangle rectangle $AMN$. L'aire de cette base vaut $(1/2)(1/2)(1/2)=1/8$ et $AP=1/2$ est perpendiculaire à la face contenant $AMN$ ; le volume vaut donc $(1/3)(1/8)(1/2)=1/48$. Le cube a pour volume $1$, donc le rapport vaut $1/48$."
    hints:
      - "Chaque côté de $MNP$ est la diagonale d'un triangle rectangle de côtés $1/2$ et $1/2$ sur une face du cube."
      - "Pour le volume du tétraèdre, choisir $AMN$ comme base et $AP$ comme hauteur perpendiculaire."
    rubric:
      - "Utilise les diagonales des faces et Pythagore pour démontrer que les trois côtés valent $1/\\sqrt2$."
      - "Calcule l'aire de la section, égale à $\\sqrt3/8$."
      - "Utilise l'aire de base $1/8$ et la hauteur $1/2$ pour obtenir le volume $1/48$."
      - "Compare au volume $1$ du cube pour obtenir le rapport $1/48$."
---
# Géométrie dans l'espace et sections

## Sections planes

Une **section plane** est la figure obtenue lorsqu'un plan coupe un solide. Un plan parallèle à la base d'un prisme ou d'un cylindre produit une base superposable. Un plan parallèle à la base d'une pyramide ou d'un cône produit une base semblable, généralement plus petite.

Un plan qui coupe une **sphère**, qui est seulement une surface, donne un cercle. Un plan qui coupe la **boule** correspondante donne un disque bordé par ce cercle. Si la sphère a pour rayon $R$ et si le plan est situé à la distance $d$ du centre, le rayon $r$ du cercle vérifie

$$r^2+d^2=R^2.$$

Cette relation provient du triangle rectangle reliant le centre de la sphère, le centre de la section et un point du cercle de section.

## Coordonnées dans l'espace

Un point a pour coordonnées $(x;y;z)$. Dans un repère orthonormé,

$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}.$$

Les plans de coordonnées ont pour équations $z=0$, $y=0$ et $x=0$. Les coordonnées permettent de vérifier des angles droits, de repérer des sections et d'identifier des hauteurs perpendiculaires.

## Aires et volumes à connaître

Pour un rayon $r$, une aire de base $B$ et une hauteur perpendiculaire $h$ :

| Solide ou surface | Formule |
| --- | --- |
| aire d'une sphère | $4\pi r^2$ |
| volume d'une boule | $\frac43\pi r^3$ |
| volume d'un cône | $\frac13\pi r^2h$ |
| volume d'une pyramide | $\frac13Bh$ |

Pour un cône de révolution de génératrice $s$, l'aire latérale vaut $\pi rs$. La génératrice et la hauteur perpendiculaire sont différentes ; elles vérifient $s^2=r^2+h^2$.

## Exemple résolu : section d'une sphère

Une sphère a pour rayon $10$ cm. Un plan se trouve à $6$ cm de son centre. Le rayon de la section vaut

$$r=\sqrt{10^2-6^2}=\sqrt{64}=8\text{ cm},$$

donc l'aire de la section est $\pi r^2=64\pi$ cm$^2$.

## Échelle et solides semblables

Si chaque longueur est multipliée par $k$, les aires sont multipliées par $k^2$ et les volumes par $k^3$. Un plan parallèle à la base d'une pyramide délimite une petite pyramide semblable ; le quotient de la hauteur du sommet à la section par la hauteur totale fournit le coefficient linéaire.

## Choisir une méthode

- Pour une section, identifier d'abord sa forme et la relation de similitude.
- Avec des coordonnées, calculer seulement les distances nécessaires pour démontrer la propriété annoncée.
- Pour un volume, identifier l'aire de la base et la hauteur **perpendiculaire**.
- Pour un cône ou une pyramide tronqués, soustraire le petit solide semblable au solide entier.

## Erreurs fréquentes

- Utiliser le diamètre lorsqu'une formule exige le rayon.
- Confondre la surface sphérique et la boule, ainsi que leurs formules.
- Utiliser la génératrice dans une formule de volume.
- Multiplier un volume par le coefficient linéaire au lieu de son cube.
- Supposer qu'un dessin en perspective conserve les longueurs ou les angles droits.

## Prolongement : raisonner sur une section de cube

Lorsqu'une section joint des points situés sur les arêtes d'un cube, on peut raisonner face par face. Le théorème de Pythagore donne les longueurs tracées sur les faces carrées et une face triangulaire bien choisie peut servir de base à une pyramide. On évite ainsi de se fier à la perspective, qui ne conserve ni longueurs ni angles droits.
