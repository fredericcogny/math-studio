---
id: 5e-functions-representations
locale: fr
title: Fonctions, formules, tableaux et graphiques
strand: Fonctions et représentations
summary: Décrire comment une grandeur dépend d'une autre et passer avec méthode entre description verbale, formule, tableau de valeurs, points dans un repère cartésien et graphique.
objectives:
  - Exprimer qu'une grandeur dépend d'une autre ou est fonction de celle-ci
  - Identifier entrées, sorties et valeurs à partir d'une formule
  - Construire et lire un tableau de valeurs
  - Représenter des valeurs correspondantes par des points dans un repère cartésien
  - Passer entre représentations verbale, tabulaire, algébrique et graphique
  - Reconnaître graphiquement une situation de proportionnalité
prerequisites:
  - Substitution dans une formule
  - Coordonnées cartésiennes
  - Situations de proportionnalité
vocabulary:
  - en: function
    definition: Règle qui associe exactement une sortie à chaque entrée autorisée.
  - en: input
    definition: Valeur choisie que l'on fournit à une fonction.
  - en: output
    definition: Valeur produite par une fonction pour une entrée donnée.
  - en: value table
    definition: Tableau qui place les entrées et les sorties correspondantes dans des colonnes associées.
  - en: Cartesian plane
    definition: Plan muni de deux axes gradués perpendiculaires permettant de repérer des points par leurs coordonnées.
  - en: proportional relationship
    definition: Relation de la forme $y=kx$, dont la représentation graphique est une droite passant par l'origine.
flashcards:
  - front: Que signifie « $y$ est fonction de $x$ » ?
    back: La valeur de $y$ dépend de $x$ et chaque valeur autorisée de $x$ possède exactement une sortie $y$.
  - front: Si $f(x)=3x+2$, combien vaut $f(4)$ ?
    back: $f(4)=3\times4+2=14$.
  - front: Quel point représente l'entrée $5$ et la sortie $12$ ?
    back: Le point $(5,12)$ ; l'entrée est la première coordonnée.
  - front: Comment reconnaître une situation de proportionnalité sur un graphique ?
    back: Les points sont alignés sur une droite qui passe par l'origine.
  - front: Toute droite représente-t-elle une situation de proportionnalité ?
    back: Non. La droite doit aussi passer par $(0,0)$.
