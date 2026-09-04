---
id: 2de-number-sets-intervals
locale: fr
title: Ensembles de nombres, intervalles et valeur absolue
strand: Nombres et calculs
summary: Situer un nombre dans la chaîne des ensembles des entiers aux réels, passer des inégalités à la notation par intervalles et lire une valeur absolue comme une distance.
objectives:
  - Classer un nombre dans les ensembles des entiers naturels, relatifs, des rationnels et des réels
  - Passer des inégalités à la droite graduée puis à la notation par intervalles
  - Interpréter une valeur absolue comme une distance et résoudre des conditions simples
prerequisites:
  - Fractions et écriture décimale
  - Comparaison des nombres relatifs
vocabulary:
  - en: interval
    definition: Ensemble de tous les nombres réels situés entre deux bornes, chaque borne étant incluse ou exclue.
  - en: absolute value
    definition: Distance d'un nombre à zéro sur la droite des réels.
  - en: irrational number
    definition: Nombre réel qui ne peut pas s'écrire comme quotient de deux entiers.
flashcards:
  - front: Quelles inclusions relient les ensembles de nombres usuels ?
    back: $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$, et chaque inclusion est stricte.
  - front: Que décrit $|x-a|\leqslant r$ ?
    back: Tous les nombres dont la distance à $a$ est au plus $r$, c'est-à-dire l'intervalle $[a-r \;;\; a+r]$.
  - front: Comment écrire avec un intervalle que $x$ est strictement supérieur à $-3$ et inférieur ou égal à $5$ ?
    back: $-3<x\leqslant 5$, c'est-à-dire $x\in\,]-3 \;;\; 5]$.
  - front: Le nombre $0{,}25$ est-il rationnel ?
    back: Oui. $0{,}25=\frac{1}{4}$ est un quotient de deux entiers, donc il appartient à $\mathbb{Q}$.
