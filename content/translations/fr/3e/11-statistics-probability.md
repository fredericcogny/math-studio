---
id: 3e-statistics-probability
locale: fr
title: Statistiques et probabilités
strand: Données et probabilités
summary: Résumer des séries et construire les probabilités à partir d'événements, de complémentaires, de fréquences, d'arbres et de dénombrements.
objectives:
  - Calculer une moyenne, une moyenne pondérée, une médiane et une étendue
  - Lire des tableaux de fréquences, des diagrammes en barres et des histogrammes
  - Calculer des probabilités d'événements, de complémentaires et d'expériences composées
prerequisites:
  - Fractions, pourcentages et rangement de nombres
  - Rapports et dénombrement simple
vocabulary:
  - en: weighted mean
    definition: Moyenne dans laquelle chaque valeur est multipliée par son effectif ou son poids.
  - en: median
    definition: Valeur qui partage une série ordonnée en deux groupes contenant chacun au moins la moitié des observations.
  - en: range
    definition: Différence entre la valeur maximale et la valeur minimale.
  - en: frequency
    definition: Proportion des observations correspondant à une valeur ou à une classe.
flashcards:
  - front: Comment calcule-t-on une moyenne pondérée ?
    back: On additionne chaque valeur multipliée par son effectif, puis on divise par l'effectif total.
  - front: Faut-il ordonner les données pour déterminer la médiane ?
    back: Oui ; la position centrale n'a de sens qu'après rangement.
  - front: Comment calcule-t-on la probabilité de l'événement contraire de $A$ ?
    back: On utilise $P(\overline A)=1-P(A)$.
