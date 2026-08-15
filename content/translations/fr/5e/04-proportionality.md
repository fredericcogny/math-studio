---
id: 5e-proportionality
locale: fr
title: De la proportionnalité aux échelles en passant par les ratios
strand: Proportionnalité
summary: Utiliser ratios, passage à l'unité, pourcentages et échelles pour résoudre avec méthode des situations de proportionnalité.
objectives:
  - Reconnaître et représenter une situation de proportionnalité
  - Effectuer et utiliser un passage à l'unité
  - Calculer un pourcentage d'une quantité
  - Interpréter et utiliser l'échelle d'une carte ou d'un dessin
prerequisites:
  - Multiplication et division
  - Fractions et nombres décimaux
  - Conversions d'unités métriques
vocabulary:
  - en: ratio
    definition: Comparaison ordonnée de deux quantités par une division.
  - en: unit rate
    definition: Quantité qui correspond à une unité d'une autre grandeur.
  - en: scale
    definition: Rapport constant entre une longueur représentée et la longueur réelle correspondante.
flashcards:
  - front: Que signifie le ratio $2:5$ ?
    back: Pour $2$ unités de la première quantité, il y a $5$ unités de la seconde.
  - front: Comment calculer $15\%$ de $80$ ?
    back: On calcule $15/100\times80=12$.
  - front: Que signifie une échelle de $1:25\,000$ ?
    back: Une unité sur le dessin représente $25\,000$ unités identiques dans la réalité.
exercises:
  - id: 5e-proportionality-t1
    tierTitle: Application directe
    prompt: Une peinture est composée selon le ratio bleu:blanc $2:5$ et son volume total est de $21$ L. Combien de litres de peinture bleue contient-elle ?
    solution: Le ratio comporte $2+5=7$ parts égales. Chaque part vaut $21\div7=3$ L ; le volume de peinture bleue est donc $2\times3=6$ L.
    hints:
      - Commencer par déterminer le nombre total de parts égales du ratio.
  - id: 5e-proportionality-t2
    tierTitle: Entraînement standard
    prompt: Huit cahiers coûtent $14{,}40$ €. À prix unitaire constant, combien coûtent $15$ cahiers ?
    solution: Un cahier coûte $14{,}40\div8=1{,}80$ €. Par conséquent, $15$ cahiers coûtent $15\times1{,}80=27$ €.
    hints:
      - Commencer par déterminer le prix d'un cahier.
      - Multiplier ce prix unitaire par $15$.
  - id: 5e-proportionality-t3
    tierTitle: Synthèse du programme officiel
    prompt: Sur une carte à l'échelle $1:25\,000$, un itinéraire prévu mesure $3{,}6$ cm. Un détour augmente la longueur réelle de l'itinéraire de $20\%$. Déterminer la nouvelle longueur réelle en kilomètres.
    solution: À cette échelle, $1$ cm représente $25\,000$ cm, soit $250$ m. L'itinéraire prévu mesure réellement $3{,}6\times250=900$ m. Le détour ajoute $20/100\times900=180$ m ; sa nouvelle longueur vaut donc $900+180=1\,080$ m, soit $1{,}08$ km.
    hints:
      - Convertir $25\,000$ cm en $250$ m.
      - Calculer $20\%$ de $900$ m, puis ajouter cette quantité à la longueur prévue.
    expected: "1,08 km"
    accepted:
      - "1 080 m"
  - id: 5e-proportionality-t4
    tierTitle: Défi avancé
    prompt: >-
      Un itinéraire mesure exactement $18$ km. La carte A est à l'échelle $1:n$, où $n$ est un multiple de $100\,000$ compris entre $300\,000$ et $900\,000$, bornes incluses. Sur la carte A, la longueur de l'itinéraire est un nombre entier de centimètres. La carte B est un agrandissement de la carte A de rapport $1{,}5$ : toutes les longueurs sur la carte B sont multipliées par $1{,}5$ et valent donc $150\%$ des longueurs correspondantes sur la carte A. Sur la carte B également, la longueur de l'itinéraire est un nombre entier de centimètres. Déterminer toutes les valeurs possibles de $n$ et démontrer que la liste est complète.
    solution: Écrivons $n=100\,000m$, où $m$ est un entier compris entre $3$ et $9$. Comme $18$ km valent $1\,800\,000$ cm, la longueur sur la carte A est $1\,800\,000/n=18/m$ cm. C'est un entier seulement si $m$ divise $18$ ; dans l'intervalle donné, $m=3,6,9$. Les longueurs sur la carte A sont alors $6,3,2$ cm. En multipliant chaque longueur par $1{,}5$, on obtient sur la carte B les longueurs respectives $9 ; 4{,}5 ; 3$ cm ; le cas $m=6$ est donc exclu. Ainsi, $n=300\,000$ ou $n=900\,000$. L'étude de la divisibilité a examiné chaque entier $m$ autorisé, ce qui prouve que la liste est complète.
    hints:
      - Convertir $18$ km en $1\,800\,000$ cm et écrire $n=100\,000m$.
      - Déterminer d'abord quand $18/m$ est entier, puis appliquer le coefficient d'agrandissement $1{,}5$.
    rubric:
      - Ramène les échelles autorisées aux cas entiers $m=3,\ldots,9$.
      - Utilise la divisibilité pour conserver $m=3,6,9$, puis multiplie les longueurs correspondantes par $1{,}5$.
      - Conclut que $n=300\,000$ ou $900\,000$ et démontre qu'aucun cas n'a été omis.
