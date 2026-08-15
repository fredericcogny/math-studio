---
id: 3e-right-triangle-trigonometry
order: 10
title: Right-Triangle Trigonometry
level: 3e
strand: Geometry and trigonometry
difficulty: core
estimatedMinutes: 45
summary: Choose sine, cosine, or tangent to calculate lengths and angles and to model inaccessible distances.
objectives:
  - Identify the opposite, adjacent, and hypotenuse sides
  - Calculate a length or an acute angle in a right triangle
  - Model a real situation with right-triangle trigonometry
prerequisites:
  - The Pythagorean theorem
  - Solving one-step equations
vocabulary:
  - en: sine
    fr: sinus
    definition: In a right triangle, the ratio of the opposite side to the hypotenuse for a chosen acute angle.
  - en: cosine
    fr: cosinus
    definition: In a right triangle, the ratio of the adjacent side to the hypotenuse for a chosen acute angle.
  - en: tangent
    fr: tangente
    definition: In a right triangle, the ratio of the opposite side to the adjacent side for a chosen acute angle.
  - en: angle of elevation
    fr: angle d'élévation
    definition: The angle measured upward from a horizontal line of sight.
flashcards:
  - front: Which side is always opposite the right angle?
    back: The hypotenuse; it is also the longest side.
  - front: When is tangent usually the shortest choice?
    back: When the known and sought lengths are the opposite and adjacent sides.
  - front: How do you find an angle from a trigonometric ratio?
    back: Use the appropriate inverse function and make sure the calculator is in degree mode.
generator:
  type: quadratic-value
  seed: 30909
  count: 6
  coefficientMin: -6
  coefficientMax: 6
  xMin: -5
  xMax: 5
tieredExercises:
  - id: 3e-trigonometry-t1
    tier: 1
    tierTitle: Direct Application
    curriculumStatus: core
    prompt: "Triangle $ABC$ is right-angled at $A$, $BC=10$ cm, and $\\widehat{ABC}=35^\\circ$. Calculate $AB$ to the nearest tenth of a centimeter."
    solution: "Relative to angle $B$, $AB$ is adjacent and $BC$ is the hypotenuse. Thus $\\cos35^\\circ=AB/10$, so $AB=10\\cos35^\\circ\\approx8.2$ cm."
    hints:
      - "Use cosine because the adjacent side and hypotenuse are involved."
    assessment:
      kind: numeric
      expected: 8.2
      tolerance: 0.05
  - id: 3e-trigonometry-t2
    tier: 2
    tierTitle: Brevet Standard
    curriculumStatus: core
    prompt: "From a point on level ground $24$ m from a vertical tower, an observer's eyes are $1.60$ m above the ground. The angle of elevation to the top is $38^\\circ$. Calculate the tower's height to the nearest tenth of a meter."
    solution: "The vertical rise above eye level is opposite the $38^\\circ$ angle and the horizontal distance is adjacent. If $h$ is the tower height, $\\tan38^\\circ=(h-1.60)/24$. Hence $h=24\\tan38^\\circ+1.60\\approx20.3509$, so the tower is about $20.4$ m high."
    hints:
      - "Draw a horizontal line through the observer's eyes."
      - "Add the eye height only after finding the vertical rise above that line."
    assessment:
      kind: numeric
      expected: 20.4
      tolerance: 0.05
  - id: 3e-trigonometry-t3
    tier: 3
    tierTitle: Synthesis
    curriculumStatus: core
    prompt: "Two observation points $A$ and $B$ lie on the same horizontal line with the foot $F$ of a vertical lighthouse; $B$ is $40$ m closer to $F$ than $A$. The angles of elevation to the top are $25^\\circ$ at $A$ and $40^\\circ$ at $B$. Calculate $BF$ and the lighthouse height to the nearest meter. A third point $C$ on the same horizontal line is $70$ m from $F$. Calculate the angle of elevation to the top from $C$ to the nearest tenth of a degree. Explain your model and keep full calculator precision until each final rounding."
    solution: "Let $x=BF$ and $h$ be the height. Then $AF=x+40$. In the first two right triangles, $\\tan40^\\circ=h/x$ and $\\tan25^\\circ=h/(x+40)$. Thus $x\\tan40^\\circ=(x+40)\\tan25^\\circ$, so $x=40\\tan25^\\circ/(\\tan40^\\circ-\\tan25^\\circ)\\approx50.0341$ m. Then $h=x\\tan40^\\circ\\approx41.9836$ m. To the nearest meter, $BF=50$ m and the lighthouse is $42$ m high. If $\\theta$ is the angle of elevation at $C$, then $\\tan\\theta=h/70$, so $\\theta=\\tan^{-1}(h/70)\\approx30.9539^\\circ$, or $31.0^\\circ$ to the nearest tenth."
    hints:
      - "Use one variable for the shorter horizontal distance."
      - "Express the same height using tangent in both triangles."
      - "At $C$, form the tangent ratio and use inverse tangent to recover the angle."
    assessment:
      kind: reasoning
      rubric:
        - "Defines coherent variables and identifies $AF=BF+40$."
        - "Writes the two correct tangent equations."
        - "Solves the resulting equation and obtains approximately $BF=50$ m and $h=42$ m."
        - "Uses inverse tangent with the unrounded height and $CF=70$ m to obtain an angle of elevation of $31.0^\\circ$."
  - id: 3e-trigonometry-t4
    tier: 4
    tierTitle: Advanced Challenge
    curriculumStatus: olympiad
    prompt: "A right triangle has hypotenuse $10$ and an acute angle $\\theta$. Prove, without using calculus, that its perimeter is at most $10(1+\\sqrt2)$ and its area is at most $25$. Determine exactly when each maximum is reached."
    solution: "The legs are $10\\cos\\theta$ and $10\\sin\\theta$. The perimeter is $P=10(1+\\sin\\theta+\\cos\\theta)$. Since $(\\sin\\theta-\\cos\\theta)^2\\ge0$, we have $\\sin^2\\theta+\\cos^2\\theta\\ge2\\sin\\theta\\cos\\theta$, hence $1\\ge2\\sin\\theta\\cos\\theta$. Also $(\\sin\\theta+\\cos\\theta)^2=1+2\\sin\\theta\\cos\\theta\\le2$, so $\\sin\\theta+\\cos\\theta\\le\\sqrt2$. Therefore $P\\le10(1+\\sqrt2)$. The area is $A=(1/2)(10\\sin\\theta)(10\\cos\\theta)=50\\sin\\theta\\cos\\theta\\le25$. Equality in both inequalities requires $\\sin\\theta=\\cos\\theta$, hence $\\theta=45^\\circ$. Thus both maxima occur exactly for the isosceles right triangle."
    hints:
      - "Express both legs in terms of $\\theta$ and the hypotenuse."
      - "Expand $(\\sin\\theta-\\cos\\theta)^2\\ge0$."
      - "Track the equality condition, not only the inequalities."
    assessment:
      kind: reasoning
      rubric:
        - "Expresses the legs, perimeter, and area correctly using sine and cosine."
        - "Derives $2\\sin\\theta\\cos\\theta\\le1$ from a nonnegative square."
        - "Proves both requested upper bounds without calculus."
        - "Establishes that equality occurs exactly when $\\theta=45^\\circ$."
