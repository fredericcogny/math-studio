---
id: 4e-pythagorean-theorem
locale: fr
title: Le théorème de Pythagore
strand: Géométrie
summary: Énoncer et appliquer le théorème de Pythagore pour calculer des longueurs dans un triangle rectangle, et utiliser sa réciproque pour tester si un triangle possède un angle droit.
objectives:
  - Énoncer le théorème de Pythagore et identifier l'hypoténuse
  - Calculer l'hypoténuse ou un côté de l'angle droit d'un triangle rectangle
  - Appliquer la réciproque pour déterminer si un triangle est rectangle
prerequisites:
  - Carré d'un nombre et racine carrée
  - Propriétés des triangles
vocabulary:
  - en: hypotenuse
    definition: Le plus long côté d'un triangle rectangle, opposé à l'angle droit.
  - en: right triangle
    definition: Triangle possédant un angle mesurant exactement $90°$.
  - en: Pythagorean theorem
    definition: Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.
flashcards:
  - front: Énoncer le théorème de Pythagore pour un triangle rectangle de côtés $a$, $b$ et d'hypoténuse $c$.
    back: $a^2 + b^2 = c^2$.
  - front: Un triangle rectangle a pour côtés de l'angle droit $6$ cm et $8$ cm. Quelle est l'hypoténuse ?
    back: $c = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$ cm.
  - front: Comment utilise-t-on la réciproque du théorème de Pythagore ?
    back: Si le carré du plus long côté est égal à la somme des carrés des deux autres côtés, alors le triangle est rectangle.
exercises:
  - id: 4e-pyth-t1
    tierTitle: Application directe
    prompt: Un triangle rectangle a pour côtés de l'angle droit $5$ cm et $12$ cm. Calculer la longueur de l'hypoténuse.
    solution: $c = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$ cm.
    hints:
      - Utiliser la formule $c = \sqrt{a^2 + b^2}$ où $a$ et $b$ sont les côtés de l'angle droit.
  - id: 4e-pyth-t2
    tierTitle: Entraînement standard
    prompt: Une échelle de $10$ m de long est appuyée contre un mur. Le pied de l'échelle est à $6$ m du mur. À quelle hauteur l'échelle atteint-elle le mur ?
    solution: "Soit $h$ la hauteur. D'après le théorème de Pythagore : $h^2 + 6^2 = 10^2$, donc $h^2 = 100 - 36 = 64$, d'où $h = 8$ m."
    hints:
      - L'échelle est l'hypoténuse. La distance au mur et la hauteur sont les deux côtés de l'angle droit.
      - Réarranger $a^2 + b^2 = c^2$ pour trouver $a^2 = c^2 - b^2$.
  - id: 4e-pyth-t3
    tierTitle: Synthèse du programme officiel
    prompt: Un triangle a pour côtés $7$ cm, $24$ cm et $25$ cm. Déterminer s'il est rectangle. Puis calculer son aire.
    solution: >-
      Le plus long côté mesure $25$ cm. Vérification : $7^2 + 24^2 = 49 + 576 = 625 = 25^2$. L'égalité est vérifiée, donc par la réciproque du théorème de Pythagore, le triangle est rectangle en le sommet opposé au côté de $25$ cm. Les deux côtés de l'angle droit mesurent $7$ et $24$ cm, donc l'aire vaut $\frac{1}{2} \times 7 \times 24 = 84$ cm$^2$.
    hints:
      - Pour tester l'angle droit, comparer le carré du plus long côté avec la somme des carrés des deux autres.
      - Si le triangle est rectangle, les deux côtés les plus courts sont la base et la hauteur pour le calcul de l'aire.
    rubric:
      - Applique correctement la réciproque du théorème de Pythagore en comparant $7^2 + 24^2$ à $25^2$.
      - Conclut que le triangle est rectangle et identifie l'angle droit.
      - Calcule l'aire en utilisant les deux côtés de l'angle droit comme base et hauteur.
  - id: 4e-pyth-t4
    tierTitle: Défi avancé
    prompt: >-
      Démontrer que si $m > 1$ est un entier impair, alors $\left(m ;\; \frac{m^2-1}{2} ;\; \frac{m^2+1}{2}\right)$ est un triplet pythagoricien. Utiliser ce résultat pour trouver un triplet pythagoricien contenant $11$.
    solution: >-
      Calculer $m^2 + \left(\frac{m^2-1}{2}\right)^2 = m^2 + \frac{m^4 - 2m^2 + 1}{4} = \frac{m^4 + 2m^2 + 1}{4} = \left(\frac{m^2+1}{2}\right)^2$. Pour $m = 11$ : $\frac{121-1}{2} = 60$ et $\frac{121+1}{2} = 61$. Le triplet est $(11 ; 60 ; 61)$. Vérification : $121 + 3600 = 3721 = 61^2$.
    hints:
      - Développer $\left(\frac{m^2-1}{2}\right)^2$ et $\left(\frac{m^2+1}{2}\right)^2$ et comparer.
      - Remplacer $m$ par $11$ pour obtenir le triplet demandé.
    rubric:
      - Vérifie algébriquement que $m^2 + \left(\frac{m^2-1}{2}\right)^2 = \left(\frac{m^2+1}{2}\right)^2$.
      - Applique correctement la formule avec $m = 11$ pour produire le triplet $(11 ; 60 ; 61)$.
      - Vérifie que le triplet satisfait $a^2 + b^2 = c^2$.
