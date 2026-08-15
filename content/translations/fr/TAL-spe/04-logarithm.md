---
id: "tal-logarithm"
locale: "fr"
title: "La fonction logarithme népérien"
strand: "Analyse et fonctions"
summary: "Fonction réciproque de l'exponentielle, propriétés algébriques ln(ab) = ln(a) + ln(b), dérivée et limites."
objectives:
  - "Utiliser la fonction ln comme réciproque de exp : ln(e^x) = x"
  - "Transformer des produits en sommes grâce à la propriété fondamentale"
  - "Résoudre des équations et inéquations comportant des logarithmes et des exponentielles"
prerequisites:
  - "Fonction exponentielle et dérivation"
vocabulary:
  - en: "Natural logarithm"
    definition: "Fonction réciproque de l'exponentielle, définie sur $]0,+\\infty[$ et notée $\\ln(x)$."
  - en: "Euler's number e"
    definition: "L'unique nombre réel tel que $\\ln(e)=1$ ; $e\\approx2{,}71828$."
flashcards:
  - front: "Quelle est la propriété algébrique fondamentale de ln(a * b) pour a > 0 et b > 0 ?"
    back: "ln(a * b) = ln(a) + ln(b)"
  - front: "Quelle est la dérivée de f(x) = ln(x) sur ]0, +infini[ ?"
    back: "f'(x) = 1 / x"
exercises:
  - id: "tal-log-t1"
    tierTitle: "Application directe"
    prompt: "Simplifier $\\ln(e^4\\sqrt{e})$."
    solution: "Comme $e^4\\sqrt{e}=e^{4+1/2}=e^{9/2}$, on a $\\ln(e^4\\sqrt{e})=\\frac{9}{2}$."
    hints:
      - "Écrire $\\sqrt{e}$ comme une puissance de $e$."
    expected: "9/2"
    accepted:
      - "4,5"
  - id: "tal-log-t2"
    tierTitle: "Entraînement standard"
    prompt: "En respectant l'ensemble de définition du logarithme, résoudre $\\ln(x-1)+\\ln(x+1)=\\ln 8$. Quelle est la solution ?"
    solution: "Les deux logarithmes sont définis lorsque $x-1>0$ et $x+1>0$ ; l'ensemble de définition est donc $x>1$. Sur cet ensemble, la propriété du produit donne $\\ln((x-1)(x+1))=\\ln 8$, d'où $x^2-1=8$. Les solutions candidates sont $x=\\pm3$, mais seul $x=3$ appartient à l'ensemble de définition."
    hints:
      - "Commencer par imposer la positivité des deux arguments des logarithmes."
      - "Utiliser ensuite $\\ln a+\\ln b=\\ln(ab)$."
  - id: "tal-log-t3"
    tierTitle: "Synthèse"
    prompt: "Démontrer l'inégalité globale $\\ln x\\leq x-1$ pour tout $x>0$ et déterminer le cas d'égalité."
    solution: "Posons $f(x)=x-1-\\ln x$ sur $]0,+\\infty[$. Alors $f'(x)=1-1/x=(x-1)/x$. Ainsi, $f$ est décroissante sur $]0,1]$ et croissante sur $[1,+\\infty[$ ; son minimum global est donc $f(1)=0$. Par conséquent, $\\ln x\\leq x-1$ pour tout $x>0$, avec égalité uniquement pour $x=1$."
    hints:
      - "Regrouper tous les termes dans un même membre et étudier une fonction sur $]0,+\\infty[$."
      - "Déterminer son minimum global à l'aide de sa dérivée."
    rubric:
      - "Définit une fonction différence appropriée sur le bon ensemble de définition."
      - "Calcule correctement la dérivée et exploite son signe."
      - "Conclut à l'inégalité globale et à l'unique cas d'égalité $x=1$."
  - id: "tal-log-t4"
    tierTitle: "Défi avancé"
    prompt: "Pour un paramètre réel $a$, déterminer, en fonction de $a$, le nombre et la localisation des solutions positives de $\\ln x=ax$. Puis, pour $0<a<1/e$, soit $v(a)>e$ la plus grande solution. Démontrer que $v(a)\\to+\\infty$ et que $\\frac{a v(a)}{\\ln(1/a)}\\to1$ lorsque $a\\to0^+$."
    solution: "Pour $x>0$, écrivons l'équation sous la forme $g(x)=a$, avec $g(x)=\\ln(x)/x$. Comme $g'(x)=(1-\\ln x)/x^2$, la fonction $g$ est croissante sur $]0,e]$ et décroissante sur $[e,+\\infty[$ ; ses limites sont $-\\infty$ en $0^+$ et $0^+$ en $+\\infty$, et $g(1)=0$, $g(e)=1/e$. Il y a donc une solution dans $]0,1[$ si $a<0$ ; la solution $1$ si $a=0$ ; deux solutions, l'une dans $]1,e[$ et l'autre dans $]e,+\\infty[$, si $0<a<1/e$ ; la solution $e$ si $a=1/e$ ; aucune solution si $a>1/e$. Pour la plus grande solution, l'égalité $g(v(a))=a\\to0^+$ sur la branche décroissante impose $v(a)\\to+\\infty$. Posons $L=\\ln(1/a)$ et $y=a v(a)$. L'équation devient $y=L+\\ln y$. Pour $L$ assez grand, la fonction croissante $y-\\ln y$ sur $]1,+\\infty[$ prend une valeur inférieure à $L$ en $y=L$ et supérieure à $L$ en $y=2L$ ; ainsi, $L<y<2L$. Par conséquent, $0\\leq\\ln y/L\\leq\\ln(2L)/L\\to0$, puis $y/L=1+\\ln y/L\\to1$."
    hints:
      - "Réécrire l'équation sous la forme $\\frac{\\ln x}{x}=a$."
      - "Étudier les variations et les limites aux bornes de ce quotient."
      - "Pour la partie asymptotique, poser $L=\\ln(1/a)$ et $y=av(a)$, puis encadrer $y$ entre $L$ et $2L$."
    rubric:
      - "Introduit $g(x)=\\ln(x)/x$ sur $]0,+\\infty[$ et calcule correctement $g'$."
      - "Établit le maximum $g(e)=1/e$ ainsi que toutes les limites et tous les signes pertinents."
      - "Présente les cinq cas du paramètre avec le nombre et la position corrects des solutions."
      - "Démontre que la plus grande solution tend vers l'infini et obtient $y=L+\\ln y$ avec $L<y<2L$."
      - "Conclut rigoureusement que $av(a)/\\ln(1/a)\\to1$."