exercises:
  - id: 3e-statistics-t1
    tierTitle: Application directe
    prompt: "On lance un dé équilibré à six faces. Soit $A$ l'événement « obtenir un nombre pair ». Énumérer $A$ et son événement contraire, expliquer l'équiprobabilité des issues et calculer les deux probabilités. Lors de $120$ lancers expérimentaux, $A$ s'est produit $57$ fois ; calculer sa fréquence observée et la comparer à la probabilité théorique."
    solution: "$A=\\{2,4,6\\}$ et son événement contraire est $\\{1,3,5\\}$. Les six faces d'un dé équilibré sont équiprobables, donc $P(A)=3/6=1/2$ et $P(\\overline A)=3/6=1/2=1-P(A)$. La fréquence observée vaut $57/120=0,475$, proche mais différente de la probabilité théorique $0,5$ ; une fréquence expérimentale fluctue."
    hints:
      - "L'événement contraire contient toutes les issues qui ne sont pas dans $A$."
      - "Une fréquence observée est l'effectif des succès divisé par le nombre d'essais."
    rubric:
      - "Énumère $A=\\{2,4,6\\}$ et son événement contraire $\\{1,3,5\\}$."
      - "Utilise l'équiprobabilité pour obtenir les deux probabilités théoriques égales à $1/2$."
      - "Calcule la fréquence observée $57/120=0,475$."
      - "Distingue la fréquence fluctuante $0,475$ de la probabilité $0,5$."
  - id: 3e-statistics-t2
    tierTitle: Niveau Brevet
    prompt: "Une enquête relève des durées de trajet de $10$, $20$, $30$ et $40$ minutes, avec les effectifs respectifs $3$, $5$, $4$ et $2$. Calculer la moyenne au dixième, la médiane et l'étendue. Indiquer la hauteur de chaque barre séparée dans un diagramme en barres des effectifs."
    solution: "L'effectif total vaut $14$ et la somme pondérée vaut $10\\times3+20\\times5+30\\times4+40\\times2=330$ ; la moyenne est donc $330/14\\approx23,6$ minutes. Dans la liste ordonnée, les valeurs de rangs $7$ et $8$ valent toutes deux $20$ ; la médiane est donc $20$ minutes. L'étendue vaut $40-10=30$ minutes. Les barres au-dessus de $10,20,30,40$ ont pour hauteurs $3,5,4,2$."
    hints:
      - "Utiliser les effectifs cumulés pour repérer les rangs $7$ et $8$."
      - "Pour cette série discrète, utiliser des barres séparées dont les hauteurs sont les effectifs."
    rubric:
      - "Calcule la moyenne pondérée, environ égale à $23,6$ minutes."
      - "Utilise les rangs ordonnés pour obtenir la médiane $20$ minutes et l'étendue $30$ minutes."
      - "Donne les hauteurs $3,5,4,2$ du diagramme en barres dans le bon ordre."
  - id: 3e-statistics-t3
    tierTitle: Synthèse
    prompt: "Un sac contient $3$ jetons rouges et $2$ jetons bleus. On tire deux jetons sans remise. Un joueur gagne $2$ points si les couleurs sont identiques et perd $1$ point si elles diffèrent. Calculer la probabilité de chaque score, puis le score moyen par partie."
    solution: "La probabilité d'obtenir deux couleurs identiques est $P(RR)+P(BB)=(3/5)(2/4)+(2/5)(1/4)=6/20+2/20=2/5$. La probabilité de couleurs différentes vaut donc $3/5$. Le score moyen est la moyenne pondérée $2\\times(2/5)+(-1)\\times(3/5)=1/5=0,2$ point."
    hints:
      - "Au second tirage, le dénominateur vaut $4$ puisqu'il n'y a pas de remise."
      - "Utiliser les probabilités comme poids pour calculer le score moyen."
    rubric:
      - "Construit correctement les probabilités sans remise."
      - "Trouve les probabilités $2/5$ pour le score $2$ et $3/5$ pour le score $-1$."
      - "Calcule le score moyen, égal à $1/5$ point."
  - id: 3e-statistics-t4
    tierTitle: Défi avancé
    prompt: "On lance indépendamment $n$ fois un dé équilibré à six faces, avec $n\\ge1$, puis on multiplie tous les résultats. Démontrer que la probabilité que le produit soit divisible par $6$ vaut $1-(1/2)^n-(2/3)^n+(1/3)^n$. En déduire la probabilité exacte pour trois lancers."
    solution: "Le produit est divisible par $6$ exactement lorsqu'au moins un résultat fournit un facteur $2$ et au moins un résultat un facteur $3$. Notons $A$ l'événement « aucun résultat n'est pair » et $B$ l'événement « aucun résultat n'est divisible par $3$ ». Alors $P(A)=(3/6)^n=(1/2)^n$ et $P(B)=(4/6)^n=(2/3)^n$. Dans $A\\cap B$, seules les faces $1$ et $5$ sont autorisées ; ainsi $P(A\\cap B)=(2/6)^n=(1/3)^n$. L'événement recherché est le complémentaire de $A\\cup B$. La formule d'inclusion-exclusion donne $1-P(A)-P(B)+P(A\\cap B)$, soit l'expression annoncée. Pour $n=3$, on obtient $1-1/8-8/27+1/27=(216-27-64+8)/216=133/216$."
    hints:
      - "Un facteur $6$ exige un facteur $2$ et un facteur $3$, qui ne proviennent pas nécessairement du même lancer."
      - "Étudier le complémentaire : aucun résultat pair ou aucun multiple de $3$."
      - "Corriger la double soustraction en ajoutant l'intersection."
    rubric:
      - "Caractérise la divisibilité par $6$ à l'aide des facteurs $2$ et $3$."
      - "Calcule les deux probabilités complémentaires et leur intersection pour tout $n$."
      - "Applique la formule d'inclusion-exclusion pour démontrer l'expression."
      - "Calcule et simplifie la probabilité pour trois lancers en $133/216$."
---
# Statistiques et probabilités

## Indicateurs de position et de dispersion

Pour les valeurs $x_1,\ldots,x_n$, la **moyenne** vaut

$$\bar x=\frac{x_1+\cdots+x_n}{n}.$$

Si la valeur $x_i$ apparaît $c_i$ fois, on utilise la **moyenne pondérée**

