---
id: 3e-powers-scientific-notation
locale: fr
title: Puissances et écriture scientifique
strand: Nombres et calculs
summary: Calculer avec des puissances d'exposant entier, écrire scientifiquement des quantités extrêmes et utiliser les exposants pour estimer un ordre de grandeur.
objectives:
  - Appliquer les règles sur les puissances d'exposant entier positif ou négatif
  - Calculer avec les puissances de dix
  - Passer de l'écriture décimale à l'écriture scientifique et réciproquement
  - Comparer et estimer des ordres de grandeur
prerequisites:
  - Multiplication et division des nombres relatifs
  - Valeur de position des chiffres décimaux
  - Décomposition en facteurs premiers
vocabulary:
  - en: exponent
    definition: Pour un exposant entier strictement positif, nombre qui indique combien de facteurs égaux apparaissent dans une puissance.
  - en: scientific notation
    definition: Écriture $a\times10^n$ où $1\le |a|<10$ et où $n$ est un entier relatif.
  - en: order of magnitude
    definition: Puissance de dix proche utilisée pour décrire l'échelle d'une quantité.
  - en: magnitude
    definition: Taille numérique d'une quantité, indépendamment de la manière dont elle est écrite.
flashcards:
  - front: Que vaut $a^m\times a^n$ ?
    back: $a^{m+n}$, car on réunit les facteurs égaux.
  - front: Que vaut $a^{-n}$ pour $a$ non nul ?
    back: $1/a^n$.
  - front: Quelle condition le nombre décimal doit-il respecter dans une écriture scientifique ?
    back: Sa valeur absolue est supérieure ou égale à 1 et strictement inférieure à 10.
  - front: Quel est l'effet d'une multiplication par $10^3$ sur un nombre décimal ?
    back: Le nombre devient mille fois plus grand ; chaque chiffre prend une valeur de position supérieure de trois rangs.