---
## Reconnaître une situation de proportionnalité

Deux grandeurs sont **proportionnelles** lorsque l'on obtient toujours l'une en multipliant l'autre par un même nombre, appelé coefficient de proportionnalité. Si $4$ kg de pommes coûtent $10$ €, le coefficient qui permet de passer de la masse au prix est

$$10\div4=2{,}5\text{ euros par kilogramme}.$$

Ainsi, $m$ kilogrammes coûtent $2{,}5m$ euros. Un tableau est un tableau de proportionnalité lorsque le quotient de deux valeurs correspondantes non nulles reste constant.

> Attention : une relation qui comporte une quantité fixe ajoutée n'est pas proportionnelle. Le tarif $3+2d$ euros d'un taxi contient une prise en charge ; doubler la distance $d$ ne double donc pas le prix.

## Ratios et ratios égaux

Le ratio $2:5$ compare deux quantités dans un ordre précis. Une peinture de ratio bleu:blanc $=2:5$ contient $2+5=7$ parts égales. Dans $21$ L de peinture, une part vaut $21\div7=3$ L ; il y a donc $6$ L de bleu et $15$ L de blanc.

Multiplier les deux nombres par un même nombre non nul produit un ratio égal :

$$2:5=6:15.$$

Il ne faut pas confondre le ratio du bleu au blanc, $2:5$, et la proportion de bleu dans le mélange entier, $2/7$.

## Passage à l'unité

Le passage par une unité constitue une méthode fiable en deux étapes. Si $7$ mètres de tissu coûtent $31{,}50$ €, alors le prix d'un mètre est

$$31{,}50\div7=4{,}50$$

euros, puis $12$ mètres coûtent $12\times4{,}50=54$ €. Conserver les unités dans les calculs aide à décider s'il faut multiplier ou diviser.

## Les pourcentages sont des rapports sur 100

$18\%$ signifie $18/100=0{,}18$. Pour calculer $18\%$ de $250$, on effectue $0{,}18\times250=45$.

Pour effectuer une augmentation, on calcule d'abord le pourcentage de la valeur initiale, puis on l'ajoute. Par exemple, augmenter $250$ de $18\%$ donne $250+45=295$. Pour une diminution, on soustrait au contraire le pourcentage calculé.

## Échelles

À l'échelle $1:50\,000$, $1$ cm sur une carte représente $50\,000$ cm dans la réalité. Comme $50\,000$ cm valent $500$ m, une distance de $7{,}2$ cm sur la carte représente

$$7{,}2\times500=3\,600\text{ m}=3{,}6\text{ km}.$$

Il faut toujours convertir les longueurs dans la même unité avant d'appliquer une échelle. Pour un agrandissement de rapport $3:2$, chaque longueur représentée est $3/2=1{,}5$ fois la longueur initiale ; les aires, elles, sont multipliées par $1{,}5^2$.

### Approfondissement : coefficients d'augmentation et de diminution

La méthode en une étape par coefficient multiplicateur relève ici de l'approfondissement. Une augmentation de $18\%$ conserve les $100\%$ initiaux et ajoute $18\%$ ; elle multiplie donc par $1{,}18$. Une diminution de $18\%$ laisse $82\%$ de la valeur initiale ; elle multiplie donc par $0{,}82$.

> Erreur fréquente : augmenter de $20\%$, puis diminuer de $20\%$ ne ramène pas à la valeur initiale. Les coefficients d'approfondissement donnent $1{,}2\times0{,}8=0{,}96$, soit une diminution globale de $4\%$.

### Pour aller plus loin

Les problèmes d'échelle et de pourcentage peuvent cacher des conditions de divisibilité. Si une longueur sur une carte doit être entière, dresser la liste des diviseurs de la longueur réelle permet de prouver que toutes les échelles possibles ont été étudiées.
