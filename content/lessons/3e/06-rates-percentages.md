---
id: 3e-rates-percentages
order: 7
title: Rates, percentages, and scales
level: 3e
strand: Proportional reasoning
difficulty: core
estimatedMinutes: 40
summary: Use multiplicative models for proportionality, percentage changes, speeds, rates, and scale drawings.
objectives:
  - Write ratios and solve proportional-sharing problems
  - Apply and reverse percentage changes
  - Combine successive percentage changes
  - Solve problems involving speed, rates, and scales
prerequisites:
  - Fractions and decimal multiplication
  - Unit conversion
  - Solving linear equations
vocabulary:
  - en: proportionality coefficient
    fr: coefficient de proportionnalité
    definition: The constant multiplier that converts one proportional quantity into another.
  - en: percentage change
    fr: taux d'évolution
    definition: The change divided by the initial value, expressed as a percentage.
  - en: multiplier
    fr: coefficient multiplicateur
    definition: The factor $1+t$ that applies a relative change of decimal rate $t$.
  - en: average speed
    fr: vitesse moyenne
    definition: Total distance divided by total elapsed time.
flashcards:
  - front: What multiplier represents a $17\%$ increase?
    back: $1+0.17=1.17$.
  - front: What multiplier represents a $12\%$ decrease?
    back: $1-0.12=0.88$.
  - front: How are successive percentage changes combined?
    back: Multiply their multipliers; do not usually add their rates.
  - front: State the relationship among distance, speed, and time.
    back: $d=vt$, so $v=d/t$ and $t=d/v$ when the divisor is nonzero.
generator:
  type: signed-arithmetic
  seed: 31407
  count: 8
  min: -25
  max: 25
tieredExercises:
  - id: "3e-rates-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: 'Share $420$ dollars between Ana and Ben in the ratio $2:5$. Write the equality of ratios used and find each share.'
    solution: 'Write $A:B=2:5$, or $A/2=B/5=420/(2+5)=60$. Therefore Ana receives $2\times60=120$ dollars and Ben receives $5\times60=300$ dollars.'
    hints:
      - 'The $2+5=7$ ratio parts together represent $420$ dollars.'
    assessment:
      kind: "reasoning"
      rubric:
        - "Writes $A:B=2:5$ or an equivalent equality of ratios."
        - "Divides the total into $7$ equal parts worth $60$ dollars each."
        - "Obtains and checks the shares $120$ dollars and $300$ dollars."
  - id: "3e-rates-t2"
    tier: 2
    tierTitle: "Brevet-Standard Problem"
    curriculumStatus: "core"
    prompt: 'A jacket initially costs $\$85$. Its price is reduced by $20\%$, then the sale price is increased by $10\%$. Find the final price and the single percentage change from the initial price.'
    solution: 'The successive multipliers are $0.80$ and $1.10$. The final price is $85\times0.80\times1.10=74.80$ dollars. The combined multiplier is $0.88=1-0.12$, so the overall change is a $12\%$ decrease.'
    hints:
      - "Apply each change to the price produced by the preceding change."
      - "Compare the product of the two multipliers with $1$."
    assessment:
      kind: "exact"
      expected: "$74.80; 12% decrease"
      accepted:
        - "74.80 dollars, decrease of 12%"
        - "$74.80 and -12%"
  - id: "3e-rates-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "core"
    prompt: "On a map at scale $1:25,000$, a straight trail measures $7.6$ cm. A hiker walks the corresponding real distance at an average speed of $4.5$ km/h. Calculate the real distance and the travel time in minutes and seconds."
    solution: 'The real length is $7.6\times25,000=190,000$ cm, which is $1.9$ km. The time is $t=d/v=1.9/4.5=19/45$ hour. Multiplying by $60$ gives $76/3=25\frac13$ minutes, hence $25$ minutes $20$ seconds.'
    hints:
      - "At this scale, multiply the map length by $25,000$, then convert centimeters to kilometers."
      - "Use $t=d/v$ and convert the fractional minute into seconds."
    assessment:
      kind: "reasoning"
      rubric:
        - "Uses the scale to obtain $190,000$ cm and converts it to $1.9$ km."
        - "Calculates $t=1.9/4.5$ hour with consistent units."
        - "Converts the time correctly to $25$ minutes $20$ seconds."
  - id: "3e-rates-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: 'A price is increased by an integer percentage $p$, where $1\le p\le100$, and then reduced by an integer percentage $q$, where $1\le q<100$. The final price equals the initial price. Determine every possible pair $(p,q)$ and prove that your list is complete.'
    solution: 'Equality of initial and final prices gives $(1+p/100)(1-q/100)=1$. Hence $(100+p)(100-q)=10,000$, or $q=\frac{100p}{100+p}=100-\frac{10,000}{100+p}$. Thus $q$ is an integer exactly when $100+p$ divides $10,000$. Since $1\le p\le100$, the divisor $100+p$ lies from $101$ to $200$. From the prime factorization $10,000=2^4\times5^4$, the only divisors in this interval are $125$ and $200$. They give $p=25,q=20$ and $p=100,q=50$. Both satisfy the original multiplier equation and the stated bounds, so these and only these pairs work.'
    hints:
      - "Translate both changes into multipliers and set their product equal to $1$."
      - "Rewrite $q$ as $100-10,000/(100+p)$."
      - "Use the prime factorization of $10,000$ to list its divisors between $101$ and $200$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Derives the correct multiplier equation and formula for $q$."
        - 'Turns integrality into the divisibility condition $100+p\mid10,000$.'
        - "Proves that the only relevant divisors are $125$ and $200$."
        - "Obtains and verifies exactly $(25,20)$ and $(100,50)$."