exercises:
  - id: 3e-powers-t1
    tierTitle: Application directe
    prompt: Simplifier et calculer $\frac{2^3\times2^5}{2^4}$.
    solution: $\frac{2^3\times2^5}{2^4}=2^{3+5-4}=2^4=16$.
    hints:
      - Avec une même base, additionner les exposants dans un produit et les soustraire dans un quotient.
  - id: 3e-powers-t2
    tierTitle: Conversion standard
    prompt: Écrire $0,000072$ m en écriture scientifique.
    solution: >-
      Pour passer de $0,000072$ à $7,2$, on multiplie par $10^5$ ; on compense donc par $10^{-5}$ : $0,000072\text{ m}=7,2\times10^{-5}\text{ m}$.
    hints:
      - Le premier facteur doit être supérieur ou égal à $1$ et strictement inférieur à $10$.
      - Compter le nombre de rangs séparant $0,000072$ et $7,2$.
    expected: 7,2 * 10^-5 m
    accepted:
      - 7,2×10^-5 m
      - 7,2e-5 m
  - id: 3e-powers-t3
    tierTitle: Synthèse
    prompt: Un canal d'observation de $12$ m doit contenir des bactéries placées bout à bout sans espace. Chaque bactérie mesure environ $4,8\times10^{-6}$ m de long. Un rapport affirme que $3,0\times10^6$ bactéries tiennent dans le canal. Estimer la longueur occupée par ce nombre de bactéries, déterminer si cette affirmation est plausible, puis estimer combien de bactéries tiennent réellement dans le canal. Présenter les calculs en écriture scientifique et interpréter la comparaison.
    solution: Les bactéries annoncées occuperaient $(3,0\times10^6)(4,8\times10^{-6})=14,4\times10^0=1,44\times10^1$ m, soit $14,4$ m. Cette longueur dépasse $12$ m ; l'affirmation n'est donc pas plausible. La capacité du canal est $N=\frac{1,2\times10^1}{4,8\times10^{-6}}=0,25\times10^7=2,5\times10^6$ bactéries. L'affirmation dépasse cette estimation de $5,0\times10^5$ bactéries, soit environ $20\%$ de la capacité.
    hints:
      - Commencer par multiplier le nombre annoncé par la longueur d'une bactérie.
      - Diviser ensuite la longueur du canal par celle d'une bactérie et comparer les deux effectifs.
    rubric:
      - Estime la longueur occupée annoncée à $1,44\times10^1$ m, soit $14,4$ m.
      - Compare $14,4$ m à $12$ m et explique pourquoi l'affirmation n'est pas plausible.
      - Modélise et estime la capacité réelle à $2,5\times10^6$ bactéries.
      - Interprète l'écart, par exemple comme un excès de $5,0\times10^5$ bactéries ou d'environ $20\%$ par rapport à la capacité.
  - id: 3e-powers-t4
    tierTitle: Défi avancé
    prompt: Soient $p$ et $q$ deux entiers strictement positifs et $N=2^p5^q$. Démontrer que le nombre de zéros terminant l'écriture décimale de $N$ est $\min(p,q)$. Déterminer ensuite tous les couples $(p,q)$ pour lesquels $N$ possède exactement $12$ chiffres et se termine par exactement $8$ zéros. Démontrer qu'aucun couple n'a été oublié.
    solution: >-
      Chaque zéro final correspond à un facteur $10=2\times5$ ; le nombre de paires complètes formées d'un facteur $2$ et d'un facteur $5$ vaut donc $\min(p,q)$. Avoir exactement huit zéros impose $\min(p,q)=8$. Si $p=8\le q$, posons $q=8+k$ : alors $N=10^8 5^k$. Avoir $12$ chiffres signifie $10^{11}\le N<10^{12}$, donc $10^3\le5^k<10^4$. Comme $5^4=625$, $5^5=3\,125$ et $5^6=15\,625$, seul $k=5$ convient, ce qui donne $(p,q)=(8,13)$. Si $q=8\le p$, posons $p=8+k$ : alors $N=10^8 2^k$, donc $10^3\le2^k<10^4$. Comme $2^9=512$, $2^{10}=1\,024$, $2^{13}=8\,192$ et $2^{14}=16\,384$, les valeurs possibles sont exactement $k=10,11,12,13$. Elles donnent $(18,8),(19,8),(20,8),(21,8)$. Les deux cas couvrent le choix de l'exposant minimal, y compris le cas d'égalité ; la liste est donc complète.
    hints:
      - Associer un facteur $2$ et un facteur $5$ pour former chaque facteur $10$.
      - Avoir douze chiffres équivaut à $10^{11}\le N<10^{12}$.
      - Après avoir extrait $10^8$, encadrer $2^k$ ou $5^k$ entre $10^3$ et $10^4$.
    rubric:
      - Démontre la formule donnant le nombre de zéros finaux à l'aide des facteurs premiers associés par paires.
      - Traduit correctement la condition sur le nombre de chiffres par un encadrement entre puissances de dix.
      - Résout les deux cas et obtient exactement les cinq couples $(8,13),(18,8),(19,8),(20,8),(21,8)$.
      - Utilise la croissance des puissances et des cas exhaustifs pour démontrer que la liste est complète.
---
## Sens et notation

Pour un entier $n>0$, $a^n$ est un produit de $n$ facteurs égaux :

$$a^n=\underbrace{a\times a\times\cdots\times a}_{n\text{ facteurs}}.$$

Ici, $a$ est la base et $n$ l'exposant. Le produit de facteurs égaux ne définit les puissances que lorsque $n$ est un entier strictement positif. Les cas nul et négatif sont des prolongements choisis pour conserver les règles sur les puissances. Pour $a\ne0$, le quotient $a^n/a^n=1$ correspond à $a^{n-n}=a^0$ ; on définit donc $a^0=1$. Ensuite, $a^0/a^n=1/a^n$ correspond à $a^{-n}$ ; on définit donc $a^{-n}=\frac1{a^n}$. Ainsi, $10^{-3}=0,001$.

