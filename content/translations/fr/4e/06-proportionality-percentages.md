---
id: 4e-proportionality-percentages
locale: fr
title: Proportionnalité, pourcentages et échelles
strand: Organisation et gestion de données
summary: Utiliser le coefficient de proportionnalité, le produit en croix et le calcul de pourcentages pour résoudre des problèmes concrets impliquant des échelles et des taux.
objectives:
  - Reconnaître une situation de proportionnalité et déterminer le coefficient
  - Appliquer le produit en croix pour trouver une valeur inconnue
  - Calculer des augmentations et des diminutions en pourcentage
prerequisites:
  - Opérations sur les fractions et les décimaux
  - Raisonnement de base sur les rapports
vocabulary:
  - en: proportion
    definition: Égalité entre deux rapports, exprimant que deux grandeurs varient au même rythme.
  - en: percentage
    definition: Rapport exprimé sur $100$, utilisé pour comparer des parties d'un tout.
  - en: scale
    definition: Rapport entre une distance sur un plan ou une carte et la distance réelle correspondante.
flashcards:
  - front: Comment vérifier qu'un tableau représente une situation de proportionnalité ?
    back: Diviser chaque image par son antécédent. Si tous les quotients sont égaux, la relation est proportionnelle et le quotient est le coefficient.
  - front: Quelle est la formule pour calculer un pourcentage d'une quantité ?
    back: $\text{pourcentage} \times \text{quantité} \div 100$, ou de façon équivalente, multiplier par la forme décimale.
  - front: Une carte a pour échelle $1:25\,000$. Quelle distance réelle représentent $4$ cm ?
    back: $4 \times 25\,000 = 100\,000$ cm $= 1$ km.
exercises:
  - id: 4e-prop-t1
    tierTitle: Application directe
    prompt: Une chemise coûte initialement $40$ euros. Elle est soldée à $-15\,\%$. Quel est le prix soldé ?
    solution: La remise est de $40 \times 0{,}15 = 6$ euros. Le prix soldé est de $40 - 6 = 34$ euros.
    hints:
      - Calculer d'abord $15\,\%$ de $40$, puis soustraire du prix initial.
  - id: 4e-prop-t2
    tierTitle: Entraînement standard
    prompt: La population d'une ville était de $12\,500$ habitants en 2020. Elle a augmenté de $4\,\%$ en 2021, puis diminué de $2\,\%$ en 2022. Quelle était la population fin 2022 ?
    solution: "Après la hausse de $4\\,\\%$ : $12\\,500 \\times 1{,}04 = 13\\,000$. Après la baisse de $2\\,\\%$ : $13\\,000 \\times 0{,}98 = 12\\,740$."
    hints:
      - Une augmentation de $4\,\%$ revient à multiplier par $1{,}04$.
      - Appliquer la baisse de $2\,\%$ au résultat de la première étape, pas à la population initiale.
  - id: 4e-prop-t3
    tierTitle: Synthèse du programme officiel
    prompt: >-
      Sur une carte à l'échelle $1:50\,000$, un lac mesure $3{,}6$ cm de long et $1{,}4$ cm de large (assimilé à un rectangle). Calculer les dimensions réelles en mètres et l'aire réelle en hectares. Une nouvelle carte est imprimée à l'échelle $1:25\,000$. Quelles sont les dimensions du lac sur cette nouvelle carte ?
    solution: >-
      Longueur réelle : $3{,}6 \times 50\,000 = 180\,000$ cm $= 1\,800$ m. Largeur réelle : $1{,}4 \times 50\,000 = 70\,000$ cm $= 700$ m. Aire : $1\,800 \times 700 = 1\,260\,000$ m$^2 = 126$ ha. Sur la carte au $1:25\,000$ : longueur $= 180\,000 / 25\,000 = 7{,}2$ cm, largeur $= 70\,000 / 25\,000 = 2{,}8$ cm.
    hints:
      - Multiplier les mesures sur la carte par le facteur d'échelle pour obtenir les distances réelles en centimètres, puis convertir.
      - Un hectare vaut $10\,000$ m$^2$.
    rubric:
      - Convertit correctement les distances sur la carte en distances réelles à l'aide de l'échelle.
      - Calcule l'aire et la convertit en hectares de manière exacte.
      - Détermine les dimensions sur la nouvelle carte à l'aide de la nouvelle échelle.
  - id: 4e-prop-t4
    tierTitle: Défi avancé
    prompt: >-
      Un magasin applique une remise de $20\,\%$, puis ajoute $10\,\%$ de TVA sur le prix remisé. Un autre magasin applique d'abord les $10\,\%$ de TVA, puis accorde la remise de $20\,\%$. Montrer algébriquement que les deux prix finaux sont identiques pour tout prix initial, et expliquer pourquoi.
    solution: >-
      Soit $P$ le prix initial. Magasin A : prix remisé $= 0{,}8P$, puis avec TVA $= 0{,}8P \times 1{,}1 = 0{,}88P$. Magasin B : prix TTC $= 1{,}1P$, puis avec remise $= 1{,}1P \times 0{,}8 = 0{,}88P$. Les deux donnent $0{,}88P$ car la multiplication est commutative : $0{,}8 \times 1{,}1 = 1{,}1 \times 0{,}8$.
    hints:
      - Poser $P$ le prix initial et exprimer chaque prix final comme un produit de facteurs multiplicatifs.
      - Se souvenir que l'ordre des facteurs ne change pas le produit.
    rubric:
      - Pose le calcul pour les deux magasins en utilisant une variable pour le prix initial.
      - Montre que les deux expressions se simplifient en $0{,}88P$.
      - Explique le résultat par la commutativité de la multiplication.
