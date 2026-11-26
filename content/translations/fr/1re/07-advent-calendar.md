---
id: 1re-advent-calendar
locale: fr
title: "Calendrier de l'Avent : Opération Lumière d'Étoile"
strand: Bonus saisonnier · Résolution de problèmes
summary: Vingt-quatre énigmes, algorithmes Python et démonstrations de Noël à l'Observatoire du Pôle Nord, couvrant second degré, suites, dérivation, exponentielle, trigonométrie, produit scalaire et probabilités du 1er au 24 décembre.
objectives:
  - Résoudre des problèmes de modélisation et d'optimisation de Première Spécialité en analyse, géométrie et probabilités
  - Analyser des algorithmes Python de seuils de suites, séries géométriques, dichotomie et programmation dynamique
  - Rédiger des démonstrations rigoureuses à l'aide de discriminants, suites auxiliaires, invariants et produit scalaire
prerequisites:
  - Polynômes du second degré, dérivation et fonction exponentielle
  - Suites arithmétiques et géométriques, cercle trigonométrique et produit scalaire
  - Probabilités conditionnelles, variables aléatoires discrètes et boucles Python
vocabulary:
  - en: discriminant
    definition: Pour $ax^2 + bx + c = 0$, la quantité $\Delta = b^2 - 4ac$ qui détermine le nombre de racines réelles.
  - en: dot product
    definition: Le réel $\vec{u} \cdot \vec{v} = xx' + yy' = \|\vec{u}\|\|\vec{v}\|\cos\theta$, nul si et seulement si les vecteurs sont orthogonaux.
  - en: expected value
    definition: La moyenne pondérée par les probabilités $E(X) = \sum x_i P(X = x_i)$ d'une variable aléatoire discrète $X$.
  - en: bisection
    definition: Algorithme de recherche d'un zéro qui divise par deux à chaque étape un intervalle $[a ; b]$ où une fonction change de signe.
flashcards:
  - front: Comment trouver la somme $S$ et le produit $P$ des deux racines de $ax^2 + bx + c = 0$ ?
    back: $S = -\frac{b}{a}$ et $P = \frac{c}{a}$ (lorsque $\Delta \ge 0$).
  - front: Quelles sont les dérivées d'un produit $(uv)'$ et de $e^{ax + b}$ ?
    back: $(uv)' = u'v + uv'$ et $(e^{ax+b})' = a\,e^{ax+b}$.
  - front: Énoncer la formule d'Al-Kashi dans un triangle $ABC$.
    back: $BC^2 = AB^2 + AC^2 - 2\,AB\cdot AC\cos(\widehat{BAC})$.
  - front: Comment relier la probabilité conditionnelle $P_A(B)$ à $P(A \cap B)$ ?
    back: $P_A(B) = \frac{P(A \cap B)}{P(A)}$ (avec $P(A) > 0$).