Les parenthèses sont essentielles : $(-3)^2=9$, tandis que $-3^2=-(3^2)=-9$.

## Règles sur les puissances

Pour des bases non nulles dès qu'un quotient ou un exposant négatif intervient,

$$a^m a^n=a^{m+n},\qquad \frac{a^m}{a^n}=a^{m-n},\qquad (a^m)^n=a^{mn},$$

$$ (ab)^n=a^nb^n,\qquad \left(\frac ab\right)^n=\frac{a^n}{b^n}. $$

Exemple rédigé :

$$\frac{(3^2)^4\times3^{-1}}{3^5}=3^{8-1-5}=3^2=9.$$

Pour additionner ou soustraire les exposants, ces règles exigent une même base. En général, $2^3+2^4$ n'est pas égal à $2^7$ ; cette somme vaut $8+16=24$.

## Puissances de dix et valeur de position

Les puissances positives de dix déplacent les chiffres vers des valeurs de position plus grandes ; les puissances négatives les déplacent vers des valeurs plus petites :

$$10^4=10\,000,\qquad 10^0=1,\qquad10^{-4}=0,0001.$$

Par conséquent,

$$37,2\times10^3=37\,200,\qquad37,2\times10^{-3}=0,0372.$$

Il est préférable de penser à la multiplication ou à la division par une puissance de dix plutôt qu'au déplacement physique de la virgule.

## Écriture scientifique

Un nombre non nul est écrit en écriture scientifique lorsqu'il est sous la forme

$$a\times10^n\quad\text{avec}\quad1\le |a|<10$$

et $n$ entier relatif. Par exemple,

$$6\,430\,000=6,43\times10^6,
\qquad0,000072=7,2\times10^{-5}.$$

Le signe du nombre et celui de l'exposant jouent des rôles différents : $-4,1\times10^{-3}$ est un nombre négatif proche de zéro.

Pour multiplier, on multiplie les premiers facteurs et on additionne les exposants, puis on normalise :

$$(4\times10^7)(6\times10^{-3})=24\times10^4=2,4\times10^5.$$

Pour additionner, on commence par utiliser une même puissance de dix :

$$3,2\times10^5+7\times10^4=3,2\times10^5+0,7\times10^5=3,9\times10^5.$$

## Ordre de grandeur et comparaison

Pour comparer des nombres positifs en écriture scientifique normalisée, on compare d'abord les exposants. S'ils sont égaux, on compare les premiers facteurs :

$$8,1\times10^{-7}<2,4\times10^{-6}.$$

Un ordre de grandeur est une puissance de dix proche. Pour estimer rapidement un produit,

$$(2,9\times10^4)(4,2\times10^{-3})\approx(3\times10^4)(4\times10^{-3})=1,2\times10^2.$$

On prévoit ainsi un résultat de l'ordre de la centaine, ce qui permet de détecter une erreur d'exposant.

## Méthode et erreurs fréquentes

- Convertir les unités avant de calculer ; un exposant correct associé à des unités incohérentes donne tout de même une réponse fausse.
- Conserver des chiffres supplémentaires pendant le calcul et n'arrondir que le résultat final.
- Normaliser le premier facteur à la fin : $35\times10^4$ est égal à $3,5\times10^5$, mais seule la seconde écriture est scientifique.
- Un exposant négatif ne rend pas le nombre négatif : $10^{-2}=0,01>0$.

## Prolongement : compter les chiffres

Pour un entier positif $N$, si $10^k\le N<10^{k+1}$, alors $N$ possède $k+1$ chiffres dans son écriture décimale. Cela relie puissances, inégalités et ordre de grandeur sans écrire tous les chiffres d'un grand nombre.
