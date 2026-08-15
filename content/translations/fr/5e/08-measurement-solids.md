---
id: 5e-measurement-solids
locale: fr
title: Mesures et représentations des solides
strand: Grandeurs, mesures et géométrie
summary: Convertir les unités métriques, calculer les volumes de prismes et de cylindres, puis relier perspective, vues, assemblages de cubes et patrons.
objectives:
  - Convertir des unités de longueur, d'aire, de volume et de capacité
  - Calculer les volumes des prismes et des cylindres avec $V=B\times h$
  - Tracer et interpréter une perspective et des vues de dessus, de face et de côté
  - Relier les assemblages de cubes et les patrons aux faces et aux dimensions d'un solide
prerequisites:
  - Multiplier des nombres décimaux à écriture finie
  - Calculer les aires d'un rectangle, d'un triangle et d'un disque
  - Lire des unités métriques et des échelles
vocabulary:
  - en: decimal number
    definition: Nombre qui peut s'écrire comme le quotient d'un entier par une puissance de $10$ et qui possède donc une écriture décimale finie.
  - en: volume
    definition: Mesure de l'espace à trois dimensions occupé par un solide, exprimée en unités cubes.
  - en: net
    definition: Assemblage plan de toutes les faces qui peut être plié sans chevauchement pour former un solide.
  - en: prism
    definition: Solide possédant deux bases polygonales parallèles et superposables, reliées par des faces en forme de parallélogrammes.
  - en: orthographic view
    definition: Vue plane obtenue en regardant perpendiculairement depuis une direction précisée, par exemple de dessus, de face ou de côté.
flashcards:
  - front: Donner la formule du volume d'un prisme ou d'un cylindre.
    back: $V=B\times h$, où $B$ est l'aire d'une base et $h$ la hauteur perpendiculaire.
  - front: Quelles capacités correspondent à $1\text{ dm}^3$ et à $1\text{ cm}^3$ ?
    back: $1\text{ dm}^3=1\text{ L}$ et $1\text{ cm}^3=1\text{ mL}$.
  - front: Que montre une vue de dessus ?
    back: L'empreinte vue perpendiculairement d'en haut ; les hauteurs cachées des piles doivent être indiquées si elles ne peuvent pas être déduites.
  - front: Que doit-on vérifier lorsqu'un patron se replie ?
    back: Les arêtes qui se rejoignent ont la même longueur et chaque face apparaît exactement une fois, sans chevauchement.
