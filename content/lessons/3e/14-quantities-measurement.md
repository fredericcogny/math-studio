---
id: 3e-quantities-measurement
order: 14
title: Quantities, compound units, and volumes
level: 3e
strand: Quantities and measurement
difficulty: core
estimatedMinutes: 50
summary: Convert compound and powered units, calculate speed, flow rate, density, and solid volumes, and check every model dimensionally.
objectives:
  - Interpret and convert compound units for speed, flow rate, and density
  - Convert area, volume, and capacity units without losing squared or cubed factors
  - Calculate volumes of prisms, cylinders, cones, pyramids, and balls
  - Solve multi-step measurement problems with compatible units and suitable precision
  - Use dimensions and orders of magnitude to validate formulas and results
prerequisites:
  - Proportional reasoning and unit rates
  - Areas of rectangles, triangles, and disks
  - Powers of ten and calculator use
vocabulary:
  - en: compound unit
    fr: unité composée
    definition: A unit formed by multiplying or dividing units for different quantities, such as km/h or kg/m$^3$.
  - en: speed
    fr: vitesse
    definition: Distance traveled per unit of time.
  - en: flow rate
    fr: débit
    definition: Volume passing a point per unit of time.
  - en: density
    fr: masse volumique
    definition: Mass per unit of volume.
  - en: dimensional check
    fr: vérification dimensionnelle
    definition: A check that the units produced by a formula match the quantity being calculated.
flashcards:
  - front: How do you convert a speed from m/s to km/h?
    back: Multiply by $3.6$; divide by $3.6$ for the reverse conversion.
  - front: What is the connection between liters and cubic units?
    back: $1\text{ L}=1\text{ dm}^3$ and $1\text{ mL}=1\text{ cm}^3$.
  - front: What happens to the conversion factor when converting square or cubic units?
    back: The length conversion factor is squared for area and cubed for volume.
  - front: What are the volume formulas for a prism and a pyramid with base area $B$ and perpendicular height $h$?
    back: $V=Bh$ for a prism and $V=\frac13Bh$ for a pyramid.
  - front: How can units test the formula $m=\rho V$?
    back: For example, $(\text{kg}/\text{m}^3)\times\text{m}^3=\text{kg}$, which is a mass unit.
generator:
  type: signed-arithmetic
  seed: 31314
  count: 8
  min: 1
  max: 20
