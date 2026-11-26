---
id: 1re-advent-calendar
order: 7
title: "Advent of Math: Operation Starlight"
level: 1re
strand: Seasonal Bonus · Problem Solving
difficulty: bonus
estimatedMinutes: 180
summary: Twenty-four festive riddles, Python algorithms, and proofs at the North Pole Observatory, uniting quadratics, sequences, derivatives, exponentials, trigonometry, dot products, and probability from December 1 to December 24.
objectives:
  - Solve multi-step Première Spécialité modeling and optimization problems across analysis, geometry, and probability
  - Analyze Python algorithms for sequence thresholds, geometric series, bisection, and dynamic-programming recurrences
  - Write rigorous proofs using discriminants, auxiliary geometric sequences, invariants, and vector geometry
prerequisites:
  - Second-degree polynomials, derivatives, and the exponential function
  - Arithmetic and geometric sequences, unit circle trigonometry, and dot products
  - Conditional probability, discrete random variables, and Python loops
vocabulary:
  - en: discriminant
    fr: discriminant
    definition: For $ax^2 + bx + c = 0$, the quantity $\Delta = b^2 - 4ac$ that determines the number of real roots.
  - en: dot product
    fr: produit scalaire
    definition: The real number $\vec{u} \cdot \vec{v} = xx' + yy' = \|\vec{u}\|\|\vec{v}\|\cos\theta$, zero if and only if the vectors are orthogonal.
  - en: expected value
    fr: espérance
    definition: The probability-weighted mean $E(X) = \sum x_i P(X = x_i)$ of a discrete random variable $X$.
  - en: bisection
    fr: dichotomie
    definition: A root-finding algorithm that repeatedly halves an interval $[a, b]$ where a continuous function changes sign.
