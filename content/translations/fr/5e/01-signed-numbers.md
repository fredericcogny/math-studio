---
id: 5e-signed-numbers
locale: fr
title: Les nombres relatifs, sans deviner
strand: Nombres et calcul
summary: Construire une représentation mentale fiable des déplacements en dessous de zéro, puis la mettre au service d'un calcul rapide.
objectives:
  - Comparer des nombres relatifs
  - Additionner et soustraire de manière fiable
  - Expliquer un changement de signe
prerequisites:
  - Addition de nombres entiers naturels
  - Lecture d'une droite graduée
vocabulary:
  - en: signed number
    definition: Nombre défini par sa position par rapport à zéro ; il peut être positif, nul ou négatif.
  - en: opposite
    definition: Nombre situé à la même distance de zéro, mais de l'autre côté.
  - en: number line
    definition: Droite sur laquelle les nombres sont placés dans l'ordre croissant.
flashcards:
  - front: Quelle est la valeur absolue de -7 ?
    back: $|-7|=7$, car la valeur absolue est la distance à zéro.
  - front: Quel nombre est le plus grand, $-3{,}08$ ou $-3{,}8$ ?
    back: $-3{,}08$, car il se trouve plus à droite sur la droite graduée.
  - front: Que se passe-t-il lorsqu'on soustrait un nombre négatif ?
    back: On ajoute son opposé, donc a - (-b) = a + b.
exercises:
  - id: 5e-signed-t1
    tierTitle: Application directe
    prompt: Calculer $-3{,}7+5{,}25-1{,}8$.
    solution: $-3{,}7+5{,}25=1{,}55$, puis $1{,}55-1{,}8=-0{,}25$.
    hints:
      - Aligner les virgules et distinguer chaque signe opératoire du signe du nombre.
  - id: 5e-signed-t2
    tierTitle: Entraînement standard
    prompt: À 6 h 00, la température est de $-4{,}5^\circ$C. Elle augmente de $7{,}2^\circ$C, puis diminue d'une valeur inconnue, augmente ensuite de $1{,}8^\circ$C et atteint finalement $-3{,}1^\circ$C. De combien de degrés a-t-elle diminué ?
    solution: Après la première hausse, la température est de $2{,}7^\circ$C. Si la baisse inconnue vaut $d$, alors $2{,}7-d+1{,}8=-3{,}1$, donc $4{,}5-d=-3{,}1$ et $d=7{,}6$. Elle a diminué de $7{,}6^\circ$C.
    hints:
      - Raisonner à rebours à partir de la température finale ou noter $d$ la baisse inconnue.
      - Vérifier que $-4{,}5+7{,}2-7{,}6+1{,}8=-3{,}1$.
  - id: 5e-signed-t3
    tierTitle: Synthèse du programme officiel
    prompt: Ranger d'abord les quatre cartes $-4{,}5 ; -1{,}2 ; 2{,}3 ; 3{,}4$ dans l'ordre croissant. Les ordonner ensuite de sorte que, en partant de $0$, chaque somme cumulée soit positive ou nulle. Donner un ordre possible et indiquer les quatre sommes cumulées.
    solution: L'ordre croissant est $-4{,}5<-1{,}2<2{,}3<3{,}4$. Un ordre valable est $3{,}4 ; -1{,}2 ; 2{,}3 ; -4{,}5$. Les sommes cumulées sont $3{,}4 ; 2{,}2 ; 4{,}5 ; 0$ ; elles sont toutes positives ou nulles.
    hints:
      - Une carte négative ne peut pas être placée en premier.
      - Avant de jouer $-4{,}5$, obtenir une somme cumulée d'au moins $4{,}5$.
    rubric:
      - Donne l'ordre croissant correct des quatre nombres décimaux relatifs.
      - Utilise chaque carte exactement une fois et calcule correctement les sommes cumulées.
      - Vérifie que chaque somme cumulée est positive ou nulle.
  - id: 5e-signed-t4
    tierTitle: Défi avancé
    prompt: Les cartes portent les nombres $-5,-4,-3,2,3,4,6$. En partant de $0$, ordonner toutes les cartes de sorte que chaque somme cumulée soit strictement positive. Parmi tous les ordres possibles, rendre la plus grande somme cumulée aussi petite que possible et démontrer que la valeur obtenue est optimale.
    solution: >-
      L'ordre $6,-5,4,-4,3,-3,2$ donne les sommes cumulées $6,1,5,1,4,1,3$ ; il est donc possible d'obtenir une plus grande somme égale à $6$. Il est impossible que la plus grande somme soit inférieure à $6$ : la carte $6$ doit nécessairement être jouée et la somme cumulée juste avant vaut soit $0$ si elle est jouée en premier, soit un entier strictement positif dans le cas contraire. Ainsi, juste après avoir joué la carte $6$, la somme vaut au moins $6$. Par conséquent, la plus petite valeur possible de la plus grande somme cumulée est $6$.
    hints:
      - Essayer d'alterner une carte positive et une carte négative.
      - Pour établir la borne inférieure, examiner le moment où la carte $6$ est jouée.
    rubric:
      - Donne un ordre dont toutes les sommes cumulées sont strictement positives.
      - Montre que la plus grande somme cumulée de l'ordre proposé vaut $6$.
      - Démontre que tout ordre valable comporte une somme cumulée au moins égale à $6$.
