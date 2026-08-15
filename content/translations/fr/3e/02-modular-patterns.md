---
id: 3e-modular-patterns
locale: fr
title: Arithmétique de l'horloge et invariants
strand: Arithmétique et démonstration
summary: Utiliser les restes pour simplifier de grands calculs et découvrir des quantités qui ne peuvent pas changer.
objectives:
  - Calculer modulo n
  - Repérer un cycle
  - Utiliser un invariant pour démontrer une impossibilité
prerequisites:
  - Division euclidienne
  - Puissances d'entiers
vocabulary:
  - en: congruent
    definition: Se dit de deux entiers qui ont le même reste pour un diviseur choisi.
  - en: invariant
    definition: Propriété ou quantité qui reste inchangée sous l'effet des opérations autorisées.
  - en: residue
    definition: Reste possible considéré en arithmétique modulaire.
flashcards:
  - front: Que signifie a ≡ b (mod n) ?
    back: a et b ont le même reste dans la division par n ; de manière équivalente, n divise a-b.
  - front: Quels sont les résidus possibles modulo 3 ?
    back: 0, 1 et 2.
  - front: Pourquoi les cycles sont-ils utiles pour les grandes puissances ?
    back: Dès que les résidus se répètent, seule compte la position de l'exposant dans le cycle.
exercises:
  - id: 3e-modular-t1
    tierTitle: Application directe
    prompt: Déterminer le reste de la division de $3^5$ par $7$.
    solution: $3^2\equiv2\pmod7$, $3^4\equiv4\pmod7$ et $3^5\equiv12\equiv5\pmod7$. Le reste est $5$.
    hints:
      - Réduire après chaque multiplication plutôt que de calculer un grand nombre.
  - id: 3e-modular-t2
    tierTitle: Entraînement standard
    prompt: Déterminer le chiffre des unités de $7^{2026}$ en trouvant et en utilisant le cycle des chiffres des unités des puissances de $7$.
    solution: Les chiffres des unités suivent le cycle $7,9,3,1$, de période $4$. Comme $2026=4\times506+2$, l'exposant correspond à la deuxième position du cycle. Le chiffre des unités est $9$.
    hints:
      - Calculer les chiffres des unités de $7^1,7^2,7^3,7^4$.
      - Diviser $2026$ par la longueur du cycle.
  - id: 3e-modular-t3
    tierTitle: Synthèse
    prompt: Un pion part de $2$. À chaque déplacement, on lui ajoute $6$ ou on lui soustrait $9$. Le pion peut-il atteindre $100$ ? Démontrer la réponse sans énumérer les chemins possibles.
    solution: Les deux variations autorisées sont divisibles par $3$ ; la classe modulo $3$ de la position du pion est donc invariante. Au départ, cette classe vaut $2$, alors que $100$ a pour reste $1$. Le pion ne peut donc jamais atteindre $100$.
    hints:
      - Chercher un diviseur commun aux deux variations possibles.
      - Comparer le point de départ et la cible modulo ce diviseur.
    rubric:
      - Reconnaît le reste modulo $3$ comme un invariant.
      - Montre que les deux déplacements préservent ce reste.
      - Compare les résidus distincts de $2$ et de $100$ pour démontrer l'impossibilité.
  - id: 3e-modular-t4
    tierTitle: Défi avancé
    prompt: Six entiers $a_1,a_2,\ldots,a_6$ sont disposés sur un cercle ; la configuration initiale est $(1,0,0,0,0,0)$. Un coup consiste à choisir deux termes voisins et à ajouter $1$ à chacun. Démontrer qu'il est impossible que les six termes deviennent un jour égaux.
    solution: Considérons la somme alternée $S=a_1-a_2+a_3-a_4+a_5-a_6$. Toute paire de termes voisins comporte un terme précédé du signe plus et un terme précédé du signe moins, y compris la paire $a_6,a_1$. Ajouter $1$ aux deux modifie donc $S$ de $1-1=0$ ; ainsi, $S$ est invariant. Initialement, $S=1$. Si les six termes étaient tous égaux à $k$, alors $S=k-k+k-k+k-k=0$. Puisque l'invariant ne peut pas passer de $1$ à $0$, l'égalité est impossible.
    hints:
      - La somme ordinaire et la parité ne permettent pas de distinguer immédiatement les états ; essayer une somme pondérée.
      - Attribuer des signes alternés aux positions successives sur le cycle de longueur paire.
    rubric:
      - Définit un invariant adapté sous la forme d'une somme alternée.
      - Démontre que tout coup portant sur une paire voisine le préserve, y compris pour la paire reliant la fin au début.
      - Montre que sa valeur initiale est $1$, tandis qu'elle vaut $0$ dans tout état où les six termes sont égaux.
---
## Des nombres sur une horloge

Modulo $n$, les nombres sont regroupés selon le reste de leur division par $n$. On écrit

$$a \equiv b \pmod n$$

lorsque $a$ et $b$ appartiennent au même groupe. Par exemple, $38\equiv 3\pmod 7$, car tous deux ont pour reste $3$.

On peut additionner et multiplier des congruences :

$$a\equiv b\pmod n \implies a+c\equiv b+c\pmod n$$

et

$$ac\equiv bc\pmod n.$$

## Les grandes puissances deviennent de petits cycles

Observons les puissances de $2$ modulo $5$ :

$$2,\ 4,\ 3,\ 1,\ 2,\ 4,\ 3,\ 1,\ldots$$

Le cycle est de longueur quatre. Pour déterminer le résidu de $2^{101}$ modulo $5$, seul compte le reste de la division de $101$ par $4$.

## Les invariants démontrent l'impossibilité

Supposons qu'un coup modifie toujours un nombre d'un multiple de $3$. Son reste modulo $3$ ne change jamais. Si une énigme demande d'atteindre un nombre dont le reste est différent, la tâche est impossible, quel que soit le nombre de coups essayés.

> Un invariant remplace « j'ai essayé sans réussir » par une démonstration que toute tentative possible est vouée à l'échec.

### Prolongement facultatif de type olympiade

Un pion part de $2$. Un coup consiste soit à ajouter $6$, soit à soustraire $9$. Peut-il atteindre $100$ ? Trouver un modulo préservé par les deux coups, puis comparer le point de départ et la cible.
