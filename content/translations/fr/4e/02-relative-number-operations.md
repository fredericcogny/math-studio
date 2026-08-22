---
id: 4e-relative-number-operations
locale: fr
title: Multiplication et division de nombres relatifs
strand: Nombres et calcul
summary: Apprendre les règles des signes pour la multiplication et la division d'entiers et de décimaux, puis les appliquer avec assurance dans des calculs à plusieurs étapes.
objectives:
  - Appliquer la règle des signes pour la multiplication
  - Appliquer la règle des signes pour la division
  - Déterminer le signe d'un produit de plusieurs facteurs
prerequisites:
  - Addition et soustraction de nombres relatifs
  - Tables de multiplication
vocabulary:
  - en: product
    definition: Résultat d'une multiplication.
  - en: quotient
    definition: Résultat d'une division.
  - en: sign rule
    definition: Règle selon laquelle le produit ou le quotient de deux nombres de même signe est positif, et de signes contraires est négatif.
flashcards:
  - front: Quel est le signe du produit de deux nombres négatifs ?
    back: Positif. Le produit de deux négatifs est positif, par exemple $(-3)\times(-4)=12$.
  - front: Comment détermine-t-on le signe d'un produit de plusieurs facteurs ?
    back: On compte les facteurs négatifs. Un nombre pair donne un produit positif ; un nombre impair donne un produit négatif.
  - front: Combien vaut $(-7)\div(-1)$ ?
    back: $7$, car la division de deux négatifs donne un résultat positif.
exercises:
  - id: 4e-rel-t1
    tierTitle: Application directe
    prompt: Calculer $(-5)\times 8$.
    solution: Signes différents, donc produit négatif. $(-5)\times 8 = -40$.
    hints:
      - Multiplier les valeurs absolues, puis appliquer la règle des signes.
  - id: 4e-rel-t2
    tierTitle: Entraînement standard
    prompt: Un sous-marin descend de $3{,}5$ mètres par minute. Après $8$ minutes il s'arrête, puis remonte de $2$ mètres par minute pendant $5$ minutes. Exprimer la variation totale de profondeur par un nombre relatif et la calculer.
    solution: "Descente : $(-3{,}5)\\times 8 = -28$ m. Remontée : $(+2)\\times 5 = +10$ m. Variation totale : $-28 + 10 = -18$ m. Le sous-marin se trouve $18$ m en dessous de son point de départ."
    hints:
      - Modéliser la descente par un taux négatif et la remontée par un taux positif.
      - Additionner les deux variations pour obtenir le résultat net.
  - id: 4e-rel-t3
    tierTitle: Synthèse du programme officiel
    prompt: Sans calculer la valeur exacte, déterminer le signe de l'expression $(-2)\times 3\times(-4)\times(-1)\times 5$ et expliquer le raisonnement. Puis vérifier en effectuant le calcul.
    solution: Il y a trois facteurs négatifs ($-2$, $-4$, $-1$), donc un nombre impair de facteurs négatifs, ce qui rend le produit négatif. Calcul détaillé. $(-2)\times 3 = -6$, $(-6)\times(-4)=24$, $24\times(-1)=-24$, $(-24)\times 5=-120$. Le produit vaut $-120$, ce qui confirme qu'il est négatif.
    hints:
      - Compter le nombre de facteurs négatifs dans le produit.
      - Un nombre impair de facteurs négatifs rend le produit négatif.
    rubric:
      - Compte correctement le nombre de facteurs négatifs.
      - Applique la règle de parité pour prédire le signe.
      - Vérifie en calculant le produit complet étape par étape.
  - id: 4e-rel-t4
    tierTitle: Défi avancé
    prompt: Soient $a$, $b$ et $c$ des entiers non nuls tels que $a\times b > 0$, $b\times c < 0$ et $a\times c < 0$. Déterminer les signes de $a$, $b$ et $c$. Combien y a-t-il d'attributions de signes essentiellement différentes ? Justifier.
    solution: >-
      $a\times b>0$ signifie que $a$ et $b$ sont de même signe. $b\times c<0$ signifie que $b$ et $c$ sont de signes contraires. $a\times c<0$ signifie que $a$ et $c$ sont de signes contraires. Si $a>0$ alors $b>0$ et $c<0$. Si $a<0$ alors $b<0$ et $c>0$. Il y a exactement deux attributions valides : $(+,+,-)$ et $(-,-,+)$.
    hints:
      - Partir de $a\times b>0$ pour en déduire la relation entre les signes de $a$ et $b$.
      - Considérer les deux cas ($a>0$ et $a<0$) et vérifier chaque condition.
    rubric:
      - Déduit correctement la relation entre les signes à partir de chaque inégalité.
      - Identifie les deux attributions de signes valides.
      - Démontre qu'aucune autre attribution n'est possible.
---
## La règle des signes pour la multiplication

En 5e, on a appris à additionner et soustraire des nombres relatifs. On étend maintenant ces compétences à la multiplication. La règle est directe :

- **Même signe** donne un produit **positif** : $(+)\times(+)=+$ et $(-)\times(-)=+$.
- **Signes contraires** donne un produit **négatif** : $(+)\times(-)=-$ et $(-)\times(+)=-$.

Exemples :

$$(-3)\times(-7) = 21 \qquad 4\times(-6) = -24 \qquad (-2{,}5)\times 4 = -10$$

Pourquoi $(-1)\times(-1)=1$ ? Parce que $(-1)\times(-1)$ doit être le nombre qui, ajouté à $(-1)\times 1 = -1$, donne $(-1)\times(1+(-1))=(-1)\times 0=0$. Donc $(-1)\times(-1)=-(-1)=1$.

## Signe d'un produit de plusieurs facteurs

Lorsqu'on multiplie plus de deux facteurs, on compte les facteurs négatifs :

- Nombre **pair** de facteurs négatifs $\Rightarrow$ produit positif.
- Nombre **impair** de facteurs négatifs $\Rightarrow$ produit négatif.

$$(-2)\times(-3)\times(-5) = -30 \quad \text{(trois négatifs, impair, donc négatif)}$$

$$(-1)\times(-2)\times(-3)\times(-4) = 24 \quad \text{(quatre négatifs, pair, donc positif)}$$

## La règle des signes pour la division

La division suit la même règle des signes que la multiplication :

$$\frac{-12}{-3}=4 \qquad \frac{-12}{3}=-4 \qquad \frac{12}{-3}=-4$$

C'est cohérent car diviser revient à multiplier par l'inverse.

## Combiner les opérations

Dans une expression comportant des opérations mixtes, on applique l'ordre habituel : parenthèses d'abord, puis multiplications et divisions (de gauche à droite), puis additions et soustractions.

$$(-3)\times 4 + (-10)\div(-2) = -12 + 5 = -7$$

### Pour aller plus loin

Le produit de 100 entiers non nuls peut-il être négatif ? Et celui de 101 entiers non nuls ? Expliquer en utilisant la règle de la parité des facteurs négatifs.
