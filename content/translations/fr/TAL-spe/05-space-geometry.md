---
id: "tal-space-geometry"
locale: "fr"
title: "Géométrie dans l'espace (droites, plans et orthogonalité)"
strand: "Géométrie dans l'espace"
summary: "Vecteurs de l'espace, représentation paramétrique d'une droite, équation cartésienne d'un plan et produit scalaire en dimension 3."
objectives:
  - "Établir une représentation paramétrique d'une droite dans R^3"
  - "Déterminer l'équation cartésienne d'un plan ax + by + cz + d = 0 à partir d'un vecteur normal"
  - "Calculer la distance d'un point à un plan et déterminer les intersections"
prerequisites:
  - "Produit scalaire dans le plan et géométrie vectorielle"
vocabulary:
  - en: "Parametric representation"
    definition: "Système exprimant x, y et z en fonction d'un paramètre réel t pour décrire les points d'une droite."
  - en: "Normal vector to a plane"
    definition: "Vecteur non nul orthogonal à tout vecteur directeur du plan P."
flashcards:
  - front: "Quelle est l'équation cartésienne générale d'un plan de vecteur normal n(a, b, c) ?"
    back: "a*x + b*y + c*z + d = 0"
  - front: "Comment teste-t-on si deux plans sont orthogonaux dans l'espace ?"
    back: "Leurs vecteurs normaux n1 et n2 doivent avoir un produit scalaire nul (n1 . n2 = 0)."
exercises:
  - id: "tal-geo3d-t1"
    tierTitle: "Application directe"
    prompt: "Le point $A(1,2,9)$ appartient-il au plan $\\mathcal P:2x-3y+z-5=0$ ? Répondre par oui ou non."
    solution: "En remplaçant les coordonnées, on obtient $2(1)-3(2)+9-5=0$ ; donc $A$ appartient à $\\mathcal P$."
    hints:
      - "Remplacer les trois coordonnées dans l'équation du plan."
    expected: "oui"
    accepted:
      - "Oui"
  - id: "tal-geo3d-t2"
    tierTitle: "Entraînement standard"
    prompt: "Déterminer l'intersection de la droite $D:(x,y,z)=(1,2,0)+t(1,-1,1)$ avec le plan $\\mathcal P:x+y+z=5$. Donner le paramètre et le point."
    solution: "Sur $D$, $x=1+t$, $y=2-t$ et $z=t$. En remplaçant dans l'équation du plan, on obtient $3+t=5$, donc $t=2$. Le point d'intersection est $(3,0,2)$."
    hints:
      - "Remplacer les coordonnées paramétriques dans l'équation du plan."
      - "Utiliser la valeur obtenue du paramètre dans les trois coordonnées."
  - id: "tal-geo3d-t3"
    tierTitle: "Synthèse"
    prompt: "Soit $S=(1,0,0)$ et $\\mathcal P:x+2y+2z-9=0$. Déterminer le projeté orthogonal $H$ de $S$ sur $\\mathcal P$, puis calculer $d(S,\\mathcal P)$."
    solution: "Un vecteur normal est $n=(1,2,2)$ ; la perpendiculaire au plan passant par $S$ s'écrit donc $H=S+tn=(1+t,2t,2t)$. La condition $H\\in\\mathcal P$ donne $1+t+4t+4t-9=0$, d'où $t=8/9$. Ainsi, $H=(17/9,16/9,16/9)$. Enfin, $SH=|t|\\|n\\|=(8/9)\\cdot3=8/3$."
    hints:
      - "La droite reliant $S$ à son projeté est parallèle à un vecteur normal au plan."
      - "Déterminer son intersection avec le plan, puis calculer $SH$."
  - id: "tal-geo3d-t4"
    tierTitle: "Défi avancé"
    prompt: "On considère $D_1:(x,y,z)=(0,0,0)+t(1,0,1)$ et $D_2:(x,y,z)=(0,1,0)+s(0,1,1)$. Démontrer que ces droites sont gauches. Sans citer de formule de distance entre deux droites, déterminer des points $P\\in D_1$ et $Q\\in D_2$ tels que $PQ$ soit perpendiculaire aux deux droites, démontrer que ce segment réalise la distance minimale et calculer cette distance."
    solution: "Les vecteurs directeurs $u=(1,0,1)$ et $v=(0,1,1)$ ne sont pas colinéaires. L'égalité $(t,0,t)=(0,1+s,s)$ imposerait $t=0$ et $s=-1$, puis donnerait des troisièmes coordonnées contradictoires : les droites sont donc gauches. Écrivons $P=(t,0,t)$ et $Q=(0,1+s,s)$. Alors $\\overrightarrow{PQ}=(-t,1+s,s-t)$. L'orthogonalité à $u$ et à $v$ donne $s-2t=0$ et $1+2s-t=0$, d'où $t=-1/3$ et $s=-2/3$. Ainsi, $P=(-1/3,0,-1/3)$, $Q=(0,1/3,-2/3)$ et $PQ=\\sqrt{3(1/3)^2}=1/\\sqrt3$. Tout autre vecteur reliant les deux droites s'écrit $\\overrightarrow{PQ}+\\alpha u+\\beta v$ ; comme $PQ$ est orthogonal aux deux directions, le théorème de Pythagore donne pour le carré de sa longueur $PQ^2+\\|\\alpha u+\\beta v\\|^2\\geq PQ^2$. Ce segment est donc minimal."
    hints:
      - "Commencer par vérifier si les deux représentations paramétriques peuvent décrire un même point."
      - "Écrire des points génériques $P(t)$ et $Q(s)$, puis imposer deux équations de produit scalaire."
      - "Pour établir le caractère minimal, comparer tout autre segment au segment perpendiculaire à l'aide d'une décomposition orthogonale."
    rubric:
      - "Montre que les vecteurs directeurs ne sont pas colinéaires et que les droites ne sont pas sécantes."
      - "Résout les deux équations d'orthogonalité et obtient les points $P$ et $Q$ corrects."
      - "Démontre que la perpendiculaire commune minimise la longueur au lieu de citer une formule."
      - "Calcule la distance exacte $1/\\sqrt3$."
---

# Géométrie dans l'espace (droites, plans et orthogonalité)

La géométrie vectorielle dans l'espace $\mathbb{R}^3$ généralise les outils du plan à l'aide d'un repère orthonormé $(O; \vec{i}, \vec{j}, \vec{k})$.

## 1. Représentation paramétrique d'une droite

Une droite $D$ passant par $A(x_A, y_A, z_A)$ et de vecteur directeur $\vec{u}(a, b, c)$ est définie par :

$$\begin{cases} x = x_A + a t \\ y = y_A + b t \\ z = z_A + c t \end{cases} \quad (t \in \mathbb{R})$$

## 2. Équation cartésienne d'un plan

Un plan $\mathcal{P}$ passant par $A(x_A, y_A, z_A)$ et admettant un **vecteur normal** $\vec{n}(a, b, c)$ non nul est l'ensemble des points $M(x, y, z)$ tels que $\vec{AM} \cdot \vec{n} = 0$.

Son équation cartésienne s'écrit :

$$a x + b y + c z + d = 0$$

où $d = -(a x_A + b y_A + c z_A)$.

## 3. Projection et distance à un plan

La distance d'un point $M_0(x_0, y_0, z_0)$ à un plan $\mathcal{P} : a x + b y + c z + d = 0$ est la longueur $M_0 H$, où $H$ est le projeté orthogonal de $M_0$ sur $\mathcal{P}$ :

$$d(M_0, \mathcal{P}) = \frac{|a x_0 + b y_0 + c z_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$