---
## Le théorème

Dans un **triangle rectangle**, le côté opposé à l'angle droit s'appelle l'**hypoténuse**. C'est toujours le plus long côté. Les deux autres côtés sont les **côtés de l'angle droit**.

**Théorème de Pythagore.** Si un triangle est rectangle, alors le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés :

$$a^2 + b^2 = c^2$$

où $c$ est l'hypoténuse et $a$, $b$ sont les côtés de l'angle droit.

## Calculer l'hypoténuse

Lorsque les deux côtés de l'angle droit sont connus, l'hypoténuse vaut :

$$c = \sqrt{a^2 + b^2}$$

**Exemple.** Côtés de l'angle droit $3$ cm et $4$ cm : $c = \sqrt{9 + 16} = \sqrt{25} = 5$ cm.

## Calculer un côté de l'angle droit

Lorsque l'hypoténuse et un côté de l'angle droit sont connus, on réarrange :

$$a = \sqrt{c^2 - b^2}$$

**Exemple.** Hypoténuse $13$ cm, un côté $5$ cm : $a = \sqrt{169 - 25} = \sqrt{144} = 12$ cm.

> Toujours vérifier quel côté est l'hypoténuse avant de commencer. L'hypoténuse est opposée à l'angle droit et c'est le plus long côté.

## La réciproque

**Réciproque du théorème de Pythagore.** Si un triangle a pour côtés $a$, $b$, $c$ avec $c$ le plus long, et si $a^2 + b^2 = c^2$, alors le triangle est rectangle en le sommet opposé à $c$.

Cela permet de **tester** si un triangle est rectangle sans mesurer l'angle.

**Exemple.** Côtés $9$, $40$, $41$. Vérification : $81 + 1600 = 1681 = 41^2$. Oui, c'est un triangle rectangle.

**Exemple.** Côtés $5$, $7$, $9$. Vérification : $25 + 49 = 74 \neq 81 = 9^2$. Ce n'est pas un triangle rectangle.

## Triplets pythagoriciens

Un **triplet pythagoricien** est un ensemble de trois entiers positifs $(a ; b ; c)$ vérifiant $a^2 + b^2 = c^2$. Les triplets les plus courants sont :

- $(3 ; 4 ; 5)$ et ses multiples $(6 ; 8 ; 10)$, $(9 ; 12 ; 15)$, ...
- $(5 ; 12 ; 13)$
- $(8 ; 15 ; 17)$
- $(7 ; 24 ; 25)$

Reconnaître ces triplets fait gagner du temps et évite les erreurs d'arrondi.

### Pour aller plus loin

Un triangle rectangle peut-il avoir ses trois côtés de longueur entière et ses deux côtés de l'angle droit égaux ? Que dit le théorème de Pythagore au sujet de $a^2 + a^2 = c^2$ ?
