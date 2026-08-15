---
id: "tal-combinatorics"
locale: "fr"
title: "Combinatoire et dénombrement"
strand: "Probabilités et combinatoire"
summary: "Principes additif et multiplicatif, p-listes, factorielles, arrangements, combinaisons et triangle de Pascal."
objectives:
  - "Dénombrer des ensembles finis à l'aide de p-listes (n^p) et de factorielles (n!)"
  - "Calculer des coefficients binomiaux k parmi n"
  - "Utiliser la formule du binôme de Newton et la symétrie du triangle de Pascal"
prerequisites:
  - "Probabilités conditionnelles et ensembles"
vocabulary:
  - en: "Factorial"
    definition: "Produit des entiers strictement positifs inférieurs ou égaux à n, noté n! = n * (n-1) * ... * 1, avec 0! = 1."
  - en: "Combination"
    definition: "Sous-ensemble non ordonné de k éléments choisis parmi n éléments, noté (k parmi n)."
flashcards:
  - front: "Quelle est la formule générale du coefficient binomial (k parmi n) ?"
    back: "(k parmi n) = n! / (k! * (n - k)!)"
  - front: "Que vaut la somme des coefficients binomiaux sum_{k=0}^n (k parmi n) ?"
    back: "2^n (cardinal de l'ensemble des parties d'un ensemble à n éléments)"
exercises:
  - id: "tal-comb-t1"
    tierTitle: "Application directe"
    prompt: "Calculer $\\binom{8}{3}$."
    solution: "$\\binom{8}{3}=\\frac{8\\cdot7\\cdot6}{3\\cdot2\\cdot1}=56$."
    hints:
      - "Utiliser $\\binom nk=\\frac{n!}{k!(n-k)!}$."
  - id: "tal-comb-t2"
    tierTitle: "Entraînement standard"
    prompt: "Un comité de cinq personnes est choisi parmi 8 femmes et 6 hommes. Combien de comités comprennent exactement 3 femmes et au moins l'un de deux hommes désignés ?"
    solution: "On choisit les 3 femmes de $\\binom83=56$ façons. Les 2 hommes peuvent former n'importe quelle paire, sauf une paire constituée uniquement des 4 hommes non désignés ; il y a donc $\\binom62-\\binom42=15-6=9$ choix. Le nombre total est $56\\cdot9=504$."
    hints:
      - "Choisir les femmes et les hommes indépendamment."
      - "Pour les hommes, soustraire les paires ne contenant aucun des deux hommes désignés."
  - id: "tal-comb-t3"
    tierTitle: "Synthèse"
    prompt: "Déterminer le coefficient de $x^5$ dans $(1+x)^4(1+x)^6$."
    solution: "En multipliant les deux développements binomiaux, le coefficient vaut $\\sum_{k=0}^{4}\\binom4k\\binom6{5-k}=6+60+120+60+6=252$. Comme $(1+x)^4(1+x)^6=(1+x)^{10}$, ce même coefficient vaut $\\binom{10}{5}=252$."
    hints:
      - "Les termes $x^k$ et $x^{5-k}$ se combinent pour produire $x^5$."
      - "Utiliser également $(1+x)^4(1+x)^6=(1+x)^{10}$."
  - id: "tal-comb-t4"
    tierTitle: "Défi avancé"
    prompt: "Pour des entiers $r,s,n\\geq0$, démontrer l'identité de Vandermonde $\\sum_k\\binom rk\\binom s{n-k}=\\binom{r+s}{n}$, avec la convention que les coefficients binomiaux dont les indices sont hors domaine sont nuls. Donner à la fois une preuve par dénombrement et une preuve utilisant les polynômes générateurs."
    solution: "Pour la preuve par dénombrement, partageons un ensemble de $r+s$ éléments en deux groupes de tailles $r$ et $s$. Un sous-ensemble de $n$ éléments contient $k$ éléments du premier groupe et $n-k$ du second, ce qui donne $\\binom rk\\binom s{n-k}$ choix pour chaque $k$ ; en sommant, on compte une et une seule fois chaque sous-ensemble à $n$ éléments, donc la somme vaut $\\binom{r+s}{n}$. Algébriquement, $(1+x)^r(1+x)^s=(1+x)^{r+s}$. Le coefficient de $x^n$ dans le membre de gauche est la somme de convolution, tandis que celui du membre de droite est $\\binom{r+s}{n}$."
    hints:
      - "Partager un ensemble à $r+s$ éléments en deux groupes."
      - "Comparer les coefficients de $x^n$ dans deux polynômes égaux."
    rubric:
      - "La preuve par dénombrement répartit les $n$ éléments choisis selon le nombre d'éléments provenant du premier groupe."
      - "La preuve polynomiale identifie correctement la convolution des coefficients dans $(1+x)^r(1+x)^s$."
      - "Traite tout l'intervalle des indices grâce à la convention d'annulation énoncée."
---

# Combinatoire et dénombrement

Le **dénombrement** consiste à compter le nombre d'éléments ou de configurations d'un ensemble fini sans les énumérer un par un.

## 1. Principes fondamentaux

* **Principe additif** : si un ensemble est la réunion disjointe de $A$ et $B$, alors $\text{Card}(A \cup B) = \text{Card}(A) + \text{Card}(B)$.
* **Principe multiplicatif** : un choix composé de $k$ étapes indépendantes offrant respectivement $n_1, n_2, \dots, n_k$ possibilités comporte $n_1 \times n_2 \times \dots \times n_k$ issues au total.

## 2. p-listes, permutations et arrangements

* **$p$-liste d'un ensemble à $n$ éléments** (avec remise et ordre) : $n^p$
* **Permutations d'un ensemble à $n$ éléments** (ordre sans répétition) :
  $$n! = n \times (n-1) \times \dots \times 1$$
* **Arrangements de $p$ éléments parmi $n$** (ordre sans répétition) :
  $$A_n^p = \frac{n!}{(n-p)!}$$

## 3. Combinaisons et triangle de Pascal

Une **combinaison** de $k$ éléments parmi $n$ est un sous-ensemble non ordonné de $k$ éléments. Son nombre est :

$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

### Propriétés remarquables
* Symétrie : $\binom{n}{k} = \binom{n}{n-k}$
* Relation de Pascal : $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$
* Binôme de Newton : $(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}$
