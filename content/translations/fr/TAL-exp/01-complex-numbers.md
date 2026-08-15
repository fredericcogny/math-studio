---
id: "tal-exp-complex"
locale: "fr"
title: "Nombres complexes : formes et géométrie"
strand: "Mathématiques expertes"
summary: "Découvrir le corps des nombres complexes, la forme algébrique, le module, l'argument et l'interprétation géométrique."
objectives:
  - "Manipuler l'unité imaginaire i telle que i^2 = -1"
  - "Passer de la forme algébrique a + ib à la forme exponentielle r e^(i theta)"
  - "Résoudre des équations polynomiales dans C et utiliser les nombres complexes en géométrie"
prerequisites:
  - "Trigonométrie sur le cercle et géométrie vectorielle"
vocabulary:
  - en: "Complex conjugate"
    definition: "Le conjugué de z = a + ib est bar(z) = a - ib."
  - en: "Modulus"
    definition: "La distance de l'origine au point image M(z), donnée par |z| = sqrt(a^2 + b^2)."
flashcards:
  - front: "Quelle est la forme exponentielle d'un nombre complexe de module r et d'argument theta ?"
    back: "z = r e^(i theta) = r (cos theta + i sin theta)"
  - front: "Que vaut |z|^2 en fonction de z et de son conjugué bar(z) ?"
    back: "|z|^2 = z * bar(z)"
exercises:
  - id: "tal-cpx-t1"
    tierTitle: "Application directe"
    prompt: "Écrire $\\frac{3+4i}{1-i}$ sous forme algébrique."
    solution: "On multiplie le numérateur et le dénominateur par $1+i$ : $\\frac{(3+4i)(1+i)}{(1-i)(1+i)}=\\frac{-1+7i}{2}=-\\frac12+\\frac72i$."
    hints:
      - "Multiplier par le conjugué du dénominateur."
  - id: "tal-cpx-t2"
    tierTitle: "Entraînement standard"
    prompt: "À l'aide de la forme exponentielle, calculer la valeur exacte de $z^6$ pour $z=-2+2\\sqrt3i$."
    solution: "Le module vaut $\\sqrt{4+12}=4$. Comme le point se situe dans le deuxième quadrant et que son angle de référence est $\\pi/3$, un argument est $2\\pi/3$. Ainsi, $z=4e^{2i\\pi/3}$ et, d'après la formule de Moivre, $z^6=4^6e^{4i\\pi}=4096$."
    hints:
      - "Calculer le module et repérer le quadrant avant de choisir l'argument."
      - "Élever le module à la puissance 6 et multiplier l'argument par 6."
  - id: "tal-cpx-t3"
    tierTitle: "Synthèse"
    prompt: "Résoudre $z^3=8i$ dans $\\mathbb C$. Donner les racines sous forme algébrique et décrire la configuration géométrique de leurs points images dans le plan complexe."
    solution: "Comme $8i=8e^{i(\\pi/2+2m\\pi)}$, les racines ont pour module $2$ et pour arguments $\\pi/6+2k\\pi/3$, avec $k=0,1,2$. Elles sont $\\sqrt3+i$, $-\\sqrt3+i$ et $-2i$. Leurs points images appartiennent au cercle de centre $O$ et de rayon $2$, et les écarts angulaires successifs valent $2\\pi/3$ ; ce sont donc les sommets d'un triangle équilatéral de centre $O$."
    hints:
      - "Pour les racines cubiques, prendre la racine cubique du module et diviser tous les arguments par 3."
      - "Utiliser des arguments espacés de $2\\pi/3$."
    rubric:
      - "Détermine les trois racines de module $2$ avec les arguments corrects."
      - "Convertit correctement les racines sous forme algébrique."
      - "Utilise l'espacement angulaire régulier pour démontrer que les points images forment un triangle équilatéral de centre $O$."
  - id: "tal-cpx-t4"
    tierTitle: "Défi avancé"
    prompt: "Soit $\\zeta=e^{2i\\pi/3}$ et $N\\in\\mathbb N$. Démontrer d'abord le filtre des racines de l'unité : $1+\\zeta^m+\\zeta^{2m}=3$ lorsque $3\\mid m$, et $0$ sinon. L'utiliser avec le binôme de Newton pour établir une formule de $\\sum_{\\substack{0\\leq k\\leq N\\\\3\\mid k}}\\binom{N}{k}$, puis calculer $\\binom{12}{0}+\\binom{12}{3}+\\binom{12}{6}+\\binom{12}{9}+\\binom{12}{12}$ sans additionner séparément les cinq coefficients."
    solution: "Si $3\\mid m$, tous les termes du filtre valent $1$. Sinon, $q=\\zeta^m$ est une racine cubique non triviale de l'unité, donc $1+q+q^2=(q^3-1)/(q-1)=0$. Développons $(1+\\zeta^j)^N=\\sum_k\\binom Nk\\zeta^{jk}$ pour $j=0,1,2$, puis sommons sur $j$. Le filtre conserve exactement les termes tels que $3\\mid k$, chacun avec un facteur $3$ ; ainsi, $\\sum_{3\\mid k}\\binom Nk=\\frac13\\left(2^N+(1+\\zeta)^N+(1+\\zeta^2)^N\\right)$. Comme $1+\\zeta=e^{i\\pi/3}$ et $1+\\zeta^2=e^{-i\\pi/3}$, pour $N=12$, les deux puissances valent $1$. La somme demandée est donc $(2^{12}+2)/3=1366$."
    hints:
      - "Additionner les trois développements binomiaux associés à $1$, $\\zeta$ et $\\zeta^2$."
      - "Le coefficient intérieur de $\\binom Nk$ est exactement le filtre des racines de l'unité."
    rubric:
      - "Démontre le filtre à trois termes des racines de l'unité pour tout entier $m$."
      - "Combine trois développements binomiaux pour isoler les indices divisibles par $3$."
      - "Établit la formule générale de la somme filtrée avant de remplacer $N$ par $12$."
      - "Calcule correctement les puissances conjuguées et obtient $1366$."
