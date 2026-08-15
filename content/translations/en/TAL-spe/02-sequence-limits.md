---
id: "tal-sequence-limits"
locale: "en"
title: "Limits of Sequences and Convergence"
strand: "Analysis and Sequences"
summary: "Understand sequence convergence, comparison theorems, and the squeeze theorem."
objectives:
  - "Determine the limit of an explicit or recursively defined sequence"
  - "Resolve the standard indeterminate forms (+infinity - infinity, 0*infinity, infinity/infinity)"
  - "Use the monotone convergence theorem for sequences"
prerequisites:
  - "Proof by induction"
  - "Arithmetic and geometric sequences"
vocabulary:
  - en: "Convergent sequence"
    definition: "A sequence u_n that has a finite limit L as n approaches +infinity."
  - en: "Squeeze theorem"
    definition: "If v_n <= u_n <= w_n and lim v_n = lim w_n = L, then lim u_n = L."
flashcards:
  - front: "What is the limit of q^n as n -> +infinity for the different values of q?"
    back: "If |q| < 1: the limit is 0. If q = 1: the limit is 1. If q > 1: the limit is +infinity. If q <= -1: there is no limit."
  - front: "What does the monotone convergence theorem state for an increasing sequence that is bounded above?"
    back: "Every increasing sequence that is bounded above converges."
exercises:
  - id: "tal-seq-t1"
    tierTitle: "Direct Application"
    prompt: "Find $\\lim_{n\\to+\\infty}5(0.8)^n$."
    solution: "Since $|0.8|<1$, the geometric sequence $(0.8)^n$ tends to $0$. Multiplication by $5$ does not change that limit, so the answer is $0$."
    hints:
      - "Recall the limit of $q^n$ when $|q|<1$."
  - id: "tal-seq-t2"
    tierTitle: "Standard Practice"
    prompt: "Determine $\\lim_{n\\to+\\infty}\\dfrac{3n^2-5n+1}{2n^2+7}$ by exhibiting the dominant terms."
    solution: "Divide numerator and denominator by $n^2$: $u_n=(3-5/n+1/n^2)/(2+7/n^2)$. Since $1/n$ and $1/n^2$ tend to $0$, the quotient tends to $3/2$."
    hints:
      - "Divide every term by the highest power, $n^2$."
      - "Then use the quotient rule for finite limits."
  - id: "tal-seq-t3"
    tierTitle: "Synthesis"
    prompt: "Let $u_0=1$ and $u_{n+1}=\\sqrt{2+u_n}$. Prove that $(u_n)$ converges, and determine its limit."
    solution: "Inductively, $1\\le u_n<2$: if $u_n<2$, then $u_{n+1}<2$, and positivity is immediate. Moreover $u_{n+1}\\ge u_n$ is equivalent, since both sides are nonnegative, to $2+u_n\\ge u_n^2$, or $(2-u_n)(u_n+1)\\ge0$, which follows from $u_n<2$. Thus $(u_n)$ is increasing and bounded above, so it converges. If its limit is $L$, continuity gives $L=\\sqrt{2+L}$; with $L\\ge0$, this yields $L=2$."
    hints:
      - "First prove an invariant interval such as $[1,2)$."
      - "Compare $u_{n+1}$ and $u_n$ by squaring only after noting they are nonnegative."
      - "Prove convergence before solving the fixed-point equation."
    rubric:
      - "Establishes a valid bound, in particular $u_n<2$."
      - "Proves monotonicity without assuming convergence."
      - "Applies the monotone convergence theorem."
      - "Uses the recurrence and continuity to obtain the unique admissible limit $2$."
  - id: "tal-seq-t4"
    tierTitle: "Advanced Challenge"
    prompt: "Newton's method for $x^2-2=0$ gives $u_0=2$ and $u_{n+1}=\\frac12(u_n+2/u_n)$. Prove that $u_n>\\sqrt2$, that $(u_n)$ decreases to $\\sqrt2$, and that $r_n=\\dfrac{u_n-\\sqrt2}{u_n+\\sqrt2}$ satisfies $r_{n+1}=r_n^2$. Deduce an explicit formula for $r_n$ and explain why this proves quadratic convergence."
    solution: "For $u_n>0$, $u_{n+1}-\\sqrt2=(u_n-\\sqrt2)^2/(2u_n)\\ge0$, with strict inequality here, so every term exceeds $\\sqrt2$. Also $u_{n+1}-u_n=(2-u_n^2)/(2u_n)<0$, hence the sequence decreases and is bounded below by $\\sqrt2$. It converges to $L>0$, and $L=(L+2/L)/2$ gives $L=\\sqrt2$. Direct algebra gives $u_{n+1}-\\sqrt2=(u_n-\\sqrt2)^2/(2u_n)$ and $u_{n+1}+\\sqrt2=(u_n+\\sqrt2)^2/(2u_n)$, so $r_{n+1}=r_n^2$. Therefore $r_n=r_0^{2^n}$, where $r_0=(2-\\sqrt2)/(2+\\sqrt2)=3-2\\sqrt2$. If $e_n=u_n-\\sqrt2$, then $e_{n+1}/e_n^2=1/(2u_n)\\to1/(2\\sqrt2)$, a finite nonzero limit. This is precisely quadratic convergence."
    hints:
      - "Factor the numerators of $u_{n+1}-\\sqrt2$ and $u_{n+1}-u_n$."
      - "Compute the corresponding expression for $u_{n+1}+\\sqrt2$."
      - "Iterate the relation $r_{n+1}=r_n^2$."
    rubric:
      - "Proves the invariant lower bound $u_n>\\sqrt2$ and monotone decrease."
      - "Justifies convergence and identifies the limit as $\\sqrt2$."
      - "Derives $r_{n+1}=r_n^2$ by correct algebra."
      - "Obtains $r_n=(3-2\\sqrt2)^{2^n}$ and proves quadratic convergence via $e_{n+1}/e_n^2\\to1/(2\\sqrt2)$."
---

# Limits of Sequences and Convergence

Studying the asymptotic behavior of numerical sequences makes it possible to model the long-term behavior of a discrete process.

## 1. Convergence of a Sequence

A sequence $(u_n)$ **converges** to a real number $L$ if every open interval containing $L$ contains all terms of the sequence from some index onward. We write:

$$\lim_{n \to +\infty} u_n = L$$

If the sequence does not converge to a finite limit, it is said to **diverge**.

## 2. Comparison Theorems

* **Squeeze theorem**: If $v_n \le u_n \le w_n$ from some index onward, and if $\lim v_n = \lim w_n = L$, then $\lim u_n = L$.
* **Lower- and upper-bound theorems**:
  * If $u_n \ge v_n$ and $\lim v_n = +\infty$, then $\lim u_n = +\infty$.
  * If $u_n \le v_n$ and $\lim v_n = -\infty$, then $\lim u_n = -\infty$.

## 3. Monotone Convergence Theorem

Every **increasing sequence that is bounded above** **converges**.
Every **decreasing sequence that is bounded below** **converges**.
