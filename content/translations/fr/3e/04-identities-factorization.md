---
id: 3e-identities-factorization
locale: fr
title: Identités remarquables, développement et factorisation
strand: Algèbre
summary: Transformer des expressions littérales dans les deux sens et utiliser les facteurs pour résoudre des équations produit nul.
objectives:
  - Développer et réduire des expressions à l'aide de la distributivité
  - Factoriser par un facteur commun
  - Utiliser les trois identités remarquables dans les deux sens
  - Résoudre des équations à l'aide de la règle du produit nul
prerequisites:
  - Calcul avec les nombres relatifs
  - Substitution dans une expression
  - Résolution d'équations du premier degré
vocabulary:
  - en: expand
    definition: Transformer un produit en une somme égale à l'aide de la distributivité.
  - en: factor
    definition: Transformer une somme en un produit égal.
  - en: identity
    definition: Égalité vraie pour toutes les valeurs autorisées de ses variables.
  - en: zero-product property
    definition: Un produit est nul si et seulement si au moins l'un de ses facteurs est nul.
flashcards:
  - front: Développer $k(a+b)$.
    back: $ka+kb$.
  - front: Factoriser $ax+ay$.
    back: $a(x+y)$.
  - front: Énoncer l'identité de la différence de deux carrés.
    back: $a^2-b^2=(a-b)(a+b)$.
  - front: Quand peut-on utiliser la règle du produit nul ?
    back: Seulement lorsqu'un membre de l'équation est nul et que l'autre est écrit sous forme d'un produit.
exercises:
  - id: 3e-identities-t1
    tierTitle: Application directe
    prompt: Développer et réduire $(2x-5)^2$. Écrire le résultat suivant les puissances décroissantes de $x$.
    solution: Avec $(a-b)^2=a^2-2ab+b^2$, on obtient $(2x-5)^2=(2x)^2-2(2x)(5)+5^2=4x^2-20x+25$.
    hints:
      - Utiliser les trois termes de $(a-b)^2=a^2-2ab+b^2$.
    expected: 4x^2 - 20x + 25
    accepted:
      - 4x²-20x+25
      - 4x^2-20x+25
  - id: 3e-identities-t2
    tierTitle: Problème type brevet
    prompt: Un rectangle a pour côtés $x+5$ cm et $x-2$ cm, avec $x\ge2$. Son aire est égale à $40$ cm$^2$. Mettre le problème en équation, factoriser cette équation et déterminer les dimensions du rectangle.
    solution: L'équation de l'aire est $(x+5)(x-2)=40$. En développant, on obtient $x^2+3x-10=40$, puis $x^2+3x-50=0$. Comme $x^2+3x-50=(x+10)(x-5)$, la règle du produit nul donne $x=-10$ ou $x=5$. La condition $x\ge2$ exclut $-10$. Les côtés mesurent donc $10$ cm et $3$ cm.
    hints:
      - Utiliser aire = longueur × largeur.
      - Tout ramener dans un même membre, puis chercher deux nombres dont le produit vaut $-50$ et la somme $3$.
    rubric:
      - Forme l'équation d'aire $(x+5)(x-2)=40$ et la réécrit sous la forme $x^2+3x-50=0$.
      - Factorise l'équation en $(x+10)(x-5)=0$ et obtient les deux valeurs possibles $x=-10$ et $x=5$.
      - Exclut $x=-10$ à l'aide de $x\ge2$ et donne les dimensions $10$ cm sur $3$ cm.
  - id: 3e-identities-t3
    tierTitle: Synthèse
    prompt: Démontrer que la différence des carrés de deux entiers impairs consécutifs est toujours divisible par $8$.
    solution: Notons $2n+1$ et $2n+3$ deux entiers impairs consécutifs. La différence de leurs carrés est $(2n+3)^2-(2n+1)^2$. L'identité $a^2-b^2=(a-b)(a+b)$ donne $2(4n+4)=8(n+1)$. Comme $n+1$ est entier, cette différence est un multiple de $8$.
    hints:
      - Représenter toute paire d'entiers impairs consécutifs à l'aide d'un même paramètre entier.
      - Factoriser la différence des carrés plutôt que de développer les deux carrés.
    rubric:
      - Représente correctement deux entiers impairs consécutifs quelconques.
      - Utilise l'identité de la différence de deux carrés pour obtenir $8(n+1)$.
      - Conclut à la divisibilité par $8$ pour toute valeur entière du paramètre.
  - id: 3e-identities-t4
    tierTitle: Défi avancé
    prompt: Pour chaque entier $m$, résoudre $(x+m)^2=(m+1)^2$. Classer selon $m$ le nombre de solutions positives ou nulles distinctes. Dans les cas où il existe deux telles solutions, caractériser exactement les valeurs de $m$ pour lesquelles leur produit est un nombre premier. Démontrer que tous les cas ont été étudiés.
    solution: >-
      On place les deux carrés dans un même membre et on factorise : $(x+m)^2-(m+1)^2=(x-1)(x+2m+1)=0$. Les racines sont donc $x=1$ et $x=-2m-1$. Si $m\ge0$, la seconde est négative : il existe une seule solution positive ou nulle. Si $m=-1$, les deux facteurs donnent la même racine $1$ : il existe encore une seule solution distincte. Si $m\le-2$, alors $-2m-1\ge3$ : il existe deux solutions positives ou nulles distinctes. Leur produit vaut $-2m-1$. Il est premier exactement lorsque $-2m-1=p$ pour un nombre premier impair $p$, soit $m=-(p+1)/2$. Réciproquement, tout nombre premier impair $p$ fournit un entier $m\le-2$ et les racines $1,p$, dont le produit est premier. Les cas $m\ge0$, $m=-1$ et $m\le-2$ forment une partition des entiers.
    hints:
      - Utiliser une différence de deux carrés avant d'appliquer la règle du produit nul.
      - Comparer la seconde racine $-2m-1$ à zéro et à la première racine.
      - Dans le cas de deux racines, leur produit est premier exactement lorsque la seconde racine est première.
    rubric:
      - Factorise l'équation et obtient les deux racines sans perdre le cas de la racine double.
      - Classe le nombre de racines positives ou nulles distinctes pour toutes les valeurs entières de $m$.
      - Caractérise les cas où le produit est premier par $m=-(p+1)/2$, avec $p$ premier impair.
      - Démontre les deux sens de la caractérisation et l'exhaustivité des cas.