exercises:
  - id: 5e-functions-representations-t1
    tierTitle: Application directe
    prompt: Le coût de location de patins pendant $n$ heures est $C(n)=3n+5$ euros. Calculer $C(4)$.
    solution: >-
      L'entrée vaut $4$. On la substitue dans la formule : $C(4)=3\times4+5=17$. La sortie vaut $17$ euros.
    hints:
      - Remplacer $n$ par $4$ dans la formule.
      - Effectuer la multiplication avant l'addition.
  - id: 5e-functions-representations-t2
    tierTitle: Entraînement standard
    prompt: Une fonction est définie par $f(x)=3x+5$. Un tableau de valeurs contient les entrées $0$, $2$ et $6$. Déterminer la sortie correspondant à l'entrée $6$ et donner le point du repère associé.
    solution: $f(6)=3\times6+5=23$. La valeur du tableau est $23$ et le point correspondant est $(6,23)$.
    hints:
      - Utiliser l'entrée comme première coordonnée.
      - Calculer $3\times6+5$.
    expected: 23 et (6,23)
    accepted:
      - 23, (6,23)
      - (6,23) et 23
  - id: 5e-functions-representations-t3
    tierTitle: Synthèse
    prompt: Une location de vélo coûte $4$ euros de frais fixes, plus $3$ euros par heure. On note $h$ le nombre d'heures et $C$ le coût. Écrire $C$ en fonction de $h$, construire un tableau de valeurs pour $h=0,2,5$, donner les trois points à placer et expliquer, à partir de la formule ou du graphique, pourquoi la relation n'est pas proportionnelle.
    solution: La description verbale donne $C(h)=3h+4$. Pour $h=0,2,5$, les sorties sont $4,10,19$ ; les points sont donc $(0,4)$, $(2,10)$ et $(5,19)$. La relation n'est pas proportionnelle, car la formule contient un coût fixe ajouté de $4$ ; graphiquement, sa droite passe par $(0,4)$ au lieu de passer par l'origine.
    hints:
      - Le tarif horaire donne le terme $3h$ ; ajouter ensuite les frais fixes.
      - La représentation graphique d'une situation de proportionnalité passe par $(0,0)$.
    rubric:
      - Écrit la formule $C(h)=3h+4$.
      - Obtient les sorties $4,10,19$ et les points $(0,4),(2,10),(5,19)$.
      - Rejette correctement la proportionnalité grâce au terme fixe ou à l'ordonnée non nulle pour l'entrée zéro.
  - id: 5e-functions-representations-t4
    tierTitle: Défi avancé
    prompt: Un rectangle a des côtés de longueurs entières et un périmètre égal à $40$. Si l'un de ses côtés vaut $n$, son aire est donnée par la fonction $A(n)=n(20-n)$ pour $1\le n\le19$. Déterminer toutes les entrées $n$ pour lesquelles la sortie $A(n)$ est un carré parfait. Démontrer que la liste est complète et décrire la symétrie de ces points sur le graphique.
    solution: On réécrit la sortie sous la forme $A(n)=100-(n-10)^2$. Si $A(n)=m^2$, alors $m^2+(n-10)^2=100$. En utilisant les carrés de $0^2$ à $10^2$, les couples de carrés dont la somme vaut $100$ sont $100+0$, $64+36$, $36+64$ et $0+100$. Le dernier imposerait $n=0$ ou $20$, hors du domaine. Les trois premiers donnent $n-10=0,\pm6,\pm8$, donc $n=2,4,10,16,18$. Les sorties correspondantes sont $36,64,100,64,36$. Le tableau des carrés épuise toutes les valeurs possibles de $m$ et de $|n-10|$ ; la liste est donc complète. Les points forment des paires de même hauteur, symétriques par rapport à la droite verticale $n=10$, et le point $(10,100)$ appartient à cette droite.
    hints:
      - Montrer que $n(20-n)=100-(n-10)^2$.
      - Chercher deux carrés compris entre $0^2$ et $10^2$ dont la somme vaut $100$.
    rubric:
      - Transforme la condition en $m^2+(n-10)^2=100$.
      - Trouve exactement $n=2,4,10,16,18$ et les sorties $36,64,100,64,36$.
      - Prouve que la liste est complète grâce au tableau des carrés et explique la symétrie par rapport à $n=10$.
---
## Des grandeurs qui dépendent les unes des autres

De nombreuses situations font intervenir deux grandeurs variables. La distance parcourue dépend du temps ; le prix des fruits dépend de leur masse ; l'aire d'un carré dépend de la longueur de son côté. On dit qu'une grandeur est **fonction d'une autre** lorsque chaque valeur autorisée de la première détermine exactement une valeur de la seconde.

Si une voiture roule à vitesse constante à $60$ kilomètres par heure, la distance $d$ parcourue après $t$ heures est

$$d=60t.$$

Ici, $t$ est l'**entrée** et $d$ est la **sortie** correspondante. Une même entrée ne peut pas avoir deux sorties pour une règle donnée. En revanche, des entrées différentes peuvent avoir la même sortie : la fonction qui donne la distance d'un point à zéro associe la sortie $3$ aux entrées $3$ et $-3$.

## Les formules comme règles de fonction

Une formule exprime précisément la dépendance. Si un musée facture $6$ euros par billet et ajoute une seule fois $2$ euros de frais fixes en ligne, le coût total de $n$ billets est

$$C(n)=6n+2.$$

La notation $C(n)$ signifie « valeur de $C$ pour l'entrée $n$ ». Elle ne signifie pas $C\times n$. Pour quatre billets,

$$C(4)=6\times4+2=26.$$

Il faut toujours préciser ce que représentent les lettres et les unités. Dans cette situation, un nombre de billets négatif ou non entier n'est pas autorisé, même si la formule permettrait d'effectuer le calcul.

## D'une formule à un tableau de valeurs