---

# La fonction logarithme népérien

Le **logarithme népérien**, noté $\ln$, est la fonction réciproque de la fonction exponentielle.

## 1. Définition et courbe

Pour tout réel $x > 0$ et tout réel $y$ :

$$y = \ln(x) \iff x = e^y$$

* **Ensemble de définition** : $]0, +\infty[$
* **Valeurs particulières** : $\ln(1) = 0$ et $\ln(e) = 1$
* **Variations** : $\ln$ est strictement croissante et continue sur $]0, +\infty[$

## 2. Propriétés algébriques

Pour tous réels $a > 0$ et $b > 0$ et tout $n \in \mathbb{Z}$ :

$$\ln(a \times b) = \ln(a) + \ln(b)$$
$$\ln\left(\frac{a}{b}\right) = \ln(a) - \ln(b)$$
$$\ln(a^n) = n \ln(a)$$
$$\ln\left(\frac{1}{a}\right) = -\ln(a)$$

## 3. Dérivation et limites

$$\left(\ln(x)\right)' = \frac{1}{x} \quad (x > 0)$$

Limites aux bornes et croissances comparées :
* $\lim_{x \to 0^+} \ln(x) = -\infty$ et $\lim_{x \to +\infty} \ln(x) = +\infty$
* $\lim_{x \to +\infty} \frac{\ln(x)}{x^n} = 0 \quad (n \ge 1)$
