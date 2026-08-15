---
id: 3e-arithmetic-primes
locale: fr
title: Facteurs premiers et algorithme d'Euclide
strand: Arithmétique
summary: Utiliser la décomposition en facteurs premiers et l'algorithme d'Euclide pour calculer des PGCD et rendre des fractions irréductibles.
objectives:
  - Reconnaître les nombres premiers et décomposer en facteurs premiers
  - Calculer un plus grand diviseur commun par une méthode adaptée
  - Rendre une fraction irréductible
  - Expliquer et appliquer l'algorithme d'Euclide
prerequisites:
  - Tables de multiplication et critères de divisibilité
  - Division euclidienne
  - Fractions égales
vocabulary:
  - en: prime number
    definition: Entier naturel supérieur à 1 qui possède exactement deux diviseurs positifs, 1 et lui-même.
  - en: prime factorization
    definition: Écriture d'un entier positif sous la forme d'un produit de nombres premiers.
  - en: greatest common divisor
    definition: Plus grand entier positif qui divise chacun de deux entiers.
  - en: irreducible fraction
    definition: Fraction dont le numérateur et le dénominateur ont pour PGCD 1.
flashcards:
  - front: Le nombre 1 est-il premier ?
    back: Non. Un nombre premier possède exactement deux diviseurs positifs ; 1 n'en possède qu'un.
  - front: Comment les décompositions en facteurs premiers permettent-elles d'obtenir un PGCD ?
    back: On conserve chaque facteur premier commun avec le plus petit exposant présent dans les deux décompositions.
  - front: Énoncer une étape de l'algorithme d'Euclide.
    back: Remplacer le couple (a,b), avec a supérieur à b, par (b,r), où r est le reste de la division de a par b.
  - front: Quand une fraction est-elle irréductible ?
    back: Lorsque le PGCD de son numérateur et de son dénominateur vaut 1.
exercises:
  - id: 3e-primes-t1
    tierTitle: Application directe
    prompt: Décomposer $756$ en produit de facteurs premiers.
    solution: $756=2\times378=2^2\times189=2^2\times3\times63=2^2\times3^3\times7$.
    hints:
      - Diviser successivement par le plus petit nombre premier possible.
    expected: 2^2 * 3^3 * 7
    accepted:
      - 2² × 3³ × 7
      - 2^2x3^3x7
  - id: 3e-primes-t2
    tierTitle: Problème type brevet
    prompt: Une association dispose de $84$ badges rouges et de $126$ badges bleus. Elle veut constituer le plus grand nombre possible de lots identiques en utilisant tous les badges. Combien de lots peut-elle former et que contient chaque lot ?
    solution: Le nombre de lots doit diviser $84$ et $126$. Comme $84=2^2\times3\times7$ et $126=2\times3^2\times7$, leur PGCD est $2\times3\times7=42$. L'association peut former $42$ lots contenant chacun $84/42=2$ badges rouges et $126/42=3$ badges bleus.
    hints:
      - Le nombre de lots est un diviseur commun des deux quantités.
      - L'expression « le plus grand nombre possible » indique qu'il faut chercher le PGCD.
    expected: 42 lots ; 2 rouges et 3 bleus par lot
    accepted:
      - 42, 2 rouges, 3 bleus
      - 42 lots de 2 rouges et 3 bleus
  - id: 3e-primes-t3
    tierTitle: Synthèse
    prompt: Rendre $\frac{378}{630}$ irréductible à l'aide de l'algorithme d'Euclide, puis démontrer que la fraction obtenue est bien irréductible.
    solution: $630=378\times1+252$, $378=252\times1+126$ et $252=126\times2+0$. Ainsi, $\operatorname{PGCD}(378,630)=126$, donc $\frac{378}{630}=\frac{3}{5}$. Comme $3$ et $5$ sont deux nombres premiers distincts, leur seul diviseur positif commun est $1$ ; la fraction $\frac35$ est donc irréductible.
    hints:
      - Continuer en divisant le diviseur précédent par le reste précédent.
      - Le dernier reste non nul est le PGCD.
    rubric:
      - Effectue des divisions euclidiennes valides et obtient le PGCD $126$.
      - Divise le numérateur et le dénominateur par $126$ pour obtenir $\frac35$.
      - Justifie que $3$ et $5$ sont premiers entre eux au lieu d'affirmer seulement que le calcul est terminé.
  - id: 3e-primes-t4
    tierTitle: Défi avancé
    prompt: Pour un entier $n\ge2$, on pose $A=n(n+1)$ et $B=(n+1)(n+2)$. Déterminer $\operatorname{PGCD}(A,B)$ pour tout $n$, en distinguant les cas nécessaires. En déduire l'écriture irréductible de $\frac AB$ et démontrer que la classification est complète.
    solution: Les deux nombres contiennent le facteur $n+1$, donc $\operatorname{PGCD}(A,B)=(n+1)\operatorname{PGCD}(n,n+2)$. D'après l'algorithme d'Euclide, $\operatorname{PGCD}(n,n+2)=\operatorname{PGCD}(n,2)$. Si $n$ est impair, ce PGCD vaut $1$ ; ainsi, $\operatorname{PGCD}(A,B)=n+1$ et $\frac AB=\frac{n}{n+2}$ est irréductible. Si $n$ est pair, ce PGCD vaut $2$ ; ainsi, $\operatorname{PGCD}(A,B)=2(n+1)$ et $\frac AB=\frac{n/2}{(n+2)/2}$. Les deux nouveaux entiers consécutifs $n/2$ et $n/2+1$ sont premiers entre eux, donc cette fraction est irréductible. Tout entier étant pair ou impair, les deux cas sont exhaustifs.
    hints:
      - Commencer par extraire le facteur commun $n+1$ du PGCD.
      - Utiliser $\operatorname{PGCD}(n,n+2)=\operatorname{PGCD}(n,2)$, puis distinguer les cas selon la parité de $n$.
    rubric:
      - Ramène le calcul à $(n+1)\operatorname{PGCD}(n,2)$ par un argument valide sur le PGCD.
      - Traite séparément les entiers $n$ pairs et impairs et obtient les deux formules correctes.
      - Donne la fraction irréductible dans chaque cas et démontre son irréductibilité.
      - Explique pourquoi la parité rend la classification exhaustive.
