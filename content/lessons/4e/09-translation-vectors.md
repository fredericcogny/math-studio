---
id: 4e-translation-vectors
order: 9
title: Translation and vectors
level: 4e
strand: Geometry
difficulty: core
estimatedMinutes: 20
summary: Understand translation as a rigid motion described by a vector and learn to add vectors graphically.
objectives:
  - Describe a translation using vector notation
  - Identify and construct equal vectors
  - Add vectors graphically using the tip-to-tail method
prerequisites:
  - Coordinate plane reading
  - Basic geometric transformations
vocabulary:
  - en: translation
    fr: translation
    definition: A geometric transformation that slides every point of a figure by the same distance in the same direction.
  - en: vector
    fr: vecteur
    definition: A mathematical object with both magnitude and direction, represented by an arrow.
  - en: image
    fr: image
    definition: The point or figure obtained after applying a transformation.
flashcards:
  - front: What information does a vector carry?
    back: A vector carries a direction, a sense (orientation), and a magnitude (length). It does not carry a fixed position.
  - front: How do you write the vector from point $A$ to point $B$?
    back: $\vec{AB}$. Its magnitude is the distance $AB$.
  - front: When are two vectors equal?
    back: Two vectors are equal when they have the same direction, the same sense, and the same magnitude.
generator:
  type: signed-arithmetic
  seed: 40901
  count: 6
  min: -10
  max: 10
tieredExercises:
  - id: "4e-transvec-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Point $A$ has coordinates $(2, 3)$. The translation vector is $\\vec{u}=(4, -1)$. Find the coordinates of the image $A'$ of $A$."
    solution: "$A'=(2+4,\\; 3+(-1))=(6, 2)$."
    hints:
      - "Add each component of the vector to the corresponding coordinate of the point."
    assessment:
      kind: "exact"
      expected: "(6, 2)"
  - id: "4e-transvec-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Triangle $ABC$ has vertices $A(1,1)$, $B(4,1)$, $C(1,5)$. It is translated by $\\vec{v}=(3,-2)$. Find the coordinates of $A'$, $B'$, $C'$ and compute the length $A'B'$."
    solution: "$A'=(1+3,1-2)=(4,-1)$, $B'=(4+3,1-2)=(7,-1)$, $C'=(1+3,5-2)=(4,3)$. The length $A'B'=\\sqrt{(7-4)^2+(-1-(-1))^2}=\\sqrt{9}=3$, which equals $AB$."
    hints:
      - "Apply the translation vector to each vertex separately."
      - "A translation preserves distances, so $A'B'=AB$."
    assessment:
      kind: "numeric"
      expected: 3
  - id: "4e-transvec-t3"
    tier: 3
    tierTitle: "Official Core Synthesis"
    curriculumStatus: "core"
    prompt: "On a grid, $A(0,0)$, $B(3,2)$, and $C(1,4)$. The image of $A$ under a translation is $A'(2,3)$. Find the translation vector, the images $B'$ and $C'$, and verify that $\\vec{AB}=\\vec{A'B'}$."
    solution: "The translation vector is $\\vec{u}=\\vec{AA'}=(2-0,3-0)=(2,3)$. Then $B'=(3+2,2+3)=(5,5)$ and $C'=(1+2,4+3)=(3,7)$. We check: $\\vec{AB}=(3,2)$ and $\\vec{A'B'}=(5-2,5-3)=(3,2)$. They are equal."
    hints:
      - "The translation vector is $\\vec{AA'}$."
      - "Equal vectors have the same components."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly determines the translation vector from A and A'."
        - "Computes B' and C' accurately."
        - "Verifies that the corresponding vectors are equal."
  - id: "4e-transvec-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Two successive translations are applied: first $\\vec{u}=(a,b)$, then $\\vec{v}=(c,d)$. Prove that the composition is a translation by $\\vec{u}+\\vec{v}=(a+c,b+d)$. Then find $\\vec{u}$ and $\\vec{v}$ if $\\vec{u}+\\vec{v}=(5,1)$ and the image of $(0,0)$ after the first translation lies on the line $y=x$."
    solution: "Let $P=(x,y)$. After the first translation, $P_1=(x+a,y+b)$. After the second, $P_2=(x+a+c,y+b+d)$. This equals $(x+(a+c),y+(b+d))$, so the composition is a translation by $(a+c,b+d)=\\vec{u}+\\vec{v}$. For the second part, the image of $(0,0)$ after $\\vec{u}$ is $(a,b)$. It lies on $y=x$, so $b=a$. Also $a+c=5$ and $b+d=1$, giving $a+d=1$ since $b=a$, so $d=1-a$ and $c=5-a$. One solution: $a=2$, giving $\\vec{u}=(2,2)$ and $\\vec{v}=(3,-1)$."
    hints:
      - "Apply each translation in sequence to a general point $(x,y)$."
      - "The condition $y=x$ on the intermediate image gives $b=a$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Proves the composition formula by applying both translations to a general point."
        - "Correctly uses the constraint that the intermediate image lies on y = x."
        - "Provides a valid pair of vectors satisfying all conditions."
---
## What is a translation?

A **translation** slides every point of the plane by the same distance in the same direction. Nothing rotates, nothing flips, and no distances change. A translation is fully described by a **vector**.

A vector $\vec{u}$ carries three pieces of information: a **direction** (the line it follows), a **sense** (which way along that line), and a **magnitude** (how far). Unlike a point, a vector has no fixed starting position: you can draw it anywhere and it remains the same vector.

## Vector notation

The vector from point $A$ to point $B$ is written $\vec{AB}$. Its components on a coordinate grid are:

$$\vec{AB} = (x_B - x_A,\; y_B - y_A)$$

If $A(1,2)$ and $B(4,5)$, then $\vec{AB}=(3,3)$. The magnitude is $\|\vec{AB}\|=\sqrt{3^2+3^2}=3\sqrt{2}$.

## Equal vectors

Two vectors are **equal** when they share the same direction, sense, and magnitude. On the coordinate plane, $\vec{AB}=\vec{CD}$ exactly when they have the same components. This is the key idea behind translation: every point moves by the same vector, so $\vec{AA'}=\vec{BB'}=\vec{CC'}$ for all original-image pairs.

## Adding vectors

To add $\vec{u}$ and $\vec{v}$, place the tail of $\vec{v}$ at the tip of $\vec{u}$. The sum $\vec{u}+\vec{v}$ goes from the tail of $\vec{u}$ to the tip of $\vec{v}$. In coordinates:

$$(a,b)+(c,d)=(a+c,\;b+d)$$

Two successive translations by $\vec{u}$ then $\vec{v}$ produce the same result as a single translation by $\vec{u}+\vec{v}$.

### Stretch thought

If $\vec{AB}=\vec{DC}$, what can you say about the quadrilateral $ABCD$? Sketch several examples and look for a pattern.
