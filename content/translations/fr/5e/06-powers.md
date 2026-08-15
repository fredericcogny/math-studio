---
id: 5e-powers
locale: fr
title: Puissances, carrés et cubes
strand: Nombres et calcul littéral
summary: Lire, écrire et calculer des puissances d'exposant entier positif, utiliser les carrés et cubes essentiels et placer correctement les puissances dans les calculs numériques et littéraux.
objectives:
  - Interpréter une puissance d'exposant entier positif comme un produit répété
  - Connaître les carrés de $0^2$ à $12^2$ et le cube de $10$
  - Construire et reconnaître des puissances de $2$ et de $3$
  - Placer les puissances dans les priorités opératoires
  - Calculer des expressions numériques et littérales contenant des puissances
prerequisites:
  - Multiplication des nombres entiers
  - Priorité de la multiplication sur l'addition et la soustraction
  - Substitution dans une expression littérale
vocabulary:
  - en: power
    definition: Écriture condensée d'une multiplication répétée par un même facteur.
  - en: base
    definition: Facteur répété dans une puissance.
  - en: exponent
    definition: Petit entier positif écrit en hauteur qui indique le nombre de facteurs égaux multipliés.
  - en: square
    definition: Puissance deuxième d'un nombre, obtenue en multipliant ce nombre par lui-même.
  - en: cube
    definition: Puissance troisième d'un nombre, obtenue en multipliant trois facteurs égaux.
flashcards:
  - front: Que signifie $5^3$ ?
    back: $5\times5\times5=125$ ; la base est $5$ et l'exposant est $3$.
  - front: Quels sont les carrés de $0^2$ à $5^2$ ?
    back: $0,1,4,9,16,25$.
  - front: Combien vaut $10^3$ ?
    back: $10\times10\times10=1\,000$.
  - front: Que calcule-t-on d'abord dans $7+3^2\times2$ ?
    back: La puissance $3^2=9$, puis la multiplication, puis l'addition.
  - front: $2^5$ est-il égal à $2\times5$ ?
    back: Non. $2^5=2\times2\times2\times2\times2=32$, tandis que $2\times5=10$.
exercises:
  - id: 5e-powers-t1
    tierTitle: Application directe
    prompt: Calculer $12^2$.
    solution: $12^2=12\times12=144$.
    hints:
      - Un carré est le produit de deux facteurs égaux.
      - Effectuer $12\times12$.
  - id: 5e-powers-t2
    tierTitle: Entraînement standard
    prompt: Calculer $3+2^3\times5-4^2$.
    solution: >-
      Les puissances sont prioritaires : $2^3=8$ et $4^2=16$. On effectue ensuite la multiplication : $3+8\times5-16=3+40-16=27$.
    hints:
      - Calculer les deux puissances avant toute multiplication, addition ou soustraction.
      - Après les puissances, multiplier $8$ par $5$.
  - id: 5e-powers-t3
    tierTitle: Synthèse
    prompt: Pour $a=4$ et $b=3$, calculer $2a^2+b^3-(a-b)^2$. Écrire l'expression après substitution et respecter les priorités opératoires.
    solution: >-
      On substitue d'abord les valeurs : $2\times4^2+3^3-(4-3)^2$. On calcule les parenthèses et les puissances : $2\times16+27-1$. On effectue ensuite la multiplication avant l'addition et la soustraction : $32+27-1=58$.
    hints:
      - Remplacer chaque lettre avant de commencer les calculs.
      - Calculer les parenthèses et les puissances avant la multiplication, l'addition et la soustraction.
    rubric:
      - Substitue correctement les valeurs et obtient $2\times4^2+3^3-(4-3)^2$.
      - Calcule les carrés, le cube et les parenthèses avant les opérations restantes.
      - Obtient la valeur finale $58$.
  - id: 5e-powers-t4
    tierTitle: Défi avancé
    prompt: Un entier s'écrit $N=2^a\times3^b$, où $a$ et $b$ sont des entiers strictement positifs. Le nombre $N$ est à la fois un carré et un cube, et $N<1\,000\,000\,000$. Déterminer toutes les valeurs possibles de $N$ et démontrer que la liste est complète.
    solution: >-
      Dans un carré, les facteurs premiers égaux peuvent être groupés par paires ; $a$ et $b$ sont donc pairs. Dans un cube, ils peuvent être groupés par trois ; $a$ et $b$ sont donc divisibles par $3$. Les deux exposants sont ainsi des multiples strictement positifs de $6$. En partant de $(a,b)=(6,6)$, on obtient $2^6\times3^6=46\,656$. En augmentant un exposant de $6$, on trouve $2^{12}\times3^6=2\,985\,984$, $2^{18}\times3^6=191\,102\,976$ et $2^6\times3^{12}=34\,012\,224$. Les possibilités suivantes dépassent déjà la borne : $2^{24}\times3^6=12\,230\,590\,464$, $2^{12}\times3^{12}=2\,176\,782\,336$ et $2^6\times3^{18}=24\,794\,911\,296$. Toute nouvelle augmentation ne peut qu'agrandir le nombre. Les quatre valeurs indiquées sont donc toutes les possibilités.
    hints:
      - Chercher la condition imposée à chaque exposant pour former à la fois des paires et des groupes de trois facteurs.
      - Lorsque $a$ et $b$ sont reconnus multiples de $6$, les augmenter méthodiquement à partir de $(6,6)$.
    rubric:
      - Démontre que les deux exposants sont des multiples strictement positifs de $6$.
      - Trouve exactement $46\,656$, $2\,985\,984$, $34\,012\,224$ et $191\,102\,976$.
      - Utilise les premiers couples d'exposants exclus et la croissance des puissances pour prouver que la liste est complète.
