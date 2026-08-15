---
id: 3e-transformations-homothety
locale: fr
title: Transformations, homothétie et similitude
strand: Géométrie
summary: Construire et composer des symétries, translations, rotations et homothéties, puis prévoir les effets sur les mesures.
objectives:
  - Construire et décrire des symétries axiales et centrales, des translations et des rotations
  - Utiliser une homothétie pour reconnaître des figures semblables
  - Composer des transformations et appliquer les coefficients de longueur, d'aire et de volume
prerequisites:
  - Coordonnées dans le plan
  - Rapports et puissances
vocabulary:
  - en: translation
    definition: Transformation qui déplace chaque point selon le même déplacement orienté.
  - en: rotation
    definition: Transformation déterminée par un centre, un angle et un sens.
  - en: homothety
    definition: Transformation qui multiplie les distances orientées à partir d'un centre fixe par un même nombre.
  - en: similar figures
    definition: Figures dont les angles homologues sont égaux et les longueurs homologues proportionnelles.
flashcards:
  - front: Quelles transformations conservent les longueurs ?
    back: Les symétries axiales et centrales, les translations et les rotations sont des isométries et conservent les longueurs.
  - front: Quel est l'effet d'une homothétie de rapport $k$ sur une aire ?
    back: Elle multiplie l'aire par $k^2$.
  - front: Quel est l'effet d'un coefficient d'échelle $k$ sur un volume ?
    back: Il multiplie le volume par $|k|^3$ ; pour un agrandissement physique, $k$ est positif.