tieredExercises:
  - id: 3e-quantities-measurement-t1
    tier: 1
    tierTitle: Direct Application
    curriculumStatus: core
    prompt: A sample has mass $540\text{ g}$ and volume $200\text{ cm}^3$. Calculate its density in $\text{g}/\text{cm}^3$.
    solution: '$\rho=\frac mV=\frac{540\text{ g}}{200\text{ cm}^3}=2.7\text{ g}/\text{cm}^3$.'
    hints:
      - Density is mass divided by volume.
      - Keep the quotient unit $\text{g}/\text{cm}^3$.
    assessment:
      kind: numeric
      expected: 2.7
      tolerance: 0.001
  - id: 3e-quantities-measurement-t2
    tier: 2
    tierTitle: Brevet-Standard Tank Problem
    curriculumStatus: core
    prompt: A cylindrical tank of internal radius $0.60\text{ m}$ and height $1.50\text{ m}$ is empty. A pump supplies water at $30\text{ L/min}$. Calculate the tank capacity in liters, then the filling time in minutes. Give exact answers in terms of $\pi$ and a practical time rounded up to the next whole minute.
    solution: 'The volume is $V=\pi r^2h=\pi\times0.60^2\times1.50=0.54\pi\text{ m}^3=540\pi\text{ L}$. The filling time is $t=V/q=\frac{540\pi\text{ L}}{30\text{ L/min}}=18\pi\text{ min}\approx56.55\text{ min}$. The pump must run for $57$ whole minutes to fill the tank.'
    hints:
      - Calculate the cylinder volume in cubic meters before converting it to liters.
      - Use $1\text{ m}^3=1000\text{ L}$ and $t=V/q$.
      - A practical whole-minute running time must be rounded up.
    assessment:
      kind: reasoning
      rubric:
        - Calculates the cylinder volume as $0.54\pi\text{ m}^3$.
        - Converts the capacity correctly to $540\pi\text{ L}$.
        - Divides by the flow rate to obtain $18\pi$ minutes, approximately $56.55$ minutes.
        - Interprets the context and rounds up to $57$ whole minutes.
  - id: 3e-quantities-measurement-t3
    tier: 3
    tierTitle: Volume and Density Synthesis
    curriculumStatus: core
    prompt: A solid metal part consists of a cylinder of radius $3\text{ cm}$ and height $10\text{ cm}$ topped by a cone with the same base radius and perpendicular height $4\text{ cm}$. The metal density is $7.8\text{ g}/\text{cm}^3$. Calculate the exact volume, then the mass in kilograms rounded to the nearest $0.01\text{ kg}$. Include a dimensional check.
    solution: 'The cylinder volume is $\pi\times3^2\times10=90\pi\text{ cm}^3$. The cone volume is $\frac13\pi\times3^2\times4=12\pi\text{ cm}^3$. Thus $V=102\pi\text{ cm}^3$. The mass is $m=\rho V=7.8\times102\pi\text{ g}=795.6\pi\text{ g}\approx2499.45\text{ g}=2.49945\text{ kg}$, which rounds to $2.50\text{ kg}$. Dimensionally, $(\text{g}/\text{cm}^3)\times\text{cm}^3=\text{g}$, as required.'
    hints:
      - Add the cylinder and cone volumes because their interiors do not overlap.
      - Keep $\pi$ until the final approximation.
      - Multiply density by volume, then convert grams to kilograms.
    assessment:
      kind: reasoning
      rubric:
        - Calculates the cylinder and cone volumes as $90\pi\text{ cm}^3$ and $12\pi\text{ cm}^3$.
        - Obtains the exact total volume $102\pi\text{ cm}^3$.
        - Uses $m=\rho V$ and obtains a mass that rounds to $2.50\text{ kg}$.
        - Shows that the volume units cancel in the density calculation to leave a mass unit.
  - id: 3e-quantities-measurement-t4
    tier: 4
    tierTitle: Olympiad Optimization Challenge
    curriculumStatus: olympiad
    prompt: A closed right circular cylinder has positive integer radius $r$ and height $h$, measured in centimeters, and volume $360\pi\text{ cm}^3$. Determine the dimensions that minimize its total surface area. Prove that no other allowed cylinder uses less material.
    solution: 'The volume condition gives $\pi r^2h=360\pi$, so $r^2h=360$. Since $360=2^3\times3^2\times5$, the positive integers whose squares divide $360$ are exactly $r=1,2,3,6$. The corresponding heights are $h=360,90,40,10$. For a closed cylinder, $S=2\pi r^2+2\pi rh=2\pi(r^2+rh)$. The values of $S/(2\pi)$ are respectively $361,184,129,96$. The minimum is therefore $96$, attained for $r=6$ and $h=10$, so the minimum surface area is $192\pi\text{ cm}^2$. The prime factorization proves the radius list exhaustive, and each radius determines one height, so no allowed cylinder is missing.'
    hints:
      - Cancel $\pi$ in the volume condition and determine when $r^2$ divides $360$.
      - Use the prime factorization of $360$ to prove that the possible radii form a complete list.
      - A closed cylinder has two circular bases and one lateral surface.
    assessment:
      kind: reasoning
      rubric:
        - Derives the integer constraint $r^2h=360$.
        - Proves that the only possible radii are $1,2,3,6$ and finds their heights.
        - Compares all surface areas using $S=2\pi r^2+2\pi rh$ and obtains $192\pi\text{ cm}^2$ for $(r,h)=(6,10)$.
        - Uses prime factorization and exhaustive comparison to prove global optimality.
---
## Quantities and Compound Units

A numerical value is meaningful only with its unit. A **compound unit** combines units by multiplication or division. Speed uses distance per time, flow rate uses volume per time, and density uses mass per volume:

$$v=\frac dt,\qquad q=\frac Vt,\qquad \rho=\frac mV.$$

Rearranging gives $d=vt$, $V=qt$, and $m=\rho V$. Units behave like algebraic factors. If $v$ is in km/h and $t$ is in hours, then

$$\frac{\text{km}}{\text{h}}\times\text{h}=\text{km}.$$

This cancellation is a dimensional check, not an optional decoration.

## Speed Conversions

Because $1\text{ km}=1000\text{ m}$ and $1\text{ h}=3600\text{ s}$,

$$1\text{ m/s}=\frac{1\text{ m}}{1\text{ s}}
=\frac{0.001\text{ km}}{1/3600\text{ h}}
=3.6\text{ km/h}.$$

Multiply by $3.6$ from m/s to km/h and divide by $3.6$ in the reverse direction. Thus $72\text{ km/h}=20\text{ m/s}$.

Average speed is total distance divided by total time. It is generally not the average of two speeds. A traveler covering $60$ km at $30$ km/h and another $60$ km at $60$ km/h takes $2+1=3$ h, so the average speed is $120/3=40$ km/h.

## Flow Rate and Density

For a constant flow rate,

