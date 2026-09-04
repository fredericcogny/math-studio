---
id: 2de-lines-equations
locale: fr
title: Équations de droites, parallélisme et systèmes
strand: Géométrie
summary: Passer de l'équation réduite à l'équation cartésienne d'une droite, lire un vecteur directeur, et résoudre un système pour trouver l'intersection de deux droites.
objectives:
  - Déterminer l'équation réduite d'une droite à partir de deux points ou d'un point et d'un coefficient directeur
  - Lire un vecteur directeur sur une équation cartésienne et tester le parallélisme
  - Résoudre un système de deux équations à deux inconnues et interpréter géométriquement la réponse
prerequisites:
  - Vecteurs, coordonnées et colinéarité
  - Fonctions affines
vocabulary:
  - en: reduced equation
    definition: Écriture y égale mx plus p d'une droite non verticale, où m est le coefficient directeur.
  - en: Cartesian equation
    definition: Écriture ax plus by plus c égale zéro qui décrit toute droite, y compris les droites verticales.
  - en: direction vector
    definition: Vecteur non nul colinéaire à la droite, qui donne sa direction.
flashcards:
  - front: Quelles droites n'ont pas d'équation réduite ?
    back: Les droites verticales. Une droite verticale a pour équation $x=k$, qui ne peut pas s'écrire $y=mx+p$.
  - front: Quel est le coefficient directeur de la droite passant par $A$ et $B$ ?
    back: $m=\dfrac{y_{B}-y_{A}}{x_{B}-x_{A}}$, à condition que $x_{A}\neq x_{B}$.
  - front: Quel est un vecteur directeur de la droite $ax+by+c=0$ ?
    back: $\vec{u}(-b \;;\; a)$. Tout multiple non nul de ce vecteur est aussi un vecteur directeur.
  - front: Que signifient les trois issues possibles d'un système de deux équations à deux inconnues ?
    back: Une solution signifie que les droites sont sécantes, aucune solution qu'elles sont strictement parallèles, et une infinité qu'elles sont confondues.
exercises:
  - id: 2de-lines-t1
    tierTitle: Application directe
    prompt: Donner l'équation réduite de la droite passant par $A(0 ; 3)$ et de coefficient directeur $-2$.
    solution: L'équation réduite est $y=mx+p$ avec $m=-2$. Comme la droite passe par $A(0 ; 3)$, on obtient $p=3$, donc l'équation est $y=-2x+3$.
    hints:
      - Un point d'abscisse $0$ donne directement la valeur de $p$.
  - id: 2de-lines-t2
    tierTitle: Entraînement standard
    prompt: Les droites $d\colon y=2x-1$ et $d'\colon y=-x+5$ se coupent en un point. Donner l'abscisse de ce point.
    solution: À l'intersection les deux expressions de $y$ sont égales, donc $2x-1=-x+5$, puis $3x=6$ et $x=2$. En substituant, $y=2\times 2-1=3$, donc le point est $(2 ; 3)$ et son abscisse vaut $2$.
    hints:
      - Égaler les deux expressions de $y$.
      - Substituer pour obtenir l'ordonnée et vérifier le résultat.
  - id: 2de-lines-t3
    tierTitle: Synthèse du programme officiel
    prompt: Soit $A(-2 ; 5)$ et $B(4 ; -1)$. Déterminer une équation cartésienne de la droite $(AB)$, donner un vecteur directeur, et dire si la droite $\Delta\colon 2x+2y-7=0$ est parallèle à $(AB)$. Préciser si les deux droites sont strictement parallèles ou confondues.
    solution: >-
      Un vecteur directeur de $(AB)$ est $\vec{AB}(4-(-2) \;;\; -1-5)=(6 \;;\; -6)$, colinéaire à $\vec{u}(1 ; -1)$. Un point $M(x ; y)$ appartient à $(AB)$ exactement lorsque $\det(\vec{AM},\vec{AB})=0$, c'est-à-dire $(x+2)\times(-6)-(y-5)\times 6=0$. En divisant par $-6$, on obtient $(x+2)+(y-5)=0$, donc une équation cartésienne est $x+y-3=0$. Pour $\Delta$, un vecteur directeur est $\vec{v}(-2 \;;\; 2)$, et $\det(\vec{u},\vec{v})=1\times 2-(-1)\times(-2)=2-2=0$, donc les droites sont parallèles. Elles ne sont pas confondues, car $A(-2 ; 5)$ donne $2\times(-2)+2\times 5-7=-4+10-7=-1\neq 0$, donc $A$ n'appartient pas à $\Delta$. Les deux droites sont donc strictement parallèles.
    hints:
      - Utiliser la condition du déterminant pour obtenir l'équation sans diviser par une coordonnée.
      - Deux droites parallèles sont confondues seulement si un point de la première appartient à la seconde.
    rubric:
      - Obtient une équation cartésienne correcte de la droite passant par A et B.
      - Donne un vecteur directeur et montre par un déterminant que les deux droites sont parallèles.
      - Teste un point pour conclure que les droites sont strictement parallèles et non confondues.
  - id: 2de-lines-t4
    tierTitle: Défi avancé
    prompt: Pour un paramètre réel $m$, on considère les droites $d_{m}\colon mx+y=1$ et $d'_{m}\colon 4x+my=2$. Classer, selon $m$, le nombre de points communs de $d_{m}$ et $d'_{m}$, et décrire la configuration géométrique dans chaque cas.
    solution: >-
      Des vecteurs directeurs sont $\vec{u}(-1 \;;\; m)$ pour $d_{m}$, écrite $mx+y-1=0$, et $\vec{v}(-m \;;\; 4)$ pour $d'_{m}$. Leur déterminant vaut $(-1)\times 4-m\times(-m)=m^{2}-4$. Si $m^{2}-4\neq 0$, c'est-à-dire $m\neq 2$ et $m\neq -2$, les vecteurs directeurs ne sont pas colinéaires, donc les droites sont sécantes et ont exactement un point commun. Si $m=2$, les deux équations deviennent $2x+y=1$ et $4x+2y=2$ ; la seconde est le double de la première, donc les droites sont confondues et ont une infinité de points communs. Si $m=-2$, les équations deviennent $-2x+y=1$ et $4x-2y=2$, c'est-à-dire $y=2x+1$ et $y=2x-1$ ; les coefficients directeurs coïncident mais les ordonnées à l'origine diffèrent, donc les droites sont strictement parallèles et n'ont aucun point commun.
    hints:
      - Calculer le déterminant de deux vecteurs directeurs et le factoriser.
      - Pour chaque racine du déterminant, comparer les deux équations afin de séparer droites confondues et droites strictement parallèles.
    rubric:
      - Calcule le déterminant sous la forme du carré de m moins quatre et trouve les deux valeurs critiques.
      - Conclut à exactement un point commun dès que le déterminant est non nul.
      - Distingue les deux valeurs critiques, l'une donnant des droites confondues et l'autre des droites strictement parallèles.
