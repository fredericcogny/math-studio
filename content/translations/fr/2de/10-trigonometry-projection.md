---
id: 2de-trigonometry-projection
locale: fr
title: Trigonométrie du triangle rectangle et projeté orthogonal
strand: Géométrie
summary: Utiliser cosinus, sinus et tangente dans un triangle rectangle, et utiliser le projeté orthogonal pour mesurer la distance d'un point à une droite.
objectives:
  - Calculer une longueur ou un angle dans un triangle rectangle avec cosinus, sinus ou tangente
  - Construire le projeté orthogonal d'un point sur une droite et l'utiliser comme distance
  - Établir et utiliser les valeurs exactes des angles usuels
prerequisites:
  - Théorème de Pythagore
  - Distance et milieu dans un plan repéré
vocabulary:
  - en: orthogonal projection
    definition: Pied de la perpendiculaire abaissée d'un point sur une droite, qui est le point de la droite le plus proche de ce point.
  - en: tangent of an angle
    definition: Dans un triangle rectangle, rapport du côté opposé à l'angle sur le côté adjacent à cet angle.
  - en: distance from a point to a line
    definition: Longueur entre le point et son projeté orthogonal sur la droite.
flashcards:
  - front: Quels sont les trois rapports dans un triangle rectangle ?
    back: $\cos\widehat{A}=\dfrac{\text{côté adjacent}}{\text{hypoténuse}}$, $\sin\widehat{A}=\dfrac{\text{côté opposé}}{\text{hypoténuse}}$, $\tan\widehat{A}=\dfrac{\text{côté opposé}}{\text{côté adjacent}}$.
  - front: Quelle identité relie cosinus et sinus ?
    back: $\cos^{2}\widehat{A}+\sin^{2}\widehat{A}=1$, conséquence directe du théorème de Pythagore.
  - front: Pourquoi le projeté orthogonal est-il le point le plus proche de la droite ?
    back: Pour tout autre point $M$ de la droite, le triangle formé avec le pied $H$ est rectangle en $H$, donc l'hypoténuse est plus longue que $AH$.
  - front: Quelles sont les valeurs exactes pour $45$ degrés ?
    back: $\cos 45^{\circ}=\sin 45^{\circ}=\dfrac{\sqrt{2}}{2}$ et $\tan 45^{\circ}=1$, lues sur un carré coupé selon sa diagonale.
exercises:
  - id: 2de-trig-t1
    tierTitle: Application directe
    prompt: Dans un triangle rectangle en $B$, l'hypoténuse $AC$ mesure $10$ et l'angle en $A$ mesure $30$ degrés. Calculer la longueur $BC$.
    solution: Le côté $BC$ est opposé à l'angle en $A$, donc $\sin 30^{\circ}=\dfrac{BC}{AC}$. Comme $\sin 30^{\circ}=\dfrac{1}{2}$, on obtient $BC=10\times\dfrac{1}{2}=5$.
    hints:
      - Repérer quel côté est opposé à l'angle donné avant de choisir le rapport.
  - id: 2de-trig-t2
    tierTitle: Entraînement standard
    prompt: Dans un triangle rectangle en $B$, $AB=5$ et l'angle en $A$ mesure $40$ degrés. Calculer $BC$, arrondi à $0{,}1$.
    solution: Ici $AB$ est adjacent à l'angle en $A$ et $BC$ lui est opposé, donc $\tan 40^{\circ}=\dfrac{BC}{AB}$. Ainsi $BC=5\times\tan 40^{\circ}\approx 5\times 0{,}8391\approx 4{,}2$.
    hints:
      - La tangente est le rapport qui évite l'hypoténuse, non donnée ici.
      - N'arrondir qu'à la toute fin du calcul.
  - id: 2de-trig-t3
    tierTitle: Synthèse du programme officiel
    prompt: On donne une droite $d$ et un point $A$ n'appartenant pas à $d$, avec $H$ le projeté orthogonal de $A$ sur $d$ et $AH=6$. Un point $M$ de $d$ vérifie $HM=8$. Calculer $AM$, puis expliquer pourquoi $H$ est le point de $d$ le plus proche de $A$ et donner l'aire du triangle $AHM$.
    solution: >-
      Comme $(AH)$ est perpendiculaire à $d$ et que $M$ appartient à $d$, le triangle $AHM$ est rectangle en $H$. Le théorème de Pythagore donne $AM^{2}=AH^{2}+HM^{2}=36+64=100$, donc $AM=10$. Pour tout point $M$ de $d$ distinct de $H$, le même triangle est rectangle en $H$, donc $AM^{2}=AH^{2}+HM^{2}>AH^{2}$ car $HM>0$, d'où $AM>AH$. Le projeté $H$ est donc le point le plus proche, et $AH$ est par définition la distance de $A$ à $d$. L'aire de $AHM$ vaut $\dfrac{AH\times HM}{2}=\dfrac{6\times 8}{2}=24$.
    hints:
      - Le projeté crée un angle droit, ce qui rend le théorème de Pythagore disponible.
      - Pour comparer $AM$ et $AH$, comparer leurs carrés.
    rubric:
      - Utilise l'angle droit en H pour calculer la longueur 10.
      - Démontre la minimalité de AH en comparant des carrés pour un point quelconque de la droite.
      - Calcule correctement l'aire du triangle rectangle.
  - id: 2de-trig-t4
    tierTitle: Défi avancé
    prompt: Démontrer que $\cos^{2}\theta+\sin^{2}\theta=1$ pour tout angle aigu $\theta$ d'un triangle rectangle, et que $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$. Établir ensuite les valeurs exactes du cosinus, du sinus et de la tangente de $30$, $45$ et $60$ degrés, à l'aide d'un carré et d'un triangle équilatéral.
    solution: >-
      Soit un triangle rectangle en $B$, avec $\theta$ l'angle en $A$, et notons $a=BC$ le côté opposé, $b=AB$ le côté adjacent et $c=AC$ l'hypoténuse. Alors $\cos\theta=\dfrac{b}{c}$ et $\sin\theta=\dfrac{a}{c}$, donc $\cos^{2}\theta+\sin^{2}\theta=\dfrac{b^{2}+a^{2}}{c^{2}}$. Le théorème de Pythagore donne $a^{2}+b^{2}=c^{2}$, donc la somme vaut $1$. De plus $\dfrac{\sin\theta}{\cos\theta}=\dfrac{a/c}{b/c}=\dfrac{a}{b}=\tan\theta$, ce qui est licite car $\cos\theta\neq 0$ pour un angle aigu. Pour les valeurs exactes, prenons un carré de côté $1$ coupé selon une diagonale : le triangle obtenu a deux côtés de l'angle droit égaux à $1$ et une hypoténuse $\sqrt{2}$, avec des angles aigus de $45$ degrés, donc $\cos 45^{\circ}=\sin 45^{\circ}=\dfrac{1}{\sqrt{2}}=\dfrac{\sqrt{2}}{2}$ et $\tan 45^{\circ}=1$. Prenons maintenant un triangle équilatéral de côté $2$ coupé selon une hauteur : le triangle obtenu a une hypoténuse $2$, un côté $1$ et, par le théorème de Pythagore, l'autre côté $\sqrt{3}$, avec des angles aigus de $30$ et $60$ degrés. Donc $\cos 60^{\circ}=\dfrac{1}{2}$, $\sin 60^{\circ}=\dfrac{\sqrt{3}}{2}$, $\tan 60^{\circ}=\sqrt{3}$, et $\cos 30^{\circ}=\dfrac{\sqrt{3}}{2}$, $\sin 30^{\circ}=\dfrac{1}{2}$, $\tan 30^{\circ}=\dfrac{1}{\sqrt{3}}=\dfrac{\sqrt{3}}{3}$.
    hints:
      - Écrire les deux rapports avec le même dénominateur et utiliser le théorème de Pythagore au numérateur.
      - Couper un carré selon une diagonale et un triangle équilatéral selon une hauteur produit les deux triangles de référence.
    rubric:
      - Déduit l'identité entre cosinus et sinus du théorème de Pythagore.
      - Démontre la formule du quotient pour la tangente en remarquant que le cosinus est non nul.
      - Construit les deux triangles de référence et donne les neuf valeurs exactes.