---

# Nombres complexes

L'ensemble des **nombres complexes**, noté $\mathbb{C}$, étend l'ensemble des réels $\mathbb{R}$ en introduisant le nombre imaginaire $i$ tel que :

$$i^2 = -1$$

## 1. Forme algébrique et conjugué

Tout nombre complexe $z \in \mathbb{C}$ s'écrit de manière unique sous **forme algébrique** :

$$z = a + i b \quad (a, b \in \mathbb{R})$$

* $a = \text{Re}(z)$ est la **partie réelle**.
* $b = \text{Im}(z)$ est la **partie imaginaire**.
* Le **conjugué** de $z$ est $\bar{z} = a - i b$.

Propriété remarquable : $z \bar{z} = (a+ib)(a-ib) = a^2 + b^2 = |z|^2$.

## 2. Formes trigonométrique et exponentielle

Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, chaque nombre complexe $z \neq 0$ est associé au point image $M(a ; b)$.

* **Module** : $|z| = \sqrt{a^2 + b^2} = OM$
* **Argument** : $\arg(z) \equiv \theta \pmod{2\pi}$ tel que $\cos\theta = \frac{a}{|z|}$ et $\sin\theta = \frac{b}{|z|}$.

Forme trigonométrique et formule d'Euler :

$$z = |z| (\cos\theta + i\sin\theta) = |z| e^{i\theta}$$

avec $e^{i\theta} = \cos\theta + i\sin\theta$.

## 3. Formules de Moivre et d'Euler

Pour tout $\theta \in \mathbb{R}$ et tout $n \in \mathbb{Z}$ :

* **Formule de Moivre** : $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$
* **Formules d'Euler** :
  $$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \quad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$
