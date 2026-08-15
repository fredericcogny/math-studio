---
id: 3e-quantities-measurement
locale: fr
title: Grandeurs, unités composées et volumes
strand: Grandeurs et mesures
summary: Convertir des unités composées ou avec exposant, calculer vitesse, débit, masse volumique et volumes de solides, puis vérifier chaque modèle par les unités.
objectives:
  - Interpréter et convertir les unités composées de vitesse, de débit et de masse volumique
  - Convertir des unités d'aire, de volume et de capacité sans oublier les facteurs au carré ou au cube
  - Calculer les volumes de prismes, cylindres, cônes, pyramides et boules
  - Résoudre des problèmes de mesure en plusieurs étapes avec des unités compatibles et une précision adaptée
  - Utiliser les dimensions et les ordres de grandeur pour valider les formules et les résultats
prerequisites:
  - Raisonnement de proportionnalité et taux unitaires
  - Aires des rectangles, triangles et disques
  - Puissances de dix et utilisation de la calculatrice
vocabulary:
  - en: compound unit
    definition: Unité formée en multipliant ou en divisant des unités de grandeurs différentes, comme km/h ou kg/m$^3$.
  - en: speed
    definition: Distance parcourue par unité de temps.
  - en: flow rate
    definition: Volume qui passe en un point par unité de temps.
  - en: density
    definition: Masse par unité de volume.
  - en: dimensional check
    definition: Vérification que les unités produites par une formule correspondent à la grandeur calculée.
flashcards:
  - front: Comment convertir une vitesse de m/s en km/h ?
    back: On multiplie par $3,6$ ; pour la conversion inverse, on divise par $3,6$.
  - front: Quel lien existe-t-il entre les litres et les unités de volume ?
    back: $1\text{ L}=1\text{ dm}^3$ et $1\text{ mL}=1\text{ cm}^3$.
  - front: Que devient le facteur de conversion pour des unités carrées ou cubes ?
    back: Le facteur de conversion des longueurs est élevé au carré pour les aires et au cube pour les volumes.
  - front: Quelles sont les formules du volume d'un prisme et d'une pyramide d'aire de base $B$ et de hauteur perpendiculaire $h$ ?
    back: $V=Bh$ pour un prisme et $V=\frac13Bh$ pour une pyramide.
  - front: Comment les unités permettent-elles de vérifier la formule $m=\rho V$ ?
    back: Par exemple, $(\text{kg}/\text{m}^3)\times\text{m}^3=\text{kg}$, ce qui est bien une unité de masse.
