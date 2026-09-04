---
id: 2de-roots-powers
locale: fr
title: Calcul exact avec les racines carrées et les puissances
strand: Nombres et calculs
summary: Garder des résultats exacts en simplifiant les racines carrées, en supprimant les racines des dénominateurs et en appliquant les règles sur les puissances.
objectives:
  - Simplifier une racine carrée en extrayant les carrés parfaits
  - Supprimer une racine carrée d'un dénominateur à l'aide de l'expression conjuguée
  - Appliquer les règles sur les puissances entières et la notation scientifique
prerequisites:
  - Carrés et cubes des entiers
  - Calcul fractionnaire
vocabulary:
  - en: square root
    definition: Unique nombre positif ou nul dont le carré est égal au nombre positif donné.
  - en: conjugate
    definition: Expression obtenue en changeant le signe entre deux termes, utilisée pour supprimer une racine carrée d'un dénominateur.
  - en: scientific notation
    definition: Écriture de la forme a fois dix puissance n, où la valeur absolue de a est supérieure ou égale à un et strictement inférieure à dix.
flashcards:
  - front: Quelles sont les deux règles de produit pour les racines carrées ?
    back: $\sqrt{ab}=\sqrt{a}\sqrt{b}$ et $\sqrt{\dfrac{a}{b}}=\dfrac{\sqrt{a}}{\sqrt{b}}$, pour $a\geqslant 0$ et $b>0$. Il n'existe aucune règle analogue pour une somme.
  - front: Pourquoi $\sqrt{a+b}$ est-il différent de $\sqrt{a}+\sqrt{b}$ ?
    back: En élevant la seconde au carré on obtient $a+b+2\sqrt{ab}$, donc les deux coïncident seulement si $ab=0$. Tester $a=b=9$ pour voir l'écart.
  - front: Que signifie un exposant négatif ?
    back: $a^{-n}=\dfrac{1}{a^{n}}$ pour $a\neq 0$. C'est un inverse, jamais un résultat négatif.
  - front: Comment supprimer la racine de $\dfrac{1}{3+\sqrt{2}}$ ?
    back: Multiplier le numérateur et le dénominateur par l'expression conjuguée $3-\sqrt{2}$, car $(3+\sqrt{2})(3-\sqrt{2})=9-2=7$.
exercises:
  - id: 2de-roots-t1
    tierTitle: Application directe
    prompt: Écrire $\sqrt{72}$ sous la forme $a\sqrt{b}$ où $a$ et $b$ sont des entiers et $b$ est le plus petit possible.
    solution: $72=36\times 2$, donc $\sqrt{72}=\sqrt{36}\times\sqrt{2}=6\sqrt{2}$.
    hints:
      - Chercher le plus grand carré parfait qui divise 72.
  - id: 2de-roots-t2
    tierTitle: Entraînement standard
    prompt: Calculer la valeur exacte de $A=(\sqrt{3}-2)^{2}+4\sqrt{3}$.
    solution: Le développement donne $(\sqrt{3})^{2}-2\times 2\times\sqrt{3}+2^{2}=3-4\sqrt{3}+4=7-4\sqrt{3}$. En ajoutant $4\sqrt{3}$ la racine disparaît, donc $A=7$.
    hints:
      - Développer le carré avec l'identité de $(a-b)^{2}$.
      - Se rappeler que $(\sqrt{3})^{2}=3$ exactement.
  - id: 2de-roots-t3
    tierTitle: Synthèse du programme officiel
    prompt: Montrer que $(2+\sqrt{5})(2-\sqrt{5})$ est un entier, puis utiliser ce résultat pour écrire $\dfrac{1}{2+\sqrt{5}}$ sans racine carrée au dénominateur. Vérifier la réponse à la calculatrice.
    solution: >-
      Le produit est une différence de deux carrés, $(2+\sqrt{5})(2-\sqrt{5})=2^{2}-(\sqrt{5})^{2}=4-5=-1$, qui est un entier. En multipliant la fraction par l'expression conjuguée, on obtient $\dfrac{1}{2+\sqrt{5}}=\dfrac{2-\sqrt{5}}{(2+\sqrt{5})(2-\sqrt{5})}=\dfrac{2-\sqrt{5}}{-1}=\sqrt{5}-2$. La calculatrice donne $\sqrt{5}-2\approx 0{,}236$ et $\dfrac{1}{2+\sqrt{5}}\approx 0{,}236$, ce qui concorde.
    hints:
      - Reconnaître la forme $(a+b)(a-b)$.
      - Multiplier le numérateur et le dénominateur par l'expression conjuguée du dénominateur.
    rubric:
      - Utilise l'identité de la différence de deux carrés pour obtenir l'entier -1.
      - Multiplie par l'expression conjuguée et simplifie en une expression sans racine au dénominateur.
      - Confirme l'égalité numériquement.
  - id: 2de-roots-t4
    tierTitle: Défi avancé
    prompt: On admet que $\sqrt{6}$ est irrationnel. Démontrer que $\sqrt{2}+\sqrt{3}$ est irrationnel. Puis déterminer, avec démonstration, si $(\sqrt{2}+\sqrt{3})^{2}-(\sqrt{2}-\sqrt{3})^{2}$ est rationnel.
    solution: >-
      Posons $x=\sqrt{2}+\sqrt{3}$. Alors $x^{2}=2+2\sqrt{6}+3=5+2\sqrt{6}$, donc $\sqrt{6}=\dfrac{x^{2}-5}{2}$. Si $x$ était rationnel, alors $x^{2}-5$ serait rationnel et $\dfrac{x^{2}-5}{2}$ aussi, ce qui rendrait $\sqrt{6}$ rationnel. C'est contradictoire, donc $x$ est irrationnel. Pour la seconde partie, $(\sqrt{2}+\sqrt{3})^{2}=5+2\sqrt{6}$ et $(\sqrt{2}-\sqrt{3})^{2}=5-2\sqrt{6}$, donc la différence vaut $4\sqrt{6}$. Si $4\sqrt{6}$ était rationnel, en divisant par $4$ on rendrait $\sqrt{6}$ rationnel, donc cette différence est irrationnelle.
    hints:
      - Élever le nombre au carré et isoler la seule racine restante.
      - Les rationnels sont stables par les quatre opérations, ce qui fait fonctionner la contradiction.
    rubric:
      - Élève l'expression au carré correctement et isole la racine carrée de 6.
      - Mène un raisonnement par l'absurde en utilisant la stabilité des rationnels.
      - Calcule la différence des carrés comme quatre fois la racine carrée de 6 et démontre son irrationalité.
