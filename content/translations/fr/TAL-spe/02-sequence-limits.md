---
id: "tal-sequence-limits"
locale: "fr"
title: "Limites de suites et convergence"
strand: "Analyse et suites"
summary: "Comprendre la convergence des suites, les théorèmes de comparaison et le théorème des gendarmes."
objectives:
  - "Déterminer la limite d'une suite explicite ou définie par récurrence"
  - "Lever les formes indéterminées classiques (+infini - infini, 0*infini, infini/infini)"
  - "Utiliser le théorème de convergence des suites monotones"
prerequisites:
  - "Raisonnement par récurrence"
  - "Suites arithmétiques et géométriques"
vocabulary:
  - en: "Convergent sequence"
    definition: "Suite u_n qui admet une limite finie L lorsque n tend vers +infini."
  - en: "Squeeze theorem"
    definition: "Si v_n <= u_n <= w_n et lim v_n = lim w_n = L, alors lim u_n = L."
flashcards:
  - front: "Quelle est la limite de q^n lorsque n -> +infini selon les valeurs de q ?"
    back: "Si |q| < 1 : la limite vaut 0. Si q = 1 : la limite vaut 1. Si q > 1 : la limite vaut +infini. Si q <= -1 : il n'y a pas de limite."
  - front: "Que dit le théorème de convergence monotone pour une suite croissante et majorée ?"
    back: "Toute suite croissante et majorée est convergente."
