---
id: 3e-thales-theorem
locale: fr
title: Théorème de Thalès et sa réciproque
strand: Géométrie
summary: Utiliser la proportionnalité des longueurs pour calculer des mesures manquantes et démontrer que des droites sont parallèles.
objectives:
  - Reconnaître les configurations directe et croisée de Thalès
  - Calculer une longueur manquante avec le théorème de Thalès
  - Démontrer un parallélisme avec la réciproque du théorème de Thalès
prerequisites:
  - Rapports et produits en croix
  - Alignement et droites parallèles
vocabulary:
  - en: Thales' theorem
    definition: Des droites parallèles coupant deux sécantes déterminent des longueurs correspondantes proportionnelles.
  - en: converse
    definition: Énoncé obtenu en échangeant l'hypothèse et la conclusion d'un théorème.
  - en: corresponding lengths
    definition: Longueurs qui occupent des positions homologues dans deux configurations semblables.
  - en: secant
    definition: Droite qui coupe deux ou plusieurs autres droites.
flashcards:
  - front: Que faut-il vérifier avant d'appliquer le théorème de Thalès ?
    back: Les alignements des points et le parallélisme des deux droites.
  - front: Que permet de démontrer la réciproque du théorème de Thalès ?
    back: Elle démontre que deux droites sont parallèles lorsque les points sont alignés dans le même ordre et que les rapports correspondants sont égaux.
  - front: Pourquoi faut-il écrire les longueurs correspondantes dans le même ordre ?
    back: Associer une longueur totale à un segment non homologue conduit à une proportion fausse.
exercises:
  - id: 3e-thales-t1
    tierTitle: Application directe
    prompt: "Dans le triangle $ABC$, $M$ appartient à $[AB]$, $N$ appartient à $[AC]$ et $(MN)\\parallel(BC)$. On donne $AM=4$ cm, $AB=10$ cm et $AN=6$ cm. Calculer $AC$."
    solution: "Le théorème de Thalès donne $AM/AB=AN/AC$. Ainsi, $4/10=6/AC$, donc $AC=6\\times10/4=15$ cm."
    hints:
      - "Écrire $AM/AB=AN/AC$ avant de remplacer par les valeurs."
  - id: 3e-thales-t2
    tierTitle: Niveau Brevet
    prompt: "Dans le triangle $ABC$, $M\\in[AB]$, $N\\in[AC]$ et $(MN)\\parallel(BC)$. On donne $AM=4,5$ cm, $AB=7,5$ cm, $AN=6$ cm et $BC=8$ cm. Calculer $AC$ et $MN$."
    solution: "Les hypothèses permettent d'appliquer le théorème de Thalès : $AM/AB=AN/AC=MN/BC$. Le coefficient de réduction vaut $4,5/7,5=0,6$. Ainsi, $6/AC=0,6$, donc $AC=10$ cm, et $MN/8=0,6$, donc $MN=4,8$ cm."
    hints:
      - "Déterminer le coefficient de réduction du triangle $ABC$ au triangle $AMN$."
      - "Utiliser ce même coefficient une fois pour $AC$, puis une fois pour $MN$."
    expected: "AC = 10 cm, MN = 4,8 cm"
    accepted:
      - "10 cm et 4,8 cm"
      - "10 ; 4,8"
  - id: 3e-thales-t3
    tierTitle: Synthèse
    prompt: "Dans le triangle $ABC$, les points $D\\in[AB]$ et $E\\in[AC]$ vérifient $AD=6$ cm, $AB=10$ cm, $AE=7,5$ cm et $AC=12,5$ cm. Démontrer que $(DE)\\parallel(BC)$. Si $DE=5,4$ cm, calculer ensuite $BC$."
    solution: "Les points sont alignés dans le même ordre. De plus, $AD/AB=6/10=0,6$ et $AE/AC=7,5/12,5=0,6$. D'après la réciproque du théorème de Thalès, $(DE)\\parallel(BC)$. Le théorème direct donne alors $DE/BC=0,6$, donc $BC=5,4/0,6=9$ cm."
    hints:
      - "Comparer exactement $AD/AB$ et $AE/AC$."
      - "Après avoir démontré le parallélisme, appliquer le théorème direct."
    rubric:
      - "Vérifie les alignements et calcule les deux rapports, égaux à $0,6$."
      - "Utilise la réciproque du théorème de Thalès pour démontrer le parallélisme."
      - "Utilise le théorème direct pour obtenir $BC=9$ cm."
  - id: 3e-thales-t4
    tierTitle: Défi avancé
    prompt: "Dans le triangle $ABC$, les points $M\\in[AB]$ et $N\\in[AC]$ vérifient $AM=MB/2$ et $AN=NC/2$. Les droites $BN$ et $CM$ se coupent en $P$. Démontrer que $(MN)\\parallel(BC)$. Identifier ensuite le rapport orienté de l'homothétie de centre $P$ qui envoie $B$ sur $N$ et $C$ sur $M$, puis en déduire $BP=3PN$ et $CP=3PM$. Enfin, démontrer que la droite $AP$ coupe $[MN]$ en son milieu."
    solution: "Comme $AM=MB/2$, on a $AB=3AM$, donc $AM/AB=1/3$ ; de même, $AN/AC=1/3$. La réciproque du théorème de Thalès donne $(MN)\\parallel(BC)$, puis $MN/BC=1/3$. Les points $B,P,N$ sont alignés avec $P$ entre $B$ et $N$, et de même $C,P,M$ avec $P$ entre $C$ et $M$. L'homothétie de centre $P$ qui envoie $B$ sur $N$ et $C$ sur $M$ a donc pour rapport orienté $-1/3$, et non $1/3$. Les rapports de longueurs sont ainsi $PN/PB=PM/PC=1/3$, d'où $BP=3PN$ et $CP=3PM$. Soit $D$ le milieu de $[BC]$ et $Q$ celui de $[MN]$. L'homothétie de centre $A$ et de rapport $1/3$ envoie $B,C,D$ sur $M,N,Q$, donc $A,D,Q$ sont alignés. Celle de centre $P$ et de rapport $-1/3$ envoie $B,C,D$ sur $N,M,Q$, donc $P,D,Q$ sont alignés. Les deux droites sont donc $(DQ)$ : $A,P,Q$ sont alignés et $AP$ passe par le milieu $Q$ de $[MN]$."
    hints:
      - "Transformer d'abord chaque condition en un rapport faisant intervenir le côté entier."
      - "Les points images sont sur les demi-droites opposées issues de $P$ ; le rapport de l'homothétie de centre $P$ est donc négatif."
      - "Suivre l'image du milieu de $[BC]$ par les deux homothéties."
    rubric:
      - "Établit $AM/AB=AN/AC=1/3$ et démontre que $MN\\parallel BC$."
      - "Identifie le rapport orienté $-1/3$ en $P$ et utilise sa valeur absolue pour démontrer les deux rapports de longueurs $3:1$."
      - "Introduit les milieux de $[BC]$ et $[MN]$ et suit leurs images par les deux homothéties."
      - "Conclut rigoureusement que $AP$ coupe $[MN]$ en son milieu."