exercises:
  - id: 3e-transformations-t1
    tierTitle: Application directe
    prompt: "Pour $A(-2;3)$, donner l'image $A'$ par la symétrie axiale d'axe horizontal et l'image $A''$ par la symétrie centrale de centre l'origine."
    solution: "La symétrie d'axe horizontal conserve l'abscisse et change le signe de l'ordonnée, donc $A'=(-2;-3)$. La symétrie centrale de centre l'origine change les deux signes, donc $A''=(2;-3)$."
    hints:
      - "La symétrie d'axe horizontal ne change que $y$ ; la symétrie centrale de centre l'origine change les deux coordonnées."
    expected: "A'=(-2;-3), A''=(2;-3)"
    accepted:
      - "(-2;-3) ; (2;-3)"
      - "A'(-2;-3) et A''(2;-3)"
  - id: 3e-transformations-t2
    tierTitle: Niveau Brevet
    prompt: "Deux solides semblables ont des arêtes homologues de $6$ cm et $9$ cm. Le plus petit a une aire totale de $80$ cm$^2$ et un volume de $64$ cm$^3$. Déterminer le coefficient d'échelle, l'aire totale et le volume du grand solide. Expliquer pourquoi l'aire et le volume utilisent des puissances différentes."
    solution: "Le coefficient de longueur vaut $k=9/6=3/2$. Les aires sont multipliées par $k^2=9/4$ ; la grande aire vaut $80\\times9/4=180$ cm$^2$. Les volumes sont multipliés par $k^3=27/8$ ; le grand volume vaut $64\\times27/8=216$ cm$^3$. Une aire comporte deux dimensions de longueur et un volume en comporte trois."
    hints:
      - "Commencer par calculer le coefficient linéaire à partir des arêtes homologues."
      - "L'élever au carré pour l'aire et au cube pour le volume."
    rubric:
      - "Obtient le coefficient linéaire $3/2$."
      - "Utilise le coefficient d'aire $9/4$ pour obtenir $180$ cm$^2$."
      - "Utilise le coefficient de volume $27/8$ pour obtenir $216$ cm$^3$ et explique les exposants."
  - id: 3e-transformations-t3
    tierTitle: Synthèse
    prompt: "Le carré $ABCD$ a pour sommets $A(1;1)$, $B(3;1)$, $C(3;3)$ et $D(1;3)$. Construire son image après une rotation de $90^\\circ$ dans le sens antihoraire autour de l'origine, puis une homothétie de centre l'origine et de rapport $1/2$. Donner toutes les coordonnées intermédiaires et finales, l'aire finale et expliquer pourquoi l'ordre inverse donnerait ici le même résultat."
    solution: "La rotation transforme $(x;y)$ en $(-y;x)$, donc donne $A'(-1;1)$, $B'(-1;3)$, $C'(-3;3)$ et $D'(-3;1)$. L'homothétie donne $A''(-1/2;1/2)$, $B''(-1/2;3/2)$, $C''(-3/2;3/2)$ et $D''(-3/2;1/2)$. L'aire initiale vaut $4$ ; la rotation la conserve et l'homothétie la multiplie par $1/4$, donc l'aire finale vaut $1$. Les deux transformations ont le même centre et les règles $(-y;x)$ et $(x/2;y/2)$ commutent ; l'ordre inverse donne donc les mêmes points."
    hints:
      - "Utiliser $(x;y)\\mapsto(-y;x)$ pour la rotation, puis diviser les deux coordonnées par deux."
      - "Comparer les règles de coordonnées dans les deux ordres possibles."
    rubric:
      - "Calcule correctement les quatre coordonnées intermédiaires après rotation."
      - "Calcule correctement les quatre coordonnées finales après homothétie."
      - "Utilise le coefficient d'aire $1/4$ pour obtenir l'aire finale $1$."
      - "Montre à partir des règles de coordonnées que ces transformations de même centre commutent."
  - id: 3e-transformations-t4
    tierTitle: Défi avancé
    prompt: "Deux droites perpendiculaires $d_1$ et $d_2$ se coupent en $O$. Pour un point $P$, construire $P_1$, son symétrique axial par rapport à $d_1$, puis $P_2$, le symétrique axial de $P_1$ par rapport à $d_2$. Construire enfin $Q$, image de $P_2$ par l'homothétie de centre $O$ et de rapport $-1/2$. Démontrer sans coordonnées que $P_2$ est le symétrique central de $P$ par rapport à $O$, puis que la construction complète envoie $P$ sur le point $Q$ de la demi-droite $[OP)$ tel que $OQ=OP/2$. En déduire le coefficient d'aire pour toute figure."
    solution: "Chaque symétrie axiale conserve la distance à $O$, donc $OP=OP_1=OP_2$. Une réflexion double l'angle orienté entre un rayon et son axe. Comme $d_1$ et $d_2$ sont perpendiculaires, les deux réflexions font tourner la demi-droite $[OP)$ de $180^\\circ$ au total. Ainsi, $O,P,P_2$ sont alignés sur des demi-droites opposées et $OP_2=OP$ : $P_2$ est le symétrique central de $P$ par rapport à $O$. L'homothétie de rapport $-1/2$ place $Q$ sur la demi-droite opposée à $[OP_2)$, donc sur $[OP)$, et donne $OQ=OP_2/2=OP/2$. La construction complète est donc l'homothétie de centre $O$ et de rapport $1/2$. Elle multiplie les longueurs par $1/2$ et les aires par $(1/2)^2=1/4$."
    hints:
      - "Suivre la distance à $O$ et la rotation totale produite par les réflexions d'axes perpendiculaires."
      - "Un rapport d'homothétie négatif place l'image sur la demi-droite opposée."
      - "Reconnaître une transformation usuelle ayant le même centre et la même règle de distance."
    rubric:
      - "Donne une construction correcte à la règle et au compas des images successives."
      - "Utilise la perpendicularité des axes pour démontrer que les deux symétries axiales composent la symétrie centrale de centre $O$."
      - "Utilise le rapport négatif pour prouver que $Q$ appartient à $[OP)$ et que $OQ=OP/2$."
      - "Identifie la composée comme une homothétie de rapport $1/2$ et en déduit le coefficient d'aire $1/4$."
---
# Transformations, homothétie et similitude