exercises:
  - id: "tal-seq-t1"
    tierTitle: "Application directe"
    prompt: "Déterminer $\\lim_{n\\to+\\infty}5(0{,}8)^n$."
    solution: "Comme $|0{,}8|<1$, la suite géométrique $(0{,}8)^n$ tend vers $0$. La multiplication par $5$ ne modifie pas cette limite ; la réponse est donc $0$."
    hints:
      - "Rappeler la limite de $q^n$ lorsque $|q|<1$."
  - id: "tal-seq-t2"
    tierTitle: "Entraînement standard"
    prompt: "Déterminer $\\lim_{n\\to+\\infty}\\dfrac{3n^2-5n+1}{2n^2+7}$ en faisant apparaître les termes dominants."
    solution: "Divisons le numérateur et le dénominateur par $n^2$ : $u_n=(3-5/n+1/n^2)/(2+7/n^2)$. Comme $1/n$ et $1/n^2$ tendent vers $0$, le quotient tend vers $3/2$."
    hints:
      - "Diviser chaque terme par la plus grande puissance, $n^2$."
      - "Utiliser ensuite la règle du quotient pour des limites finies."
  - id: "tal-seq-t3"
    tierTitle: "Synthèse"
    prompt: "Soient $u_0=1$ et $u_{n+1}=\\sqrt{2+u_n}$. Démontrer que $(u_n)$ converge et déterminer sa limite."
    solution: "Par récurrence, $1\\le u_n<2$ : si $u_n<2$, alors $u_{n+1}<2$, et la positivité est immédiate. De plus, comme les deux membres sont positifs, $u_{n+1}\\ge u_n$ équivaut à $2+u_n\\ge u_n^2$, soit $(2-u_n)(u_n+1)\\ge0$, ce qui résulte de $u_n<2$. Ainsi, $(u_n)$ est croissante et majorée, donc elle converge. Si sa limite est $L$, la continuité donne $L=\\sqrt{2+L}$ ; comme $L\\ge0$, on obtient $L=2$."
    hints:
      - "Démontrer d'abord qu'un intervalle tel que $[1,2)$ est invariant."
      - "Comparer $u_{n+1}$ et $u_n$ en élevant au carré seulement après avoir remarqué qu'ils sont positifs."
      - "Démontrer la convergence avant de résoudre l'équation du point fixe."
    rubric:
      - "Établit un encadrement valide, en particulier $u_n<2$."
      - "Démontre la monotonie sans supposer la convergence."
      - "Applique le théorème de convergence monotone."
      - "Utilise la relation de récurrence et la continuité pour obtenir l'unique limite admissible $2$."
  - id: "tal-seq-t4"
    tierTitle: "Défi avancé"
    prompt: "La méthode de Newton appliquée à $x^2-2=0$ donne $u_0=2$ et $u_{n+1}=\\frac12(u_n+2/u_n)$. Démontrer que $u_n>\\sqrt2$, que $(u_n)$ décroît vers $\\sqrt2$ et que $r_n=\\dfrac{u_n-\\sqrt2}{u_n+\\sqrt2}$ vérifie $r_{n+1}=r_n^2$. En déduire une expression explicite de $r_n$ et expliquer pourquoi cela démontre la convergence quadratique."
    solution: "Pour $u_n>0$, $u_{n+1}-\\sqrt2=(u_n-\\sqrt2)^2/(2u_n)\\ge0$, avec ici une inégalité stricte ; tous les termes sont donc strictement supérieurs à $\\sqrt2$. De plus, $u_{n+1}-u_n=(2-u_n^2)/(2u_n)<0$ ; la suite est ainsi décroissante et minorée par $\\sqrt2$. Elle converge vers un réel $L>0$, et $L=(L+2/L)/2$ donne $L=\\sqrt2$. Un calcul direct fournit $u_{n+1}-\\sqrt2=(u_n-\\sqrt2)^2/(2u_n)$ et $u_{n+1}+\\sqrt2=(u_n+\\sqrt2)^2/(2u_n)$, donc $r_{n+1}=r_n^2$. Par conséquent, $r_n=r_0^{2^n}$, avec $r_0=(2-\\sqrt2)/(2+\\sqrt2)=3-2\\sqrt2$. Si $e_n=u_n-\\sqrt2$, alors $e_{n+1}/e_n^2=1/(2u_n)\\to1/(2\\sqrt2)$, qui est une limite finie non nulle. Il s'agit précisément d'une convergence quadratique."
    hints:
      - "Factoriser les numérateurs de $u_{n+1}-\\sqrt2$ et de $u_{n+1}-u_n$."
      - "Calculer l'expression correspondante pour $u_{n+1}+\\sqrt2$."
      - "Itérer la relation $r_{n+1}=r_n^2$."
    rubric:
      - "Démontre la minoration invariante $u_n>\\sqrt2$ et la décroissance."
      - "Justifie la convergence et identifie la limite comme $\\sqrt2$."
      - "Établit $r_{n+1}=r_n^2$ à l'aide d'un calcul algébrique correct."
      - "Obtient $r_n=(3-2\\sqrt2)^{2^n}$ et démontre la convergence quadratique à l'aide de $e_{n+1}/e_n^2\\to1/(2\\sqrt2)$."
---

# Limites de suites et convergence

L'étude du comportement asymptotique des suites numériques permet de modéliser le comportement à long terme d'un processus discret.

## 1. Convergence d'une suite

Une suite $(u_n)$ est **convergente** vers un réel $L$ si tout intervalle ouvert contenant $L$ contient tous les termes de la suite à partir d'un certain rang. On note :

$$\lim_{n \to +\infty} u_n = L$$

Si la suite ne converge pas vers une limite finie, elle est dite **divergente**.

## 2. Théorèmes de comparaison

* **Théorème des gendarmes** : si $v_n \le u_n \le w_n$ à partir d'un certain rang et si $\lim v_n = \lim w_n = L$, alors $\lim u_n = L$.
* **Théorèmes de minoration et de majoration** :
  * Si $u_n \ge v_n$ et $\lim v_n = +\infty$, alors $\lim u_n = +\infty$.
  * Si $u_n \le v_n$ et $\lim v_n = -\infty$, alors $\lim u_n = -\infty$.

## 3. Théorème de convergence monotone

Toute suite **croissante et majorée** est **convergente**.
Toute suite **décroissante et minorée** est **convergente**.
