---
id: 3e-right-triangle-trigonometry
locale: fr
title: Trigonométrie dans le triangle rectangle
strand: Géométrie et trigonométrie
summary: Choisir le sinus, le cosinus ou la tangente pour calculer des longueurs et des angles et modéliser des distances inaccessibles.
objectives:
  - Identifier le côté opposé, le côté adjacent et l'hypoténuse
  - Calculer une longueur ou un angle aigu dans un triangle rectangle
  - Modéliser une situation réelle par la trigonométrie du triangle rectangle
prerequisites:
  - Théorème de Pythagore
  - Résolution d'équations à une étape
vocabulary:
  - en: sine
    definition: Dans un triangle rectangle, rapport du côté opposé à l'hypoténuse pour un angle aigu choisi.
  - en: cosine
    definition: Dans un triangle rectangle, rapport du côté adjacent à l'hypoténuse pour un angle aigu choisi.
  - en: tangent
    definition: Dans un triangle rectangle, rapport du côté opposé au côté adjacent pour un angle aigu choisi.
  - en: angle of elevation
    definition: Angle mesuré vers le haut à partir d'une ligne de visée horizontale.
flashcards:
  - front: Quel côté est toujours opposé à l'angle droit ?
    back: L'hypoténuse ; c'est aussi le côté le plus long.
  - front: Quand la tangente constitue-t-elle généralement le choix le plus direct ?
    back: Lorsque les longueurs connue et cherchée sont les côtés opposé et adjacent.
  - front: Comment déterminer un angle à partir d'un rapport trigonométrique ?
    back: Utiliser la fonction réciproque appropriée et vérifier que la calculatrice est en mode degré.
exercises:
  - id: 3e-trigonometry-t1
    tierTitle: Application directe
    prompt: "Le triangle $ABC$ est rectangle en $A$, $BC=10$ cm et $\\widehat{ABC}=35^\\circ$. Calculer $AB$ au dixième de centimètre près."
    solution: "Par rapport à l'angle $B$, $AB$ est le côté adjacent et $BC$ l'hypoténuse. Ainsi, $\\cos35^\\circ=AB/10$, donc $AB=10\\cos35^\\circ\\approx8,2$ cm."
    hints:
      - "Utiliser le cosinus, car le côté adjacent et l'hypoténuse interviennent."
  - id: 3e-trigonometry-t2
    tierTitle: Niveau Brevet
    prompt: "Depuis un point situé sur un sol horizontal à $24$ m d'une tour verticale, les yeux d'un observateur se trouvent à $1,60$ m du sol. L'angle d'élévation du sommet vaut $38^\\circ$. Calculer la hauteur de la tour au dixième de mètre près."
    solution: "La hauteur au-dessus du niveau des yeux est opposée à l'angle de $38^\\circ$ et la distance horizontale est adjacente. Si $h$ est la hauteur de la tour, $\\tan38^\\circ=(h-1,60)/24$. Ainsi, $h=24\\tan38^\\circ+1,60\\approx20,3509$ ; la tour mesure donc environ $20,4$ m."
    hints:
      - "Tracer une horizontale passant par les yeux de l'observateur."
      - "Ajouter la hauteur des yeux seulement après avoir trouvé la hauteur au-dessus de cette horizontale."
  - id: 3e-trigonometry-t3
    tierTitle: Synthèse
    prompt: "Deux points d'observation $A$ et $B$ sont alignés horizontalement avec le pied $F$ d'un phare vertical ; $B$ est situé $40$ m plus près de $F$ que $A$. Les angles d'élévation du sommet sont $25^\\circ$ depuis $A$ et $40^\\circ$ depuis $B$. Calculer $BF$ et la hauteur du phare au mètre près. Un troisième point $C$, situé sur la même droite horizontale, est à $70$ m de $F$. Calculer l'angle d'élévation du sommet depuis $C$ au dixième de degré près. Expliquer la modélisation et conserver toute la précision de la calculatrice jusqu'à chaque arrondi final."
    solution: "Posons $x=BF$ et notons $h$ la hauteur. Alors $AF=x+40$. Dans les deux premiers triangles rectangles, $\\tan40^\\circ=h/x$ et $\\tan25^\\circ=h/(x+40)$. Donc $x\\tan40^\\circ=(x+40)\\tan25^\\circ$, d'où $x=40\\tan25^\\circ/(\\tan40^\\circ-\\tan25^\\circ)\\approx50,0341$ m. Puis $h=x\\tan40^\\circ\\approx41,9836$ m. Au mètre près, $BF=50$ m et le phare mesure $42$ m. Si $\\theta$ est l'angle d'élévation depuis $C$, alors $\\tan\\theta=h/70$, donc $\\theta=\\tan^{-1}(h/70)\\approx30,9539^\\circ$, soit $31,0^\\circ$ au dixième de degré près."
    hints:
      - "Choisir une inconnue pour la plus courte distance horizontale."
      - "Exprimer la même hauteur avec la tangente dans les deux triangles."
      - "Depuis $C$, écrire le rapport de tangente, puis utiliser la fonction tangente réciproque pour retrouver l'angle."
    rubric:
      - "Définit des inconnues cohérentes et identifie $AF=BF+40$."
      - "Écrit correctement les deux équations utilisant la tangente."
      - "Résout l'équation obtenue et trouve environ $BF=50$ m et $h=42$ m."
      - "Utilise la fonction tangente réciproque avec la hauteur non arrondie et $CF=70$ m pour obtenir un angle d'élévation de $31,0^\\circ$."
  - id: 3e-trigonometry-t4
    tierTitle: Défi avancé
    prompt: "Un triangle rectangle a pour hypoténuse $10$ et possède un angle aigu $\\theta$. Démontrer, sans calcul différentiel, que son périmètre est au plus $10(1+\\sqrt2)$ et que son aire est au plus $25$. Déterminer précisément quand chaque maximum est atteint."
    solution: "Les deux côtés de l'angle droit mesurent $10\\cos\\theta$ et $10\\sin\\theta$. Le périmètre vaut $P=10(1+\\sin\\theta+\\cos\\theta)$. Comme $(\\sin\\theta-\\cos\\theta)^2\\ge0$, on a $\\sin^2\\theta+\\cos^2\\theta\\ge2\\sin\\theta\\cos\\theta$, donc $1\\ge2\\sin\\theta\\cos\\theta$. De plus, $(\\sin\\theta+\\cos\\theta)^2=1+2\\sin\\theta\\cos\\theta\\le2$, donc $\\sin\\theta+\\cos\\theta\\le\\sqrt2$. Ainsi, $P\\le10(1+\\sqrt2)$. L'aire vaut $A=(1/2)(10\\sin\\theta)(10\\cos\\theta)=50\\sin\\theta\\cos\\theta\\le25$. Dans les deux inégalités, l'égalité exige $\\sin\\theta=\\cos\\theta$, donc $\\theta=45^\\circ$. Les deux maximums sont ainsi atteints exactement pour le triangle rectangle isocèle."
    hints:
      - "Exprimer les deux côtés de l'angle droit à l'aide de $\\theta$ et de l'hypoténuse."
      - "Développer $(\\sin\\theta-\\cos\\theta)^2\\ge0$."
      - "Étudier le cas d'égalité, et pas seulement les inégalités."
    rubric:
      - "Exprime correctement les côtés, le périmètre et l'aire avec le sinus et le cosinus."
      - "Déduit $2\\sin\\theta\\cos\\theta\\le1$ de la positivité d'un carré."
      - "Démontre les deux majorations demandées sans calcul différentiel."
      - "Établit que l'égalité a lieu exactement lorsque $\\theta=45^\\circ$."