exercises:
  - id: 2de-sets-t1
    tierTitle: Application directe
    prompt: Écrire l'ensemble des nombres réels $x$ tels que $-2\leqslant x<7$ à l'aide de la notation par intervalles.
    solution: La borne inférieure est incluse et la borne supérieure est exclue, donc l'ensemble est $[-2 \;;\; 7[$.
    hints:
      - Le crochet se tourne vers les nombres lorsque la borne est incluse.
    expected: "[-2 ; 7["
  - id: 2de-sets-t2
    tierTitle: Entraînement standard
    prompt: Combien d'entiers $x$ vérifient $|2x-1|\leqslant 7$ ?
    solution: $|2x-1|\leqslant 7$ signifie $-7\leqslant 2x-1\leqslant 7$, donc $-6\leqslant 2x\leqslant 8$ et $-3\leqslant x\leqslant 4$. Les entiers de $-3$ à $4$ sont au nombre de $4-(-3)+1=8$.
    hints:
      - Remplacer la valeur absolue par un encadrement.
      - Compter les entiers d'un intervalle avec la règle plus grand moins plus petit plus un.
  - id: 2de-sets-t3
    tierTitle: Synthèse du programme officiel
    prompt: Soit $A=\,]-\infty \;;\; 4]$ et $B=\,]-1 \;;\; +\infty[$. Déterminer $A\cap B$ et $A\cup B$, puis expliquer pourquoi $A\cap B$ ne peut pas s'écrire sous la forme $|x-c|\leqslant r$.
    solution: >-
      Un nombre appartient à $A\cap B$ exactement lorsque $-1<x\leqslant 4$, donc $A\cap B=\,]-1 \;;\; 4]$. Tout réel vérifie au moins l'une des conditions $x\leqslant 4$ et $x>-1$, donc $A\cup B=\mathbb{R}$. Une condition $|x-c|\leqslant r$ décrit toujours $[c-r \;;\; c+r]$, ensemble qui contient ses deux bornes. Comme $A\cap B$ contient $4$ mais pas $-1$, il n'est pas de cette forme.
    hints:
      - Représenter les deux ensembles sur une même droite graduée et lire le chevauchement.
      - Se demander quelles bornes une inégalité de la forme $|x-c|\leqslant r$ contient toujours.
    rubric:
      - Donne l'intersection sous la forme de l'intervalle semi-ouvert de -1 à 4.
      - Justifie que la réunion est la droite des réels tout entière.
      - Explique qu'une inégalité en valeur absolue au sens large produit un intervalle fermé, contrairement à l'intersection.
  - id: 2de-sets-t4
    tierTitle: Défi avancé
    prompt: Soit $x$ un nombre irrationnel et $r$ un nombre rationnel. Démontrer que $r+x$ est irrationnel. En déduire que l'intervalle $]0 \;;\; 1[$ contient une infinité de nombres irrationnels.
    solution: >-
      Supposons $r+x$ rationnel, disons $r+x=\frac{p}{q}$ avec $p$ et $q\neq 0$ entiers. En écrivant $r=\frac{a}{b}$ avec $a$ et $b\neq 0$ entiers, on obtient $x=\frac{p}{q}-\frac{a}{b}=\frac{pb-aq}{qb}$, quotient de deux entiers de dénominateur non nul. Cela contredit l'irrationalité de $x$, donc $r+x$ est irrationnel. Prenons ensuite $x_0=\frac{\sqrt{2}}{2}\approx 0{,}707$, irrationnel et appartenant à $]0 \;;\; 1[$. Pour tout entier $n\geqslant 1$, le nombre $\frac{x_0}{n}$ est irrationnel, car s'il était rationnel, en le multipliant par le rationnel $n$ on rendrait $x_0$ rationnel. Chaque $\frac{x_0}{n}$ appartient à $]0 \;;\; 1[$ et ces valeurs sont deux à deux distinctes, donc l'intervalle contient une infinité d'irrationnels.
    hints:
      - Raisonner par l'absurde et utiliser que les rationnels sont stables par soustraction.
      - Construire une infinité de nombres en divisant un irrationnel de l'intervalle par les entiers successifs.
    rubric:
      - Met en place un raisonnement par l'absurde avec un rationnel écrit comme quotient d'entiers.
      - Conclut que la somme d'un rationnel et d'un irrationnel est irrationnelle.
      - Construit une famille infinie d'irrationnels distincts dans l'intervalle ouvert et justifie l'irrationalité de chacun.
---
## La chaîne des ensembles de nombres

Tout nombre rencontré en Seconde appartient à l'un des quatre ensembles emboîtés suivants.

$$\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$$

- $\mathbb{N}$ contient les entiers naturels $0 \;;\; 1 \;;\; 2 \;;\; \dots$
- $\mathbb{Z}$ ajoute les entiers négatifs.
- $\mathbb{Q}$ contient tous les quotients $\frac{a}{b}$ d'entiers avec $b\neq 0$.
- $\mathbb{R}$ contient toutes les abscisses de la droite graduée, y compris $\sqrt{2}$ et $\pi$, qui sont **irrationnels**.

Chaque inclusion est stricte : $-3\in\mathbb{Z}$ mais $-3\notin\mathbb{N}$, et $\sqrt{2}\in\mathbb{R}$ mais $\sqrt{2}\notin\mathbb{Q}$. Une écriture décimale qui s'arrête, ou qui répète indéfiniment un même bloc, provient toujours d'un nombre rationnel.

## Les intervalles

Une inégalité sur $x$ et un intervalle disent la même chose dans deux alphabets.

| Condition | Intervalle |
| --- | --- |
| $2\leqslant x\leqslant 5$ | $[2 \;;\; 5]$ |
| $2<x<5$ | $]2 \;;\; 5[$ |
| $x\leqslant 5$ | $]-\infty \;;\; 5]$ |
| $x>2$ | $]2 \;;\; +\infty[$ |

Le crochet se tourne vers les nombres lorsque la borne appartient à l'ensemble. L'infini n'est jamais une borne atteinte, donc il porte toujours un crochet ouvert.

Deux intervalles se combinent de deux façons. L'**intersection** $A\cap B$ garde les nombres présents dans les deux ensembles ; la **réunion** $A\cup B$ garde les nombres présents dans au moins un des deux. Représenter les deux ensembles sur une même droite graduée rend la réponse lisible.

## La valeur absolue est une distance

La valeur absolue de $x$ est

$$|x|=\begin{cases}x & \text{si } x\geqslant 0\\ -x & \text{si } x<0\end{cases}$$

La lecture utile est géométrique : $|x|$ est la distance de $x$ à $0$, et $|x-a|$ est la distance de $x$ à $a$. Par conséquent

$$|x-a|\leqslant r \iff a-r\leqslant x\leqslant a+r \iff x\in[a-r \;;\; a+r].$$

L'intervalle $[a-r \;;\; a+r]$ a pour centre $a$ et pour rayon $r$. Lire le centre et le rayon permet de reconvertir tout intervalle fermé en une seule condition avec valeur absolue : $[1 \;;\; 9]$ a pour centre $5$ et pour rayon $4$, donc il est décrit par $|x-5|\leqslant 4$.

### Pour aller plus loin

Quels intervalles peuvent s'écrire $|x-c|<r$, et lesquels ne peuvent pas ? Classer les quatre configurations de crochets et justifier chaque réponse.