---
# Right-Triangle Trigonometry

## Three ratios for one acute angle

Fix an acute angle $\theta$ in a right triangle. Name the sides relative to that angle: the **hypotenuse** is opposite the right angle, the **opposite** side faces $\theta$, and the **adjacent** side touches $\theta$ but is not the hypotenuse.

$$\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}},\qquad
\cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}},\qquad
\tan\theta=\frac{\text{opposite}}{\text{adjacent}}.$$

The labels opposite and adjacent change when the chosen angle changes. The hypotenuse does not.

## Method selection

Circle the known length and the sought length. Then choose the ratio containing exactly those two side types:

| Sides involved | Ratio |
| --- | --- |
| opposite and hypotenuse | sine |
| adjacent and hypotenuse | cosine |
| opposite and adjacent | tangent |

To find an angle, first calculate a ratio, then use $\sin^{-1}$, $\cos^{-1}$, or $\tan^{-1}$. These mean inverse functions, not reciprocals.

## Worked examples

In a right triangle, an angle is $52^\circ$ and its adjacent leg is $7$ cm. If $x$ is the hypotenuse,

$$\cos52^\circ=\frac7x\quad\Longrightarrow\quad x=\frac7{\cos52^\circ}\approx11.4\text{ cm}.$$

If instead the opposite and adjacent legs are $9$ cm and $12$ cm, then

$$\tan\theta=\frac9{12}=0.75,
\qquad \theta=\tan^{-1}(0.75)\approx36.9^\circ.$$

Keep full calculator precision until the final line.

## Modeling an inaccessible height

Draw a right triangle whose horizontal leg is the measured ground distance and whose vertical leg is the unknown rise. An angle of elevation is measured from the horizontal. If the instrument is above ground level, calculate the rise above the instrument first, then add its height.

## Common errors

- Calling the longer leg the hypotenuse: only the side opposite the right angle is the hypotenuse.
- Naming opposite and adjacent before choosing the reference angle.
- Using the calculator in radian mode when the data are in degrees.
- Rounding a ratio too early or forgetting an observer's eye height.
- Writing $\tan\theta=\text{adjacent}/\text{opposite}$ instead of the reverse.

## Extension: useful identities

The Pythagorean theorem applied after dividing all lengths by the hypotenuse gives

$$\sin^2\theta+\cos^2\theta=1.$$

Also, when $\cos\theta\ne0$,

$$\tan\theta=\frac{\sin\theta}{\cos\theta}.$$

These identities connect the three ratios and can turn geometric optimization questions into algebraic proofs.
