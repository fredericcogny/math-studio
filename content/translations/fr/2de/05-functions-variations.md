---
id: 2de-functions-variations
locale: fr
title: Fonctions, ensembles de définition et tableaux de variations
strand: Fonctions
summary: Considérer une fonction comme un procédé muni d'un ensemble de définition, circuler entre formule, tableau et courbe, et résumer son comportement dans un tableau de variations.
objectives:
  - Déterminer l'ensemble de définition d'une fonction donnée par une formule
  - Lire images, antécédents et extremums sur une courbe
  - Construire un tableau de variations et l'utiliser pour dénombrer les solutions d'une équation
prerequisites:
  - Coordonnées dans le plan
  - Notation par intervalles et tableaux de signes
vocabulary:
  - en: domain
    definition: Ensemble de toutes les valeurs d'entrée pour lesquelles la fonction produit un résultat.
  - en: preimage
    definition: Valeur d'entrée dont l'image par la fonction est égale à une valeur de sortie donnée.
  - en: variation table
    definition: Tableau résumant les intervalles où une fonction croît et décroît, avec ses valeurs aux bornes.
flashcards:
  - front: Quelle est la différence entre une image et un antécédent ?
    back: L'image de $a$ est l'unique valeur $f(a)$. Un antécédent de $b$ est un $x$ tel que $f(x)=b$, et il peut en exister aucun, un seul ou plusieurs.
  - front: Quelles deux situations réduisent un ensemble de définition ?
    back: Un dénominateur qui s'annule et une racine carrée d'un nombre négatif. Il faut résoudre ces conditions avant toute chose.
  - front: Que signifie « $f$ est croissante sur un intervalle $I$ » ?
    back: Pour tous $a$ et $b$ de $I$ avec $a<b$, on a $f(a)\leqslant f(b)$. L'ordre des entrées est conservé.
  - front: Comment un tableau de variations dénombre-t-il les solutions de $f(x)=k$ ?
    back: Sur chaque intervalle de monotonie l'équation a au plus une solution, donc compter les franchissements du niveau $k$ donne le total.
