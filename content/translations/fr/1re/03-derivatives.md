---
id: 1re-derivatives
locale: fr
title: Dérivation et tangentes
strand: Analyse et fonctions
summary: Maîtriser le nombre dérivé, l'équation de la tangente et l'étude des variations d'une fonction.
objectives:
  - Calculer le nombre dérivé comme limite d'un taux de variation
  - Établir l'équation cartésienne de la tangente en un point
  - Dresser le tableau de variations à partir du signe de la dérivée
prerequisites:
  - Fonctions et représentations graphiques
  - Équations de droites et pente
vocabulary:
  - en: Derivative at a point
    definition: Pente de la tangente à la courbe en un point a, notée f'(a).
  - en: Tangent line
    definition: Droite qui touche la courbe au point (a, f(a)) en épousant localement sa direction.
flashcards:
  - front: Quelle est la formule de l'équation de la tangente au point d'abscisse a ?
    back: y = f'(a)(x - a) + f(a)
  - front: Que signifie f'(a) > 0 sur un intervalle I ?
    back: La fonction f est strictement croissante sur l'intervalle I.
exercises:
  - id: 1re-derivatives-t1
    tierTitle: Application directe
    prompt: Déterminer l'équation de la tangente à $f(x)=x^2$ au point d'abscisse $2$.
    solution: $f'(x)=2x$, donc $f'(2)=4$ et $f(2)=4$. La tangente a pour équation $y=4(x-2)+4=4x-4$.
    hints:
      - Utiliser $y=f'(a)(x-a)+f(a)$ avec $a=2$.
  - id: 1re-derivatives-t2
    tierTitle: Entraînement standard
    prompt: Soit $f(x)=x^3-3x^2-9x+5$. À l'aide de la dérivée, déterminer la valeur minimale de $f$ sur $[0,4]$.
    solution: $f'(x)=3x^2-6x-9=3(x+1)(x-3)$. Sur $[0,4]$, la dérivée est négative sur $[0,3)$ et positive sur $(3,4]$ ; ainsi, $f$ décroît puis croît et atteint son minimum en $x=3$. Comme $f(3)=27-27-27+5=-22$, la valeur minimale est $-22$.
    hints:
      - Factoriser la dérivée et dresser son tableau de signes.
      - Comparer le point critique aux bornes de l'intervalle.
  - id: 1re-derivatives-t3
    tierTitle: Synthèse
    prompt: Déterminer toutes les tangentes à la parabole $y=x^2$ qui passent par le point $P(0,-4)$.
    solution: Au point d'abscisse $a$, la tangente a pour équation $y=2a(x-a)+a^2=2ax-a^2$. Elle passe par $P$ exactement lorsque $-4=-a^2$, donc lorsque $a=2$ ou $a=-2$. Les deux tangentes sont $y=4x-4$ et $y=-4x-4$.
    hints:
      - Écrire l'équation de la tangente en une abscisse quelconque $a$.
      - Substituer les coordonnées de $P$ dans cette équation de tangente.
    rubric:
      - Établit l'équation de la tangente générale $y=2ax-a^2$.
      - Trouve les deux abscisses de contact $a=2$ et $a=-2$.
      - Donne les deux équations de tangentes, et aucune autre.
  - id: 1re-derivatives-t4
    tierTitle: Défi avancé
    prompt: Pour $f(x)=x^3-3x$ et un paramètre réel $k$, déterminer le nombre de tangentes distinctes à la courbe représentative de $f$ qui passent par $P(1,k)$. Démontrer cette classification, y compris pour les valeurs limites de $k$.
    solution: La tangente au point d'abscisse $a$ a pour équation $y=(3a^2-3)(x-a)+a^3-3a$. Elle passe par $(1,k)$ exactement lorsque $k=g(a)=-2a^3+3a^2-3$. Or $g'(a)=6a(1-a)$ ; la fonction $g$ décroît donc sur $(-\infty,0]$, croît sur $[0,1]$ et décroît sur $[1,+\infty)$. Son minimum local et son maximum local sont $g(0)=-3$ et $g(1)=-2$. Il existe donc trois abscisses de contact lorsque $-3<k<-2$, deux lorsque $k=-3$ ou $k=-2$, et une lorsque $k<-3$ ou $k>-2$. Pour $k=-3$, $g(a)+3=a^2(3-2a)$ donne $a=0$ ou $a=3/2$ ; pour $k=-2$, $g(a)+2=-(a-1)^2(2a+1)$ donne $a=1$ ou $a=-1/2$, ce qui confirme l'existence de deux tangentes distinctes à chaque valeur limite. Ici, des abscisses de contact distinctes donnent des tangentes distinctes ; il s'agit donc aussi du nombre de tangentes.
    hints:
      - Écrire l'équation de la tangente en une abscisse de contact quelconque $a$ et imposer qu'elle passe par $(1,k)$.
      - Étudier les variations de la fonction cubique $g(a)$ ainsi obtenue.
      - Factoriser les équations pour $k=-3$ et $k=-2$ afin de compter les solutions distinctes aux valeurs limites.
    rubric:
      - Établit la condition $k=-2a^3+3a^2-3$.
      - Utilise les variations de cette fonction cubique pour obtenir une, deux ou trois solutions dans les bons intervalles du paramètre.
      - Vérifie les deux valeurs limites et justifie que les tangentes obtenues sont distinctes.
---
# Dérivation et tangentes

Le **nombre dérivé** mesure la sensibilité ou le taux de variation instantané d'une fonction $f$ lorsque sa variable varie très légèrement autour d'un point $a$.

## 1. Définition du nombre dérivé

Soit $f$ une fonction définie sur un intervalle $I$ et $a \in I$. Le taux de variation de $f$ entre $a$ et $a+h$ (avec $h \neq 0$) est :

$$\tau(h) = \frac{f(a+h) - f(a)}{h}$$

Si ce taux de variation admet une limite finie lorsque $h \to 0$, la fonction $f$ est dite **dérivable en $a$**, et cette limite est le nombre dérivé $f'(a)$ :

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

## 2. Équation de la tangente

La **tangente** à la courbe représentative $\mathcal{C}_f$ au point $A(a ; f(a))$ est la droite de pente $f'(a)$ passant par $A$. Son équation est :

$$y = f'(a)(x - a) + f(a)$$

## 3. Lien entre signe de la dérivée et variations

* Si $f'(x) > 0$ pour tout $x \in I$, alors $f$ est **strictement croissante** sur $I$.
* Si $f'(x) < 0$ pour tout $x \in I$, alors $f$ est **strictement décroissante** sur $I$.
* Si $f'(x) = 0$ pour tout $x \in I$, alors $f$ est **constante** sur $I$.
