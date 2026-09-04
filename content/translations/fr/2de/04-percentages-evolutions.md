---
id: 2de-percentages-evolutions
locale: fr
title: Pourcentages, taux d'évolution et évolutions successives
strand: Proportionnalité
summary: Transformer chaque variation en pourcentage en coefficient multiplicateur pour que les évolutions successives et réciproques deviennent de simples multiplications.
objectives:
  - Passer d'un taux d'évolution à un coefficient multiplicateur et inversement
  - Composer des évolutions successives en multipliant leurs coefficients
  - Calculer l'évolution réciproque qui annule une variation donnée
prerequisites:
  - Proportionnalité et pourcentages
  - Calcul fractionnaire et décimal
vocabulary:
  - en: multiplying coefficient
    definition: Nombre par lequel on multiplie une valeur pour appliquer une variation en pourcentage, égal à un plus le taux.
  - en: evolution rate
    definition: Variation relative d'une valeur, égale à la valeur finale moins la valeur initiale, divisée par la valeur initiale.
  - en: reciprocal evolution
    definition: Variation qui ramène une valeur à son point de départ, et dont le coefficient est l'inverse du premier.
flashcards:
  - front: Quel coefficient applique une hausse de $15\%$ ?
    back: $1+0{,}15=1{,}15$. Une baisse de $15\%$ utilise $1-0{,}15=0{,}85$.
  - front: Comment se composent deux évolutions successives ?
    back: Leurs coefficients se multiplient. Les taux ne s'additionnent jamais, donc $+20\%$ puis $-20\%$ donne $1{,}2\times 0{,}8=0{,}96$, soit une variation globale de $-4\%$.
  - front: Quel taux d'évolution correspond à un coefficient de $1{,}035$ ?
    back: $t=1{,}035-1=0{,}035$, soit une hausse de $3{,}5\%$.
  - front: Quelle est la différence entre un pourcentage et un point de pourcentage ?
    back: Passer de $20\%$ à $25\%$ représente une hausse de $5$ points de pourcentage, mais une augmentation de $25\%$ par rapport à $20$.
exercises:
  - id: 2de-percent-t1
    tierTitle: Application directe
    prompt: Un billet coûte $80$ euros et son prix augmente de $15\%$. Quel est le nouveau prix, en euros ?
    solution: Le coefficient est $1+0{,}15=1{,}15$, donc le nouveau prix est $80\times 1{,}15=92$ euros.
    hints:
      - Une hausse de $t\%$ multiplie par $1+\frac{t}{100}$.
  - id: 2de-percent-t2
    tierTitle: Entraînement standard
    prompt: Une quantité augmente de $20\%$, puis le résultat diminue de $20\%$. Quel est le taux d'évolution global, en pourcentage ? Donner la réponse sous forme d'un nombre relatif, par exemple $-4$ pour une baisse de $4\%$.
    solution: Le coefficient global est $1{,}2\times 0{,}8=0{,}96$. Comme $0{,}96=1-0{,}04$, le taux global est $-0{,}04$, soit une baisse de $4\%$.
    hints:
      - Multiplier les deux coefficients au lieu d'additionner les taux.
      - Retirer $1$ au coefficient global pour lire le taux global.
  - id: 2de-percent-t3
    tierTitle: Synthèse du programme officiel
    prompt: Le prix d'un abonnement a augmenté de $8\%$. Le fournisseur souhaite maintenant le ramener exactement à sa valeur initiale. Déterminer la baisse en pourcentage nécessaire, arrondie à $0{,}01\%$, et expliquer pourquoi la réponse n'est pas $8\%$.
    solution: >-
      Soit $P$ le prix initial. Après la hausse, le prix vaut $1{,}08P$. Une baisse de taux $t$ multiplie par $1+t$, donc il faut $1{,}08\times(1+t)=1$, ce qui donne $1+t=\dfrac{1}{1{,}08}\approx 0{,}925926$ et $t\approx -0{,}074074$. La baisse nécessaire est d'environ $7{,}41\%$. Elle ne vaut pas $8\%$ car la baisse s'applique au prix plus élevé $1{,}08P$ et non à $P$ : une baisse de $8\%$ donnerait $1{,}08\times 0{,}92=0{,}9936$, soit $0{,}64\%$ en dessous du départ.
    hints:
      - Le coefficient réciproque est $\dfrac{1}{1{,}08}$, et non $0{,}92$.
      - Comparer la base sur laquelle chaque pourcentage est appliqué.
    rubric:
      - Écrit la condition sous forme d'un produit de coefficients égal à 1.
      - Calcule le coefficient réciproque et le convertit en un taux proche d'une baisse de 7,41 pour cent.
      - Explique que les deux pourcentages s'appliquent à des valeurs de référence différentes.
  - id: 2de-percent-t4
    tierTitle: Défi avancé
    prompt: Soit $t$ un taux vérifiant $0<t<1$. Démontrer qu'une hausse de $100t\%$ suivie d'une baisse de $100t\%$ produit toujours une baisse globale stricte. Puis trouver la valeur de $t$ pour laquelle la perte globale vaut exactement $9\%$.
    solution: >-
      Le coefficient global est $(1+t)(1-t)=1-t^{2}$. Pour $0<t<1$ on a $t^{2}>0$, donc $1-t^{2}<1$ et la valeur finale est strictement inférieure à la valeur initiale, quel que soit l'ordre des deux étapes puisque la multiplication est commutative. Une perte globale de $9\%$ signifie $1-t^{2}=0{,}91$, donc $t^{2}=0{,}09$ et, comme $t>0$, $t=0{,}3$. Les deux étapes sont donc une hausse de $30\%$ suivie d'une baisse de $30\%$. La vérification donne $1{,}3\times 0{,}7=0{,}91$.
    hints:
      - Utiliser l'identité de la différence de deux carrés sur le produit des deux coefficients.
      - La perte dépend de $t^{2}$, ce qui explique pourquoi les petits taux perdent très peu.
    rubric:
      - Calcule le coefficient global sous la forme un moins le carré du taux.
      - Démontre la baisse stricte pour tout taux strictement compris entre 0 et 1 et remarque que l'ordre n'importe pas.
      - Résout l'équation pour obtenir un taux de 30 pour cent et le vérifie.