exercises:
  - id: 3e-quantities-measurement-t1
    tierTitle: Application directe
    prompt: Un échantillon a une masse de $540\text{ g}$ et un volume de $200\text{ cm}^3$. Calculer sa masse volumique en $\text{g}/\text{cm}^3$.
    solution: '$\rho=\frac mV=\frac{540\text{ g}}{200\text{ cm}^3}=2,7\text{ g}/\text{cm}^3$.'
    hints:
      - La masse volumique est le quotient de la masse par le volume.
      - Conserver l'unité quotient $\text{g}/\text{cm}^3$.
  - id: 3e-quantities-measurement-t2
    tierTitle: Problème de cuve type brevet
    prompt: Une cuve cylindrique vide a un rayon intérieur de $0,60\text{ m}$ et une hauteur de $1,50\text{ m}$. Une pompe fournit de l'eau avec un débit de $30\text{ L/min}$. Calculer la capacité de la cuve en litres, puis la durée de remplissage en minutes. Donner les réponses exactes en fonction de $\pi$, puis une durée pratique arrondie à la minute entière supérieure.
    solution: 'Le volume vaut $V=\pi r^2h=\pi\times0,60^2\times1,50=0,54\pi\text{ m}^3=540\pi\text{ L}$. La durée de remplissage est $t=V/q=\frac{540\pi\text{ L}}{30\text{ L/min}}=18\pi\text{ min}\approx56,55\text{ min}$. La pompe doit fonctionner pendant $57$ minutes entières pour remplir la cuve.'
    hints:
      - Calculer le volume du cylindre en mètres cubes avant de le convertir en litres.
      - Utiliser $1\text{ m}^3=1000\text{ L}$ et $t=V/q$.
      - Une durée pratique exprimée en minutes entières doit être arrondie par excès.
    rubric:
      - Calcule le volume du cylindre, égal à $0,54\pi\text{ m}^3$.
      - Convertit correctement la capacité en $540\pi\text{ L}$.
      - Divise par le débit et obtient $18\pi$ minutes, soit environ $56,55$ minutes.
      - Interprète le contexte et arrondit par excès à $57$ minutes entières.
  - id: 3e-quantities-measurement-t3
    tierTitle: Synthèse sur volume et masse volumique
    prompt: Une pièce métallique pleine est composée d'un cylindre de rayon $3\text{ cm}$ et de hauteur $10\text{ cm}$, surmonté d'un cône de même rayon de base et de hauteur perpendiculaire $4\text{ cm}$. La masse volumique du métal est $7,8\text{ g}/\text{cm}^3$. Calculer le volume exact, puis la masse en kilogrammes arrondie à $0,01\text{ kg}$ près. Inclure une vérification dimensionnelle.
    solution: 'Le volume du cylindre vaut $\pi\times3^2\times10=90\pi\text{ cm}^3$. Celui du cône vaut $\frac13\pi\times3^2\times4=12\pi\text{ cm}^3$. Ainsi, $V=102\pi\text{ cm}^3$. La masse vaut $m=\rho V=7,8\times102\pi\text{ g}=795,6\pi\text{ g}\approx2499,45\text{ g}=2,49945\text{ kg}$, soit $2,50\text{ kg}$ au centième près. Du point de vue des unités, $(\text{g}/\text{cm}^3)\times\text{cm}^3=\text{g}$, comme attendu.'
    hints:
      - Additionner les volumes du cylindre et du cône, car leurs intérieurs ne se chevauchent pas.
      - Conserver $\pi$ jusqu'à l'approximation finale.
      - Multiplier la masse volumique par le volume, puis convertir les grammes en kilogrammes.
    rubric:
      - Calcule les volumes du cylindre et du cône, égaux à $90\pi\text{ cm}^3$ et $12\pi\text{ cm}^3$.
      - Obtient le volume total exact $102\pi\text{ cm}^3$.
      - Utilise $m=\rho V$ et obtient une masse arrondie à $2,50\text{ kg}$.
      - Montre que les unités de volume se simplifient dans le calcul avec la masse volumique et qu'il reste une unité de masse.
  - id: 3e-quantities-measurement-t4
    tierTitle: Défi olympique d'optimisation
    prompt: Un cylindre de révolution fermé a un rayon $r$ et une hauteur $h$ entiers strictement positifs, exprimés en centimètres, et un volume de $360\pi\text{ cm}^3$. Déterminer les dimensions qui minimisent son aire totale. Démontrer qu'aucun autre cylindre autorisé n'utilise moins de matériau.
    solution: >-
      La condition sur le volume donne $\pi r^2h=360\pi$, donc $r^2h=360$. Comme $360=2^3\times3^2\times5$, les entiers positifs dont le carré divise $360$ sont exactement $r=1,2,3,6$. Les hauteurs correspondantes sont $h=360,90,40,10$. Pour un cylindre fermé, $S=2\pi r^2+2\pi rh=2\pi(r^2+rh)$. Les valeurs respectives de $S/(2\pi)$ sont $361,184,129,96$. Le minimum est donc $96$, atteint pour $r=6$ et $h=10$ ; l'aire totale minimale vaut $192\pi\text{ cm}^2$. La décomposition en facteurs premiers prouve que la liste des rayons est exhaustive, et chaque rayon détermine une seule hauteur : aucun cylindre autorisé n'a été oublié.
    hints:
      - Simplifier $\pi$ dans la condition sur le volume et déterminer quand $r^2$ divise $360$.
      - Utiliser la décomposition en facteurs premiers de $360$ pour prouver que la liste des rayons possibles est complète.
      - Un cylindre fermé possède deux bases circulaires et une surface latérale.
    rubric:
      - Établit la contrainte entière $r^2h=360$.
      - Démontre que les seuls rayons possibles sont $1,2,3,6$ et trouve les hauteurs correspondantes.
      - Compare toutes les aires avec $S=2\pi r^2+2\pi rh$ et obtient $192\pi\text{ cm}^2$ pour $(r,h)=(6,10)$.
      - Utilise la décomposition en facteurs premiers et une comparaison exhaustive pour démontrer l'optimalité globale.