$$q=\frac Vt,\qquad V=qt,
\qquad t=\frac Vq.$$

The volume and flow-rate units must agree. For example, $2.5\text{ L/s}=150\text{ L/min}$ because one minute contains $60$ seconds.

Density relates mass and volume:

$$\rho=\frac mV,
\qquad m=\rho V,
\qquad V=\frac m\rho.$$

A density of $1\text{ g}/\text{cm}^3$ equals $1000\text{ kg}/\text{m}^3$:

$$1\frac{\text g}{\text{cm}^3}
=\frac{0.001\text{ kg}}{10^{-6}\text{ m}^3}
=1000\frac{\text{kg}}{\text m^3}.$$

Convert mass and volume together; changing only one part of a compound unit changes its value incorrectly.

## Length, Area, and Volume Conversions

If a length conversion has factor $k$, its area conversion has factor $k^2$ and its volume conversion has factor $k^3$. Since $1\text{ m}=100\text{ cm}$,

$$1\text{ m}^2=100^2\text{ cm}^2=10\,000\text{ cm}^2,$$

$$1\text{ m}^3=100^3\text{ cm}^3=1\,000\,000\text{ cm}^3.$$

Capacity and volume are connected by

$$1\text{ L}=1\text{ dm}^3,
\qquad1\text{ mL}=1\text{ cm}^3,
\qquad1\text{ m}^3=1000\text{ L}.$$

**Worked conversion.**

$$0.035\text{ m}^3=35\text{ dm}^3=35\text{ L},$$

whereas $0.035\text{ m}^2=350\text{ cm}^2$. The different exponents produce different conversion factors.

## Volumes of Prisms and Cylinders

Let $B$ be the area of a base and $h$ the perpendicular height. A prism and a cylinder have constant cross-section, so

$$V=Bh.$$

For a rectangular prism, $V=LWh$. For a cylinder of radius $r$,

$$V=\pi r^2h.$$

**Example.** A triangular prism has a triangular base of base $8$ cm and perpendicular height $5$ cm, and length $12$ cm. Its volume is

$$V=\left(\frac12\times8\times5\right)\times12=240\text{ cm}^3.$$

## Volumes of Pyramids and Cones

A pyramid or cone with the same base and perpendicular height as a prism or cylinder has one third of its volume:

$$V=\frac13Bh.$$

Therefore a cone has

$$V=\frac13\pi r^2h.$$

The height is perpendicular to the base. A pyramid edge or cone slant height cannot replace it unless the problem establishes that they are equal.

**Example.** A square pyramid with base side $9$ cm and height $10$ cm has volume

$$V=\frac13\times9^2\times10=270\text{ cm}^3.$$

## Volume of a Ball

A **sphere** is a surface; the solid inside it is a **ball**. A ball of radius $r$ has volume

$$V=\frac43\pi r^3.$$

For a ball of diameter $12$ cm, the radius is $6$ cm, so

$$V=\frac43\pi\times6^3=288\pi\text{ cm}^3.$$

Always divide a given diameter by $2$ before using a radius formula.

## A Reliable Multi-Step Method

1. Identify the requested quantity and write its target unit.
2. Sketch the object or situation and label the data.
3. Convert all input values to compatible units.
4. Select a formula and check its dimensions.
5. Calculate exactly when possible, keeping $\pi$ until the end.
6. Round only the final value, according to the context.
7. Check the sign, magnitude, and unit of the result.

For example, $\pi r^2h$ has dimension $L^2\times L=L^3$, so it can represent a volume. The expression $2\pi rh$ has dimension $L^2$, so it represents an area, not a volume.

## Dimensional and Plausibility Checks

An equation must have compatible dimensions on both sides. The equation $d=vt$ is consistent because $(L/T)\times T=L$. The equation $d=v+t$ is not: a speed and a time cannot be added.

Dimensions do not prove that a formula is correct, but they can prove that one is wrong. Also estimate size. A cylinder of radius about $1$ m and height about $2$ m should have a volume of a few cubic meters, not a few liters and not hundreds of cubic meters.

Common errors include:

- applying a length conversion factor directly to an area or volume;
- mixing minutes with a rate per second;
- using diameter in place of radius;
- omitting the factor $\frac13$ for a cone or pyramid;
- confusing the surface area of a sphere with the volume of a ball;
- rounding intermediate values and accumulating avoidable error.

## Extension: Integer Dimensions and Optimization

When dimensions are restricted to integers and a volume is fixed, factorization can turn measurement into a finite optimization problem. First prove that every allowed dimension has been listed, then compare the target quantity for all cases. Testing only a few plausible shapes does not prove a global minimum.