---
## D'abord la position, ensuite les règles

Un nombre relatif repère une position par rapport à zéro. Un nombre est **positif** s'il est supérieur à zéro et **négatif** s'il est inférieur à zéro. Zéro n'est ni positif ni négatif. **Positif ou nul** signifie supérieur ou égal à zéro : cette expression inclut donc zéro et tous les nombres positifs.

La **valeur absolue** de $a$, notée $|a|$, est sa distance à zéro ; elle est donc toujours positive ou nulle. Par exemple, $|-3{,}7|=3{,}7$ et $|3{,}7|=3{,}7$. L'opposé de $a$ se note $-a$ : il possède la même valeur absolue, de l'autre côté de zéro. La somme de deux nombres opposés s'annule :

$$a + (-a) = 0$$

Sur une droite graduée, les valeurs augmentent lorsqu'on se déplace vers la droite. Cela explique aussi bien $-2>-9$ que la comparaison de nombres décimaux relatifs. On peut compléter les parties décimales par des zéros : $-3{,}08>-3{,}80$ car $-3{,}08$ est plus à droite, tandis que $-4{,}25<-4{,}2$ car $-4{,}25$ est plus à gauche.

## L'addition comme déplacement

Partir du premier nombre. Ajouter un nombre positif fait avancer vers la droite ; ajouter un nombre négatif fait avancer vers la gauche. Cette représentation convient aux déplacements entiers comme décimaux.

- $-4 + 7 = 3$ : partir de $-4$, puis se déplacer de sept graduations vers la droite.
- $5 + (-8) = -3$ : partir de $5$, puis se déplacer de huit graduations vers la gauche.
- $-2{,}6+4{,}1=1{,}5$ : partir de $-2{,}6$, puis se déplacer de $4{,}1$ unités vers la droite.

Une fois cette représentation bien maîtrisée, utiliser cette méthode plus rapide : des signes identiques se renforcent ; des signes différents s'opposent, et la plus grande valeur absolue détermine le signe.

## Soustraire revient à ajouter l'opposé

Ne pas mémoriser isolément le slogan « deux signes moins donnent un signe plus ». Réécrire l'opération :

$$6 - (-4) = 6 + 4 = 10$$

Avec des nombres décimaux, la règle ne change pas : $1{,}7-(-0{,}8)=1{,}7+0{,}8=2{,}5$, tandis que $-1{,}7-0{,}8=-2{,}5$.

> Une habitude fiable : entourer le signe de l'opération et souligner le signe propre au nombre. Ils n'ont pas le même rôle.

### Pour aller plus loin

Sans calculer chaque terme, déterminer si $-101 + 99 + 2$ est positif, négatif ou nul. Chercher des termes qui s'annulent avant d'effectuer le calcul.