---
## Grandeurs et unités composées

Une valeur numérique n'a de sens qu'avec son unité. Une **unité composée** combine des unités par multiplication ou par division. La vitesse est une distance par durée, le débit un volume par durée et la masse volumique une masse par volume :

$$v=\frac dt,\qquad q=\frac Vt,\qquad \rho=\frac mV.$$

On en déduit $d=vt$, $V=qt$ et $m=\rho V$. Les unités se comportent comme des facteurs algébriques. Si $v$ est exprimée en km/h et $t$ en heures, alors

$$\frac{\text{km}}{\text{h}}\times\text{h}=\text{km}.$$

Cette simplification constitue une vérification dimensionnelle, et non une décoration facultative.

## Convertir des vitesses

Comme $1\text{ km}=1000\text{ m}$ et $1\text{ h}=3600\text{ s}$,

$$1\text{ m/s}=\frac{1\text{ m}}{1\text{ s}}
=\frac{0,001\text{ km}}{1/3600\text{ h}}
=3,6\text{ km/h}.$$

Pour passer de m/s à km/h, on multiplie par $3,6$ ; dans l'autre sens, on divise par $3,6$. Ainsi, $72\text{ km/h}=20\text{ m/s}$.

La vitesse moyenne est le quotient de la distance totale par la durée totale. Ce n'est généralement pas la moyenne de deux vitesses. Une personne qui parcourt $60$ km à $30$ km/h puis $60$ km à $60$ km/h met $2+1=3$ h ; sa vitesse moyenne vaut donc $120/3=40$ km/h.

## Débit et masse volumique

Pour un débit constant,

$$q=\frac Vt,\qquad V=qt,
\qquad t=\frac Vq.$$

Les unités de volume et de débit doivent être compatibles. Par exemple, $2,5\text{ L/s}=150\text{ L/min}$, car une minute contient $60$ secondes.

La masse volumique relie masse et volume :

$$\rho=\frac mV,
\qquad m=\rho V,
\qquad V=\frac m\rho.$$

Une masse volumique de $1\text{ g}/\text{cm}^3$ est égale à $1000\text{ kg}/\text{m}^3$ :

$$1\frac{\text g}{\text{cm}^3}
=\frac{0,001\text{ kg}}{10^{-6}\text{ m}^3}
=1000\frac{\text{kg}}{\text m^3}.$$

Il faut convertir ensemble la masse et le volume ; modifier une seule partie d'une unité composée change sa valeur de manière incorrecte.

## Convertir longueurs, aires et volumes

Si une conversion de longueur a pour facteur $k$, la conversion d'aire correspondante a pour facteur $k^2$ et celle de volume pour facteur $k^3$. Comme $1\text{ m}=100\text{ cm}$,

$$1\text{ m}^2=100^2\text{ cm}^2=10\,000\text{ cm}^2,$$

$$1\text{ m}^3=100^3\text{ cm}^3=1\,000\,000\text{ cm}^3.$$

Les capacités et les volumes sont reliés par

$$1\text{ L}=1\text{ dm}^3,
\qquad1\text{ mL}=1\text{ cm}^3,
\qquad1\text{ m}^3=1000\text{ L}.$$

**Conversion résolue.**

$$0,035\text{ m}^3=35\text{ dm}^3=35\text{ L},$$

tandis que $0,035\text{ m}^2=350\text{ cm}^2$. Les exposants différents produisent des facteurs de conversion différents.

