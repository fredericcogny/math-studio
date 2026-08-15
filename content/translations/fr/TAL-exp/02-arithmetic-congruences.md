---
id: "tal-exp-arithmetic"
locale: "fr"
title: "Arithmétique, congruences et théorèmes de Bézout et de Gauss"
strand: "Mathématiques expertes"
summary: "Divisibilité dans Z, division euclidienne, congruences modulo n, PGCD, théorème de Bézout, théorème de Gauss et équations diophantiennes."
objectives:
  - "Effectuer des calculs de congruences modulo n"
  - "Calculer le PGCD par l'algorithme d'Euclide et trouver les coefficients de Bézout"
  - "Résoudre des équations diophantiennes ax + by = c et appliquer le théorème de Gauss"
prerequisites:
  - "Division euclidienne dans N et propriétés des entiers"
vocabulary:
  - en: "Congruence"
    definition: "Deux entiers a et b sont congrus modulo n (a equiv b [n]) si n divise leur différence (a - b)."
  - en: "Bézout's identity"
    definition: "Deux entiers a et b sont premiers entre eux si et seulement s'il existe u, v dans Z tels que a*u + b*v = 1."
flashcards:
  - front: "Que dit le théorème de Gauss ?"
    back: "Si a divise le produit b * c et si a est premier avec b, alors a divise c."
  - front: "Comment calcule-t-on le PGCD de deux entiers avec l'algorithme d'Euclide ?"
    back: "Par divisions euclidiennes successives jusqu'au dernier reste non nul."
exercises:
  - id: "tal-ari-t1"
    tierTitle: "Application directe"
    prompt: "Déterminer le plus petit résidu positif ou nul de $7^{23}$ modulo $10$."
    solution: "Les puissances de $7$ modulo $10$ forment le cycle $7,9,3,1$, de période $4$. Comme $23\\equiv3\\pmod4$, on a $7^{23}\\equiv7^3\\equiv3\\pmod{10}$."
    hints:
      - "Écrire les premières puissances de $7$ modulo $10$."
  - id: "tal-ari-t2"
    tierTitle: "Entraînement standard"
    prompt: "À l'aide de l'algorithme d'Euclide étendu, déterminer $\\operatorname{PGCD}(252,198)$ et un couple $(u,v)$ tel que $252u+198v=\\operatorname{PGCD}(252,198)$."
    solution: "$252=198+54$, $198=3\\cdot54+36$ et $54=36+18$ ; le PGCD vaut donc $18$. En remontant les égalités, on obtient $18=54-36=4\\cdot54-198=4\\cdot252-5\\cdot198$. Ainsi, $(u,v)=(4,-5)$."
    hints:
      - "Poursuivre les divisions euclidiennes jusqu'au dernier reste non nul."
      - "Remonter les égalités en sens inverse pour exprimer chaque reste."
    rubric:
      - "Mène l'algorithme d'Euclide jusqu'au PGCD $18$."
      - "Remonte correctement les égalités pour obtenir des coefficients de Bézout valides."
      - "Vérifie que le couple annoncé satisfait $252u+198v=18$."
  - id: "tal-ari-t3"
    tierTitle: "Synthèse"
    prompt: "Déterminer toutes les solutions entières de l'équation diophantienne $84x+30y=6$."
    solution: "En divisant par $6$, on obtient $14x+5y=1$. Une solution est $(x_0,y_0)=(-1,3)$. Comme $\\operatorname{PGCD}(14,5)=1$, toutes les solutions sont $x=-1+5k$ et $y=3-14k$, où $k\\in\\mathbb Z$. La substitution donne $14(-1+5k)+5(3-14k)=1$, ce qui confirme cette famille."
    hints:
      - "Commencer par diviser l'équation par le PGCD de ses coefficients."
      - "À partir d'une solution, ajouter un multiple de l'un des coefficients réduits et soustraire un multiple de l'autre."
    rubric:
      - "Réduit correctement l'équation et trouve une solution entière particulière."
      - "Donne une famille complète et valide de solutions à un paramètre."
      - "Vérifie la famille par substitution et justifie son exhaustivité."
  - id: "tal-ari-t4"
    tierTitle: "Défi avancé"
    prompt: "À l'aide du théorème chinois des restes, déterminer et justifier toutes les classes de congruence $x\\pmod{120}$ vérifiant $x^2\\equiv1\\pmod{120}$."
    solution: "Comme $120=8\\cdot3\\cdot5$, avec des facteurs deux à deux premiers entre eux, le théorème chinois des restes ramène le problème aux congruences modulo $8$, $3$ et $5$. Modulo $8$, toute classe impaire a pour carré $1$, ce qui donne quatre choix ; modulo $3$ et modulo $5$, les solutions sont indépendamment $\\pm1$, soit deux choix dans chaque cas. Le théorème chinois des restes donne donc $4\\cdot2\\cdot2=16$ classes. La résolution des systèmes fournit $x\\equiv1,11,19,29,31,41,49,59,61,71,79,89,91,101,109,119\\pmod{120}$, et le calcul direct des carrés vérifie chacune de ces classes."
    hints:
      - "Décomposer $120$ en puissances de nombres premiers deux à deux premiers entre eux."
      - "Résoudre l'équation quadratique modulo $8$, $3$ et $5$, puis combiner les choix à l'aide du théorème chinois des restes."
    rubric:
      - "Ramène correctement la congruence aux congruences modulo $8$, $3$ et $5$."
      - "Trouve respectivement quatre, deux et deux solutions locales et invoque l'unicité du théorème chinois des restes."
      - "Énumère exactement les 16 classes correctes modulo $120$ et justifie l'exhaustivité."
---

# Arithmétique, congruences et théorèmes de Bézout et de Gauss

L'**arithmétique** étudie les propriétés structurelles des entiers relatifs $\mathbb{Z}$.

## 1. Division euclidienne et congruences

Pour tout $a \in \mathbb{Z}$ et tout $b \in \mathbb{N}^*$, il existe un unique couple $(q, r) \in \mathbb{Z} \times \mathbb{N}$ tel que :

$$a = b q + r \quad \text{avec } 0 \le r < b$$

Deux entiers $a$ et $b$ sont **congrus modulo $n$** ($n \ge 2$) si $n$ divise $a - b$, ce que l'on note :

$$a \equiv b \pmod n$$

Les congruences sont compatibles avec l'addition, la soustraction et la multiplication.

## 2. PGCD et algorithme d'Euclide

Le **plus grand commun diviseur** de $a$ et $b$, noté $\operatorname{PGCD}(a, b)$, est calculé par l'**algorithme d'Euclide** : des divisions euclidiennes successives jusqu'au dernier reste non nul.

Deux entiers sont **premiers entre eux** si $\operatorname{PGCD}(a, b) = 1$.

## 3. Théorèmes de Bézout et de Gauss

* **Théorème de Bézout** : $a$ et $b$ sont premiers entre eux si et seulement s'il existe $(u, v) \in \mathbb{Z}^2$ tel que :
  $$a u + b v = 1$$
* **Théorème de Gauss** : si $a$ divise $b c$ et si $\operatorname{PGCD}(a, b) = 1$, alors $a$ divise $c$.