---
## Recognizing proportionality

Two quantities are proportional when one is always a constant multiple of the other:

$$y=kx.$$

The number $k$ is the proportionality coefficient. In a table, every nonzero quotient $y/x$ must equal $k$; on a graph, the points lie on a straight line through the origin.

A fixed starting charge produces $y=kx+b$, not a proportional relationship when $b\ne0$.

## Fourth proportional and unit rate

If $5$ notebooks cost $13.50$ dollars, the unit price is $13.50/5=2.70$ dollars. Therefore $8$ notebooks cost $8\times2.70=21.60$ dollars.

You may also use equal ratios, but reducing to one unit often makes the meaning clearer. Always keep corresponding quantities in the same positions.

## Ratio notation and proportional sharing

The ratio $a:b$ compares quantities in the order stated and can be written $a/b$. To share a total $T$ in the ratio $a:b$, divide it into $a+b$ equal parts:

$$\text{first share}=T\frac{a}{a+b},\qquad \text{second share}=T\frac{b}{a+b}.$$

For a ratio $2:5$, the shares must add to the total and the second must be $5/2$ times the first. This final check catches reversed shares.

## Percentages as proportions

The percentage $t\%$ means $t/100$. To find $18\%$ of $350$:

$$350\times\frac{18}{100}=63.$$

To find what percentage $42$ is of $160$, divide part by whole:

$$\frac{42}{160}\times100=26.25\%.$$

The denominator is the reference whole, not necessarily the larger number mentioned in a sentence.

## Percentage change and multipliers

If a value changes from $V_i$ to $V_f$, its rate of change is

$$t=\frac{V_f-V_i}{V_i}.$$

An increase by $t$ uses multiplier $1+t$; a decrease by $t$ uses $1-t$. For example, decreasing $480$ by $7\%$ gives

$$480(1-0.07)=480\times0.93=446.4.$$

To reverse a known change, divide by its multiplier. If a price after a $20\%$ discount is $64$ dollars, the initial price was $64/0.80=80$ dollars.

## Successive changes

Multiply successive multipliers. A $10\%$ increase followed by a $10\%$ decrease gives

$$1.10\times0.90=0.99,$$

an overall $1\%$ decrease, not no change. The second percentage acts on a different reference value.

## Speed and other rates

For constant or average speed,

$$v=\frac dt,\qquad d=vt,\qquad t=\frac dv.$$

Units must agree. Since $1$ hour is $3,600$ seconds,

$$1\text{ m/s}=3.6\text{ km/h}.$$

Other rates use the same quotient structure: flow rate is volume per time, density is mass per volume, and unit price is cost per item.

Average speed is total distance divided by total time. It is not generally the average of two speeds.

## Scales

A scale $1:n$ means one unit on the drawing represents $n$ of the same units in reality:

$$\text{real length}=n\times\text{drawing length}.$$

Convert units after applying the ratio, or convert both lengths to a common unit first. Areas scale by $n^2$, not by $n$.

## Method choice and misconceptions

- Ask first whether the situation is proportional or has a fixed term.
- Identify the reference value before calculating a percentage.
- For successive changes, multiply coefficients rather than adding rates.
- Write units beside intermediate rate calculations.
- Check plausibility: a scale reduction must make the drawing shorter than reality, and a discount must give a multiplier below $1$.

## Extension: equal-distance average speed

Traveling the same distance outward at speed $u$ and back at speed $v$ gives average speed

$$\frac{2d}{d/u+d/v}=\frac{2uv}{u+v},$$

which is usually not $(u+v)/2$. Time, not distance, determines how long each speed contributes.
