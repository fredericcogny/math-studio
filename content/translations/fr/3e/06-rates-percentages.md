---
id: 3e-rates-percentages
locale: fr
title: Taux, pourcentages et échelles
strand: Proportionnalité
summary: Utiliser des modèles multiplicatifs pour traiter la proportionnalité, les évolutions en pourcentage, les vitesses, les débits et les échelles.
objectives:
  - Écrire des rapports et effectuer des partages proportionnels
  - Appliquer et retrouver une évolution en pourcentage
  - Combiner des évolutions successives
  - Résoudre des problèmes de vitesse, de débit et d'échelle
prerequisites:
  - Fractions et multiplication des nombres décimaux
  - Conversion d'unités
  - Résolution d'équations du premier degré
vocabulary:
  - en: proportionality coefficient
    definition: Multiplicateur constant qui permet de passer d'une grandeur à une autre dans une situation de proportionnalité.
  - en: percentage change
    definition: Variation divisée par la valeur initiale, exprimée en pourcentage.
  - en: multiplier
    definition: Facteur $1+t$ qui applique une évolution de taux décimal $t$.
  - en: average speed
    definition: Distance totale divisée par la durée totale du trajet.
flashcards:
  - front: Quel coefficient multiplicateur correspond à une hausse de $17\%$ ?
    back: $1+0,17=1,17$.
  - front: Quel coefficient multiplicateur correspond à une baisse de $12\%$ ?
    back: $1-0,12=0,88$.
  - front: Comment combine-t-on des évolutions successives ?
    back: On multiplie leurs coefficients multiplicateurs ; en général, on n'additionne pas leurs taux.
  - front: Énoncer la relation entre distance, vitesse et durée.
    back: $d=vt$, donc $v=d/t$ et $t=d/v$ lorsque le diviseur est non nul.
exercises:
  - id: 3e-rates-t1
    tierTitle: Application directe
    prompt: Partager $420$ € entre Ana et Ben dans le rapport $2:5$. Écrire l'égalité de rapports utilisée et calculer chaque part.
    solution: On écrit $A:B=2:5$, ou $A/2=B/5=420/(2+5)=60$. Ana reçoit donc $2\times60=120$ € et Ben $5\times60=300$ €.
    hints:
      - Les $2+5=7$ parts du rapport représentent ensemble $420$ €.
    rubric:
      - "Écrit $A:B=2:5$ ou une égalité de rapports équivalente."
      - "Partage le total en $7$ parts égales de $60$ € chacune."
      - "Obtient et vérifie les parts de $120$ € et $300$ €."
  - id: 3e-rates-t2
    tierTitle: Problème type brevet
    prompt: Une veste coûte initialement $85$ €. Son prix baisse de $20\%$, puis le prix soldé augmente de $10\%$. Déterminer le prix final et le taux d'évolution unique par rapport au prix initial.
    solution: >-
      Les coefficients multiplicateurs successifs sont $0,80$ et $1,10$. Le prix final est $85\times0,80\times1,10=74,80$ €. Le coefficient global vaut $0,88=1-0,12$ : l'évolution globale est donc une baisse de $12\%$.
    hints:
      - Appliquer chaque évolution au prix obtenu après l'évolution précédente.
      - Comparer le produit des deux coefficients multiplicateurs à $1$.
    expected: 74,80 € ; baisse de 12 %
    accepted:
      - 74,80 euros, diminution de 12 %
      - 74,80 € et -12 %
  - id: 3e-rates-t3
    tierTitle: Synthèse
    prompt: Sur une carte à l'échelle $1:25\,000$, un sentier rectiligne mesure $7,6$ cm. Un randonneur parcourt la distance réelle correspondante à la vitesse moyenne de $4,5$ km/h. Calculer la distance réelle et la durée du trajet en minutes et secondes.
    solution: La longueur réelle est $7,6\times25\,000=190\,000$ cm, soit $1,9$ km. La durée vaut $t=d/v=1,9/4,5=19/45$ heure. En multipliant par $60$, on obtient $76/3=25\frac13$ minutes, soit $25$ minutes et $20$ secondes.
    hints:
      - À cette échelle, multiplier la longueur sur la carte par $25\,000$, puis convertir les centimètres en kilomètres.
      - Utiliser $t=d/v$, puis convertir la fraction de minute en secondes.
    rubric:
      - Utilise l'échelle pour obtenir $190\,000$ cm et convertit cette longueur en $1,9$ km.
      - Calcule $t=1,9/4,5$ heure avec des unités cohérentes.
      - Convertit correctement la durée en $25$ minutes et $20$ secondes.
  - id: 3e-rates-t4
    tierTitle: Défi avancé
    prompt: Un prix augmente d'un pourcentage entier $p$, avec $1\le p\le100$, puis diminue d'un pourcentage entier $q$, avec $1\le q<100$. Le prix final est égal au prix initial. Déterminer tous les couples $(p,q)$ possibles et démontrer que la liste est complète.
    solution: L'égalité des prix initial et final donne $(1+p/100)(1-q/100)=1$. Ainsi, $(100+p)(100-q)=10\,000$, ou encore $q=\frac{100p}{100+p}=100-\frac{10\,000}{100+p}$. Le nombre $q$ est donc entier si et seulement si $100+p$ divise $10\,000$. Comme $1\le p\le100$, le diviseur $100+p$ est compris entre $101$ et $200$. D'après $10\,000=2^4\times5^4$, les seuls diviseurs dans cet intervalle sont $125$ et $200$. Ils donnent $p=25,q=20$ et $p=100,q=50$. Ces deux couples vérifient l'équation initiale et les bornes imposées ; ce sont donc les seuls.
    hints:
      - Traduire les deux évolutions par des coefficients multiplicateurs et poser leur produit égal à $1$.
      - Réécrire $q$ sous la forme $100-10\,000/(100+p)$.
      - Utiliser la décomposition en facteurs premiers de $10\,000$ pour énumérer ses diviseurs entre $101$ et $200$.
    rubric:
      - Obtient l'équation correcte sur les coefficients multiplicateurs et la formule donnant $q$.
      - Traduit le caractère entier par la condition de divisibilité $100+p\mid10\,000$.
      - Démontre que les seuls diviseurs convenables sont $125$ et $200$.
      - Obtient et vérifie exactement les couples $(25,20)$ et $(100,50)$.
