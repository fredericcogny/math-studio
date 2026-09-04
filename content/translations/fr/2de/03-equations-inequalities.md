---
id: 2de-equations-inequalities
locale: fr
title: Équations, inéquations et tableaux de signes
strand: Algèbre
summary: Choisir entre développer et factoriser, résoudre équations produit et quotient sur leur domaine, et lire les solutions d'une inéquation dans un tableau de signes.
objectives:
  - Résoudre une équation du premier degré et une équation produit
  - Résoudre une inéquation du premier degré et donner la réponse sous forme d'intervalle
  - Construire le tableau de signes d'un produit ou d'un quotient de facteurs affines
prerequisites:
  - Développement et factorisation avec les identités remarquables
  - Notation par intervalles
vocabulary:
  - en: product equation
    definition: Équation affirmant qu'un produit est nul, résolue en annulant chaque facteur.
  - en: sign table
    definition: Tableau donnant le signe de chaque facteur et de l'expression entière sur la droite des réels.
  - en: forbidden value
    definition: Valeur de l'inconnue qui annule un dénominateur et qui est donc exclue du domaine.
flashcards:
  - front: Quand un produit de deux nombres est-il nul ?
    back: Exactement lorsque l'un au moins des facteurs est nul. C'est pourquoi $A\times B=0$ se sépare en $A=0$ ou $B=0$.
  - front: Que devient une inégalité lorsqu'on multiplie par un nombre négatif ?
    back: Le sens de l'inégalité change. En multipliant $-2<3$ par $-1$ on obtient $2>-3$.
  - front: Pourquoi ne peut-on pas multiplier les deux membres d'une inéquation par $x-2$ ?
    back: Le signe de $x-2$ est inconnu, donc le sens de l'inéquation est inconnu. Il faut tout ramener d'un même côté et utiliser un tableau de signes.
  - front: Quelle est la première étape pour une équation avec l'inconnue au dénominateur ?
    back: Donner les valeurs interdites qui annulent le dénominateur, puis résoudre sur le domaine restant.
exercises:
  - id: 2de-eqineq-t1
    tierTitle: Application directe
    prompt: Résoudre $5x-3=2x+9$.
    solution: En retirant $2x$ des deux membres on obtient $3x-3=9$, puis $3x=12$, donc $x=4$.
    hints:
      - Regrouper les termes en $x$ d'un côté et les constantes de l'autre.
  - id: 2de-eqineq-t2
    tierTitle: Entraînement standard
    prompt: Résoudre $-3x+5\leqslant 11$ et donner le plus petit entier appartenant à l'ensemble des solutions.
    solution: En retirant $5$ on obtient $-3x\leqslant 6$. La division par $-3$ change le sens, donc $x\geqslant -2$ et l'ensemble des solutions est $[-2 \;;\; +\infty[$. Le plus petit entier qui y appartient est $-2$.
    hints:
      - Isoler d'abord le terme en $x$.
      - Diviser par un nombre négatif change le sens de l'inégalité.
  - id: 2de-eqineq-t3
    tierTitle: Synthèse du programme officiel
    prompt: Soit $P(x)=(2x-6)(x+4)$. Résoudre $P(x)=0$, construire le tableau de signes de $P$, puis en déduire l'ensemble des solutions de $P(x)<0$. Expliquer ensuite ce qui change si l'expression devient $\dfrac{2x-6}{x+4}$.
    solution: >-
      Le produit est nul lorsque $2x-6=0$ ou $x+4=0$, c'est-à-dire $x=3$ ou $x=-4$. Le facteur $2x-6$ est négatif avant $3$ et positif après ; le facteur $x+4$ est négatif avant $-4$ et positif après. En multipliant les signes, $P(x)>0$ sur $]-\infty \;;\; -4[$, $P(x)<0$ sur $]-4 \;;\; 3[$ et $P(x)>0$ sur $]3 \;;\; +\infty[$. Donc $P(x)<0$ a pour ensemble de solutions $]-4 \;;\; 3[$. Pour le quotient, le tableau de signes est identique, car un quotient et un produit des deux mêmes facteurs ont toujours le même signe, mais $x=-4$ devient une valeur interdite, donc le quotient n'y est pas défini et $-4$ est exclu du domaine au lieu d'être un zéro.
    hints:
      - Chercher le zéro de chaque facteur affine avant de tracer le tableau.
      - Un quotient a le même signe que le produit correspondant, mais son dénominateur ne peut pas s'annuler.
    rubric:
      - Trouve les deux racines et les ordonne sur la droite des réels.
      - Construit un tableau de signes correct avec une ligne par facteur et une ligne pour l'expression.
      - Donne l'ensemble des solutions sous forme d'intervalle ouvert et explique la valeur interdite pour le quotient.
  - id: 2de-eqineq-t4
    tierTitle: Défi avancé
    prompt: Résoudre complètement $\dfrac{x+1}{x-2}\geqslant 1$ et expliquer pourquoi multiplier les deux membres par $x-2$ n'est pas une étape valide.
    solution: >-
      La valeur $x=2$ est interdite. Sur le reste de la droite, on retire $1$ aux deux membres et on met tout sur un même dénominateur, $\dfrac{x+1}{x-2}-1=\dfrac{(x+1)-(x-2)}{x-2}=\dfrac{3}{x-2}$. L'inéquation devient $\dfrac{3}{x-2}\geqslant 0$. Comme le numérateur $3$ est positif, le quotient est positif ou nul exactement lorsque $x-2>0$, et il ne s'annule jamais. L'ensemble des solutions est donc $]2 \;;\; +\infty[$. Multiplier les deux membres par $x-2$ n'est pas valide car le signe de $x-2$ dépend de $x$ ; pour $x<2$ la multiplication change le sens de l'inégalité, et une seule multiplication ne peut donc pas traiter les deux côtés de $2$ à la fois. La vérification avec $x=0$ le confirme, car $\dfrac{0+1}{0-2}=-0{,}5$, qui n'est pas supérieur ou égal à $1$.
    hints:
      - Tout ramener d'un même côté sur un dénominateur commun plutôt que de faire un produit en croix.
      - Tester une valeur de chaque côté de la valeur interdite pour confirmer la conclusion.
    rubric:
      - Donne la valeur interdite et travaille sur le bon domaine.
      - Ramène l'inéquation à un seul quotient et lit correctement son signe.
      - Explique qu'une multiplication par une expression de signe inconnu n'est pas valide, avec un contre-exemple ou une disjonction de cas.
