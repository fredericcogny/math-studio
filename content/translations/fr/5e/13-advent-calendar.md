---
id: 5e-advent-calendar
locale: fr
title: "Calendrier de l'Avent : L'Atelier du Fabricant de Jouets Automates"
strand: Bonus saisonnier · Résolution de problèmes
summary: Vingt-quatre énigmes, algorithmes et démonstrations de Noël dans l'atelier d'automates de Maître Barnabé, couvrant tout le programme de 5e du 1er au 24 décembre.
objectives:
  - Mobiliser arithmétique, géométrie, fractions, proportionnalité et calcul littéral dans des énigmes de Noël
  - Tracer et analyser des algorithmes d'atelier avec boucles et instructions conditionnelles
  - Construire de courtes démonstrations à l'aide de la parité, d'invariants et des angles
prerequisites:
  - Nombres relatifs, fractions et divisibilité
  - Triangles, parallélogrammes, aires et volumes
  - Ratios, pourcentages, moyenne et probabilités élémentaires
vocabulary:
  - en: invariant
    definition: Propriété ou grandeur qui reste inchangée après chaque étape autorisée.
  - en: parity
    definition: Caractère pair ou impair d'un nombre entier.
  - en: scale
    definition: Rapport entre une longueur sur un plan ou une maquette et la longueur réelle correspondante.
  - en: algorithm
    definition: Suite finie et précise d'instructions qui transforme des données d'entrée en un résultat.
flashcards:
  - front: Comment calculer une fraction d'une fraction, par exemple $\frac{2}{5}$ de $\frac{5}{8}$ ?
    back: 'On multiplie les fractions : $\frac{2}{5} \times \frac{5}{8} = \frac{10}{40} = \frac{1}{4}$.'
  - front: Quelle est la somme des angles intérieurs de tout triangle ?
    back: Toujours $180^\circ$. Dans un triangle isocèle, les deux angles à la base sont égaux.
  - front: Pourquoi la vitesse moyenne sur deux trajets n'est-elle pas la simple moyenne des deux vitesses ?
    back: La vitesse moyenne est la distance totale divisée par la durée totale, et les tronçons lents durent plus longtemps.
  - front: Comment se combinent deux réductions successives (par exemple $-25\,\%$ puis $-20\,\%$) ?
    back: 'On multiplie les coefficients restants : $0{,}75 \times 0{,}80 = 0{,}60$, soit $40\,\%$ de réduction globale et non $45\,\%$.'
