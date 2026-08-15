---
id: "tal-exp-matrices"
locale: "fr"
title: "Matrices, graphes et chaînes de Markov"
strand: "Mathématiques expertes"
summary: "Calcul matriciel, inverse d'une matrice 2x2, matrice d'adjacence d'un graphe, graphes probabilistes et état stable."
objectives:
  - "Additionner et multiplier des matrices rectangulaires ou carrées"
  - "Calculer le déterminant ad - bc et l'inverse d'une matrice 2x2"
  - "Résoudre des systèmes linéaires AX = B et étudier l'état stable d'une chaîne de Markov"
prerequisites:
  - "Systèmes d'équations linéaires et probabilités"
vocabulary:
  - en: "Stochastic matrix"
    definition: "Matrice carrée dont la somme des coefficients de chaque ligne est égale à 1."
  - en: "Steady state"
    definition: "Vecteur ligne de probabilités P tel que P * M = P."
flashcards:
  - front: "Quelle est la formule de l'inverse d'une matrice 2x2 A = [[a, b], [c, d]] ?"
    back: "A^(-1) = (1 / (ad - bc)) * [[d, -b], [-c, a]] avec det(A) = ad - bc != 0."
  - front: "Le produit de deux matrices A * B est-il toujours égal à B * A ?"
    back: "Non ! Le produit matriciel n'est généralement pas commutatif (A * B != B * A)."
exercises:
  - id: "tal-mat-t1"
    tierTitle: "Application directe"
    prompt: "Calculer $AB$ pour $A=\\begin{pmatrix}1&2\\\\-1&3\\end{pmatrix}$ et $B=\\begin{pmatrix}2&0\\\\4&1\\end{pmatrix}$."
    solution: "En effectuant les produits ligne-colonne, on obtient $AB=\\begin{pmatrix}1\\cdot2+2\\cdot4&1\\cdot0+2\\cdot1\\\\-1\\cdot2+3\\cdot4&-1\\cdot0+3\\cdot1\\end{pmatrix}=\\begin{pmatrix}10&2\\\\10&3\\end{pmatrix}$."
    hints:
      - "Chaque coefficient est le produit scalaire d'une ligne de $A$ et d'une colonne de $B$."
  - id: "tal-mat-t2"
    tierTitle: "Entraînement standard"
    prompt: "Résoudre $\\begin{pmatrix}2&-1\\\\1&3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}1\\\\11\\end{pmatrix}$ par élimination ou à l'aide de l'inverse d'une matrice."
    solution: "Les équations sont $2x-y=1$ et $x+3y=11$. La première donne $y=2x-1$. En remplaçant dans la seconde, on obtient $x+3(2x-1)=11$, donc $7x=14$, $x=2$ et $y=3$."
    hints:
      - "Traduire l'équation matricielle en deux équations scalaires."
      - "Éliminer une inconnue ou calculer l'inverse de la matrice des coefficients."
  - id: "tal-mat-t3"
    tierTitle: "Synthèse"
    prompt: "Une chaîne de Markov à deux états a pour matrice de transition par lignes $M=\\begin{pmatrix}0{,}8&0{,}2\\\\0{,}3&0{,}7\\end{pmatrix}$. Si $p_n$ est la probabilité de l'état 1 et $p_0=1$, établir une relation de récurrence scalaire et une forme explicite de $p_n$, puis calculer $p_4$."
    solution: "Le vecteur ligne d'état est $(p_n,1-p_n)$, donc $p_{n+1}=0{,}8p_n+0{,}3(1-p_n)=0{,}5p_n+0{,}3$. Son point fixe est $0{,}6$ ; ainsi, $p_{n+1}-0{,}6=0{,}5(p_n-0{,}6)$. Par conséquent, $p_n=0{,}6+0{,}4(0{,}5)^n=\\frac35+\\frac25(\\frac12)^n$, et $p_4=\\frac35+\\frac1{40}=\\frac58$."
    hints:
      - "Écrire le vecteur d'état sous la forme $(p_n,1-p_n)$ et le multiplier par $M$."
      - "Soustraire le point fixe pour obtenir une suite géométrique."
    expected: "p_n=3/5+(2/5)(1/2)^n; p_4=5/8"
    accepted:
      - "p_n=0,6+0,4(0,5)^n; p_4=0,625"
  - id: "tal-mat-t4"
    tierTitle: "Défi avancé"
    prompt: "Soient $F_0=0$, $F_1=1$ et $F_{n+1}=F_n+F_{n-1}$ pour $n\\geq1$. Avec $Q=\\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}$, démontrer, pour $n\\geq1$, que $Q^n=\\begin{pmatrix}F_{n+1}&F_n\\\\F_n&F_{n-1}\\end{pmatrix}$. Pour $m,n\\geq1$, comparer $Q^{m+n}=Q^mQ^n$ afin d'établir une identité d'addition pour $F_{m+n}$. L'utiliser pour démontrer que $F_n\\mid F_{kn}$ pour tous $n,k\\geq1$, puis utiliser les déterminants pour démontrer que deux nombres de Fibonacci consécutifs d'indices strictement positifs sont premiers entre eux."
    solution: "Pour $n=1$, la formule s'écrit $Q=\\begin{pmatrix}F_2&F_1\\\\F_1&F_0\\end{pmatrix}$. Si elle est vraie au rang $n$, la multiplication par $Q$ donne $Q^{n+1}=\\begin{pmatrix}F_{n+1}+F_n&F_{n+1}\\\\F_n+F_{n-1}&F_n\\end{pmatrix}=\\begin{pmatrix}F_{n+2}&F_{n+1}\\\\F_{n+1}&F_n\\end{pmatrix}$, ce qui achève la récurrence. La comparaison des coefficients $(1,2)$ dans $Q^{m+n}=Q^mQ^n$ fournit $F_{m+n}=F_{m+1}F_n+F_mF_{n-1}$. Fixons $n\\geq1$. La propriété $F_n\\mid F_{kn}$ se démontre par récurrence sur $k$ : elle est immédiate pour $k=1$, et l'identité d'addition donne $F_{(k+1)n}=F_{kn+1}F_n+F_{kn}F_{n-1}$, somme de deux multiples de $F_n$. Enfin, les déterminants donnent l'identité de Cassini $F_{n+1}F_{n-1}-F_n^2=(-1)^n$. Tout diviseur commun à $F_n$ et $F_{n+1}$ divise le membre de gauche, donc divise $1$ ; ainsi, $\\operatorname{PGCD}(F_n,F_{n+1})=1$."
    hints:
      - "Après la récurrence, comparer un coefficient approprié de $Q^{m+n}=Q^mQ^n$."
      - "Utiliser l'identité d'addition avec $m=kn$ pour la récurrence sur la divisibilité."
      - "Un diviseur commun de deux termes consécutifs doit diviser le déterminant de Cassini."
    rubric:
      - "Vérifie l'initialisation et mène la récurrence à l'aide de la relation de Fibonacci."
      - "Établit une identité d'addition correcte à partir du produit matriciel."
      - "Démontre $F_n\\mid F_{kn}$ pour tout entier strictement positif $k$."
      - "Utilise les déterminants et l'identité de Cassini pour démontrer que deux termes consécutifs sont premiers entre eux."
