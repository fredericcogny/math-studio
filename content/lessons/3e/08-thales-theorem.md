---
id: 3e-thales-theorem
order: 9
title: Thales' Theorem and Its Converse
level: 3e
strand: Geometry
difficulty: core
estimatedMinutes: 40
summary: Use proportional lengths to calculate missing measures and to prove that lines are parallel.
objectives:
  - Recognize direct and crossed Thales configurations
  - Calculate a missing length using Thales' theorem
  - Prove parallelism using the converse of Thales' theorem
prerequisites:
  - Ratios and cross multiplication
  - Collinearity and parallel lines
vocabulary:
  - en: Thales' theorem
    fr: théorème de Thalès
    definition: Parallel lines cutting two secants determine proportional corresponding lengths.
  - en: converse
    fr: réciproque
    definition: A statement obtained by exchanging the hypothesis and conclusion of a theorem.
  - en: corresponding lengths
    fr: longueurs correspondantes
    definition: Lengths occupying matching positions in two similar configurations.
  - en: secant
    fr: sécante
    definition: A line that intersects two or more other lines.
flashcards:
  - front: What must be checked before applying Thales' theorem?
    back: The alignments of the points and the parallelism of the two lines.
  - front: What does the converse of Thales' theorem prove?
    back: It proves that two lines are parallel when the points are aligned in the same order and the corresponding ratios are equal.
  - front: Why must corresponding lengths be written in the same order?
    back: Mixing a whole length with a matching segment creates a false proportion.
generator:
  type: linear-equation
  seed: 30808
  count: 6
  coefficientMin: -8
  coefficientMax: 8
  solutionMin: -10
  solutionMax: 10
  offsetMin: -12
  offsetMax: 12
tieredExercises:
  - id: 3e-thales-t1
    tier: 1
    tierTitle: Direct Application
    curriculumStatus: core
    prompt: "In triangle $ABC$, $M$ lies on $[AB]$, $N$ lies on $[AC]$, and $(MN)\\parallel(BC)$. Given $AM=4$ cm, $AB=10$ cm, and $AN=6$ cm, calculate $AC$."
    solution: "Thales' theorem gives $AM/AB=AN/AC$. Thus $4/10=6/AC$, so $AC=6\\times10/4=15$ cm."
    hints:
      - "Write $AM/AB=AN/AC$ before substituting values."
    assessment:
      kind: numeric
      expected: 15
  - id: 3e-thales-t2
    tier: 2
    tierTitle: Brevet Standard
    curriculumStatus: core
    prompt: "In triangle $ABC$, $M\\in[AB]$, $N\\in[AC]$, and $(MN)\\parallel(BC)$. The lengths are $AM=4.5$ cm, $AB=7.5$ cm, $AN=6$ cm, and $BC=8$ cm. Calculate $AC$ and $MN$."
    solution: "The hypotheses allow Thales' theorem: $AM/AB=AN/AC=MN/BC$. The scale factor is $4.5/7.5=0.6$. Hence $6/AC=0.6$, so $AC=10$ cm, and $MN/8=0.6$, so $MN=4.8$ cm."
    hints:
      - "Identify the reduction factor from triangle $ABC$ to triangle $AMN$."
      - "Use that same factor once for $AC$ and once for $MN$."
    assessment:
      kind: exact
      expected: "AC = 10 cm, MN = 4.8 cm"
      accepted:
        - "10 cm and 4.8 cm"
        - "10, 4.8"
  - id: 3e-thales-t3
    tier: 3
    tierTitle: Synthesis
    curriculumStatus: core
    prompt: "In triangle $ABC$, points $D\\in[AB]$ and $E\\in[AC]$ satisfy $AD=6$ cm, $AB=10$ cm, $AE=7.5$ cm, and $AC=12.5$ cm. Prove that $(DE)\\parallel(BC)$. If $DE=5.4$ cm, then calculate $BC$."
    solution: "The points are aligned in the same order. Moreover, $AD/AB=6/10=0.6$ and $AE/AC=7.5/12.5=0.6$. By the converse of Thales' theorem, $(DE)\\parallel(BC)$. Thales' theorem then gives $DE/BC=0.6$, so $BC=5.4/0.6=9$ cm."
    hints:
      - "Compare $AD/AB$ and $AE/AC$ exactly."
      - "After proving parallelism, apply the direct theorem."
    assessment:
      kind: reasoning
      rubric:
        - "Checks the alignments and computes both ratios as $0.6$."
        - "Invokes the converse of Thales' theorem to prove parallelism."
        - "Uses the direct theorem to obtain $BC=9$ cm."
  - id: 3e-thales-t4
    tier: 4
    tierTitle: Advanced Challenge
    curriculumStatus: olympiad
    prompt: "In triangle $ABC$, points $M\\in[AB]$ and $N\\in[AC]$ satisfy $AM=MB/2$ and $AN=NC/2$. Lines $BN$ and $CM$ meet at $P$. Prove that $(MN)\\parallel(BC)$. Then identify the directed factor of the homothety centered at $P$ that sends $B$ to $N$ and $C$ to $M$, and deduce $BP=3PN$ and $CP=3PM$. Finally, prove that line $AP$ bisects segment $[MN]$."
    solution: "From $AM=MB/2$, we get $AB=3AM$, hence $AM/AB=1/3$; similarly $AN/AC=1/3$. The converse of Thales' theorem gives $(MN)\\parallel(BC)$ and $MN/BC=1/3$. Since $B,P,N$ are aligned with $P$ between $B$ and $N$, and $C,P,M$ are aligned with $P$ between $C$ and $M$, the homothety centered at $P$ sends $B$ to $N$ and $C$ to $M$ with directed factor $-1/3$, not $1/3$. Thus the length ratios are $PN/PB=PM/PC=1/3$, giving $BP=3PN$ and $CP=3PM$. Let $D$ be the midpoint of $[BC]$ and $Q$ the midpoint of $[MN]$. The homothety centered at $A$ with factor $1/3$ sends $B,C,D$ to $M,N,Q$, so $A,D,Q$ are aligned. The homothety centered at $P$ with factor $-1/3$ sends $B,C,D$ to $N,M,Q$, so $P,D,Q$ are aligned. Hence both lines are $(DQ)$, so $A,P,Q$ are aligned and $AP$ passes through the midpoint $Q$ of $[MN]$."
    hints:
      - "First turn each condition into a ratio with the whole side."
      - "The image points lie on the opposite rays from $P$, so the factor centered at $P$ is negative."
      - "Track the image of the midpoint of $[BC]$ under both homotheties."
    assessment:
      kind: reasoning
      rubric:
        - "Derives the ratios $AM/AB=AN/AC=1/3$ and proves $MN\\parallel BC$."
        - "Identifies the directed factor $-1/3$ at $P$ and uses its absolute value to prove both $3:1$ length ratios."
        - "Introduces the midpoints of $[BC]$ and $[MN]$ and tracks them under both homotheties."
        - "Concludes rigorously that $AP$ bisects $[MN]$."
