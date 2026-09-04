---
id: 2de-statistics-indicators
locale: fr
title: Indicateurs statistiques, quartiles et écart type
strand: Statistiques
summary: Résumer une série par des indicateurs de position et de dispersion, et choisir entre le couple moyenne et écart type et le couple médiane et quartiles.
objectives:
  - Calculer une moyenne, une médiane et les quartiles d'une série
  - Calculer une étendue, un écart interquartile et un écart type
  - Choisir le couple d'indicateurs adapté et justifier ce choix
prerequisites:
  - Moyenne, médiane et étendue
  - Fréquences et pourcentages
vocabulary:
  - en: quartile
    definition: Valeur de la série telle qu'au moins un quart, ou trois quarts, des données lui soient inférieures ou égales.
  - en: interquartile range
    definition: Différence entre le troisième et le premier quartile, qui mesure la dispersion de la moitié centrale des données.
  - en: standard deviation
    definition: Racine carrée de la moyenne des carrés des écarts à la moyenne, qui mesure la dispersion autour de la moyenne.
flashcards:
  - front: Comment trouve-t-on le premier quartile pour $n$ valeurs rangées dans l'ordre croissant ?
    back: On calcule $\dfrac{n}{4}$ ; si ce n'est pas un entier, on arrondit à l'entier supérieur et on prend la valeur de ce rang. Si c'est un entier, on prend la valeur de ce rang.
  - front: Quel couple d'indicateurs résiste aux valeurs extrêmes ?
    back: La médiane et l'écart interquartile. La moyenne et l'écart type sont tous deux tirés par une valeur extrême.
  - front: Que signifie un écart type nul ?
    back: Toutes les valeurs de la série sont égales à la moyenne, donc la série est constante.
  - front: La moyenne doit-elle être une valeur de la série ?
    back: Non. La moyenne de $2$ et $3$ vaut $2{,}5$, qui n'appartient pas à la série. Il en va de même pour la médiane d'une série d'effectif pair.
exercises:
  - id: 2de-stats-t1
    tierTitle: Application directe
    prompt: Donner la médiane de la série $12$ ; $7$ ; $15$ ; $9$ ; $21$.
    solution: Dans l'ordre croissant la série est $7$ ; $9$ ; $12$ ; $15$ ; $21$. Il y a cinq valeurs, donc la médiane est la troisième, c'est-à-dire $12$.
    hints:
      - Ranger les valeurs avant de lire tout indicateur de position.
  - id: 2de-stats-t2
    tierTitle: Entraînement standard
    prompt: Une série de dix valeurs, déjà rangées dans l'ordre croissant, est $3$ ; $5$ ; $5$ ; $8$ ; $9$ ; $12$ ; $14$ ; $15$ ; $18$ ; $20$. Calculer son écart interquartile.
    solution: Ici $n=10$, donc $\dfrac{n}{4}=2{,}5$, qui s'arrondit au rang $3$, et le premier quartile est $Q_{1}=5$. De plus $\dfrac{3n}{4}=7{,}5$, qui s'arrondit au rang $8$, et le troisième quartile est $Q_{3}=15$. L'écart interquartile vaut $Q_{3}-Q_{1}=15-5=10$.
    hints:
      - Calculer d'abord les rangs, puis lire les valeurs situées à ces rangs.
      - Un rang non entier est toujours arrondi à l'entier supérieur.
  - id: 2de-stats-t3
    tierTitle: Synthèse du programme officiel
    prompt: Deux machines remplissent des bouteilles. La machine A donne les volumes $49$ ; $50$ ; $50$ ; $50$ ; $51$ centilitres, et la machine B donne $45$ ; $48$ ; $50$ ; $52$ ; $55$ centilitres. Calculer la moyenne et l'écart type de chaque série, puis dire quelle machine est la plus fiable et expliquer pourquoi la moyenne seule ne permet pas de répondre.
    solution: >-
      Pour la machine A la somme vaut $49+50+50+50+51=250$, donc la moyenne est $50$. Les écarts à la moyenne sont $-1$ ; $0$ ; $0$ ; $0$ ; $1$, dont la somme des carrés vaut $2$ ; la variance est $\dfrac{2}{5}=0{,}4$ et l'écart type $\sqrt{0{,}4}\approx 0{,}63$. Pour la machine B la somme vaut $45+48+50+52+55=250$, donc la moyenne est aussi $50$. Les écarts sont $-5$ ; $-2$ ; $0$ ; $2$ ; $5$, dont la somme des carrés vaut $25+4+0+4+25=58$ ; la variance est $\dfrac{58}{5}=11{,}6$ et l'écart type $\sqrt{11{,}6}\approx 3{,}41$. Les deux moyennes sont égales, donc la moyenne ne peut pas distinguer les machines, car c'est un indicateur de position et non de dispersion. L'écart type de A est beaucoup plus petit, donc ses volumes restent plus proches de la cible et la machine A est la plus fiable.
    hints:
      - Calculer d'abord les deux moyennes et remarquer qu'elles sont égales.
      - La dispersion se mesure par les écarts à la moyenne, et non par la moyenne elle-même.
    rubric:
      - Calcule correctement les deux moyennes et observe qu'elles coïncident.
      - Calcule les deux écarts types à partir des carrés des écarts.
      - Conclut que la machine A est la plus fiable et explique la différence entre position et dispersion.
  - id: 2de-stats-t4
    tierTitle: Défi avancé
    prompt: Une série de $n$ valeurs a pour moyenne $m$ et pour écart type $\sigma>0$. On ajoute à la série une valeur supplémentaire égale à $m$. Démontrer que la moyenne est inchangée et que le nouvel écart type est strictement inférieur à $\sigma$. Déterminer le facteur exact par lequel la variance est multipliée.
    solution: >-
      Notons les valeurs $x_{1},\dots,x_{n}$, de sorte que $\sum_{i=1}^{n}x_{i}=nm$ et que la variance soit $V=\dfrac{1}{n}\sum_{i=1}^{n}(x_{i}-m)^{2}=\sigma^{2}$. Après ajout de la valeur $m$, la série compte $n+1$ valeurs dont la somme vaut $nm+m=(n+1)m$, donc la nouvelle moyenne est $\dfrac{(n+1)m}{n+1}=m$ et la moyenne est inchangée. Comme la moyenne n'a pas bougé, les écarts des valeurs initiales sont inchangés, et la valeur ajoutée contribue par l'écart $m-m=0$. La nouvelle variance vaut donc $V'=\dfrac{1}{n+1}\left(\sum_{i=1}^{n}(x_{i}-m)^{2}+0\right)=\dfrac{nV}{n+1}$. La variance est ainsi multipliée par $\dfrac{n}{n+1}$, facteur strictement compris entre $0$ et $1$. Comme $V=\sigma^{2}>0$, on obtient $V'<V$, et en prenant les racines carrées, ce qui conserve l'ordre sur les nombres positifs, le nouvel écart type vaut $\sigma'=\sigma\sqrt{\dfrac{n}{n+1}}<\sigma$.
    hints:
      - Montrer d'abord que la moyenne ne bouge pas, ce qui conserve la validité de tous les écarts précédents.
      - Seul le dénominateur de la variance change, puisque le carré de l'écart ajouté est nul.
    rubric:
      - Démontre que la moyenne est inchangée en calculant la nouvelle somme.
      - Explique que les écarts sont inchangés et que le carré de l'écart ajouté est nul.
      - Identifie le facteur n sur n plus un et conclut que l'écart type diminue strictement.