---
## Trois rapports, un angle droit

Dans un triangle rectangle en $B$, on nomme les côtés relativement à l'angle aigu $\widehat{A}$ : l'**hypoténuse** fait face à l'angle droit, le côté **opposé** fait face à $\widehat{A}$, et le côté **adjacent** le touche.

$$\cos\widehat{A}=\frac{\text{côté adjacent}}{\text{hypoténuse}},\qquad \sin\widehat{A}=\frac{\text{côté opposé}}{\text{hypoténuse}},\qquad \tan\widehat{A}=\frac{\text{côté opposé}}{\text{côté adjacent}}.$$

Choisir le bon rapport consiste à repérer quels deux côtés interviennent. Si l'hypoténuse est inconnue et n'est pas demandée, c'est la tangente qu'il faut utiliser.

Deux identités en découlent immédiatement :

$$\cos^{2}\theta+\sin^{2}\theta=1,\qquad \tan\theta=\frac{\sin\theta}{\cos\theta}.$$

La première est le théorème de Pythagore divisé par le carré de l'hypoténuse.

## Les valeurs exactes à connaître

| $\theta$ | $30^{\circ}$ | $45^{\circ}$ | $60^{\circ}$ |
| --- | --- | --- | --- |
| $\cos\theta$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ |
| $\sin\theta$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ |
| $\tan\theta$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ |

Ces valeurs ne sont pas arbitraires. La moitié d'un carré donne la colonne de $45^{\circ}$ ; la moitié d'un triangle équilatéral donne les deux autres. Reconstruire le tableau à partir de ces deux figures est plus sûr que de le mémoriser.

## Le projeté orthogonal

Le **projeté orthogonal** d'un point $A$ sur une droite $d$ est le point $H$ de $d$ tel que $(AH)$ soit perpendiculaire à $d$. On l'appelle souvent le pied de la perpendiculaire.

Sa propriété essentielle est la minimalité. Pour tout point $M$ de $d$ distinct de $H$, le triangle $AHM$ est rectangle en $H$, donc

$$AM^{2}=AH^{2}+HM^{2}>AH^{2},$$

et par conséquent $AM>AH$. Le projeté est le point le plus proche de la droite, et la longueur $AH$ s'appelle la **distance de $A$ à $d$**.

C'est l'outil standard pour une hauteur dans un triangle, pour le chemin le plus court vers une route, et pour la distance d'un point à une corde d'un cercle.

### Pour aller plus loin

On donne un point $A$ et un cercle de centre $\Omega$, avec $A$ extérieur au cercle. Quel point du cercle est le plus proche de $A$ ? Démontrer l'affirmation et comparer l'argument avec celui du projeté sur une droite.