---
## Des racines carrées qui restent exactes

Pour $a\geqslant 0$, la racine carrée $\sqrt{a}$ est l'unique nombre positif ou nul dont le carré vaut $a$. Deux règles font passer les racines à travers les produits et les quotients :

$$\sqrt{ab}=\sqrt{a}\,\sqrt{b}\quad (a\geqslant 0 \;;\; b\geqslant 0),\qquad \sqrt{\frac{a}{b}}=\frac{\sqrt{a}}{\sqrt{b}}\quad (a\geqslant 0 \;;\; b>0).$$

Il n'existe **aucune** règle pour une somme. Avec $a=b=9$, on obtient $\sqrt{18}\approx 4{,}24$ alors que $\sqrt{9}+\sqrt{9}=6$.

Pour **simplifier** une racine, on extrait le plus grand carré parfait :

$$\sqrt{50}=\sqrt{25\times 2}=5\sqrt{2},\qquad \sqrt{147}=\sqrt{49\times 3}=7\sqrt{3}.$$

Les racines simplifiées s'additionnent alors comme des termes semblables : $\sqrt{50}+\sqrt{8}=5\sqrt{2}+2\sqrt{2}=7\sqrt{2}$.

## Supprimer une racine au dénominateur

L'identité $(a+b)(a-b)=a^{2}-b^{2}$ transforme une somme de racines en un nombre. L'expression $a-b$ est l'**expression conjuguée** de $a+b$.

$$\frac{1}{3+\sqrt{2}}=\frac{3-\sqrt{2}}{(3+\sqrt{2})(3-\sqrt{2})}=\frac{3-\sqrt{2}}{9-2}=\frac{3-\sqrt{2}}{7}$$

Une réponse exacte de ce type est préférable à un décimal arrondi, car arrondir trop tôt fait dériver les étapes suivantes.

## Les puissances d'exposant entier

Pour $a\neq 0$ et des entiers $m$ et $n$ :

$$a^{m}a^{n}=a^{m+n},\qquad \frac{a^{m}}{a^{n}}=a^{m-n},\qquad (a^{m})^{n}=a^{mn},\qquad a^{-n}=\frac{1}{a^{n}},\qquad a^{0}=1.$$

Un exposant négatif signale un inverse, pas un nombre négatif : $2^{-3}=\frac{1}{8}$.

La **notation scientifique** écrit un nombre sous la forme $a\times 10^{n}$ avec $1\leqslant |a|<10$. Elle rend les ordres de grandeur comparables :

$$0{,}00042=4{,}2\times 10^{-4},\qquad 3\,600\,000=3{,}6\times 10^{6}.$$

Multiplier en notation scientifique multiplie les facteurs de tête et additionne les exposants.

### Pour aller plus loin

Pour quels entiers $n$ le nombre $\sqrt{n}$ est-il entier ? Décrire l'ensemble complet et expliquer comment la décomposition en facteurs premiers tranche la question.