---
# Thales' Theorem and Its Converse

## The theorem: parallelism gives ratios

In triangle $ABC$, suppose $M$ lies on line $(AB)$, $N$ lies on line $(AC)$, and $(MN)\parallel(BC)$. Then **Thales' theorem** states

$$\frac{AM}{AB}=\frac{AN}{AC}=\frac{MN}{BC}.$$

The small triangle $AMN$ is a scaled copy of $ABC$. The common ratio is its scale factor. The same statement applies when $M$ and $B$, or $N$ and $C$, lie on opposite sides of $A$ (the crossed or "bow tie" configuration), provided the alignments and correspondence are correct.

## Worked example: calculate a missing length

Let $AM=3.6$ cm, $AB=6$ cm, $AC=8.5$ cm, with $MN\parallel BC$. Since $A,M,B$ are aligned and $A,N,C$ are aligned,

$$\frac{AM}{AB}=\frac{AN}{AC}.$$

Therefore

$$AN=8.5\times\frac{3.6}{6}=5.1\text{ cm}.$$

The answer is smaller than $AC$, as expected because the scale factor $0.6$ is less than $1$.

## The converse: ratios give parallelism

Suppose $A,M,B$ and $A,N,C$ are aligned **in the same order**. If

$$\frac{AM}{AB}=\frac{AN}{AC},$$

then the **converse of Thales' theorem** proves $(MN)\parallel(BC)$.

The direct theorem calculates lengths once parallelism is known. The converse proves parallelism once equal ratios are known. Decide which information the problem gives before choosing the method.

## A reliable method

1. State the two alignments and the parallel lines, or the same-order condition for the converse.
2. Write corresponding ratios before inserting numbers.
3. Use cross multiplication and keep units.
4. Check whether the size of the answer matches an enlargement or a reduction.

## Common errors

- Writing $AM/MB$ opposite $AN/AC$: $MB$ is only a remainder, whereas $AC$ is a whole side.
- Using the converse without checking the order of points.
- Assuming that a diagram drawn with parallel-looking lines proves parallelism.
- Rounding intermediate ratios when exact fractions are available.

## Extension: homotheties behind the theorem

The transformation centered at $A$ that sends $B$ to $M$ also sends $C$ to $N$. It is a homothety, and its factor is $AM/AB$. Homotheties send lines not through their center to parallel lines; this explains both the parallelism and the equality of all three ratios.