---

# Matrices, graphes et chaînes de Markov

Les **matrices** permettent de modéliser des systèmes d'équations linéaires, des réseaux (graphes) et l'évolution stochastique de systèmes dynamiques.

## 1. Opérations matricielles

Soient deux matrices $A$ et $B$ de même taille :
* **Addition** : $(A + B)_{i,j} = A_{i,j} + B_{i,j}$
* **Produit par un scalaire** : $(k A)_{i,j} = k A_{i,j}$
* **Produit matriciel** : si $A$ est de taille $(m, p)$ et $B$ de taille $(p, n)$, le produit $C = AB$ est de taille $(m, n)$ avec :
  $$C_{i,j} = \sum_{k=1}^p A_{i,k} B_{k,j}$$
  *Attention* : en général, $AB \neq BA$.

## 2. Inversion d'une matrice 2x2

Pour une matrice carrée $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, le **déterminant** est :

$$\det(A) = a d - b c$$

Si $\det(A) \neq 0$, la matrice $A$ est **inversible** et :

$$A^{-1} = \frac{1}{a d - b c} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

## 3. Graphes et chaînes de Markov

Dans un graphe probabiliste à $n$ états, la **matrice de transition** $M$ contient les probabilités de passage de l'état $i$ à l'état $j$.

L'état probabiliste au rang $k$ vérifie :

$$P_k = P_0 \times M^k$$

Un **état stable** $\pi = (x_1, \dots, x_n)$ est un vecteur de probabilités qui vérifie :

$$\pi M = \pi \quad \text{et} \quad \sum_{i=1}^n x_i = 1$$