exercises:
  - id: 5e-measurement-solids-t1
    tierTitle: Conversions d'unités du programme
    prompt: >-
      Convertir $2{,}4\text{ m}^2$ en centimètres carrés, $0{,}006\text{ m}^3$ en décimètres cubes et $750\text{ cm}^3$ en millilitres. Indiquer le facteur utilisé à chaque fois.
    solution: >-
      Comme $1\text{ m}^2=10\,000\text{ cm}^2$, $2{,}4\text{ m}^2=24\,000\text{ cm}^2$. Comme $1\text{ m}^3=1\,000\text{ dm}^3$, $0{,}006\text{ m}^3=6\text{ dm}^3$. Enfin, $1\text{ cm}^3=1\text{ mL}$, donc $750\text{ cm}^3=750\text{ mL}$.
    hints:
      - Élever au carré le facteur de conversion des longueurs pour les aires et au cube pour les volumes.
      - Utiliser l'égalité directe entre capacité et volume pour les centimètres cubes.
    rubric:
      - Obtient $24\,000\text{ cm}^2$ avec le facteur $10\,000$.
      - Obtient $6\text{ dm}^3$ avec le facteur $1\,000$.
      - Obtient $750\text{ mL}$ avec $1\text{ cm}^3=1\text{ mL}$.
  - id: 5e-measurement-solids-t2
    tierTitle: Volumes de prisme et de cylindre du programme
    prompt: >-
      Un prisme triangulaire a une base triangulaire de base $6$ cm et de hauteur perpendiculaire $4$ cm ; la hauteur du prisme vaut $10$ cm. Un cylindre a un rayon de $3$ cm et une hauteur de $8$ cm. Calculer les deux volumes, utiliser $\pi\approx3{,}14$ pour le cylindre, puis convertir chaque réponse en millilitres.
    solution: >-
      L'aire de la base triangulaire vaut $6\times4/2=12\text{ cm}^2$, donc le volume du prisme est $12\times10=120\text{ cm}^3=120\text{ mL}$. Le volume du cylindre vaut $\pi r^2h=\pi\times3^2\times8=72\pi\text{ cm}^3\approx226{,}08\text{ cm}^3=226{,}08\text{ mL}$.
    hints:
      - Calculer l'aire d'une base avant de multiplier par la hauteur perpendiculaire du solide.
      - Les centimètres cubes et les millilitres ont la même valeur numérique.
    rubric:
      - Obtient l'aire de base $12\text{ cm}^2$ et le volume du prisme $120\text{ cm}^3$.
      - Obtient $72\pi\text{ cm}^3\approx226{,}08\text{ cm}^3$ pour le cylindre.
      - Convertit correctement en $120\text{ mL}$ et environ $226{,}08\text{ mL}$.
  - id: 5e-measurement-solids-t3
    tierTitle: Synthèse du programme officiel
    prompt: >-
      Un pavé droit est construit avec des cubes de $1$ cm, selon un assemblage complet de $4$ cubes de longueur, $3$ cubes de profondeur et $2$ cubes de hauteur. Décrire un dessin en perspective ; donner les dimensions des vues de dessus, de face et de droite ; décrire les six rectangles d'un patron ; puis calculer le volume en centimètres cubes et en millilitres.
    solution: >-
      Une perspective montre une base $4\times3$ et des arêtes verticales hautes de $2$ unités ; les arêtes fuyantes parallèles sont tracées parallèlement et les arêtes visibles égales sont cohérentes. La vue de dessus est un rectangle $4$ sur $3$, la vue de face un rectangle $4$ sur $2$ et la vue de droite un rectangle $3$ sur $2$. Un patron possède deux faces $4\times3$, deux faces $4\times2$ et deux faces $3\times2$, disposées le long d'arêtes de même longueur pour se replier sans chevauchement. Il y a $4\times3\times2=24$ cubes unités ; ainsi, $V=24\text{ cm}^3=24\text{ mL}$.
    hints:
      - Chaque vue supprime la dimension dirigée vers l'observateur.
      - Les faces opposées d'un pavé droit sont superposables.
      - Compter les couches ou utiliser $L\times l\times h$.
    rubric:
      - Décrit une perspective cohérente de dimensions $4;3;2$.
      - Donne les vues $4\times3$, $4\times2$ et $3\times2$ dans les bonnes directions.
      - Énumère les trois paires de faces superposables et exige des arêtes de pliage de même longueur.
      - Obtient $24\text{ cm}^3=24\text{ mL}$.
  - id: 5e-measurement-solids-t4
    tierTitle: Optimisation olympique exhaustive
    prompt: >-
      Une boîte fermée en forme de pavé droit a des dimensions entières strictement positives en centimètres et un volume de $72\text{ cm}^3$. Déterminer les dimensions qui minimisent son aire totale et démontrer exhaustivement qu'aucune autre boîte autorisée n'utilise moins de matériau.
    solution: >-
      Ordonnons les dimensions $a\le b\le c$, avec $abc=72$. Alors $a^3\le72$, donc $a\le4$. Pour $a=1$, les couples de diviseurs de $72$ avec $1\le b\le c$ donnent $(1;1;72)$, $(1;2;36)$, $(1;3;24)$, $(1;4;18)$, $(1;6;12)$ et $(1;8;9)$. Pour $a=2$, les couples de $36$ avec $2\le b\le c$ donnent $(2;2;18)$, $(2;3;12)$, $(2;4;9)$ et $(2;6;6)$. Pour $a=3$, les couples de $24$ avec $3\le b\le c$ donnent $(3;3;8)$ et $(3;4;6)$. Pour $a=4$, $bc=18$ et aucun diviseur $b$ ne vérifie $4\le b\le\sqrt{18}$ ; il n'y a donc aucun nouveau triplet. Avec $S=2(ab+ac+bc)$, les aires respectives sont $290$, $220$, $198$, $188$, $180$, $178$, $152$, $132$, $124$, $120$, $114$ et $108\text{ cm}^2$. Le minimum unique est $108\text{ cm}^2$, pour $3;4;6$. La borne sur $a$ et les listes complètes de couples de diviseurs prouvent l'exhaustivité ; les permutations ne changent pas l'aire.
    hints:
      - Ordonner les dimensions et utiliser $a^3\le72$ pour borner la plus petite.
      - Pour chaque valeur possible de $a$, énumérer tous les couples de diviseurs de $bc=72/a$.
      - Ne comparer $S=2(ab+ac+bc)$ qu'après avoir prouvé que la liste des candidats est complète.
    rubric:
      - Borne $a$ et épuise les cas $a=1;2;3;4$ à l'aide des couples de facteurs.
      - Énumère exactement les douze triplets non ordonnés possibles.
      - Calcule correctement toutes les aires et trouve $3;4;6$ avec $108\text{ cm}^2$.
      - Explique pourquoi l'ordre, la borne et l'étude des diviseurs établissent l'optimalité globale.
