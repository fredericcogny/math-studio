---
id: 4e-literal-calculus
locale: fr
title: Développer, factoriser et réduire
strand: Nombres et calcul
summary: Utiliser la distributivité pour développer, factoriser et simplifier des expressions algébriques.
objectives:
  - Développer des produits en utilisant la distributivité
  - Réduire des expressions en regroupant les termes semblables
  - Factoriser des expressions simples en identifiant un facteur commun
prerequisites:
  - Opérations sur les nombres relatifs
  - Utilisation élémentaire de variables et de formules
vocabulary:
  - en: expand
    definition: Réécrire un produit de sommes sous forme de somme de termes en appliquant la distributivité.
  - en: factor
    definition: Réécrire une somme sous forme d'un produit en mettant en évidence un facteur commun.
  - en: like terms
    definition: Termes ayant la même partie littérale, que l'on peut regrouper en additionnant leurs coefficients.
flashcards:
  - front: Qu'énonce la propriété de distributivité ?
    back: $a(b+c) = ab + ac$, et plus généralement $a(b+c+d) = ab+ac+ad$.
  - front: Comment développe-t-on $(a+b)(c+d)$ ?
    back: On applique la double distributivité. $(a+b)(c+d) = ac + ad + bc + bd$.
  - front: Que signifie regrouper les termes semblables ?
    back: Combiner les termes qui ont la même partie littérale. Par exemple, $3x + 5x = 8x$ et $2x^2 - x^2 = x^2$.
exercises:
  - id: 4e-lit-t1
    tierTitle: Application directe
    prompt: Développer et simplifier $3(2x - 5)$.
    solution: $3(2x-5) = 3\times 2x + 3\times(-5) = 6x - 15$.
    hints:
      - Multiplier chaque terme entre les parenthèses par 3.
  - id: 4e-lit-t2
    tierTitle: Entraînement standard
    prompt: Développer et réduire $(2x+3)(x-4)$.
    solution: $(2x+3)(x-4) = 2x\times x + 2x\times(-4) + 3\times x + 3\times(-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.
    hints:
      - Appliquer la double distributivité en multipliant chaque terme du premier facteur par chaque terme du second.
      - Regrouper les termes semblables (les termes en $x$) à la fin.
  - id: 4e-lit-t3
    tierTitle: Synthèse du programme officiel
    prompt: Montrer que l'expression $A = (x+3)(x+5) - (x+3)(2x-1)$ peut se factoriser sous la forme $(x+3)(6-x)$. Pour quelle(s) valeur(s) de $x$ a-t-on $A = 0$ ?
    solution: Les deux termes contiennent le facteur commun $(x+3)$. En factorisant on obtient $A = (x+3)[(x+5)-(2x-1)] = (x+3)(x+5-2x+1) = (x+3)(6-x)$. En posant $A=0$, on trouve $x=-3$ ou $x=6$.
    hints:
      - Chercher un facteur qui apparaît dans les deux produits.
      - Le mettre en facteur et simplifier soigneusement le contenu de la parenthèse restante, en faisant attention aux signes.
    rubric:
      - Identifie $(x+3)$ comme facteur commun.
      - Simplifie correctement la parenthèse pour obtenir $(6-x)$.
      - Résout $(x+3)(6-x)=0$ et trouve les deux solutions.
  - id: 4e-lit-t4
    tierTitle: Défi avancé
    prompt: Sans développer entièrement, montrer que $(n+1)^2 - n^2 = 2n+1$ pour tout entier $n$. Utiliser cette identité pour expliquer pourquoi $1+3+5+\cdots+(2k-1) = k^2$ pour tout entier positif $k$.
    solution: >-
      $(n+1)^2 - n^2 = (n+1+n)(n+1-n) = (2n+1)(1) = 2n+1$, en utilisant l'identité $a^2-b^2=(a+b)(a-b)$ avec $a=n+1$, $b=n$. Or $2n+1$ pour $n=0,1,\ldots,k-1$ produit les nombres impairs $1,3,5,\ldots,2k-1$. Donc $\sum_{n=0}^{k-1}(2n+1)=\sum_{n=0}^{k-1}[(n+1)^2-n^2]$. Cette somme est télescopique : $(1^2-0^2)+(2^2-1^2)+\cdots+(k^2-(k-1)^2)=k^2-0=k^2$.
    hints:
      - Utiliser l'identité remarquable $a^2-b^2=(a+b)(a-b)$ avec $a=n+1$ et $b=n$.
      - Écrire chaque nombre impair $2n+1$ sous la forme $(n+1)^2-n^2$ et observer les simplifications en cascade (somme télescopique).
    rubric:
      - Démontre $(n+1)^2-n^2=2n+1$ par la différence de deux carrés ou par développement direct.
      - Fait le lien entre les nombres impairs et les différences de carrés consécutifs.
      - Utilise la somme télescopique pour établir la formule $1+3+5+\cdots+(2k-1)=k^2$.
---
## La distributivité

L'outil fondamental du calcul littéral est la **distributivité** :

$$a(b + c) = ab + ac$$

Cette propriété fonctionne dans les deux sens : de gauche à droite, c'est **développer** ; de droite à gauche, c'est **factoriser**.

Exemple de développement :

$$5(3x - 2) = 15x - 10$$

Attention aux signes : $-2(x - 4) = -2x + 8$ et non $-2x - 8$.

## Développer un double produit

Pour développer $(a+b)(c+d)$, on multiplie chaque terme du premier facteur par chaque terme du second :

$$(a+b)(c+d) = ac + ad + bc + bd$$

Exemple :

$$(x+3)(x-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$$

## Réduire une expression

Les **termes semblables** ont la même partie littérale. Seuls leurs coefficients diffèrent :

$$7x - 3x + 2 = 4x + 2 \qquad 5x^2 + 3x - 2x^2 + x = 3x^2 + 4x$$

On ne peut pas regrouper des termes de natures différentes : $3x + 2x^2$ reste tel quel car $x$ et $x^2$ sont distincts.

## Factoriser

Factoriser est l'opération inverse du développement. On cherche un **facteur commun** à tous les termes :

$$6x + 9 = 3(2x + 3) \qquad 4x^2 - 2x = 2x(2x - 1)$$

Lorsque deux expressions partagent un facteur entre parenthèses :

$$(x+1)(3x) + (x+1)(5) = (x+1)(3x + 5)$$

## Pourquoi ces deux compétences sont essentielles

Développer et factoriser sont complémentaires. Le développement transforme des produits en sommes, ce qui est utile pour simplifier ou comparer des expressions. La factorisation transforme des sommes en produits, ce qui est indispensable pour résoudre des équations (si un produit est nul, alors l'un au moins de ses facteurs est nul).

### Pour aller plus loin

Toute expression de la forme $ax^2 + bx + c$ peut-elle être factorisée sous la forme $(px + q)(rx + s)$ avec des coefficients entiers ? Essayer avec $x^2 + x + 1$.
