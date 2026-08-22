---
id: 4e-first-degree-equations
locale: fr
title: Équations du premier degré
strand: Nombres et calcul
summary: Apprendre à résoudre des équations du premier degré en isolant l'inconnue, puis appliquer la technique à des problèmes concrets.
objectives:
  - Résoudre des équations de la forme $ax + b = c$
  - Résoudre des équations avec l'inconnue des deux côtés
  - Vérifier une solution par substitution
prerequisites:
  - Opérations sur les nombres relatifs
  - Propriété de distributivité
vocabulary:
  - en: equation
    definition: Égalité mathématique entre deux expressions contenant au moins une inconnue.
  - en: solution
    definition: Valeur de l'inconnue qui rend les deux membres de l'équation égaux.
  - en: isolate
    definition: Transformer une équation pour que l'inconnue apparaisse seule d'un côté.
flashcards:
  - front: Comment résoudre $3x + 5 = 17$ ?
    back: Soustraire $5$ des deux côtés pour obtenir $3x = 12$, puis diviser par $3$ pour obtenir $x = 4$.
  - front: Que signifie vérifier une solution ?
    back: Remplacer la valeur trouvée dans l'équation d'origine et vérifier que les deux membres sont égaux.
  - front: Comment traiter une équation comme $2x + 3 = 5x - 9$ ?
    back: Regrouper les termes en $x$ d'un côté et les constantes de l'autre. $2x - 5x = -9 - 3$, donc $-3x = -12$ et $x = 4$.
exercises:
  - id: 4e-feq-t1
    tierTitle: Application directe
    prompt: Résoudre $4x - 7 = 13$.
    solution: "Ajouter $7$ aux deux membres : $4x = 20$. Diviser par $4$ : $x = 5$."
    hints:
      - Commencer par ajouter $7$ aux deux membres pour isoler le terme en $x$.
  - id: 4e-feq-t2
    tierTitle: Entraînement standard
    prompt: Résoudre $5x + 3 = 2x - 9$.
    solution: "Soustraire $2x$ des deux membres : $3x + 3 = -9$. Soustraire $3$ : $3x = -12$. Diviser par $3$ : $x = -4$. Vérification : $5(-4)+3=-17$ et $2(-4)-9=-17$."
    hints:
      - Regrouper les termes en $x$ d'un côté en soustrayant $2x$ des deux membres.
      - Après avoir regroupé les termes en $x$, isoler $x$ étape par étape.
  - id: 4e-feq-t3
    tierTitle: Synthèse du programme officiel
    prompt: Un rectangle a un périmètre de $54$ cm. Sa longueur dépasse le double de sa largeur de $3$ cm. Déterminer les dimensions du rectangle. Poser une équation, la résoudre et vérifier la réponse.
    solution: >-
      Soit $l$ la largeur. La longueur vaut $2l + 3$. Le périmètre donne $2(l + 2l + 3) = 54$, soit $2(3l + 3) = 54$, d'où $6l + 6 = 54$, $6l = 48$, $l = 8$. La largeur est de $8$ cm et la longueur de $2(8) + 3 = 19$ cm. Vérification : $2(8 + 19) = 2 \times 27 = 54$ cm.
    hints:
      - Noter $l$ la largeur et exprimer la longueur en fonction de $l$.
      - Utiliser la formule du périmètre $P = 2(\text{longueur} + \text{largeur})$ pour poser l'équation.
    rubric:
      - Pose correctement une équation en utilisant une variable pour la dimension inconnue.
      - Résout l'équation par des étapes algébriques valides.
      - Vérifie que la réponse satisfait à la fois le périmètre et la relation entre longueur et largeur.
  - id: 4e-feq-t4
    tierTitle: Défi avancé
    prompt: Trouver tous les entiers $n$ tels que $\frac{3n + 7}{n - 1}$ soit aussi un entier.
    solution: >-
      Écrire $3n + 7 = 3(n - 1) + 10$, donc $\frac{3n+7}{n-1} = 3 + \frac{10}{n-1}$. C'est un entier lorsque $n - 1$ divise $10$. Les diviseurs de $10$ sont $\pm 1, \pm 2, \pm 5, \pm 10$, d'où $n \in \{-9,-4,-1,0,2,3,6,11\}$.
    hints:
      - Effectuer la division euclidienne pour réécrire la fraction comme un entier plus un reste sur $n-1$.
      - L'expression est entière exactement lorsque $n - 1$ divise le reste.
    rubric:
      - Réécrit correctement la fraction par division pour isoler un reste constant.
      - Identifie que $n-1$ doit diviser $10$ et liste tous les diviseurs.
      - Donne les huit valeurs entières de $n$.
---
## Qu'est-ce qu'une équation ?

Une équation est une égalité entre deux expressions comportant au moins une **inconnue** (souvent notée $x$). Résoudre une équation, c'est trouver toute valeur de l'inconnue qui rend l'égalité vraie. Cette valeur est appelée la **solution** (ou racine) de l'équation.

$$3x + 5 = 17$$

L'équation ci-dessus admet exactement une solution : $x = 4$.

## Résoudre $ax + b = c$

La méthode est toujours la même : **isoler** $x$ en effectuant la même opération des deux côtés.

1. Ajouter ou soustraire pour éliminer la constante du côté de $x$.
2. Multiplier ou diviser pour obtenir $x$ seul.

**Exemple.** Résoudre $-2x + 9 = 3$.

$$-2x + 9 - 9 = 3 - 9 \implies -2x = -6 \implies x = \frac{-6}{-2} = 3$$

> Règle d'or : toute opération effectuée d'un côté doit être effectuée de l'autre.

## L'inconnue des deux côtés

Lorsque $x$ apparaît des deux côtés, on regroupe d'abord tous les termes en $x$ d'un côté et toutes les constantes de l'autre.

**Exemple.** Résoudre $7x - 4 = 3x + 8$.

$$7x - 3x = 8 + 4 \implies 4x = 12 \implies x = 3$$

Toujours **vérifier** en remplaçant : $7(3)-4 = 17$ et $3(3)+8 = 17$. Les deux membres sont égaux.

## Des mots aux équations

De nombreux problèmes concrets se traduisent en équations dès que l'on nomme l'inconnue.

1. Lire le problème et identifier la grandeur inconnue. L'appeler $x$.
2. Traduire chaque phrase en expression algébrique.
3. Poser l'équation, la résoudre et répondre par une phrase.
4. Vérifier que la réponse est cohérente avec l'énoncé.

**Exemple.** Un nombre est triplé puis augmenté de $5$. Le résultat est $23$. Trouver ce nombre.

Soit $x$ le nombre. Alors $3x + 5 = 23$, donc $3x = 18$ et $x = 6$.

### Pour aller plus loin

Une équation comme $2x + 1 = 2x + 3$ peut-elle avoir une solution ? Que cela signifie-t-il pour les droites $y = 2x + 1$ et $y = 2x + 3$ ?