exercises:
  - id: 2de-funcvar-t1
    tierTitle: Application directe
    prompt: Soit $f(x)=x^{2}-3x+2$. Calculer $f(-2)$.
    solution: $f(-2)=(-2)^{2}-3\times(-2)+2=4+6+2=12$.
    hints:
      - Remplacer chaque $x$ par $-2$ et garder les parenthèses autour du nombre négatif.
  - id: 2de-funcvar-t2
    tierTitle: Entraînement standard
    prompt: La fonction $g$ est définie par $g(x)=2x^{2}-8x+1$, et elle peut se réécrire $g(x)=2(x-2)^{2}-7$. À l'aide de cette seconde forme, donner la valeur minimale de $g$ sur $\mathbb{R}$.
    solution: Le carré $(x-2)^{2}$ est toujours positif ou nul et ne vaut $0$ que pour $x=2$. Donc $2(x-2)^{2}\geqslant 0$ et $g(x)\geqslant -7$, avec égalité en $x=2$. La valeur minimale de $g$ est $-7$, atteinte en $x=2$.
    hints:
      - Un carré n'est jamais négatif, donc la plus petite valeur possible du carré est $0$.
      - Préciser à la fois la valeur du minimum et l'endroit où il est atteint.
  - id: 2de-funcvar-t3
    tierTitle: Synthèse du programme officiel
    prompt: Une fonction $h$ est définie sur $[-4 \;;\; 5]$. Elle décroît de $h(-4)=6$ jusqu'à $h(1)=-3$, puis croît de $h(1)=-3$ jusqu'à $h(5)=4$. Construire son tableau de variations, puis déterminer, pour tout réel $k$, le nombre de solutions de $h(x)=k$ sur $[-4 \;;\; 5]$.
    solution: >-
      Le tableau comporte une ligne pour $x$ allant de $-4$ à $5$ avec la valeur intermédiaire $1$, et une ligne pour $h$ descendant de $6$ à $-3$ sur $[-4 \;;\; 1]$ puis remontant de $-3$ à $4$ sur $[1 \;;\; 5]$. Sur chacun de ces deux intervalles $h$ est monotone, donc $h(x)=k$ y a au plus une solution. Le décompte des franchissements donne aucune solution si $k<-3$ ou $k>6$ ; exactement une solution si $k=-3$, puisque seul le minimum est atteint, et également une seule si $4<k\leqslant 6$, car seule la branche décroissante atteint ces valeurs ; et exactement deux solutions si $-3<k\leqslant 4$, une sur chaque branche.
    hints:
      - Tracer d'abord le tableau et repérer les valeurs $-3$, $4$ et $6$ sur l'axe des ordonnées.
      - Sur chaque branche l'équation a au plus une solution, donc comparer $k$ aux valeurs aux bornes.
    rubric:
      - Produit un tableau de variations correct avec le minimum en x égal à 1.
      - Utilise la monotonie sur chaque branche pour majorer par un le nombre de solutions par branche.
      - Donne la classification complète du nombre de solutions pour toute valeur de k.
  - id: 2de-funcvar-t4
    tierTitle: Défi avancé
    prompt: Démontrer, en utilisant seulement la définition de la monotonie, que la fonction $f(x)=x^{2}$ est décroissante sur $]-\infty \;;\; 0]$ et croissante sur $[0 \;;\; +\infty[$. Expliquer ensuite pourquoi $f$ n'est pas monotone sur $\mathbb{R}$, et déterminer l'ensemble de définition de $u(x)=\dfrac{1}{\sqrt{4-x^{2}}}$.
    solution: >-
      Soient $a<b$ dans $]-\infty \;;\; 0]$. Alors $f(b)-f(a)=b^{2}-a^{2}=(b-a)(b+a)$. Le facteur $b-a$ est positif, et comme $a<b\leqslant 0$ on a $a<0$ et $b\leqslant 0$, donc $b+a<0$. Ainsi $f(b)-f(a)<0$, donc $f(b)<f(a)$ et $f$ est strictement décroissante. Sur $[0 \;;\; +\infty[$, en prenant $0\leqslant a<b$, on obtient $b-a>0$ et $b+a>0$, donc $f(b)-f(a)>0$ et $f$ est strictement croissante. La fonction n'est pas monotone sur $\mathbb{R}$ car $-2<0<1$ alors que $f(-2)=4>f(0)=0$ et $f(0)=0<f(1)=1$ : l'ordre des entrées est inversé sur un couple et conservé sur l'autre. Pour l'ensemble de définition de $u$, la racine carrée exige $4-x^{2}\geqslant 0$ et le dénominateur exige $4-x^{2}\neq 0$, donc $4-x^{2}>0$. Comme $4-x^{2}=(2-x)(2+x)$, un tableau de signes donne $-2<x<2$, donc l'ensemble de définition est $]-2 \;;\; 2[$.
    hints:
      - Étudier le signe de $f(b)-f(a)$ après avoir factorisé la différence de deux carrés.
      - Une racine carrée située au dénominateur doit être strictement positive, et pas seulement positive ou nulle.
    rubric:
      - Utilise la factorisation de la différence de deux carrés et le signe de chaque facteur sur le bon intervalle.
      - Donne un contre-exemple numérique explicite à la monotonie sur la droite des réels entière.
      - Combine la condition sur la racine et la condition de dénominateur non nul pour obtenir l'intervalle ouvert de -2 à 2.
---
## Une fonction est un procédé muni d'un ensemble de définition

Une **fonction** $f$ associe à chaque entrée $x$ au plus une sortie $f(x)$, appelée **image** de $x$. L'ensemble des entrées qui produisent effectivement un résultat est l'**ensemble de définition**, noté $D_{f}$.

Deux situations restreignent un ensemble de définition :

- un dénominateur ne doit pas s'annuler, donc $x\mapsto\dfrac{1}{x-3}$ a pour ensemble de définition $]-\infty \;;\; 3[\cup\,]3 \;;\; +\infty[$ ;
- une racine carrée exige un argument positif ou nul, donc $x\mapsto\sqrt{x+1}$ a pour ensemble de définition $[-1 \;;\; +\infty[$.

Un **antécédent** d'un nombre $b$ est un $x$ de l'ensemble de définition tel que $f(x)=b$. Les images sont uniques, les antécédents non : pour $f(x)=x^{2}$, le nombre $9$ a deux antécédents, $-3$ et $3$.

## Trois représentations, une seule fonction

La même fonction apparaît sous forme de formule, de tableau de valeurs et de courbe. Les savoir-faire de lecture se transfèrent d'une représentation à l'autre.

- L'**image** de $a$ est l'ordonnée du point de la courbe d'abscisse $a$.
- Les **antécédents** de $b$ sont les abscisses des points d'intersection de la courbe avec la droite horizontale d'équation $y=b$.
- Résoudre $f(x)\leqslant b$ revient à chercher où la courbe est située sous cette droite.

## Variations et extremums

Une fonction $f$ est **croissante** sur un intervalle $I$ lorsque $a<b$ entraîne $f(a)\leqslant f(b)$ pour tous $a$ et $b$ de $I$ : elle conserve l'ordre. Elle est **décroissante** lorsque $a<b$ entraîne $f(a)\geqslant f(b)$ : elle inverse l'ordre. Ces mots s'appliquent à un intervalle, jamais à un point isolé.

La technique de démonstration standard consiste à factoriser la différence $f(b)-f(a)$ et à lire son signe.

Un **tableau de variations** résume tout cela. Sa première ligne donne les bornes de l'ensemble de définition et les points où le sens change ; sa seconde ligne utilise des flèches et note les valeurs en ces points.

| $x$ | $-4$ | | $1$ | | $5$ |
| --- | --- | --- | --- | --- | --- |
| $h$ | $6$ | décroissante | $-3$ | croissante | $4$ |

Le tableau montre un **minimum** égal à $-3$ atteint en $x=1$, et un **maximum** égal à $6$ atteint en $x=-4$.

## Dénombrer les solutions à partir d'un tableau

Sur un intervalle où $f$ est monotone, l'équation $f(x)=k$ a **au plus une** solution. Un tableau de variations à deux branches donne donc un décompte immédiat : comparer $k$ aux valeurs aux bornes et à l'extremum, puis additionner les franchissements branche par branche. Ce raisonnement remplace le tâtonnement par une disjonction de cas complète.

### Pour aller plus loin

Deux fonctions sont croissantes sur un même intervalle. Leur somme est-elle croissante ? Leur produit l'est-il ? Trouver une démonstration ou un contre-exemple pour chaque question.
