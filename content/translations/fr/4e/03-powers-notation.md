---
id: 4e-powers-notation
locale: fr
title: Puissances et règles de calcul
strand: Nombres et calcul
summary: Comprendre la notation en puissances et appliquer les règles fondamentales de calcul avec les exposants.
objectives:
  - Utiliser la notation en puissances pour exprimer une multiplication répétée
  - Appliquer les règles du produit, du quotient et de la puissance d'une puissance
  - Traiter les bases négatives et les cas particuliers des exposants 0 et 1
prerequisites:
  - Multiplication de nombres relatifs
  - Notions de décomposition en facteurs premiers
vocabulary:
  - en: power/exponent
    definition: Dans $a^n$, l'exposant $n$ indique combien de fois la base $a$ apparaît comme facteur.
  - en: base
    definition: Nombre élevé à une puissance dans l'expression $a^n$.
  - en: scientific notation
    definition: Écriture d'un nombre sous la forme $a\times 10^n$ où $1\leq|a|<10$ et $n$ est un entier.
flashcards:
  - front: Que vaut $a^0$ pour tout $a$ non nul ?
    back: $a^0 = 1$, par convention et par la règle du quotient ($a^n \div a^n = a^{n-n} = a^0 = 1$).
  - front: Énoncer la règle du produit de puissances.
    back: $a^m \times a^n = a^{m+n}$, lorsque la base est la même.
  - front: Quelle est la différence entre $(-3)^2$ et $-3^2$ ?
    back: $(-3)^2 = 9$ (la base est $-3$), tandis que $-3^2 = -(3^2) = -9$ (seul 3 est élevé au carré).
exercises:
  - id: 4e-pow-t1
    tierTitle: Application directe
    prompt: Calculer $(-2)^4$.
    solution: $(-2)^4 = (-2)\times(-2)\times(-2)\times(-2) = 4\times 4 = 16$. Quatre facteurs négatifs (nombre pair), donc le résultat est positif.
    hints:
      - Écrire la multiplication répétée et compter les signes négatifs.
  - id: 4e-pow-t2
    tierTitle: Entraînement standard
    prompt: Simplifier $\frac{3^5 \times 3^2}{3^4}$ sous la forme d'une seule puissance de 3, puis calculer la valeur.
    solution: Par la règle du produit, $3^5\times 3^2=3^{7}$. Par la règle du quotient, $\frac{3^7}{3^4}=3^{3}=27$.
    hints:
      - Appliquer d'abord la règle du produit $a^m\times a^n=a^{m+n}$.
      - Puis appliquer la règle du quotient $\frac{a^m}{a^n}=a^{m-n}$.
  - id: 4e-pow-t3
    tierTitle: Synthèse du programme officiel
    prompt: Expliquer pourquoi $(a^m)^n = a^{m\times n}$ en utilisant la définition des puissances. Illustrer avec $(2^3)^2$ et vérifier le résultat.
    solution: $(a^m)^n$ signifie que l'on multiplie $a^m$ par lui-même $n$ fois. Par la règle du produit, cela donne $a^{m+m+\cdots+m}=a^{m\times n}$. Pour $(2^3)^2$ on a $2^3=8$, donc $(2^3)^2=64$. En utilisant la règle, $2^{3\times 2}=2^6=64$. Les deux résultats coïncident.
    hints:
      - Écrire $(a^m)^n$ comme le produit de $n$ copies de $a^m$, puis appliquer la règle du produit.
      - Calculer $(2^3)^2$ des deux manières pour vérifier.
    rubric:
      - Développe correctement $(a^m)^n$ comme $n$ copies de $a^m$ multipliées entre elles.
      - Applique la règle du produit pour obtenir $a^{m\times n}$.
      - Vérifie avec l'exemple numérique $(2^3)^2=64=2^6$.
  - id: 4e-pow-t4
    tierTitle: Défi avancé
    prompt: Trouver le dernier chiffre de $7^{2026}$. Expliquer la méthode et démontrer que la réponse est correcte.
    solution: >-
      Calculons les puissances de 7 modulo 10 : $7^1=7$, $7^2=49$ (dernier chiffre 9), $7^3=343$ (dernier chiffre 3), $7^4=2401$ (dernier chiffre 1), puis le cycle recommence avec la période 4. Puisque $2026=4\times 506+2$, le reste est 2, donc $7^{2026}$ a le même dernier chiffre que $7^2$, soit $9$.
    hints:
      - Calculer $7^1, 7^2, 7^3, 7^4$ modulo 10 et chercher un cycle.
      - Trouver le reste de la division de $2026$ par $4$ pour déterminer la position dans le cycle.
    rubric:
      - Identifie le caractère cyclique des derniers chiffres des puissances de 7.
      - Détermine correctement la période du cycle comme étant 4.
      - Utilise la division euclidienne pour trouver le dernier chiffre de $7^{2026}$.
---
## Qu'est-ce qu'une puissance ?

L'expression $a^n$ (lue « $a$ puissance $n$ ») signifie que l'on multiplie $a$ par lui-même $n$ fois :

$$a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ facteurs}}$$

Le nombre $a$ est la **base** et $n$ est l'**exposant** (ou la **puissance**).

Exemples : $5^3 = 5\times 5\times 5 = 125$ et $(-2)^3 = (-2)\times(-2)\times(-2) = -8$.

## Exposants particuliers

Deux cas méritent une attention particulière :

- $a^1 = a$ pour tout nombre $a$.
- $a^0 = 1$ pour tout $a$ non nul. Cela découle de la règle du quotient : $\frac{a^n}{a^n} = a^{n-n} = a^0$, et tout nombre non nul divisé par lui-même vaut 1.

## Bases négatives : l'importance des parenthèses

Il faut bien distinguer :

- $(-3)^2 = (-3)\times(-3) = 9$ : la base est $-3$.
- $-3^2 = -(3\times 3) = -9$ : seul 3 est élevé au carré ; le signe moins s'applique ensuite.

En général, une base négative élevée à un exposant **pair** donne un résultat positif, et élevée à un exposant **impair** donne un résultat négatif.

## Règles de calcul avec les puissances

Lorsque les bases sont identiques :

| Règle | Formule | Exemple |
|---|---|---|
| Produit | $a^m \times a^n = a^{m+n}$ | $2^3\times 2^5 = 2^8 = 256$ |
| Quotient | $\frac{a^m}{a^n} = a^{m-n}$ (avec $a\neq 0$) | $\frac{5^7}{5^4}=5^3=125$ |
| Puissance d'une puissance | $(a^m)^n = a^{m\times n}$ | $(3^2)^4 = 3^8 = 6561$ |

Ces règles fonctionnent parce que les puissances représentent des multiplications répétées : combiner ou séparer des facteurs conduit naturellement à additionner ou soustraire les exposants.

## Puissances de 10 et notation scientifique

Les puissances de 10 permettent d'exprimer de grands et de petits nombres de manière compacte :

$$10^3 = 1000 \qquad 10^6 = 1\,000\,000$$

La **notation scientifique** écrit un nombre sous la forme $a\times 10^n$ avec $1\leq|a|<10$. Par exemple, $45\,000 = 4{,}5\times 10^4$.

### Pour aller plus loin

$2^{10}$ est-il plus proche de $10^3$ ou de $10^4$ ? Calculer et comparer.
