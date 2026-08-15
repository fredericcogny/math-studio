---
id: 5e-symmetry-parallelograms
locale: fr
title: Symétrie, parallélogrammes et quadrilatères particuliers
strand: Géométrie
summary: Utiliser la symétrie centrale, les codages, les caractérisations des quadrilatères et l'aire du parallélogramme pour résoudre des problèmes géométriques.
objectives:
  - Construire et utiliser une symétrie centrale
  - Interpréter correctement les codages de parallélisme et de perpendicularité
  - Définir et caractériser parallélogrammes, rectangles, losanges et carrés
  - Calculer des aires $b\times h$ et décomposer des figures complexes
prerequisites:
  - Utiliser une règle, un compas et une équerre
  - Reconnaître segments, angles, milieux et codages d'une figure
  - Calculer les aires d'un rectangle et d'un triangle
vocabulary:
  - en: central symmetry
    definition: Demi-tour pour lequel le centre est le milieu de chaque segment reliant un point à son image.
  - en: parallel lines
    definition: Droites coplanaires de même direction ; selon la convention scolaire inclusive, elles peuvent être confondues, tandis que deux parallèles distinctes ne se coupent pas.
  - en: parallelogram
    definition: Quadrilatère dont les côtés opposés sont parallèles deux à deux.
  - en: rectangle
    definition: Quadrilatère qui possède quatre angles droits.
  - en: rhombus
    definition: Quadrilatère qui possède quatre côtés de même longueur.
  - en: square
    definition: Quadrilatère qui possède quatre côtés de même longueur et quatre angles droits.
flashcards:
  - front: Quelle propriété vérifie $O$ si $A'$ est l'image de $A$ par la symétrie centrale de centre $O$ ?
    back: $O$ est le milieu de $[AA']$.
  - front: Donner la formule de l'aire d'un parallélogramme.
    back: $A=b\times h$, où $h$ est perpendiculaire à la base $b$ choisie.
  - front: Quelle propriété des diagonales caractérise un parallélogramme ?
    back: Ses diagonales se coupent en leur milieu.
  - front: Tout carré est-il à la fois un rectangle et un losange ?
    back: Oui ; il possède quatre angles droits et quatre côtés de même longueur.
exercises:
  - id: 5e-symmetry-parallelograms-t1
    tierTitle: Reconnaissance par le codage
    prompt: >-
      Un quadrilatère codé $ABCD$ possède des diagonales de même milieu, de même longueur et portées par des droites perpendiculaires. Identifier le quadrilatère particulier le plus précis et justifier chaque étape.
    solution: >-
      Des diagonales de même milieu caractérisent un parallélogramme. Dans un parallélogramme, des diagonales de même longueur caractérisent un rectangle et des diagonales perpendiculaires caractérisent un losange. Ainsi, $ABCD$ est à la fois un rectangle et un losange : c'est un carré.
    hints:
      - Commencer par le codage du milieu commun.
      - N'appliquer les caractérisations par les diagonales qu'après avoir établi que le quadrilatère est un parallélogramme.
    rubric:
      - Utilise le milieu commun pour établir qu'il s'agit d'un parallélogramme.
      - Utilise les diagonales égales et perpendiculaires pour établir les propriétés du rectangle et du losange.
      - Conclut que la classification la plus précise est un carré.
  - id: 5e-symmetry-parallelograms-t2
    tierTitle: Aire d'une figure complexe
    prompt: >-
      Un parallélogramme a une base de $12$ cm et la hauteur perpendiculaire correspondante mesure $7$ cm. On lui retire une encoche triangulaire de base $4$ cm et de hauteur perpendiculaire $3$ cm. Calculer l'aire restante et expliquer pourquoi le côté oblique du parallélogramme n'est pas utilisé.
    solution: >-
      L'aire du parallélogramme vaut $12\times7=84\text{ cm}^2$. L'aire de l'encoche vaut $4\times3/2=6\text{ cm}^2$. L'aire restante est $84-6=78\text{ cm}^2$. La formule utilise la distance perpendiculaire entre les bases parallèles, et non un côté oblique.
    hints:
      - Décomposer la figure en un parallélogramme auquel on retire un triangle.
      - Associer chaque base à sa hauteur perpendiculaire.
    rubric:
      - Calcule l'aire du parallélogramme, égale à $84\text{ cm}^2$.
      - Calcule l'aire du triangle, égale à $6\text{ cm}^2$.
      - Obtient $78\text{ cm}^2$ et explique la nécessité d'une hauteur perpendiculaire.
  - id: 5e-symmetry-parallelograms-t3
    tierTitle: Synthèse du programme officiel
    prompt: >-
      Dans le quadrilatère $EFGH$, les diagonales $[EG]$ et $[FH]$ se coupent en $O$, avec $OE=OG$, $OF=OH$, $EG=FH$ et $(EG)\perp(FH)$. Démontrer que $EFGH$ est un carré. Si son côté mesure $6$ cm et si un triangle de base $2$ cm et de hauteur $3$ cm est retiré d'un coin, calculer l'aire restante.
    solution: >-
      Les deux premières égalités font de $O$ le milieu des deux diagonales ; $EFGH$ est donc un parallélogramme. Ses diagonales de même longueur en font un rectangle et ses diagonales perpendiculaires en font un losange. C'est donc un carré. L'aire du carré vaut $6^2=36\text{ cm}^2$ et celle du triangle retiré vaut $2\times3/2=3\text{ cm}^2$. L'aire restante est $33\text{ cm}^2$.
    hints:
      - Traduire chaque paire de demi-diagonales égales par une affirmation sur un milieu.
      - Un carré peut être caractérisé comme un parallélogramme qui est à la fois rectangle et losange.
      - Soustraire l'aire du triangle retiré.
    rubric:
      - Établit le parallélogramme grâce au milieu commun des diagonales.
      - Utilise les deux caractérisations par les diagonales pour démontrer qu'il s'agit d'un carré.
      - Décompose correctement la figure complexe et obtient $33\text{ cm}^2$.
  - id: 5e-symmetry-parallelograms-t4
    tierTitle: Défi olympique de construction
    prompt: >-
      Trois points non alignés $A$, $B$ et $C$ sont donnés, mais leur ordre autour d'un parallélogramme n'est pas précisé. Construire tous les points $D$ tels que les quatre points puissent être les sommets d'un parallélogramme. Démontrer qu'il existe exactement trois points possibles.
    solution: >-
      Choisissons successivement chaque paire de sommets opposés parmi $A$, $B$ et $C$. Construire $D_1$, symétrique de $B$ par rapport au milieu de $[AC]$ ; $[AC]$ et $[BD_1]$ ont alors le même milieu et sont les diagonales d'un parallélogramme. De même, construire $D_2$, symétrique de $C$ par rapport au milieu de $[AB]$, puis $D_3$, symétrique de $A$ par rapport au milieu de $[BC]$. Réciproquement, dans tout parallélogramme complété, une paire parmi les trois points donnés forme des sommets opposés ; son milieu est aussi celui du segment joignant le troisième point à $D$. Le point $D$ est donc l'un des trois symétriques construits. Le non-alignement rend les trois candidats distincts : il existe exactement trois possibilités.
    hints:
      - Choisir la paire de points donnés qui formera des sommets opposés.
      - Utiliser la caractérisation par le milieu commun pour la construction et pour prouver que la liste est complète.
    rubric:
      - Construit les trois candidats à l'aide des milieux et de la symétrie centrale.
      - Démontre que chaque candidat fournit un parallélogramme.
      - Démontre que toute solution figure dans la liste et que les trois points sont distincts.
---
## Symétrie centrale

La symétrie centrale de centre $O$ est un demi-tour. Elle transforme $A$ en $A'$ exactement lorsque $O$ est le milieu de $[AA']$. Elle conserve longueurs, mesures d'angles, alignement, parallélisme, perpendicularité et aire. Une droite passant par $O$ est transformée en elle-même ; une droite ne passant pas par $O$ est transformée en une droite parallèle distincte.