---
## Les nombres premiers : briques élémentaires

Un **nombre premier** est un entier naturel supérieur à $1$ qui possède exactement deux diviseurs positifs : $1$ et lui-même. Les premiers nombres premiers sont

$$2,3,5,7,11,13,17,19,23,29,\ldots$$

Le nombre $2$ est le seul nombre premier pair. Le nombre $1$ n'est pas premier, car il ne possède qu'un seul diviseur positif. Un entier supérieur à $1$ qui n'est pas premier est dit composé.

Pour déterminer si $n$ est premier, il suffit d'essayer les diviseurs premiers inférieurs ou égaux à $\sqrt n$. Par exemple, $97$ n'est divisible ni par $2$, ni par $3$, ni par $5$, ni par $7$, et le nombre premier suivant dépasse $\sqrt{97}$. Ainsi, $97$ est premier.

## Décomposition unique en facteurs premiers

Tout entier supérieur à $1$ s'écrit comme un produit de nombres premiers, de manière unique à l'ordre des facteurs près. On divise par le plus petit nombre premier possible jusqu'à obtenir un quotient égal à $1$ :

$$360=2\times180=2^2\times90=2^3\times45=2^3\times3^2\times5.$$

Un arbre de facteurs conduit au même résultat. On vérifie une décomposition en multipliant les facteurs obtenus.

**Erreur fréquente :** s'arrêter à $360=4\times90$ ne donne pas une décomposition en facteurs premiers, car $4$ et $90$ sont composés. Tous les facteurs finaux doivent être premiers.

## PGCD à partir des facteurs premiers

Le plus grand diviseur commun de $a$ et de $b$, noté $\operatorname{PGCD}(a,b)$, contient exactement les facteurs premiers communs aux deux nombres, chacun avec le plus petit des deux exposants.

Par exemple,

$$540=2^2\times3^3\times5,\qquad 756=2^2\times3^3\times7,$$

donc

$$\operatorname{PGCD}(540,756)=2^2\times3^3=108.$$

Cette méthode est claire lorsque les deux décompositions sont faciles. Énumérer tous les diviseurs n'est pratique que pour de petits nombres et expose à des oublis.

## L'algorithme d'Euclide

Pour de plus grands nombres, des divisions euclidiennes successives sont souvent plus rapides. La propriété essentielle est

$$\operatorname{PGCD}(a,b)=\operatorname{PGCD}(b,r)\quad\text{si }a=bq+r.$$

En effet, un nombre divise à la fois $a$ et $b$ si et seulement s'il divise à la fois $b$ et $a-bq=r$. Remplacer $(a,b)$ par $(b,r)$ ne modifie donc pas les diviseurs communs.

Exemple rédigé :

$$882=630\times1+252,$$

$$630=252\times2+126,$$

$$252=126\times2+0.$$

Le dernier reste non nul est $126$, donc $\operatorname{PGCD}(882,630)=126$.

**Erreur fréquente :** le PGCD n'est pas le reste final $0$, mais le dernier reste non nul.

## Fractions irréductibles

Une fraction $\frac ab$, avec $b\ne0$, est irréductible si et seulement si $\operatorname{PGCD}(a,b)=1$. Pour la rendre irréductible, on divise ses deux termes par leur PGCD :

$$\frac{882}{630}=\frac{882\div126}{630\div126}=\frac75.$$

On ne simplifie que des **facteurs**, jamais des termes reliés par une addition. Par exemple, dans $\frac{6+3}{6}$, on ne peut pas barrer les deux $6$ ; cette fraction vaut $\frac96=\frac32$.

## Choisir une méthode

- Utiliser les critères de divisibilité et un arbre de facteurs lorsqu'une décomposition en facteurs premiers est demandée.
- Utiliser les facteurs premiers communs lorsque les décompositions sont déjà connues.
- Utiliser l'algorithme d'Euclide pour calculer le PGCD de deux grands entiers.
- Dans un problème de partage, vérifier le sens du PGCD dans le contexte : le nombre de groupes doit diviser toutes les quantités disponibles.

## Prolongement : il existe une infinité de nombres premiers

Supposons qu'il n'existe qu'un nombre fini de nombres premiers $p_1,\ldots,p_k$. Le nombre $N=p_1p_2\cdots p_k+1$ a pour reste $1$ dans la division par chacun des nombres premiers de la liste. Pourtant, $N>1$ possède un diviseur premier. Ce diviseur ne figure pas dans la liste supposée complète, ce qui est contradictoire. Il existe donc une infinité de nombres premiers.
