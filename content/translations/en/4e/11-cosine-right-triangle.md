---
id: 4e-cosine-right-triangle
locale: en
title: Cosine of an Acute Angle
strand: Geometry
summary: Define the cosine ratio in a right triangle and use it to compute unknown sides and angles.
objectives:
  - Define cosine as adjacent over hypotenuse in a right triangle
  - Calculate a side length using cosine
  - Find an angle using the inverse cosine function
prerequisites:
  - Right triangle properties
  - Pythagorean theorem
vocabulary:
  - en: cosine
    definition: In a right triangle, the ratio of the length of the side adjacent to an acute angle to the length of the hypotenuse.
  - en: adjacent side
    definition: The side of a right triangle that forms the acute angle together with the hypotenuse (it is not the opposite side).
  - en: acute angle
    definition: An angle whose measure is strictly between 0° and 90°.
flashcards:
  - front: What is the formula for cosine in a right triangle?
    back: $\cos(\alpha) = \dfrac{\text{adjacent side}}{\text{hypotenuse}}$
  - front: If $\cos(\alpha)=0.6$ and the hypotenuse is $15$, what is the adjacent side?
    back: Adjacent $= 15 \times 0.6 = 9$.
  - front: How do you find an angle when you know the cosine value?
    back: Use the inverse cosine function. If $\cos(\alpha)=0.8$, then $\alpha = \cos^{-1}(0.8) \approx 36.9°$.
exercises:
  - id: 4e-cosrt-t1
    tierTitle: Direct Application
    prompt: In a right triangle with hypotenuse $10$ and an angle of $60°$, find the length of the side adjacent to that angle. Use $\cos(60°)=0.5$.
    solution: $\cos(60°)=\frac{\text{adjacent}}{10}=0.5$, so the adjacent side $=10\times 0.5=5$.
    hints:
      - Write the cosine formula and substitute the known values.
  - id: 4e-cosrt-t2
    tierTitle: Standard Practice
    prompt: A ladder $6$ m long leans against a wall, making an angle of $35°$ with the ground. How far is the foot of the ladder from the wall? Use $\cos(35°)\approx 0.819$. Then use the Pythagorean theorem to find how high up the wall the ladder reaches.
    solution: The distance from the wall is $d=6\times\cos(35°)\approx 6\times 0.819=4.914$ m, rounded to $4.9$ m. The height is $h=\sqrt{6^2-4.914^2}=\sqrt{36-24.15}=\sqrt{11.85}\approx 3.4$ m.
    hints:
      - The ladder is the hypotenuse; the ground distance is the adjacent side.
      - Once you have two sides, use $a^2+b^2=c^2$ for the third.
  - id: 4e-cosrt-t3
    tierTitle: Official Core Synthesis
    prompt: In right triangle $ABC$ with the right angle at $C$, $AB=13$ and $BC=5$. Find angle $\widehat{ABC}$ using cosine, then verify your answer using the Pythagorean theorem to find $AC$ and checking with another trigonometric ratio.
    solution: $\cos(\widehat{ABC})=\frac{BC}{AB}=\frac{5}{13}\approx 0.3846$. So $\widehat{ABC}=\cos^{-1}(0.3846)\approx 67.4°$. By Pythagoras, $AC=\sqrt{169-25}=12$. Check $\cos(\widehat{BAC})=\frac{12}{13}\approx 0.923$, giving $\widehat{BAC}\approx 22.6°$. And $67.4°+22.6°=90°$.
    hints:
      - Identify which side is adjacent to the angle you want and which is the hypotenuse.
      - The two acute angles in a right triangle sum to 90°.
    rubric:
      - Correctly identifies adjacent side and hypotenuse for the angle.
      - Computes the angle using inverse cosine.
      - Verifies the result using the Pythagorean theorem and angle sum property.
  - id: 4e-cosrt-t4
    tierTitle: Advanced Challenge
    prompt: In triangle $ABC$, the angle at $A$ is $60°$ and $AB=AC=10$. Drop the perpendicular from $A$ to $BC$, meeting $BC$ at $H$. Using cosine, find $BH$, then $BC$, and finally the area of triangle $ABC$. Express the area exactly.
    solution: >-
      Since $ABC$ is isosceles with $AB=AC$ and $\widehat{A}=60°$, the triangle is equilateral. Then $BH=\frac{BC}{2}=5$. The height $AH=\sqrt{10^2-5^2}=5\sqrt{3}$. The area is $\frac{1}{2}\times 10\times 5\sqrt{3}=25\sqrt{3}$.
    hints:
      - Check whether the triangle might be equilateral.
      - In an equilateral triangle, the height equals $\frac{s\sqrt{3}}{2}$ where $s$ is the side length.
    rubric:
      - Recognises that the triangle is equilateral.
      - Correctly computes BH and the height AH.
      - Gives the exact area as $25\sqrt{3}$.
---
## Cosine in a Right Triangle

In a right triangle, the **cosine** of an acute angle is the ratio of the length of the **adjacent side** to the length of the **hypotenuse**:

$$\cos(\alpha) = \frac{\text{adjacent}}{\text{hypotenuse}}$$

The hypotenuse is always the longest side, opposite the right angle. The adjacent side is the side that helps form the angle $\alpha$ (and is not the hypotenuse). The remaining side, across from $\alpha$, is called the **opposite side**.

## Computing a Side From an Angle

If you know an acute angle and the hypotenuse, you can find the adjacent side:

$$\text{adjacent} = \text{hypotenuse} \times \cos(\alpha)$$

For example, if the hypotenuse is $10$ and $\alpha=60°$, then the adjacent side is $10\times\cos(60°)=10\times 0.5=5$.

## Finding an Angle From Cosine

If you know two sides, compute the cosine ratio, then use the inverse cosine function (written $\cos^{-1}$ or $\arccos$) to find the angle:

$$\alpha = \cos^{-1}\!\left(\frac{\text{adjacent}}{\text{hypotenuse}}\right)$$

Since cosine decreases from $1$ to $0$ as the angle goes from $0°$ to $90°$, a larger cosine value corresponds to a smaller angle.

## Connection to the Pythagorean Theorem

The Pythagorean theorem gives $a^2+b^2=c^2$ where $c$ is the hypotenuse. If you find one leg using cosine, you can find the other using Pythagoras:

$$\text{opposite} = \sqrt{\text{hypotenuse}^2 - \text{adjacent}^2}$$

This combination of cosine and Pythagoras lets you solve any right triangle when you know one acute angle and one side.

### Stretch Thought

The cosine of $45°$ is $\frac{\sqrt{2}}{2}\approx 0.707$. Can you draw a right triangle where both acute angles are $45°$ and verify this value using the Pythagorean theorem?