---
## Développer ou factoriser, à bon escient

Une expression algébrique possède plusieurs écritures égales, et chaque écriture répond à une question différente.

- La forme **développée** $x^{2}-x-6$ permet de calculer facilement une valeur.
- La forme **factorisée** $(x-3)(x+2)$ rend les zéros visibles.

Choisir la forme est la première décision de tout exercice. Pour chercher des zéros ou des signes, il faut factoriser. Les trois identités remarquables font le travail :

$$(a+b)^{2}=a^{2}+2ab+b^{2},\qquad (a-b)^{2}=a^{2}-2ab+b^{2},\qquad (a-b)(a+b)=a^{2}-b^{2}.$$

## Les équations produit

Un produit est nul exactement lorsque l'un de ses facteurs est nul :

$$A\times B=0\iff A=0 \text{ ou } B=0.$$

Ainsi $(2x-6)(x+4)=0$ donne $x=3$ ou $x=-4$. Cette règle n'a aucun équivalent pour les autres valeurs : de $A\times B=12$ on ne peut rien conclure sur $A$ seul.

## Les valeurs interdites

Une expression comme $\dfrac{2x-6}{x+4}$ n'est définie que si $x+4\neq 0$. La valeur $x=-4$ est une **valeur interdite**, et le domaine est $]-\infty \;;\; -4[\cup\,]-4 \;;\; +\infty[$. Donner les valeurs interdites avant de résoudre évite une réponse qui n'existe pas.

## Inéquations et tableaux de signes

Ajouter le même nombre aux deux membres, ou multiplier par un nombre **positif**, conserve le sens d'une inégalité. Multiplier par un nombre **négatif** l'inverse.

Dès que l'on dépasse une seule expression affine, la méthode fiable est le **tableau de signes**. Pour résoudre $(2x-6)(x+4)<0$ :

1. Chercher le zéro de chaque facteur : $x=3$ et $x=-4$.
2. Les ordonner sur la droite des réels et donner une ligne à chaque facteur.
3. Remplir chaque ligne avec le signe d'une expression affine, qui change une seule fois, en son zéro.
4. Multiplier colonne par colonne.

| $x$ | $-\infty$ | | $-4$ | | $3$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $2x-6$ | | $-$ | | $-$ | $0$ | $+$ | |
| $x+4$ | | $-$ | $0$ | $+$ | | $+$ | |
| produit | | $+$ | $0$ | $-$ | $0$ | $+$ | |

La dernière ligne répond d'un coup à toutes les questions de signe sur l'expression. Ici le produit est négatif sur $]-4 \;;\; 3[$.

Le même tableau convient pour un quotient, car $\dfrac{A}{B}$ et $A\times B$ ont toujours le même signe. Seul le traitement de la borne change : un zéro du dénominateur est exclu au lieu d'être inclus.

### Pour aller plus loin

Combien de changements de signe un produit de $n$ facteurs affines peut-il présenter ? Construire un exemple avec exactement trois changements de signe et expliquer pourquoi on ne peut pas en obtenir davantage avec trois facteurs.
