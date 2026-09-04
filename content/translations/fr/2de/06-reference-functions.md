---
id: 2de-reference-functions
locale: fr
title: Fonctions de référence, affine, carré et inverse
strand: Fonctions
summary: Connaître l'allure, les variations et les règles de comparaison des fonctions affine, carré et inverse, puis les utiliser pour résoudre des inéquations.
objectives:
  - Énoncer les variations et la courbe des fonctions affine, carré et inverse
  - Comparer un nombre, son carré et son inverse selon l'intervalle auquel il appartient
  - Résoudre une inéquation en comparant les positions de deux courbes de référence
prerequisites:
  - Fonctions, ensembles de définition et tableaux de variations
  - Tableaux de signes
vocabulary:
  - en: affine function
    definition: Fonction de la forme x associe ax plus b, dont la courbe est une droite.
  - en: parabola
    definition: Courbe de la fonction carré, symétrique par rapport à l'axe des ordonnées.
  - en: hyperbola
    definition: Courbe de la fonction inverse, formée de deux branches séparées.
flashcards:
  - front: Qu'est-ce qui détermine si une fonction affine croît ou décroît ?
    back: Le signe du coefficient directeur $a$. Si $a>0$ elle croît, si $a<0$ elle décroît, et si $a=0$ elle est constante.
  - front: Où la fonction carré est-elle décroissante ?
    back: Sur $]-\infty \;;\; 0]$. Elle croît sur $[0 \;;\; +\infty[$ et son minimum vaut $0$, atteint en $x=0$.
  - front: La fonction inverse est-elle décroissante sur tout son ensemble de définition ?
    back: Elle est décroissante sur $]-\infty \;;\; 0[$ et sur $]0 \;;\; +\infty[$, mais pas sur la réunion des deux, car $f(-1)=-1$ est inférieur à $f(1)=1$.
  - front: Pour $0<x<1$, comment se comparent $x$, $x^{2}$ et $\frac{1}{x}$ ?
    back: $x^{2}<x<1<\dfrac{1}{x}$. Élever au carré rétrécit un nombre de $]0 \;;\; 1[$ et prendre l'inverse l'agrandit.
exercises:
  - id: 2de-reffunc-t1
    tierTitle: Application directe
    prompt: Soit $f(x)=\dfrac{1}{x}$. Calculer $f(-0{,}25)$.
    solution: $f(-0{,}25)=\dfrac{1}{-0{,}25}=-4$, car $-0{,}25=-\dfrac{1}{4}$ et l'inverse de $-\dfrac{1}{4}$ est $-4$.
    hints:
      - Écrire le décimal sous forme de fraction et la retourner.
  - id: 2de-reffunc-t2
    tierTitle: Entraînement standard
    prompt: Résoudre $x^{2}\leqslant 9$ et donner le nombre d'entiers appartenant à l'ensemble des solutions.
    solution: L'inéquation équivaut à $x^{2}-9\leqslant 0$, c'est-à-dire $(x-3)(x+3)\leqslant 0$. Un tableau de signes donne l'ensemble des solutions $[-3 \;;\; 3]$. Les entiers qui y figurent sont $-3 \;;\; -2 \;;\; -1 \;;\; 0 \;;\; 1 \;;\; 2 \;;\; 3$, donc il y en a $7$.
    hints:
      - Tout ramener d'un même côté et factoriser la différence de deux carrés.
      - La fonction carré n'est pas monotone, donc la réponse est un intervalle autour de zéro et non une demi-droite.
  - id: 2de-reffunc-t3
    tierTitle: Synthèse du programme officiel
    prompt: Dans un même repère, tracer les courbes de $x\mapsto x$ et de $x\mapsto x^{2}$, puis déterminer exactement l'ensemble des réels $x$ pour lesquels $x^{2}<x$. Interpréter la réponse en termes de positions relatives des deux courbes.
    solution: >-
      L'inéquation $x^{2}<x$ équivaut à $x^{2}-x<0$, c'est-à-dire $x(x-1)<0$. Les deux facteurs s'annulent en $0$ et en $1$ ; un tableau de signes montre que le produit est négatif exactement sur $]0 \;;\; 1[$. Donc $x^{2}<x$ est vraie précisément pour $0<x<1$. Géométriquement, la parabole est située sous la droite d'équation $y=x$ strictement entre les deux points d'intersection $(0 ; 0)$ et $(1 ; 1)$, et au-dessus ailleurs. Cela correspond au fait qu'élever au carré rétrécit les nombres de $]0 \;;\; 1[$ et agrandit les nombres supérieurs à $1$.
    hints:
      - Comparer deux expressions en étudiant le signe de leur différence.
      - Les points d'intersection des courbes sont les valeurs où la différence est nulle.
    rubric:
      - Transforme la comparaison en étude du signe d'une différence factorisée.
      - Construit le tableau de signes et donne l'intervalle ouvert de 0 à 1.
      - Interprète le résultat comme la parabole située sous la droite entre les deux points d'intersection.
  - id: 2de-reffunc-t4
    tierTitle: Défi avancé
    prompt: Déterminer, avec une disjonction de cas complète, l'ensemble de tous les réels $x$ tels que $x^{2}>\dfrac{1}{x}$.
    solution: >-
      La valeur $x=0$ est interdite. Deux cas découlent du signe de $x$. Si $x>0$, multiplier les deux membres par le nombre positif $x$ conserve le sens et donne $x^{3}>1$, c'est-à-dire $x>1$, car la fonction cube est croissante. Si $x<0$, alors $x^{2}>0$ tandis que $\dfrac{1}{x}<0$, donc l'inéquation est vraie pour tout $x$ négatif. En réunissant les deux cas, l'ensemble des solutions est $]-\infty \;;\; 0[\;\cup\;]1 \;;\; +\infty[$. La vérification en $x=-2$ donne $4>-0{,}5$, ce qui est vrai, et en $x=0{,}5$ donne $0{,}25>2$, ce qui est faux, en cohérence avec le résultat.
    hints:
      - Multiplier par $x$ n'est permis qu'une fois le signe de $x$ fixé, donc il faut séparer les cas.
      - Pour $x$ négatif, comparer les signes des deux membres plutôt que calculer.
    rubric:
      - Exclut zéro et organise le travail selon les cas x positif et x négatif.
      - Traite correctement le cas positif et aboutit à la condition x supérieur à 1.
      - Conclut que toute valeur négative convient et donne la réunion des deux intervalles.
---
## Les fonctions affines

Une **fonction affine** s'écrit $f(x)=ax+b$. Sa courbe est une droite de **coefficient directeur** $a$ et d'ordonnée à l'origine $b$. Entre deux entrées,

$$a=\frac{f(x_{2})-f(x_{1})}{x_{2}-x_{1}},$$

donc le coefficient directeur est le taux d'accroissement constant. Le signe de $a$ décide de tout : $a>0$ donne une fonction croissante, $a<0$ une fonction décroissante et $a=0$ une fonction constante. Une fonction **linéaire** est le cas particulier $b=0$, qui correspond exactement à une situation de proportionnalité.

## La fonction carré

La fonction $f(x)=x^{2}$ est définie sur $\mathbb{R}$, et $f(-x)=f(x)$, donc sa courbe, la **parabole**, est symétrique par rapport à l'axe des ordonnées.

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- |
| $x^{2}$ | | décroissante | $0$ | croissante | |

Son minimum vaut $0$, atteint en $x=0$. Comme elle n'est pas monotone sur $\mathbb{R}$, l'équivalence $x^{2}\leqslant k$ ne se ramène jamais à une seule inégalité sur $x$ : pour $k\geqslant 0$ elle donne $-\sqrt{k}\leqslant x\leqslant\sqrt{k}$.

## La fonction inverse

La fonction $f(x)=\dfrac{1}{x}$ est définie sur $]-\infty \;;\; 0[\cup\,]0 \;;\; +\infty[$. Sa courbe, l'**hyperbole**, possède deux branches et est symétrique par rapport à l'origine.

La fonction est décroissante **sur chaque branche**, mais pas sur la réunion des deux : $-1<1$ alors que $f(-1)=-1<f(1)=1$. La monotonie est une propriété d'un intervalle, et l'ensemble de définition n'est pas ici un intervalle.

## Comparer un nombre, son carré et son inverse

Les positions dépendent de l'intervalle, et c'est pourquoi un croquis vaut mieux qu'une mémorisation.

| Intervalle | Ordre |
| --- | --- |
| $0<x<1$ | $x^{2}<x<1<\dfrac{1}{x}$ |
| $x=1$ | $x^{2}=x=\dfrac{1}{x}=1$ |
| $x>1$ | $\dfrac{1}{x}<1<x<x^{2}$ |

## Comparer deux courbes

Pour comparer $f$ et $g$, on étudie le **signe de la différence** $f(x)-g(x)$. Là où la différence est positive, la courbe de $f$ est au-dessus de celle de $g$ ; là où elle est nulle, les courbes se coupent. Cette méthode unique résout toutes les questions de position et transforme une inégalité entre fonctions en un tableau de signes.

### Pour aller plus loin

Tracer $x\mapsto x^{2}$ et $x\mapsto\dfrac{1}{x}$ dans un même repère pour $x>0$. Lire le nombre de points d'intersection, puis le confirmer par le calcul.