## Volumes des prismes et cylindres

Notons $B$ l'aire d'une base et $h$ la hauteur perpendiculaire. Un prisme et un cylindre ont une section constante, donc

$$V=Bh.$$

Pour un pavé droit, $V=Llh$. Pour un cylindre de rayon $r$,

$$V=\pi r^2h.$$

**Exemple.** Un prisme triangulaire a pour base un triangle de base $8$ cm et de hauteur perpendiculaire $5$ cm ; la longueur du prisme vaut $12$ cm. Son volume est

$$V=\left(\frac12\times8\times5\right)\times12=240\text{ cm}^3.$$

## Volumes des pyramides et cônes

Une pyramide ou un cône ayant la même base et la même hauteur perpendiculaire qu'un prisme ou un cylindre possède le tiers de son volume :

$$V=\frac13Bh.$$

Un cône a donc pour volume $V=\frac13\pi r^2h$. La hauteur est perpendiculaire à la base. Une arête de pyramide ou une génératrice de cône ne peut pas la remplacer, sauf si l'énoncé établit leur égalité.

**Exemple.** Une pyramide à base carrée de côté $9$ cm et de hauteur $10$ cm a pour volume

$$V=\frac13\times9^2\times10=270\text{ cm}^3.$$

## Volume d'une boule

Une **sphère** est une surface ; le solide qu'elle délimite est une **boule**. Une boule de rayon $r$ a pour volume

$$V=\frac43\pi r^3.$$

Pour une boule de diamètre $12$ cm, le rayon vaut $6$ cm, donc $V=\frac43\pi\times6^3=288\pi\text{ cm}^3$. Il faut toujours diviser un diamètre donné par $2$ avant d'utiliser une formule avec le rayon.

## Une méthode fiable en plusieurs étapes

1. Identifier la grandeur demandée et écrire son unité cible.
2. Faire un schéma de l'objet ou de la situation et le légender.
3. Convertir toutes les données dans des unités compatibles.
4. Choisir une formule et vérifier ses dimensions.
5. Calculer exactement lorsque c'est possible, en conservant $\pi$ jusqu'à la fin.
6. Arrondir seulement la valeur finale selon le contexte.
7. Vérifier le signe, l'ordre de grandeur et l'unité du résultat.

Par exemple, $\pi r^2h$ a pour dimension $L^2\times L=L^3$ et peut donc représenter un volume. L'expression $2\pi rh$ a pour dimension $L^2$ : elle représente une aire, et non un volume.

## Vérifications dimensionnelles et vraisemblance

Les deux membres d'une équation doivent avoir des dimensions compatibles. L'équation $d=vt$ est cohérente, car $(L/T)\times T=L$. L'équation $d=v+t$ ne l'est pas : on ne peut pas additionner une vitesse et une durée.

Les dimensions ne prouvent pas qu'une formule est correcte, mais elles peuvent prouver qu'elle est fausse. Il faut aussi estimer la taille du résultat. Un cylindre de rayon voisin de $1$ m et de hauteur voisine de $2$ m doit avoir un volume de quelques mètres cubes, et non de quelques litres ou de centaines de mètres cubes.

Erreurs fréquentes :

- appliquer directement un facteur de conversion de longueur à une aire ou à un volume ;
- mélanger des minutes avec un débit par seconde ;
- utiliser le diamètre à la place du rayon ;
- oublier le facteur $\frac13$ pour un cône ou une pyramide ;
- confondre l'aire d'une sphère et le volume d'une boule ;
- arrondir les valeurs intermédiaires et accumuler des erreurs évitables.

## Prolongement : dimensions entières et optimisation

Lorsque les dimensions sont entières et qu'un volume est fixé, la factorisation peut transformer un problème de mesure en un problème d'optimisation fini. Il faut d'abord démontrer que toutes les dimensions autorisées ont été énumérées, puis comparer la grandeur étudiée dans tous les cas. Tester seulement quelques formes vraisemblables ne démontre pas un minimum global.
