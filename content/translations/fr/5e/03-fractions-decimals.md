---
id: 5e-fractions-decimals
locale: fr
title: Fractions et nombres décimaux représentent les mêmes nombres
strand: Nombres et calcul
summary: Relier quantités, repérage sur une droite graduée, fractions égales, calcul et écriture décimale au sein d'un même système de nombres.
objectives:
  - Interpréter une fraction comme un quotient et comme une fraction d'une quantité
  - Placer des fractions sur une droite graduée et décomposer les fractions supérieures à l'unité
  - Produire, comparer, additionner et soustraire des fractions après réduction au même dénominateur
  - Passer d'une fraction à une écriture décimale et inversement
prerequisites:
  - Tables de multiplication
  - Division des nombres entiers naturels
  - Valeur de position des chiffres d'un nombre décimal
vocabulary:
  - en: fraction
    definition: Nombre écrit comme quotient de deux entiers, avec un dénominateur non nul.
  - en: equivalent fractions
    definition: Fractions écrites sous des formes différentes, mais qui représentent le même nombre.
  - en: common denominator
    definition: Dénominateur identique utilisé pour comparer, additionner ou soustraire des fractions.
flashcards:
  - front: Que vaut $3/5$ de $40$ ?
    back: $3/5\times40=24$.
  - front: Où se place $7/4$ sur une droite graduée ?
    back: $7/4=1+3/4=1{,}75$ ; ce nombre se place donc entre $1$ et $2$.
  - front: Quelle fraction est égale à $0{,}35$ ?
    back: $35/100=7/20$.
exercises:
  - id: 5e-fractions-t1
    tierTitle: Application directe
    prompt: Placer $7/4$ sur une droite graduée en indiquant les deux entiers naturels consécutifs qui l'encadrent. L'écrire ensuite comme somme d'un entier et d'une fraction inférieure à $1$, puis sous forme décimale.
    solution: La division euclidienne donne $7=4\times1+3$, donc $7/4=1+3/4=1{,}75$. Ainsi, $1<7/4<2$ et le point se situe aux trois quarts du segment allant de $1$ à $2$.
    hints:
      - Diviser $7$ par $4$ et utiliser le quotient et le reste.
      - Chaque intervalle entre deux entiers naturels consécutifs représente une unité entière.
    expected: "1 < 7/4 < 2 ; 1 + 3/4 ; 1,75"
    accepted:
      - "1 < 7/4 < 2; 1 + 3/4; 1,75"
  - id: 5e-fractions-t2
    tierTitle: Entraînement standard
    prompt: Une bouteille de $2$ L est remplie aux $3/4$. Mia boit $0{,}25$ L, puis ajoute $2/5$ L. Quelle quantité d'eau la bouteille contient-elle maintenant ? Donner une fraction supérieure à $1$, une somme d'un entier et d'une fraction inférieure à $1$, puis une écriture décimale.
    solution: Au départ, la bouteille contient $3/4\times2=3/2$ L. Comme $0{,}25=1/4$, la quantité finale vaut $3/2-1/4+2/5=30/20-5/20+8/20=33/20$ L. Ainsi, $33/20=1+13/20=1{,}65$ L.
    hints:
      - Calculer d'abord $3/4$ de $2$ L, puis écrire $0{,}25$ sous forme de fraction.
      - Utiliser le dénominateur $20$ pour les trois fractions.
    expected: "33/20 L ; 1 + 13/20 L ; 1,65 L"
    accepted:
      - "33/20 L; 1 + 13/20 L; 1,65 L"
  - id: 5e-fractions-t3
    tierTitle: Synthèse du programme officiel
    prompt: Ranger $0{,}58$, $7/12$, $3/5$ et $11/20$ dans l'ordre croissant. Calculer ensuite la différence exacte entre le plus grand et le plus petit de ces nombres.
    solution: Avec le dénominateur $300$, ces nombres s'écrivent respectivement $174/300$, $175/300$, $180/300$ et $165/300$. Ainsi, $11/20<0{,}58<7/12<3/5$. La différence exacte vaut $3/5-11/20=12/20-11/20=1/20$.
    hints:
      - Convertir chaque nombre en fraction ; $0{,}58=29/50$.
      - $300$ est un dénominateur commun à $50,12,5,20$.
    rubric:
      - Utilise une représentation commune valable pour les quatre nombres.
      - Donne l'ordre complet $11/20<0{,}58<7/12<3/5$.
      - Calcule la différence exacte $1/20$.
  - id: 5e-fractions-t4
    tierTitle: Défi avancé
    prompt: Déterminer tous les couples d'entiers naturels $(a,b)$ tels que $2<a\le b$ et $1/a+1/b=1/2$. Démontrer que la liste obtenue est complète.
    solution: En multipliant par $2ab$, on obtient $2a+2b=ab$. Après réorganisation puis ajout de $4$ aux deux membres, il vient $(a-2)(b-2)=4$. Comme $a\le b$, les couples de facteurs positifs de $4$ sont $(1,4)$ et $(2,2)$. Ainsi, $(a,b)=(3,6)$ ou $(4,4)$. Les deux couples conviennent, et toute solution fournit nécessairement l'un de ces couples de facteurs ; la liste est donc complète.
    hints:
      - Supprimer les dénominateurs pour obtenir $ab-2a-2b=0$.
      - "Compléter le produit en ajoutant $4$ : $ab-2a-2b+4=4$."
    rubric:
      - Transforme l'équation en $(a-2)(b-2)=4$.
      - Étudie tous les couples de facteurs positifs compatibles avec $a\le b$.
      - Trouve $(3,6)$ et $(4,4)$ et justifie que la liste est complète.
