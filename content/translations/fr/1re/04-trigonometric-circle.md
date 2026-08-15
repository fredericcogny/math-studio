---
id: "1re-trigonometric-circle"
locale: "fr"
title: "Le cercle trigonométrique et les fonctions sinus et cosinus"
strand: "Géométrie et trigonométrie"
summary: "Enroulement de la droite numérique, mesure en radians, valeurs remarquables et propriétés des fonctions cosinus et sinus."
objectives:
  - "Convertir des degrés en radians et placer des angles sur le cercle trigonométrique"
  - "Connaître parfaitement les valeurs remarquables de cos(x) et sin(x)"
  - "Résoudre des équations trigonométriques simples sur [0, 2pi["
prerequisites:
  - "Théorème de Pythagore et trigonométrie du triangle rectangle"
vocabulary:
  - en: "Radian"
    definition: "Unité de mesure d'un angle telle qu'un demi-tour (180 deg) équivaut à pi radians."
  - en: "Trigonometric circle"
    definition: "Cercle centré à l'origine, de rayon 1 et orienté dans le sens direct (antihoraire)."
flashcards:
  - front: "Quelles sont les valeurs exactes de cos(pi/3) et sin(pi/3) ?"
    back: "cos(pi/3) = 1/2 et sin(pi/3) = sqrt(3)/2"
  - front: "Quelle relation fondamentale relie cos(x) et sin(x) pour tout réel x ?"
    back: "cos^2(x) + sin^2(x) = 1"
exercises:
  - id: "1re-trig-t1"
    tierTitle: "Application directe"
    prompt: "Donner les valeurs exactes de $\\cos(7\\pi/6)$ et $\\sin(7\\pi/6)$."
    solution: "L'angle $7\\pi/6=\\pi+\\pi/6$ se situe dans le troisième quadrant. Par conséquent, $\\cos(7\\pi/6)=-\\cos(\\pi/6)=-\\sqrt{3}/2$ et $\\sin(7\\pi/6)=-\\sin(\\pi/6)=-1/2$."
    hints:
      - "Utiliser l'angle de référence $\\pi/6$ et les signes dans le troisième quadrant."
  - id: "1re-trig-t2"
    tierTitle: "Entraînement standard"
    prompt: "Résoudre $2\\cos(x-\\pi/3)=1$ pour $x\\in[0,2\\pi)$. Donner l'ensemble complet des solutions."
    solution: "L'équation équivaut à $\\cos(x-\\pi/3)=1/2$. Ainsi, $x-\\pi/3=\\pm\\pi/3+2k\\pi$, donc $x=2k\\pi$ ou $x=2\\pi/3+2k\\pi$. Dans $[0,2\\pi)$, les solutions sont $0$ et $2\\pi/3$."
    hints:
      - "Résoudre d'abord $\\cos y=1/2$ en posant $y=x-\\pi/3$."
      - "Ne conserver que les représentants appartenant à $[0,2\\pi)$."
  - id: "1re-trig-t3"
    tierTitle: "Synthèse"
    prompt: "Soit $S$ la somme de toutes les solutions distinctes de $2\\sin^2 x-3\\sin x+1=0$ sur $[0,2\\pi)$. Déterminer le coefficient $c$ tel que $S=c\\pi$."
    solution: "Posons $s=\\sin x$. L'équation se factorise sous la forme $(2s-1)(s-1)=0$, donc $\\sin x=1/2$ ou $\\sin x=1$. Sur $[0,2\\pi)$, on obtient $x=\\pi/6,5\\pi/6,\\pi/2$. Leur somme vaut $\\pi/6+5\\pi/6+\\pi/2=3\\pi/2$ ; le coefficient demandé est donc $3/2$."
    hints:
      - "Considérer $\\sin x$ comme l'inconnue d'une équation du second degré."
      - "Résoudre chacune des équations trigonométriques élémentaires obtenues sur l'intervalle indiqué."
  - id: "1re-trig-t4"
    tierTitle: "Défi avancé"
    prompt: "Démontrer que, pour tous réels $a,b$ non tous deux nuls, l'ensemble des valeurs de $a\\cos x+b\\sin x$ est $[-\\sqrt{a^2+b^2},\\sqrt{a^2+b^2}]$. En déduire tous les paramètres réels $m$ pour lesquels $(m-1)\\cos x+(m+1)\\sin x=2m$ admet une solution réelle, puis décrire la particularité des valeurs limites du paramètre."
    solution: "Posons $R=\\sqrt{a^2+b^2}>0$ et choisissons $\\varphi$ tel que $\\cos\\varphi=a/R$ et $\\sin\\varphi=b/R$. La formule d'addition donne $a\\cos x+b\\sin x=R\\cos(x-\\varphi)$, dont l'ensemble des valeurs est $[-R,R]$. Dans l'équation paramétrée, $R^2=(m-1)^2+(m+1)^2=2m^2+2$. Une solution existe exactement lorsque $|2m|\\le R$, ce qui équivaut à $4m^2\\le2m^2+2$, donc à $|m|\\le1$. Si $|m|<1$, la valeur cible appartient strictement à l'intérieur de l'intervalle et il existe deux solutions modulo $2\\pi$. Si $m=1$ ou $m=-1$, il y a égalité : il existe donc une seule solution modulo $2\\pi$ (l'expression harmonique atteint un extremum)."
    hints:
      - "Normaliser $(a,b)$ par sa norme euclidienne et introduire un angle $\\varphi$."
      - "L'existence équivaut à $|2m|\\le\\sqrt{(m-1)^2+(m+1)^2}$."
    rubric:
      - "Établit l'identité harmonique $a\\cos x+b\\sin x=R\\cos(x-\\varphi)$ avec $R=\\sqrt{a^2+b^2}$."
      - "Utilise l'ensemble des valeurs du cosinus pour obtenir une condition d'existence nécessaire et suffisante."
      - "Résout correctement l'inéquation paramétrée et obtient $m\\in[-1,1]$."
      - "Explique le cas intérieur à deux solutions et le comportement de tangence ou d'extremum pour $m=\\pm1$."
---

# Le cercle trigonométrique et les fonctions sinus et cosinus

La **trigonométrie** permet de relier les angles aux distances et aux coordonnées dans le plan grâce à l'enroulement de la droite numérique autour du cercle unité.

## 1. Enroulement et mesure en radians

Le **cercle trigonométrique** est un cercle de centre $O$ et de rayon $1$, muni d'un sens direct (sens antihoraire).

Un **radian** est la mesure d'un angle au centre qui intercepte un arc de longueur égale au rayon du cercle. Ainsi :

$$\pi \text{ radians} = 180^\circ$$

## 2. Valeurs remarquables à connaître absolument

| $x$ (rad) | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $\cos(x)$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| $\sin(x)$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ |

## 3. Propriétés et relations fondamentales

Pour tout réel $x$ :

$$\cos^2(x) + \sin^2(x) = 1$$

Formules de symétrie et de décalage :
* $\cos(-x) = \cos(x)$ et $\sin(-x) = -\sin(x)$ (parité)
* $\cos(x + \pi) = -\cos(x)$ et $\sin(x + \pi) = -\sin(x)$
* $\cos(\pi - x) = -\cos(x)$ et $\sin(\pi - x) = \sin(x)$
