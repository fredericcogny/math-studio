---
id: 5e-algorithmic-thinking
locale: fr
title: Algorithmes par blocs, formules et boucles
strand: Algorithmique et programmation
summary: Exécuter des suites de blocs, reconnaître entrées et sorties, utiliser des paramètres, évaluer des formules et suivre des boucles inconditionnelles bornées.
objectives:
  - Exécuter et écrire des suites ordonnées de blocs
  - Reconnaître les entrées, les sorties et les paramètres
  - Évaluer une formule à partir des valeurs d'entrée fournies
  - Suivre une boucle inconditionnelle répétée un nombre fixé de fois
prerequisites:
  - Utiliser des coordonnées signées
  - Remplacer les lettres d'une formule par des nombres
  - Reconnaître des déplacements répétés
vocabulary:
  - en: algorithm
    definition: Suite finie, ordonnée et sans ambiguïté d'instructions permettant d'accomplir une tâche.
  - en: input
    definition: Donnée fournie à un algorithme avant ou pendant son exécution.
  - en: output
    definition: Résultat produit ou affiché par un algorithme.
  - en: parameter
    definition: Entrée nommée qui commande le comportement d'un bloc ou d'un algorithme.
  - en: unconditional loop
    definition: Boucle qui répète tout son bloc un nombre fixé de fois sans effectuer de test.
flashcards:
  - front: Pourquoi l'ordre des blocs est-il important ?
    back: Chaque bloc agit sur l'état laissé par les blocs précédents ; changer l'ordre peut donc changer la sortie.
  - front: Quelle est la différence entre une entrée et une sortie ?
    back: Une entrée est fournie à l'algorithme ; une sortie est produite par celui-ci.
  - front: Qu'est-ce qu'un paramètre ?
    back: Une entrée nommée, comme une distance ou un nombre de répétitions, qui modifie le comportement d'un bloc.
  - front: Combien de fois le corps d'une boucle inconditionnelle « répéter 4 fois » est-il exécuté ?
    back: Exactement quatre fois.
exercises:
  - id: 5e-algorithmic-thinking-t1
    tierTitle: Suite de blocs du programme
    prompt: >-
      Un robot part de $(-2;3)$ orienté vers la droite. Exécuter les blocs suivants dans l'ordre : avancer de $5$ unités ; tourner à droite de $90^\circ$ ; avancer de $2$ unités. Donner ses coordonnées finales et son orientation.
    solution: >-
      Le premier déplacement conduit au point $(3;3)$. Après avoir tourné à droite, le robot est orienté vers le bas ; le second déplacement modifie seulement l'ordonnée, qui devient $3-2=1$. Il termine en $(3;1)$, orienté vers le bas.
    hints:
      - Exécuter un bloc à la fois et conserver l'orientation courante.
      - Un déplacement vers le bas soustrait une valeur à l'ordonnée.
    expected: "(3;1), bas"
    accepted:
      - "(3 ; 1), bas"
      - "(3;1) orienté vers le bas"
  - id: 5e-algorithmic-thinking-t2
    tierTitle: Entrées, sorties et évaluation de formules
    prompt: >-
      Un algorithme reçoit comme paramètres d'entrée la longueur $L$ et la largeur $l$ d'un rectangle. Il produit les sorties $P=2(L+l)$ et $A=Ll$. Identifier les entrées et les sorties, puis les évaluer pour $L=4{,}5$ cm et $l=3$ cm.
    solution: >-
      Les paramètres d'entrée sont $L$ et $l$ ; les sorties sont le périmètre $P$ et l'aire $A$. En remplaçant, $P=2(4{,}5+3)=2\times7{,}5=15$ cm et $A=4{,}5\times3=13{,}5\text{ cm}^2$.
    hints:
      - Les entrées sont les valeurs fournies ; les sorties sont les résultats calculés.
      - Remplacer les lettres avant d'effectuer les opérations dans l'ordre de la formule.
    rubric:
      - Reconnaît $L;l$ comme entrées et $P;A$ comme sorties.
      - Calcule correctement $P=15$ cm.
      - Calcule $A=13{,}5\text{ cm}^2$ avec l'unité correcte.
  - id: 5e-algorithmic-thinking-t3
    tierTitle: Synthèse du programme officiel
    prompt: >-
      Un bloc personnalisé `escalier(n, a)` place un robot en $(0;0)$ et répète exactement $n$ fois, sans condition : se déplacer de $a$ unités vers la droite, puis de $1$ unité vers le haut. Pour les entrées $n=4$ et $a=2{,}5$, énumérer l'extrémité après chaque répétition, donner la sortie finale, puis écrire les formules des coordonnées finales et de la distance totale pour tout entier positif $n$.
    solution: >-
      Les extrémités sont $(2{,}5;1)$, $(5;2)$, $(7{,}5;3)$ et $(10;4)$ ; la sortie est donc $(10;4)$. Chaque répétition ajoute horizontalement $a$ et verticalement $1$ ; après $n$ répétitions, les coordonnées sont $(na;n)$. Chaque répétition parcourt $a+1$ unités, donc la distance totale vaut $n(a+1)$. Pour $n=4$ et $a=2{,}5$, elle vaut $4\times3{,}5=14$ unités.
    hints:
      - Une répétition complète contient les deux déplacements.
      - Remplacer l'addition répétée de $a$ par une multiplication par $n$.
      - La distance parcourue n'est égale à aucune des deux coordonnées finales.
    rubric:
      - Énumère les quatre extrémités et obtient $(10;4)$.
      - Reconnaît $n;a$ comme paramètres et le point final comme sortie.
      - Établit les coordonnées $(na;n)$ et la distance $n(a+1)$, puis obtient $14$.
  - id: 5e-algorithmic-thinking-t4
    tierTitle: Défi olympique sur un invariant
    prompt: >-
      Un robot part de $(0;0)$. Chaque instruction est soit $P:(x;y)\leftarrow(x+2;y+1)$, soit $Q:(x;y)\leftarrow(x-1;y+2)$. Démontrer qu'aucune suite n'atteint $(2;8)$. Trouver ensuite une suite la plus courte atteignant $(1;8)$ et démontrer sa minimalité.
    solution: >-
      Posons $I=2x+y$. Au départ, $I=0$. L'instruction $P$ modifie $I$ de $2\times2+1=5$, tandis que $Q$ le modifie de $2(-1)+2=0$. Ainsi, $I$ reste divisible par $5$. En $(2;8)$, $I=12$ ; ce point est donc inaccessible. Pour $(1;8)$, si $p$ et $q$ comptent les deux instructions, alors $2p-q=1$ et $p+2q=8$. La résolution donne $p=2$ et $q=3$ ; toute suite convenable comporte donc cinq instructions. La suite $PPQQQ$ atteint $(1;8)$ et les effectifs imposés prouvent qu'aucune suite plus courte ne convient.
    hints:
      - Calculer la variation de $2x+y$ produite par chaque commande.
      - Pour la minimalité, compter les commandes au lieu de tester tous les ordres.
    rubric:
      - Démontre l'invariant selon lequel $2x+y$ est divisible par $5$.
      - L'utilise pour exclure $(2;8)$.
      - Obtient deux commandes $P$ et trois commandes $Q$, puis donne une suite valable.
      - Utilise les nombres imposés de commandes pour démontrer la minimalité.
