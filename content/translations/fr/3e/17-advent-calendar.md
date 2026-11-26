---
id: 3e-advent-calendar
locale: fr
title: "Calendrier de l'Avent : Le Mystère du Polar Express"
strand: Bonus saisonnier · Résolution de problèmes
summary: Vingt-quatre énigmes, algorithmes et démonstrations de Noël à bord du Polar Express pour déjouer le Fantôme du Givre à travers tout le programme de 3e, du 1er au 24 décembre.
objectives:
  - Mobiliser équations, arithmétique, identités remarquables, fonctions affines, Thalès, Pythagore, trigonométrie et géométrie dans l'espace
  - Tracer et analyser des algorithmes Python mêlant boucles, algorithme d'Euclide, cycles modulaires et dichotomie
  - Rédiger des démonstrations rigoureuses de niveau Brevet et défi en algèbre, géométrie et invariants
prerequisites:
  - Équations du premier degré, identités remarquables et décomposition en facteurs premiers
  - Théorèmes de Pythagore et de Thalès, trigonométrie et homothéties
  - Statistiques, probabilités composées, solides et boucles Python
vocabulary:
  - en: homothety
    definition: Transformation géométrique de centre donné et de rapport $k$ ; les longueurs sont multipliées par $|k|$, les aires par $k^2$ et les volumes par $|k|^3$.
  - en: binary search
    definition: Algorithme de recherche qui divise par deux l'intervalle des candidats à chaque étape.
  - en: frustum
    definition: Partie inférieure d'un cône obtenue après l'avoir coupé par un plan parallèle à sa base.
  - en: range
    definition: Différence entre la valeur maximale et la valeur minimale d'une série statistique.
flashcards:
  - front: Lorsqu'un solide subit un agrandissement de rapport $k$, comment évoluent son aire et son volume ?
    back: Son aire est multipliée par $k^2$ et son volume par $k^3$.
  - front: Quelle est l'identité remarquable de la différence de deux carrés $a^2 - b^2$ ?
    back: $a^2 - b^2 = (a - b)(a + b)$, très utile pour factoriser ou calculer mentalement.
  - front: Si un point $C$ appartient au cercle de diamètre $[AB]$ (avec $C \ne A, B$), que dire du triangle $ABC$ ?
    back: Le triangle $ABC$ est rectangle en $C$.
  - front: Combien de tests par dichotomie suffisent au pire cas pour localiser un élément parmi $N$ éléments ordonnés ?
    back: Le plus petit entier $m$ tel que $2^m \ge N$ (pour $N = 1000$, $m = 10$ car $2^{10} = 1024$).