---
## Grandeurs et écriture décimale

Une longueur utilise des unités linéaires, une aire des unités carrées et un volume des unités cubes. Un **nombre décimal** est un nombre qui peut s'écrire $a/10^n$, avec $a$ entier et $n$ entier naturel ; de manière équivalente, il possède une écriture décimale finie. Il ne se définit pas seulement comme « un nombre écrit avec une virgule ». Par exemple, $3/8=0{,}375$ est décimal, tandis que $1/3$ n'est pas un nombre décimal même s'il possède un développement décimal infini.

## Conversions métriques

Chaque changement d'unité de longueur modifie d'un facteur $10$ ; le facteur correspondant est donc $100$ pour une aire et $1\,000$ pour un volume :

$$1\text{ m}^2=10\,000\text{ cm}^2,\qquad 1\text{ m}^3=1\,000\text{ dm}^3=1\,000\,000\text{ cm}^3.$$

Les capacités sont reliées aux volumes :

$$1\text{ dm}^3=1\text{ L},\qquad1\text{ cm}^3=1\text{ mL}.$$

## Volumes de prismes et de cylindres au programme

Un prisme possède deux bases polygonales parallèles et superposables. Un cylindre possède deux bases circulaires parallèles et superposables. Pour les deux,

$$V=B\times h,$$

où $B$ est l'aire d'une base et $h$ la distance perpendiculaire entre les bases. Un pavé droit a donc pour volume $V=Llh$, un prisme triangulaire utilise $B=b h_{\triangle}/2$ et un cylindre a pour volume

$$V=\pi r^2h.$$

Une arête oblique ne remplace pas la hauteur perpendiculaire.

## Perspective et vues orthogonales

Une perspective cavalière représente trois dimensions sur une feuille. Les arêtes parallèles du solide restent parallèles dans chaque direction de fuite ; les arêtes cachées peuvent être en pointillés. Le dessin aide à visualiser mais n'est généralement pas à l'échelle.

Les vues de dessus, de face et de côté sont orthogonales : l'observateur regarde perpendiculairement à l'objet. Une vue conserve la largeur et la hauteur dans cette direction, mais supprime la profondeur. Il faut indiquer la face choisie comme face avant, car ce choix modifie le nom des vues.

## Assemblages de cubes

Une vue de dessus donne l'empreinte d'un assemblage, mais pas toujours son nombre de cubes. On écrit la hauteur de chaque colonne occupée dans la grille de dessus. Le nombre total de cubes est la somme de ces hauteurs. Les vues de face et de côté montrent la plus grande hauteur visible dans chaque colonne projetée ; deux assemblages différents peuvent donc parfois avoir les mêmes vues.

## Patrons et liens avec les vues

Un patron valable contient chaque face exactement une fois, joint les faces par des arêtes de même longueur et se replie sans chevauchement. Un pavé droit possède trois paires de faces rectangulaires superposables. Un prisme triangulaire possède deux triangles superposables et trois rectangles. Les vues aident à déterminer les dimensions des faces ; le patron montre quelles arêtes se rejoignent après pliage.

## Approfondissement uniquement : aire totale d'un cylindre

L'**aire totale d'un cylindre fermé relève de l'approfondissement dans cette leçon** et non des exigences centrales sur les volumes. Son patron contient deux disques et un rectangle de dimensions $h$ et $2\pi r$, d'où

$$S=2\pi r^2+2\pi rh.$$

Pour un cylindre ouvert, il faut retirer le disque absent. Identifier les faces réellement présentes est plus sûr qu'appliquer aveuglément une formule mémorisée.

## Formulation des problèmes de carrelage

L'aire seule ne fournit qu'une borne inférieure dans un véritable problème de carrelage. Si chaque carreau a une aire de $0{,}25\text{ m}^2$ et si un sol mesure $16{,}8\text{ m}^2$, le quotient des aires vaut $67{,}2$ ; il faut donc au moins $68$ carreaux. Il s'agit d'une **estimation par les aires**, et non d'une affirmation exacte sur la disposition : le nombre réel peut être supérieur et dépend des dimensions des carreaux, de la forme de la pièce, des découpes, des joints, de la casse et de la réutilisation des chutes. Dire « sans aucune perte » tout en arrondissant un quotient non entier par excès est ambigu et doit être évité.