adventDays:
  - id: 1re-advent-01
    title: Le bouclier parabolique de l'aurore
    topic: Second degré et discriminant
    story: Le 1er décembre, les ingénieurs de l'Observatoire du Pôle Nord alignent un faisceau laser de calibrage pour qu'il vienne frôler exactement le dôme parabolique protégeant le hangar du Père Noël.
    prompt: >-
      La coupe du dôme énergétique suit la parabole d'équation $y = -x^2 + 6x + 7$, et le faisceau laser suit la droite d'équation $y = 2x + k$. Pour quelle valeur réelle exacte de $k$ le faisceau laser est-il **tangent** au dôme parabolique ?
    solution: >-
      Les points d'intersection vérifient $-x^2 + 6x + 7 = 2x + k \iff x^2 - 4x + (k - 7) = 0$. La droite est tangente à la parabole si et seulement si cette équation admet une unique racine double, c'est-à-dire $\Delta = 0$. Or $\Delta = (-4)^2 - 4(1)(k - 7) = 16 - 4k + 28 = 44 - 4k$. L'équation $\Delta = 0$ donne $k = 11$ (tangence en $x = 2$, $y = 15$).
    hints:
      - Égaler $-x^2 + 6x + 7 = 2x + k$ puis tout regrouper pour obtenir une équation du second degré en $x$.
      - Une droite est tangente à une parabole lorsque le discriminant $\Delta$ de l'équation aux abscisses est nul.

  - id: 1re-advent-02
    title: Le réseau solaire en cristaux de neige
    topic: Suites arithmétiques
    story: Pour alimenter l'observatoire durant la nuit polaire, les techniciens assemblent des rangées de capteurs hexagonaux en pyramide étincelante.
    prompt: >-
      La rangée $1$ du réseau solaire compte $15$ panneaux hexagonaux, et chaque rangée suivante ajoute $4$ panneaux de plus que la précédente. Si l'installation comporte $14$ rangées au total, combien de panneaux sont montés en tout ?
    solution: >-
      Le nombre de panneaux par rangée forme une suite arithmétique de premier terme $u_1 = 15$ et de raison $r = 4$. La dernière rangée compte $u_{14} = u_1 + 13r = 15 + 13 \times 4 = 67$ panneaux. Le nombre total de panneaux vaut $S = 14 \times \frac{u_1 + u_{14}}{2} = 7 \times (15 + 67) = 7 \times 82 = 574$.
    hints:
      - Modéliser le nombre de panneaux de la rangée $n$ par une suite arithmétique $u_n = 15 + 4(n - 1)$.
      - 'Calculer $u_{14}$ puis utiliser la formule de somme d''une suite arithmétique : $S = N \times \frac{\text{premier} + \text{dernier}}{2}$.'

  - id: 1re-advent-03
    title: Le radar à blizzards arctiques
    topic: Probabilités conditionnelles (Bayes)
    story: Le radar météo vient de déclencher une alerte rouge au blizzard sur le couloir du traîneau — avant d'annuler l'essai, le directeur de vol demande la probabilité réelle d'une tempête.
    prompt: >-
      Une nuit de décembre quelconque, un blizzard survient avec la probabilité $0{,}2$. Le radar déclenche correctement l'alerte dans $90\,\%$ des cas lorsqu'il y a un blizzard, mais déclenche une fausse alerte dans $10\,\%$ des cas par ciel dégagé. Sachant que l'alerte vient de sonner, quelle est la probabilité exacte (sous forme de fraction irréductible `a/b`) qu'un vrai blizzard soit en cours ?
    solution: >-
      Notons $B$ l'événement « blizzard » et $A$ l'événement « alerte ». D'après la formule des probabilités totales : $P(B \cap A) = 0{,}2 \times 0{,}9 = 0{,}18$ et $P(\overline{B} \cap A) = 0{,}8 \times 0{,}1 = 0{,}08$, donc $P(A) = 0{,}18 + 0{,}08 = 0{,}26$. On en déduit $P_A(B) = \frac{P(B \cap A)}{P(A)} = \frac{0{,}18}{0{,}26} = \frac{18}{26} = \frac{9}{13}$.
    hints:
      - Construire un arbre pondéré débutant par $B$ ($0{,}2$) et $\overline{B}$ ($0{,}8$), puis bifurquant sur l'alerte $A$.
      - Calculer $P(A) = P(B \cap A) + P(\overline{B} \cap A)$ puis évaluer $P_A(B) = \frac{P(B \cap A)}{P(A)}$.

  - id: 1re-advent-04
    title: Le seuil de cryo-refroidissement
    topic: Suite arithmético-géométrique et boucle Python
    story: 'Après un vol d''essai supersonique, la cuve cryogénique refroidit minute après minute : un script Python attend que son excès de température redescende à $30^\circ\text{C}$ ou moins.'
    prompt: |
      Analyser la boucle Python de seuil ci-dessous et déterminer la valeur entière exacte de `n` à la sortie de la boucle :

      ```python
      u = 80.0
      n = 0
      while u > 30.0:
          u = 0.75 * u + 5
          n += 1
      ```
    solution: >-
      Le point fixe de $u_{n+1} = 0{,}75u_n + 5$ vérifie $\ell = 0{,}75\ell + 5 \implies \ell = 20$. En posant $v_n = u_n - 20$, on obtient la suite géométrique $v_n = 60 \times (0{,}75)^n$, donc $u_n \le 30 \iff 60(0{,}75)^n \le 10 \iff \left(\frac{3}{4}\right)^n \le \frac{1}{6}$. Testons directement : pour $n = 6$, $\left(\frac{3}{4}\right)^6 = \frac{729}{4096} > \frac{1}{6}$ (car $6 \times 729 = 4374 > 4096$, soit $u_6 \approx 30{,}68 > 30$) ; pour $n = 7$, $\left(\frac{3}{4}\right)^7 = \frac{2187}{16384} < \frac{1}{6}$ (car $6 \times 2187 = 13122 < 16384$, soit $u_7 \approx 28{,}01 \le 30$). La boucle s'arrête donc à `n = 7`.
    hints:
      - Remarquer que $v_n = u_n - 20$ est géométrique de raison $0{,}75 = \frac{3}{4}$ et de premier terme $v_0 = 60$.
      - Traduire $u_n \le 30$ par $\left(\frac{3}{4}\right)^n \le \frac{1}{6}$ et comparer pour $n = 6$ et $n = 7$ !

  - id: 1re-advent-05
    title: La rampe de lancement magnétique
    topic: Dérivation et tangentes
    story: À l'extrémité de la rampe magnétique courbe, le traîneau Lumière-d'Étoile se décroche et file en ligne droite le long de la tangente vers le ciel polaire.
    prompt: >-
      La rampe suit la courbe d'équation $f(x) = x^3 - 3x^2 + 4x + 1$ pour $x \ge 0$. Au point d'abscisse $x = 2$, le traîneau quitte le rail et poursuit en ligne droite suivant la **tangente** à la courbe en $x = 2$. Quelle est l'ordonnée $y$ du traîneau lorsqu'il franchit l'abscisse $x = 5$ ?
    solution: >-
      Calculons $f(2) = 2^3 - 3(2^2) + 4(2) + 1 = 8 - 12 + 8 + 1 = 5$. La dérivée est $f'(x) = 3x^2 - 6x + 4$, d'où $f'(2) = 12 - 12 + 4 = 4$. L'équation de la tangente en $x = 2$ est $y = f'(2)(x - 2) + f(2) = 4(x - 2) + 5 = 4x - 3$. Pour $x = 5$, on trouve $y = 4 \times 5 - 3 = 17$.
    hints:
      - Dériver $f(x)$ pour obtenir le coefficient directeur $f'(2)$ et calculer $f(2)$.
      - Écrire l'équation de la tangente $y = f'(2)(x - 2) + f(2)$, puis remplacer $x$ par $5$.

  - id: 1re-advent-06
    title: Les balises radio orthogonales
    topic: Produit scalaire et orthogonalité
    story: Trois pylônes radio arctiques doivent former un angle droit parfait au relais central $B$ afin d'éliminer toute interférence sur la banquise.
    prompt: >-
      Dans un repère orthonormé, trois pylônes radio sont placés en $A(1 ; 3)$, $B(5 ; 1)$ et $C(3 ; m)$. Pour quelle valeur réelle exacte de $m$ le triangle $ABC$ est-il rectangle en $B$ ?
    solution: >-
      Calculons les coordonnées des vecteurs $\overrightarrow{BA} = (1 - 5 ; 3 - 1) = (-4 ; 2)$ et $\overrightarrow{BC} = (3 - 5 ; m - 1) = (-2 ; m - 1)$. Le triangle $ABC$ est rectangle en $B$ si et seulement si $\overrightarrow{BA} \cdot \overrightarrow{BC} = 0$, soit $(-4)(-2) + 2(m - 1) = 0 \iff 8 + 2m - 2 = 0 \iff 2m = -6 \iff m = -3$.
    hints:
      - Déterminer les coordonnées des vecteurs $\overrightarrow{BA}$ et $\overrightarrow{BC}$.
      - Écrire la condition d'orthogonalité $\overrightarrow{BA} \cdot \overrightarrow{BC} = 0$ et résoudre pour trouver $m$.

  - id: 1re-advent-07
    title: L'azimut du télescope polaire
    topic: Cercle trigonométrique et équations trigonométriques
    story: La coupole de l'observatoire se verrouille sur chaque azimut du cercle trigonométrique qui résout l'équation de calibrage du capteur stellaire.
    prompt: |
      Résoudre dans l'intervalle $[0 ; 2\pi[$ l'équation trigonométrique :

      $$2\cos^2(\theta) - \cos(\theta) - 1 = 0$$

      Saisir la **somme exacte** de toutes les solutions distinctes $\theta \in [0 ; 2\pi[$ en fonction de `pi` (par exemple `2pi`).
    solution: >-
      Posons $X = \cos(\theta)$. L'équation $2X^2 - X - 1 = (2X + 1)(X - 1) = 0$ admet pour solutions $X = 1$ et $X = -\frac{1}{2}$. Sur $[0 ; 2\pi[$ :
      - $\cos(\theta) = 1 \iff \theta = 0$.
      - $\cos(\theta) = -\frac{1}{2} \iff \theta = \frac{2\pi}{3}$ ou $\theta = \frac{4\pi}{3}$.
      La somme des trois solutions distinctes vaut $0 + \frac{2\pi}{3} + \frac{4\pi}{3} = 2\pi$.
    hints:
      - Poser $X = \cos(\theta)$ et résoudre l'équation du second degré $2X^2 - X - 1 = 0$.
      - Lire tous les angles correspondants sur le cercle trigonométrique dans $[0 ; 2\pi[$, puis les additionner.

  - id: 1re-advent-08
    title: La garde au sol infaillible du traîneau
    topic: Trinôme paramétrique et preuve de signe
    story: Les vents latéraux font varier de manière imprévisible le paramètre de dérive $m$ — il faut certifier mathématiquement que le traîneau ne touchera jamais la crête montagneuse, quel que soit $m$.
    prompt: |
      L'altitude de dégagement $h(x)$ (en mètres au-dessus d'une crête) du traîneau est modélisée pour tout $x \in \mathbb{R}$ par :

      $$h(x) = x^2 - 2mx + (2m^2 - 4m + 5)$$

      où $m \in \mathbb{R}$ est un paramètre de dérive quelconque. Démontrer rigoureusement que pour **tout** réel $m$ et pour **tout** réel $x$, on a $h(x) > 0$.
    solution: >-
      **Méthode 1 (Discriminant) :** Considérons $h(x)$ comme un trinôme du second degré en $x$ de coefficient dominant $a = 1 > 0$. Son discriminant vaut $\Delta = (-2m)^2 - 4(1)(2m^2 - 4m + 5) = 4m^2 - 8m^2 + 16m - 20 = -4(m^2 - 4m + 5) = -4\big((m - 2)^2 + 1\big)$. Comme $(m - 2)^2 \ge 0$ pour tout $m \in \mathbb{R}$, on a $(m - 2)^2 + 1 \ge 1$, donc $\Delta \le -4 < 0$ pour tout réel $m$. Puisque $a = 1 > 0$ et $\Delta < 0$, le trinôme garde le signe de $a$, d'où $h(x) > 0$ pour tout $x \in \mathbb{R}$.
      **Méthode 2 (Forme canonique) :** On écrit directement $h(x) = (x - m)^2 + m^2 - 4m + 5 = (x - m)^2 + (m - 2)^2 + 1 \ge 1 > 0$ pour tous réels $x$ et $m$.
    hints:
      - Calculer le discriminant $\Delta$ du trinôme en $x$ (en traitant $m$ comme un paramètre constant), OU mettre $h(x)$ sous forme canonique.
      - Montrer que l'expression en $m$ obtenue garde un signe strictement constant sur $\mathbb{R}$.
    rubric:
      - Calcule correctement soit le discriminant $\Delta = -4(m^2 - 4m + 5)$, soit la forme canonique $h(x) = (x - m)^2 + (m - 2)^2 + 1$.
      - Démontre que $m^2 - 4m + 5 = (m - 2)^2 + 1 \ge 1 > 0$ pour tout $m \in \mathbb{R}$ (donc $\Delta < 0$ partout).
      - Utilise $a = 1 > 0$ (ou la somme de carrés $+ 1 \ge 1$) pour conclure $h(x) > 0$ pour tous réels $x$ et $m$.

  - id: 1re-advent-09
    title: La tombola du bar à chocolat chaud
    topic: Variables aléatoires et espérance
    story: Pour financer le chocolat chaud de minuit à l'observatoire, les stagiaires organisent un tirage solidaire de 20 cartes — calculez l'espérance exacte du gain net d'un joueur.
    prompt: >-
      Un joueur paie $4$ € pour tirer au hasard une carte d'un jeu de $20$ cartes :
      - $1$ carte Étoile rapporte $30$ €,
      - $4$ cartes Flocon rapportent $8$ € chacune,
      - $15$ cartes Glaçon rapportent $0$ €.

      Soit $G$ le **gain algébrique net** du joueur (gain reçu moins la mise de $4$ €). Quelle est l'espérance $E(G)$, en euros ?
    solution: >-
      La variable aléatoire $G$ prend les valeurs $+26$ (probabilité $\frac{1}{20}$), $+4$ (probabilité $\frac{4}{20}$) et $-4$ (probabilité $\frac{15}{20}$). Ainsi :
      $E(G) = 26 \times \frac{1}{20} + 4 \times \frac{4}{20} + (-4) \times \frac{15}{20} = \frac{26 + 16 - 60}{20} = \frac{-18}{20} = -0{,}9$ €.
      (De même, le gain brut espéré vaut $\frac{30 + 32}{20} = 3{,}1$ €, donc $E(G) = 3{,}1 - 4 = -0{,}9$ €.)
    hints:
      - Retrancher la mise de $4$ € à chaque lot (ou retrancher $4$ à l'espérance du gain brut à la fin).
      - Ne pas oublier le signe moins si le jeu est défavorable au joueur !

  - id: 1re-advent-10
    title: La caisse d'instruments de volume maximal
    topic: Optimisation par dérivation
    story: 'Les mécaniciens plient une caisse ouverte en aluminium à partir d''une plaque carrée : maximisez son volume utile grâce à la dérivée !'
    prompt: >-
      On fabrique une caisse parallélépipédique sans couvercle à partir d'une plaque carrée d'aluminium de côté $18\text{ cm}$ en découpant un carré de côté $x$ à chacun des quatre coins puis en relevant les bords ($0 < x < 9$). Quel est le **volume maximal possible** de cette caisse, en $\text{cm}^3$ ?
    solution: >-
      La base pliée est un carré de côté $18 - 2x$ et la hauteur vaut $x$, donc le volume est $V(x) = x(18 - 2x)^2 = 4x^3 - 72x^2 + 324x$ pour $x \in ]0 ; 9[$. Dérivons : $V'(x) = 12x^2 - 144x + 324 = 12(x^2 - 12x + 27) = 12(x - 3)(x - 9)$. Sur $]0 ; 9[$, $V'(x) > 0$ sur $]0 ; 3[$ et $V'(x) < 0$ sur $]3 ; 9[$, donc $V$ atteint son maximum unique en $x = 3\text{ cm}$. Ce volume maximal vaut $V(3) = 3 \times (18 - 6)^2 = 3 \times 144 = 432\text{ cm}^3$.
    hints:
      - Exprimer le côté de la base comme $18 - 2x$ et le volume comme $V(x) = x(18 - 2x)^2$.
      - Développer $V(x)$, dériver pour résoudre $V'(x) = 0$ sur $]0 ; 9[$, puis calculer $V(3)$.

  - id: 1re-advent-11
    title: Le répéteur de signal stellaire
    topic: Somme géométrique et boucles Python
    story: 'Un répéteur d''aurore alterne amplification et atténuation de puissances de $2$ : plutôt que d''additionner les $10$ étapes à la main, reconnaissez une suite géométrique !'
    prompt: |
      Déterminer la valeur exacte de `total` à la fin de l'exécution du programme Python suivant :

      ```python
      total = 0
      terme = 3
      for k in range(1, 11):
          if k % 2 == 1:
              total += terme
          else:
              total -= terme // 3
          terme = terme * 2
      ```
    solution: >-
      Regroupons chaque étape impaire $k = 2j - 1$ avec l'étape paire suivante $k = 2j$ ($j = 1, 2, 3, 4, 5$). À l'étape impaire, `terme` vaut $3 \times 4^{j-1}$ et ajoute $+3 \times 4^{j-1}$. À l'étape paire suivante, `terme` double à $6 \times 4^{j-1}$, donc `terme // 3` retranche $2 \times 4^{j-1}$. Chaque paire apporte ainsi $(3 - 2) \times 4^{j-1} = 4^{j-1}$ ! La somme pour $j = 1$ à $5$ est une somme géométrique de raison $4$ : $1 + 4 + 16 + 64 + 256 = \frac{4^5 - 1}{4 - 1} = \frac{1023}{3} = 341$.
    hints:
      - 'Écrire les variations de `total` pour $k = 1, 2, 3, 4$ : $+3, -2, +12, -8, \dots$'
      - Regrouper par paires $(+3 - 2) + (+12 - 8) + \dots$ pour faire apparaître une somme géométrique de raison $4$ !

  - id: 1re-advent-12
    title: Le pic thermique du bouclier
    topic: Fonction exponentielle et dérivée d'un produit
    story: Lors des essais de rentrée en haute atmosphère, les ingénieurs doivent déterminer la seconde exacte où l'échauffement du traîneau atteint son maximum.
    prompt: |
      Pendant une descente d'essai, le flux thermique sur la proue du traîneau est modélisé pour $t \ge 0$ (en secondes) par :

      $$q(t) = (t^2 + 3t)\,e^{-0{,}5t}$$

      À quel instant exact $t > 0$ (en secondes) le flux thermique atteint-il son **maximum** ?
    solution: >-
      Dérivons le produit $(uv)' = u'v + uv'$ avec $u(t) = t^2 + 3t$ et $v(t) = e^{-0{,}5t}$ ($v'(t) = -0{,}5e^{-0{,}5t}$) :
      $q'(t) = \big((2t + 3) - 0{,}5(t^2 + 3t)\big)e^{-0{,}5t} = (-0{,}5t^2 + 0{,}5t + 3)e^{-0{,}5t} = -0{,}5(t^2 - t - 6)e^{-0{,}5t} = -0{,}5(t - 3)(t + 2)e^{-0{,}5t}$.
      Comme $e^{-0{,}5t} > 0$ et $t + 2 > 0$ pour tout $t \ge 0$, $q'(t) > 0$ sur $[0 ; 3[$ et $q'(t) < 0$ sur $]3 ; +\infty[$. Le flux thermique atteint donc son maximum en $t = 3\text{ s}$.
    hints:
      - Appliquer la formule de dérivation d'un produit à $(t^2 + 3t) \cdot e^{-0{,}5t}$ et factoriser par $e^{-0{,}5t}$.
      - Étudier le signe du facteur polynôme restant sur $[0 ; +\infty[$ puisque $e^{-0{,}5t} > 0$ toujours.

  - id: 1re-advent-13
    title: Le relèvement radar triangulaire
    topic: Formule d'Al-Kashi
    story: 'Deux antennes radar arctiques suivent simultanément un ballon météo : à partir des seules trois distances mesurées, retrouvez l''angle de visée exact !'
    prompt: >-
      Deux stations radar $A$ et $B$ sont distantes de $AB = 7\text{ km}$. Un ballon météo $C$ est repéré à $AC = 8\text{ km}$ de la station $A$ et à $BC = 13\text{ km}$ de la station $B$. À l'aide de la formule d'Al-Kashi, déterminer la mesure exacte de l'angle $\widehat{BAC}$, en **degrés**.
    solution: >-
      D'après la formule d'Al-Kashi, $BC^2 = AB^2 + AC^2 - 2\,AB \cdot AC \cos(\widehat{BAC})$. En remplaçant : $13^2 = 7^2 + 8^2 - 2(7)(8)\cos(\widehat{BAC})$, soit $169 = 49 + 64 - 112\cos(\widehat{BAC}) = 113 - 112\cos(\widehat{BAC})$. D'où $112\cos(\widehat{BAC}) = 113 - 169 = -56$ et $\cos(\widehat{BAC}) = -\frac{56}{112} = -\frac{1}{2}$. Comme $\widehat{BAC} \in ]0^\circ ; 180^\circ[$, on obtient $\widehat{BAC} = 120^\circ$.
    hints:
      - Écrire la formule d'Al-Kashi exprimant $BC^2$ en fonction de $AB$, $AC$ et $\cos(\widehat{BAC})$.
      - Isoler $\cos(\widehat{BAC})$ et reconnaître l'angle entre $0^\circ$ et $180^\circ$ dont le cosinus vaut $-\frac{1}{2}$.

  - id: 1re-advent-14
    title: L'aire d'atterrissage circulaire
    topic: Équation cartésienne de cercle et distance
    story: Avant d'atterrir dans le brouillard polaire, le pilote automatique calcule la distance minimale entre la tour de contrôle et le bord de la piste circulaire gelée.
    prompt: >-
      Dans un repère orthonormé (unité : le mètre), le bord de la piste circulaire $\mathcal{C}$ a pour équation $x^2 + y^2 - 6x + 4y - 12 = 0$. La tour de contrôle se trouve en $P(11 ; 4)$. Quelle est la **plus courte distance** (en mètres) de $P$ à un point du cercle $\mathcal{C}$ ?
    solution: >-
      Complétons les carrés en $x$ et en $y$ : $(x - 3)^2 - 9 + (y + 2)^2 - 4 - 12 = 0 \iff (x - 3)^2 + (y + 2)^2 = 25$. Le cercle $\mathcal{C}$ a donc pour centre $\Omega(3 ; -2)$ et pour rayon $R = 5$. La distance $\Omega P$ vaut $\sqrt{(11 - 3)^2 + (4 - (-2))^2} = \sqrt{8^2 + 6^2} = \sqrt{100} = 10$. Comme $P$ est extérieur au cercle ($\Omega P > R$), la distance minimale de $P$ à $\mathcal{C}$ vaut $\Omega P - R = 10 - 5 = 5\text{ m}$.
    hints:
      - Réécrire $x^2 - 6x + y^2 + 4y - 12 = 0$ sous la forme $(x - a)^2 + (y - b)^2 = R^2$ pour lire centre et rayon.
      - Calculer la distance du centre $\Omega$ au point $P$, puis soustraire le rayon $R$.

  - id: 1re-advent-15
    title: La batterie supraconductrice infinie
    topic: Suites arithmético-géométriques (démonstration)
    story: Chaque jour, la batterie de l'observatoire perd $20\,\%$ de sa charge par chauffage tandis que les panneaux solaires injectent $160\text{ kWh}$ — prouvez pourquoi sa charge croît sans fin sans jamais atteindre $800\text{ kWh}$.
    prompt: >-
      L'énergie $u_n$ (en $\text{kWh}$) stockée après $n$ jours vérifie $u_0 = 500$ et $u_{n+1} = 0{,}8\,u_n + 160$ pour tout $n \in \mathbb{N}$.
      1. On pose $v_n = u_n - 800$. Démontrer que $(v_n)$ est une suite géométrique (préciser sa raison et son premier terme $v_0$).
      2. En déduire l'expression explicite de $u_n$ en fonction de $n$.
      3. Démontrer que la suite $(u_n)$ est strictement croissante et que $u_n < 800$ pour tout $n \in \mathbb{N}$.
    solution: >-
      1. **Suite géométrique :** Pour tout $n \in \mathbb{N}$, $v_{n+1} = u_{n+1} - 800 = 0{,}8u_n + 160 - 800 = 0{,}8u_n - 640 = 0{,}8(u_n - 800) = 0{,}8v_n$. La suite $(v_n)$ est donc géométrique de raison $q = 0{,}8$ et de premier terme $v_0 = u_0 - 800 = -300$.
      2. **Formule explicite :** Comme $v_n = v_0 q^n = -300 \times 0{,}8^n$, on obtient $u_n = 800 - 300 \times 0{,}8^n$.
      3. **Sens de variation et majoration :** Puisque $0{,}8^n > 0$ pour tout $n \in \mathbb{N}$, $300 \times 0{,}8^n > 0$, d'où $u_n = 800 - 300 \times 0{,}8^n < 800$. De plus, $u_{n+1} - u_n = -300 \times 0{,}8^{n+1} + 300 \times 0{,}8^n = 300 \times 0{,}8^n(1 - 0{,}8) = 60 \times 0{,}8^n > 0$, ce qui prouve que $(u_n)$ est strictement croissante.
    hints:
      - Exprimer $v_{n+1} = u_{n+1} - 800$ à l'aide de la relation de récurrence, puis mettre $0{,}8$ en facteur.
      - Calculer $u_{n+1} - u_n$ à partir de la formule explicite pour prouver la croissance stricte.
    rubric:
      - Démontre $v_{n+1} = 0{,}8v_n$ et précise la raison $q = 0{,}8$ ainsi que $v_0 = -300$.
      - En déduit l'expression explicite $u_n = 800 - 300 \times 0{,}8^n$.
      - Démontre à la fois $u_n < 800$ (car $300 \times 0{,}8^n > 0$) et $u_{n+1} - u_n = 60 \times 0{,}8^n > 0$ (strictement croissante).

  - id: 1re-advent-16
    title: La résonance des étoiles jumelles
    topic: Somme et produit des racines
    story: Deux fréquences d'aurore $\alpha$ et $\beta$ sont racines d'un trinôme aux radicaux peu commodes — pourtant la somme de leurs cubes est un entier net grâce aux relations coefficients-racines !
    prompt: >-
      Soient $\alpha$ et $\beta$ les deux racines réelles distinctes de l'équation $x^2 - 7x + 9 = 0$. Sans calculer séparément $\alpha$ et $\beta$, déterminer la valeur entière exacte de $\alpha^3 + \beta^3$.
    solution: >-
      Vérifions d'abord $\Delta = 49 - 36 = 13 > 0$ : l'équation possède deux racines réelles distinctes de somme $S = \alpha + \beta = 7$ et de produit $P = \alpha\beta = 9$. Utilisons l'identité $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = S^3 - 3PS$. En remplaçant $S = 7$ et $P = 9$, on obtient $7^3 - 3(9)(7) = 343 - 189 = 154$.
    hints:
      - Lire directement $S = \alpha + \beta$ et $P = \alpha\beta$ sur les coefficients de $x^2 - 7x + 9 = 0$.
      - Développer $(\alpha + \beta)^3$ (ou factoriser $\alpha^3 + \beta^3 = (\alpha + \beta)(\alpha^2 - \alpha\beta + \beta^2)$) pour n'utiliser que $S$ et $P$.

  - id: 1re-advent-17
    title: L'allumage à triple redondance
    topic: Événements indépendants et probabilités
    story: 'Le traîneau du Père Noël possède trois relais d''allumage indépendants pour résister au givre : il faut qu''au moins deux relais fonctionnent pour décoller.'
    prompt: >-
      Le traîneau Lumière-d'Étoile décolle en sécurité si **au moins deux** de ses trois relais d'allumage indépendants $R_1, R_2, R_3$ fonctionnent. Les probabilités que $R_1, R_2, R_3$ fonctionnent valent respectivement $\frac{4}{5}$, $\frac{3}{4}$ et $\frac{2}{3}$. Quelle est la probabilité exacte (sous forme de fraction irréductible `a/b`) d'un décollage réussi ?
    solution: >-
      Additionnons les probabilités des quatre issues incompatibles permettant le décollage (par indépendance) :
      - Les $3$ fonctionnent : $\frac{4}{5} \times \frac{3}{4} \times \frac{2}{3} = \frac{24}{60}$.
      - $R_1, R_2$ fonctionnent, $R_3$ échoue : $\frac{4}{5} \times \frac{3}{4} \times \frac{1}{3} = \frac{12}{60}$.
      - $R_1, R_3$ fonctionnent, $R_2$ échoue : $\frac{4}{5} \times \frac{1}{4} \times \frac{2}{3} = \frac{8}{60}$.
      - $R_2, R_3$ fonctionnent, $R_1$ échoue : $\frac{1}{5} \times \frac{3}{4} \times \frac{2}{3} = \frac{6}{60}$.
      La somme vaut $\frac{24 + 12 + 8 + 6}{60} = \frac{50}{60} = \frac{5}{6}$.
    hints:
      - 'Décomposer « au moins deux fonctionnent » en quatre cas disjoints : les trois fonctionnent, ou exactement un des relais $R_1, R_2, R_3$ tombe en panne.'
      - Grâce à l'indépendance, multiplier les trois probabilités dans chaque cas sur le dénominateur commun $60$.

  - id: 1re-advent-18
    title: La dichotomie de la balise d'horizon
    topic: Algorithme de dichotomie en Python
    story: Pour encadrer la racine du polynôme de réfraction $f(x) = x^3 + x - 6$ sur $[1 ; 2]$, l'ordinateur de bord exécute quatre itérations de dichotomie.
    prompt: |
      Exécuter à la main cette boucle Python de dichotomie sur $[1 ; 2]$ et donner la valeur exacte finale de la borne inférieure `a` (sous forme décimale ou fractionnaire) :

      ```python
      a, b = 1.0, 2.0
      for _ in range(4):
          m = (a + b) / 2
          if m**3 + m - 6 > 0:
              b = m
          else:
              a = m
      ```
    solution: >-
      Posons $f(x) = x^3 + x - 6$ (strictement croissante car $f'(x) = 3x^2 + 1 > 0$, avec $f(1) = -4 < 0$ et $f(2) = 4 > 0$) :
      - Étape $1$ : $m = 1{,}5$, $f(1{,}5) = 3{,}375 + 1{,}5 - 6 = -1{,}125 < 0 \implies a = 1{,}5$, intervalle $[1{,}5 ; 2]$.
      - Étape $2$ : $m = 1{,}75$, $f(1{,}75) = 5{,}359375 + 1{,}75 - 6 = 1{,}109375 > 0 \implies b = 1{,}75$, intervalle $[1{,}5 ; 1{,}75]$.
      - Étape $3$ : $m = 1{,}625$, $f(1{,}625) = 4{,}291015625 + 1{,}625 - 6 \approx -0{,}084 < 0 \implies a = 1{,}625$, intervalle $[1{,}625 ; 1{,}75]$.
      - Étape $4$ : $m = 1{,}6875$, $f(1{,}6875) \approx 4{,}805 + 1{,}6875 - 6 > 0 \implies b = 1{,}6875$, intervalle $[1{,}625 ; 1{,}6875]$.
      La borne inférieure finale est `a = 1,625` (ou $\frac{13}{8}$).
    hints:
      - À chacune des $4$ étapes, calculer le milieu $m = \frac{a + b}{2}$ et déterminer uniquement le **signe** de $m^3 + m - 6$.
      - Si $f(m) \le 0$, on remplace `a` par `m` ; si $f(m) > 0$, on remplace `b` par `m`.

  - id: 1re-advent-19
    title: Le spectromètre à double miroir
    topic: Identités trigonométriques
    story: Un prisme givré ne fournit que la somme $\sin(\alpha) + \cos(\alpha)$, alors que le spectromètre d'aurore exige la valeur exacte de $\sin(2\alpha)$ !
    prompt: >-
      Pour un angle aigu de calibrage $\alpha \in \left]0 ; \frac{\pi}{2}\right[$, le spectromètre mesure $\sin(\alpha) + \cos(\alpha) = \frac{7}{5}$. Déterminer la valeur exacte de $\sin(2\alpha)$ sous forme de fraction irréductible `a/b`.
    solution: >-
      Élevons au carré les deux membres de $\sin(\alpha) + \cos(\alpha) = \frac{7}{5}$ :
      $\sin^2(\alpha) + 2\sin(\alpha)\cos(\alpha) + \cos^2(\alpha) = \frac{49}{25}$.
      En utilisant $\sin^2(\alpha) + \cos^2(\alpha) = 1$ et la formule de duplication $\sin(2\alpha) = 2\sin(\alpha)\cos(\alpha)$, on obtient $1 + \sin(2\alpha) = \frac{49}{25}$, d'où $\sin(2\alpha) = \frac{49}{25} - 1 = \frac{24}{25}$.
    hints:
      - Élever au carré les deux membres de l'égalité $\sin(\alpha) + \cos(\alpha) = \frac{7}{5}$.
      - Reconnaître à la fois $\sin^2(\alpha) + \cos^2(\alpha) = 1$ et $2\sin(\alpha)\cos(\alpha) = \sin(2\alpha)$ !

  - id: 1re-advent-20
    title: La fenêtre parabolique de télémétrie
    topic: Optimisation par dérivation et géométrie
    story: Les techniciens installent le plus grand écran rectangulaire de cartes célestes possible sous l'arche parabolique de l'observatoire.
    prompt: >-
      Un écran rectangulaire est inscrit sous la parabole d'équation $y = 12 - x^2$ au-dessus de l'axe des abscisses : ses deux sommets inférieurs se situent sur l'axe des abscisses en $(-x ; 0)$ et $(x ; 0)$, et ses deux sommets supérieurs sur la parabole en $(-x ; 12 - x^2)$ et $(x ; 12 - x^2)$, avec $0 < x < \sqrt{12}$. Quelle est l'**aire maximale possible** de cet écran rectangulaire ?
    solution: >-
      Le rectangle a pour largeur $2x$ et pour hauteur $12 - x^2$, donc son aire vaut $A(x) = 2x(12 - x^2) = 24x - 2x^3$ sur $]0 ; \sqrt{12}[$. Dérivons : $A'(x) = 24 - 6x^2 = 6(4 - x^2) = 6(2 - x)(2 + x)$. Sur $]0 ; \sqrt{12}[$, $A'(x) > 0$ sur $]0 ; 2[$ et $A'(x) < 0$ sur $]2 ; \sqrt{12}[$, donc le maximum est atteint en $x = 2$. L'aire maximale vaut $A(2) = 2(2)(12 - 2^2) = 4 \times 8 = 32$.
    hints:
      - 'Attention : le rectangle s''étend de $-x$ à $+x$, donc sa largeur vaut $2x$ (et non $x$) tandis que sa hauteur vaut $12 - x^2$.'
      - Dériver $A(x) = 24x - 2x^3$, trouver la racine positive de $A'(x) = 0$, puis calculer $A(2)$.

  - id: 1re-advent-21
    title: L'invariant du tableau des 24 jours
    topic: Démonstration par invariant de parité
    story: Au solstice d'hiver, le tableau de diagnostic affiche les nombres de l'Avent de $1$ à $24$. Remplacer sans cesse deux nombres par leur différence finit par n'en laisser qu'un seul — peut-il être impair ?
    prompt: >-
      Les entiers $1, 2, 3, \dots, 24$ sont écrits au tableau de l'observatoire. À chaque étape, un ingénieur choisit deux nombres quelconques $a$ et $b$ présents au tableau, les efface et écrit leur différence $|a - b|$ à la place. Après $23$ étapes, il ne reste plus qu'un seul entier. Démontrer si cet entier final peut être **impair**.
    solution: >-
      Considérons la somme $S$ de tous les nombres présents au tableau. Initialement, $S_0 = 1 + 2 + \dots + 24 = \frac{24 \times 25}{2} = 300$, qui est **pair**. À chaque étape, choisissons $a$ et $b$ avec $a \ge b$ : remplacer $a$ et $b$ par $a - b$ modifie la somme de $(a - b) - (a + b) = -2b$, qui est toujours un entier **pair**. La parité de la somme $S$ est donc un invariant à chaque étape. Après $23$ étapes, la somme vaut l'unique nombre restant, qui a donc la même parité que $S_0 = 300$. L'entier final est par conséquent **toujours pair** et ne peut jamais être impair.
    hints:
      - Calculer la somme initiale $1 + 2 + \dots + 24$ avec la formule des suites arithmétiques.
      - 'Comparer la somme avant et après avoir remplacé $a$ et $b$ ($a \ge b$) par $a - b$ : de combien varie la somme totale ?'
    rubric:
      - Calcule la somme initiale $S_0 = \frac{24 \times 25}{2} = 300$ et relève qu'elle est paire.
      - Démontre que remplacer $a, b$ ($a \ge b$) par $a - b$ modifie la somme de $-2b$ (un nombre pair), donc que la parité de la somme est invariante.
      - Conclut que l'unique nombre restant est nécessairement pair et ne peut jamais être impair.

  - id: 1re-advent-22
    title: La récurrence des propulseurs du traîneau
    topic: Suites récurrentes et programmation dynamique
    story: Pour atteindre la vitesse orbitale sans surchauffer, le traîneau Lumière-d'Étoile enchaîne des impulsions de $1$ ou $2$ unités — sans jamais déclencher deux impulsions de $2$ unités consécutives !
    prompt: >-
      Le traîneau doit fournir une impulsion totale exacte de $10$ unités par une suite ordonnée de poussées valant chacune `1` unité ou `2` unités (par exemple `1-2-1` et `2-1-1` sont deux séquences distinctes), avec la contrainte de sécurité que **deux poussées de `2` unités ne peuvent jamais se suivre**.
      En établissant une relation de récurrence (table de programmation dynamique) pour le nombre $T_n$ de séquences valides de somme $n$, calculer le nombre exact $T_{10}$ de séquences valides de somme $10$.
    solution: >-
      Pour $n \ge 1$, classons toute séquence valide de somme $n$ selon sa dernière poussée :
      - Si elle se termine par `1`, retirer ce `1` laisse n'importe quelle séquence valide de somme $n - 1$ ($T_{n-1}$ possibilités).
      - Si elle se termine par `2` (pour $n \ge 4$), la poussée précédente ne peut pas être `2`, donc la séquence se termine forcément par `1-2` ; retirer `1-2` laisse n'importe quelle séquence valide de somme $n - 3$ ($T_{n-3}$ possibilités).
      D'où la récurrence $T_n = T_{n-1} + T_{n-3}$ pour $n \ge 4$, avec les cas initiaux $T_1 = 1$ (`1`), $T_2 = 2$ (`1-1`, `2`) et $T_3 = 3$ (`1-1-1`, `2-1`, `1-2`). En itérant :
      $T_4 = 3 + 1 = 4$, $T_5 = 4 + 2 = 6$, $T_6 = 6 + 3 = 9$, $T_7 = 9 + 4 = 13$, $T_8 = 13 + 6 = 19$, $T_9 = 19 + 9 = 28$ et $T_{10} = 28 + 13 = 41$.
    hints:
      - Déterminer directement $T_1, T_2, T_3$ en énumérant les séquences valides de `1` et de `2`.
      - Pour une somme $n \ge 4$, observer que toute séquence valide finit soit par `1` (après une somme $n - 1$), soit par `1-2` (après une somme $n - 3$) !

  - id: 1re-advent-23
    title: Vitesse de croisière optimale
    topic: Dérivation de fonctions rationnelles
    story: À la veille du lancement, les ingénieurs de mécanique du vol règlent la vitesse de croisière du traîneau pour minimiser la dépense énergétique par kilomètre.
    prompt: |
      À la vitesse de croisière $v > 0$ (en $\text{km/min}$), le coût énergétique par kilomètre du traîneau Lumière-d'Étoile est modélisé par :

      $$C(v) = 2v^2 + \frac{108}{v}$$

      Déterminer le **coût énergétique minimal possible** $C(v_{\min})$ par kilomètre pour $v > 0$.
    solution: >-
      Dérivons sur $]0 ; +\infty[$ : $C'(v) = 4v - \frac{108}{v^2} = \frac{4v^3 - 108}{v^2} = \frac{4(v^3 - 27)}{v^2} = \frac{4(v - 3)(v^2 + 3v + 9)}{v^2}$. Pour tout $v > 0$, $v^2 > 0$ et $v^2 + 3v + 9 > 0$, donc $C'(v)$ est du signe de $v - 3$ : négative sur $]0 ; 3[$ et positive sur $]3 ; +\infty[$. Ainsi $C$ admet un minimum global en $v = 3\text{ km/min}$, de valeur $C(3) = 2(3^2) + \frac{108}{3} = 18 + 36 = 54$.
    hints:
      - Dériver $C(v) = 2v^2 + 108v^{-1}$ et réduire au même dénominateur $v^2$.
      - Résoudre $C'(v) = 0$ pour $v > 0$, vérifier qu'il s'agit d'un minimum, puis calculer $C(v)$ — pas seulement $v$ !

  - id: 1re-advent-24
    title: L'orbite de lancement du réveillon
    topic: Produit scalaire, lieu géométrique et tangente
    story: 24 décembre, 23 h 59 ! Le traîneau Lumière-d'Étoile attend sur le pas de tir polaire tandis que deux balises magnétiques $A(-4 ; 0)$ et $B(4 ; 0)$ définissent son cercle de mise en orbite — livrez l'ultime preuve de lancement !
    prompt: |
      Dans un repère orthonormé d'origine $O(0 ; 0)$, deux balises polaires se trouvent en $A(-4 ; 0)$ et $B(4 ; 0)$. Soit $\mathcal{E}$ l'ensemble des points $M(x ; y)$ du plan vérifiant :

      $$\overrightarrow{MA} \cdot \overrightarrow{MB} = 9$$

      1. Démontrer que $\mathcal{E}$ est un cercle de centre $O(0 ; 0)$ et préciser son rayon exact $R$.
      2. Démontrer que pour tout point $M \in \mathcal{E}$, la somme $MA^2 + MB^2$ est constante, et calculer cette constante.
      3. Vérifier que $M_0(3 ; 4) \in \mathcal{E}$, déterminer une équation cartésienne de la tangente à $\mathcal{E}$ en $M_0$, puis vérifier que cette trajectoire passe exactement par la porte céleste $G(7 ; 1)$.
    solution: >-
      1. **Lieu circulaire :** Avec $\overrightarrow{MA} = (-4 - x ; -y)$ et $\overrightarrow{MB} = (4 - x ; -y)$, on obtient $\overrightarrow{MA} \cdot \overrightarrow{MB} = (-4 - x)(4 - x) + (-y)(-y) = x^2 - 16 + y^2$. L'égalité $\overrightarrow{MA} \cdot \overrightarrow{MB} = 9$ équivaut à $x^2 + y^2 = 25 = 5^2$, donc $\mathcal{E}$ est le cercle de centre $O(0 ; 0)$ et de rayon $R = 5$.
      2. **Somme constante des carrés :** Pour tout $M(x ; y) \in \mathcal{E}$, $MA^2 + MB^2 = (x + 4)^2 + y^2 + (x - 4)^2 + y^2 = 2(x^2 + y^2) + 32 = 2(25) + 32 = 82$ (ou par le théorème de la médiane : $MA^2 + MB^2 = 2OM^2 + \frac{AB^2}{2} = 2(25) + \frac{64}{2} = 82$).
      3. **Tangente et porte céleste :** Comme $3^2 + 4^2 = 25$, $M_0(3 ; 4) \in \mathcal{E}$. La tangente en $M_0$ est orthogonale au rayon $\overrightarrow{OM_0} = (3 ; 4)$, donc un point $P(x ; y)$ y appartient ssi $\overrightarrow{M_0 P} \cdot \overrightarrow{OM_0} = 0 \iff 3(x - 3) + 4(y - 4) = 0 \iff 3x + 4y - 25 = 0$. Pour $G(7 ; 1)$, $3(7) + 4(1) - 25 = 21 + 4 - 25 = 0$, ce qui confirme que le traîneau franchit exactement la porte $G(7 ; 1)$ !
    hints:
      - Exprimer $\overrightarrow{MA} \cdot \overrightarrow{MB}$ en coordonnées $(x ; y)$ et simplifier $(-4 - x)(4 - x) = x^2 - 16$.
      - Se rappeler que la tangente au cercle de centre $O$ au point $M_0$ admet le vecteur $\overrightarrow{OM_0}$ pour vecteur normal.
    rubric:
      - Développe $\overrightarrow{MA} \cdot \overrightarrow{MB} = x^2 + y^2 - 16 = 9$ pour prouver que $\mathcal{E}$ est le cercle de centre $O(0 ; 0)$ et de rayon $R = 5$.
      - Démontre $MA^2 + MB^2 = 2(x^2 + y^2) + 32 = 82$ (par coordonnées ou théorème de la médiane) pour tout $M \in \mathcal{E}$.
      - Vérifie $M_0(3 ; 4) \in \mathcal{E}$, établit l'équation de tangente $3x + 4y = 25$ et vérifie qu'elle est satisfaite par $G(7 ; 1)$.
---
## Bienvenue dans l'Opération Lumière d'Étoile

Bien au-delà du cercle polaire, l'**Observatoire du Pôle Nord** lance le compte à rebours vers le décollage du traîneau supersonique **Lumière-d'Étoile** le 24 décembre. Chaque jour du **1er au 24 décembre**, une nouvelle dépêche de mission arrive sur votre bureau.

Chaque case puise dans le programme de **Première Spécialité** — second degré, suites, dérivation, fonction exponentielle, trigonométrie, produit scalaire, probabilités conditionnelles, variables aléatoires et algorithmes Python — en mêlant énigmes festives, défis d'optimisation et démonstrations complètes.

> Gardez un brouillon à portée de main : ces 24 défis récompensent l'élégance algébrique, les bonnes factorisations et le coup d'œil géométrique !