---
# Trigonométrie dans le triangle rectangle

## Trois rapports pour un angle aigu

Fixons un angle aigu $\theta$ dans un triangle rectangle. Les noms des côtés dépendent de cet angle : l'**hypoténuse** est opposée à l'angle droit, le côté **opposé** fait face à $\theta$ et le côté **adjacent** touche $\theta$ sans être l'hypoténuse.

$$\sin\theta=\frac{\text{opposé}}{\text{hypoténuse}},\qquad
\cos\theta=\frac{\text{adjacent}}{\text{hypoténuse}},\qquad
\tan\theta=\frac{\text{opposé}}{\text{adjacent}}.$$

Les désignations « opposé » et « adjacent » changent quand l'angle de référence change. L'hypoténuse ne change jamais.

## Choisir la méthode

Repérer la longueur connue et celle que l'on cherche, puis choisir le rapport qui contient exactement ces deux types de côtés :

| Côtés concernés | Rapport |
| --- | --- |
| opposé et hypoténuse | sinus |
| adjacent et hypoténuse | cosinus |
| opposé et adjacent | tangente |

Pour calculer un angle, on détermine d'abord un rapport, puis on utilise $\sin^{-1}$, $\cos^{-1}$ ou $\tan^{-1}$. Ces notations désignent les fonctions réciproques et non les inverses des nombres.

## Exemples résolus

Dans un triangle rectangle, un angle mesure $52^\circ$ et son côté adjacent mesure $7$ cm. Si $x$ désigne l'hypoténuse,

$$\cos52^\circ=\frac7x\quad\Longrightarrow\quad x=\frac7{\cos52^\circ}\approx11,4\text{ cm}.$$

Si les côtés opposé et adjacent mesurent respectivement $9$ cm et $12$ cm, alors

$$\tan\theta=\frac9{12}=0,75,
\qquad \theta=\tan^{-1}(0,75)\approx36,9^\circ.$$

Il faut conserver toute la précision de la calculatrice jusqu'à la dernière ligne.

## Modéliser une hauteur inaccessible

On trace un triangle rectangle dont le côté horizontal représente la distance mesurée au sol et le côté vertical la hauteur cherchée. Un angle d'élévation est mesuré à partir de l'horizontale. Si l'appareil se trouve au-dessus du sol, on calcule d'abord la hauteur au-dessus de l'appareil, puis on ajoute la hauteur de celui-ci.

## Erreurs fréquentes

- Appeler hypoténuse le plus long des deux côtés de l'angle droit : seule la longueur opposée à l'angle droit est l'hypoténuse.
- Nommer les côtés opposé et adjacent avant de choisir l'angle de référence.
- Utiliser la calculatrice en mode radian alors que les données sont en degrés.
- Arrondir trop tôt ou oublier la hauteur des yeux de l'observateur.
- Écrire $\tan\theta=\text{adjacent}/\text{opposé}$ au lieu du rapport inverse.

## Prolongement : des identités utiles

Le théorème de Pythagore, après division de toutes les longueurs par l'hypoténuse, donne

$$\sin^2\theta+\cos^2\theta=1.$$

De plus, lorsque $\cos\theta\ne0$,

$$\tan\theta=\frac{\sin\theta}{\cos\theta}.$$

Ces identités relient les trois rapports et permettent de transformer certains problèmes géométriques d'optimisation en démonstrations algébriques.
