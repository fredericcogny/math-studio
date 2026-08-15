---
id: 3e-pythagorean-theorem
locale: fr
title: Pythagore, distances et classification
strand: Géométrie
summary: Calculer des longueurs exactes et utiliser le théorème, sa réciproque et sa contraposée pour démontrer des propriétés géométriques.
objectives:
  - Appliquer le théorème de Pythagore pour calculer une longueur
  - Utiliser la réciproque et la contraposée pour classer des triangles
  - Conserver les formes exactes avec radicaux et donner des valeurs approchées adaptées
  - Calculer des distances en géométrie repérée
prerequisites:
  - Carrés et racines carrées
  - Vocabulaire et constructions relatifs aux triangles
  - Coordonnées et identités algébriques
vocabulary:
  - en: hypotenuse
    definition: Côté opposé à l'angle droit dans un triangle rectangle ; c'est aussi son plus long côté.
  - en: converse
    definition: Énoncé obtenu en échangeant l'hypothèse et la conclusion d'un théorème.
  - en: contrapositive
    definition: Énoncé logiquement équivalent affirmant que, si la conclusion est fausse, alors l'hypothèse est fausse.
  - en: exact value
    definition: Valeur comme $\sqrt{13}$ qui n'a pas été remplacée par un nombre décimal arrondi.
flashcards:
  - front: Énoncer le théorème de Pythagore.
    back: Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.
  - front: Que permet de démontrer la réciproque ?
    back: Si le carré du plus long côté d'un triangle est égal à la somme des carrés des deux autres, alors le triangle est rectangle.
  - front: Comment la contraposée permet-elle de prouver qu'un triangle n'est pas rectangle ?
    back: En montrant que le carré de son plus long côté n'est pas égal à la somme des carrés des deux autres.
  - front: Quelle est la distance entre $(x_1;y_1)$ et $(x_2;y_2)$ ?
    back: $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.
exercises:
  - id: 3e-pythagoras-t1
    tierTitle: Application directe
    prompt: Un triangle rectangle a pour côtés de l'angle droit $6$ cm et $8$ cm. Calculer la longueur de son hypoténuse.
    solution: Si $c$ désigne l'hypoténuse, $c^2=6^2+8^2=36+64=100$. Une longueur étant positive, $c=\sqrt{100}=10$ cm.
    hints:
      - Le côté inconnu est l'hypoténuse ; il faut donc additionner les carrés des deux côtés connus.
  - id: 3e-pythagoras-t2
    tierTitle: Problème type brevet
    prompt: Un parc rectangulaire mesure $120$ m de long et $50$ m de large. Pour aller d'un sommet au sommet opposé, un promeneur peut longer deux côtés consécutifs ou emprunter un chemin rectiligne suivant la diagonale. Calculer la diagonale, puis la distance et le pourcentage économisés grâce à ce chemin.
    solution: La diagonale $d$ vérifie $d^2=120^2+50^2=14\,400+2\,500=16\,900$, donc $d=130$ m. Le trajet le long des côtés mesure $170$ m ; la diagonale économise donc $40$ m. Par rapport au trajet initial de $170$ m, l'économie est $40/170\times100\approx23,5\%$.
    hints:
      - La longueur, la largeur et la diagonale forment un triangle rectangle.
      - Pour le pourcentage, prendre le trajet le long des côtés comme distance de référence.
    expected: 130 m ; 40 m ; environ 23,5 %
    accepted:
      - 130 m, économie de 40 m ou 23,5 %
      - 130 ; 40 ; 23,5 %
  - id: 3e-pythagoras-t3
    tierTitle: Synthèse
    prompt: Dans un repère orthonormé, on considère $A(-1;2)$, $B(5;2)$ et $C(5;7)$. Calculer exactement les trois longueurs, démontrer que $ABC$ est rectangle et calculer son aire.
    solution: $AB=\sqrt{(5+1)^2+(2-2)^2}=6$, $BC=\sqrt{(5-5)^2+(7-2)^2}=5$ et $AC=\sqrt{(5+1)^2+(7-2)^2}=\sqrt{61}$. Comme $AB^2+BC^2=36+25=61=AC^2$, la réciproque du théorème de Pythagore prouve que le triangle est rectangle en $B$. Son aire vaut $AB\times BC/2=15$ unités d'aire.
    hints:
      - Utiliser les différences de coordonnées comme côtés de l'angle droit pour chaque distance.
      - Comparer le carré du plus long côté à la somme des carrés des deux autres.
    rubric:
      - Obtient les longueurs exactes $6$, $5$ et $\sqrt{61}$.
      - Utilise la réciproque avec l'égalité $6^2+5^2=(\sqrt{61})^2$.
      - Identifie l'angle droit en $B$ et calcule l'aire $15$ unités d'aire.
  - id: 3e-pythagoras-t4
    tierTitle: Défi avancé
    prompt: Pour tout entier $n\ge2$, on considère les trois longueurs $n^2-1$, $2n$ et $n^2+1$. Vérifier d'abord qu'elles satisfont l'inégalité triangulaire, puis démontrer qu'elles forment un triangle rectangle. Déterminer exactement quand le triplet pythagoricien obtenu est primitif, c'est-à-dire quand le PGCD des trois longueurs vaut $1$. Lorsqu'il ne l'est pas, démontrer que la division des trois longueurs par leur PGCD produit un triplet primitif.
    solution: Les longueurs sont positives. La plus grande est $n^2+1$, car $n^2+1-2n=(n-1)^2\ge1$ pour $n\ge2$. La seule inégalité triangulaire non automatique est $(n^2-1)+2n>n^2+1$, équivalente à $2n>2$, qui est vérifiée. Ces longueurs forment donc un triangle. De plus, $(n^2-1)^2+(2n)^2=n^4-2n^2+1+4n^2=(n^2+1)^2$ ; la réciproque prouve qu'il est rectangle. Si $n$ est pair, $n^2-1$ et $n^2+1$ sont impairs. Tout diviseur commun aux trois longueurs divise leur différence $2$ ; comme il divise un nombre impair, il ne peut pas valoir $2$, donc le PGCD vaut $1$. Si $n$ est impair, les trois longueurs sont paires, donc leur PGCD est au moins $2$. Tout diviseur commun divise $n^2-1$ et $n^2+1$, donc leur différence $2$ ; le PGCD vaut ainsi exactement $2$. Après division par $2$, un diviseur commun des longueurs réduites donnerait avant division un diviseur commun strictement supérieur à $2$, ce qui est impossible. Le triplet initial est donc primitif exactement lorsque $n$ est pair, et le triplet réduit est primitif lorsque $n$ est impair.
    hints:
      - Développer les carrés des deux côtés de l'angle droit et chercher un carré remarquable.
      - Identifier la plus grande longueur et vérifier que la somme des deux autres lui est supérieure.
      - Distinguer les cas où $n$ est pair ou impair.
      - Un diviseur commun à $n^2-1$ et $n^2+1$ doit diviser leur différence.
    rubric:
      - Identifie la plus grande longueur et vérifie l'inégalité triangulaire pour tout $n\ge2$.
      - Démontre l'identité de Pythagore et applique correctement la réciproque.
      - Montre que le PGCD vaut $1$ lorsque $n$ est pair.
      - Montre que le PGCD vaut exactement $2$ lorsque $n$ est impair.
      - Démontre que la division par $2$ dans le cas impair donne un triplet primitif et traite tous les $n\ge2$.