---
## Deux familles d'indicateurs

Une série se résume par un indicateur de **position**, qui dit où se situent les données, et un indicateur de **dispersion**, qui dit à quel point elles sont étalées. L'un sans l'autre induit en erreur : deux séries peuvent avoir la même moyenne et se comporter de façon complètement différente.

Les indicateurs vont par couples.

| Position | Dispersion | Comportement |
| --- | --- | --- |
| moyenne | écart type | utilise toutes les valeurs, sensible aux valeurs extrêmes |
| médiane | écart interquartile | utilise les rangs, résistant aux valeurs extrêmes |

## Moyenne, médiane, quartiles

La **moyenne** de $x_{1},\dots,x_{n}$ est $\bar{x}=\dfrac{x_{1}+\dots+x_{n}}{n}$. Avec des effectifs, elle devient une moyenne pondérée.

La **médiane** partage une série rangée en deux moitiés de même effectif. Les **quartiles** la découpent en quarts. Pour $n$ valeurs rangées dans l'ordre croissant :

- $Q_{1}$ est la valeur de rang $\dfrac{n}{4}$, arrondi à l'entier supérieur si ce n'est pas un entier ;
- $Q_{3}$ est la valeur de rang $\dfrac{3n}{4}$, arrondi de la même façon.

Ranger d'abord n'est pas facultatif. Tout indicateur de position est défini sur la série ordonnée.

## Étendue et écart interquartile

L'**étendue** est la plus grande valeur moins la plus petite. Elle est facile à calculer mais ne dépend que des deux extrêmes, donc une seule valeur inhabituelle la modifie complètement.

L'**écart interquartile** $Q_{3}-Q_{1}$ mesure la dispersion de la moitié centrale des données, ce qui le rend robuste. Avec le minimum, la médiane et le maximum, il fournit le résumé à cinq nombres que l'on représente par un diagramme en boîte.

## L'écart type

La **variance** est la moyenne des carrés des écarts à la moyenne, et l'**écart type** en est la racine carrée :

$$V=\frac{1}{n}\sum_{i=1}^{n}(x_{i}-\bar{x})^{2},\qquad \sigma=\sqrt{V}.$$

Élever au carré rend chaque écart positif et donne plus de poids aux grands écarts ; la racine carrée ramène le résultat dans l'unité des données. Un écart type nul signifie que la série est constante, et un écart type grand signale des valeurs éloignées de la moyenne.

## L'échantillonnage

Deux échantillons prélevés dans une même population donnent rarement la même fréquence. Cette **fluctuation d'échantillonnage** diminue lorsque la taille de l'échantillon augmente, et c'est pourquoi une simulation répétée de nombreuses fois donne une image stable là où un seul petit échantillon ne le fait pas.

### Pour aller plus loin

Ajouter une valeur à une série peut-il laisser la moyenne inchangée tout en augmentant l'écart type ? Trouver un tel exemple, ou démontrer que c'est impossible.