adventDays:
  - id: 5e-advent-01
    title: La chaufferie gelée
    topic: Nombres relatifs
    story: Le 1er décembre, la neige bloque la porte de la chaufferie en laiton de Maître Barnabé. Avant d'ouvrir l'atelier d'automates, il faut prévoir la température du matin.
    prompt: >-
      À minuit, le thermomètre de la chaufferie indique $-7^\circ\text{C}$. Chaque heure de 1 h à 8 h du matin, la chaudière fait monter la température de $+4^\circ\text{C}$, sauf pendant la 3e heure et la 6e heure, où un courant d'air glacial fait chuter la température de $-6^\circ\text{C}$ au lieu de la réchauffer. Quelle température (en $^\circ\text{C}$) le thermomètre affiche-t-il à 8 h ?
    solution: >-
      Sur les $8$ heures, $6$ heures réchauffent la pièce de $+4^\circ\text{C}$ chacune ($6 \times (+4) = +24^\circ\text{C}$), et $2$ heures la refroidissent de $-6^\circ\text{C}$ chacune ($2 \times (-6) = -12^\circ\text{C}$). La variation totale vaut $+24 - 12 = +12^\circ\text{C}$, donc la température à 8 h est $-7 + 12 = 5^\circ\text{C}$.
    hints:
      - Compter combien parmi les $8$ heures sont des heures de chauffe et combien sont des heures de courant d'air.
      - Ajouter le gain total et la baisse totale à la température initiale de $-7$.

  - id: 5e-advent-02
    title: Le code du coffre en laiton
    topic: Divisibilité et multiples
    story: Barnabé a égaré la clé de sa boîte à tournevis en laiton, ne laissant qu'un indice de divisibilité gravé sur le couvercle.
    prompt: >-
      Le cadenas s'ouvre avec le **plus grand** entier à $3$ chiffres qui est à la fois divisible par $4$ et par $9$, et dont le chiffre des dizaines est $6$. Quel est ce code à $3$ chiffres ?
    solution: >-
      Notons ce nombre $\overline{a6b}$. Pour être divisible par $4$, le nombre formé par ses deux derniers chiffres $\overline{6b}$ doit être divisible par $4$, donc $b \in \{0 ; 4 ; 8\}$. Pour être divisible par $9$, la somme des chiffres $a + 6 + b$ doit être un multiple de $9$ : pour $b = 0$, $a = 3$ ($360$) ; pour $b = 4$, $a = 8$ ($864$) ; pour $b = 8$, $a = 4$ ($468$). Le plus grand code valide est $864$.
    hints:
      - Appliquer le critère de divisibilité par $4$ aux deux derniers chiffres $6b$ pour trouver les chiffres des unités $b$ possibles.
      - Pour chaque $b$ possible, utiliser le critère de divisibilité par $9$ (somme des chiffres) pour trouver le chiffre des centaines $a$.

  - id: 5e-advent-03
    title: La cruche de laque carmin
    topic: Fractions
    story: Les lutins peintres doivent préparer exactement la bonne quantité de vernis rouge pour les casse-noisettes en bois, mais l'étiquette de contenance s'est décollée.
    prompt: >-
      Un lutin verse $\frac{3}{8}$ d'une cruche pleine de laque carmin dans un bol, puis utilise $\frac{2}{5}$ de **ce qui reste dans la cruche** pour peindre les patins d'un traîneau. Il reste alors exactement $15\text{ cL}$ de laque dans la cruche. Quelle était la contenance totale de la cruche (en $\text{cL}$) ?
    solution: >-
      Après le premier prélèvement, il reste $1 - \frac{3}{8} = \frac{5}{8}$ de la cruche. En utilisant $\frac{2}{5}$ de ce reste, on conserve $1 - \frac{2}{5} = \frac{3}{5}$ de ce reste, soit $\frac{3}{5} \times \frac{5}{8} = \frac{3}{8}$ de la cruche entière. Comme $\frac{3}{8}$ de la cruche représentent $15\text{ cL}$, un huitième vaut $5\text{ cL}$ et la contenance totale est $8 \times 5 = 40\text{ cL}$.
    hints:
      - Déterminer d'abord quelle fraction de la cruche entière reste après le premier prélèvement.
      - Multiplier ce reste par la fraction conservée après la deuxième utilisation ($1 - \frac{2}{5} = \frac{3}{5}$).

  - id: 5e-advent-04
    title: Le tapis roulant à sucres d'orge
    topic: Boucles et conditions
    story: Le robot trieur de Barnabé range les sucres d'orge selon un court programme par blocs ; à vous de prévoir le contenu du panier avant la mise en marche.
    prompt: |
      Un robot d'atelier démarre avec `sucres = 5` et `etape = 1`, puis exécute $6$ fois la boucle suivante :

      ```text
      Répéter 6 fois :
        Si etape est impair :
          sucres ← sucres × 2
        Sinon :
          sucres ← sucres − 3
        etape ← etape + 1
      ```

      Combien de sucres d'orge y a-t-il dans le panier à la fin de la boucle ?
    solution: >-
      Dressons le tableau d'exécution étape par étape : étape $1$ (impair) : $5 \times 2 = 10$ ; étape $2$ (pair) : $10 - 3 = 7$ ; étape $3$ (impair) : $7 \times 2 = 14$ ; étape $4$ (pair) : $14 - 3 = 11$ ; étape $5$ (impair) : $11 \times 2 = 22$ ; étape $6$ (pair) : $22 - 3 = 19$. Le panier contient finalement $19$ sucres d'orge.
    hints:
      - 'Construire un tableau de suivi à deux colonnes : `etape` et `sucres`.'
      - 'Attention : `etape` augmente à la fin de chaque passage, donc les étapes impaires doublent et les étapes paires retirent $3$.'

  - id: 5e-advent-05
    title: Le plan du petit train de Noël
    topic: Proportionnalité et échelles
    story: La place du village a commandé un train festif en bois construit grandeur nature à partir du plan sur parchemin de Barnabé.
    prompt: >-
      Sur un plan dessiné à l'échelle $1 : 25$, la locomotive mesure $14{,}4\text{ cm}$ de long. Une fois construite en taille réelle, on lui attelle $4$ wagons identiques mesurant chacun $1{,}8\text{ m}$ de long. Quelle est la longueur totale du train réel, en **mètres** ?
    solution: >-
      À l'échelle $1 : 25$, la longueur réelle de la locomotive vaut $14{,}4 \times 25 = 360\text{ cm} = 3{,}6\text{ m}$. Les $4$ wagons ajoutent $4 \times 1{,}8 = 7{,}2\text{ m}$. La longueur totale du train est $3{,}6 + 7{,}2 = 10{,}8\text{ m}$.
    hints:
      - Multiplier la longueur sur le plan par $25$ pour obtenir la longueur réelle de la locomotive en centimètres.
      - Convertir les centimètres en mètres ($100\text{ cm} = 1\text{ m}$) avant d'ajouter les $4$ wagons.

  - id: 5e-advent-06
    title: L'étoile en laiton du sapin
    topic: Angles et triangles
    story: Chaque branche de l'étoile dorée qui couronne le sapin de l'atelier est taillée dans un triangle isocèle en laiton dont il faut contrôler l'angle au sommet.
    prompt: >-
      Le triangle $ABC$ est isocèle de sommet principal $A$ ($AB = AC$). En prolongeant le côté $[CB]$ au-delà du sommet $B$, on mesure un angle extérieur en $B$ de $118^\circ$. Quelle est la mesure, en degrés, de l'angle au sommet $\widehat{BAC}$ ?
    solution: >-
      L'angle intérieur $\widehat{ABC}$ et l'angle extérieur en $B$ forment un angle plat de $180^\circ$, donc $\widehat{ABC} = 180^\circ - 118^\circ = 62^\circ$. Comme $AB = AC$, les deux angles à la base sont égaux : $\widehat{ACB} = 62^\circ$. La somme des angles d'un triangle vaut $180^\circ$, d'où $\widehat{BAC} = 180^\circ - 2 \times 62^\circ = 56^\circ$.
    hints:
      - Un angle intérieur et son angle extérieur adjacent sur une même droite sont supplémentaires (somme égale à $180^\circ$).
      - Dans un triangle isocèle en $A$, les deux angles à la base $\widehat{ABC}$ et $\widehat{ACB}$ ont la même mesure.

  - id: 5e-advent-07
    title: La formule du four à pain d'épices
    topic: Expressions littérales et formules
    story: Le lutin boulanger règle son four grâce à la formule gravée par Barnabé pour cuire des roues en pain d'épices sans jamais en brûler une seule.
    prompt: >-
      Le temps de cuisson $T$ (en minutes) pour $n$ plaques avec le réglage de surchauffe $k$ est donné par la formule $T = 3n + 14 - 2k$. Le 7 décembre, le four a tourné $T = 35$ minutes pour $n = 9$ plaques. Quel était le réglage de surchauffe $k$ ?
    solution: >-
      En remplaçant $T$ par $35$ et $n$ par $9$, on obtient $35 = 3 \times 9 + 14 - 2k = 27 + 14 - 2k = 41 - 2k$. On en déduit $2k = 41 - 35 = 6$, soit $k = 3$.
    hints:
      - Calculer d'abord la valeur de $3n + 14$ lorsque $n = 9$.
      - Chercher quelle valeur de $2k$ il faut retrancher à $41$ pour obtenir $35$.

  - id: 5e-advent-08
    title: Les huit clochettes de l'établi
    topic: Parité et invariants
    story: Huit clochettes de traîneau pendent au-dessus de l'établi, toutes silencieuses. Un apprenti affirme pouvoir en faire sonner exactement sept en tirant toujours deux cordons à la fois.
    prompt: >-
      Huit clochettes en laiton sont alignées, toutes initialement silencieuses (OFF). À chaque coup, un apprenti choisit **deux** clochettes différentes et inverse leur état (ON devient OFF, et OFF devient ON). Démontrer s'il est possible d'atteindre un état où **exactement $7$** clochettes sonnent (ON) en même temps.
    solution: >-
      Étudions la parité (pair ou impair) du nombre de clochettes qui sonnent. Lors d'un coup, inverser deux clochettes conduit à trois cas : deux OFF deviennent ON ($+2$), deux ON deviennent OFF ($-2$), ou une ON et une OFF échangent leur état ($0$). Dans tous les cas, le nombre de clochettes ON varie d'un nombre pair ($+2$, $-2$ ou $0$), donc sa parité est invariante. Au départ, $0$ clochette sonne (nombre pair) ; après n'importe quel nombre de coups, le nombre de clochettes qui sonnent reste pair. Comme $7$ est impair, il est impossible de faire sonner exactement $7$ clochettes.
    hints:
      - 'Lister les trois cas possibles lorsqu''on inverse deux clochettes : (OFF, OFF), (ON, ON) ou (ON, OFF).'
      - Observer comment varie le nombre total de clochettes ON dans chacun de ces trois cas.
    rubric:
      - Examine les trois cas d'inversion de deux clochettes ($+2$, $-2$ et $0$).
      - Conclut que la parité du nombre de clochettes qui sonnent est un invariant (toujours pair).
      - Compare l'état initial pair ($0$) à la cible impaire ($7$) pour prouver l'impossibilité.

  - id: 5e-advent-09
    title: La pyramide de cubes en bois
    topic: Puissances, carrés et cubes
    story: Barnabé empile une pyramide festive de six étages en petits cubes de bois, puis la démonte pour assembler un unique cube plein destiné à une boîte à musique.
    prompt: >-
      Une pyramide à base carrée de $6$ étages est formée de petits cubes unités : du bas vers le haut, les étages comptent $6^2$, $5^2$, $4^2$, $3^2$, $2^2$ et $1^2$ cubes. Barnabé retire $3^3$ cubes pour sculpter le coffre d'une boîte à musique, puis assemble **tous les cubes restants** en un unique grand cube plein, sans aucun reste. Quelle est la longueur de l'arête (en petits cubes) de ce nouveau cube plein ?
    solution: >-
      Le nombre total de cubes dans la pyramide vaut $6^2 + 5^2 + 4^2 + 3^2 + 2^2 + 1^2 = 36 + 25 + 16 + 9 + 4 + 1 = 91$. En retirant $3^3 = 27$ cubes, il reste $91 - 27 = 64$ cubes. Comme $64 = 4^3$, le nouveau cube plein a une arête de $4$ cubes.
    hints:
      - Calculer chaque carré de $1^2$ à $6^2$ et en faire la somme.
      - Soustraire $3^3 = 27$, puis reconnaître le nombre restant comme un cube parfait $a^3$.

  - id: 5e-advent-10
    title: Le nez en laiton de Rodolphe
    topic: Moyenne et données
    story: Barnabé pèse son attelage de rennes sculptés avant de les fixer sur le carrousel musical, et le nez lumineux de Rodolphe fait pencher la balance.
    prompt: >-
      Six figurines de rennes en bois ont une masse moyenne de $145\text{ g}$. Lorsque Barnabé ajoute une septième figurine — Rodolphe — la masse moyenne des $7$ figurines passe à $152\text{ g}$. Quelle est la masse de Rodolphe, en grammes ?
    solution: >-
      La masse totale des $6$ premières figurines vaut $6 \times 145 = 870\text{ g}$. Avec Rodolphe, la masse totale des $7$ figurines vaut $7 \times 152 = 1064\text{ g}$. La masse de Rodolphe est donc $1064 - 870 = 194\text{ g}$.
    hints:
      - Multiplier la moyenne par le nombre de figurines pour trouver la masse totale avant et après l'ajout de Rodolphe.
      - Soustraire la première masse totale à la seconde.

  - id: 5e-advent-11
    title: La ronde du lutin automate
    topic: Repérage et boucles
    story: Un petit lutin mécanique patrouille en spirale sur le dallage quadrillé de l'atelier pour balayer les paillettes dorées.
    prompt: |
      Un lutin automate part du point de coordonnées $(0 ; 0)$ en regardant vers l'Est (sens $+x$), avec une longueur de pas `d = 2`. Il exécute $5$ fois la boucle suivante :

      ```text
      Répéter 5 fois :
        Avancer de d unités
        Tourner de 90° dans le sens inverse des aiguilles d'une montre
        d ← d + 1
      ```

      Quelles sont les coordonnées finales `(x ; y)` du lutin ?
    solution: >-
      Suivons chaque passage de la boucle : passage $1$ (Est, $d = 2$) : $(0 ; 0) \to (2 ; 0)$, tourne vers le Nord ; passage $2$ (Nord, $d = 3$) : $(2 ; 0) \to (2 ; 3)$, tourne vers l'Ouest ; passage $3$ (Ouest, $d = 4$) : $(2 ; 3) \to (-2 ; 3)$, tourne vers le Sud ; passage $4$ (Sud, $d = 5$) : $(-2 ; 3) \to (-2 ; -2)$, tourne vers l'Est ; passage $5$ (Est, $d = 6$) : $(-2 ; -2) \to (4 ; -2)$. Les coordonnées finales sont $(4 ; -2)$.
    hints:
      - 'Noter les quatre directions dans le sens antihoraire à partir de l''Est : Est ($+x$), Nord ($+y$), Ouest ($-x$), Sud ($-y$).'
      - Mettre à jour les coordonnées après chacun des $5$ déplacements de longueurs $2, 3, 4, 5, 6$.
    expected: "(4 ; -2)"
    accepted:
      - "(4;-2)"
      - "(4, -2)"
      - "(4,-2)"

  - id: 5e-advent-12
    title: Le vitrail en parallélogramme
    topic: Symétrie centrale et parallélogrammes
    story: Barnabé encastre un vitrail en forme de parallélogramme dans la lanterne de l'atelier en utilisant le centre de symétrie où se coupent ses diagonales.
    prompt: >-
      Dans un repère du plan, $ABCD$ est un parallélogramme (sommets nommés dans l'ordre $A, B, C, D$) tel que $A(-3 ; 2)$, $B(4 ; 2)$ et $C(6 ; -3)$. Déterminer les coordonnées du sommet $D$, puis saisir la somme $x_D + y_D$.
    solution: >-
      Dans le parallélogramme $ABCD$, les diagonales $[AC]$ et $[BD]$ ont le même milieu $O$, de coordonnées $\left(\frac{-3 + 6}{2} ; \frac{2 - 3}{2}\right) = (1{,}5 ; -0{,}5)$. De façon équivalente, pour passer de $B(4 ; 2)$ à $A(-3 ; 2)$ on se déplace de $(-7 ; 0)$ ; en appliquant le même déplacement depuis $C(6 ; -3)$, on trouve $D(-1 ; -3)$. Ainsi $x_D + y_D = -1 + (-3) = -4$.
    hints:
      - Dans un parallélogramme $ABCD$, les diagonales $[AC]$ et $[BD]$ se coupent en leur milieu.
      - On peut aussi remarquer que les côtés opposés $BA$ et $CD$ correspondent au même déplacement horizontal et vertical.

  - id: 5e-advent-13
    title: Les doubles soldes du ruban doré
    topic: Pourcentages
    story: Au marché de Noël, le marchand de soie accorde deux réductions successives sur les bobines de ruban d'or — mais attention, elles ne s'additionnent pas !
    prompt: >-
      Une bobine de ruban doré coûte $40$ €. Le marchand baisse d'abord son prix de $25\,\%$, puis accorde une seconde remise atelier de $20\,\%$ sur le prix **déjà réduit**. Quel est le pourcentage unique de réduction globale dont bénéficie Barnabé ? (Saisir uniquement le nombre, sans le symbole `%`.)
    solution: >-
      Après la baisse de $25\,\%$, le prix passe à $40 \times 0{,}75 = 30$ €. En retirant $20\,\%$ de $30$ €, on paie $30 \times 0{,}80 = 24$ €. L'économie totale est de $40 - 24 = 16$ €, ce qui représente $\frac{16}{40} = \frac{2}{5} = 0{,}40 = 40\,\%$.
    hints:
      - Calculer d'abord le prix intermédiaire après la première réduction de $25\,\%$.
      - Comparer l'économie totale en euros au prix initial de $40$ €.

  - id: 5e-advent-14
    title: Le coffre en cèdre aux parois épaisses
    topic: Solides et volumes
    story: Barnabé fabrique une solide malle en cèdre pour expédier des cubes peints, mais l'épaisseur du bois réduit le volume utile à l'intérieur.
    prompt: >-
      Un coffre fermé en bois de forme pavé droit possède des dimensions **extérieures** de $34\text{ cm}$ de long, $24\text{ cm}$ de large et $18\text{ cm}$ de haut. Toutes les parois — les quatre côtés, le fond et le couvercle plat — ont une épaisseur de $2\text{ cm}$. Combien de cubes jouets d'arête $2\text{ cm}$ peut-on ranger entièrement à l'intérieur du coffre ?
    solution: >-
      Dans chaque direction, deux parois opposées retirent chacune $2\text{ cm}$, soit $4\text{ cm}$ au total. Les dimensions intérieures valent donc $34 - 4 = 30\text{ cm}$, $24 - 4 = 20\text{ cm}$ et $18 - 4 = 14\text{ cm}$. On peut aligner $30 \div 2 = 15$, $20 \div 2 = 10$ et $14 \div 2 = 7$ cubes selon les trois axes, soit $15 \times 10 \times 7 = 1050$ cubes au total.
    hints:
      - En longueur, en largeur et en hauteur, il y a deux parois opposées de $2\text{ cm}$ chacune.
      - Diviser chaque dimension intérieure par $2\text{ cm}$ pour compter le nombre de cubes par arête, puis multiplier.

  - id: 5e-advent-15
    title: La rosace de la verrière
    topic: Angles et raisonnement arithmétique
    story: Barnabé souhaite entourer le sommet central de sa verrière circulaire par une couronne jointive de triangles équilatéraux et de carrés.
    prompt: >-
      Autour d'un même point $O$ de la verrière, Barnabé dispose bord à bord des triangles équilatéraux (angle de $60^\circ$) et des carrés (angle de $90^\circ$), sans trou ni chevauchement, afin que la somme des angles autour de $O$ soit exactement $360^\circ$. Il doit utiliser **au moins un triangle et au moins un carré**. Trouver **toutes** les combinaisons possibles de triangles et de carrés, et démontrer qu'il n'en existe aucune autre.
    solution: >-
      Soit $t \ge 1$ le nombre de triangles équilatéraux et $s \ge 1$ le nombre de carrés. La condition sur les angles autour de $O$ s'écrit $60t + 90s = 360$. En divisant par $30$, on obtient $2t + 3s = 12$. Testons toutes les valeurs entières $s \ge 1$ :
      - Si $s = 1$ : $2t = 9$, impossible car $9$ est impair.
      - Si $s = 2$ : $2t = 6 \implies t = 3$ (vérification : $3 \times 60^\circ + 2 \times 90^\circ = 180^\circ + 180^\circ = 360^\circ$).
      - Si $s = 3$ : $2t = 3$, impossible car $3$ est impair.
      - Si $s \ge 4$ : $3s \ge 12$, donc $2t \le 0$, impossible car $t \ge 1$.
      L'**unique** combinaison valable est donc $3$ triangles équilatéraux et $2$ carrés.
    hints:
      - Écrire l'équation reliant le nombre de triangles $t$ ($60^\circ$ chacun) et le nombre de carrés $s$ ($90^\circ$ chacun) à $360^\circ$.
      - Simplifier l'équation en divisant par $30$, puis tester toutes les valeurs entières possibles de $s \ge 1$.
    rubric:
      - Pose la condition d'angle $60t + 90s = 360$ (ou $2t + 3s = 12$) avec $t \ge 1$ et $s \ge 1$.
      - Trouve la solution $t = 3$ triangles et $s = 2$ carrés et vérifie la somme de $360^\circ$.
      - Écarte systématiquement $s = 1$, $s = 3$ et $s \ge 4$ pour démontrer l'unicité.

  - id: 5e-advent-16
    title: La bourse de boules en verre
    topic: Probabilités et ratios
    story: Dans une bourse en velours bleu nuit reposent vingt-quatre boules de Noël soufflées à la main, prêtes à décorer le sapin de l'atelier.
    prompt: >-
      Une bourse contient $24$ boules en verre : rouges, dorées et argentées. En tirant une boule au hasard, la probabilité d'obtenir une boule rouge vaut $\frac{3}{8}$. Parmi les boules restantes, il y a **deux fois plus de boules dorées que de boules argentées**. Quelle est la probabilité exacte (sous forme de fraction irréductible `a/b`) de tirer une boule qui n'est **pas argentée** ?
    solution: >-
      Le nombre de boules rouges est $\frac{3}{8} \times 24 = 9$. Il reste $24 - 9 = 15$ boules dorées et argentées. Comme les dorées sont deux fois plus nombreuses que les argentées, ces $15$ boules se partagent en $3$ parts de $5$ : $5$ argentées et $10$ dorées. Il y a donc $24 - 5 = 19$ boules non argentées, soit une probabilité de $\frac{19}{24}$.
    hints:
      - Calculer d'abord le nombre de boules rouges à l'aide de $\frac{3}{8}$ de $24$.
      - 'Partager le reste dans le ratio $2 : 1$ (dorées / argentées), puis compter les boules qui ne sont pas argentées.'

  - id: 5e-advent-17
    title: L'essai du traîneau mécanique
    topic: Fonctions, graphiques et vitesse
    story: Barnabé chronomètre son mini traîneau à ressort sur la piste droite de l'atelier et relève son parcours en trois phases.
    prompt: >-
      Lors d'un essai de $16$ secondes en ligne droite :
      - De $t = 0\text{ s}$ à $t = 6\text{ s}$, le traîneau glisse à vitesse constante de $4\text{ m/s}$.
      - De $t = 6\text{ s}$ à $t = 10\text{ s}$, il s'arrête pour charger du lest de neige.
      - De $t = 10\text{ s}$ à $t = 16\text{ s}$, il file à $6\text{ m/s}$.

      Quelle est la **vitesse moyenne** du traîneau sur l'ensemble des $16$ secondes d'essai, en $\text{m/s}$ ?
    solution: >-
      Calculons la distance parcourue sur chaque intervalle : $6 \times 4 = 24\text{ m}$ d'abord, $0\text{ m}$ pendant la pause, puis $6 \times 6 = 36\text{ m}$ sur la dernière partie. La distance totale est $24 + 0 + 36 = 60\text{ m}$ pour une durée totale de $16\text{ s}$. La vitesse moyenne vaut donc $\frac{60}{16} = \frac{15}{4} = 3{,}75\text{ m/s}$.
    hints:
      - Calculer la distance totale parcourue sur les trois intervalles.
      - Ne pas oublier d'inclure les $4$ secondes d'arrêt dans la durée totale de $16$ secondes.

  - id: 5e-advent-18
    title: Les carillons synchronisés
    topic: Multiples, PPCM et comptage algorithmique
    story: Trois roues dentées actionnent de minuscules clochettes à des rythmes différents ; dès que deux ou trois sonnent ensemble, un accord de Noël retentit.
    prompt: |
      Trois engrenages sonnent à $t = 0$ : l'engrenage Argent sonne toutes les $6\text{ s}$, l'engrenage Or toutes les $8\text{ s}$ et l'engrenage Rubis toutes les $10\text{ s}$. Un programme examine chaque seconde entière de $1$ à $120$ :

      ```text
      accords ← 0
      Pour t allant de 1 à 120 :
        coups ← (t divisible par 6) + (t divisible par 8) + (t divisible par 10)
        Si coups ≥ 2 :
          accords ← accords + 1
      ```

      Quelle est la valeur finale de `accords` ?
    solution: >-
      Un accord a lieu à chaque multiple de $\text{PPCM}(6 ; 8) = 24$, $\text{PPCM}(6 ; 10) = 30$ ou $\text{PPCM}(8 ; 10) = 40$ compris entre $1$ et $120$ :
      - Multiples de $24$ : $24, 48, 72, 96, 120$ ($5$ instants).
      - Multiples de $30$ : $30, 60, 90, 120$ ($4$ instants).
      - Multiples de $40$ : $40, 80, 120$ ($3$ instants).
      L'instant $t = 120$ apparaît dans les trois listes (accord triple !) ; il ne faut le compter qu'une seule fois : $5 + 4 + 3 - 2 = 10$ instants distincts ($24, 30, 40, 48, 60, 72, 80, 90, 96, 120$).
    hints:
      - 'Trouver le plus petit multiple commun de chaque paire de périodes : $(6 ; 8)$, $(6 ; 10)$ et $(8 ; 10)$.'
      - Lister leurs multiples jusqu'à $120$, en veillant à ne compter $120$ qu'une seule fois !

  - id: 5e-advent-19
    title: Les carrés emboîtés en pain d'épices
    topic: Aires et symétrie
    story: Barnabé découpe un motif de carrés dorés emboîtés dans une grande plaque carrée de pain d'épices, en ne se servant que des milieux des côtés.
    prompt: >-
      On part d'une plaque carrée en pain d'épices de côté $12\text{ cm}$. On relie le milieu de chaque côté au milieu du côté suivant pour tracer un carré intérieur. On répète ensuite exactement la même construction une deuxième fois à l'intérieur de ce carré pour former un troisième carré, tout au centre. Quelle est l'aire, en $\text{cm}^2$, de ce plus petit carré central ?
    solution: >-
      Le grand carré a une aire de $12 \times 12 = 144\text{ cm}^2$. En joignant les milieux des côtés d'un carré, les quatre triangles rectangles des coins peuvent se replier exactement sur le carré intérieur : chaque carré des milieux a donc **la moitié** de l'aire du carré qui le contient. Le carré intermédiaire a pour aire $144 \div 2 = 72\text{ cm}^2$, et le carré central a pour aire $72 \div 2 = 36\text{ cm}^2$.
    hints:
      - Tracer les diagonales du carré intérieur (qui joignent les milieux opposés du grand carré) pour découper le grand carré en $8$ triangles rectangles identiques.
      - Compter combien de ces $8$ triangles sont dans le carré intérieur, puis appliquer la même proportion une seconde fois.

  - id: 5e-advent-20
    title: Les trois coffres à trains
    topic: Expressions littérales
    story: Quatre-vingt-treize trains automates sont rangés dans trois coffres — Chêne, Pin et Cèdre — prêts à être chargés par les lutins.
    prompt: >-
      Barnabé répartit $93$ trains mécaniques dans trois coffres (Chêne, Pin et Cèdre) de sorte que :
      - Le coffre en Pin contient $7$ trains de plus que le coffre en Chêne.
      - Le coffre en Cèdre contient **deux fois** plus de trains que le coffre en Pin.

      Combien de trains sont rangés dans le coffre en **Cèdre** ?
    solution: >-
      Notons $x$ le nombre de trains dans le coffre en Chêne. Le Pin en contient $x + 7$ et le Cèdre en contient $2(x + 7) = 2x + 14$. Le total vaut $x + (x + 7) + (2x + 14) = 4x + 21 = 93$. On obtient $4x = 72$, donc $x = 18$ (Chêne). Le Pin contient $18 + 7 = 25$ trains, et le Cèdre en contient $2 \times 25 = 50$. Vérification : $18 + 25 + 50 = 93$.
    hints:
      - Désigner par $x$ le nombre de trains du coffre en Chêne, puis exprimer Pin et Cèdre en fonction de $x$.
      - Égaler la somme à $93$, trouver $x$, puis penser à calculer le contenu du coffre en Cèdre !

  - id: 5e-advent-21
    title: La trieuse de rubans
    topic: Parité et invariants
    story: La machine expérimentale de Barnabé tire deux nœuds de ruban à la fois et en remet toujours un dans le bac — pourtant, la couleur du tout dernier nœud est connue d'avance !
    prompt: >-
      Un bac contient $15$ nœuds rouges et $14$ nœuds verts. À chaque étape, une machine tire deux nœuds au hasard :
      - Si les deux nœuds sont de la **même couleur**, la machine les retire et place $1$ nœud **rouge** dans le bac.
      - Si les deux nœuds sont de **couleurs différentes**, la machine les retire et place $1$ nœud **vert** dans le bac.

      Après $28$ étapes, il ne reste exactement qu'$1$ nœud dans le bac. Déterminer la couleur **obligatoire** de ce dernier nœud et démontrer qu'elle ne dépend pas des tirages effectués.
    solution: >-
      Suivons le nombre $V$ de nœuds verts dans le bac :
      - Tirer (Rouge, Rouge) remet un Rouge, donc $V$ varie de $0$.
      - Tirer (Vert, Vert) remet un Rouge, donc $V$ varie de $-2$.
      - Tirer (Rouge, Vert) remet un Vert, donc $V$ varie de $0$.
      À chaque étape, $V$ diminue de $0$ ou de $2$ : la **parité** de $V$ est donc invariante. Au départ, $V = 14$ (pair), donc $V$ reste pair après les $28$ étapes. Quand il ne reste qu'$1$ nœud, $V$ vaut $0$ ou $1$ ; puisqu'il doit être pair, $V = 0$. Le dernier nœud est donc **obligatoirement rouge**.
    hints:
      - S'intéresser uniquement au nombre $V$ de nœuds **verts** et vérifier comment $V$ change dans les trois types de tirages.
      - Observer si $V$ peut changer de parité (passer de pair à impair).
    rubric:
      - Étudie la variation du nombre de nœuds verts $V$ dans les trois cas ($0$, $-2$ et $0$).
      - Conclut que la parité de $V$ est invariante et reste donc paire.
      - En déduit que lorsqu'il reste $1$ nœud, $V = 0$, donc le dernier nœud est nécessairement rouge.

  - id: 5e-advent-22
    title: La marche du casse-noisette
    topic: Algorithme à états
    story: Un casse-noisette à ressort avance sur l'établi tandis que son compteur d'énergie en laiton évolue selon une règle de parité bien particulière.
    prompt: |
      Le compteur d'énergie du casse-noisette démarre à `E = 46` et `minutes = 0`. Il exécute la boucle suivante tant que `E > 5` :

      ```text
      Tant que E > 5 :
        Si E est pair :
          E ← E ÷ 2
        Sinon :
          E ← E + 7
        minutes ← minutes + 1
      ```

      Pendant combien de minutes le casse-noisette marche-t-il avant que la boucle s'arrête ?
    solution: >-
      Suivons les valeurs successives de $E$ :
      $46 \xrightarrow{1} 23 \xrightarrow{2} 30 \xrightarrow{3} 15 \xrightarrow{4} 22 \xrightarrow{5} 11 \xrightarrow{6} 18 \xrightarrow{7} 9 \xrightarrow{8} 16 \xrightarrow{9} 8 \xrightarrow{10} 4$.
      Comme $4 \le 5$, la boucle s'arrête après exactement $10$ minutes.
    hints:
      - Écrire soigneusement chaque valeur de $E$ en vérifiant à chaque fois si le nombre est pair ou impair.
      - 'S''arrêter dès que $E \le 5$ : ne pas exécuter d''étape supplémentaire une fois atteint $E = 4$.'

  - id: 5e-advent-23
    title: L'équilibre de la cargaison du traîneau
    topic: Ratios et proportionnalité
    story: La veille du réveillon, Barnabé ajoute une caisse de petits trains sur le traîneau d'essai du Père Noël, modifiant le ratio entre trains et oursons.
    prompt: >-
      Le traîneau d'essai transporte initialement des trains en bois et des oursons en peluche dans le ratio $3 : 5$. Barnabé ajoute $18$ trains supplémentaires (sans ajouter d'oursons), et le ratio trains : oursons devient $9 : 10$. Combien de jouets (trains et oursons **confondus**) se trouvent sur le traîneau **après** l'ajout des $18$ trains ?
    solution: >-
      Le nombre d'oursons ne changeant pas, exprimons les deux ratios avec le même nombre de parts pour les oursons ($10$ parts) : au départ, trains : oursons $= 3 : 5 = 6 : 10$, puis après ajout $= 9 : 10$. L'augmentation de $9 - 6 = 3$ parts correspond aux $18$ trains ajoutés, donc $1$ part $= 18 \div 3 = 6$ jouets. Après l'ajout, il y a $9 + 10 = 19$ parts au total, soit $19 \times 6 = 114$ jouets ($54$ trains et $60$ oursons).
    hints:
      - 'Le nombre d''oursons est constant : réécrire le ratio initial $3 : 5$ avec $10$ parts d''oursons pour le comparer à $9 : 10$.'
      - Relier l'augmentation du nombre de parts de trains aux $18$ trains ajoutés pour trouver la valeur d'une part.

  - id: 5e-advent-24
    title: Le Grand Mécanisme de l'Étoile
    topic: Parité, engrenages et proportionnalité inverse
    story: Le réveillon de Noël est enfin arrivé ! Barnabé dévoile le chef-d'œuvre de son atelier — un anneau fermé de douze roues dentées en laiton surmonté d'une étoile lumineuse — et attend votre feu vert mathématique avant d'actionner le levier.
    prompt: >-
      Douze engrenages en laiton sont disposés en anneau fermé (la roue $1$ entraîne la roue $2$, la roue $2$ entraîne la roue $3$, $\dots$, et la roue $12$ engrène à son tour avec la roue $1$). La roue $1$ possède $24$ dents et tourne dans le **sens horaire** à $5$ tours complets par minute. La roue $7$ (diamétralement opposée) possède $15$ dents.
      1. Démontrer si cet anneau de $12$ engrenages peut tourner sans se bloquer, et préciser le sens de rotation (horaire ou antihoraire) de la roue $7$.
      2. Calculer le nombre de tours complets par minute effectués par la roue $7$, en justifiant pourquoi le nombre de dents des roues intermédiaires n'influence pas le résultat.
    solution: >-
      1. **Absence de blocage et sens :** Deux roues qui engrènent tournent toujours en sens contraires. Comme la roue $1$ tourne dans le sens horaire, toutes les roues **impaires** ($1, 3, 5, 7, 9, 11$) tournent dans le sens horaire et toutes les roues **paires** ($2, 4, 6, 8, 10, 12$) dans le sens antihoraire. Puisque $12$ est pair, la roue $12$ (antihoraire) engrène sans contradiction avec la roue $1$ (horaire) : le mécanisme ne se bloque pas ! Comme $7$ est impair, la roue $7$ tourne dans le **sens horaire**.
      2. **Vitesse de la roue 7 :** Chaque dent qui passe au point de contact pousse exactement une dent de la roue suivante. Le débit de dents par minute est donc identique pour tous les engrenages de la chaîne : $24 \times 5 = 120$ dents par minute, indépendamment des roues intermédiaires $2$ à $6$. Pour la roue $7$ ($15$ dents), cela donne $120 \div 15 = 8$ tours complets par minute.
    hints:
      - Noter le sens de rotation (H ou AH) de chaque roue autour de l'anneau et vérifier la compatibilité entre la roue $12$ et la roue $1$.
      - 'Penser au nombre de dents qui franchissent chaque contact en une minute : cette quantité est invariante tout au long de l''engrenage !'
    rubric:
      - Démontre que l'anneau tourne sans blocage car $12$ est pair (alternance horaire/antihoraire) et conclut que la roue $7$ tourne dans le sens horaire.
      - Identifie que le débit de dents par minute ($24 \times 5 = 120$) est identique sur chaque roue, indépendamment des roues intermédiaires.
      - 'Calcule la vitesse de la roue $7$ : $120 \div 15 = 8$ tours par minute.'
---
## Bienvenue dans l'atelier d'automates de Maître Barnabé

Décembre est arrivé, la neige tourbillonne devant les verrières et l'atelier d'automates de Maître Barnabé mène une course contre la montre pour terminer chaque train en bois, boîte à musique en laiton et boule en verre avant le réveillon.

Chaque case du **1er au 24 décembre** ouvre un nouveau défi tiré de tout le **programme de 5e** : nombres relatifs, divisibilité, fractions, proportionnalité, angles, symétrie, aires, volumes, probabilités et algorithmes — jusqu'aux quatre démonstrations mystères et au **Grand Mécanisme de l'Étoile** du 24 décembre.

> Servez-vous du vocabulaire et des cartes mémoire ci-dessus comme boîte à outils d'apprenti : chaque problème se résout proprement par le raisonnement, sans deviner !