---
## Le théorème calcule une longueur manquante

Dans un triangle rectangle, on commence par identifier l'hypoténuse : elle est opposée à l'angle droit et constitue le plus long côté. Si les côtés de l'angle droit ont pour longueurs $a,b$ et l'hypoténuse pour longueur $c$, alors $a^2+b^2=c^2$.

Dans un triangle rectangle d'hypoténuse $13$ et dont un côté mesure $5$, l'autre côté vérifie $x^2=13^2-5^2=144$, donc $x=12$. Une longueur est positive ou nulle.

## Valeurs exactes et radicaux

Si $x^2=45$, la longueur positive exacte est $x=\sqrt{45}=3\sqrt5$. Le nombre $3\sqrt5\approx6,71$ est une valeur approchée. On conserve le radical pendant le raisonnement et on n'arrondit que si cela est demandé. La somme $\sqrt2+\sqrt3$ ne se simplifie pas en $\sqrt5$.

## Réciproque : démontrer qu'un triangle est rectangle

Soit $c$ le plus long des trois côtés d'un triangle. Si $c^2=a^2+b^2$, alors le triangle est rectangle, avec l'angle droit opposé à $c$. Pour les côtés $7,24,25$, $25^2=7^2+24^2=625$ ; le triangle est donc rectangle.

## Contraposée et classification

Si le carré du plus long côté n'est pas égal à la somme des carrés des deux autres, le triangle n'est pas rectangle. Pour un triangle existant dont le plus long côté est $c$ :

- si $c^2<a^2+b^2$, il est acutangle ;
- si $c^2=a^2+b^2$, il est rectangle ;
- si $c^2>a^2+b^2$, il est obtusangle.

On vérifie d'abord que la somme des deux plus petits côtés est strictement supérieure au plus grand.

## Distance dans un repère

Dans un repère orthonormé,

$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}.$$

Pour $A(-2;1)$ et $B(4;4)$, $AB=\sqrt{6^2+3^2}=3\sqrt5$.

## Géométrie et modélisation

On trace et code une figure, on marque l'angle droit, on nomme l'hypoténuse, on écrit le théorème avec les lettres, puis on remplace par les valeurs. Si aucun angle droit n'est connu, on n'utilise pas le théorème pour calculer un côté. Si les trois longueurs sont connues, on utilise la réciproque ou la contraposée.

## Choix de méthode et erreurs fréquentes

- L'hypoténuse est définie par l'angle droit, et non par l'apparence inclinée d'un côté.
- Additionner les carrés pour chercher l'hypoténuse ; soustraire le carré du côté connu pour chercher l'autre côté.
- Le théorème porte sur les carrés : en général, $a+b\ne c$.
- Conserver les radicaux exacts jusqu'à l'éventuelle valeur approchée finale.
- Dans une démonstration, comparer les carrés exacts plutôt que des valeurs arrondies à la calculatrice.

## Prolongement : triplets pythagoriciens

L'identité

$$(m^2-n^2)^2+(2mn)^2=(m^2+n^2)^2$$

engendre des triangles rectangles à côtés entiers lorsque $m>n$ sont des entiers strictement positifs.
