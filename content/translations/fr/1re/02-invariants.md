---
id: 1re-invariants
locale: fr
title: Démontrer à l'aide de la parité et des invariants
strand: Résolution avancée de problèmes
summary: Apprendre à chercher ce qui reste inchangé lorsqu'un processus semble trop vaste pour être simulé.
objectives:
  - Formaliser la parité
  - Choisir un invariant utile
  - Démontrer une impossibilité
prerequisites:
  - Démonstration algébrique
  - Notions élémentaires d'arithmétique modulaire
vocabulary:
  - en: parity
    definition: Propriété d'un entier d'être pair ou impair.
  - en: invariant
    definition: Information préservée par chaque transformation autorisée.
  - en: coloring argument
    definition: Démonstration qui exploite les classes définies par un coloriage, souvent celui d'un plateau.
flashcards:
  - front: Comment représenter un entier pair quelconque ?
    back: Par 2k, où k est un entier.
  - front: Comment représenter un entier impair quelconque ?
    back: Par 2k+1, où k est un entier.
  - front: Quelle est la première question à se poser pour chercher un invariant ?
    back: Quelle quantité simple évolue de manière prévisible, ou ne change pas du tout, à chaque coup autorisé ?
exercises:
  - id: 1re-invariants-t1
    tierTitle: Application directe
    prompt: Démontrer algébriquement que la somme de deux entiers impairs est paire.
    solution: Écrivons les entiers impairs sous les formes $2a+1$ et $2b+1$. Leur somme est $(2a+1)+(2b+1)=2(a+b+1)$ ; elle est le double d'un entier et est donc paire.
    hints:
      - Représenter deux entiers impairs quelconques à l'aide de deux variables entières.
    rubric:
      - Écrit deux entiers impairs quelconques sous les formes $2a+1$ et $2b+1$.
      - Factorise leur somme comme le double d'un entier.
  - id: 1re-invariants-t2
    tierTitle: Entraînement standard
    prompt: Un plateau comporte $20$ cases blanches et $18$ cases noires. Chaque domino recouvre exactement une case blanche et une case noire. Peut-on recouvrir tout le plateau avec des dominos ? Démontrer la réponse.
    solution: Chaque domino retire une case de chaque couleur ; la différence entre les nombres de cases blanches et noires non couvertes reste donc égale à $20-18=2$. Pour un plateau entièrement couvert, cette différence vaudrait $0$. Un pavage complet par des dominos est donc impossible.
    hints:
      - Suivre la différence entre les nombres de cases des deux couleurs.
      - Se demander quelle serait cette différence après un pavage complet.
    rubric:
      - Reconnaît que la différence entre les nombres de cases des deux couleurs est invariante lorsqu'on place un domino.
      - Compare sa valeur initiale $2$ à la valeur $0$ qu'exigerait un pavage complet.
  - id: 1re-invariants-t3
    tierTitle: Synthèse
    prompt: On retire deux coins opposés d'un échiquier $8\times8$. Démontrer que les $62$ cases restantes ne peuvent pas être pavées par $31$ dominos, chacun recouvrant deux cases ayant un côté commun.
    solution: Colorions le plateau comme un échiquier. Deux coins opposés d'un plateau $8\times8$ ont la même couleur ; après leur retrait, il reste donc $30$ cases de cette couleur et $32$ de l'autre. Tout domino recouvrant deux cases ayant un côté commun couvre une case de chaque couleur. Les $31$ dominos devraient donc recouvrir $31$ cases de chaque couleur, ce qui est impossible avec les effectifs $30$ et $32$.
    hints:
      - Utiliser le coloriage usuel d'un échiquier avec deux couleurs.
      - Déterminer si deux coins opposés sont de même couleur ou de couleurs différentes.
    rubric:
      - Utilise un coloriage en damier et remarque que chaque domino recouvre une case de chaque couleur.
      - Obtient correctement les effectifs restants $30$ et $32$.
      - Utilise ce déséquilibre pour démontrer l'impossibilité.
  - id: 1re-invariants-t4
    tierTitle: Défi avancé
    prompt: Partir du couple d'entiers $(1,0)$. Un coup remplace $(x,y)$ soit par $(x+y,x-y)$, soit par $(x-y,x+y)$. Démontrer qu'aucune suite de coups ne permet d'atteindre $(2026,2027)$.
    solution: Suivons la quantité non linéaire $Q=x^2+y^2$. Après l'un ou l'autre des coups, elle devient $(x+y)^2+(x-y)^2=2(x^2+y^2)=2Q$. Initialement, $Q=1$ ; après $n$ coups, on a donc $Q=2^n$. Pour la cible proposée, $Q=2026^2+2027^2$ est impair, car l'un des carrés est pair et l'autre impair, et il est supérieur à $1$. Or $2^0=1$, tandis que $2^n$ est pair pour tout $n\ge1$. La valeur cible ne peut donc pas être égale à $2^n$, et le couple cible est inaccessible.
    hints:
      - Développer $(x+y)^2+(x-y)^2$.
      - Déterminer la valeur de $x^2+y^2$ après $n$ coups.
      - Utiliser la parité à l'arrivée ; aucun grand calcul numérique n'est nécessaire.
    rubric:
      - Découvre et suit la quantité $x^2+y^2$.
      - Démontre que chaque coup la double, de sorte que sa valeur est $2^n$.
      - Utilise la parité et le fait que la valeur cible est supérieure à $1$ pour montrer qu'elle n'est pas une puissance de $2$.
---
## Pourquoi la simulation n'est parfois pas le bon outil

Dans un processus comportant de nombreux coups possibles, examiner les chemins un à un ne permet pas de démontrer une impossibilité. Un **invariant** rassemble tous les chemins en un seul argument.

Commençons par des candidats simples :

- la parité ;
- le reste modulo un petit entier ;
- la somme ou le produit ;
- une somme pondérée ;
- un coloriage des positions.

## La parité sous forme algébrique

Un entier pair s'écrit $2k$ et un entier impair $2k+1$. Par conséquent, le carré d'un entier impair est

$$(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1,$$

qui est impair. Cette démonstration établit le résultat pour tout entier impair, et pas seulement pour les exemples testés.

## Choisir un invariant à partir des coups

Si chaque coup autorisé modifie un total de $+8$ ou de $-12$, les deux variations sont des multiples de $4$. Le total modulo $4$ est invariant. Un total initial congru à $1$ modulo $4$ ne pourra jamais atteindre une cible congrue à $2$ modulo $4$.

Les coups suggèrent le modulo : il faut chercher un diviseur commun de leurs variations.

> Un invariant utile distingue l'état initial de l'état recherché tout en étant préservé par chaque coup autorisé.

## Un argument de coloriage

Retirons deux coins opposés d'un échiquier. Ces coins ont la même couleur. Chaque domino recouvre une case de chaque couleur, mais l'échiquier amputé comporte des nombres différents de cases des deux couleurs. Le pavage est donc impossible.

### Méthode pour les olympiades

1. Calculer de petits cas, afin de chercher une structure plutôt que des indices.
2. Énumérer les quantités modifiées par un coup.
3. En trouver une qui est préservée ou qui varie de façon monotone.
4. Expliquer explicitement pourquoi chaque coup la préserve.
5. Comparer l'état initial et l'état cible.