---
## Un nombre, plusieurs significations

Dans la fraction $a/b$, le **dénominateur** $b$ indique en combien de parts égales l'unité est partagée et le **numérateur** $a$ indique combien de ces parts sont prises. Le dénominateur ne peut pas être nul.

Une fraction est aussi un quotient. Si l'on partage équitablement $3$ pizzas entre $4$ personnes, chacune reçoit

$$3\div4=\frac34=0{,}75.$$

Une fraction est donc un nombre, et non simplement un dessin ou deux entiers placés l'un au-dessus de l'autre.

Pour calculer une fraction d'une quantité, on multiplie cette quantité par la fraction. Par exemple,

$$\frac35\text{ de }40=\frac35\times40=24.$$

## Fractions sur une droite graduée

Chaque fraction possède une position précise sur la droite graduée. Une fraction **inférieure à l'unité** est inférieure à $1$. Une fraction **supérieure ou égale à l'unité**, parfois appelée fraction impropre, peut se décomposer en somme d'un entier et d'une fraction inférieure à l'unité. La division euclidienne donne

$$\frac74=1+\frac34,$$

donc $7/4$ se place entre $1$ et $2$, aux trois quarts du segment allant de $1$ à $2$.

## Fractions égales

Multiplier ou diviser le numérateur et le dénominateur par un même nombre non nul ne change pas le quotient :

$$\frac{5}{7}=\frac{5\times3}{7\times3}=\frac{15}{21}.$$

Pour simplifier $24/36$, on divise les deux termes par leur plus grand diviseur commun utile : $24/36=2/3$.

> Attention : modifier seulement le numérateur ou seulement le dénominateur change le nombre.

## Comparer des fractions

Lorsque des fractions ont le même dénominateur, il suffit de comparer leurs numérateurs. Sinon, on les réduit au même dénominateur :

$$\frac58=\frac{15}{24},\qquad \frac23=\frac{16}{24},$$

donc $5/8<2/3$. Les produits en croix donnent le même résultat, car $5\times3<2\times8$, mais le dénominateur commun permet de comprendre pourquoi la méthode fonctionne.

Pour obtenir rapidement un ordre de grandeur, on peut comparer les deux nombres à une valeur repère telle que $1/2$ ou $1$. Par exemple, $7/15<1/2$ car $7<7{,}5$, tandis que $5/9>1/2$.

## Additionner et soustraire

On ne peut compter ensemble que des parts de même taille. Pour calculer $3/4+5/6$, on utilise le dénominateur $12$ :

$$\frac34+\frac56=\frac9{12}+\frac{10}{12}=\frac{19}{12}=1\frac7{12}.$$

De même,

$$\frac7{10}-\frac14=\frac{14}{20}-\frac5{20}=\frac9{20}.$$

> Erreur fréquente : $2/3+1/4$ n'est pas égal à $3/7$. Les tiers et les quarts sont des parts de tailles différentes ; il faut d'abord les transformer en douzièmes.

## Liens avec l'écriture décimale

Un **nombre décimal** est un nombre qui peut s'écrire $a/10^n$, où $a$ est un entier et $n$ un entier naturel. De manière équivalente, il possède une écriture décimale finie. Il ne se définit pas simplement comme un nombre écrit avec une virgule :

$$0{,}375=\frac{375}{1000}=\frac38.$$

Pour obtenir le développement décimal d'une fraction, on divise son numérateur par son dénominateur. Ce développement peut être fini, comme pour $7/20=0{,}35$, ou périodique et infini, comme pour $1/3=0{,}333\ldots$. Ainsi, $7/20$ est un nombre décimal, tandis que $1/3$ n'est pas un nombre décimal même s'il possède un développement décimal infini.

### Approfondissement : dénominateurs des écritures finies

Une fraction irréductible possède une écriture décimale finie exactement lorsque les seuls facteurs premiers de son dénominateur sont $2$ et $5$. Ce théorème sur les facteurs premiers permet de prévoir si le développement s'arrête sans effectuer la division, mais il relève ici de l'approfondissement.

### Pour aller plus loin

Une **fraction égyptienne** écrit un nombre comme une somme de fractions de numérateur $1$. Par exemple, $2/3=1/2+1/6$. La recherche systématique de telles décompositions transforme un calcul de fractions en une équation et en un problème de facteurs.
