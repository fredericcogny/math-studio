---
id: 2de-probability-finite
locale: fr
title: Probabilités sur un ensemble fini
strand: Probabilités
summary: Modéliser une expérience aléatoire par une loi de probabilité sur un ensemble fini, puis calculer avec les réunions, les intersections et les événements contraires.
objectives:
  - Construire la loi de probabilité d'une expérience aléatoire finie
  - Utiliser la formule de la probabilité d'une réunion et la règle de l'événement contraire
  - Lire des probabilités dans un tableau croisé ou dans un arbre
prerequisites:
  - Fréquences et pourcentages
  - Probabilités élémentaires et équiprobabilité
vocabulary:
  - en: sample space
    definition: Ensemble fini de toutes les issues possibles d'une expérience aléatoire.
  - en: event
    definition: Partie de l'univers, dont la probabilité est la somme des probabilités de ses issues.
  - en: complementary event
    definition: Événement qui se réalise exactement lorsqu'un événement donné ne se réalise pas, et dont la probabilité vaut un moins celle de cet événement.
flashcards:
  - front: Qu'est-ce qui définit une loi de probabilité sur un ensemble fini ?
    back: Chaque issue reçoit un nombre de $[0 \;;\; 1]$ et la somme de tous ces nombres vaut $1$.
  - front: Quelle est la probabilité d'un événement dans une situation d'équiprobabilité ?
    back: $P(A)=\dfrac{\text{nombre d'issues favorables}}{\text{nombre total d'issues}}$, valable seulement si toutes les issues ont la même probabilité.
  - front: Quelle est la formule de la probabilité d'une réunion ?
    back: $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. On retire l'intersection car elle a été comptée deux fois.
  - front: Quand est-il plus simple d'utiliser l'événement contraire ?
    back: Pour les événements du type « au moins un », car le contraire est le cas unique « aucun », en général plus rapide à dénombrer.
exercises:
  - id: 2de-proba-t1
    tierTitle: Application directe
    prompt: On lance une fois un dé équilibré à six faces. Donner la probabilité d'obtenir un nombre pair, sous forme décimale.
    solution: L'univers compte six issues équiprobables et trois d'entre elles sont paires, à savoir $2$ ; $4$ et $6$. La probabilité vaut donc $\dfrac{3}{6}=\dfrac{1}{2}=0{,}5$.
    hints:
      - Dénombrer les issues favorables et diviser par le nombre total d'issues.
  - id: 2de-proba-t2
    tierTitle: Entraînement standard
    prompt: Deux événements vérifient $P(A)=0{,}4$ ; $P(B)=0{,}5$ et $P(A\cap B)=0{,}2$. Calculer $P(A\cup B)$.
    solution: La formule de la réunion donne $P(A\cup B)=P(A)+P(B)-P(A\cap B)=0{,}4+0{,}5-0{,}2=0{,}7$.
    hints:
      - Additionner les deux probabilités, puis retirer la part comptée deux fois.
      - Une probabilité ne peut jamais dépasser $1$, ce qui fournit une vérification utile.
  - id: 2de-proba-t3
    tierTitle: Synthèse du programme officiel
    prompt: Parmi $200$ élèves, $120$ étudient l'espagnol, $90$ étudient l'allemand et $40$ étudient les deux. On choisit un élève au hasard, tous les élèves étant équiprobables. Calculer la probabilité que l'élève étudie au moins une des deux langues, celle qu'il n'en étudie aucune, et celle qu'il en étudie exactement une.
    solution: >-
      Soit $S$ l'événement « l'élève étudie l'espagnol » et $G$ l'événement « l'élève étudie l'allemand ». Alors $P(S)=\dfrac{120}{200}=0{,}6$ ; $P(G)=\dfrac{90}{200}=0{,}45$ et $P(S\cap G)=\dfrac{40}{200}=0{,}2$. La formule de la réunion donne $P(S\cup G)=0{,}6+0{,}45-0{,}2=0{,}85$. L'événement « aucune des deux langues » est le contraire de la réunion, donc sa probabilité vaut $1-0{,}85=0{,}15$. Enfin, exactement une langue correspond à la réunion privée de l'intersection, donc sa probabilité vaut $0{,}85-0{,}2=0{,}65$. Un tableau croisé confirme les effectifs, car $80$ élèves étudient seulement l'espagnol, $50$ seulement l'allemand, $40$ les deux et $30$ aucune, et ces quatre nombres totalisent $200$.
    hints:
      - Traduire chaque phrase en un événement avant tout calcul.
      - Construire le tableau croisé à quatre cases et vérifier que les quatre effectifs totalisent l'effectif global.
    rubric:
      - Nomme les événements et donne les trois probabilités de base à partir des effectifs.
      - Applique correctement la formule de la réunion et la règle de l'événement contraire.
      - Obtient la probabilité d'exactement une langue et vérifie la réponse par un tableau croisé.
  - id: 2de-proba-t4
    tierTitle: Défi avancé
    prompt: Démontrer que pour trois événements quelconques, $P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(A\cap B)-P(A\cap C)-P(B\cap C)+P(A\cap B\cap C)$. Utiliser ensuite cette formule pour calculer la probabilité qu'un entier choisi au hasard entre $1$ et $30$, tous les entiers étant équiprobables, soit multiple de $2$, de $3$ ou de $5$.
    solution: >-
      On applique la formule à deux événements à $A\cup B$ et $C$, ce qui donne $P((A\cup B)\cup C)=P(A\cup B)+P(C)-P((A\cup B)\cap C)$. Or $P(A\cup B)=P(A)+P(B)-P(A\cap B)$, et la distributivité de l'intersection donne $(A\cup B)\cap C=(A\cap C)\cup(B\cap C)$, donc un second emploi de la formule à deux événements donne $P((A\cup B)\cap C)=P(A\cap C)+P(B\cap C)-P(A\cap B\cap C)$, puisque $(A\cap C)\cap(B\cap C)=A\cap B\cap C$. En substituant, on obtient exactement l'identité annoncée. Pour l'application, parmi les entiers de $1$ à $30$ il y a $15$ multiples de $2$, $10$ multiples de $3$, $6$ multiples de $5$, puis $5$ multiples de $6$, $3$ multiples de $10$, $2$ multiples de $15$ et $1$ multiple de $30$. L'identité donne un dénombrement de $15+10+6-5-3-2+1=22$ entiers favorables, donc la probabilité vaut $\dfrac{22}{30}=\dfrac{11}{15}\approx 0{,}733$.
    hints:
      - Regrouper deux des événements et appliquer deux fois la formule à deux événements.
      - L'intersection de deux événements de divisibilité est la divisibilité par le produit lorsque les diviseurs n'ont aucun facteur commun.
    rubric:
      - Démontre la formule à trois événements en appliquant deux fois celle à deux événements, avec l'étape de distributivité justifiée.
      - Dénombre correctement les multiples de chaque diviseur et de chaque produit.
      - Conclut avec la fraction onze quinzièmes.
