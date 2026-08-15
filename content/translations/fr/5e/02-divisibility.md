---
id: 5e-divisibility
locale: fr
title: Divisibilité et couples de facteurs
strand: Arithmétique et raisonnement
summary: Utiliser les critères de divisibilité par 2, 3, 5, 9 et 10, puis organiser les diviseurs à l'aide de couples de facteurs.
objectives:
  - Appliquer les critères de divisibilité par 2, 3, 5, 9 et 10
  - Distinguer diviseur, multiple, quotient et reste
  - Trouver tous les diviseurs d'un entier naturel à l'aide de couples de facteurs
  - Utiliser la divisibilité et les couples de facteurs dans un problème de synthèse
prerequisites:
  - Tables de multiplication
  - Division des nombres entiers naturels
  - Numération décimale et somme des chiffres
vocabulary:
  - en: divisor
    definition: Entier naturel qui en divise un autre avec un reste nul.
  - en: multiple
    definition: Nombre obtenu en multipliant un entier naturel par un autre entier naturel.
  - en: remainder
    definition: Ce qui reste après avoir formé le plus grand nombre possible de groupes égaux complets.
  - en: factor pair
    definition: Deux entiers naturels dont le produit est le nombre étudié.
flashcards:
  - front: Énoncer les critères de divisibilité par $2$, $5$ et $10$.
    back: Le dernier chiffre est pair pour $2$, vaut $0$ ou $5$ pour $5$, et vaut $0$ pour $10$.
  - front: Énoncer les critères de divisibilité par $3$ et $9$.
    back: La somme des chiffres est divisible respectivement par $3$ ou par $9$.
  - front: Comment les couples de facteurs permettent-ils d'énumérer tous les diviseurs ?
    back: On teste les facteurs dans l'ordre croissant et on associe à chaque diviseur $a$ le quotient $n\div a$, jusqu'à ce que les facteurs se rejoignent ou se croisent.
exercises:
  - id: 5e-divisibility-t1
    tierTitle: Application directe
    prompt: Pour chacun des nombres $2;3;5;9;10$, déterminer si $4\,590$ est divisible par ce nombre. Justifier chaque réponse avec le critère adapté.
    solution: $4\,590$ se termine par $0$ ; il est donc divisible par $2$, $5$ et $10$. La somme de ses chiffres est $4+5+9+0=18$, qui est divisible par $3$ et par $9$. Ainsi, $4\,590$ est divisible par les cinq nombres.
    hints:
      - Utiliser le dernier chiffre pour $2$, $5$ et $10$.
      - Utiliser la somme des chiffres pour $3$ et $9$.
    rubric:
      - Conclut correctement à la divisibilité par les cinq nombres.
      - Utilise le dernier chiffre pour justifier les critères de $2$, $5$ et $10$.
      - Calcule la somme des chiffres $18$ et l'utilise pour $3$ et $9$.
  - id: 5e-divisibility-t2
    tierTitle: Entraînement sur les couples de facteurs
    prompt: Énumérer tous les diviseurs positifs de $84$ en écrivant ses couples de facteurs. Expliquer pourquoi la liste est complète.
    solution: En testant tous les premiers facteurs possibles de $1$ à $9=\lfloor\sqrt{84}\rfloor$, on obtient les produits exacts $1\times84$, $2\times42$, $3\times28$, $4\times21$, $6\times14$ et $7\times12$ ; $5$, $8$ et $9$ ne divisent pas $84$. Les diviseurs positifs sont $1;2;3;4;6;7;12;14;21;28;42;84$. Tout facteur supérieur à $\sqrt{84}$ est associé à un facteur inférieur à $\sqrt{84}$ ; la liste est donc complète.
    hints:
      - Commencer par $1$ et tester les diviseurs possibles dans l'ordre croissant.
      - Chaque division exacte produit deux diviseurs. S'arrêter lorsque les deux facteurs se croiseraient.
    rubric:
      - Trouve les six couples de facteurs sans oubli ni répétition.
      - Énumère exactement les douze diviseurs positifs.
      - Explique que les tests jusqu'au croisement des couples prouvent que la liste est complète.
  - id: 5e-divisibility-t3
    tierTitle: Synthèse du programme officiel
    prompt: Le nombre à trois chiffres $3a0$ a pour chiffre des dizaines $a$. Trouver $a$ pour que ce nombre soit divisible par $2;3;5;9$ et $10$. Énumérer ensuite tous les couples de facteurs du nombre obtenu et justifier que la liste est complète.
    solution: >-
      Le dernier chiffre $0$ garantit la divisibilité par $2$, $5$ et $10$. Pour être divisible par $9$, la somme $3+a+0$ doit être un multiple de $9$. Comme $a$ est un chiffre, seule l'égalité $3+a=9$ convient : $a=6$ et le nombre est $360$ ; la divisibilité par $9$ entraîne aussi celle par $3$. Ses couples de facteurs sont $(1;360)$, $(2;180)$, $(3;120)$, $(4;90)$, $(5;72)$, $(6;60)$, $(8;45)$, $(9;40)$, $(10;36)$, $(12;30)$, $(15;24)$ et $(18;20)$. Les premiers facteurs ont été testés dans l'ordre jusqu'à $18$, et l'entier suivant vérifie $19>\sqrt{360}$ ; tous les couples ont donc été trouvés.
    hints:
      - Le dernier chiffre permet de traiter trois des cinq critères.
      - Pour la divisibilité par $9$, étudier la somme des chiffres $3+a$.
      - Pour les couples de facteurs, tester les premiers facteurs seulement jusqu'à leur croisement avec les seconds.
    rubric:
      - Utilise les critères pour obtenir uniquement $a=6$ et le nombre $360$.
      - Énumère correctement les douze couples de facteurs de $360$.
      - Justifie que la liste est complète par des tests systématiques jusqu'à $18<\sqrt{360}<19$.
  - id: 5e-divisibility-t4
    tierTitle: Défi olympique sur les résidus
    prompt: À l'aide de la notation des congruences, démontrer que la somme de trois carrés parfaits ne peut pas être congrue à $7$ modulo $8$.
    solution: Tout entier est congru modulo $8$ à l'un des nombres $0;1;2;3;4;5;6;7$. Les carrés de ces représentants ont pour résidus $0;1;4;1;0;1;4;1$ ; un carré est donc congru uniquement à $0;1$ ou $4$. Pour une étude exhaustive, comptons le nombre de résidus égaux à $4$ parmi les trois. Sans $4$, la somme de trois éléments de $\{0;1\}$ vaut $0;1;2$ ou $3$. Avec un seul $4$, elle vaut $4;5$ ou $6$. Avec deux $4$, elle vaut $8$ ou $9$, donc est congrue à $0$ ou $1$. Avec trois $4$, elle vaut $12$, donc est congrue à $4$. Les résidus possibles sont ainsi exactement $0;1;2;3;4;5;6$, jamais $7$.
    hints:
      - Déterminer d'abord tous les résidus possibles d'un carré modulo $8$.
      - Pour rendre l'étude des sommes exhaustive, séparer les cas selon le nombre de résidus égaux à $4$.
    rubric:
      - Démontre que les seuls résidus quadratiques modulo $8$ sont $0;1;4$.
      - Épuise les sommes en étudiant zéro, une, deux ou trois occurrences de $4$.
      - Conclut rigoureusement que le résidu $7$ est impossible.