$$\bar x=\frac{c_1x_1+\cdots+c_px_p}{c_1+\cdots+c_p}.$$

La **médiane** se détermine dans la série ordonnée. Pour un effectif impair, c'est la valeur centrale. Pour un effectif pair, la convention numérique usuelle consiste à prendre la moyenne des deux valeurs centrales. L'**étendue** est le maximum moins le minimum ; contrairement à la médiane, elle est très sensible à une valeur extrême.

## Exemple statistique résolu

La série $2,4,4,5,10$ a pour moyenne $25/5=5$, pour médiane $4$ et pour étendue $10-2=8$. Ces indicateurs répondent à des questions différentes : la moyenne équilibre toutes les valeurs, la médiane situe le centre et l'étendue décrit la dispersion totale.

## Fréquences, diagrammes en barres et histogrammes

Pour un effectif total $N$, la fréquence d'une catégorie d'effectif $c$ vaut $c/N$. La somme des fréquences vaut $1$, ou $100\%$ lorsqu'elles sont exprimées en pourcentages. Un **diagramme en barres** représente des valeurs distinctes ou des catégories par des barres séparées. Le mot histogramme ne désigne pas ce type de diagramme.

Un histogramme représente des données numériques regroupées en intervalles. Les rectangles sont accolés parce que l'échelle est continue. Lorsque les classes ont la même largeur, les hauteurs peuvent représenter les effectifs ou les fréquences. Si les largeurs diffèrent, c'est l'**aire** du rectangle, et non sa hauteur brute, qui doit représenter la fréquence ; la hauteur adaptée est la densité, égale à la fréquence divisée par la largeur de classe.

## Événements, contraires et probabilité

L'univers énumère toutes les issues possibles. Un **événement** est un ensemble d'issues et son événement contraire $\overline A$ contient exactement les issues qui ne sont pas dans $A$ :

$$P(\overline A)=1-P(A).$$

Lorsque toutes les issues sont équiprobables, $P(A)$ est le nombre d'issues favorables divisé par le nombre total d'issues. Dans une expérience répétée, la fréquence observée de $A$ est son nombre de réalisations divisé par le nombre d'essais. Elle tend à se rapprocher de la probabilité théorique sans nécessairement lui être égale lors d'une expérience donnée.

## Probabilités composées

Un arbre de probabilités décrit des étapes successives. On multiplie les probabilités le long d'une branche et on additionne les probabilités de branches incompatibles favorables. Lors d'un tirage sans remise, les probabilités de la deuxième étape changent.

Par exemple, la probabilité de tirer successivement deux as dans un jeu de $52$ cartes sans remise vaut

$$\frac4{52}\times\frac3{51}=\frac1{221}.$$

Dans des répétitions indépendantes, les probabilités ne changent pas d'une étape à la suivante.

## Choisir une méthode

- Utiliser une somme pondérée pour calculer une moyenne à partir d'un tableau d'effectifs.
- Utiliser les effectifs cumulés pour déterminer une médiane.
- Utiliser un arbre quand l'expérience comporte peu d'étapes successives.
- Utiliser un tableau ou un dénombrement systématique quand toutes les issues équiprobables peuvent être recensées.
- Étudier le complémentaire lorsque l'échec est plus simple à décrire que le succès.

## Erreurs fréquentes

- Diviser une somme pondérée par le nombre de valeurs distinctes au lieu de l'effectif total.
- Chercher une médiane avant d'ordonner les données.
- Confondre effectif et fréquence.
- Additionner les probabilités le long d'une branche au lieu de les multiplier.
- Considérer des tirages sans remise comme indépendants.
- Compter deux fois des cas qui se recouvrent sans correction par inclusion-exclusion.

## Prolongement : simulation et fréquence à long terme

Une simulation utilise des expériences aléatoires pour estimer une probabilité. La fréquence observée fluctue, mais elle se stabilise généralement près de la probabilité théorique quand le nombre d'essais augmente. Une simulation appuie une conjecture ; un dénombrement exact ou un raisonnement probabiliste explique pourquoi la valeur est correcte.
