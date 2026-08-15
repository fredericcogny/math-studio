---
id: 3e-rational-calculations
locale: fr
title: Calculs exacts avec les nombres rationnels
strand: Nombres et calculs
summary: Calculer exactement avec des fractions relatives, respecter les priorités opératoires et valider les résultats dans des problèmes de type brevet.
objectives:
  - Interpréter et comparer des nombres rationnels relatifs
  - Additionner, soustraire, multiplier et diviser des fractions de manière exacte
  - Effectuer des calculs enchaînés en respectant les priorités opératoires
  - Simplifier les résultats et vérifier la vraisemblance de leur signe et de leur ordre de grandeur
  - Modéliser des problèmes contextualisés de type brevet avec des nombres rationnels
prerequisites:
  - Calculer avec des entiers relatifs
  - Reconnaître des fractions égales et des multiples communs
  - Utiliser la décomposition en facteurs premiers pour simplifier des fractions
vocabulary:
  - en: rational number
    definition: Nombre qui peut s'écrire comme quotient de deux entiers, avec un dénominateur non nul.
  - en: common denominator
    definition: Dénominateur partagé qui permet d'additionner, de soustraire ou de comparer des fractions.
  - en: reciprocal
    definition: Pour un nombre non nul, nombre dont le produit avec celui-ci vaut $1$.
  - en: irreducible fraction
    definition: Fraction dont le numérateur et le dénominateur n'ont aucun diviseur commun supérieur à $1$.
  - en: operation priority
    definition: Règle qui détermine l'ordre dans lequel les opérations d'une expression sont effectuées.
flashcards:
  - front: Quand peut-on additionner directement les numérateurs de deux fractions ?
    back: Seulement après avoir écrit les fractions avec un dénominateur commun.
  - front: Comment divise-t-on par une fraction non nulle ?
    back: On multiplie par son inverse.
  - front: Où place-t-on de préférence le signe d'une fraction ?
    back: Devant la fraction, en gardant un dénominateur positif.
  - front: Quelles opérations sont prioritaires dans un calcul sans parenthèses ?
    back: Les multiplications et les divisions sont effectuées avant les additions et les soustractions, de gauche à droite pour un même niveau de priorité.
  - front: Comment une estimation aide-t-elle à vérifier un calcul exact de fractions ?
    back: Elle peut révéler un signe impossible ou un résultat beaucoup trop grand ou trop petit.