---
## Diviseurs et multiples

Pour des entiers naturels $a$ et $n$, $a$ est un **diviseur** de $n$ lorsque la division de $n$ par $a$ a pour reste zéro. De manière équivalente, il existe un entier naturel $q$ tel que

$$n=a\times q.$$

Alors $n$ est un **multiple** de $a$. Par exemple, $7$ divise $42$ car $42=7\times6$. Le nombre $42$ est un multiple de $7$ et $7$ est un diviseur de $42$.

La division euclidienne s'écrit

$$n=dq+r\qquad\text{avec}\qquad 0\le r<d.$$

La divisibilité signifie précisément que $r=0$.

## Critères de divisibilité du programme

L'écriture décimale d'un entier naturel fournit cinq critères essentiels :

- divisible par $2$ : son dernier chiffre est $0;2;4;6$ ou $8$ ;
- divisible par $5$ : son dernier chiffre est $0$ ou $5$ ;
- divisible par $10$ : son dernier chiffre est $0$ ;
- divisible par $3$ : la somme de ses chiffres est divisible par $3$ ;
- divisible par $9$ : la somme de ses chiffres est divisible par $9$.

Pour $7\,290$, le dernier chiffre montre la divisibilité par $2$, $5$ et $10$. La somme des chiffres vaut $7+2+9+0=18$ ; le nombre est donc aussi divisible par $3$ et $9$.

> Un critère est une équivalence : il permet de justifier une réponse positive comme une réponse négative. Un nombre divisible par $9$ est toujours divisible par $3$, mais la réciproque est fausse en général.

## Couples de facteurs et listes complètes

Un couple de facteurs de $n$ est un couple d'entiers naturels positifs dont le produit vaut $n$. Pour $60$ :

$$1\times60;\quad2\times30;\quad3\times20;\quad4\times15;\quad5\times12;\quad6\times10.$$

Ces couples donnent tous les diviseurs positifs de $60$ :

$$1;2;3;4;5;6;10;12;15;20;30;60.$$

Pour prouver qu'une liste est complète, on teste les premiers facteurs possibles dans l'ordre croissant. Dès que le premier facteur dépasserait le second, chaque nouveau couple serait seulement l'inverse d'un couple déjà écrit. Pour un carré parfait, le couple de facteurs égaux, comme $6\times6$ pour $36$, n'est écrit qu'une fois.

## Méthode pour les problèmes du programme

Repérer le critère demandé, montrer le dernier chiffre ou la somme des chiffres utile, puis énoncer la conclusion. Pour une liste de diviseurs, écrire les couples de facteurs systématiquement et expliquer où les facteurs se rejoignent ou se croisent. Quelques exemples ne suffisent pas à prouver qu'une liste est complète.

## Approfondissement uniquement : résidus et démonstrations

La notation des congruences condense une affirmation sur un reste. L'expression

$$n\equiv2\pmod5$$

signifie que la division de $n$ par $5$ a pour reste $2$. Cette notation et les démonstrations qui classent tous les résidus relèvent ici de l'approfondissement ; elles ne sont pas exigées pour les critères de divisibilité ni pour les exercices du programme sur les couples de facteurs.

Par exemple, tout entier est congru à $0;1$ ou $2$ modulo $3$. Les carrés correspondants sont congrus à $0;1$ et $1$. Une telle étude exhaustive des résidus peut établir une propriété pour tous les entiers ; c'est la méthode employée en T4.