---
## Reconnaître la proportionnalité

Deux grandeurs sont proportionnelles lorsque l'une est toujours un multiple constant de l'autre : $y=kx$. Dans un tableau, tous les quotients non nuls $y/x$ valent $k$ ; graphiquement, les points sont alignés avec l'origine. Un montant fixe initial conduit à $y=kx+b$ : si $b\ne0$, la relation n'est pas proportionnelle.

## Quatrième proportionnelle et passage à l'unité

Si $5$ cahiers coûtent $13,50$ €, le prix unitaire est $13,50/5=2,70$ €. Ainsi, $8$ cahiers coûtent $8\times2,70=21,60$ €. Les rapports égaux conviennent aussi, mais le passage à l'unité clarifie souvent le sens.

## Écriture des rapports et partage proportionnel

Le rapport $a:b$ compare deux grandeurs dans l'ordre indiqué et peut s'écrire $a/b$. Pour partager un total $T$ dans le rapport $a:b$, on le divise en $a+b$ parts égales :

$$\text{première part}=T\frac{a}{a+b},\qquad \text{seconde part}=T\frac{b}{a+b}.$$

Les parts doivent avoir pour somme le total et respecter l'ordre du rapport annoncé.

## Pourcentages et proportions

Le pourcentage $t\%$ signifie $t/100$. Ainsi, $18\%$ de $350$ vaut $350\times18/100=63$. Pour déterminer quel pourcentage de $160$ représente $42$, on calcule $42/160\times100=26,25\%$. Le dénominateur est la valeur de référence.

## Taux d'évolution et coefficients multiplicateurs

De $V_i$ à $V_f$, le taux est $t=(V_f-V_i)/V_i$. Une hausse utilise le coefficient $1+t$ ; une baisse utilise $1-t$. Diminuer $480$ de $7\%$ donne $480\times0,93=446,4$.

Pour retrouver une valeur avant évolution, on divise par le coefficient. Un prix de $64$ € après une remise de $20\%$ avait pour valeur initiale $64/0,80=80$ €.

## Évolutions successives

On multiplie les coefficients successifs. Une hausse de $10\%$ suivie d'une baisse de $10\%$ donne $1,10\times0,90=0,99$, soit une baisse globale de $1\%$. La seconde évolution porte sur une autre valeur de référence.

## Vitesse et autres taux

Pour une vitesse constante ou moyenne, $v=d/t$, $d=vt$ et $t=d/v$. Les unités doivent être cohérentes. Une heure valant $3\,600$ secondes, $1$ m/s équivaut à $3,6$ km/h. Les débits et prix unitaires ont la même structure de quotient. La vitesse moyenne est la distance totale divisée par la durée totale, et non, en général, la moyenne de deux vitesses.

## Échelles

Une échelle $1:n$ signifie qu'une unité sur le dessin représente $n$ unités identiques dans la réalité. La longueur réelle vaut donc $n$ fois la longueur dessinée. Les aires sont multipliées par $n^2$, et non par $n$.

## Choix de méthode et erreurs fréquentes

- Décider si la situation est proportionnelle ou comporte un terme fixe.
- Identifier la valeur de référence avant de calculer un pourcentage.
- Multiplier les coefficients des évolutions successives plutôt que d'additionner les taux.
- Conserver les unités dans les calculs intermédiaires.
- Contrôler la vraisemblance : le coefficient d'une remise est inférieur à $1$.

## Prolongement : vitesse moyenne sur deux distances égales

Parcourir une même distance à l'aller à la vitesse $u$ et au retour à la vitesse $v$ donne pour vitesse moyenne

$$\frac{2d}{d/u+d/v}=\frac{2uv}{u+v},$$

qui n'est généralement pas égale à $(u+v)/2$.
