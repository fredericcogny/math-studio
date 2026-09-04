---
id: 2de-python-algorithms
locale: fr
title: Algorithmique en Python, fonctions, boucles et listes
strand: Algorithmique et programmation
summary: Lire et écrire de courtes fonctions Python avec des boucles bornées et non bornées, et raisonner sur ce qu'une boucle garantit à chaque étape.
objectives:
  - Dérouler un programme à l'aide d'un tableau de valeurs successives
  - Écrire une fonction utilisant une boucle bornée ou une boucle non bornée
  - Justifier qu'une boucle se termine et qu'elle renvoie la valeur attendue
prerequisites:
  - Variables, boucles et instructions conditionnelles
  - Puissances d'exposant entier
vocabulary:
  - en: counted loop
    definition: Boucle dont le nombre de répétitions est connu avant son démarrage, écrite avec le mot for.
  - en: conditional loop
    definition: Boucle qui se répète tant qu'une condition reste vraie, écrite avec le mot while.
  - en: loop invariant
    definition: Propriété vraie avant la boucle et qui reste vraie après chaque répétition, utilisée pour démontrer ce que la boucle calcule.
flashcards:
  - front: Quelles valeurs produit range(1, 5) ?
    back: Les entiers $1$ ; $2$ ; $3$ ; $4$. La borne inférieure est incluse et la borne supérieure est exclue.
  - front: Quand faut-il préférer une boucle while à une boucle for ?
    back: Lorsque le nombre de répétitions n'est pas connu à l'avance, par exemple pour chercher la première valeur qui franchit un seuil.
  - front: Que faut-il vérifier pour toute boucle while ?
    back: Qu'elle se termine, ce qui consiste en général à exhiber une quantité qui varie de façon monotone jusqu'à ce que la condition devienne fausse.
  - front: Comment dérouler un programme de façon fiable ?
    back: Construire un tableau avec une colonne par variable et une ligne par répétition, et le remplir étape par étape sans en sauter aucune.
exercises:
  - id: 2de-python-t1
    tierTitle: Application directe
    prompt: "Dérouler le programme suivant et donner la valeur finale de $s$.\n```\ns = 0\nfor k in range(1, 5):\n    s = s + k\n```"
    solution: La boucle s'exécute pour $k=1$, puis $2$, puis $3$, puis $4$, car la borne supérieure est exclue. Les valeurs successives de $s$ sont $1$ ; $3$ ; $6$ ; $10$, donc la valeur finale est $10$.
    hints:
      - Dans range(1, 5) la valeur 5 est exclue.
  - id: 2de-python-t2
    tierTitle: Entraînement standard
    prompt: "La fonction ci-dessous est appelée avec l'argument $4$. Donner la valeur qu'elle renvoie.\n```\ndef f(n):\n    r = 1\n    for k in range(1, n + 1):\n        r = r * k\n    return r\n```"
    solution: La boucle multiplie $r$ successivement par $1$ ; $2$ ; $3$ et $4$, car range(1, 5) produit ces quatre valeurs. Ainsi $r$ prend les valeurs $1$ ; $2$ ; $6$ ; $24$, et la fonction renvoie $24$. Cette fonction calcule le produit des entiers de $1$ à $n$.
    hints:
      - Noter la valeur de r après chaque répétition.
      - La borne supérieure n + 1 est exclue, donc la dernière valeur de k est n.
  - id: 2de-python-t3
    tierTitle: Synthèse du programme officiel
    prompt: "Écrire une fonction Python qui prend une liste de nombres et renvoie la moyenne des valeurs strictement supérieures à $10$, ou la valeur $0$ s'il n'existe aucune telle valeur. Dérouler ensuite la fonction sur la liste [4, 12, 20, 7, 16] et donner le résultat."
    solution: "Une fonction possible accumule une somme et un effectif.\n```\ndef moyenne_grands(valeurs):\n    total = 0\n    effectif = 0\n    for v in valeurs:\n        if v > 10:\n            total = total + v\n            effectif = effectif + 1\n    if effectif == 0:\n        return 0\n    return total / effectif\n```\nLe test sur effectif est ce qui empêche une division par zéro sur une liste sans valeur supérieure à $10$. Sur la liste [4, 12, 20, 7, 16], les valeurs retenues sont $12$ ; $20$ et $16$, donc total vaut $48$ et effectif vaut $3$. La fonction renvoie $48/3=16$."
    hints:
      - Accumuler deux quantités pendant la boucle, une somme et un effectif.
      - Traiter le cas vide avant de diviser, sinon le programme échoue.
    rubric:
      - Écrit une boucle qui filtre les valeurs strictement supérieures à 10 et accumule une somme et un effectif.
      - Protège la division contre un effectif nul.
      - Déroule la fonction sur la liste donnée et obtient la moyenne 16.
  - id: 2de-python-t4
    tierTitle: Défi avancé
    prompt: "On considère la fonction ci-dessous.\n```\ndef seuil(S):\n    n = 0\n    u = 1\n    while u <= S:\n        n = n + 1\n        u = 2 * u\n    return n\n```\nDémontrer qu'au début de chaque test de la condition l'égalité $u=2^{n}$ est vraie, démontrer que la boucle se termine pour tout $S\\geqslant 0$, et démontrer que la valeur renvoyée est le plus petit entier $n$ tel que $2^{n}>S$. Donner la valeur renvoyée pour $S=1000$."
    solution: "Avant le premier test, $n=0$ et $u=1=2^{0}$, donc la propriété $u=2^{n}$ est vraie. Supposons-la vraie au début d'un test et que le corps de la boucle s'exécute. Ce corps remplace $n$ par $n+1$ et $u$ par $2u=2\\times 2^{n}=2^{n+1}$, donc la propriété est encore vraie au début du test suivant. C'est donc un invariant de la boucle. Pour la terminaison, $u$ est multiplié par $2$ à chaque répétition, donc $u=2^{n}$ croît sans borne et finit par dépasser tout $S$ fixé ; la condition $u\\leqslant S$ devient alors fausse et la boucle s'arrête. À l'arrêt, l'invariant donne $2^{n}>S$, donc la valeur renvoyée vérifie l'inégalité demandée. C'est le plus petit entier de ce type, car la boucle n'est sortie qu'à cette étape : pour toute valeur antérieure $k<n$ le test avait réussi, ce qui signifie $2^{k}\\leqslant S$. Pour $S=1000$, les puissances de deux sont $1$ ; $2$ ; $4$ ; $\\dots$ ; $512$ ; $1024$, et $2^{9}=512\\leqslant 1000$ tandis que $2^{10}=1024>1000$, donc la fonction renvoie $10$."
    hints:
      - Vérifier la propriété avant la boucle, puis montrer qu'une répétition la conserve.
      - Pour démontrer la minimalité, utiliser le fait que le test avait réussi à chaque étape antérieure.
    rubric:
      - Établit l'invariant en le vérifiant initialement puis après une répétition.
      - Justifie la terminaison par la croissance sans borne de la variable doublée.
      - Démontre la minimalité à partir des tests antérieurs réussis et donne la valeur 10 pour S égal à 1000.
