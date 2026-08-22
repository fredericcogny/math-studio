---
id: 4e-translation-vectors
locale: fr
title: Translation et vecteurs
strand: Géométrie
summary: Comprendre la translation comme un déplacement rigide décrit par un vecteur et apprendre à additionner des vecteurs graphiquement.
objectives:
  - Décrire une translation à l'aide de la notation vectorielle
  - Identifier et construire des vecteurs égaux
  - Additionner des vecteurs graphiquement par la méthode bout à bout
prerequisites:
  - Lecture du plan repéré
  - Transformations géométriques de base
vocabulary:
  - en: translation
    definition: Transformation géométrique qui fait glisser chaque point d'une figure de la même distance dans la même direction.
  - en: vector
    definition: Objet mathématique possédant une direction, un sens et une norme, représenté par une flèche.
  - en: image
    definition: Point ou figure obtenu après application d'une transformation.
flashcards:
  - front: Quelles informations un vecteur porte-t-il ?
    back: Un vecteur porte une direction, un sens (orientation) et une norme (longueur). Il n'est pas attaché à un point fixe.
  - front: Comment note-t-on le vecteur allant du point $A$ au point $B$ ?
    back: $\vec{AB}$. Sa norme est la distance $AB$.
  - front: Quand deux vecteurs sont-ils égaux ?
    back: Deux vecteurs sont égaux lorsqu'ils ont la même direction, le même sens et la même norme.
exercises:
  - id: 4e-transvec-t1
    tierTitle: Application directe
    prompt: Le point $A$ a pour coordonnées $(2 ; 3)$. Le vecteur de translation est $\vec{u}=(4 ; -1)$. Trouver les coordonnées de l'image $A'$ de $A$.
    solution: $A'=(2+4 ;\; 3+(-1))=(6 ; 2)$.
    hints:
      - Additionner chaque composante du vecteur à la coordonnée correspondante du point.
  - id: 4e-transvec-t2
    tierTitle: Entraînement standard
    prompt: Le triangle $ABC$ a pour sommets $A(1 ; 1)$, $B(4 ; 1)$, $C(1 ; 5)$. On le translate par $\vec{v}=(3 ; -2)$. Trouver les coordonnées de $A'$, $B'$, $C'$ et calculer la longueur $A'B'$.
    solution: $A'=(4 ; -1)$, $B'=(7 ; -1)$, $C'=(4 ; 3)$. La longueur $A'B'=\sqrt{(7-4)^2+(-1-(-1))^2}=\sqrt{9}=3$, ce qui est égal à $AB$.
    hints:
      - Appliquer le vecteur de translation à chaque sommet séparément.
      - Une translation conserve les distances, donc $A'B'=AB$.
  - id: 4e-transvec-t3
    tierTitle: Synthèse du programme officiel
    prompt: Sur un quadrillage, $A(0 ; 0)$, $B(3 ; 2)$ et $C(1 ; 4)$. L'image de $A$ par une translation est $A'(2 ; 3)$. Trouver le vecteur de translation, les images $B'$ et $C'$, puis vérifier que $\vec{AB}=\vec{A'B'}$.
    solution: Le vecteur de translation est $\vec{u}=\vec{AA'}=(2-0 ; 3-0)=(2 ; 3)$. Alors $B'=(5 ; 5)$ et $C'=(3 ; 7)$. On vérifie $\vec{AB}=(3 ; 2)$ et $\vec{A'B'}=(5-2 ; 5-3)=(3 ; 2)$. Ils sont égaux.
    hints:
      - Le vecteur de translation est $\vec{AA'}$.
      - Des vecteurs égaux ont les mêmes composantes.
    rubric:
      - Détermine correctement le vecteur de translation à partir de A et A'.
      - Calcule B' et C' avec exactitude.
      - Vérifie que les vecteurs correspondants sont égaux.
  - id: 4e-transvec-t4
    tierTitle: Défi avancé
    prompt: On applique deux translations successives, d'abord $\vec{u}=(a ; b)$, puis $\vec{v}=(c ; d)$. Démontrer que la composée est une translation de vecteur $\vec{u}+\vec{v}=(a+c ; b+d)$. Puis trouver $\vec{u}$ et $\vec{v}$ si $\vec{u}+\vec{v}=(5 ; 1)$ et si l'image de $(0 ; 0)$ par la première translation appartient à la droite $y=x$.
    solution: >-
      Soit $P=(x ; y)$. Après la première translation, $P_1=(x+a ; y+b)$. Après la seconde, $P_2=(x+a+c ; y+b+d)$. C'est bien une translation de vecteur $(a+c ; b+d)$. Pour la seconde partie, l'image de $(0 ; 0)$ par $\vec{u}$ est $(a ; b)$ sur $y=x$, donc $b=a$. Avec $a+c=5$ et $a+d=1$, on peut choisir $a=2$, ce qui donne $\vec{u}=(2 ; 2)$ et $\vec{v}=(3 ; -1)$.
    hints:
      - Appliquer chaque translation successivement à un point quelconque $(x ; y)$.
      - La condition $y=x$ sur l'image intermédiaire donne $b=a$.
    rubric:
      - Démontre la formule de composition en appliquant les deux translations à un point quelconque.
      - Utilise correctement la contrainte d'appartenance à la droite y = x.
      - Fournit un couple de vecteurs valide vérifiant toutes les conditions.
---
## Qu'est-ce qu'une translation ?

Une **translation** fait glisser chaque point du plan de la même distance dans la même direction. Rien ne tourne, rien ne se retourne, et aucune distance ne change. Une translation est entièrement décrite par un **vecteur**.

Un vecteur $\vec{u}$ porte trois informations : une **direction** (la droite qu'il suit), un **sens** (dans quelle direction le long de cette droite) et une **norme** (la distance parcourue). Contrairement à un point, un vecteur n'est pas attaché à une position fixe : on peut le dessiner n'importe où et il reste le même vecteur.

## Notation vectorielle

Le vecteur du point $A$ au point $B$ se note $\vec{AB}$. Ses composantes dans un repère orthonormé sont :

$$\vec{AB} = (x_B - x_A ;\; y_B - y_A)$$

Si $A(1 ; 2)$ et $B(4 ; 5)$, alors $\vec{AB}=(3 ; 3)$. La norme est $\|\vec{AB}\|=\sqrt{3^2+3^2}=3\sqrt{2}$.

## Vecteurs égaux

Deux vecteurs sont **égaux** lorsqu'ils ont la même direction, le même sens et la même norme. Dans le plan repéré, $\vec{AB}=\vec{CD}$ si et seulement s'ils ont les mêmes composantes. C'est l'idée fondamentale de la translation : chaque point se déplace selon le même vecteur, donc $\vec{AA'}=\vec{BB'}=\vec{CC'}$ pour tous les couples point-image.

## Addition de vecteurs

Pour additionner $\vec{u}$ et $\vec{v}$, placer l'origine de $\vec{v}$ à l'extrémité de $\vec{u}$. La somme $\vec{u}+\vec{v}$ va de l'origine de $\vec{u}$ à l'extrémité de $\vec{v}$. En coordonnées :

$$(a ; b)+(c ; d)=(a+c ;\; b+d)$$

Deux translations successives de vecteurs $\vec{u}$ puis $\vec{v}$ produisent le même résultat qu'une seule translation de vecteur $\vec{u}+\vec{v}$.

### Pour aller plus loin

Si $\vec{AB}=\vec{DC}$, que peut-on dire du quadrilatère $ABCD$ ? Dessiner plusieurs exemples et chercher une propriété commune.