---
## Suites ordonnées de blocs

Un algorithme est fini, ordonné et sans ambiguïté. Une suite de blocs doit préciser la situation initiale et chaque action nécessaire. Pour un robot dessinateur, `avancer de 5` avant `tourner à droite de 90 degrés` ne produit pas le même résultat que tourner d'abord.

On exécute une suite bloc par bloc. Il faut noter la position, l'orientation, la valeur affichée ou tout autre état susceptible de modifier le bloc suivant.

## Coordonnées signées

Les coordonnées peuvent être des entiers ou des nombres décimaux signés. Le signe situe un nombre par rapport à zéro ; il ne fait pas partie de sa distance à zéro. La **valeur absolue** est cette distance : $|-2{,}5|=2{,}5$. Dans $(x;y)$, on lit d'abord l'abscisse $x$, qui contrôle la position horizontale, puis l'ordonnée $y$, qui contrôle la position verticale.

## Entrées, sorties et paramètres

Une **entrée** est fournie à l'algorithme, tandis qu'une **sortie** est produite par celui-ci. Dans

```text
demander la longueur L
demander la largeur l
afficher 2 × (L + l)
```

$L$ et $l$ sont des paramètres d'entrée et le périmètre affiché est la sortie. Un paramètre est une entrée nommée qui permet au même bloc général de traiter plusieurs cas : `avancer(distance)` se comporte différemment si `distance` vaut $3$ ou $7$.

## Évaluer des formules

Un algorithme peut calculer une sortie en remplaçant les entrées dans une formule. Il faut conserver les parenthèses et l'ordre des opérations. Pour $L=6$ et $l=2{,}5$,

$$2(L+l)=2(6+2{,}5)=17.$$

Une sortie mathématique doit porter une unité pertinente. Une formule doit indiquer ce que représentent ses entrées et sa sortie, et non produire seulement un nombre sans explication.

## Boucles inconditionnelles du programme

Un bloc de répétition bornée est inconditionnel : il exécute tout son corps le nombre de fois annoncé, sans effectuer de test.

```text
répéter 4 fois
  avancer de 3 pas
  tourner à gauche de 90 degrés
```

Les deux blocs indentés sont exécutés quatre fois. On comprend d'abord une répétition complète, puis on écrit une ligne du tableau d'exécution par répétition. Si un déplacement de $a$ est répété $n$ fois dans la même direction, le déplacement total vaut $na$.

## Vérifications du programme

Vérifier l'état initial, l'ordre des blocs, les valeurs d'entrée, les parenthèses des formules, le nombre de répétitions complètes et la sortie demandée. Tester un petit cas, comme une seule répétition, avant de généraliser.

## Approfondissement uniquement : affectations Python et conditions

Les modifications de variables en style Python et l'exécution conditionnelle sont explicitement réservées à l'approfondissement. Une affectation comme

```python
x = x + 3
```

évalue le membre de droite avec l'ancienne valeur, puis remplace la valeur mémorisée de `x`. Ce n'est pas une égalité algébrique. Une condition telle que `if x < 0:` peut exécuter ou non son corps ; ce n'est donc pas une boucle inconditionnelle. Les cas limites, notamment $x=0$, doivent être testés.

## T4 olympique uniquement : invariants

Un invariant est une propriété conservée par chaque étape autorisée. Pour le démontrer, on vérifie la propriété au départ, on prouve que chaque commande la conserve et on montre qu'un objectif impossible ne la vérifie pas. Cette méthode de preuve et la minimalité par comptage des commandes sont réservées à la tâche olympique T4 ; elles ne sont pas exigées dans T1 à T3.