adventDays:
  - id: 3e-advent-01
    title: Le comptage du départ de minuit
    topic: Équations du premier degré
    story: Le 1er décembre à minuit, le Polar Express quitte la gare enneigée et le contrôleur remarque un étrange déséquilibre entre les deux premières voitures.
    prompt: >-
      Les voitures $1$ et $2$ transportent $84$ voyageurs au total. Lorsque $9$ voyageurs passent de la voiture $1$ à la voiture $2$ pour boire un chocolat chaud, la voiture $1$ compte **encore** deux fois plus de voyageurs que la voiture $2$. Combien de voyageurs étaient au départ dans la voiture $1$ ?
    solution: >-
      Notons $x$ le nombre initial de voyageurs en voiture $1$ ; la voiture $2$ en compte alors $84 - x$. Après le déplacement de $9$ personnes, la voiture $1$ en compte $x - 9$ et la voiture $2$ en compte $84 - x + 9 = 93 - x$. L'énoncé donne $x - 9 = 2(93 - x) = 186 - 2x$, d'où $3x = 195$ et $x = 65$. Vérification : $65 - 9 = 56$ et $19 + 9 = 28 = 56 \div 2$.
    hints:
      - Poser $x$ le nombre initial de voyageurs dans la voiture $1$, donc $84 - x$ dans la voiture $2$.
      - Traduire la nouvelle répartition par une équation reliant $x - 9$ et $(84 - x) + 9$.

  - id: 3e-advent-02
    title: Les plateaux de chocolat chaud
    topic: Décomposition en facteurs premiers et PGCD
    story: Le Fantôme du Givre a brouillé l'inventaire du wagon-restaurant ! Les chefs veulent composer le plus grand nombre possible de plateaux identiques sans aucun reste.
    prompt: >-
      L'office dispose de $252$ sucres d'orge et de $396$ guimauves. Les chefs préparent le **nombre maximal** de plateaux identiques en utilisant absolument toutes les friandises. Combien de **friandises au total** (sucres d'orge et guimauves réunis) figurent sur **chaque** plateau ?
    solution: >-
      Décomposons en facteurs premiers : $252 = 2^2 \times 3^2 \times 7$ et $396 = 2^2 \times 3^2 \times 11$. Le plus grand diviseur commun est $\text{PGCD}(252 ; 396) = 2^2 \times 3^2 = 36$ : on peut donc préparer $36$ plateaux identiques. Chaque plateau contient $252 \div 36 = 7$ sucres d'orge et $396 \div 36 = 11$ guimauves, soit $7 + 11 = 18$ friandises au total.
    hints:
      - Calculer $\text{PGCD}(252 ; 396)$ pour déterminer le nombre maximal de plateaux identiques.
      - Diviser $252$ et $396$ par ce PGCD, puis additionner les deux nombres obtenus.

  - id: 3e-advent-03
    title: Le tender à charbon givré
    topic: Calculs exacts sur les fractions
    story: En gravissant la crête du Givre vers le col du Glacier, le chauffeur doit calculer la fraction exacte de charbon restant sans aucune approximation.
    prompt: >-
      Le tender de la locomotive est plein au départ. La traversée de la vallée des Sapins consomme $\frac{2}{7}$ du tender plein. La montée de la crête du Givre consomme $\frac{3}{5}$ de **ce qui restait**. Au col du Glacier, l'équipage recharge $\frac{1}{4}$ d'un tender plein. Sous forme de fraction irréductible `a/b`, quelle fraction d'un tender plein est alors remplie ?
    solution: >-
      Après la vallée des Sapins, il reste $1 - \frac{2}{7} = \frac{5}{7}$ du tender. Consommer $\frac{3}{5}$ de ce reste laisse $\frac{2}{5} \times \frac{5}{7} = \frac{2}{7}$ d'un tender plein. Après la recharge de $\frac{1}{4}$, on dispose de $\frac{2}{7} + \frac{1}{4} = \frac{8 + 7}{28} = \frac{15}{28}$ du tender.
    hints:
      - Calculer la fraction restante après la vallée des Sapins, puis la multiplier par $1 - \frac{3}{5} = \frac{2}{5}$.
      - Ajouter $\frac{1}{4}$ en réduisant au dénominateur commun $28$.

  - id: 3e-advent-04
    title: Le script brouillé du télégraphe
    topic: Boucles et conditions en Python
    story: 'Un message codé crépite sur le télégraphe en laiton : le Fantôme du Givre a laissé un script Python dont le résultat donne le numéro du quai suivant.'
    prompt: |
      Exécuter à la main le script Python suivant et déterminer la valeur finale de `code` :

      ```python
      code = 1
      for k in range(1, 9):
          if k % 3 == 0:
              code = code * 2 - 1
          else:
              code = code + k
      ```
    solution: >-
      L'instruction `range(1, 9)` parcourt les entiers $k = 1, 2, 3, 4, 5, 6, 7, 8$ :
      - $k = 1$ : $1 + 1 = 2$
      - $k = 2$ : $2 + 2 = 4$
      - $k = 3$ (multiple de $3$) : $4 \times 2 - 1 = 7$
      - $k = 4$ : $7 + 4 = 11$
      - $k = 5$ : $11 + 5 = 16$
      - $k = 6$ (multiple de $3$) : $16 \times 2 - 1 = 31$
      - $k = 7$ : $31 + 7 = 38$
      - $k = 8$ : $38 + 8 = 46$.
      La valeur finale de `code` est $46$.
    hints:
      - 'Attention : en Python, `range(1, 9)` s''arrête à $8$ (le nombre $9$ est exclu).'
      - Seules les valeurs $k = 3$ et $k = 6$ vérifient `k % 3 == 0`.

  - id: 3e-advent-05
    title: Cristaux de givre sur le pare-brise
    topic: Puissances de 10 et notation scientifique
    story: En fendant un blizzard étincelant, le mécanicien mesure la masse de cristaux de glace microscopiques qui recouvrent le phare de la locomotive.
    prompt: >-
      Chaque cristal de givre déposé sur le pare-brise a une masse de $2{,}5 \times 10^{-7}\text{ g}$. Pendant une bourrasque, le givre s'accumule au rythme de $1{,}6 \times 10^4$ cristaux par seconde. Quelle masse de givre (en **grammes**) s'accumule en $10$ minutes ?
    solution: >-
      Convertissons $10$ minutes en secondes : $10 \times 60 = 600 = 6 \times 10^2\text{ s}$. Le nombre total de cristaux est $(1{,}6 \times 10^4) \times (6 \times 10^2) = 9{,}6 \times 10^6$. En multipliant par la masse d'un cristal, on obtient $(9{,}6 \times 10^6) \times (2{,}5 \times 10^{-7}) = 24 \times 10^{-1} = 2{,}4\text{ g}$.
    hints:
      - Convertir d'abord $10$ minutes en secondes ($600 = 6 \times 10^2\text{ s}$).
      - Regrouper les nombres décimaux ($1{,}6 \times 6 \times 2{,}5$) séparément des puissances de $10$ ($10^4 \times 10^2 \times 10^{-7}$).

  - id: 3e-advent-06
    title: La gravure du Billet d'Or
    topic: Identités remarquables
    story: Sous la dorure de votre billet se cache un calcul impressionnant à quatre chiffres — mais les identités remarquables le résolvent en quelques secondes !
    prompt: |
      Sans calculatrice, déterminer la valeur entière exacte de :

      $$N = 2026^2 - 2024 \times 2028 + 2025^2 - 2024^2$$
    solution: >-
      Utilisons deux fois l'identité $(a - b)(a + b) = a^2 - b^2$ :
      - D'une part, $2024 \times 2028 = (2026 - 2)(2026 + 2) = 2026^2 - 4$, donc $2026^2 - 2024 \times 2028 = 4$.
      - D'autre part, $2025^2 - 2024^2 = (2025 - 2024)(2025 + 2024) = 1 \times 4049 = 4049$.
      En additionnant les deux résultats, on trouve $N = 4 + 4049 = 4053$.
    hints:
      - Réécrire $2024 \times 2028$ sous la forme $(2026 - 2)(2026 + 2)$ pour faire disparaître $2026^2$.
      - Factoriser $2025^2 - 2024^2$ à l'aide de $a^2 - b^2 = (a - b)(a + b)$.

  - id: 3e-advent-07
    title: Le croisement sur la voie parallèle
    topic: Fonctions affines
    story: 'Dans la nuit gelée, un traîneau postal express fonce vers le sud sur la voie parallèle : l''aiguilleur veut connaître la borne kilométrique exacte du croisement.'
    prompt: >-
      À l'instant $t = 0$ minute, le Polar Express passe la borne kilométrique $18$ vers le nord à $90\text{ km/h}$ ($1{,}5\text{ km/min}$). Au même instant, un traîneau postal quitte la borne kilométrique $128$ vers le sud à $60\text{ km/h}$ ($1\text{ km/min}$). À quelle borne kilométrique se croisent-ils ?
    solution: >-
      Modélisons les positions (en km) au bout de $t$ minutes par deux fonctions affines : $f(t) = 18 + 1{,}5t$ pour le train et $g(t) = 128 - t$ pour le traîneau. Ils se croisent lorsque $18 + 1{,}5t = 128 - t \iff 2{,}5t = 110 \iff t = 44$ minutes. La position de croisement est alors $g(44) = 128 - 44 = 84$ (vérification : $18 + 1{,}5 \times 44 = 84$).
    hints:
      - Exprimer la position kilométrique de chaque véhicule par une fonction affine du temps $t$ en minutes.
      - Résoudre $f(t) = g(t)$ pour trouver $t$, puis calculer $f(t)$ ou $g(t)$.

  - id: 3e-advent-08
    title: Le pont de glace des gorges de l'Aurore
    topic: Théorème de Thalès et réciproque
    story: Avant que le Polar Express ne s'engage sur le viaduc des gorges de l'Aurore, l'inspecteur vérifie que le tablier supérieur est parfaitement parallèle à l'entretoise inférieure.
    prompt: >-
      Deux câbles d'acier rectilignes $[AC]$ et $[BD]$ se croisent en un pylône central $O$, les points $A, O, C$ étant alignés dans cet ordre ainsi que $B, O, D$ (configuration papillon). Les ingénieurs mesurent $OA = 15\text{ m}$, $OC = 21\text{ m}$, $OB = 20\text{ m}$ et $OD = 28\text{ m}$.
      1. À l'aide de la réciproque du théorème de Thalès, démontrer que le tablier $(AB)$ est parallèle à l'entretoise $(CD)$.
      2. Sachant que $AB = 25\text{ m}$, calculer la longueur exacte $CD$.
    solution: >-
      1. **Parallélisme :** Calculons séparément les deux quotients : $\frac{OA}{OC} = \frac{15}{21} = \frac{5}{7}$ et $\frac{OB}{OD} = \frac{20}{28} = \frac{5}{7}$. On a donc $\frac{OA}{OC} = \frac{OB}{OD}$. De plus, les points $A, O, C$ et $B, O, D$ sont alignés dans le même ordre sur deux droites sécantes en $O$. D'après la réciproque du théorème de Thalès, les droites $(AB)$ et $(CD)$ sont parallèles.
      2. **Longueur $CD$ :** D'après le théorème de Thalès, $\frac{AB}{CD} = \frac{OA}{OC} = \frac{5}{7}$, donc $CD = 25 \times \frac{7}{5} = 35\text{ m}$.
    hints:
      - Calculer et simplifier séparément les quotients $\frac{OA}{OC}$ et $\frac{OB}{OD}$ avant de conclure à leur égalité.
      - Penser à citer explicitement l'alignement dans le même ordre des points $A, O, C$ et $B, O, D$ pour la réciproque de Thalès.
    rubric:
      - Calcule et compare séparément les quotients simplifiés $\frac{OA}{OC} = \frac{5}{7}$ et $\frac{OB}{OD} = \frac{5}{7}$.
      - Précise la condition d'alignement dans le même ordre ($A, O, C$ et $B, O, D$) et applique la réciproque du théorème de Thalès pour conclure $(AB) \parallel (CD)$.
      - Utilise le théorème de Thalès pour calculer $CD = 25 \times \frac{7}{5} = 35\text{ m}$.

  - id: 3e-advent-09
    title: Le mât de signalisation brisé
    topic: Théorème de Pythagore et équations
    story: Une tempête hivernale a cassé le grand mât en bois près de l'embranchement du Givre, couchant son sommet dans la neige.
    prompt: >-
      Un mât de signalisation vertical de $18\text{ m}$ se dresse sur un sol horizontal. Une rafale le brise en un point de sa hauteur ; la partie supérieure reste attachée au point de cassure tandis que son sommet touche la neige à $12\text{ m}$ du pied du mât. À quelle hauteur au-dessus du sol (en mètres) le mât s'est-il brisé ?
    solution: >-
      Notons $h$ la hauteur (en mètres) de la partie restée verticale. La partie rabattue forme l'hypoténuse d'un triangle rectangle et mesure $18 - h$. D'après le théorème de Pythagore : $h^2 + 12^2 = (18 - h)^2$, soit $h^2 + 144 = 324 - 36h + h^2$. En retranchant $h^2$ de chaque côté, il reste $36h = 180$, d'où $h = 5\text{ m}$ (triangle rectangle $(5 ; 12 ; 13)$).
    hints:
      - Appeler $h$ la hauteur de la cassure ; la partie supérieure rabattue (l'hypoténuse) mesure alors $18 - h$.
      - Appliquer le théorème de Pythagore et observer que les termes $h^2$ s'éliminent des deux côtés !

  - id: 3e-advent-10
    title: Le piège du col des Rennes
    topic: Vitesses moyennes et moyenne harmonique
    story: Le Fantôme du Givre parie un panier de pains d'épices que la vitesse moyenne du train dans le col des Rennes est de $50\text{ km/h}$ — ne tombez pas dans son piège !
    prompt: >-
      Le Polar Express gravit un col de $60\text{ km}$ à la vitesse constante de $40\text{ km/h}$, puis redescend exactement $60\text{ km}$ sur l'autre versant à $60\text{ km/h}$. Quelle est la **véritable vitesse moyenne** du train (en $\text{km/h}$) sur l'ensemble des $120\text{ km}$ de traversée ?
    solution: >-
      Calculons la durée de chaque trajet : la montée dure $\frac{60}{40} = 1{,}5\text{ h}$ et la descente dure $\frac{60}{60} = 1\text{ h}$, soit une durée totale de $2{,}5\text{ h}$. Sur une distance totale de $120\text{ km}$, la vitesse moyenne est $\frac{120}{2{,}5} = 48\text{ km/h}$.
    hints:
      - On ne peut jamais faire la simple moyenne de deux vitesses lorsqu'elles ne durent pas le même temps.
      - Calculer le temps de montée et le temps de descente, puis diviser $120\text{ km}$ par la durée totale.

  - id: 3e-advent-11
    title: Le verrou d'Euclide de l'aiguillage
    topic: Algorithme d'Euclide en Python
    story: Pour réaligner les aiguillages gelés de la jonction d'Argent, il faut tracer l'algorithme d'Euclide du poste d'aiguillage en combinant son PGCD et son nombre d'itérations.
    prompt: |
      Exécuter le programme Python ci-dessous et déterminer la valeur entière exacte de `resultat` :

      ```python
      a, b = 156, 66
      etapes = 0
      while b != 0:
          a, b = b, a % b
          etapes += 1
      resultat = a * 10 + etapes
      ```
    solution: >-
      Suivons les étapes de l'algorithme d'Euclide :
      - Étape $1$ : $156 = 2 \times 66 + 24 \implies (a ; b) = (66 ; 24)$, `etapes = 1`.
      - Étape $2$ : $66 = 2 \times 24 + 18 \implies (a ; b) = (24 ; 18)$, `etapes = 2`.
      - Étape $3$ : $24 = 1 \times 18 + 6 \implies (a ; b) = (18 ; 6)$, `etapes = 3`.
      - Étape $4$ : $18 = 3 \times 6 + 0 \implies (a ; b) = (6 ; 0)$, `etapes = 4`.
      La boucle s'arrête avec `a = 6` et `etapes = 4`, d'où `resultat = 6 * 10 + 4 = 64`.
    hints:
      - À chaque tour de boucle, calculer le reste `a % b` de la division euclidienne et ajouter $1$ à `etapes`.
      - S'arrêter dès que `b` vaut $0$ ; `a` contient alors $\text{PGCD}(156 ; 66)$.

  - id: 3e-advent-12
    title: La falaise du phare Lumière-d'Étoile
    topic: Trigonométrie dans le triangle rectangle
    story: 'De l''autre côté d''un lac gelé parfaitement plat, le phare Lumière-d''Étoile perce la brume : deux visées successives permettent de mesurer la hauteur de sa falaise.'
    prompt: >-
      Depuis le wagon panoramique arrêté sur le lac gelé horizontal, on observe le sommet d'une falaise verticale sous un angle d'élévation de $30^\circ$. Le train avance alors de $40\text{ m}$ en ligne droite vers la falaise : l'angle d'élévation vers ce même sommet vaut désormais $60^\circ$. Calculer la hauteur $h$ de la falaise, arrondie au **dixième de mètre près** (`0,1 m`).
    solution: >-
      Notons $x$ la distance horizontale entre la seconde position et le pied de la falaise. Dans le triangle rectangle le plus proche, $\tan(60^\circ) = \frac{h}{x}$, donc $h = x\sqrt{3}$. Dans le grand triangle rectangle, $\tan(30^\circ) = \frac{h}{x + 40} = \frac{1}{\sqrt{3}}$, d'où $x + 40 = h\sqrt{3} = 3x$, ce qui donne $2x = 40$ et $x = 20\text{ m}$. Ainsi $h = 20\sqrt{3} \approx 34{,}64\text{ m}$, soit $34{,}6\text{ m}$ au dixième près.
    hints:
      - Noter $x$ la distance horizontale depuis la seconde position et écrire $\tan(60^\circ) = \frac{h}{x}$ ainsi que $\tan(30^\circ) = \frac{h}{x + 40}$.
      - 'On peut aussi remarquer que le triangle formé par les deux points de visée et le sommet a pour angles $30^\circ, 120^\circ, 30^\circ$ : il est isocèle, donc la ligne de visée oblique mesure $40\text{ m}$ !'

  - id: 3e-advent-13
    title: Les carafes bonhommes de neige
    topic: Homothétie et effet sur les volumes
    story: 'Dans le wagon-cadeaux trônent deux bonhommes de neige en porcelaine semblables : le plus grand est un agrandissement du petit, et le serveur souhaite le remplir de chocolat chaud.'
    prompt: >-
      Deux carafes en porcelaine en forme de bonhomme de neige sont géométriquement semblables : la grande est un agrandissement de la petite de rapport d'homothétie $k = 1{,}5$. La petite carafe contient $320\text{ mL}$ de chocolat chaud et nécessite $240\text{ cm}^2$ d'émail blanc. Quel est le **volume** (en $\text{mL}$) de la grande carafe ?
    solution: >-
      Lors d'un agrandissement de rapport $k = 1{,}5 = \frac{3}{2}$, les aires sont multipliées par $k^2$, mais les **volumes** sont multipliés par $k^3 = \left(\frac{3}{2}\right)^3 = \frac{27}{8} = 3{,}375$. Le volume de la grande carafe vaut donc $320 \times \frac{27}{8} = 40 \times 27 = 1080\text{ mL}$. (L'aire d'émail de $240\text{ cm}^2$ n'intervient pas dans le calcul du volume.)
    hints:
      - Se rappeler par quel facteur est multiplié un volume lors d'un agrandissement de rapport $k = 1{,}5$.
      - Calculer $1{,}5^3 = \left(\frac{3}{2}\right)^3 = \frac{27}{8}$ puis multiplier par $320\text{ mL}$.

  - id: 3e-advent-14
    title: La loterie des deux sacs de grelots
    topic: Probabilités composées
    story: Dans le wagon-salon, le contrôleur propose de gagner un grelot en or en lançant une pièce puis en tirant un grelot dans l'un de deux sacs en velours.
    prompt: >-
      Le sac A contient $3$ grelots dorés et $5$ grelots argentés ; le sac B contient $4$ grelots dorés et $2$ grelots argentés. Un voyageur lance une pièce équilibrée : sur Pile il tire un grelot au hasard dans le sac A ; sur Face il tire un grelot au hasard dans le sac B. Quelle est la probabilité exacte (sous forme de fraction irréductible `a/b`) d'obtenir un grelot **doré** ?
    solution: >-
      Construisons un arbre pondéré à deux niveaux :
      - Chemin (Pile, Doré) : $\frac{1}{2} \times \frac{3}{8} = \frac{3}{16}$.
      - Chemin (Face, Doré) : $\frac{1}{2} \times \frac{4}{6} = \frac{1}{2} \times \frac{2}{3} = \frac{1}{3}$.
      La somme des deux chemins incompatibles donne $P(\text{Doré}) = \frac{3}{16} + \frac{1}{3} = \frac{9 + 16}{48} = \frac{25}{48}$.
    hints:
      - Tracer un arbre de probabilités avec le lancer de pièce au premier niveau ($\frac{1}{2}$ chacun) puis la couleur du grelot au second niveau.
      - Multiplier les probabilités le long de chaque branche gagnante et additionner les deux fractions.

  - id: 3e-advent-15
    title: Le cadenas algébrique de la salle des machines
    topic: Factorisation et divisibilité
    story: Le Fantôme du Givre a cadenassé la salle des machines avec une énigme littérale, prétendant que sa formule peut donner l'année $2026$.
    prompt: |
      Pour tout entier relatif $n$, on considère l'expression :

      $$E(n) = (2n + 3)^2 - (2n - 1)^2$$

      Le Fantôme du Givre affirme qu'il existe un entier $n$ tel que $E(n) = 2026$.
      1. Factoriser ou développer $E(n)$ pour démontrer que $E(n)$ est **toujours** un multiple de $8$.
      2. En déduire une démonstration complète prouvant que le Fantôme bluffe.
    solution: >-
      1. **Factorisation :** À l'aide de $a^2 - b^2 = (a - b)(a + b)$ avec $a = 2n + 3$ et $b = 2n - 1$, on obtient $E(n) = \big((2n + 3) - (2n - 1)\big)\big((2n + 3) + (2n - 1)\big) = 4(4n + 2) = 8(2n + 1)$. (En développant directement : $(4n^2 + 12n + 9) - (4n^2 - 4n + 1) = 16n + 8 = 8(2n + 1)$.) Comme $2n + 1$ est entier, $E(n)$ est toujours divisible par $8$.
      2. **Réfutation pour $2026$ :** La division euclidienne de $2026$ par $8$ donne $2026 = 8 \times 253 + 2$, donc $2026$ n'est pas un multiple de $8$. Il n'existe donc aucun entier $n$ tel que $E(n) = 2026$.
    hints:
      - Utiliser $a^2 - b^2 = (a - b)(a + b)$ (ou développer prudemment les deux carrés) pour réduire $E(n)$.
      - Mettre $8$ en facteur dans l'expression obtenue, puis tester la divisibilité de $2026$ par $8$.
    rubric:
      - Simplifie correctement $E(n)$ en $16n + 8 = 8(2n + 1)$ par développement ou différence de carrés.
      - Démontre que $E(n)$ est toujours un multiple de $8$ pour tout entier $n$.
      - Montre que $2026$ n'est pas divisible par $8$ ($2026 = 8 \times 253 + 2$) et conclut qu'aucune solution entière n'existe.

  - id: 3e-advent-16
    title: La lanterne en tronc de cône
    topic: Géométrie dans l'espace et sections de cônes
    story: Une lanterne conique en verre se balance au-dessus de la table ; le souffleur a tranché sa pointe parallèlement à la base pour laisser passer l'air chaud.
    prompt: >-
      Une lanterne en verre est obtenue à partir d'un cône de révolution de hauteur $18\text{ cm}$ et de rayon de base $6\text{ cm}$. Un plan parallèle à la base sectionne les $6\text{ cm}$ supérieurs du cône pour ménager une ouverture plate. Quelle fraction exacte (irréductible `a/b`) du **volume** du cône initial reste dans la lanterne (le tronc de cône) ?
    solution: >-
      Le petit cône retiré au sommet par la section parallèle est une réduction du cône initial de rapport $k = \frac{6}{18} = \frac{1}{3}$. Son volume vaut donc $k^3 = \left(\frac{1}{3}\right)^3 = \frac{1}{27}$ du volume initial. Le tronc de cône restant conserve par conséquent $1 - \frac{1}{27} = \frac{26}{27}$ du volume d'origine.
    hints:
      - La section d'un cône par un plan parallèle à sa base découpe au sommet un petit cône qui est une réduction du grand cône.
      - Calculer le rapport des hauteurs $k = \frac{6}{18}$ et l'élever au cube pour obtenir la fraction de volume retirée !

  - id: 3e-advent-17
    title: Les cinq malles des voyageurs
    topic: Moyenne, médiane et étendue
    story: 'Cinq malles numérotées reposent sur la balance du fourgon, mais la neige a effacé leurs étiquettes : seul le résumé statistique reste lisible.'
    prompt: >-
      Cinq malles de cadeaux ont des masses entières (en kg) rangées par ordre croissant : $a \le b \le c \le d \le e$.
      - La **médiane** vaut $14\text{ kg}$.
      - La **moyenne** vaut $15\text{ kg}$.
      - L'**étendue** ($e - a$) vaut $10\text{ kg}$.
      - La valeur $14$ apparaît **exactement deux fois**, tandis que les trois autres masses sont toutes distinctes entre elles et différentes de $14$.

      Quelle est la masse **maximale possible** $e$ (en kg) de la malle la plus lourde ?
    solution: >-
      La somme des cinq masses vaut $5 \times 15 = 75$, la médiane est $c = 14$ et $a = e - 10$. Comme $14$ apparaît exactement deux fois dans la liste triée, deux cas se présentent :
      - **Cas 1 ($b = c = 14$) :** On a $(e - 10) + 14 + 14 + d + e = 75 \implies 2e + d = 57$ avec $15 \le d < e$. La plus petite valeur possible pour $d$ est $15$, ce qui donne $2e = 42 \implies e = 21$ (série valide : $11 ; 14 ; 14 ; 15 ; 21$).
      - **Cas 2 ($c = d = 14$) :** On a $(e - 10) + b + 14 + 14 + e = 75 \implies 2e + b = 57$ avec $a < b \le 13$. Pour $b = 13$, on trouve $2e = 44 \implies e = 22$ et $a = 12$, donnant la série valide $(12 ; 13 ; 14 ; 14 ; 22)$ (somme $75$, médiane $14$, étendue $10$, unique doublon $14$). Pour $e \ge 23$, on aurait $b \le 11 < 13 \le a$, ce qui contredit $a \le b$.
      La masse maximale possible de la plus lourde malle est donc $e = 22\text{ kg}$.
    hints:
      - Utiliser la moyenne pour trouver la somme $a + b + c + d + e = 75$, puis remplacer $a = e - 10$ et $c = 14$.
      - 'Étudier les deux positions possibles du doublon $14$ dans la liste rangée : $(b ; c) = (14 ; 14)$ ou $(c ; d) = (14 ; 14)$, en vérifiant l''ordre $a < b$ ou $d < e$.'

  - id: 3e-advent-18
    title: Le cadran à chiffrements rotatif
    topic: Boucles et cycles modulaires
    story: Le Fantôme du Givre a verrouillé la cabine du télégraphe avec un cadran à $2026$ tours — impossible de tout simuler à la main sans repérer le cycle !
    prompt: |
      Déterminer la valeur exacte de `x` à la fin de la boucle Python suivante :

      ```python
      x = 2
      for etape in range(2026):
          x = (x * 3) % 13
      ```
    solution: >-
      Calculons les premières valeurs successives de `x` :
      - Départ (`etape = 0`) : $x = 2$.
      - Après $1$ tour : $(2 \times 3) \bmod 13 = 6$.
      - Après $2$ tours : $(6 \times 3) \bmod 13 = 18 \bmod 13 = 5$.
      - Après $3$ tours : $(5 \times 3) \bmod 13 = 15 \bmod 13 = 2$ !
      Les valeurs se répètent selon un cycle de période $3$ : $(2, 6, 5, 2, 6, 5, \dots)$ (car $3^3 = 27 \equiv 1 \pmod{13}$). Comme $2026 = 3 \times 675 + 1$, après $2026$ tours on se trouve à la position $1$ du cycle, donc `x = 6`.
    hints:
      - Calculer à la main les $4$ premiers tours de boucle pour mettre en évidence un cycle périodique !
      - Diviser $2026$ par la longueur du cycle et utiliser le reste pour conclure.

  - id: 3e-advent-19
    title: Les trois fourgons à cadeaux
    topic: Systèmes d'équations linéaires
    story: 'Trois wagons de fret — Rouge, Bleu et Vert — ont été pesés deux par deux sur la bascule du pont de montagne : retrouvez le chargement exact du wagon Bleu.'
    prompt: >-
      Trois wagons de marchandises (Rouge, Bleu et Vert) transportent des caisses de cadeaux :
      - Rouge et Bleu transportent ensemble $73$ caisses.
      - Bleu et Vert transportent ensemble $81$ caisses.
      - Rouge et Vert transportent ensemble $76$ caisses.

      Combien de caisses le wagon **Bleu** transporte-t-il ?
    solution: >-
      Notons $R, B, V$ les nombres de caisses dans les wagons Rouge, Bleu et Vert. En additionnant les trois égalités, on obtient $2(R + B + V) = 73 + 81 + 76 = 230$, donc $R + B + V = 115$. En soustrayant la troisième égalité ($R + V = 76$), on trouve immédiatement $B = 115 - 76 = 39$ caisses. (Vérification : $R = 34$, $B = 39$, $V = 42$.)
    hints:
      - Additionner les trois sommes deux à deux et observer combien de fois chaque wagon apparaît !
      - Diviser par $2$ pour obtenir $R + B + V$, puis retrancher $R + V$.

  - id: 3e-advent-20
    title: L'araignée de givre sur la malle
    topic: Patrons dans l'espace et théorème de Pythagore
    story: Une minuscule araignée mécanique perchée sur un sommet d'une malle rectangulaire veut rejoindre le sommet diamétralement opposé en marchant sur la surface extérieure.
    prompt: >-
      Une malle en bois de forme pavé droit mesure $60\text{ cm}$ de long, $30\text{ cm}$ de large et $15\text{ cm}$ de haut. Une araignée mécanique part d'un sommet $A$ et doit ramper **sur la surface extérieure** de la malle jusqu'au sommet diamétralement opposé $G$. Quelle est la **plus courte distance possible**, en centimètres ?
    solution: >-
      En dépliant deux faces adjacentes de la malle à plat (patron), le plus court chemin sur la surface devient une diagonale rectiligne (hypoténuse d'un triangle rectangle). Trois dépliages distincts sont possibles :
      1. $\sqrt{(60 + 30)^2 + 15^2} = \sqrt{8100 + 225} = \sqrt{8325}\text{ cm}$.
      2. $\sqrt{(60 + 15)^2 + 30^2} = \sqrt{5625 + 900} = \sqrt{6525}\text{ cm}$.
      3. $\sqrt{60^2 + (30 + 15)^2} = \sqrt{3600 + 2025} = \sqrt{5625} = 75\text{ cm}$.
      Le plus court chemin sur la surface mesure exactement $75\text{ cm}$.
    hints:
      - 'Déplier deux faces du pavé droit à plat : le trajet minimal devient alors un segment de droite !'
      - Tester les trois façons d'associer les dimensions $(60 ; 30 ; 15)$ — regrouper les deux plus petites minimise la somme des carrés.

  - id: 3e-advent-21
    title: Le parquet en dominos de la salle de bal
    topic: Preuve par invariant de coloriage
    story: Le Fantôme du Givre a retiré deux carreaux diagonalement opposés du damier de la salle de bal et mis les charpentiers au défi de recouvrir le reste avec des lames $2 \times 1$.
    prompt: >-
      Le parquet de la salle de bal est un damier $8 \times 8$ de carreaux noirs et blancs alternés. On retire deux carreaux situés aux **coins diagonalement opposés** pour installer deux sapins, laissant $62$ carreaux. Démontrer mathématiquement qu'il est **impossible** de recouvrir exactement ces $62$ carreaux avec $31$ lames rectangulaires de dimension $2 \times 1$ sans chevauchement ni dépassement.
    solution: >-
      Un damier $8 \times 8$ comporte $32$ carreaux blancs et $32$ carreaux noirs. Deux coins diagonalement opposés ont toujours la **même couleur** (par exemple, tous deux blancs). Les retirer laisse $30$ carreaux de cette couleur et $32$ de l'autre couleur. Or toute lame $2 \times 1$, posée horizontalement ou verticalement, couvre deux carreaux adjacents, donc **exactement $1$ carreau blanc et $1$ carreau noir**. Ainsi, $31$ lames disjointes couvrent obligatoirement $31$ carreaux blancs et $31$ carreaux noirs, ce qui contredit la répartition $30$ contre $32$. Le pavage est donc impossible.
    hints:
      - Compter combien de carreaux noirs et combien de carreaux blancs restent après avoir retiré deux coins opposés.
      - Observer les couleurs des deux carreaux recouverts par une seule lame $2 \times 1$.
    rubric:
      - Constate que deux coins diagonalement opposés d'un damier $8 \times 8$ sont de même couleur, laissant $32$ cases d'une couleur et $30$ de l'autre.
      - Montre que chaque lame $2 \times 1$ recouvre exactement $1$ case blanche et $1$ case noire.
      - Conclut que $31$ lames exigeraient $31$ cases de chaque couleur, en contradiction avec le partage $32$ contre $30$.

  - id: 3e-advent-22
    title: La recherche de l'aiguillage gelé
    topic: Recherche dichotomique
    story: Quelque part le long d'une voie ferrée gelée de $1000$ tronçons, un unique aiguillage est bloqué par la glace — et la batterie d'impulsions de diagnostic est presque vide !
    prompt: >-
      Une voie ferrée comporte $1000$ tronçons consécutifs numérotés de $1$ à $1000$, dont **un seul** possède un aiguillage gelé. Chaque impulsion de diagnostic teste un tronçon $k$ au choix et indique aussitôt si l'aiguillage gelé se trouve strictement avant $k$, exactement en $k$, ou strictement après $k$. Avec une stratégie optimale par dichotomie, quel est le **nombre minimal d'impulsions garantissant** de localiser l'aiguillage dans le pire cas ?
    solution: >-
      Avec $m$ impulsions optimales, chaque test sonde le milieu et soit trouve l'aiguillage, soit divise par deux le nombre de candidats restants. Le nombre maximal de tronçons garantis en $m$ impulsions vérifie $N(1) = 1$ et $N(m) = 2N(m - 1) + 1 = 2^m - 1$. Vérifions les puissances de $2$ :
      - Avec $9$ impulsions, on garantit au maximum $2^9 - 1 = 511 < 1000$ tronçons.
      - Avec $10$ impulsions, on garantit jusqu'à $2^{10} - 1 = 1023 \ge 1000$ tronçons.
      Il faut donc au minimum $10$ impulsions pour être certain de réussir dans le pire cas.
    hints:
      - Chercher combien de tronçons candidats peuvent rester au maximum après chaque test au milieu de l'intervalle.
      - Comparer $1000$ aux puissances de $2$ (notamment $2^9 = 512$ et $2^{10} = 1024$).

  - id: 3e-advent-23
    title: Les deux chaudières à vapeur
    topic: Débits et fractions
    story: 'Aux portes de la gare du Pôle Nord, la plaque tournante est prise dans les glaces : deux chaudières remplissent le réservoir pendant qu''une vanne gelée fuit !'
    prompt: >-
      Pour dégeler le réservoir de la plaque tournante :
      - La chaudière A seule remplit le réservoir vide en $12$ minutes.
      - La chaudière B seule remplit le réservoir vide en $20$ minutes.
      - Une vanne gelée qui fuit vide un réservoir plein en $30$ minutes.

      Si les deux chaudières fonctionnent ensemble pendant que la vanne fuit, en combien de minutes le réservoir vide sera-t-il rempli ?
    solution: >-
      Exprimons chaque débit en fraction du réservoir par minute : la chaudière A apporte $\frac{1}{12}$, la chaudière B apporte $\frac{1}{20}$, et la fuite retire $\frac{1}{30}$. Le débit net de remplissage vaut $\frac{1}{12} + \frac{1}{20} - \frac{1}{30} = \frac{5 + 3 - 2}{60} = \frac{6}{60} = \frac{1}{10}$ de réservoir par minute. Le réservoir est donc rempli en exactement $10$ minutes.
    hints:
      - 'Traduire chaque durée en débit par minute : $\frac{1}{12}$, $\frac{1}{20}$ et $-\frac{1}{30}$ du réservoir par minute.'
      - Additionner les fractions sur le dénominateur commun $60$, puis inverser le résultat.

  - id: 3e-advent-24
    title: L'Arche Étoilée du Pôle Nord
    topic: Cercle de diamètre, Pythagore et aires
    story: Minuit le 24 décembre ! Le Polar Express glisse sous la lumineuse Arche Étoilée du Pôle Nord — une dernière démonstration géométrique valide la hauteur exacte du fanal de Noël.
    prompt: >-
      L'entrée de la gare du Pôle Nord est encadrée par un demi-cercle de diamètre $AB = 26\text{ m}$. Un fanal étoilé est fixé en un point $C$ du demi-cercle tel que $AC = 10\text{ m}$, et $H$ est le pied de la hauteur issue de $C$ sur le diamètre $[AB]$.
      1. Démontrer que le triangle $ABC$ est rectangle en $C$ et calculer la longueur exacte $BC$.
      2. En exprimant l'aire du triangle $ABC$ de deux façons différentes, démontrer que la hauteur exacte du fanal au-dessus du quai est $CH = \frac{120}{13}\text{ m}$.
      3. Calculer $AH$ et $HB$, puis vérifier la relation métrique $AH \times HB = CH^2$.
    solution: >-
      1. **Triangle rectangle et $BC$ :** Comme $C$ appartient au cercle de diamètre $[AB]$ (distinct de $A$ et $B$), le triangle $ABC$ est rectangle en $C$. Par le théorème de Pythagore, $BC = \sqrt{AB^2 - AC^2} = \sqrt{26^2 - 10^2} = \sqrt{676 - 100} = \sqrt{576} = 24\text{ m}$.
      2. **Hauteur $CH$ par les aires :** L'aire de $ABC$ vaut d'une part $\frac{AC \times BC}{2}$ et d'autre part $\frac{AB \times CH}{2}$. On en déduit $CH = \frac{AC \times BC}{AB} = \frac{10 \times 24}{26} = \frac{240}{26} = \frac{120}{13}\text{ m}$.
      3. **Vérification :** Dans le triangle $AHC$ rectangle en $H$, $AH = \sqrt{AC^2 - CH^2} = \sqrt{100 - \frac{14400}{169}} = \sqrt{\frac{2500}{169}} = \frac{50}{13}\text{ m}$. On a alors $HB = 26 - \frac{50}{13} = \frac{338 - 50}{13} = \frac{288}{13}\text{ m}$. Enfin, $AH \times HB = \frac{50 \times 288}{169} = \frac{14400}{169} = \left(\frac{120}{13}\right)^2 = CH^2$.
    hints:
      - Rappeler la propriété d'un triangle inscrit dans un cercle dont un côté est un diamètre.
      - Écrire l'aire de $ABC$ avec les deux côtés de l'angle droit $AC$ et $BC$, puis avec la base $AB$ et la hauteur $CH$.
    rubric:
      - Démontre que le triangle $ABC$ est rectangle en $C$ (inscrit dans le demi-cercle de diamètre $[AB]$) et calcule $BC = 24\text{ m}$ par Pythagore.
      - Utilise deux expressions de l'aire de $ABC$ pour démontrer $CH = \frac{120}{13}\text{ m}$.
      - Calcule $AH = \frac{50}{13}\text{ m}$ et $HB = \frac{288}{13}\text{ m}$ puis vérifie $AH \times HB = \frac{14400}{169} = CH^2$.
---
## Tous à bord du Polar Express !

Aux douze coups de minuit le 1er décembre, le Polar Express s'élance vers le Pôle Nord — mais le malicieux **Fantôme du Givre** a brouillé les horaires, les inventaires de bagages, les codes du télégraphe et les aiguillages !

Chaque case du **1er au 24 décembre** propose un défi de niveau Brevet à approfondissement couvrant tout le **programme de 3e** : équations, facteurs premiers, identités remarquables, fonctions affines, Thalès, Pythagore, trigonométrie, homothéties, solides, probabilités et algorithmes Python — jusqu'à l'**Arche Étoilée du Pôle Nord** le soir du réveillon.

> Gardez l'œil vif : plusieurs cases dissimulent des pièges classiques (vitesses moyennes, volumes réduits, cycles modulaires) imaginés par le Fantôme du Givre !