---
## Deux écritures d'une droite

Une droite non verticale possède une **équation réduite**

$$y=mx+p,$$

où $m$ est le **coefficient directeur** et $p$ l'ordonnée à l'origine. Par deux points $A$ et $B$ tels que $x_{A}\neq x_{B}$,

$$m=\frac{y_{B}-y_{A}}{x_{B}-x_{A}}.$$

Les droites verticales n'ont pas d'équation réduite ; elles s'écrivent $x=k$. Pour couvrir toutes les droites, on utilise une **équation cartésienne**

$$ax+by+c=0,\qquad (a ; b)\neq(0 ; 0).$$

Une équation cartésienne n'est pas unique : multiplier les trois coefficients par un même nombre non nul donne la même droite.

## Les vecteurs directeurs

La droite $ax+by+c=0$ admet le **vecteur directeur**

$$\vec{u}(-b \;;\; a).$$

Ce seul fait relie les deux chapitres. Deux droites sont **parallèles** exactement lorsque leurs vecteurs directeurs sont colinéaires, c'est-à-dire lorsque le déterminant de ces vecteurs est nul. Deux droites parallèles sont **confondues** lorsque, de plus, un point de la première appartient à la seconde ; sinon elles sont **strictement parallèles**.

Pour construire l'équation de la droite passant par $A$ et de vecteur directeur $\vec{u}$, on écrit que $\vec{AM}$ et $\vec{u}$ sont colinéaires :

$$\det(\vec{AM},\vec{u})=0.$$

Cette méthode ne divise jamais par une coordonnée, elle traite donc aussi les droites verticales.

## Systèmes et intersections

Chercher les points communs de deux droites revient à résoudre

$$\begin{cases}a x+b y=c\\ a'x+b'y=c'\end{cases}$$

par substitution ou par combinaison. Le nombre de solutions est décidé par le déterminant $ab'-a'b$ du système.

| Déterminant | Solutions | Configuration |
| --- | --- | --- |
| non nul | exactement une | droites sécantes |
| nul | aucune | droites strictement parallèles |
| nul | une infinité | droites confondues |

Lorsque le déterminant s'annule, comparer les deux équations sépare les deux derniers cas : si une équation est un multiple de l'autre, les droites sont confondues.

## Un paramètre change la configuration

Lorsqu'un coefficient dépend d'un paramètre $m$, le déterminant devient une expression en $m$. Le factoriser donne les **valeurs critiques** où la configuration change, et chaque valeur critique demande ensuite sa propre vérification. Ce type de classification complète, plutôt qu'une réponse unique, est la marque d'une discussion rigoureuse.

### Pour aller plus loin

On donne trois droites. Trouver une condition, uniquement à l'aide de déterminants, qui garantit qu'elles passent par un même point.
