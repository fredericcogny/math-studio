---
id: 5e-expressions-formulas
locale: fr
title: Expressions et formules comme programmes de calcul
strand: Calcul littéral
summary: Utiliser calcul mental, vocabulaire des opérations et contrôles de vraisemblance pour lire, calculer et construire des expressions littérales et des formules.
objectives:
  - Substituer des valeurs dans une expression ou une formule
  - Nommer les opérations et respecter leurs priorités
  - Traduire une situation par une expression littérale
  - Utiliser une formule et découvrir la distributivité
prerequisites:
  - Calcul sur les nombres entiers et décimaux
  - Nombres relatifs
  - Aire et périmètre d'un rectangle
vocabulary:
  - en: variable
    definition: Lettre ou symbole qui représente un nombre dont la valeur peut changer.
  - en: expression
    definition: Suite mathématique composée de nombres, de variables et d'opérations, sans signe d'égalité.
  - en: formula
    definition: Égalité qui décrit une relation générale entre plusieurs grandeurs.
flashcards:
  - front: Dans $3x+5$, quels sont les termes et les facteurs ?
    back: La somme a pour termes $3x$ et $5$ ; le produit $3x$ a pour facteurs $3$ et $x$.
  - front: Comment calculer mentalement $47{,}6\div100$ ?
    back: On décale la virgule de deux rangs vers la gauche et on obtient $0{,}476$.
  - front: Énoncer la distributivité pour $k(a+b)$.
    back: $k(a+b)=ka+kb$.
exercises:
  - id: 5e-expressions-t1
    tierTitle: Application directe
    prompt: Calculer $a\div100+3b$ pour $a=468$ et $b=0{,}4$. Effectuer le calcul mentalement, puis donner une estimation qui montre que le résultat est vraisemblable.
    solution: "On commence par substituer les valeurs : $468\\div100+3\\times0{,}4$. Le quotient vaut $4{,}68$ et le produit vaut $1{,}2$ ; la somme de ces deux termes est donc $4{,}68+1{,}2=5{,}88$. L'estimation $5+1=6$ confirme que $5{,}88$ est vraisemblable."
    hints:
      - Diviser par $100$ revient à décaler la virgule de deux rangs vers la gauche.
      - Estimer chaque terme avant de les additionner.
  - id: 5e-expressions-t2
    tierTitle: Entraînement standard
    prompt: Un jardin rectangulaire a pour longueur $L=8{,}5$ m et pour largeur $l=4$ m. Son périmètre est donné par $P=2(L+l)$. Une clôture coûte $C=3P+12$ euros, frais fixes de livraison compris. Calculer $C$, puis contrôler sa vraisemblance à l'aide d'un ordre de grandeur.
    solution: D'abord, $P=2(8{,}5+4)=2\times12{,}5=25$ m. Ensuite, $C=3\times25+12=75+12=87$ euros. Comme $L+l\approx13$, on obtient $P\approx26$, puis $C\approx3\times26+12=90$ euros ; le résultat $87$ euros est donc vraisemblable.
    hints:
      - Calculer $P$ avant d'utiliser la formule du coût.
      - Pour le contrôle, arrondir $8{,}5+4$ à environ $13$.
  - id: 5e-expressions-t3
    tierTitle: Synthèse du programme officiel
    prompt: "Un carré a pour côté $x$ cm. Un rectangle a pour longueur $x+3$ cm et pour largeur $x$ cm. Écrire et réduire les deux formules de périmètre, puis expliquer pourquoi le périmètre du rectangle dépasse toujours celui du carré de $6$ cm. Le périmètre du carré vaut $24$ cm : utiliser $4x=24$ pour déterminer $x$, puis en déduire le périmètre du rectangle."
    solution: Le périmètre du carré est $4x$. Celui du rectangle vaut $2[(x+3)+x]=2(2x+3)=4x+6$ par distributivité. L'écart de $6$ ne dépend pas de $x$. Comme le périmètre du carré vaut $24$ cm, $4x=24$, donc $x=6$ cm. Le périmètre du rectangle vaut ainsi $24+6=30$ cm (ou $4\times6+6=30$ cm).
    hints:
      - Utiliser $P=2(L+l)$ pour le rectangle.
      - Distribuer le facteur $2$ dans la somme $2x+3$.
      - Une fois le périmètre du carré connu, ajouter l'écart constant pour trouver celui du rectangle.
    rubric:
      - Obtient les formules $4x$ et $4x+6$.
      - Utilise la distributivité pour justifier l'écart constant de $6$ cm.
      - Utilise $4x=24$ pour obtenir $x=6$ cm, puis en déduit que le périmètre du rectangle vaut $30$ cm.
  - id: 5e-expressions-t4
    tierTitle: Défi avancé
    prompt: Un entier à deux chiffres a pour chiffre des dizaines $a$ et pour chiffre des unités $b$. Ce nombre est égal à quatre fois la somme de ses chiffres. Déterminer tous les nombres possibles. Démontrer ensuite que le nombre obtenu en inversant les chiffres est toujours un multiple de $7$.
    solution: Le nombre s'écrit $10a+b$ ; on a donc $10a+b=4(a+b)$. En utilisant la distributivité et en regroupant les termes, on obtient $6a=3b$, puis $b=2a$. Comme $a$ est compris entre $1$ et $9$ et que $b$ est un chiffre, $2a\le9$, donc $a=1,2,3,4$. Les nombres sont $12,24,36,48$. Le nombre renversé s'écrit $10b+a=10(2a)+a=21a=7(3a)$ ; il est donc toujours multiple de $7$. Les limites imposées aux chiffres prouvent que la liste est complète.
    hints:
      - Écrire le nombre sous la forme $10a+b$ et la somme de ses chiffres sous la forme $a+b$.
      - Après avoir exprimé $b$ en fonction de $a$, utiliser $1\le a\le9$ et $0\le b\le9$.
    rubric:
      - Modélise la condition par $10a+b=4(a+b)$ et obtient $b=2a$.
      - Utilise les limites des chiffres pour trouver exactement $12,24,36,48$.
      - Écrit le nombre renversé sous la forme $21a$ et démontre sa divisibilité par $7$.