---
## Dérouler avant d'écrire

Un programme se lit en le déroulant. On construit un tableau avec une colonne par variable et une ligne par répétition, et on le remplit sans sauter d'étape. La plupart des erreurs dans une boucle viennent d'une borne et non d'une idée, et seul un tableau révèle une erreur de borne.

```
s = 0
for k in range(1, 5):
    s = s + k
```

| répétition | $k$ | $s$ après |
| --- | --- | --- |
| 1 | $1$ | $1$ |
| 2 | $2$ | $3$ |
| 3 | $3$ | $6$ |
| 4 | $4$ | $10$ |

Attention à la borne : `range(1, 5)` inclut $1$ et exclut $5$.

## Deux sortes de boucles

Une **boucle bornée**, écrite avec `for`, se répète un nombre connu de fois. On l'utilise lorsque le nombre d'étapes est décidé à l'avance.

Une **boucle non bornée**, écrite avec `while`, se répète tant qu'une condition est vraie. On l'utilise lorsque le nombre d'étapes est inconnu, par exemple pour chercher le premier terme qui franchit un seuil.

```
n = 0
u = 1
while u <= 1000:
    n = n + 1
    u = 2 * u
```

Toute boucle `while` a besoin d'une raison de s'arrêter. Ici $u$ double à chaque répétition, donc il finit par dépasser $1000$ ; une boucle dépourvue d'une telle quantité peut ne jamais se terminer.

## Les fonctions

Une **fonction** encapsule un calcul, reçoit des arguments et renvoie une valeur avec `return`. Nommer un calcul le rend réutilisable et testable.

```
def aire_disque(r):
    return 3.14159 * r * r
```

Une fonction qui renvoie une valeur est préférable à une fonction qui se contente d'afficher, car la valeur peut être réutilisée dans un calcul ultérieur.

## Les listes

Une liste rassemble des valeurs dans un ordre donné, et une boucle `for` peut la parcourir directement.

```
def somme(valeurs):
    total = 0
    for v in valeurs:
        total = total + v
    return total
```

Les schémas standards de Seconde suivent tous cette forme : accumuler une somme, compter les éléments vérifiant une condition, ou conserver la plus grande valeur rencontrée. Un filtrage par un `if` à l'intérieur de la boucle les combine.

Se protéger du cas vide est important. Une moyenne est une somme divisée par un effectif, et un effectif nul doit être traité avant la division, et non après.

## Ce qu'une boucle garantit

Pour justifier qu'un programme est correct, on exhibe un **invariant** : une propriété vraie avant la boucle et conservée par une répétition. Associé à une raison de terminaison, l'invariant donne la valeur à la sortie. Dans la boucle de doublement ci-dessus, l'invariant est $u=2^{n}$, et c'est lui qui transforme un programme en démonstration.

### Pour aller plus loin

Modifier la boucle de doublement pour qu'elle renvoie aussi le nombre de répétitions nécessaires pour dépasser un seuil lorsque la valeur de départ est $3$ au lieu de $1$. Énoncer et démontrer le nouvel invariant.
