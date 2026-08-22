---
id: 4e-programming-conditionals
locale: fr
title: Variables, boucles et conditions
strand: Algorithmes et programmation
summary: Apprendre à utiliser des variables, des boucles for et while, et des instructions conditionnelles if/else pour écrire et tracer des programmes simples.
objectives:
  - Affecter et mettre à jour des variables dans un programme
  - Tracer l'exécution de boucles for et while
  - Utiliser des instructions if/else pour contrôler le déroulement d'un programme
prerequisites:
  - Opérations arithmétiques de base
  - Pensée algorithmique de 5e
vocabulary:
  - en: variable
    definition: Emplacement nommé dans un programme qui stocke une valeur pouvant changer au cours de l'exécution.
  - en: loop
    definition: Structure de contrôle qui répète un bloc d'instructions un certain nombre de fois ou tant qu'une condition est vraie.
  - en: conditional
    definition: Instruction qui teste si une condition est vraie ou fausse et exécute des instructions différentes en conséquence.
flashcards:
  - front: Que se passe-t-il lorsqu'on écrit `x = x + 3` dans un programme ?
    back: L'ordinateur lit la valeur actuelle de $x$, lui ajoute $3$ et stocke le résultat dans $x$. Si $x$ valait $5$, il vaut désormais $8$.
  - front: Combien de fois `for i in range(5)` exécute-t-il son bloc ?
    back: Cinq fois, avec $i$ prenant les valeurs $0, 1, 2, 3, 4$.
  - front: Quelle est la différence entre `if` et `if/else` ?
    back: Avec `if` seul, le bloc s'exécute uniquement lorsque la condition est vraie et rien ne se passe sinon. Avec `if/else`, un bloc s'exécute quand la condition est vraie et un autre bloc s'exécute quand elle est fausse.
exercises:
  - id: 4e-progcond-t1
    tierTitle: Application directe
    prompt: "Tracer le programme suivant et donner la valeur finale de $s$.\n```\ns = 0\nfor i in range(4):\n    s = s + i\n```"
    solution: La boucle s'exécute pour $i=0,1,2,3$. Après chaque itération, $s=0$, $s=1$, $s=3$, $s=6$. La valeur finale est $6$.
    hints:
      - Lister les valeurs de $i$ et mettre à jour $s$ étape par étape.
  - id: 4e-progcond-t2
    tierTitle: Entraînement standard
    prompt: "Tracer le programme suivant et donner la valeur finale de `count`.\n```\ncount = 0\nfor i in range(1, 11):\n    if i % 3 == 0:\n        count = count + 1\n```"
    solution: La boucle s'exécute pour $i=1,2,\ldots,10$. La condition $i \% 3 = 0$ est vraie pour $i=3,6,9$. Donc `count` est incrémenté trois fois. La valeur finale est $3$.
    hints:
      - L'opérateur `%` donne le reste de la division.
      - Lister toutes les valeurs de $i$ de 1 à 10 et vérifier lesquelles sont divisibles par 3.
  - id: 4e-progcond-t3
    tierTitle: Synthèse du programme officiel
    prompt: "Lire le programme ci-dessous et expliquer ce qu'il calcule. Puis donner la sortie pour l'entrée $n=20$.\n```\nn = 20\nresult = 0\nfor i in range(1, n+1):\n    if i % 2 == 0:\n        result = result + i\n    else:\n        result = result - i\nprint(result)\n```"
    solution: Le programme calcule $-1+2-3+4-\cdots+20$. En regroupant les termes consécutifs par paires, $(-1+2)+(-3+4)+\cdots+(-19+20)$, chaque paire vaut $1$ et il y a $10$ paires, donc le résultat est $10$.
    hints:
      - Déterminer si chaque $i$ est pair ou impair et l'opération correspondante.
      - Chercher un motif en regroupant les termes consécutifs par paires.
    rubric:
      - Identifie correctement le motif de somme alternée.
      - Regroupe les termes par paires et calcule la valeur de chaque paire.
      - Aboutit au résultat correct de 10 avec un raisonnement clair.
  - id: 4e-progcond-t4
    tierTitle: Défi avancé
    prompt: Écrire un programme qui trouve tous les nombres à deux chiffres égaux à la somme des cubes de leurs chiffres. Puis démontrer mathématiquement que la liste est complète en bornant les valeurs possibles.
    solution: >-
      Soit $\overline{ab}=10a+b$. On cherche $10a+b=a^3+b^3$. En testant tous les nombres de 10 à 99 avec une boucle, aucune solution n'existe. Le programme le confirme. Preuve mathématique : pour $a\ge 3$, $a^3$ croît plus vite que $10a$, mais $a^3+b^3$ peut dépasser 99 tandis que $10a+b\le 99$, donc la recherche exhaustive sur un domaine fini est complète.
    hints:
      - Extraire les chiffres à l'aide de la division entière et du reste.
      - Utiliser une boucle de 10 à 99 et vérifier la condition pour chaque nombre.
    rubric:
      - Écrit un programme correct vérifiant tous les nombres à deux chiffres.
      - Conclut correctement qu'aucun nombre à deux chiffres ne vérifie la condition.
      - Fournit un argument mathématique bornant l'espace de recherche.
---
## Variables et affectation

Une **variable** est un conteneur nommé qui stocke une valeur. Lorsqu'on écrit `x = 5`, la variable `x` contient la valeur $5$. L'idée essentielle : le signe `=` en programmation signifie **affectation**, et non égalité mathématique. L'instruction `x = x + 3` prend la valeur actuelle de `x`, lui ajoute $3$ et stocke le résultat.

Tracer un programme consiste à suivre chaque instruction dans l'ordre et à noter l'évolution de chaque variable.

## Boucles

Une **boucle for** répète un bloc de code un nombre fixé de fois :

```
for i in range(5):
    print(i)
```

Ceci affiche $0, 1, 2, 3, 4$. La variable `i` est appelée **compteur de boucle**. `range(n)` produit les entiers de $0$ à $n-1$.

Une **boucle while** se répète tant qu'une condition reste vraie :

```
x = 1
while x < 100:
    x = x * 2
```

Après la boucle, $x=128$ car $1\to 2\to 4\to 8\to 16\to 32\to 64\to 128$, et $128\ge 100$ arrête la boucle.

## Instructions conditionnelles

Une instruction **if/else** teste une condition et choisit quel bloc de code exécuter :

```
if age >= 18:
    print("majeur")
else:
    print("mineur")
```

La condition `age >= 18` est soit vraie, soit fausse. Une seule branche s'exécute. Les opérateurs de comparaison courants sont `==` (égal), `!=` (différent), `<`, `>`, `<=`, `>=`.

## Combiner boucles et conditions

La véritable puissance apparaît lorsqu'on place des conditions à l'intérieur de boucles :

```
count = 0
for i in range(1, 21):
    if i % 2 == 0:
        count = count + 1
```

Ceci compte les nombres pairs de $1$ à $20$. Le résultat est $10$.

### Pour aller plus loin

Quelle valeur `x` contient-il après l'exécution de ce programme ? Essayer de prédire avant de tracer.
```
x = 1
for i in range(6):
    if x < 10:
        x = x * 2
    else:
        x = x - 5
```