exercises:
  - id: 3e-rational-calculations-t1
    tierTitle: Application directe
    prompt: 'Calculer et donner le résultat sous forme irréductible : $-\frac56+\frac79$.'
    solution: 'Le plus petit dénominateur commun est $18$. Ainsi, $-\frac56+\frac79=-\frac{15}{18}+\frac{14}{18}=-\frac1{18}$, qui est irréductible.'
    hints:
      - Utiliser $18$, le plus petit multiple commun de $6$ et de $9$, comme dénominateur.
      - Conserver le signe négatif attaché au premier numérateur.
    expected: "-1/18"
    accepted:
      - "$-\\frac1{18}$"
      - "- 1/18"
  - id: 3e-rational-calculations-t2
    tierTitle: Problème type brevet
    prompt: Une cuve de récupération d'eau de pluie est initialement remplie aux $\frac34$. Pendant une semaine sèche, on utilise un volume égal aux $\frac25$ de la capacité totale de la cuve. La pluie ajoute ensuite un volume égal au $\frac16$ de sa capacité. Quelle fraction de la cuve est alors remplie ? Un débordement est-il possible ? Justifier exactement les deux réponses.
    solution: 'Toutes les fractions se rapportent à la capacité totale. La fraction remplie à la fin vaut $\frac34-\frac25+\frac16=\frac{45}{60}-\frac{24}{60}+\frac{10}{60}=\frac{31}{60}$. Cette fraction est comprise entre $0$ et $1$ : la cuve est donc remplie aux $\frac{31}{60}$ et il n''y a pas de débordement.'
    hints:
      - Écrire chaque variation comme une fraction relative d'un même tout, la capacité de la cuve.
      - Utiliser le dénominateur commun $60$, puis comparer le résultat à $1$.
    rubric:
      - Modélise les variations successives par $\frac34-\frac25+\frac16$.
      - Utilise un dénominateur commun adapté et obtient la fraction irréductible $\frac{31}{60}$.
      - Compare le résultat à $0$ et à $1$, puis conclut qu'aucun débordement n'est possible.
  - id: 3e-rational-calculations-t3
    tierTitle: Synthèse sur les priorités opératoires
    prompt: 'Calculer exactement en détaillant les étapes liées aux priorités, puis vérifier la vraisemblance du résultat : $A=\frac56-\frac6{17}\times\left(\frac34-\left(-\frac23\right)\right)$.'
    solution: 'On commence par les parenthèses : $\frac34-(-\frac23)=\frac34+\frac23=\frac9{12}+\frac8{12}=\frac{17}{12}$. On effectue ensuite la multiplication en simplifiant avant de calculer : $\frac6{17}\times\frac{17}{12}=\frac12$. Enfin, $A=\frac56-\frac12=\frac56-\frac36=\frac13$. Le résultat est vraisemblable, car un nombre positif proche de $0,8$ auquel on soustrait $0,5$ doit rester positif et proche de $0,3$.'
    hints:
      - Calculer les parenthèses avant la multiplication et la soustraction finale.
      - Soustraire un nombre négatif revient à ajouter son opposé.
      - Simplifier les facteurs communs dans le produit avant de multiplier.
    rubric:
      - Calcule exactement les parenthèses et obtient $\frac{17}{12}$.
      - Effectue la multiplication avant la soustraction et la simplifie en $\frac12$.
      - Obtient le résultat irréductible $\frac13$.
      - Utilise les signes ou une estimation décimale pour confirmer la vraisemblance de la réponse.
  - id: 3e-rational-calculations-t4
    tierTitle: Défi olympique sur les fractions
    prompt: 'Déterminer tous les couples d''entiers strictement positifs $(x,y)$ tels que $x\le y$ et $\frac1x+\frac1y=\frac16$. Démontrer que la liste obtenue est complète.'
    solution: 'En multipliant par $6xy$, on obtient $6x+6y=xy$. Après réarrangement, ajoutons $36$ aux deux membres : $xy-6x-6y+36=36$, donc $(x-6)(y-6)=36$. L''équation initiale impose $x>6$ et $y>6$ ; les deux facteurs sont donc positifs. Posons $d=x-6$. Comme $x\le y$, on a $d\le36/d$, donc $d\le6$. Les diviseurs positifs de $36$ inférieurs ou égaux à $6$ sont $1,2,3,4,6$. Ils donnent $(x,y)=(7,42),(8,24),(9,18),(10,15),(12,12)$. Chaque couple vérifie l''équation initiale. Réciproquement, toute solution fournit un couple de diviseurs positifs de $36$, et l''ordre choisi sélectionne exactement les cinq couples écrits : la liste est complète.'
    hints:
      - Éliminer les dénominateurs, puis essayer de faire apparaître un produit en ajoutant une même constante aux deux membres.
      - Développer $(x-6)(y-6)$.
      - Utiliser $x\le y$ pour ne compter qu'une fois chaque couple de diviseurs de $36$.
    rubric:
      - Transforme l'équation de manière équivalente en $(x-6)(y-6)=36$.
      - Justifie que les deux facteurs sont positifs et utilise la condition d'ordre.
      - Trouve exactement les cinq couples $(7,42),(8,24),(9,18),(10,15),(12,12)$.
      - Vérifie les couples et démontre que la liste est complète grâce à tous les couples de diviseurs positifs de $36$.
---
## Nombres rationnels relatifs

Un **nombre rationnel** est un nombre qui peut s'écrire sous la forme

$$\frac ab\qquad\text{avec }a,b\in\mathbb Z\text{ et }b\ne0.$$

Les entiers et les nombres décimaux finis ou périodiques sont rationnels. Par exemple, $-4=-\frac41$, $0,35=\frac7{20}$ et $0,\overline3=\frac13$.

Des fractions égales représentent le même nombre :

$$\frac ab=\frac{ka}{kb}\qquad(k\ne0).$$

On garde le dénominateur positif et on place le signe négatif devant la fraction : $\frac{3}{-5}=-\frac35$. Un rationnel est positif lorsque son numérateur et son dénominateur ont le même signe, et négatif lorsque leurs signes sont différents.

## Comparer et repérer des fractions

On peut comparer des fractions en utilisant un dénominateur commun, des produits en croix lorsque les dénominateurs sont positifs, ou un repère utile comme $0$, $\frac12$ ou $1$.

Par exemple, $-\frac34<-\frac23$, car $-\frac34=-\frac9{12}$ et $-\frac23=-\frac8{12}$. Parmi deux nombres négatifs, celui qui est le plus éloigné de zéro est le plus petit.

## Addition et soustraction

On ne peut réunir que des quantités exprimées avec des parts de même taille. Pour $b,d\ne0$,