## Droites parallèles et perpendiculaires

Cette leçon utilise la convention scolaire inclusive : deux droites coplanaires sont **parallèles** lorsqu'elles ont la même direction. Une droite est donc parallèle à elle-même et deux droites confondues sont parallèles. Deux droites parallèles **distinctes** n'ont aucun point commun. On peut parler de droites « strictement parallèles » lorsque la distinction est nécessaire.

Deux droites sont perpendiculaires lorsqu'elles se coupent en formant un angle droit. Deux droites perpendiculaires à une même droite sont parallèles. Si deux droites distinctes sont parallèles, toute droite perpendiculaire à l'une est perpendiculaire à l'autre.

On code le parallélisme par des flèches, un angle droit par un petit carré et des longueurs égales par des traits. L'apparence seule ne constitue jamais une preuve.

## Famille des parallélogrammes

Un **parallélogramme** a ses côtés opposés parallèles deux à deux. Ses côtés opposés ont la même longueur, ses angles opposés ont la même mesure et ses diagonales se coupent en leur milieu. Parmi ses caractérisations utiles :

- des diagonales de même milieu ;
- deux paires de côtés opposés parallèles ;
- une paire de côtés opposés à la fois parallèles et de même longueur.

Un **rectangle** possède quatre angles droits. C'est un parallélogramme ; parmi les parallélogrammes, un angle droit ou des diagonales de même longueur suffit à caractériser un rectangle.

Un **losange** possède quatre côtés de même longueur. C'est un parallélogramme ; parmi les parallélogrammes, deux côtés consécutifs de même longueur ou des diagonales perpendiculaires suffit à caractériser un losange.

Un **carré** possède quatre côtés de même longueur et quatre angles droits. Il est à la fois rectangle et losange. Parmi les parallélogrammes, des diagonales à la fois de même longueur et perpendiculaires caractérisent un carré.

> Une caractérisation exige toutes ses hypothèses. Des diagonales de même longueur ne suffisent pas à faire d'un quadrilatère quelconque un rectangle ; des diagonales perpendiculaires ne suffisent pas non plus à en faire un losange.

## Aire et figures complexes

Pour un parallélogramme de base $b$ et de hauteur perpendiculaire correspondante $h$,

$$A=b\times h.$$

La hauteur est la distance perpendiculaire entre les droites qui portent les bases opposées. Ce n'est généralement pas un côté oblique.

Pour une figure complexe, tracer des segments auxiliaires et la décomposer en figures usuelles. Additionner des pièces sans chevauchement ou soustraire un trou ou une encoche. Conserver la même unité et exprimer la réponse en unités carrées.

## Construire et démontrer

Pour compléter un parallélogramme à partir de trois sommets consécutifs, tracer des parallèles par le premier et le troisième sommet, ou construire le milieu de la diagonale qui les joint puis prendre le symétrique du sommet intermédiaire par rapport à ce milieu. Une solution complète décrit la construction, nomme la propriété codée obtenue et cite la définition ou la caractérisation qui permet de conclure.