---
## Changer la forme sans changer la valeur

Une expression littérale peut être écrite sous la forme d'une somme ou d'un produit. La meilleure forme dépend de la tâche : la forme développée permet de regrouper les termes semblables, tandis que la forme factorisée révèle les zéros et les structures communes.

La distributivité fonctionne dans les deux sens :

$$k(a+b)=ka+kb.$$

La lecture de gauche à droite **développe** ; la lecture de droite à gauche **factorise**.

## Développer et réduire

Dans une double distributivité, chaque terme d'une parenthèse multiplie chaque terme de l'autre :

$$(2x-3)(x+5)=2x^2+10x-3x-15=2x^2+7x-15.$$

La réduction vient après le développement : seuls les termes semblables peuvent être regroupés. Les termes $2x^2$ et $7x$ ne sont pas semblables.

Lorsqu'un signe moins précède des parenthèses, on distribue $-1$ à chaque terme :

$$4x-(2x-7)=4x-2x+7=2x+7.$$

## Factoriser par un facteur commun

On cherche le plus grand facteur utile commun à tous les termes :

$$12x^2-18x=6x(2x-3).$$

On vérifie en développant le résultat. Une factorisation partielle comme $2(6x^2-9x)$ est correcte, mais elle peut masquer une structure supplémentaire.

## Les trois identités remarquables

Pour tous nombres $a$ et $b$,

$$(a+b)^2=a^2+2ab+b^2,$$

$$(a-b)^2=a^2-2ab+b^2,$$

$$a^2-b^2=(a-b)(a+b).$$

Elles servent à développer ou à factoriser. Par exemple,

$$9x^2-24x+16=(3x-4)^2$$

et

$$25x^2-49=(5x-7)(5x+7).$$

**Erreur fréquente :** $(a+b)^2$ n'est pas égal à $a^2+b^2$ ; le double produit $2ab$ est indispensable.

## Choisir une transformation

- Développer pour réduire une somme, comparer deux formules ou calculer une valeur de manière systématique.
- Factoriser pour résoudre une équation produit, démontrer une divisibilité ou faire apparaître une dimension géométrique commune.
- Chercher d'abord un facteur commun, puis vérifier si l'expression restante correspond à une identité remarquable.
- Remplacer $x$ par une valeur simple comme $1$ peut invalider une identité fausse, mais une démonstration exige un calcul littéral.

## Équations produit nul

La règle du produit nul affirme que

$$AB=0\quad\Longleftrightarrow\quad A=0\text{ ou }B=0.$$

Pour résoudre $4x^2-9=0$, on commence par factoriser :

$$(2x-3)(2x+3)=0.$$

Ainsi, $2x-3=0$ ou $2x+3=0$, d'où $x=\frac32$ ou $x=-\frac32$.

On ne peut pas appliquer cette règle à $(x-2)(x+5)=7$ avant d'avoir transformé l'équation en un produit égal à zéro.

## Modéliser et vérifier

Dans un problème de géométrie, les solutions algébriques doivent respecter les contraintes portant sur les longueurs. Dans un problème arithmétique, les variables peuvent être entières. Résoudre l'équation ne constitue donc pas la dernière étape : il faut revenir au contexte, exclure les valeurs impossibles et donner les grandeurs demandées avec leurs unités.

## Prolongement : calcul mental avec les identités

Les identités remarquables rendent aussi certains calculs exacts plus efficaces :

$$103^2=(100+3)^2=10\,000+600+9=10\,609,$$

$$52^2-48^2=(52-48)(52+48)=4\times100=400.$$

Le choix d'une structure peut remplacer un long calcul par un court raisonnement.