Un **tableau de valeurs** organise les couples entrée-sortie. Pour $f(x)=2x+3$ :

| Entrée $x$ | $0$ | $1$ | $3$ | $5$ |
|---:|---:|---:|---:|---:|
| Sortie $f(x)$ | $3$ | $5$ | $9$ | $13$ |

Chaque colonne forme un couple complet. Pour remplir une colonne, on substitue son entrée dans la même formule. Pour lire le tableau dans l'autre sens, on repère la sortie demandée, puis on lit l'entrée de la même colonne.

> Un tableau ne montre généralement que quelques valeurs choisies. Il ne remplace pas la règle et ne démontre pas ce qui se produit pour toutes les entrées absentes du tableau.

## D'un tableau aux points d'un repère cartésien

Chaque colonne du tableau donne un point de coordonnées

$$(\text{entrée},\text{sortie}).$$

Le tableau précédent fournit $(0,3)$, $(1,5)$, $(3,9)$ et $(5,13)$. Dans un repère cartésien, les entrées sont placées sur l'axe horizontal et les sorties sur l'axe vertical. Il faut choisir et indiquer les graduations avant de placer les points.

Lorsque les entrées varient de façon continue, comme le temps, on peut relier les points si la situation autorise toutes les valeurs intermédiaires. Pour un nombre entier de billets, des points isolés sont plus fidèles à la situation : un point situé à mi-chemin entre trois et quatre billets n'a pas de sens.

> Erreur fréquente : inverser les coordonnées. Le couple formé par l'entrée $3$ et la sortie $9$ est $(3,9)$, et non $(9,3)$.

## Lire un graphique

Pour trouver la sortie associée à une entrée, on part de l'axe des entrées, on rejoint verticalement le graphique, puis on lit horizontalement la sortie. Pour trouver les entrées associées à une sortie donnée, on effectue le chemin inverse. Un graphique montre aussi le comportement général : les zones où les sorties augmentent, diminuent, se répètent, atteignent un maximum ou coupent un axe.

Une lecture graphique peut fournir une valeur approchée. Un point calculé à partir d'une formule ou d'un tableau exact peut être exact. La graduation et l'épaisseur du tracé limitent la précision graphique.

## Passer entre quatre représentations

Une même fonction peut être représentée par une phrase, une formule, un tableau ou un graphique.

Supposons qu'un réservoir contienne initialement $5$ litres et reçoive $2$ litres par minute.

- Description verbale : partir de $5$, puis ajouter $2$ pour chaque minute.
- Formule : $V(t)=5+2t$.
- Tableau : pour $t=0,1,2,3$, les sorties sont $5,7,9,11$.
- Graphique : placer $(0,5),(1,7),(2,9),(3,11)$ et les relier, car le temps varie de façon continue.

Pour passer sans erreur d'une représentation à une autre, il faut conserver le sens des grandeurs et leurs unités. La quantité initiale devient la sortie pour l'entrée zéro. La quantité « par minute » indique la variation de la sortie lorsque l'entrée augmente d'une unité.

## Reconnaître graphiquement la proportionnalité

Une situation de proportionnalité possède une formule de la forme

$$y=kx$$

où $k$ est une constante. Sa représentation graphique est une droite qui passe par l'origine $(0,0)$. Les deux conditions sont nécessaires.

- $y=3x$ est une relation proportionnelle : son graphique est une droite passant par l'origine.
- $y=3x+4$ n'est pas une relation proportionnelle : son graphique est une droite, mais elle passe par $(0,4)$.
- Une courbe qui passe par l'origine ne représente pas une situation de proportionnalité.

Pour des données représentées par des points, on vérifie que ceux-ci sont alignés avec l'origine. On peut confirmer en contrôlant que $y/x$ possède la même valeur pour chaque entrée non nulle.

### Pour aller plus loin

Les représentations apportent des informations différentes. Une formule peut démontrer une règle pour chaque entrée autorisée, un tableau permet une vérification systématique et un graphique rend visibles la forme et les symétries. Un raisonnement solide passe de l'une à l'autre au lieu de s'appuyer sur un seul point de vue.
