---
id: 3e-linear-equations
locale: fr
title: Les équations comme machines réversibles
strand: Algèbre
summary: Résoudre des équations du premier degré en préservant l'égalité, et non en déplaçant les symboles comme par magie.
objectives:
  - Préserver une égalité
  - Résoudre ax + b = c
  - Vérifier une solution
prerequisites:
  - Calcul avec les nombres relatifs
  - Distributivité
vocabulary:
  - en: equation
    definition: Égalité contenant une ou plusieurs valeurs inconnues.
  - en: unknown
    definition: Valeur représentée par un symbole et déterminée à partir de l'équation.
  - en: solution
    definition: Valeur qui rend l'égalité vraie.
flashcards:
  - front: Que peut-on faire à l'un des membres d'une équation ?
    back: Toute opération valable, à condition d'effectuer la même opération sur l'autre membre.
  - front: Comment vérifier une solution proposée ?
    back: La substituer à l'inconnue dans l'équation initiale et vérifier l'égalité.
  - front: Pourquoi la règle « on le change de côté et on change son signe » est-elle risquée ?
    back: Elle masque l'opération identique effectuée sur les deux membres et ne fonctionne plus dans des équations moins familières.
exercises:
  - id: 3e-equations-t1
    tierTitle: Application directe
    prompt: Résoudre $5x-7=18$.
    solution: Ajouter $7$ aux deux membres pour obtenir $5x=25$, puis diviser par $5$. Ainsi, $x=5$.
    hints:
      - Commencer par ajouter $7$ aux deux membres.
  - id: 3e-equations-t2
    tierTitle: Entraînement standard
    prompt: La longueur d'un rectangle dépasse sa largeur de $3$ cm et son périmètre est de $34$ cm. Déterminer sa largeur et sa longueur en mettant le problème en équation, puis en résolvant cette équation.
    solution: Notons $x$ cm la largeur ; la longueur vaut alors $x+3$ cm. On a $2x+2(x+3)=34$, d'où $4x+6=34$, $4x=28$, puis $x=7$. Le rectangle mesure $7$ cm de largeur et $10$ cm de longueur.
    hints:
      - Noter $x$ la largeur et exprimer la longueur en fonction de $x$.
      - Utiliser $P=2\times\text{largeur}+2\times\text{longueur}$.
    rubric:
      - Définit l'inconnue et forme une équation équivalente à $2x+2(x+3)=34$.
      - Résout correctement l'équation et obtient $x=7$.
      - Interprète le résultat comme une largeur de $7$ cm et une longueur de $10$ cm.
  - id: 3e-equations-t3
    tierTitle: Synthèse
    prompt: Pour chaque valeur réelle de $a$, déterminer l'ensemble des solutions de $(a-2)x=3a-6$. Préciser les cas où l'équation admet une solution, aucune solution ou une infinité de solutions.
    solution: Comme $3a-6=3(a-2)$, l'équation s'écrit $(a-2)x=3(a-2)$. Si $a\ne2$, la division par $a-2$ donne l'unique solution $x=3$. Si $a=2$, l'équation devient $0=0$ ; tout réel $x$ est donc solution. Il n'existe aucune valeur de $a$ pour laquelle l'équation n'a pas de solution.
    hints:
      - Factoriser le membre de droite.
      - Ne pas diviser par $a-2$ avant d'avoir traité le cas où cette expression est nulle.
    rubric:
      - Distingue les cas $a=2$ et $a\ne2$.
      - Trouve l'unique solution $x=3$ lorsque $a\ne2$.
      - Reconnaît une infinité de solutions lorsque $a=2$ et confirme qu'aucune valeur du paramètre ne conduit à une absence de solution.
  - id: 3e-equations-t4
    tierTitle: Défi avancé
    prompt: Un magasin vend uniquement des cahiers à $3$ euros et des cahiers à $7$ euros. Une commande coûte exactement $41$ euros. Déterminer tous les couples $(x,y)$ d'entiers positifs ou nuls possibles, où $x$ désigne le nombre de cahiers à $3$ euros et $y$ le nombre de cahiers à $7$ euros, puis démontrer que la liste est complète.
    solution: Il faut résoudre $3x+7y=41$. Comme $7y\le41$, on a $0\le y\le5$. Puisque $41-7y=3x$, le nombre $41-7y$ doit être divisible par $3$. Or $41$ a pour reste $2$ dans la division par $3$, et $7y$ a le même reste que $y$, car $7=2\times3+1$. Ainsi, $41-7y$ est divisible par $3$ exactement lorsque le reste de $y$ dans la division par $3$ vaut $2$. Entre $0$ et $5$, cela donne $y=2$ ou $y=5$. On obtient alors $x=(41-14)/3=9$ ou $x=(41-35)/3=2$. La liste complète est donc $(9,2)$ et $(2,5)$. La borne et la condition de divisibilité excluent tous les autres entiers positifs ou nuls $y$.
    hints:
      - Écrire l'équation du prix $3x+7y=41$.
      - Borner $y$, puis comparer les restes de $41$ et de $7y$ dans la division par $3$.
    rubric:
      - Modélise la commande par $3x+7y=41$ avec des entiers positifs ou nuls.
      - Trouve les deux solutions $(9,2)$ et $(2,5)$.
      - Utilise une borne et un argument de divisibilité pour démontrer que la liste est complète.
---
## Une égalité est un équilibre

Une équation affirme que deux expressions ont la même valeur. Pour préserver cette propriété, il faut appliquer la **même opération aux deux membres**.

Considérons

$$3x - 5 = 16.$$

Ajoutons $5$ aux deux membres, puis divisons les deux membres par $3$ :

$$3x = 21 \qquad\Longrightarrow\qquad x=7.$$

Les flèches relient des équations équivalentes : chacune possède exactement les mêmes solutions.

## La vérification clôt le raisonnement

Remplaçons $x=7$ dans l'équation initiale :

$$3\times 7 - 5 = 21-5=16.$$

L'égalité est vraie, donc $7$ est une solution. La vérification permet de détecter rapidement les erreurs de signe et doit devenir un automatisme.

## Les coefficients négatifs ne constituent pas un cas particulier

Pour $-4x+3=19$ :

$$-4x=16 \qquad\Longrightarrow\qquad x=-4.$$

Rien de nouveau ne s'est produit. Le principe d'équilibre s'applique sans aucune modification.

> Écrire une transformation par ligne. La rapidité vient d'une structure fiable, et non d'étapes de raisonnement omises.

### Pour aller plus loin

Une équation de la forme $ax+b=c$ peut-elle n'avoir aucune solution ? Que se passe-t-il lorsque $a=0$ ? Distinguer les cas $b=c$ et $b\ne c$.
