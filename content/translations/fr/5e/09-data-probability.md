---
id: 5e-data-probability
locale: fr
title: Représentations de données, moyenne et probabilité
strand: Données et probabilités
summary: Calculer une moyenne simple à partir de données brutes, construire et choisir des diagrammes en barres, circulaires et cartésiens, puis déterminer des probabilités simples.
objectives:
  - Organiser des données brutes et calculer leur moyenne simple
  - Construire des diagrammes en barres, circulaires et des graphiques cartésiens en courbe
  - Choisir une représentation adaptée aux catégories, aux proportions ou à une évolution ordonnée
  - Déterminer des probabilités théoriques et expérimentales dans des situations simples
prerequisites:
  - Additionner et diviser des entiers et des nombres décimaux à écriture finie
  - Comparer fractions, écritures décimales et pourcentages
  - Lire et graduer les axes d'un repère
vocabulary:
  - en: frequency count
    definition: Nombre d'observations correspondant à une valeur ou à une catégorie ; en français scolaire, il s'agit de l'effectif.
  - en: relative frequency
    definition: Quotient de l'effectif d'une catégorie par l'effectif total ; en français scolaire, il s'agit de la fréquence.
  - en: mean
    definition: Pour des données brutes, somme de toutes les valeurs observées divisée par le nombre d'observations.
  - en: circular chart
    definition: Disque partagé en secteurs dont les angles représentent les proportions d'un tout.
  - en: probability
    definition: Nombre compris entre $0$ et $1$ qui mesure les chances de réalisation d'un événement.
flashcards:
  - front: Comment calcule-t-on la moyenne de données brutes ?
    back: On additionne toutes les valeurs observées, puis on divise par le nombre d'observations.
  - front: Quel diagramme convient à des catégories sans ordre ?
    back: Un diagramme en barres ; un diagramme circulaire convient aussi pour insister sur les proportions d'un même tout.
  - front: Comment calcule-t-on l'angle d'un secteur d'un diagramme circulaire ?
    back: Fréquence $\times360^\circ$.
  - front: Quelles sont les probabilités d'un événement impossible et d'un événement certain ?
    back: Respectivement $0$ et $1$.
exercises:
  - id: 5e-data-probability-t1
    tierTitle: Moyenne simple de données brutes
    prompt: Les scores bruts sont $6;8;7;9;5$. Calculer leur moyenne et vérifier qu'elle est vraisemblable.
    solution: La somme vaut $6+8+7+9+5=35$ et il y a $5$ scores ; la moyenne est donc $35/5=7$. Elle est vraisemblable car $7$ est compris entre le minimum $5$ et le maximum $9$.
    hints:
      - Compter les observations, et non les valeurs différentes.
      - Une moyenne est comprise entre la plus petite et la plus grande observation.
  - id: 5e-data-probability-t2
    tierTitle: Construction et choix de diagrammes
    prompt: >-
      Parmi $40$ élèves, $12$ viennent à pied, $16$ en bus, $8$ à vélo et $4$ en voiture. Décrire un diagramme en barres correct et un diagramme circulaire correct en donnant toutes les hauteurs et tous les angles des secteurs. Expliquer quel diagramme compare mieux les effectifs et lequel montre mieux les parts du total.
    solution: >-
      Le diagramme en barres utilise les quatre catégories et des hauteurs $12;16;8;4$ sur un axe des effectifs commençant à $0$. Les angles sont $12/40\times360^\circ=108^\circ$, $16/40\times360^\circ=144^\circ$, $8/40\times360^\circ=72^\circ$ et $4/40\times360^\circ=36^\circ$ ; leur somme vaut $360^\circ$. Les barres facilitent la comparaison des effectifs ; le diagramme circulaire met en évidence la part de chaque catégorie parmi les $40$ élèves.
    hints:
      - Utiliser des barres séparées de même largeur et un axe des effectifs clairement gradué.
      - Multiplier chaque fréquence par $360^\circ$.
    rubric:
      - Indique des hauteurs $12;16;8;4$ avec des étiquettes et une échelle adaptées.
      - Calcule les angles $108^\circ;144^\circ;72^\circ;36^\circ$, dont la somme vaut $360^\circ$.
      - Explique les usages de comparaison des effectifs et de représentation des parts d'un tout.
  - id: 5e-data-probability-t3
    tierTitle: Synthèse du programme officiel
    prompt: >-
      Les températures mesurées du lundi au vendredi sont $8;11;10;15;14$ degrés Celsius. Calculer la moyenne simple, indiquer les cinq points d'un graphique cartésien en courbe et expliquer pourquoi il est pertinent de relier les points successifs. Si l'un des jours de relevé est choisi au hasard de manière équiprobable, calculer la probabilité que sa température soit strictement supérieure à $10$ degrés Celsius.
    solution: >-
      La moyenne vaut $(8+11+10+15+14)/5=58/5=11{,}6$ degrés Celsius. En numérotant les jours de $1$ à $5$, on place $(1;8);(2;11);(3;10);(4;15);(5;14)$ sur des axes nommés et gradués. On relie les points successifs car la variable horizontale est le temps ordonné et l'évolution entre deux jours consécutifs a un sens. Trois valeurs sur cinq dépassent $10$ ; la probabilité vaut donc $3/5=0{,}6$.
    hints:
      - Placer le jour sur l'axe horizontal et la température sur l'axe vertical.
      - Compter les jours favorables parmi cinq jours équiprobables.
    rubric:
      - Calcule correctement la moyenne des données brutes, égale à $11{,}6$.
      - Donne les cinq points cartésiens et justifie leur liaison par l'ordre temporel.
      - Obtient la probabilité $3/5=0{,}6$ à partir de jours équiprobables.
  - id: 5e-data-probability-t4
    tierTitle: Défi olympique d'inférence à rebours
    prompt: >-
      Un jeu produit les scores $1;2;3;4$, d'effectifs entiers strictement positifs inconnus $a;b;c;d$. Il y a eu $20$ parties, la moyenne pondérée était $2{,}55$, la probabilité qu'une partie enregistrée choisie au hasard ait un score au moins égal à $3$ est $1/2$, et le score $3$ est apparu deux fois plus souvent que le score $1$. Reconstituer le tableau et démontrer son unicité.
    solution: >-
      La probabilité donne $c+d=10$, donc $a+b=10$. De plus, $c=2a$ ; ainsi, $b=10-a$ et $d=10-2a$. Le total pondéré vaut $20\times2{,}55=51$, donc $a+2b+3c+4d=51$. En remplaçant, on obtient $a+2(10-a)+3(2a)+4(10-2a)=51$, puis $60-3a=51$ et $a=3$. Ainsi, $(a;b;c;d)=(3;7;6;4)$. Ces entiers strictement positifs vérifient tous les indices. Chaque indice impose les expressions écrites et l'équation linéaire finale a une seule solution, ce qui démontre l'unicité.
    hints:
      - Traduire chaque indice par une équation.
      - La moyenne pondérée détermine le total pondéré des scores.
    rubric:
      - Établit les équations de l'effectif total, de la probabilité, du rapport d'effectifs et de la moyenne pondérée.
      - Déduit $(3;7;6;4)$ sans supposition non justifiée.
      - Vérifie tous les indices et démontre que les équations imposent l'unicité.
