---
id: "tal-sequence-limits"
order: 2
title: "Limites de Suites & Convergence"
level: "TAL-spe"
strand: "Analyse & Suites"
difficulty: "core"
estimatedMinutes: 35
summary: "Comprendre la convergence des suites, les théorèmes de comparaison et le théorème des Gendarmes."
objectives:
  - "Déterminer la limite d'une suite explicite ou récurrente"
  - "Lever les formes indéterminées classiques (+inf - inf, 0*inf, inf/inf)"
  - "Utiliser le théorème de convergence des suites monotones"
prerequisites:
  - "Raisonnement par récurrence"
  - "Suites arithmétiques et géométriques"
vocabulary:
  - en: "Convergent sequence"
    fr: "Suite convergente"
    definition: "Suite u_n qui admet une limite finie L lorsque n tend vers +infini."
  - en: "Squeeze theorem"
    fr: "Théorème des Gendarmes"
    definition: "Si v_n <= u_n <= w_n et lim v_n = lim w_n = L, alors lim u_n = L."
flashcards:
  - front: "Quelle est la limite de q^n quand n -> +infini selon les valeurs de q ?"
    back: "Si |q| < 1 : lim = 0. Si q = 1 : lim = 1. Si q > 1 : lim = +infini. Si q <= -1 : pas de limite."
  - front: "Que dit le théorème de la monotone pour une suite croissante majorette ?"
    back: "Toute suite croissante et majorée est convergente."
generator:
  type: "linear-equation"
  seed: 202
  count: 4
  coefficientMin: 1
  coefficientMax: 5
  solutionMin: 1
  solutionMax: 8
  offsetMin: 1
  offsetMax: 5
tieredExercises:
  - id: "tal-seq-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Find $\\lim_{n\\to+\\infty}5(0.8)^n$."
    solution: "Since $|0.8|<1$, the geometric sequence $(0.8)^n$ tends to $0$. Multiplication by $5$ does not change that limit, so the answer is $0$."
    hints:
      - "Recall the limit of $q^n$ when $|q|<1$."
    assessment:
      kind: "numeric"
      expected: 0
  - id: "tal-seq-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Determine $\\lim_{n\\to+\\infty}\\dfrac{3n^2-5n+1}{2n^2+7}$ by exhibiting the dominant terms."
    solution: "Divide numerator and denominator by $n^2$: $u_n=(3-5/n+1/n^2)/(2+7/n^2)$. Since $1/n$ and $1/n^2$ tend to $0$, the quotient tends to $3/2$."
    hints:
      - "Divide every term by the highest power, $n^2$."
      - "Then use the quotient rule for finite limits."
    assessment:
      kind: "numeric"
      expected: 1.5
  - id: "tal-seq-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Let $u_0=1$ and $u_{n+1}=\\sqrt{2+u_n}$. Prove that $(u_n)$ converges, and determine its limit."
    solution: "Inductively, $1\\le u_n<2$: if $u_n<2$, then $u_{n+1}<2$, and positivity is immediate. Moreover $u_{n+1}\\ge u_n$ is equivalent, since both sides are nonnegative, to $2+u_n\\ge u_n^2$, or $(2-u_n)(u_n+1)\\ge0$, which follows from $u_n<2$. Thus $(u_n)$ is increasing and bounded above, so it converges. If its limit is $L$, continuity gives $L=\\sqrt{2+L}$; with $L\\ge0$, this yields $L=2$."
    hints:
      - "First prove an invariant interval such as $[1,2)$."
      - "Compare $u_{n+1}$ and $u_n$ by squaring only after noting they are nonnegative."
      - "Prove convergence before solving the fixed-point equation."
    assessment:
      kind: "reasoning"
      rubric:
        - "Establishes a valid bound, in particular $u_n<2$."
        - "Proves monotonicity without assuming convergence."
        - "Applies the monotone convergence theorem."
        - "Uses the recurrence and continuity to obtain the unique admissible limit $2$."
  - id: "tal-seq-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "Newton's method for $x^2-2=0$ gives $u_0=2$ and $u_{n+1}=\\frac12(u_n+2/u_n)$. Prove that $u_n>\\sqrt2$, that $(u_n)$ decreases to $\\sqrt2$, and that $r_n=\\dfrac{u_n-\\sqrt2}{u_n+\\sqrt2}$ satisfies $r_{n+1}=r_n^2$. Deduce an explicit formula for $r_n$ and explain why this proves quadratic convergence."
    solution: "For $u_n>0$, $u_{n+1}-\\sqrt2=(u_n-\\sqrt2)^2/(2u_n)\\ge0$, with strict inequality here, so every term exceeds $\\sqrt2$. Also $u_{n+1}-u_n=(2-u_n^2)/(2u_n)<0$, hence the sequence decreases and is bounded below by $\\sqrt2$. It converges to $L>0$, and $L=(L+2/L)/2$ gives $L=\\sqrt2$. Direct algebra gives $u_{n+1}-\\sqrt2=(u_n-\\sqrt2)^2/(2u_n)$ and $u_{n+1}+\\sqrt2=(u_n+\\sqrt2)^2/(2u_n)$, so $r_{n+1}=r_n^2$. Therefore $r_n=r_0^{2^n}$, where $r_0=(2-\\sqrt2)/(2+\\sqrt2)=3-2\\sqrt2$. If $e_n=u_n-\\sqrt2$, then $e_{n+1}/e_n^2=1/(2u_n)\\to1/(2\\sqrt2)$, a finite nonzero limit. This is precisely quadratic convergence."
    hints:
      - "Factor the numerators of $u_{n+1}-\\sqrt2$ and $u_{n+1}-u_n$."
      - "Compute the corresponding expression for $u_{n+1}+\\sqrt2$."
      - "Iterate the relation $r_{n+1}=r_n^2$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Proves the invariant lower bound $u_n>\\sqrt2$ and monotone decrease."
        - "Justifies convergence and identifies the limit as $\\sqrt2$."
        - "Derives $r_{n+1}=r_n^2$ by correct algebra."
        - "Obtains $r_n=(3-2\\sqrt2)^{2^n}$ and proves quadratic convergence via $e_{n+1}/e_n^2\\to1/(2\\sqrt2)$."
---

# Limites de Suites & Convergence

L'étude du comportement asymptotique des suites numériques permet de modéliser le comportement à long terme d'un processus discret.

## 1. Convergence d'une suite

Une suite $(u_n)$ est **convergente** vers un réel $L$ si tout intervalle ouvert contenant $L$ contient tous les termes de la suite à partir d'un certain rang. On note :

$$\lim_{n \to +\infty} u_n = L$$

Si la suite ne converge pas vers une limite finie, elle est dite **divergente**.

## 2. Théorèmes de comparaison

* **Théorème des Gendarmes** : Si $v_n \le u_n \le w_n$ à partir d'un certain rang, et si $\lim v_n = \lim w_n = L$, alors $\lim u_n = L$.
* **Théorème de minoration/majoration** :
  * Si $u_n \ge v_n$ et $\lim v_n = +\infty$, alors $\lim u_n = +\infty$.
  * Si $u_n \le v_n$ et $\lim v_n = -\infty$, alors $\lim u_n = -\infty$.

## 3. Théorème de la monotone

Toute suite **croissante et majorée** est **convergente**.
Toute suite **décroissante et minorée** est **convergente**.