---
## Une écriture courte pour une multiplication répétée

Lorsqu'un même nombre est multiplié plusieurs fois, une **puissance** permet de condenser l'écriture. Pour un nombre $a$ et un entier strictement positif $n$,

$$a^n=\underbrace{a\times a\times\cdots\times a}_{n\text{ facteurs}}.$$

Le nombre $a$ est la **base** et le nombre $n$, écrit en hauteur, est l'**exposant**. On lit $a^n$ « $a$ puissance $n$ ». Par exemple,

$$4^3=4\times4\times4=64.$$

L'exposant compte les facteurs et non les signes de multiplication : trois facteurs contiennent deux signes de multiplication. De plus, $4^3$ n'est pas égal à $4\times3$.

> Cette leçon utilise des exposants entiers strictement positifs. La base peut être nulle : par exemple, $0^2=0\times0=0$.

## Carrés et cubes

La puissance $a^2$ se lit « $a$ au carré ». Elle représente l'aire d'un carré de côté $a$. La puissance $a^3$ se lit « $a$ au cube ». Elle représente le volume d'un cube d'arête $a$.

Les carrés de $0$ à $12$ sont à connaître :

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $n^2$ | $0$ | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ | $49$ | $64$ | $81$ | $100$ | $121$ | $144$ |

En particulier,

$$10^2=100\qquad\text{et}\qquad10^3=10\times10\times10=1\,000.$$

Il ne faut pas confondre un carré avec un double, ni un cube avec un triple : $6^2=36$, et non $12$, tandis que $6^3=216$, et non $18$.

## Puissances de 2 et puissances de 3

Chaque nouvelle puissance s'obtient en multipliant la précédente par la base :

| Puissance de $2$ | $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ | $2^7$ | $2^8$ | $2^9$ | $2^{10}$ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Valeur | $2$ | $4$ | $8$ | $16$ | $32$ | $64$ | $128$ | $256$ | $512$ | $1\,024$ |

| Puissance de $3$ | $3^1$ | $3^2$ | $3^3$ | $3^4$ | $3^5$ | $3^6$ |
|---|---:|---:|---:|---:|---:|---:|
| Valeur | $3$ | $9$ | $27$ | $81$ | $243$ | $729$ |

Ces listes font aussi apparaître des régularités utiles. Les puissances de $2$ sont paires et les chiffres des unités des puissances de $3$ se répètent selon le cycle $3,9,7,1$. Un tableau aide à reconnaître une puissance sans reprendre tous les calculs depuis le début.

## Les puissances dans les priorités opératoires

Les puissances sont calculées après les parenthèses et avant les multiplications ou divisions. Les additions et soustractions viennent en dernier :

1. effectuer les calculs entre parenthèses ;
2. calculer les puissances ;
3. effectuer multiplications et divisions de gauche à droite ;
4. effectuer additions et soustractions de gauche à droite.

Par exemple,

$$5+3\times2^4=5+3\times16=5+48=53.$$

Des parenthèses peuvent modifier la base :

$$2+3^2=11,\qquad (2+3)^2=25.$$

> Erreur fréquente : $(2+3)^2$ signifie $(2+3)(2+3)$, et non $2^2+3^2$. Cette dernière expression vaut $13$, et non $25$.

## Calculs numériques et littéraux

Une expression numérique ne contient que des nombres. Une expression littérale contient aussi des lettres. Pour calculer une expression littérale, on substitue chaque valeur donnée en utilisant des parenthèses, puis on respecte les priorités opératoires.

Pour $x=3$, calculons $2x^2+5$ :

$$2\times3^2+5=2\times9+5=23.$$

Pour $a=2$ et $b=5$,

$$b^2-3a^3=5^2-3\times2^3=25-24=1.$$

L'exposant s'applique uniquement à sa base. Dans $3x^2$, seul $x$ est élevé au carré ; l'expression signifie $3\times x\times x$. En revanche, $(3x)^2$ signifie $(3x)(3x)$.

## Vérifier et raisonner avec les puissances

Il est utile d'estimer avant d'accepter un résultat. Comme $7^2=49$ et $8^2=64$, le nombre $57$ ne peut pas être le carré d'un entier. De même, les puissances consécutives $3^4=81$ et $3^5=243$ montrent que $150$ n'est pas une puissance de $3$.

Les facteurs répétés permettent aussi de démontrer. Dans un carré, les facteurs premiers égaux peuvent être groupés par paires ; dans un cube, ils peuvent être groupés par trois. Ainsi, $2^6=64$ est à la fois un carré, $(2^3)^2$, et un cube, $(2^2)^3$. Cette idée relie puissances et divisibilité.

### Pour aller plus loin

Si un produit de puissances de nombres premiers est à la fois un carré et un cube, chaque exposant doit être divisible par $2$ et par $3$, donc par $6$. Cette observation transforme une recherche potentiellement longue en une démonstration courte et complète.