$$\frac ab+\frac cd=\frac{ad+bc}{bd},\qquad
\frac ab-\frac cd=\frac{ad-bc}{bd}.$$

L'utilisation du plus petit multiple commun donne souvent des nombres plus simples que le choix immédiat de $bd$.

**Exemple résolu.**

$$-\frac7{12}-\frac5{18}
=-\frac{21}{36}-\frac{10}{36}
=-\frac{31}{36}.$$

Le numérateur $31$ n'a aucun facteur premier commun avec $36$ ; le résultat est donc irréductible. On n'additionne jamais les dénominateurs : $\frac12+\frac13$ n'est pas égal à $\frac25$.

Soustraire un nombre revient à ajouter son opposé :

$$\frac58-\left(-\frac34\right)=\frac58+\frac68=\frac{11}{8}.$$

## Multiplication et division

On multiplie les numérateurs entre eux et les dénominateurs entre eux :

$$\frac ab\times\frac cd=\frac{ac}{bd}.$$

Il est préférable de simplifier les facteurs communs avant d'effectuer les produits :

$$-\frac{14}{15}\times\frac{25}{21}
=-\frac{2\times5}{3\times3}
=-\frac{10}{9}.$$

Pour diviser, on multiplie par l'inverse du diviseur non nul :

$$\frac ab\div\frac cd=\frac ab\times\frac dc
\qquad(c\ne0).$$

Par exemple,

$$-\frac49\div\frac8{15}
=-\frac49\times\frac{15}{8}
=-\frac56.$$

La division par zéro n'est jamais définie. Inverser la première fraction ou inverser les deux fractions modifie le calcul et constitue une erreur.

## Calculs enchaînés et priorités

On applique les priorités habituelles :

1. calculer à l'intérieur des parenthèses ;
2. calculer les puissances, s'il y en a ;
3. effectuer les multiplications et divisions de gauche à droite ;
4. effectuer les additions et soustractions de gauche à droite.

On écrit une transformation justifiée par ligne. Par exemple,

$$
B=\frac23-\frac54\times\left(\frac7{10}-\frac12\right)
=\frac23-\frac54\times\frac15
=\frac23-\frac14
=\frac5{12}.
$$

La soustraction ne peut pas être effectuée avant la multiplication.

## Modéliser une situation

Il faut d'abord identifier le tout représenté par $1$. Des fractions ne peuvent être combinées directement que si elles se rapportent à ce même tout. On attribue ensuite les signes : un gain, un dépôt, une hausse ou une entrée est généralement positif ; une perte, une utilisation, une baisse ou une sortie est généralement négative.

**Méthode brevet.** Un parcours traverse une forêt sur $\frac25$ de sa longueur, des terres agricoles sur $\frac13$, puis une zone urbaine sur le reste. La fraction urbaine vaut

$$1-\frac25-\frac13=\frac{15-6-5}{15}=\frac4{15}.$$

Pour un parcours de $30$ km, la distance urbaine est $30\times\frac4{15}=8$ km. La fraction est sans unité ; sa multiplication par la distance totale produit des kilomètres.

## Simplification et vraisemblance

Une réponse exacte sous forme de fraction doit normalement être irréductible. On divise le numérateur et le dénominateur par leur plus grand diviseur commun, ou on simplifie les facteurs avant un produit. On ne simplifie pas des termes reliés par une addition : dans $\frac{2+6}{6}$, les deux six ne sont pas des facteurs de tout le numérateur.

Avant de valider une réponse, on vérifie :

- le **signe** : un gain ou une quantité restante doit-il être positif ?
- l'**ordre de grandeur** : le produit de deux fractions positives inférieures à $1$ doit être inférieur à chacune d'elles ;
- un **repère** : on remplace les fractions par des valeurs décimales ou des fractions simples proches ;
- le **contexte** : une proportion d'un tout est généralement comprise entre $0$ et $1$ ;
- la **forme** : le dénominateur est-il non nul et la fraction finale est-elle irréductible ?

Par exemple, $\frac{49}{50}\times\frac{21}{20}$ est proche de $1\times1,05$ ; un résultat proche de $1,03$ est donc vraisemblable, contrairement à un résultat proche de $10$.

## Prolongement : transformer une somme en produit

Certaines équations de fractions deviennent des problèmes finis de diviseurs après élimination des dénominateurs. L'identité

$$xy-kx-ky=(x-k)(y-k)-k^2$$

permet de transformer une équation contenant $\frac1x+\frac1y$. Une fois le produit entier fixé, il suffit d'énumérer tous les couples de diviseurs et de démontrer que cette liste est exhaustive.