## Isométries : déplacer sans redimensionner

Une **translation** déplace chaque point selon un même vecteur. Une **rotation** fait tourner chaque point d'un même angle orienté autour d'un centre fixe. Ces deux transformations sont des isométries : elles conservent les longueurs, les angles, le parallélisme, les aires et l'orientation.

Dans un repère, la translation de vecteur $(u;v)$ transforme

$$(x;y)\longmapsto(x+u;y+v).$$

Une rotation de $90^\circ$ dans le sens antihoraire autour de l'origine transforme $(x;y)$ en $(-y;x)$.

## Symétries axiale et centrale

Une **symétrie axiale** réfléchit un point par rapport à une droite : l'axe est la médiatrice du segment joignant un point à son image. Une **symétrie centrale** de centre $O$ envoie $M$ sur $M'$ de sorte que $O$ soit le milieu de $[MM']$ ; c'est aussi une rotation de $180^\circ$ autour de $O$.

Pour construire une image axiale, on trace la perpendiculaire à l'axe passant par le point et on reporte la même distance de l'autre côté. Pour une image centrale, on trace $(OM)$ et on reporte $OM$ au-delà de $O$. Les deux symétries conservent longueurs et angles, mais la symétrie axiale inverse l'orientation.

## Homothétie : redimensionner depuis un centre

Une homothétie de centre $O$ et de rapport $k$ transforme $M$ en un point $M'$ de la droite $(OM)$ tel que

$$\overrightarrow{OM'}=k\overrightarrow{OM}.$$

Si $k>1$, il s'agit d'un agrandissement ; si $0<k<1$, d'une réduction. Si $k<0$, l'image se trouve sur la demi-droite opposée. Les longueurs sont multipliées par $|k|$ et les angles sont conservés. La figure initiale et son image sont donc **semblables**.

## Coefficients de longueur, d'aire et de volume

Pour un coefficient linéaire positif $k$ :

$$L'=kL,\qquad A'=k^2A,\qquad V'=k^3V.$$

Par exemple, une maquette agrandie d'un facteur $3$ a ses longueurs multipliées par $3$, ses aires par $9$ et ses volumes par $27$. Les unités confirment les puissances : une aire s'exprime en unités carrées et un volume en unités cubes.

## Exemple résolu et choix de méthode

Une photographie de $8$ cm de largeur et $5$ cm de hauteur est agrandie jusqu'à une largeur de $12$ cm. Le coefficient linéaire vaut $12/8=1,5$ ; la nouvelle hauteur vaut donc $5\times1,5=7,5$ cm. Son aire passe de $40$ cm$^2$ à

$$40\times1,5^2=90\text{ cm}^2.$$

On choisit une translation ou une rotation lorsque la taille doit rester inchangée. On choisit une homothétie ou la similitude lorsque les longueurs homologues sont proportionnelles. Avant tout calcul d'aire ou de volume, il faut toujours retrouver le coefficient **linéaire**.

## Erreurs fréquentes

- Multiplier une aire ou un volume par $k$ au lieu de $k^2$ ou $k^3$.
- Confondre l'angle d'une rotation et le rapport d'une homothétie.
- Oublier le centre d'une rotation ou d'une homothétie.
- Confondre l'axe d'une symétrie axiale et le centre d'une symétrie centrale.
- Considérer deux figures semblables comme superposables : leurs formes coïncident, mais leurs tailles peuvent différer.
- Donner un signe négatif à une aire ou à un volume physique ; ces grandeurs restent positives.

## Prolongement : composer des transformations

Plusieurs transformations peuvent se combiner en une seule et, en général, l'ordre compte. Deux symétries d'axes perpendiculaires composent la symétrie centrale dont le centre est leur intersection. Des rotations et homothéties de même centre peuvent parfois être comparées en appliquant leurs règles de construction point par point. Il faut toujours construire ou nommer chaque image intermédiaire avant de simplifier une composée.