---
## Modéliser une expérience aléatoire

Une expérience aléatoire possède un **univers** fini, l'ensemble de ses issues possibles. Attribuer un nombre à chaque issue définit une **loi de probabilité** dès que deux conditions sont réunies :

- chaque nombre appartient à $[0 \;;\; 1]$ ;
- la somme de ces nombres vaut $1$.

Un **événement** est une partie de l'univers, et sa probabilité est la somme des probabilités des issues qu'il contient. Ainsi $P(\varnothing)=0$ et $P(\Omega)=1$.

## L'équiprobabilité

Lorsque toutes les issues ont la même probabilité, le dénombrement remplace le calcul :

$$P(A)=\frac{\text{nombre d'issues favorables}}{\text{nombre total d'issues}}.$$

Cette formule n'est valable que sous cette hypothèse. Un dé pipé, ou une urne contenant des effectifs différents de jetons par couleur, exige au contraire une loi explicite.

Les fréquences observées sur un grand nombre de répétitions se rapprochent des probabilités, et c'est exactement ce qu'une simulation illustre.

## Combiner des événements

| Formulation | Notation |
| --- | --- |
| $A$ et $B$ | $A\cap B$ |
| $A$ ou $B$ | $A\cup B$ |
| non $A$ | $\bar{A}$ |

Trois règles couvrent tout ce que l'on rencontre en Seconde :

$$P(\bar{A})=1-P(A),\qquad P(A\cup B)=P(A)+P(B)-P(A\cap B),$$

et, lorsque $A$ et $B$ ne peuvent pas se réaliser ensemble, c'est-à-dire lorsque $A\cap B=\varnothing$,

$$P(A\cup B)=P(A)+P(B).$$

La soustraction de la formule de la réunion existe parce que les issues de l'intersection seraient sinon comptées deux fois.

La règle de l'événement contraire est le chemin le plus rapide pour tout événement formulé « **au moins un** », car son contraire est le cas unique « **aucun** ».

## Tableaux et arbres

Un **tableau croisé** organise deux caractères en quatre cases dont les effectifs totalisent l'effectif global ; chaque probabilité est alors un rapport lu dans le tableau. Un **arbre** suit des étapes successives, les probabilités des branches issues d'un même nœud totalisant $1$. Choisir la représentation avant de calculer est en général ce qui rend un exercice court.

### Pour aller plus loin

Deux événements vérifient $P(A)=0{,}7$ et $P(B)=0{,}6$. Déterminer la plus petite et la plus grande valeur possible de $P(A\cap B)$, et décrire une situation atteignant chacune de ces bornes.