---
# Théorème de Thalès et sa réciproque

## Le théorème : le parallélisme donne des rapports

Dans le triangle $ABC$, supposons que $M$ appartienne à la droite $(AB)$, que $N$ appartienne à la droite $(AC)$ et que $(MN)\parallel(BC)$. Le **théorème de Thalès** affirme alors que

$$\frac{AM}{AB}=\frac{AN}{AC}=\frac{MN}{BC}.$$

Le petit triangle $AMN$ est une copie à l'échelle du triangle $ABC$. Le rapport commun est son coefficient d'échelle. Le même énoncé s'applique lorsque $M$ et $B$, ou $N$ et $C$, sont situés de part et d'autre de $A$ : c'est la configuration croisée, dite « en papillon », à condition de respecter les alignements et les correspondances.

## Exemple résolu : calculer une longueur manquante

On donne $AM=3,6$ cm, $AB=6$ cm et $AC=8,5$ cm, avec $MN\parallel BC$. Puisque $A,M,B$ sont alignés et que $A,N,C$ sont alignés,

$$\frac{AM}{AB}=\frac{AN}{AC}.$$

Par conséquent,

$$AN=8,5\times\frac{3,6}{6}=5,1\text{ cm}.$$

Le résultat est inférieur à $AC$, ce qui est cohérent puisque le coefficient $0,6$ est inférieur à $1$.

## La réciproque : les rapports donnent le parallélisme

Supposons que $A,M,B$ et $A,N,C$ soient alignés **dans le même ordre**. Si

$$\frac{AM}{AB}=\frac{AN}{AC},$$

alors la **réciproque du théorème de Thalès** permet de démontrer que $(MN)\parallel(BC)$.

Le théorème direct calcule des longueurs quand le parallélisme est connu. Sa réciproque démontre un parallélisme quand l'égalité des rapports est connue. Il faut donc repérer les données avant de choisir la méthode.

## Une méthode fiable

1. Énoncer les deux alignements et les droites parallèles, ou l'ordre identique des points pour la réciproque.
2. Écrire les rapports homologues avant de remplacer par les nombres.
3. Effectuer le produit en croix et conserver les unités.
4. Vérifier que l'ordre de grandeur correspond bien à un agrandissement ou à une réduction.

## Erreurs fréquentes

- Écrire $AM/MB$ en face de $AN/AC$ : $MB$ n'est qu'un segment restant, tandis que $AC$ est un côté entier.
- Utiliser la réciproque sans vérifier l'ordre des points.
- Considérer que des droites qui semblent parallèles sur une figure le sont nécessairement.
- Arrondir les rapports intermédiaires alors que des fractions exactes sont disponibles.

## Prolongement : les homothéties derrière le théorème

La transformation de centre $A$ qui envoie $B$ sur $M$ envoie aussi $C$ sur $N$. C'est une homothétie de rapport $AM/AB$. Une homothétie transforme une droite ne passant pas par son centre en une droite parallèle ; cela explique à la fois le parallélisme et l'égalité des trois rapports.