flashcards:
  - front: How do you find the sum $S$ and product $P$ of the two roots of $ax^2 + bx + c = 0$?
    back: $S = -\frac{b}{a}$ and $P = \frac{c}{a}$ (when $\Delta \ge 0$).
  - front: What is the derivative of a product $(uv)'$ and of $e^{ax + b}$?
    back: $(uv)' = u'v + uv'$, and $(e^{ax+b})' = a\,e^{ax+b}$.
  - front: State the Law of Cosines (Al-Kashi's theorem) in triangle $ABC$.
    back: $BC^2 = AB^2 + AC^2 - 2\,AB\cdot AC\cos(\widehat{BAC})$.
  - front: How does conditional probability $P_A(B)$ relate to $P(A \cap B)$?
    back: $P_A(B) = \frac{P(A \cap B)}{P(A)}$ (provided $P(A) > 0$).
generator:
  type: quadratic-value
  seed: 11224
  count: 4
  coefficientMin: -5
  coefficientMax: 5
  xMin: -4
  xMax: 4
adventDays:
  - day: 1
    id: 1re-advent-01
    title: The Parabolic Aurora Shield
    topic: Quadratics and discriminant
    format: riddle
    difficulty: medium
    story: On December 1, engineers at the North Pole Observatory align a straight laser calibration beam so it just grazes the parabolic energy dome protecting Santa's hangar.
    prompt: >-
      The observatory's energy dome has cross-section $y = -x^2 + 6x + 7$, and a laser beam follows the line $y = 2x + k$. For what exact real value of $k$ is the laser beam **tangent** to the parabolic dome?
    solution: >-
      Intersection points satisfy $-x^2 + 6x + 7 = 2x + k \iff x^2 - 4x + (k - 7) = 0$. The line is tangent to the parabola if and only if this quadratic has a unique double root, i.e. $\Delta = 0$. Compute $\Delta = (-4)^2 - 4(1)(k - 7) = 16 - 4k + 28 = 44 - 4k$. Setting $\Delta = 0$ gives $k = 11$ (tangent at $x = 2$, $y = 15$).
    hints:
      - Set $-x^2 + 6x + 7 = 2x + k$ and rearrange into a standard quadratic equation in $x$.
      - A line is tangent to a parabola when the intersection quadratic has discriminant $\Delta = 0$.
    assessment:
      kind: numeric
      expected: 11

  - day: 2
    id: 1re-advent-02
    title: The Snow-Crystal Solar Array
    topic: Arithmetic sequences
    format: puzzle
    difficulty: medium
    story: To power the Arctic observatory through the polar night, technicians mount rows of hexagonal aurora-collectors in a shimmering pyramid.
    prompt: >-
      Row $1$ of the solar collector array holds $15$ hexagonal panels, and each subsequent row adds $4$ more panels than the row before it. If the completed array has $14$ rows, how many panels are mounted in total?
    solution: >-
      The row counts form an arithmetic sequence with $u_1 = 15$ and common difference $r = 4$. The last row has $u_{14} = u_1 + 13r = 15 + 13 \times 4 = 67$ panels. The total number of panels is $S = 14 \times \frac{u_1 + u_{14}}{2} = 7 \times (15 + 67) = 7 \times 82 = 574$.
    hints:
      - Model the number of panels in row $n$ as an arithmetic sequence $u_n = 15 + 4(n - 1)$.
      - Compute $u_{14}$ and apply the arithmetic-series sum formula $S = N \times \frac{\text{first} + \text{last}}{2}$.
    assessment:
      kind: numeric
      expected: 574

  - day: 3
    id: 1re-advent-03
    title: The Arctic Blizzard Radar
    topic: Conditional probability (Bayes)
    format: riddle
    difficulty: medium
    story: The weather radar just flashed a scarlet blizzard alert over the sleigh corridor—but before delaying test flights, the flight director asks for the true probability of a real storm.
    prompt: >-
      On any December night, a blizzard occurs with probability $0.2$. The radar correctly sounds an alert $90\%$ of the time when a blizzard occurs, and triggers a false alarm $10\%$ of the time when the sky is clear. Given that the radar alert just sounded, what is the exact probability (as a simplified fraction `a/b`) that a real blizzard is occurring?
    solution: >-
      Let $B$ be the event "blizzard" and $A$ the event "alert". By the law of total probability: $P(B \cap A) = 0.2 \times 0.9 = 0.18$ and $P(\overline{B} \cap A) = 0.8 \times 0.1 = 0.08$, so $P(A) = 0.18 + 0.08 = 0.26$. Therefore $P_A(B) = \frac{P(B \cap A)}{P(A)} = \frac{0.18}{0.26} = \frac{18}{26} = \frac{9}{13}$.
    hints:
      - Draw a probability tree starting with $B$ ($0.2$) and $\overline{B}$ ($0.8$), then branch on the alert $A$.
      - Compute $P(A) = P(B \cap A) + P(\overline{B} \cap A)$, then evaluate $P_A(B) = \frac{P(B \cap A)}{P(A)}$.
    assessment:
      kind: exact
      expected: "9/13"

  - day: 4
    id: 1re-advent-04
    title: The Cryo-Coolant Threshold
    topic: Arithmetic-geometric sequence and Python loop
    format: algorithm
    difficulty: medium
    story: After a supersonic sleigh test, the cryo-coolant tank cools down minute by minute—a Python watchdog waits until excess temperature drops to $30^\circ\text{C}$ or below.
    prompt: |
      Trace or analyze the following Python threshold loop and determine the exact integer value of `n` when the loop terminates:

      ```python
      u = 80.0
      n = 0
      while u > 30.0:
          u = 0.75 * u + 5
          n += 1
      ```
    solution: >-
      The fixed point of $u_{n+1} = 0.75u_n + 5$ satisfies $\ell = 0.75\ell + 5 \implies \ell = 20$. Setting $v_n = u_n - 20$ gives $v_n = 60 \times (0.75)^n$, so $u_n \le 30 \iff 60(0.75)^n \le 10 \iff \left(\frac{3}{4}\right)^n \le \frac{1}{6}$. Check powers directly: for $n = 6$, $\left(\frac{3}{4}\right)^6 = \frac{729}{4096} > \frac{1}{6}$ (since $6 \times 729 = 4374 > 4096$, giving $u_6 \approx 30.68 > 30$); for $n = 7$, $\left(\frac{3}{4}\right)^7 = \frac{2187}{16384} < \frac{1}{6}$ (since $6 \times 2187 = 13122 < 16384$, giving $u_7 \approx 28.01 \le 30$). Thus the loop stops at `n = 7`.
    hints:
      - Notice that $v_n = u_n - 20$ is a geometric sequence with ratio $0.75 = \frac{3}{4}$ and $v_0 = 60$.
      - Rewrite $u_n \le 30$ as $\left(\frac{3}{4}\right)^n \le \frac{1}{6}$ and test $n = 6$ and $n = 7$ cleanly!
    assessment:
      kind: numeric
      expected: 7

  - day: 5
    id: 1re-advent-05
    title: The Sleigh Launch Rail
    topic: Derivatives and tangent lines
    format: puzzle
    difficulty: medium
    story: At the tip of the curved magnetic launch rail, the Starlight Sleigh detaches and coasts straight along the tangent line toward the polar sky.
    prompt: >-
      The launch rail follows the curve $f(x) = x^3 - 3x^2 + 4x + 1$ for $x \ge 0$. At $x = 2$, the sleigh releases from the rail and continues in a straight line along the **tangent** to the curve at $x = 2$. What is the sleigh's $y$-coordinate when it passes $x = 5$?
    solution: >-
      Compute $f(2) = 2^3 - 3(2^2) + 4(2) + 1 = 8 - 12 + 8 + 1 = 5$. Differentiate: $f'(x) = 3x^2 - 6x + 4$, so $f'(2) = 12 - 12 + 4 = 4$. The tangent line at $x = 2$ has equation $y = f'(2)(x - 2) + f(2) = 4(x - 2) + 5 = 4x - 3$. Evaluating at $x = 5$ gives $y = 4(5) - 3 = 17$.
    hints:
      - Differentiate $f(x)$ to find the slope $f'(2)$ and evaluate $f(2)$.
      - Write the tangent equation $y = f'(2)(x - 2) + f(2)$, then plug in $x = 5$.
    assessment:
      kind: numeric
      expected: 17

  - day: 6
    id: 1re-advent-06
    title: The Orthogonal Beacon Array
    topic: Dot product and orthogonality
    format: riddle
    difficulty: medium
    story: Three Arctic radio masts must form a strict right angle at the central relay $B$ to eliminate signal interference across the ice cap.
    prompt: >-
      In an orthonormal coordinate plane, three radio towers stand at $A(1, 3)$, $B(5, 1)$, and $C(3, m)$. For what exact real value of $m$ is triangle $ABC$ right-angled at $B$?
    solution: >-
      Compute the vectors $\overrightarrow{BA} = (1 - 5, 3 - 1) = (-4, 2)$ and $\overrightarrow{BC} = (3 - 5, m - 1) = (-2, m - 1)$. Triangle $ABC$ is right-angled at $B$ if and only if $\overrightarrow{BA} \cdot \overrightarrow{BC} = 0$, which gives $(-4)(-2) + 2(m - 1) = 0 \iff 8 + 2m - 2 = 0 \iff 2m = -6 \iff m = -3$.
    hints:
      - Compute the coordinates of vectors $\overrightarrow{BA}$ and $\overrightarrow{BC}$.
      - Set their dot product $\overrightarrow{BA} \cdot \overrightarrow{BC} = 0$ and solve for $m$.
    assessment:
      kind: numeric
      expected: -3

  - day: 7
    id: 1re-advent-07
    title: The Star-Tracker Azimuth
    topic: Unit circle and trigonometric equations
    format: puzzle
    difficulty: medium
    story: The observatory dome locks onto every azimuth angle on the unit circle that solves the star-tracker's quadratic cosine calibration equation.
    prompt: |
      Find all solutions $\theta \in [0, 2\pi[$ to the trigonometric equation:

      $$2\cos^2(\theta) - \cos(\theta) - 1 = 0$$

      Enter the **exact sum** of all distinct solutions $\theta \in [0, 2\pi[$ in terms of `pi` (for example `2pi`).
    solution: >-
      Set $X = \cos(\theta)$. The quadratic $2X^2 - X - 1 = (2X + 1)(X - 1) = 0$ has roots $X = 1$ and $X = -\frac{1}{2}$. On $[0, 2\pi[$:
      - $\cos(\theta) = 1 \iff \theta = 0$.
      - $\cos(\theta) = -\frac{1}{2} \iff \theta = \frac{2\pi}{3}$ or $\theta = \frac{4\pi}{3}$.
      The sum of all three distinct solutions is $0 + \frac{2\pi}{3} + \frac{4\pi}{3} = 2\pi$.
    hints:
      - Let $X = \cos(\theta)$ and solve the quadratic equation $2X^2 - X - 1 = 0$.
      - Read all corresponding angles on the unit circle for $\theta \in [0, 2\pi[$, then add them together.
    assessment:
      kind: exact
      expected: "2pi"
      accepted:
        - "2*pi"
        - "2\\pi"
        - "2π"

  - day: 8
    id: 1re-advent-08
    title: The Unstoppable Sleigh Clearance
    topic: Parametric quadratics and sign proofs
    format: proof
    difficulty: medium
    story: Crosswinds shift the sleigh's clearance parameter $m$ unpredictably—you must certify mathematically that the sleigh never clips the Arctic mountain ridge for ANY wind drift $m$.
    prompt: |
      The altitude clearance $h(x)$ (in meters above a mountain ridge) of a sleigh flight path is modeled for $x \in \mathbb{R}$ by:

      $$h(x) = x^2 - 2mx + (2m^2 - 4m + 5)$$

      where $m \in \mathbb{R}$ is an arbitrary wind-drift parameter. Prove rigorously that for **every** real value of $m$ and **every** real $x$, $h(x) > 0$.
    solution: >-
      **Method 1 (Discriminant):** Viewing $h(x)$ as a quadratic in $x$ with leading coefficient $a = 1 > 0$, its discriminant is $\Delta = (-2m)^2 - 4(1)(2m^2 - 4m + 5) = 4m^2 - 8m^2 + 16m - 20 = -4(m^2 - 4m + 5) = -4\big((m - 2)^2 + 1\big)$. Since $(m - 2)^2 \ge 0$ for all $m \in \mathbb{R}$, we have $(m - 2)^2 + 1 \ge 1$, so $\Delta \le -4 < 0$ for every $m \in \mathbb{R}$. Because $a = 1 > 0$ and $\Delta < 0$, $h(x)$ keeps the sign of $a$, hence $h(x) > 0$ for all $x \in \mathbb{R}$.
      **Method 2 (Canonical form):** Complete the square directly: $h(x) = (x - m)^2 + m^2 - 4m + 5 = (x - m)^2 + (m - 2)^2 + 1 \ge 1 > 0$ for all $x, m \in \mathbb{R}$.
    hints:
      - Compute the discriminant $\Delta$ of the quadratic in $x$ (treating $m$ as a constant), OR complete the square in $x$.
      - Show that the resulting expression in $m$ is always strictly negative (for $\Delta$) or strictly positive (for the minimum value of $h$).
    assessment:
      kind: reasoning
      rubric:
        - Computes either the discriminant $\Delta = -4(m^2 - 4m + 5)$ or the completed square $h(x) = (x - m)^2 + (m - 2)^2 + 1$.
        - Proves that $m^2 - 4m + 5 = (m - 2)^2 + 1 \ge 1 > 0$ for every $m \in \mathbb{R}$ (so $\Delta < 0$ everywhere).
        - Uses $a = 1 > 0$ (or the sum of squares $+ 1 \ge 1$) to conclude $h(x) > 0$ for all $x, m \in \mathbb{R}$.

  - day: 9
    id: 1re-advent-09
    title: The Observatory Cocoa Raffle
    topic: Random variables and expected value
    format: riddle
    difficulty: medium
    story: To fund the observatory's midnight hot-cocoa bar, the interns run a 20-card charity draw—compute the player's exact expected net gain.
    prompt: >-
      A player pays $4$ € to draw one card at random from a deck of $20$ cards:
      - $1$ Star card pays $30$ €,
      - $4$ Snowflake cards pay $8$ € each,
      - $15$ Icicle cards pay $0$ €.

      Let $G$ be the player's **net gain** (payout minus the $4$ € entry fee). What is the expected value $E(G)$, in euros?
    solution: >-
      The net gain $G$ takes values $+26$ (probability $\frac{1}{20}$), $+4$ (probability $\frac{4}{20}$), and $-4$ (probability $\frac{15}{20}$). Therefore:
      $E(G) = 26 \times \frac{1}{20} + 4 \times \frac{4}{20} + (-4) \times \frac{15}{20} = \frac{26 + 16 - 60}{20} = \frac{-18}{20} = -0.9$ €.
      (Equivalently, expected payout is $\frac{30 + 32}{20} = 3.1$ €, so $E(G) = 3.1 - 4 = -0.9$ €.)
    hints:
      - Subtract the $4$ € entry fee from each prize (or subtract $4$ from the expected payout at the end).
      - Remember to include the minus sign if the game is unfavorable to the player!
    assessment:
      kind: numeric
      expected: -0.9

  - day: 10
    id: 1re-advent-10
    title: The Maximum-Volume Cargo Box
    topic: Derivative optimization
    format: puzzle
    difficulty: medium
    story: Workshop engineers fold an open-top aluminum instrument crate from a square sheet—maximize its carrying volume using calculus!
    prompt: >-
      An open-top rectangular crate is formed from a flat $18\text{ cm} \times 18\text{ cm}$ square sheet of aluminum by cutting an $x \times x$ square from each of the four corners and folding up the flaps ($0 < x < 9$). What is the **maximum possible volume** of the crate, in $\text{cm}^3$?
    solution: >-
      The folded base is a square of side $18 - 2x$ and height $x$, so the volume is $V(x) = x(18 - 2x)^2 = 4x^3 - 72x^2 + 324x$ for $x \in ]0, 9[$. Differentiate: $V'(x) = 12x^2 - 144x + 324 = 12(x^2 - 12x + 27) = 12(x - 3)(x - 9)$. On $]0, 9[$, $V'(x) > 0$ on $]0, 3[$ and $V'(x) < 0$ on $]3, 9[$, so $V$ attains its unique maximum at $x = 3\text{ cm}$. The maximum volume is $V(3) = 3 \times (18 - 6)^2 = 3 \times 144 = 432\text{ cm}^3$.
    hints:
      - Express the base side length as $18 - 2x$ and the volume as $V(x) = x(18 - 2x)^2$.
      - Expand $V(x)$, differentiate to find $V'(x) = 0$ on $]0, 9[$, and evaluate $V$ at the critical point.
    assessment:
      kind: numeric
      expected: 432

  - day: 11
    id: 1re-advent-11
    title: The Starlight Signal Repeater
    topic: Geometric series and Python loops
    format: algorithm
    difficulty: hard
    story: An aurora signal repeater alternates between boosting and dampening powers of $2$—instead of summing all $10$ passes blindly, exploit geometric series!
    prompt: |
      Find the exact final value of `total` produced by this Python program:

      ```python
      total = 0
      term = 3
      for k in range(1, 11):
          if k % 2 == 1:
              total += term
          else:
              total -= term // 3
          term = term * 2
      ```
    solution: >-
      Pair each odd step $k = 2j - 1$ with the following even step $k = 2j$ ($j = 1, 2, 3, 4, 5$). At the odd step `term` equals $3 \times 4^{j-1}$ and adds $+3 \times 4^{j-1}$. At the next even step `term` doubles to $6 \times 4^{j-1}$, so `term // 3` subtracts $2 \times 4^{j-1}$. Each pair therefore contributes $(3 - 2) \times 4^{j-1} = 4^{j-1}$! Summing over $j = 1$ to $5$ gives a geometric series of ratio $4$: $1 + 4 + 16 + 64 + 256 = \frac{4^5 - 1}{4 - 1} = \frac{1023}{3} = 341$.
    hints:
      - 'Write down the changes to `total` for $k = 1, 2, 3, 4$: $+3, -2, +12, -8, \dots$'
      - Group consecutive pairs $(+3 - 2) + (+12 - 8) + \dots$ to spot a clean geometric series of common ratio $4$!
    assessment:
      kind: numeric
      expected: 341

  - day: 12
    id: 1re-advent-12
    title: The Thermal-Shield Peak
    topic: Exponential function and product rule
    format: riddle
    difficulty: hard
    story: During upper-atmosphere re-entry trials, engineers must pinpoint the exact second when thermal stress on the Starlight Sleigh peaks.
    prompt: |
      During a test descent, the heat flux on the sleigh's nose cone is modeled for $t \ge 0$ (in seconds) by:

      $$q(t) = (t^2 + 3t)\,e^{-0.5t}$$

      At what exact time $t > 0$ (in seconds) does the heat flux reach its **maximum**?
    solution: >-
      Differentiate using the product rule $(uv)' = u'v + uv'$ with $u(t) = t^2 + 3t$ and $v(t) = e^{-0.5t}$ ($v'(t) = -0.5e^{-0.5t}$):
      $q'(t) = \big((2t + 3) - 0.5(t^2 + 3t)\big)e^{-0.5t} = (-0.5t^2 + 0.5t + 3)e^{-0.5t} = -0.5(t^2 - t - 6)e^{-0.5t} = -0.5(t - 3)(t + 2)e^{-0.5t}$.
      Since $e^{-0.5t} > 0$ and $t + 2 > 0$ for all $t \ge 0$, $q'(t) > 0$ on $[0, 3[$ and $q'(t) < 0$ on $]3, +\infty[$. Therefore $q(t)$ attains its maximum at $t = 3\text{ s}$.
    hints:
      - Apply the product rule to $(t^2 + 3t) \cdot e^{-0.5t}$ and factor out $e^{-0.5t}$.
      - Study the sign of the remaining quadratic factor on $[0, +\infty[$ since $e^{-0.5t} > 0$ always.
    assessment:
      kind: numeric
      expected: 3

  - day: 13
    id: 1re-advent-13
    title: The Triangular Radar Bearing
    topic: Law of Cosines (Al-Kashi)
    format: puzzle
    difficulty: hard
    story: Two Arctic radar dishes lock onto a high-altitude weather balloon simultaneously—from the three measured distances alone, recover the exact sighting angle!
    prompt: >-
      Two tracking stations $A$ and $B$ sit $AB = 7\text{ km}$ apart. A weather balloon $C$ is measured at $AC = 8\text{ km}$ from station $A$ and $BC = 13\text{ km}$ from station $B$. Using the Law of Cosines (Al-Kashi's theorem), determine the exact measure of angle $\widehat{BAC}$, in **degrees**.
    solution: >-
      By Al-Kashi's theorem, $BC^2 = AB^2 + AC^2 - 2\,AB \cdot AC \cos(\widehat{BAC})$. Substituting the lengths: $13^2 = 7^2 + 8^2 - 2(7)(8)\cos(\widehat{BAC})$, which gives $169 = 49 + 64 - 112\cos(\widehat{BAC}) = 113 - 112\cos(\widehat{BAC})$. Hence $112\cos(\widehat{BAC}) = 113 - 169 = -56$, so $\cos(\widehat{BAC}) = -\frac{56}{112} = -\frac{1}{2}$. Since $\widehat{BAC} \in ]0^\circ, 180^\circ[$, we obtain $\widehat{BAC} = 120^\circ$.
    hints:
      - Write Al-Kashi's formula expressing $BC^2$ in terms of $AB$, $AC$, and $\cos(\widehat{BAC})$.
      - Solve for $\cos(\widehat{BAC})$ and recall which angle between $0^\circ$ and $180^\circ$ has cosine $-\frac{1}{2}$.
    assessment:
      kind: numeric
      expected: 120

  - day: 14
    id: 1re-advent-14
    title: The Circular Landing Pad
    topic: Circle Cartesian equations and distance
    format: riddle
    difficulty: hard
    story: Before landing in zero visibility, the autopilot computes the shortest clearance from the control tower to the perimeter of the circular ice pad.
    prompt: >-
      In an orthonormal coordinate map (units in meters), the circular landing pad $\mathcal{C}$ has equation $x^2 + y^2 - 6x + 4y - 12 = 0$. The control tower stands at $P(11, 4)$. What is the **shortest distance** (in meters) from $P$ to a point on the circle $\mathcal{C}$?
    solution: >-
      Complete the square in $x$ and $y$: $(x - 3)^2 - 9 + (y + 2)^2 - 4 - 12 = 0 \iff (x - 3)^2 + (y + 2)^2 = 25$. Thus $\mathcal{C}$ has center $\Omega(3, -2)$ and radius $R = 5$. The distance from $\Omega$ to $P(11, 4)$ is $\Omega P = \sqrt{(11 - 3)^2 + (4 - (-2))^2} = \sqrt{8^2 + 6^2} = \sqrt{100} = 10$. Since $P$ lies outside the circle ($\Omega P > R$), the shortest distance from $P$ to $\mathcal{C}$ is $\Omega P - R = 10 - 5 = 5\text{ m}$.
    hints:
      - Rewrite $x^2 - 6x + y^2 + 4y - 12 = 0$ in standard center-radius form $(x - a)^2 + (y - b)^2 = R^2$.
      - Compute the distance from the center $\Omega$ to $P$, then subtract the radius $R$.
    assessment:
      kind: numeric
      expected: 5

  - day: 15
    id: 1re-advent-15
    title: The Endless Aurora Battery
    topic: Arithmetic-geometric sequences (proof)
    format: proof
    difficulty: hard
    story: Every day, the observatory's superconducting battery loses $20\%$ of its charge to heating while solar collectors pump in $160\text{ kWh}$—prove why it grows forever without ever touching $800\text{ kWh}$.
    prompt: >-
      The battery energy $u_n$ (in $\text{kWh}$) after $n$ days satisfies $u_0 = 500$ and $u_{n+1} = 0.8\,u_n + 160$ for all $n \in \mathbb{N}$.
      1. Define $v_n = u_n - 800$ and prove that $(v_n)$ is a geometric sequence (state its common ratio and first term $v_0$).
      2. Deduce an explicit formula for $u_n$ in terms of $n$.
      3. Prove that $(u_n)$ is strictly increasing yet satisfies $u_n < 800$ for every $n \in \mathbb{N}$.
    solution: >-
      1. **Geometric sequence:** For all $n \in \mathbb{N}$, $v_{n+1} = u_{n+1} - 800 = 0.8u_n + 160 - 800 = 0.8u_n - 640 = 0.8(u_n - 800) = 0.8v_n$. Thus $(v_n)$ is geometric with common ratio $q = 0.8$ and first term $v_0 = u_0 - 800 = -300$.
      2. **Explicit formula:** Since $v_n = v_0 q^n = -300 \times 0.8^n$, we obtain $u_n = 800 - 300 \times 0.8^n$.
      3. **Monotonicity and bound:** Because $0.8^n > 0$ for all $n \in \mathbb{N}$, $300 \times 0.8^n > 0$, hence $u_n = 800 - 300 \times 0.8^n < 800$. Moreover, $u_{n+1} - u_n = -300 \times 0.8^{n+1} + 300 \times 0.8^n = 300 \times 0.8^n(1 - 0.8) = 60 \times 0.8^n > 0$, proving $(u_n)$ is strictly increasing.
    hints:
      - Express $v_{n+1} = u_{n+1} - 800$ using the recurrence and factor out $0.8$.
      - Compute $u_{n+1} - u_n$ directly from the explicit formula to prove strict monotonicity.
    assessment:
      kind: reasoning
      rubric:
        - Proves $v_{n+1} = 0.8v_n$ and identifies $q = 0.8$ and $v_0 = -300$.
        - Deduces the explicit closed form $u_n = 800 - 300 \times 0.8^n$.
        - Proves both $u_n < 800$ (since $300 \times 0.8^n > 0$) and $u_{n+1} - u_n = 60 \times 0.8^n > 0$ (strictly increasing).

  - day: 16
    id: 1re-advent-16
    title: The Twin-Star Resonance
    topic: Sum and product of quadratic roots
    format: puzzle
    difficulty: hard
    story: Two harmonic frequencies $\alpha$ and $\beta$ emerge from a messy radical quadratic—yet their sum of cubes is a crisp integer if you use symmetric identities!
    prompt: >-
      Let $\alpha$ and $\beta$ be the two distinct real roots of the quadratic equation $x^2 - 7x + 9 = 0$. Without computing $\alpha$ and $\beta$ individually, find the exact integer value of $\alpha^3 + \beta^3$.
    solution: >-
      First check $\Delta = 49 - 36 = 13 > 0$, so two distinct real roots exist with sum $S = \alpha + \beta = 7$ and product $P = \alpha\beta = 9$. Recall the cubic identity $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = S^3 - 3PS$. Substituting $S = 7$ and $P = 9$ yields $7^3 - 3(9)(7) = 343 - 189 = 154$.
    hints:
      - Read off $S = \alpha + \beta$ and $P = \alpha\beta$ directly from the coefficients of $x^2 - 7x + 9 = 0$.
      - Expand $(\alpha + \beta)^3$ (or factor $\alpha^3 + \beta^3 = (\alpha + \beta)(\alpha^2 - \alpha\beta + \beta^2)$) to write $\alpha^3 + \beta^3$ purely in terms of $S$ and $P$.
    assessment:
      kind: numeric
      expected: 154

  - day: 17
    id: 1re-advent-17
    title: The Triple-Redundant Ignition
    topic: Independent events and probability
    format: riddle
    difficulty: hard
    story: Santa's sleigh uses three independent ignition relays so frost cannot abort takeoff—at least two of the three must fire for launch clearance.
    prompt: >-
      The Starlight Sleigh launches safely if **at least two** of its three independent ignition relays $R_1, R_2, R_3$ work. The probabilities that $R_1, R_2, R_3$ work are $\frac{4}{5}$, $\frac{3}{4}$, and $\frac{2}{3}$ respectively. What is the exact probability (as a simplified fraction `a/b`) that the sleigh launches safely?
    solution: >-
      Sum the probabilities of the four mutually exclusive launch outcomes (using independence):
      - All $3$ work: $\frac{4}{5} \times \frac{3}{4} \times \frac{2}{3} = \frac{24}{60}$.
      - $R_1, R_2$ work, $R_3$ fails: $\frac{4}{5} \times \frac{3}{4} \times \frac{1}{3} = \frac{12}{60}$.
      - $R_1, R_3$ work, $R_2$ fails: $\frac{4}{5} \times \frac{1}{4} \times \frac{2}{3} = \frac{8}{60}$.
      - $R_2, R_3$ work, $R_1$ fails: $\frac{1}{5} \times \frac{3}{4} \times \frac{2}{3} = \frac{6}{60}$.
      Adding all four gives $\frac{24 + 12 + 8 + 6}{60} = \frac{50}{60} = \frac{5}{6}$.
    hints:
      - 'Break "at least two work" into four disjoint cases: all three work, or exactly one of $R_1, R_2, R_3$ fails.'
      - Because the relays are independent, multiply the three probabilities along each case over the common denominator $60$.
    assessment:
      kind: exact
      expected: "5/6"

  - day: 18
    id: 1re-advent-18
    title: The Horizon Beacon Bisection
    topic: Bisection algorithm in Python
    format: algorithm
    difficulty: hard
    story: To lock onto the exact root of the horizon-refraction polynomial $f(x) = x^3 + x - 6$ on $[1, 2]$, the flight computer runs four passes of bisection.
    prompt: |
      Trace the following Python bisection loop on $[1, 2]$ and give the exact final value of the lower bound `a` (as a decimal or fraction):

      ```python
      a, b = 1.0, 2.0
      for _ in range(4):
          m = (a + b) / 2
          if m**3 + m - 6 > 0:
              b = m
          else:
              a = m
      ```
    solution: >-
      Let $f(x) = x^3 + x - 6$ (strictly increasing since $f'(x) = 3x^2 + 1 > 0$, with $f(1) = -4 < 0$ and $f(2) = 4 > 0$):
      - Pass $1$: $m = 1.5$, $f(1.5) = 3.375 + 1.5 - 6 = -1.125 < 0 \implies a = 1.5$, interval $[1.5, 2]$.
      - Pass $2$: $m = 1.75$, $f(1.75) = 5.359375 + 1.75 - 6 = 1.109375 > 0 \implies b = 1.75$, interval $[1.5, 1.75]$.
      - Pass $3$: $m = 1.625$, $f(1.625) = 4.291015625 + 1.625 - 6 \approx -0.084 < 0 \implies a = 1.625$, interval $[1.625, 1.75]$.
      - Pass $4$: $m = 1.6875$, $f(1.6875) \approx 4.805 + 1.6875 - 6 > 0 \implies b = 1.6875$, interval $[1.625, 1.6875]$.
      The final lower bound is `a = 1.625` (or $\frac{13}{8}$).
    hints:
      - At each of the $4$ steps, compute the midpoint $m = \frac{a + b}{2}$ and determine only the **sign** of $m^3 + m - 6$.
      - When $f(m) \le 0$, update `a = m`; when $f(m) > 0$, update `b = m`.
    assessment:
      kind: numeric
      expected: 1.625

  - day: 19
    id: 1re-advent-19
    title: The Double-Mirror Spectrometer
    topic: Trigonometric identities
    format: riddle
    difficulty: challenge
    story: A frosted prism only reports the sum $\sin(\alpha) + \cos(\alpha)$, yet the aurora spectrometer needs the exact double-angle value $\sin(2\alpha)$!
    prompt: >-
      For an acute calibration angle $\alpha \in \left]0, \frac{\pi}{2}\right[$, the observatory spectrometer measures $\sin(\alpha) + \cos(\alpha) = \frac{7}{5}$. Find the exact value of $\sin(2\alpha)$ as a simplified fraction `a/b`.
    solution: >-
      Square both sides of $\sin(\alpha) + \cos(\alpha) = \frac{7}{5}$:
      $\sin^2(\alpha) + 2\sin(\alpha)\cos(\alpha) + \cos^2(\alpha) = \frac{49}{25}$.
      Using $\sin^2(\alpha) + \cos^2(\alpha) = 1$ and the double-angle identity $\sin(2\alpha) = 2\sin(\alpha)\cos(\alpha)$ gives $1 + \sin(2\alpha) = \frac{49}{25}$, hence $\sin(2\alpha) = \frac{49}{25} - 1 = \frac{24}{25}$.
    hints:
      - Square both sides of $\sin(\alpha) + \cos(\alpha) = \frac{7}{5}$.
      - Recognize both $\sin^2(\alpha) + \cos^2(\alpha) = 1$ and $2\sin(\alpha)\cos(\alpha) = \sin(2\alpha)$!
    assessment:
      kind: exact
      expected: "24/25"

  - day: 20
    id: 1re-advent-20
    title: The Parabolic Telemetry Window
    topic: Derivative optimization and geometry
    format: puzzle
    difficulty: challenge
    story: Technicians mount the largest possible rectangular star-chart screen beneath the observatory's parabolic dome arch.
    prompt: >-
      A rectangular telemetry screen is inscribed under the parabola $y = 12 - x^2$ above the $x$-axis: its bottom vertices lie on the $x$-axis at $(-x, 0)$ and $(x, 0)$, and its top vertices lie on the parabola at $(-x, 12 - x^2)$ and $(x, 12 - x^2)$, with $0 < x < \sqrt{12}$. What is the **maximum possible area** of the rectangular screen?
    solution: >-
      The rectangle has width $2x$ and height $12 - x^2$, so its area is $A(x) = 2x(12 - x^2) = 24x - 2x^3$ for $x \in ]0, \sqrt{12}[$. Differentiate: $A'(x) = 24 - 6x^2 = 6(4 - x^2) = 6(2 - x)(2 + x)$. On $]0, \sqrt{12}[$, $A'(x) > 0$ on $]0, 2[$ and $A'(x) < 0$ on $]2, \sqrt{12}[$, so the maximum occurs at $x = 2$. The maximum area is $A(2) = 2(2)(12 - 2^2) = 4 \times 8 = 32$.
    hints:
      - Notice the rectangle extends from $-x$ to $+x$, so its width is $2x$ (not $x$) and its height is $12 - x^2$.
      - Differentiate $A(x) = 24x - 2x^3$, find the positive root of $A'(x) = 0$, and substitute back into $A(x)$.
    assessment:
      kind: numeric
      expected: 32

  - day: 21
    id: 1re-advent-21
    title: The 24-Day Relay Board Invariant
    topic: Parity invariant proof
    format: proof
    difficulty: challenge
    story: On the solstice, the relay board displays every Advent number from $1$ to $24$. Repeatedly replacing two numbers by their difference leaves a single number—can it ever be odd?
    prompt: >-
      The integers $1, 2, 3, \dots, 24$ are written on the observatory's diagnostic board. In each step, an engineer selects any two numbers $a$ and $b$ on the board, erases both, and writes $|a - b|$ back on the board. After $23$ steps, only a single integer remains. Prove whether that final integer can ever be **odd**.
    solution: >-
      Consider the sum $S$ of all numbers currently on the board. Initially, $S_0 = 1 + 2 + \dots + 24 = \frac{24 \times 25}{2} = 300$, which is **even**. In any step, suppose we pick $a$ and $b$ with $a \ge b$; replacing $a$ and $b$ by $a - b$ changes the sum by $(a - b) - (a + b) = -2b$, which is always an **even** integer. Therefore, the parity of the sum $S$ is invariant across every step. After $23$ steps, the sum equals the single remaining number, which must share the same parity as $S_0 = 300$. Consequently, the final number is **always even** and can never be odd.
    hints:
      - Compute the initial sum $1 + 2 + \dots + 24$ using the arithmetic-series formula.
      - 'Compare the sum before and after replacing $a$ and $b$ ($a \ge b$) with $a - b$: how much does the total sum change?'
    assessment:
      kind: reasoning
      rubric:
        - Computes the initial sum $S_0 = \frac{24 \times 25}{2} = 300$ and notes that it is even.
        - Proves that replacing $a, b$ ($a \ge b$) by $a - b$ changes the sum by $-2b$ (an even number), so the parity of the sum is invariant.
        - Concludes that the final single remaining number must be even and can never be odd.

  - day: 22
    id: 1re-advent-22
    title: The Sleigh Thruster Recurrence
    topic: Recurrence sequences and dynamic programming
    format: algorithm
    difficulty: challenge
    story: To reach orbital velocity cleanly without overheating the thrusters, the Starlight Sleigh fires $1$-unit or $2$-unit pulses—never firing two $2$-unit pulses back-to-back!
    prompt: >-
      The sleigh must deliver a total impulse of exactly $10$ units using an ordered sequence of pulses, where each pulse is either `1` unit or `2` units (for example, `1-2-1` and `2-1-1` are distinct sequences), with the safety constraint that **two `2`-unit pulses may never occur consecutively**.
      By designing a recurrence (dynamic-programming table) for the number of valid sequences $T_n$ summing to $n$, find the exact number $T_{10}$ of valid thrust sequences summing to $10$.
    solution: >-
      For $n \ge 1$, classify every valid sequence summing to $n$ by its final pulse:
      - If it ends in `1`, removing that `1` leaves any valid sequence summing to $n - 1$ ($T_{n-1}$ ways).
      - If it ends in `2` (for $n \ge 4$), the previous pulse cannot be `2`, so it must end in `1-2`; removing `1-2` leaves any valid sequence summing to $n - 3$ ($T_{n-3}$ ways).
      Hence $T_n = T_{n-1} + T_{n-3}$ for $n \ge 4$, with base values $T_1 = 1$ (`1`), $T_2 = 2$ (`1-1`, `2`), and $T_3 = 3$ (`1-1-1`, `2-1`, `1-2`). Iterating:
      $T_4 = 3 + 1 = 4$, $T_5 = 4 + 2 = 6$, $T_6 = 6 + 3 = 9$, $T_7 = 9 + 4 = 13$, $T_8 = 13 + 6 = 19$, $T_9 = 19 + 9 = 28$, and $T_{10} = 28 + 13 = 41$.
    hints:
      - Compute $T_1, T_2, T_3$ by listing all valid sequences of `1`s and `2`s directly.
      - To form a valid sequence of sum $n \ge 4$, notice it must either end in `1` (after any valid sum $n - 1$) or end in `1-2` (after any valid sum $n - 3$)!
    assessment:
      kind: numeric
      expected: 41

  - day: 23
    id: 1re-advent-23
    title: Optimal Cruising Energy
    topic: Derivatives of rational functions
    format: riddle
    difficulty: challenge
    story: On the eve of launch, flight dynamics engineers tune the sleigh's cruising speed to minimize total starlight-fuel burn per kilometer.
    prompt: |
      At cruising speed $v > 0$ (in $\text{km/min}$), the Starlight Sleigh's energy cost per kilometer is modeled by:

      $$C(v) = 2v^2 + \frac{108}{v}$$

      Find the **minimum possible energy cost** $C(v_{\min})$ per kilometer for $v > 0$.
    solution: >-
      Differentiate on $]0, +\infty[$: $C'(v) = 4v - \frac{108}{v^2} = \frac{4v^3 - 108}{v^2} = \frac{4(v^3 - 27)}{v^2} = \frac{4(v - 3)(v^2 + 3v + 9)}{v^2}$. For $v > 0$, both $v^2$ and $v^2 + 3v + 9$ are strictly positive, so $C'(v)$ has the sign of $v - 3$: negative on $]0, 3[$ and positive on $]3, +\infty[$. Thus $C$ attains its global minimum at $v = 3\text{ km/min}$, with minimum cost $C(3) = 2(3^2) + \frac{108}{3} = 18 + 36 = 54$.
    hints:
      - Differentiate $C(v) = 2v^2 + 108v^{-1}$ and combine over the denominator $v^2$.
      - Solve $C'(v) = 0$ for $v > 0$, verify that it is a minimum, and then compute $C(v)$—not just $v$!
    assessment:
      kind: numeric
      expected: 54

  - day: 24
    id: 1re-advent-24
    title: The Christmas Eve Launch Locus
    topic: Dot product, circle locus, and tangent line
    format: proof
    difficulty: challenge
    story: December 24, 23:59! The Starlight Sleigh sits on the polar launch pad while two magnetic beacons at $A(-4, 0)$ and $B(4, 0)$ define the circular launch orbit—deliver the final launch certification proof!
    prompt: |
      In an orthonormal coordinate plane with origin $O(0, 0)$, two polar beacons stand at $A(-4, 0)$ and $B(4, 0)$. Let $\mathcal{E}$ be the set of all points $M(x, y)$ satisfying:

      $$\overrightarrow{MA} \cdot \overrightarrow{MB} = 9$$

      1. Prove that $\mathcal{E}$ is a circle centered at $O(0, 0)$ and determine its exact radius $R$.
      2. Prove that for every point $M \in \mathcal{E}$, the sum of squared distances $MA^2 + MB^2$ is constant, and find that constant.
      3. Check that $M_0(3, 4) \in \mathcal{E}$, find a Cartesian equation of the tangent line to $\mathcal{E}$ at $M_0$, and verify that this launch trajectory passes directly through the target gate $G(7, 1)$.
    solution: >-
      1. **Circle locus:** With $\overrightarrow{MA} = (-4 - x, -y)$ and $\overrightarrow{MB} = (4 - x, -y)$, the dot product is $\overrightarrow{MA} \cdot \overrightarrow{MB} = (-4 - x)(4 - x) + (-y)(-y) = x^2 - 16 + y^2$. Setting this equal to $9$ yields $x^2 + y^2 = 25 = 5^2$, so $\mathcal{E}$ is the circle centered at $O(0, 0)$ of radius $R = 5$.
      2. **Constant sum of squares:** For any $M(x, y) \in \mathcal{E}$, $MA^2 + MB^2 = (x + 4)^2 + y^2 + (x - 4)^2 + y^2 = 2(x^2 + y^2) + 32 = 2(25) + 32 = 82$ (equivalently by the median theorem, $MA^2 + MB^2 = 2OM^2 + \frac{AB^2}{2} = 2(25) + \frac{64}{2} = 82$).
      3. **Tangent line and gate:** Since $3^2 + 4^2 = 25$, $M_0(3, 4) \in \mathcal{E}$. The tangent at $M_0$ is perpendicular to the radius vector $\overrightarrow{OM_0} = (3, 4)$, so a point $P(x, y)$ lies on the tangent iff $\overrightarrow{M_0 P} \cdot \overrightarrow{OM_0} = 0 \iff 3(x - 3) + 4(y - 4) = 0 \iff 3x + 4y - 25 = 0$. Testing $G(7, 1)$ gives $3(7) + 4(1) - 25 = 21 + 4 - 25 = 0$, confirming the sleigh flies straight through $G(7, 1)$!
    hints:
      - Express $\overrightarrow{MA} \cdot \overrightarrow{MB}$ using coordinates $(x, y)$ and simplify $(-4 - x)(4 - x) = x^2 - 16$.
      - Remember that the tangent to a circle centered at $O$ at $M_0$ has normal vector $\overrightarrow{OM_0}$.
    assessment:
      kind: reasoning
      rubric:
        - Expands $\overrightarrow{MA} \cdot \overrightarrow{MB} = x^2 + y^2 - 16 = 9$ to prove $\mathcal{E}$ is the circle of center $O(0, 0)$ and radius $R = 5$.
        - Proves $MA^2 + MB^2 = 2(x^2 + y^2) + 32 = 82$ (via coordinates or the median theorem) for all $M \in \mathcal{E}$.
        - Verifies $M_0(3, 4) \in \mathcal{E}$, derives the tangent equation $3x + 4y = 25$, and confirms $G(7, 1)$ satisfies it.
---
## Welcome to Operation Starlight

High above the Arctic Circle, the **North Pole Observatory** is counting down to the December 24 launch of Santa's supersonic **Starlight Sleigh**. Every day from **December 1 to December 24**, a new mission dispatch arrives on your desk.

Each door draws from the **Première Spécialité** curriculum—quadratics, sequences, derivatives, the exponential function, trigonometry, dot products, conditional probability, random variables, and Python algorithms—blending festive riddles with optimization challenges and full mathematical proofs.

> Keep scratch paper handy: these 24 challenges reward clean algebraic structure, clever factorizations, and sharp geometric insight!