---
## Données brutes, effectifs et fréquences

Les données brutes énumèrent chaque observation. Un tableau d'effectifs regroupe les valeurs ou catégories répétées. En vocabulaire scolaire français, un **effectif** est un nombre d'observations et une **fréquence** est la proportion

$$\text{fréquence}=\frac{\text{effectif de la catégorie}}{\text{effectif total}}.$$

Les fréquences sont comprises entre $0$ et $1$ et leur somme vaut $1$, à l'arrondi près. Les pourcentages ont pour somme $100\%$.

## Moyenne simple de données brutes

Pour $n$ observations brutes,

$$\text{moyenne}=\frac{\text{somme de toutes les valeurs observées}}{n}.$$

Pour $5;7;7;9$, la moyenne vaut $28/4=7$. On divise par le nombre d'observations et non par le nombre de valeurs différentes. La moyenne est comprise entre le minimum et le maximum, même si elle ne figure pas nécessairement dans les données.

## Construire et choisir des diagrammes

Un **diagramme en barres** compare des catégories ou des valeurs séparées. Les axes sont nommés, l'échelle est claire, les barres séparées ont la même largeur et leurs hauteurs sont proportionnelles aux effectifs ou aux fréquences. Une échelle tronquée doit être annoncée, car elle peut exagérer les écarts.

Un **diagramme circulaire** représente les parties d'un même tout. Pour une catégorie,

$$\text{angle du secteur}=\text{fréquence}\times360^\circ.$$

La somme des angles vaut $360^\circ$, à l'arrondi près. Le diagramme circulaire met en valeur les parts du tout ; les barres facilitent une comparaison précise des catégories.

Un **graphique cartésien en courbe** montre une évolution ordonnée, souvent dans le temps. On place la variable ordonnée indépendante sur l'axe horizontal, les valeurs sur l'axe vertical, puis les couples de coordonnées. On relie les points successifs seulement si l'ordre et l'évolution entre eux ont un sens. On ne relie pas des catégories sans ordre, comme les couleurs des yeux.

## Probabilités du programme

Une expérience aléatoire possède des issues possibles ; un événement est un ensemble d'issues. Une probabilité est comprise entre $0$ et $1$. Pour des issues équiprobables,

$$P(E)=\frac{\text{nombre d'issues favorables}}{\text{nombre d'issues possibles}}.$$

Pour un dé équilibré, $P(\text{obtenir un nombre pair})=3/6=1/2$. Une probabilité expérimentale est l'effectif observé de l'événement divisé par le nombre d'essais. Lors d'une expérience finie, elle n'est pas nécessairement égale exactement à la probabilité théorique.

> Compter les issues favorables ne convient que si les issues énumérées sont équiprobables. Pour des secteurs inégaux d'une roue, il faut comparer les angles ou les aires, et non compter les couleurs.

## Formulation des pourcentages

Une fréquence ou une probabilité ne peut pas valoir $150\%$ : elle décrit une part d'un tout fixé et ne dépasse pas $100\%$. Dans une comparaison, en revanche, « $150\%$ de la valeur de référence » signifie $1{,}5$ fois cette référence, tandis que « augmenté de $150\%$ » signifie la valeur initiale plus $1{,}5$ fois cette valeur, soit $2{,}5$ fois la valeur initiale. Il faut toujours préciser la référence et distinguer « de » et « augmenté de ».

## Approfondissement uniquement : moyenne pondérée et étendue

L'**étendue**, différence entre maximum et minimum, et la **moyenne pondérée d'un tableau d'effectifs** sont placées plus tard ou traitées comme approfondissement dans cette leçon. Pour des valeurs $x_i$ d'effectifs $n_i$,

$$\overline{x}=\frac{\sum n_i x_i}{\sum n_i}.$$

Ces notions interviennent dans le problème olympique T4, mais T1 à T3 évaluent le programme officiel : moyenne de données brutes, construction et choix de diagrammes, et probabilité simple.