---
## Reconnaître la proportionnalité

Deux grandeurs sont **proportionnelles** lorsque leur rapport est constant. Si $y = kx$ pour tout couple $(x, y)$ d'un tableau, la constante $k$ est le **coefficient de proportionnalité**.

| Essence (L)   | 5   | 10  | 15  | 25  |
|---------------|-----|-----|-----|-----|
| Coût (euros)  | 9   | 18  | 27  | 45  |

Chaque coût divisé par le nombre de litres donne $1{,}8$, la relation est donc proportionnelle avec un coefficient $k = 1{,}8$ euro par litre.

## Le produit en croix

Lorsque $\frac{a}{b} = \frac{c}{d}$, on peut trouver une valeur inconnue par le produit en croix :

$$a \times d = b \times c$$

**Exemple.** Si $\frac{x}{12} = \frac{5}{8}$, alors $8x = 60$, donc $x = 7{,}5$.

## Les pourcentages

Un pourcentage exprime une fraction sur $100$. Pour calculer $p\,\%$ d'une quantité $Q$ :

$$p\,\% \text{ de } Q = \frac{p}{100} \times Q$$

- **Augmenter de $p\,\%$ :** multiplier par $1 + \frac{p}{100}$.
- **Diminuer de $p\,\%$ :** multiplier par $1 - \frac{p}{100}$.

**Exemple.** Un article coûte $80$ euros et augmente de $5\,\%$. Le nouveau prix est $80 \times 1{,}05 = 84$ euros.

> Les pourcentages successifs ne s'additionnent pas. Une hausse de $10\,\%$ suivie d'une baisse de $10\,\%$ ne ramène **pas** au prix initial. Le résultat vaut $0{,}99$ fois le prix d'origine.

## Les échelles

Une **échelle** est le rapport $\frac{\text{distance sur le plan}}{\text{distance réelle}}$. Une échelle de $1:20\,000$ signifie que $1$ cm sur la carte représente $20\,000$ cm $= 200$ m dans la réalité.

Pour trouver une distance réelle : multiplier la mesure sur la carte par le dénominateur.
Pour trouver une distance sur la carte : diviser la distance réelle par le dénominateur.

### Pour aller plus loin

Si un prix augmente de $25\,\%$, de quel pourcentage doit-il diminuer pour revenir à sa valeur initiale ? Pourquoi la réponse n'est-elle pas $25\,\%$ ?
