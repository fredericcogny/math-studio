---
id: 4e-statistics-central-tendency
locale: fr
title: Moyenne, médiane et étendue
strand: Organisation et gestion de données
summary: Calculer et interpréter la moyenne, la moyenne pondérée, la médiane et l'étendue d'une série statistique, et comprendre quel indicateur représente le mieux les données.
objectives:
  - Calculer la moyenne arithmétique et la moyenne pondérée
  - Déterminer la médiane d'une série ordonnée
  - Calculer l'étendue et interpréter la dispersion
prerequisites:
  - Opérations sur les décimaux et les fractions
  - Rangement de nombres
vocabulary:
  - en: mean
    definition: Somme de toutes les valeurs divisée par le nombre de valeurs ; mesure de tendance centrale.
  - en: median
    definition: Valeur centrale lorsque les données sont rangées dans l'ordre ; la moitié des valeurs sont inférieures et l'autre moitié supérieures.
  - en: range
    definition: Différence entre la plus grande et la plus petite valeur d'une série ; mesure de dispersion.
flashcards:
  - front: Comment calculer la moyenne d'une série statistique ?
    back: Additionner toutes les valeurs et diviser par le nombre de valeurs. $\bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}$.
  - front: Comment trouver la médiane lorsqu'il y a un nombre pair de valeurs ?
    back: Ranger les valeurs dans l'ordre. La médiane est la moyenne des deux valeurs centrales.
  - front: Pourquoi peut-on préférer la médiane à la moyenne ?
    back: La médiane n'est pas influencée par les valeurs extrêmes (valeurs aberrantes), elle représente donc mieux la valeur typique dans une série dissymétrique.
exercises:
  - id: 4e-stat-t1
    tierTitle: Application directe
    prompt: "Calculer la moyenne de la série : $12 ; 15 ; 18 ; 9 ; 21$."
    solution: Somme $= 12 + 15 + 18 + 9 + 21 = 75$. Moyenne $= 75 \div 5 = 15$.
    hints:
      - Additionner les cinq valeurs, puis diviser par $5$.
  - id: 4e-stat-t2
    tierTitle: Entraînement standard
    prompt: "Les notes (sur $20$) d'un élève avec leurs coefficients sont : mathématiques $14$ (coeff. $4$), français $12$ (coeff. $3$), histoire $16$ (coeff. $2$), sciences $11$ (coeff. $3$). Calculer la moyenne pondérée."
    solution: "Somme pondérée $= 14 \\times 4 + 12 \\times 3 + 16 \\times 2 + 11 \\times 3 = 56 + 36 + 32 + 33 = 157$. Somme des coefficients $= 4 + 3 + 2 + 3 = 12$. Moyenne pondérée $= 157 \\div 12 \\approx 13{,}08$."
    hints:
      - Multiplier chaque note par son coefficient, additionner les produits, puis diviser par la somme des coefficients.
      - Ne pas simplement calculer la moyenne des quatre notes sans tenir compte des coefficients.
  - id: 4e-stat-t3
    tierTitle: Synthèse du programme officiel
    prompt: "Les âges (en années) de $10$ membres d'un club sportif sont : $14 ; 16 ; 13 ; 15 ; 42 ; 14 ; 15 ; 13 ; 16 ; 14$. Calculer la moyenne, la médiane et l'étendue. Quel indicateur représente le mieux l'âge typique ? Justifier la réponse."
    solution: >-
      Données ordonnées : $13 ; 13 ; 14 ; 14 ; 14 ; 15 ; 15 ; 16 ; 16 ; 42$. Moyenne $= 172 \div 10 = 17{,}2$. Médiane $= (14+15) \div 2 = 14{,}5$. Étendue $= 42 - 13 = 29$. La médiane ($14{,}5$) représente mieux l'âge typique car la moyenne ($17{,}2$) est tirée vers le haut par la valeur aberrante $42$.
    hints:
      - Commencer par ranger les données dans l'ordre croissant.
      - Avec $10$ valeurs, la médiane est la moyenne des 5e et 6e valeurs.
    rubric:
      - Calcule correctement la moyenne, la médiane et l'étendue.
      - Identifie la valeur aberrante et explique son effet sur la moyenne.
      - Justifie pourquoi la médiane est un indicateur plus représentatif pour cette série.
  - id: 4e-stat-t4
    tierTitle: Défi avancé
    prompt: Cinq entiers positifs distincts ont une moyenne de $7$, une médiane de $6$ et une étendue de $10$. Trouver tous les ensembles possibles de cinq tels entiers.
    solution: >-
      La somme vaut $35$. La médiane est la troisième valeur, donc $a < b < 6 < d < e$ avec $e - a = 10$. Alors $a + b + d + e = 29$ et $e = a + 10$, d'où $2a + b + d = 19$. En testant systématiquement : $\{1;7;6;10;11\}$, $\{1;8;6;9;11\}$, $\{2;4;6;11;12\}$, $\{2;5;6;10;12\}$, $\{3;4;6;9;13\}$, $\{3;5;6;8;13\}$.
    hints:
      - Utiliser la moyenne pour trouver la somme totale, et l'étendue pour relier la plus petite et la plus grande valeur.
      - Tester systématiquement les valeurs possibles du plus petit entier.
    rubric:
      - Déduit les contraintes à partir des conditions sur la moyenne, la médiane et l'étendue.
      - Énumère systématiquement les combinaisons valides.
      - Liste tous les ensembles valides et vérifie que chacun satisfait les trois conditions.
