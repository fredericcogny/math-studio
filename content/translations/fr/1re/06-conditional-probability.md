---
id: "1re-conditional-probability"
locale: "fr"
title: "Probabilités conditionnelles et indépendance"
strand: "Probabilités et statistique"
summary: "Conditionnement par un événement de probabilité non nulle, construction d'arbres pondérés et formule des probabilités totales."
objectives:
  - "Calculer la probabilité conditionnelle P_A(B)"
  - "Construire et exploiter un arbre pondéré"
  - "Appliquer la formule des probabilités totales"
  - "Tester l'indépendance de deux événements"
prerequisites:
  - "Notions de base en probabilités (réunion, intersection et événement contraire)"
vocabulary:
  - en: "Conditional probability"
    definition: "Probabilité que l'événement B se réalise sachant que l'événement A s'est déjà réalisé, notée P_A(B)."
  - en: "Law of total probability"
    definition: "Règle permettant de calculer P(B) en additionnant les probabilités des intersections de B avec les éléments d'une partition."
flashcards:
  - front: "Quelle est la définition de la probabilité conditionnelle P_A(B) ?"
    back: "P_A(B) = P(A inter B) / P(A) avec P(A) > 0"
  - front: "Quand deux événements A et B sont-ils dits indépendants ?"
    back: "Si et seulement si P(A inter B) = P(A) * P(B)"
exercises:
  - id: "1re-prob-t1"
    tierTitle: "Application directe"
    prompt: "Sachant que $P(A)=0{,}4$ et $P(A\\cap B)=0{,}12$, calculer $P(B\\mid A)$."
    solution: "$P(B\\mid A)=P(A\\cap B)/P(A)=0{,}12/0{,}4=0{,}3$."
    hints:
      - "Diviser la probabilité de l'intersection par celle de l'événement conditionnant."
  - id: "1re-prob-t2"
    tierTitle: "Entraînement standard"
    prompt: "Une usine utilise la machine $A$ pour $60\\%$ de sa production et la machine $B$ pour $40\\%$. Leurs taux de défaut sont respectivement de $2\\%$ et de $5\\%$. Déterminer la probabilité qu'un article choisi au hasard soit défectueux."
    solution: "Notons $D$ l'événement « l'article présente un défaut ». D'après la formule des probabilités totales, $P(D)=P(A)P(D\\mid A)+P(B)P(D\\mid B)=0{,}60\\times0{,}02+0{,}40\\times0{,}05=0{,}012+0{,}020=0{,}032$."
    hints:
      - "Décomposer l'événement selon la machine qui a produit l'article."
      - "Additionner les probabilités des deux branches disjointes correspondant à un article défectueux."
  - id: "1re-prob-t3"
    tierTitle: "Synthèse"
    prompt: "Une maladie touche $5\\%$ d'une population. Un test est positif pour $95\\%$ des personnes infectées et pour $2\\%$ des personnes non infectées. Sachant que le résultat est positif, déterminer la probabilité que la personne soit infectée. Arrondir au millième."
    solution: "Notons $I$ l'infection et $T$ un test positif. Tout d'abord, $P(T)=0{,}05\\times0{,}95+0{,}95\\times0{,}02=0{,}0665$. La formule de Bayes donne ensuite $P(I\\mid T)=P(I\\cap T)/P(T)=0{,}0475/0{,}0665=95/133\\approx0{,}7142857$, soit $0{,}714$ au millième."
    hints:
      - "Utiliser la formule des probabilités totales pour calculer la probabilité globale d'un test positif."
      - "Diviser ensuite la probabilité de la branche « infecté et positif » par la probabilité totale d'un résultat positif."
  - id: "1re-prob-t4"
    tierTitle: "Défi avancé"
    prompt: "Les événements $A,B,C$ vérifient $P(A)=P(B)=P(C)=1/2$ et sont indépendants deux à deux. Posons $t=P(A\\cap B\\cap C)$. Démontrer que les probabilités des huit atomes déterminés par $A,B,C$ valent alternativement $t$ et $1/4-t$, en déduire l'intervalle exact des valeurs possibles de $t$, puis déterminer précisément quand $A,B,C$ sont mutuellement indépendants. Donner un exemple concret pour $t=1/4$."
    solution: "L'indépendance deux à deux donne $P(A\\cap B)=P(A\\cap C)=P(B\\cap C)=1/4$. Ainsi, $P(A\\cap B\\cap C^c)=1/4-t$, et de même pour les deux autres atomes qui appartiennent à exactement deux événements. En retranchant ces atomes de $P(A)=1/2$, on obtient $P(A\\cap B^c\\cap C^c)=t$ ; par permutation cyclique, les atomes qui appartiennent à un seul événement ont eux aussi une probabilité égale à $t$. Enfin, l'atome extérieur aux trois événements a pour probabilité $1/4-t$. La non-négativité de ces probabilités équivaut à $0\\le t\\le1/4$, et toute valeur de cet intervalle définit une loi de probabilité valide sur les huit atomes. L'indépendance deux à deux étant déjà acquise, l'indépendance mutuelle a lieu exactement lorsque $P(A\\cap B\\cap C)=P(A)P(B)P(C)=1/8$. Pour $t=1/4$, lançons deux pièces équilibrées et prenons $A=$ « la première donne pile », $B=$ « la seconde donne pile » et $C=$ « les deux résultats sont identiques » ; ces événements sont indépendants deux à deux et $P(A\\cap B\\cap C)=1/4$."
    hints:
      - "Partir de $P(A\\cap B)=1/4$ et retrancher la probabilité de l'intersection des trois événements."
      - "Utiliser $P(A)=1/2$ pour retrouver les atomes qui n'appartiennent qu'à un seul événement."
      - "L'indépendance mutuelle impose une condition de produit supplémentaire sur l'intersection des trois événements."
    rubric:
      - "Établit les probabilités des huit atomes : quatre valent $t$ et quatre valent $1/4-t$."
      - "Utilise la non-négativité et la suffisance pour démontrer que l'intervalle exact est $0\\le t\\le1/4$."
      - "Démontre que l'indépendance mutuelle a lieu exactement pour $t=1/8$."
      - "Fournit et vérifie un exemple valide d'événements indépendants deux à deux avec $t=1/4$."
---

# Probabilités conditionnelles et indépendance

Le **conditionnement** permet de réévaluer la probabilité qu'un événement survienne lorsqu'une information partielle est déjà connue.

## 1. Définition et formule de Bayes

Soit $A$ un événement de probabilité non nulle ($P(A) > 0$). La **probabilité conditionnelle** de $B$ sachant $A$ est :

$$P_A(B) = \frac{P(A \cap B)}{P(A)}$$

On en déduit la règle du produit : $P(A \cap B) = P(A) \times P_A(B)$.

## 2. Formule des probabilités totales

Si les événements $A_1, A_2, \dots, A_n$ forment une **partition** de l'univers $\Omega$ (événements incompatibles dont la réunion vaut $\Omega$), alors, pour tout événement $B$ :

$$P(B) = \sum_{i=1}^n P(B \cap A_i) = \sum_{i=1}^n P(A_i) \times P_{A_i}(B)$$

En particulier, pour un événement $A$ et son contraire $\bar{A}$ :

$$P(B) = P(A) P_A(B) + P(\bar{A}) P_{\bar{A}}(B)$$

## 3. Indépendance de deux événements

Deux événements $A$ et $B$ sont **indépendants** si et seulement si :

$$P(A \cap B) = P(A) \times P(B)$$

Cela équivaut à $P_A(B) = P(B)$ (si $P(A) > 0$).
