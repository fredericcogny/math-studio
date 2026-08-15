---
id: 1re-quadratics
locale: fr
title: Lire un trinôme du second degré de trois façons
strand: Fonctions et algèbre
summary: Relier les formes développée, canonique et factorisée au lieu de les traiter comme des sujets distincts.
objectives:
  - Calculer la valeur d'un polynôme sans erreur
  - Choisir une forme adaptée
  - Relier les racines et la courbe représentative
prerequisites:
  - Développement algébrique
  - Notation des fonctions
vocabulary:
  - en: quadratic
    definition: Fonction polynôme de degré deux, écrite ax²+bx+c avec a non nul.
  - en: root
    definition: Valeur de la variable pour laquelle la fonction s'annule.
  - en: vertex
    definition: Point où une parabole change de sens de variation.
flashcards:
  - front: Que révèle immédiatement la forme développée ax²+bx+c ?
    back: Le coefficient dominant a et l'ordonnée à l'origine c.
  - front: Que révèle a(x-r₁)(x-r₂) ?
    back: Les racines r₁ et r₂, lorsque la factorisation existe dans l'ensemble de nombres choisi.
  - front: Que révèle a(x-α)²+β ?
    back: Le sommet (α, β) et la valeur minimale ou maximale β.
exercises:
  - id: 1re-quadratics-t1
    tierTitle: Application directe
    prompt: Pour $f(x)=(x-3)^2-4$, donner les coordonnées du sommet.
    solution: La fonction est sous la forme canonique $(x-\alpha)^2+\beta$ ; son sommet est donc $(3,-4)$.
    hints:
      - Comparer l'expression à $(x-\alpha)^2+\beta$.
    expected: "(3, -4)"
    accepted:
      - (3,-4)
      - sommet (3, -4)
  - id: 1re-quadratics-t2
    tierTitle: Entraînement standard
    prompt: La longueur d'un jardin rectangulaire dépasse sa largeur de $5$ m et son aire est de $84$ m$^2$. Déterminer ses dimensions.
    solution: Notons $x>0$ la largeur ; la longueur vaut alors $x+5$. La condition sur l'aire donne $x(x+5)=84$, soit $x^2+5x-84=0$. Comme $(x-7)(x+12)=0$, les solutions algébriques sont $7$ et $-12$ ; seule la valeur $7$ peut être une largeur. Les dimensions sont $7$ m sur $12$ m.
    hints:
      - Exprimer les deux dimensions à l'aide d'une seule inconnue.
      - Factoriser $x^2+5x-84$.
    expected: 7 m sur 12 m
    accepted:
      - largeur 7 m, longueur 12 m
      - 7, 12
  - id: 1re-quadratics-t3
    tierTitle: Synthèse
    prompt: Une fonction polynôme du second degré a pour racines $1$ et $5$, et sa courbe représentative passe par $(0,10)$. Déterminer la fonction sous ses formes factorisée, développée et canonique.
    solution: Les racines donnent $f(x)=a(x-1)(x-5)$. Comme $f(0)=5a=10$, on obtient $a=2$. La forme factorisée est donc $2(x-1)(x-5)$, la forme développée est $2x^2-12x+10$ et, en complétant le carré, la forme canonique est $2(x-3)^2-8$.
    hints:
      - Partir de $a(x-1)(x-5)$ et utiliser le point $(0,10)$.
      - L'axe de symétrie se trouve à mi-distance des deux racines.
    rubric:
      - Utilise les racines pour écrire $f(x)=a(x-1)(x-5)$.
      - Utilise $f(0)=10$ pour trouver $a=2$.
      - Donne les formes factorisée, développée et canonique correctes.
  - id: 1re-quadratics-t4
    tierTitle: Défi avancé
    prompt: Pour le paramètre réel $m$, déterminer le nombre de solutions réelles de $x^2-2mx+m+2=0$. Déterminer ensuite exactement les valeurs de $m$ pour lesquelles l'équation admet au moins une solution réelle et toutes ses solutions réelles sont strictement positives. Démontrer tous les cas limites.
    solution: Le discriminant est $\Delta=4m^2-4(m+2)=4(m-2)(m+1)$. Il existe deux racines réelles distinctes pour $m<-1$ ou $m>2$, une racine double pour $m=-1$ ou $m=2$, et aucune racine réelle pour $-1<m<2$. Lorsque les racines existent, leur somme vaut $2m$ et leur produit $m+2$. Pour $m>2$, la somme et le produit sont positifs, donc les deux racines sont positives ; pour $m=2$, la racine double vaut $2$ et est également positive. Pour $m<-1$, si $m<-2$, le produit est négatif, donc une racine est négative ; si $-2<m<-1$, le produit est positif mais la somme est négative, donc les deux racines sont négatives ; pour $m=-2$, une racine vaut $0$ ; enfin, pour $m=-1$, la racine double vaut $-1$. Par conséquent, toutes les solutions réelles sont strictement positives exactement lorsque $m\ge2$.
    hints:
      - Commencer par calculer le discriminant et le factoriser comme un produit en $m$.
      - Pour déterminer les signes de deux racines réelles, utiliser leur somme $2m$ et leur produit $m+2$.
      - Étudier séparément $m=-2,-1$ et $2$.
    rubric:
      - Détermine correctement l'existence de zéro, une ou deux racines réelles à l'aide de $\Delta=4(m-2)(m+1)$.
      - Utilise la somme et le produit des racines pour analyser leur positivité.
      - Vérifie tous les cas limites et conclut que $m\ge2$.
---
## Une fonction, trois points de vue

Pour une fonction polynôme du second degré, chaque forme algébrique répond efficacement à une question différente.

**Forme développée**

$$f(x)=ax^2+bx+c$$

indique le comportement dominant et donne immédiatement $f(0)=c$.

**Forme canonique**

$$f(x)=a(x-\alpha)^2+\beta$$

indique le sommet $(\alpha,\beta)$ et l'axe de symétrie $x=\alpha$.

**Forme factorisée**

$$f(x)=a(x-r_1)(x-r_2)$$

indique les racines $r_1$ et $r_2$.

## Une substitution exige des parenthèses

Pour $f(x)=2x^2-3x-4$, calculer $f(-2)$ en écrivant

$$f(-2)=2(-2)^2-3(-2)-4=8+6-4=10.$$

Les parenthèses évitent l'erreur fréquente $(-2)^2=-4$.

## Passer d'une représentation à une autre

En partant de $(x-2)(x+5)$, le développement donne $x^2+3x-10$. La forme factorisée fournit les racines ; la forme développée fournit l'ordonnée à l'origine. Toutes deux décrivent la même parabole.

> Avant de calculer, se demander quelle représentation fait apparaître l'information recherchée.

### Vers la CPGE

Cette habitude qui consiste à changer de représentation est fondamentale au-delà du lycée : forme algébrique, courbe, tableau de signes, dérivée et interprétation géométrique sont des points de vue complémentaires sur un même objet.