---
## Moyenne arithmétique

La **moyenne arithmétique** (ou simplement la moyenne) d'une série statistique est la somme de toutes les valeurs divisée par le nombre de valeurs :

$$\bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}$$

**Exemple.** Les hauteurs en centimètres de quatre plantes sont $12 ; 18 ; 15 ; 11$.

$$\bar{x} = \frac{12 + 18 + 15 + 11}{4} = \frac{56}{4} = 14 \text{ cm}$$

La moyenne est sensible aux valeurs extrêmes. Une seule valeur très grande ou très petite peut la modifier de façon significative.

## Moyenne pondérée

Lorsque les valeurs ont des **poids** (ou coefficients) différents, on utilise la moyenne pondérée :

$$\bar{x}_p = \frac{w_1 x_1 + w_2 x_2 + \cdots + w_n x_n}{w_1 + w_2 + \cdots + w_n}$$

**Exemple.** Un élève obtient $15$ (coefficient $3$) et $9$ (coefficient $1$). La moyenne pondérée est $\frac{15 \times 3 + 9 \times 1}{3 + 1} = \frac{54}{4} = 13{,}5$, et non $\frac{15+9}{2} = 12$.

## Médiane

La **médiane** est la valeur centrale d'une série ordonnée. Elle partage les données en deux moitiés égales.

- Si $n$ est impair, la médiane est la valeur en position $\frac{n+1}{2}$.
- Si $n$ est pair, la médiane est la moyenne des valeurs en positions $\frac{n}{2}$ et $\frac{n}{2}+1$.

**Exemple.** Données : $3 ; 7 ; 8 ; 12 ; 15$. La médiane est $8$ (la troisième des cinq valeurs).

**Exemple.** Données : $4 ; 6 ; 9 ; 13$. La médiane est $\frac{6+9}{2} = 7{,}5$.

La médiane est **robuste** : elle ne varie guère lorsqu'une valeur extrême est ajoutée ou modifiée.

## Étendue

L'**étendue** est la différence entre la valeur maximale et la valeur minimale :

$$\text{Étendue} = x_{\max} - x_{\min}$$

Elle mesure la dispersion des données. Une étendue importante indique une forte variabilité ; une étendue faible indique une bonne homogénéité.

**Exemple.** Températures sur une semaine : $-2 ; 1 ; 3 ; 5 ; 5 ; 7 ; 12$. Étendue $= 12 - (-2) = 14$ degrés.

### Pour aller plus loin

Deux classes ont toutes les deux une moyenne de $12$ sur $20$ à un contrôle, mais l'une a une étendue de $4$ et l'autre une étendue de $16$. Que peut-on en conclure sur les deux classes, même si leurs moyennes sont identiques ?
