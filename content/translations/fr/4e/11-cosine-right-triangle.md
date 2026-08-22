---
id: 4e-cosine-right-triangle
locale: fr
title: Cosinus d'un angle aigu
strand: Géométrie
summary: Définir le rapport cosinus dans un triangle rectangle et l'utiliser pour calculer des côtés et des angles inconnus.
objectives:
  - Définir le cosinus comme le rapport côté adjacent sur hypoténuse dans un triangle rectangle
  - Calculer la longueur d'un côté à l'aide du cosinus
  - Déterminer un angle à l'aide de la fonction cosinus inverse
prerequisites:
  - Propriétés du triangle rectangle
  - Théorème de Pythagore
vocabulary:
  - en: cosine
    definition: Dans un triangle rectangle, rapport de la longueur du côté adjacent à un angle aigu à la longueur de l'hypoténuse.
  - en: adjacent side
    definition: Côté du triangle rectangle qui forme l'angle aigu avec l'hypoténuse (ce n'est pas le côté opposé).
  - en: acute angle
    definition: Angle dont la mesure est strictement comprise entre 0° et 90°.
flashcards:
  - front: Quelle est la formule du cosinus dans un triangle rectangle ?
    back: $\cos(\alpha) = \dfrac{\text{côté adjacent}}{\text{hypoténuse}}$
  - front: Si $\cos(\alpha)=0{,}6$ et l'hypoténuse mesure $15$, quelle est la longueur du côté adjacent ?
    back: Côté adjacent $= 15 \times 0{,}6 = 9$.
  - front: Comment trouver un angle lorsqu'on connaît la valeur du cosinus ?
    back: On utilise la fonction cosinus inverse. Si $\cos(\alpha)=0{,}8$, alors $\alpha = \cos^{-1}(0{,}8) \approx 36{,}9°$.
exercises:
  - id: 4e-cosrt-t1
    tierTitle: Application directe
    prompt: Dans un triangle rectangle dont l'hypoténuse mesure $10$ et un angle vaut $60°$, trouver la longueur du côté adjacent à cet angle. On donne $\cos(60°)=0{,}5$.
    solution: $\cos(60°)=\frac{\text{adjacent}}{10}=0{,}5$, donc le côté adjacent $=10\times 0{,}5=5$.
    hints:
      - Écrire la formule du cosinus et remplacer par les valeurs connues.
  - id: 4e-cosrt-t2
    tierTitle: Entraînement standard
    prompt: Une échelle de $6$ m de long est appuyée contre un mur et forme un angle de $35°$ avec le sol. À quelle distance du mur se trouve le pied de l'échelle ? On donne $\cos(35°)\approx 0{,}819$. Puis utiliser le théorème de Pythagore pour trouver à quelle hauteur l'échelle touche le mur.
    solution: La distance au mur est le côté adjacent à l'angle de $35°$ ; $d=6\times\cos(35°)\approx 6\times 0{,}819=4{,}914$ m, soit environ $4{,}9$ m. La hauteur est $h=\sqrt{6^2-4{,}914^2}=\sqrt{36-24{,}15}=\sqrt{11{,}85}\approx 3{,}4$ m.
    hints:
      - L'échelle est l'hypoténuse ; la distance au sol est le côté adjacent.
      - Une fois deux côtés connus, utiliser $a^2+b^2=c^2$ pour le troisième.
  - id: 4e-cosrt-t3
    tierTitle: Synthèse du programme officiel
    prompt: Dans le triangle rectangle $ABC$ rectangle en $C$, $AB=13$ et $BC=5$. Déterminer l'angle $\widehat{ABC}$ à l'aide du cosinus, puis vérifier le résultat en calculant $AC$ par le théorème de Pythagore et en utilisant un autre rapport trigonométrique.
    solution: $\cos(\widehat{ABC})=\frac{BC}{AB}=\frac{5}{13}\approx 0{,}3846$. Donc $\widehat{ABC}=\cos^{-1}(0{,}3846)\approx 67{,}4°$. Par Pythagore, $AC=\sqrt{169-25}=12$. Vérification $\cos(\widehat{BAC})=\frac{12}{13}\approx 0{,}923$, d'où $\widehat{BAC}\approx 22{,}6°$. Et $67{,}4°+22{,}6°=90°$.
    hints:
      - Identifier quel côté est adjacent à l'angle cherché et lequel est l'hypoténuse.
      - Les deux angles aigus d'un triangle rectangle ont pour somme 90°.
    rubric:
      - Identifie correctement le côté adjacent et l'hypoténuse pour l'angle considéré.
      - Calcule l'angle à l'aide du cosinus inverse.
      - Vérifie le résultat à l'aide du théorème de Pythagore et de la propriété de somme des angles.
  - id: 4e-cosrt-t4
    tierTitle: Défi avancé
    prompt: Dans le triangle $ABC$, l'angle en $A$ vaut $60°$ et $AB=AC=10$. On abaisse la perpendiculaire de $A$ sur $BC$, qui coupe $BC$ en $H$. À l'aide du cosinus, trouver $BH$, puis $BC$, et enfin l'aire du triangle $ABC$. Exprimer l'aire exactement.
    solution: >-
      Comme $ABC$ est isocèle avec $AB=AC$ et $\widehat{A}=60°$, le triangle est équilatéral. Alors $BH=\frac{BC}{2}=5$. La hauteur $AH=\sqrt{10^2-5^2}=5\sqrt{3}$. L'aire est $\frac{1}{2}\times 10\times 5\sqrt{3}=25\sqrt{3}$.
    hints:
      - Vérifier si le triangle ne serait pas équilatéral.
      - Dans un triangle équilatéral, la hauteur vaut $\frac{c\sqrt{3}}{2}$ où $c$ est le côté.
    rubric:
      - Reconnaît que le triangle est équilatéral.
      - Calcule correctement BH et la hauteur AH.
      - Donne l'aire exacte $25\sqrt{3}$.
---
## Le cosinus dans un triangle rectangle

Dans un triangle rectangle, le **cosinus** d'un angle aigu est le rapport de la longueur du **côté adjacent** à la longueur de l'**hypoténuse** :

$$\cos(\alpha) = \frac{\text{adjacent}}{\text{hypoténuse}}$$

L'hypoténuse est toujours le côté le plus long, situé en face de l'angle droit. Le côté adjacent est le côté qui, avec l'hypoténuse, forme l'angle $\alpha$. Le côté restant, situé en face de $\alpha$, est appelé **côté opposé**.

## Calculer un côté à partir d'un angle

Si l'on connaît un angle aigu et l'hypoténuse, on peut trouver le côté adjacent :

$$\text{adjacent} = \text{hypoténuse} \times \cos(\alpha)$$

Par exemple, si l'hypoténuse mesure $10$ et $\alpha=60°$, alors le côté adjacent vaut $10\times\cos(60°)=10\times 0{,}5=5$.

## Trouver un angle à partir du cosinus

Si l'on connaît deux côtés, on calcule le rapport cosinus puis on utilise la fonction cosinus inverse (notée $\cos^{-1}$ ou $\arccos$) pour trouver l'angle :

$$\alpha = \cos^{-1}\!\left(\frac{\text{adjacent}}{\text{hypoténuse}}\right)$$

Le cosinus décroît de $1$ à $0$ lorsque l'angle passe de $0°$ à $90°$ : une valeur de cosinus plus grande correspond à un angle plus petit.

## Lien avec le théorème de Pythagore

Le théorème de Pythagore donne $a^2+b^2=c^2$ où $c$ est l'hypoténuse. Si l'on a trouvé un côté par le cosinus, on peut trouver l'autre par Pythagore :

$$\text{opposé} = \sqrt{\text{hypoténuse}^2 - \text{adjacent}^2}$$

Cette combinaison du cosinus et de Pythagore permet de résoudre tout triangle rectangle lorsqu'on connaît un angle aigu et un côté.

### Pour aller plus loin

Le cosinus de $45°$ vaut $\frac{\sqrt{2}}{2}\approx 0{,}707$. Peut-on dessiner un triangle rectangle dont les deux angles aigus valent $45°$ et vérifier cette valeur à l'aide du théorème de Pythagore ?