---
## Les lettres représentent des nombres

Une **variable** est une lettre qui peut prendre une valeur numérique. Une expression telle que $3x+5$ est un programme de calcul : multiplier $x$ par $3$, puis ajouter $5$. Elle ne contient pas de signe d'égalité. Une formule telle que $P=2(L+l)$ exprime une relation valable pour tout rectangle.

On omet souvent le signe de multiplication devant une lettre :

$$4\times x=4x,\qquad a\times b=ab.$$

En revanche, on ne peut pas réduire $x+4$, car l'addition et la multiplication sont des opérations différentes.

## Calcul mental et vocabulaire des opérations

Le résultat d'une addition est une **somme**, et les nombres ou expressions additionnés sont ses **termes**. Le résultat d'une multiplication est un **produit**, et les nombres ou expressions multipliés sont ses **facteurs**. Une soustraction donne une **différence** et une division donne un **quotient**. Ainsi, $3x+5$ est une somme de termes $3x$ et $5$, tandis que $3x$ est un produit de facteurs $3$ et $x$.

Les puissances de $10$ facilitent le calcul mental sur les nombres décimaux. Diviser par $10$, $100$ ou $1\,000$ revient à décaler la virgule d'un, deux ou trois rangs vers la gauche :

$$47{,}6\div100=0{,}476.$$

On estime le résultat avant ou après le calcul exact. Pour $468\div100+3\times0{,}4$, le calcul approché $5+1=6$ donne l'ordre de grandeur ; le résultat exact $5{,}88$ est vraisemblable, contrairement à $58{,}8$.

## Substituer sans ambiguïté

Pour calculer $2x-3y+1$ lorsque $x=-2$ et $y=1{,}5$, on remplace chaque lettre par sa valeur placée entre parenthèses :

$$2(-2)-3(1{,}5)+1=-4-4{,}5+1=-7{,}5.$$

Les parenthèses protègent le signe de la valeur substituée et rendent chaque produit non ambigu.

> Méthode fiable : écrire d'abord la ligne où les valeurs ont été substituées, puis calculer. Il ne faut pas essayer de substituer et de réduire mentalement en une seule étape.

## Priorités opératoires

On utilise l'ordre suivant :

1. parenthèses ;
2. multiplications et divisions, de gauche à droite ;
3. additions et soustractions, de gauche à droite.

La leçon suivante introduit les puissances. Lorsqu'elles apparaissent, on les calcule après les parenthèses et avant les multiplications et divisions ; c'est le seul prérequis sur les puissances nécessaire ici.

Par exemple,

$$18-2(3+4)=18-2\times7=18-14=4.$$

L'expression $(18-2)(3+4)$ est très différente : elle vaut $16\times7=112$.

## Construire des expressions littérales

On traduit une expression verbale étape par étape.

- « Cinq de plus que le triple de $n$ » devient $3n+5$.
- « Le triple de la somme de $n$ et de cinq » devient $3(n+5)$.
- Un taxi qui facture $4$ euros de prise en charge, puis $2{,}50$ euros par kilomètre, coûte $4+2{,}5d$ euros pour $d$ kilomètres.

> Erreur fréquente : l'ordre compte dans une soustraction. « Sept de moins que $x$ » s'écrit $x-7$, et non $7-x$.

## Formules et unités

Pour un rectangle, $A=Ll$ et $P=2(L+l)$. Si $L=7{,}5$ cm et $l=4$ cm, alors

$$A=7{,}5\times4=30\text{ cm}^2$$

et

$$P=2(7{,}5+4)=23\text{ cm}.$$

L'unité au carré correspond à l'aire, et non au périmètre. Une formule n'a de sens que si les grandeurs et leurs unités sont bien comprises.

## Une première utilisation de la distributivité

La distributivité indique que multiplier une somme revient à multiplier chacun de ses termes :

$$k(a+b)=ka+kb.$$

Par exemple, $3(x+4)=3x+12$. On peut le vérifier avec $x=5$ : les deux expressions valent $27$. La propriété s'utilise aussi dans l'autre sens, pour factoriser : $5x+10=5(x+2)$.

> Attention : $3(x+4)$ n'est pas égal à $3x+4$ ; le nombre $4$ doit lui aussi être multiplié par $3$.

### Pour aller plus loin

La numération décimale elle-même fournit des expressions littérales. Un nombre à deux chiffres, de chiffres $a$ et $b$, s'écrit $10a+b$, tandis que le nombre renversé s'écrit $10b+a$. Cette représentation transforme les énigmes sur les chiffres en équations et permet d'étudier tous les cas.