---
## Un coefficient par variation

Une variation en pourcentage se manipule plus facilement comme une multiplication que comme une addition. Si une valeur varie au taux $t$, écrit sous forme décimale, alors

$$\text{valeur finale}=\text{valeur initiale}\times(1+t).$$

Le nombre $1+t$ est le **coefficient multiplicateur**.

| Variation | Taux $t$ | Coefficient |
| --- | --- | --- |
| $+15\%$ | $0{,}15$ | $1{,}15$ |
| $-30\%$ | $-0{,}30$ | $0{,}70$ |
| $\times 3$ | $2$ | $3$ |
| inchangée | $0$ | $1$ |

Lue à l'envers, la relation donne le taux : $t=\text{coefficient}-1$. Un coefficient de $1{,}035$ est une hausse de $3{,}5\%$ ; un coefficient de $0{,}94$ est une baisse de $6\%$.

Le **taux d'évolution** entre une valeur initiale $V_{i}$ et une valeur finale $V_{f}$ est

$$t=\frac{V_{f}-V_{i}}{V_{i}}.$$

## Les évolutions successives se multiplient

Deux variations appliquées l'une après l'autre correspondent à deux multiplications, donc leurs coefficients se multiplient :

$$C_{\text{global}}=C_{1}\times C_{2}.$$

Les taux ne s'additionnent jamais. Une hausse de $20\%$ suivie d'une baisse de $20\%$ donne

$$1{,}20\times 0{,}80=0{,}96,$$

soit une baisse globale de $4\%$, et non un retour au départ. La multiplication étant commutative, l'ordre des étapes ne change pas la valeur finale.

## L'évolution réciproque

Pour annuler une variation de coefficient $C$, on multiplie par $\dfrac{1}{C}$. L'**évolution réciproque** de $+25\%$ a donc pour coefficient $\dfrac{1}{1{,}25}=0{,}8$, soit une baisse de $20\%$ et non de $25\%$. Les deux pourcentages diffèrent car chacun se mesure par rapport à une valeur de référence différente.

## Pourcentage d'un pourcentage

Deux phrases qui se ressemblent mesurent des choses différentes.

- Une part qui passe de $20\%$ à $25\%$ gagne $5$ **points de pourcentage**.
- Le même déplacement est une hausse de $\dfrac{25-20}{20}=0{,}25$, soit $25\%$, par rapport à la part initiale.

Nommer la valeur de référence dans chaque phrase lève l'ambiguïté.

### Pour aller plus loin

Une valeur augmente de $2\%$ chaque année. Estimer le nombre d'années nécessaires pour qu'elle double, puis comparer cette estimation à la réponse exacte obtenue avec les puissances de $1{,}02$.
