---
id: "1re-conditional-probability"
order: 6
title: "Probabilités Conditionnelles & Indépendance"
level: "1re"
strand: "Probabilités & Statistique"
difficulty: "core"
estimatedMinutes: 30
summary: "Conditionnement par un événement de probabilité non nulle, construction d'arbres pondérés et formule des probabilités totales."
objectives:
  - "Calculer la probabilité conditionnelle P_A(B)"
  - "Construire et exploiter un arbre pondéré"
  - "Appliquer la formule des probabilités totales"
  - "Tester l'indépendance de deux événements"
prerequisites:
  - "Notions de base de probabilité (réunion, intersection, événement contraire)"
vocabulary:
  - en: "Conditional probability"
    fr: "Probabilité conditionnelle"
    definition: "Probabilité que l'événement B se réalise sachant que l'événement A est déjà réalisé, notée P_A(B)."
  - en: "Law of total probability"
    fr: "Formule des probabilités totales"
    definition: "Règle permettant de calculer P(B) en additionnant les probabilités des intersections de B avec les éléments d'une partition."
flashcards:
  - front: "Quelle est la définition de la probabilité conditionnelle P_A(B) ?"
    back: "P_A(B) = P(A inter B) / P(A) avec P(A) > 0"
  - front: "Quand deux événements A et B sont-ils dits indépendants ?"
    back: "Si et seulement si P(A inter B) = P(A) * P(B)"
generator:
  type: "remainder"
  seed: 106
  count: 4
  divisorMin: 2
  divisorMax: 10
  quotientMin: 1
  quotientMax: 5
tieredExercises:
  - id: "1re-prob-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Given $P(A)=0.4$ and $P(A\\cap B)=0.12$, calculate $P(B\\mid A)$."
    solution: "$P(B\\mid A)=P(A\\cap B)/P(A)=0.12/0.4=0.3$."
    hints:
      - "Divide the intersection probability by the probability of the conditioning event."
    assessment:
      kind: "numeric"
      expected: 0.3
  - id: "1re-prob-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "A factory uses machine $A$ for $60\\%$ of its output and machine $B$ for $40\\%$. Their defect rates are respectively $2\\%$ and $5\\%$. Find the probability that a randomly selected item is defective."
    solution: "Let $D$ denote a defect. By the law of total probability, $P(D)=P(A)P(D\\mid A)+P(B)P(D\\mid B)=0.60\\times0.02+0.40\\times0.05=0.012+0.020=0.032$."
    hints:
      - "Split the event according to which machine produced the item."
      - "Add the probabilities of the two disjoint defective branches."
    assessment:
      kind: "numeric"
      expected: 0.032
      tolerance: 0.000001
  - id: "1re-prob-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "A disease affects $5\\%$ of a population. A test is positive for $95\\%$ of infected people and for $2\\%$ of uninfected people. Given a positive result, find the probability that the person is infected. Round to three decimal places."
    solution: "Let $I$ be infection and $T$ a positive test. First, $P(T)=0.05\\times0.95+0.95\\times0.02=0.0665$. Bayes' formula then gives $P(I\\mid T)=P(I\\cap T)/P(T)=0.0475/0.0665=95/133\\approx0.7142857$, hence $0.714$ to three decimal places."
    hints:
      - "Use total probability to find the overall positive-test probability."
      - "Then divide the infected-and-positive branch by the total positive probability."
    assessment:
      kind: "numeric"
      expected: 0.714
      tolerance: 0.0005
  - id: "1re-prob-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Events $A,B,C$ satisfy $P(A)=P(B)=P(C)=1/2$ and are pairwise independent. Set $t=P(A\\cap B\\cap C)$. Prove that the probabilities of the eight atoms determined by $A,B,C$ are alternately $t$ and $1/4-t$, deduce the exact possible range of $t$, and determine precisely when $A,B,C$ are mutually independent. Give a concrete example with $t=1/4$."
    solution: "Pairwise independence gives $P(A\\cap B)=P(A\\cap C)=P(B\\cap C)=1/4$. Hence $P(A\\cap B\\cap C^c)=1/4-t$, and similarly for the other two atoms belonging to exactly two events. Subtracting these atoms from $P(A)=1/2$ gives $P(A\\cap B^c\\cap C^c)=t$, and cyclically the atoms belonging to exactly one event also have probability $t$. Finally the atom outside all three events has probability $1/4-t$. Nonnegativity is equivalent to $0\\le t\\le1/4$, and every value in that interval defines a valid probability distribution on the eight atoms. Since pairwise independence is already known, mutual independence holds exactly when $P(A\\cap B\\cap C)=P(A)P(B)P(C)=1/8$. For $t=1/4$, toss two fair coins and take $A=$ 'first is heads', $B=$ 'second is heads', and $C=$ 'the two results agree'; these events are pairwise independent and $P(A\\cap B\\cap C)=1/4$."
    hints:
      - "Start with $P(A\\cap B)=1/4$ and subtract the triple intersection."
      - "Use $P(A)=1/2$ to recover atoms that belong to only one event."
      - "Mutual independence imposes one additional product condition on the triple intersection."
    assessment:
      kind: "reasoning"
      rubric:
        - "Derives all eight atom probabilities as four copies each of $t$ and $1/4-t$."
        - "Uses nonnegativity and sufficiency to prove the exact range $0\\le t\\le1/4$."
        - "Proves mutual independence holds exactly at $t=1/8$."
        - "Provides and verifies a valid pairwise-independent example with $t=1/4$."
---

# Probabilités Conditionnelles & Indépendance

Le **conditionnement** permet de réévaluer la probabilité qu'un événement survienne lorsqu'une information partielle est déjà connue.

## 1. Définition et formule de Bayes

Soit $A$ un événement de probabilité non nulle ($P(A) > 0$). La **probabilité conditionnelle** de $B$ sachant $A$ est :

$$P_A(B) = \frac{P(A \cap B)}{P(A)}$$

On en déduit la règle du produit : $P(A \cap B) = P(A) \times P_A(B)$.

## 2. Formule des probabilités totales

Si les événements $A_1, A_2, \dots, A_n$ forment une **partition** de l'univers $\Omega$ (événements incompatibles dont la réunion vaut $\Omega$), alors pour tout événement $B$ :

$$P(B) = \sum_{i=1}^n P(B \cap A_i) = \sum_{i=1}^n P(A_i) \times P_{A_i}(B)$$

En particulier pour un événement $A$ et son contraire $\bar{A}$ :

$$P(B) = P(A) P_A(B) + P(\bar{A}) P_{\bar{A}}(B)$$

## 3. Indépendance de deux événements

Deux événements $A$ et $B$ sont **indépendants** si et seulement si :

$$P(A \cap B) = P(A) \times P(B)$$

Cela équivaut à $P_A(B) = P(B)$ (si $P(A) > 0$).
