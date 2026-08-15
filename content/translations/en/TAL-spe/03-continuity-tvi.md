---
id: "tal-continuity-tvi"
locale: "en"
title: "Continuity and the Intermediate Value Theorem"
strand: "Analysis and Functions"
summary: "Continuity, the Intermediate Value Theorem (IVT), the strict-monotonicity corollary, and bisection."
objectives:
  - "Justify that a function is continuous on an interval"
  - "State and apply the IVT to prove the existence of solutions"
  - "Use the strict-monotonicity corollary to prove uniqueness"
prerequisites:
  - "Limits of functions and monotonicity"
vocabulary:
  - en: "Intermediate Value Theorem"
    definition: "For every function f continuous on [a, b], each real number k between f(a) and f(b) has at least one preimage c in [a, b]."
  - en: "Dichotomy algorithm"
    definition: "A numerical method that repeatedly divides an interval in two to bracket the solution of an equation."
flashcards:
  - front: "What two conditions are needed to guarantee both the existence and uniqueness of a solution to f(x) = k?"
    back: "1. f is continuous on [a, b]. 2. f is strictly monotonic on [a, b]."
  - front: "Graphically, what does it mean for a function to be continuous on an interval?"
    back: "Its graph can be drawn in one stroke without lifting the pencil."
exercises:
  - id: "tal-tvi-t1"
    tierTitle: "Direct Application"
    prompt: "For $f(x)=x^3+x-3$, calculate the ordered pair $(f(1),f(2))$."
    solution: "$f(1)=1+1-3=-1$ and $f(2)=8+2-3=7$, so the ordered pair is $(-1,7)$."
    hints:
      - "Substitute each endpoint directly into the polynomial."
  - id: "tal-tvi-t2"
    tierTitle: "Standard Practice"
    prompt: "Prove that $f(x)=x^3+x-3$ has exactly one zero in $(1,2)$."
    solution: "The polynomial $f$ is continuous on $[1,2]$. Since $f(1)=-1<0<7=f(2)$, the intermediate value theorem gives at least one zero in $(1,2)$. Moreover $f'(x)=3x^2+1>0$ for every real $x$, so $f$ is strictly increasing and can have at most one zero. Hence the zero in $(1,2)$ is unique."
    hints:
      - "Use continuity and opposite endpoint signs for existence."
      - "Use the derivative to obtain strict monotonicity and uniqueness."
    rubric:
      - "States continuity on $[1,2]$ and computes opposite endpoint signs."
      - "Applies the intermediate value theorem to prove existence."
      - "Shows $f'(x)>0$ and uses strict increase to prove uniqueness."
  - id: "tal-tvi-t3"
    tierTitle: "Synthesis"
    prompt: "Starting from $[1,2]$, perform three bisection steps for the unique zero $\\alpha$ of $f(x)=x^3+x-3$. Give the resulting interval and its length."
    solution: "$f(1)<0<f(2)$. At $3/2$, $f(3/2)=15/8>0$, so retain $[1,3/2]$. At $5/4$, $f(5/4)=13/64>0$, so retain $[1,5/4]$. At $9/8$, $f(9/8)=-231/512<0$, so retain $[9/8,5/4]$. Its length is $5/4-9/8=1/8$."
    hints:
      - "At each step retain the half whose endpoint values have opposite signs."
      - "The successive midpoints are $3/2$, $5/4$, and $9/8$."
  - id: "tal-tvi-t4"
    tierTitle: "Advanced Challenge"
    prompt: "For real parameters $a$ and $m$, classify completely the number of distinct real solutions of $x^3-3ax=m$. Your proof must include the cases $a\\leq0$ and $a>0$, derive the parameter-dependent extremum values, and locate the three roots when they exist."
    solution: "Let $g_a(x)=x^3-3ax$. If $a\\leq0$, then $g_a'(x)=3(x^2-a)>0$ except at the isolated point $a=x=0$; $g_a$ is strictly increasing from $-\\infty$ to $+\\infty$, so every $m$ gives exactly one real solution. Now let $a>0$. The critical points are $-\\sqrt a$ and $\\sqrt a$. The function increases on $(-\\infty,-\\sqrt a]$, decreases on $[-\\sqrt a,\\sqrt a]$, then increases on $[\\sqrt a,+\\infty)$. Its local maximum is $g_a(-\\sqrt a)=2a^{3/2}$ and its local minimum is $g_a(\\sqrt a)=-2a^{3/2}$. Therefore there are three distinct roots when $|m|<2a^{3/2}$, one in each monotonicity interval; two distinct roots, one of them double, when $|m|=2a^{3/2}$; and exactly one real root when $|m|>2a^{3/2}$. Continuity gives existence on each stated branch and strict monotonicity gives uniqueness there."
    hints:
      - "Separate $a\\leq0$ from $a>0$ before solving $g_a'(x)=0$."
      - "For $a>0$, evaluate $g_a$ at $x=\\pm\\sqrt a$."
      - "Apply the IVT separately on each interval of strict monotonicity."
    rubric:
      - "Proves that every $m$ gives exactly one solution when $a\\leq0$."
      - "For $a>0$, derives the critical points and extremum values $\\pm2a^{3/2}$."
      - "Classifies correctly the three-, two-, and one-root regimes and locates roots by branch."
      - "Uses continuity for existence and strict monotonicity for uniqueness on every branch."
---

# Continuity and the Intermediate Value Theorem

**Continuity** is the fundamental property of functions whose graphs have no breaks or jumps.

## 1. Definition of Continuity

A function $f$ is **continuous at $a$** if:

$$\lim_{x \to a} f(x) = f(a)$$

All standard functions (polynomial, exponential, sine, cosine, and square-root functions) are continuous on their domains.

## 2. Intermediate Value Theorem (IVT)

If $f$ is a **continuous** function on an interval $[a, b]$, then for every real number $k$ between $f(a)$ and $f(b)$, there is **at least one** real number $c \in [a, b]$ such that:

$$f(c) = k$$

## 3. Corollary (Existence and Uniqueness)

If $f$ is **continuous** AND **strictly monotonic** on $[a, b]$, then for every real number $k$ between $f(a)$ and $f(b)$, the equation $f(x) = k$ has a **unique** solution $c \in [a, b]$.
