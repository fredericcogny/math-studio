---
id: 3e-advent-calendar
locale: en
title: "Advent of Math: The Polar Express Mystery"
strand: Seasonal Bonus · Problem Solving
summary: Twenty-four festive riddles, algorithms, and proofs aboard the Polar Express as passengers outwit the Frost Phantom across the entire 3e curriculum from December 1 to December 24.
objectives:
  - Synthesize equations, prime arithmetic, identities, affine functions, Thales, Pythagoras, trigonometry, and spatial geometry
  - Trace and analyze Python algorithms involving loops, Euclid's algorithm, modular cycles, and binary search
  - Construct rigorous Brevet-to-challenge proofs using algebra, geometry, and invariants
prerequisites:
  - Linear equations, remarkable identities, and prime factorization
  - Pythagorean theorem, Thales' theorem, trigonometry, and homothety
  - Statistics, compound probability, 3D solids, and basic Python loops
vocabulary:
  - en: homothety
    definition: A geometric scaling transformation from a center with ratio $k$; lengths scale by $|k|$, areas by $k^2$, and volumes by $|k|^3$.
  - en: binary search
    definition: A search algorithm that halves the interval of candidates at each step.
  - en: frustum
    definition: The lower portion of a cone remaining after slicing off its top with a plane parallel to the base.
  - en: range
    definition: The difference between the maximum and minimum values of a data set.
flashcards:
  - front: If a solid is enlarged by a scale factor $k$, how do its area and volume change?
    back: Surface area multiplies by $k^2$ and volume multiplies by $k^3$.
  - front: What is the difference-of-squares identity $a^2 - b^2$?
    back: $a^2 - b^2 = (a - b)(a + b)$, useful both for factoring and for rapid mental arithmetic.
  - front: If a point $C$ lies on the circle of diameter $[AB]$ (with $C \ne A, B$), what can you say about $\triangle ABC$?
    back: Triangle $ABC$ is right-angled at $C$.
  - front: How many binary-search probes suffice in the worst case to locate one item among $N$ sorted items?
    back: The smallest integer $m$ such that $2^m \ge N$ (for $N = 1000$, $m = 10$ since $2^{10} = 1024$).
adventDays:
  - id: 3e-advent-01
    title: The Midnight Departure Tally
    topic: Linear equations
    story: On December 1 at midnight, the Polar Express whistles out of the snowbound station, and the conductor spots a mysterious imbalance between the first two passenger cars.
    prompt: >-
      Passenger Cars $1$ and $2$ hold $84$ travelers in total. When $9$ travelers walk from Car $1$ to Car $2$ to fetch hot cocoa, Car $1$ **still** has twice as many travelers as Car $2$. How many travelers started in Car $1$?
    solution: >-
      Let $x$ be the initial number of travelers in Car $1$; then Car $2$ holds $84 - x$. After $9$ people move, Car $1$ has $x - 9$ and Car $2$ has $84 - x + 9 = 93 - x$. The condition gives $x - 9 = 2(93 - x) = 186 - 2x$, so $3x = 195$ and $x = 65$. Check: $65 - 9 = 56$ and $19 + 9 = 28 = 56 \div 2$.
    hints:
      - Let $x$ denote the initial count in Car $1$, so Car $2$ starts with $84 - x$.
      - Write the equation relating $x - 9$ and $(84 - x) + 9$.

  - id: 3e-advent-02
    title: The Hot-Chocolate Gift Trays
    topic: Prime factorization and GCD
    story: The Frost Phantom scrambled the pantry manifest! The dining-car chefs must assemble the largest possible number of identical peppermint-and-marshmallow trays with zero leftovers.
    prompt: >-
      The pantry holds $252$ peppermint sticks and $396$ marshmallows. The chefs prepare the **maximum possible number** of identical trays using every single peppermint stick and every single marshmallow. How many **total items** (peppermint sticks plus marshmallows) sit on **each** tray?
    solution: >-
      Factor both numbers into primes: $252 = 2^2 \times 3^2 \times 7$ and $396 = 2^2 \times 3^2 \times 11$. Their greatest common divisor is $\gcd(252, 396) = 2^2 \times 3^2 = 36$, so the chefs make $36$ identical trays. Each tray holds $252 \div 36 = 7$ peppermint sticks and $396 \div 36 = 11$ marshmallows, for a total of $7 + 11 = 18$ items per tray.
    hints:
      - Find the greatest common divisor $\gcd(252, 396)$ to determine how many identical trays can be made.
      - Divide both $252$ and $396$ by the GCD, then add the two counts per tray.

  - id: 3e-advent-03
    title: The Frosted Coal Tender
    topic: Exact rational calculations
    story: Climbing out of Pine Valley toward Glacier Crossing, the fireman must compute the exact remaining coal reserve without rounding.
    prompt: >-
      The locomotive's coal tender starts completely full. Crossing Pine Valley burns $\frac{2}{7}$ of the full tender. Climbing Frost Ridge burns $\frac{3}{5}$ of **what remained**. At Glacier Crossing, the crew shovels in an extra $\frac{1}{4}$ of a full tender. As a simplified fraction `a/b`, what fraction of a full tender is now filled?
    solution: >-
      After Pine Valley, $1 - \frac{2}{7} = \frac{5}{7}$ of the tender remains. Burning $\frac{3}{5}$ of that leaves $\frac{2}{5} \times \frac{5}{7} = \frac{2}{7}$ of a full tender. Adding $\frac{1}{4}$ gives $\frac{2}{7} + \frac{1}{4} = \frac{8 + 7}{28} = \frac{15}{28}$.
    hints:
      - Find the fraction remaining after Pine Valley, then multiply by $1 - \frac{3}{5} = \frac{2}{5}$.
      - Add $\frac{1}{4}$ using the common denominator $28$.

  - id: 3e-advent-04
    title: The Scrambled Telegraph Script
    topic: Loops and conditionals in Python
    story: A coded message clicks over the train's brass telegraph—the Frost Phantom left a Python snippet whose output reveals the next station platform.
    prompt: |
      Trace the following Python script and determine the final value of `code`:

      ```python
      code = 1
      for k in range(1, 9):
          if k % 3 == 0:
              code = code * 2 - 1
          else:
              code = code + k
      ```
    solution: >-
      Recall that `range(1, 9)` runs for $k = 1, 2, 3, 4, 5, 6, 7, 8$:
      - $k = 1$: $1 + 1 = 2$
      - $k = 2$: $2 + 2 = 4$
      - $k = 3$ (multiple of $3$): $4 \times 2 - 1 = 7$
      - $k = 4$: $7 + 4 = 11$
      - $k = 5$: $11 + 5 = 16$
      - $k = 6$ (multiple of $3$): $16 \times 2 - 1 = 31$
      - $k = 7$: $31 + 7 = 38$
      - $k = 8$: $38 + 8 = 46$.
      The final value of `code` is $46$.
    hints:
      - Remember that `range(1, 9)` stops at $8$ (it does not include $9$).
      - Only $k = 3$ and $k = 6$ satisfy `k % 3 == 0`.

  - id: 3e-advent-05
    title: Frost Crystals on the Windshield
    topic: Powers of 10 and scientific notation
    story: Racing through a sparkling blizzard, the engineer measures how fast microscopic ice crystals coat the locomotive's brass headlamp glass.
    prompt: >-
      Each frost crystal on the windshield has mass $2.5 \times 10^{-7}\text{ g}$. During a snow squall, frost accumulates at $1.6 \times 10^4$ crystals per second. How many **grams** of frost accumulate in $10$ minutes?
    solution: >-
      Convert $10$ minutes to seconds: $10 \times 60 = 600 = 6 \times 10^2\text{ s}$. The total number of crystals is $(1.6 \times 10^4) \times (6 \times 10^2) = 9.6 \times 10^6$. Multiplying by the mass per crystal gives $(9.6 \times 10^6) \times (2.5 \times 10^{-7}) = 24 \times 10^{-1} = 2.4\text{ g}$.
    hints:
      - First convert $10$ minutes into seconds ($600 = 6 \times 10^2\text{ s}$).
      - Group the decimal factors ($1.6 \times 6 \times 2.5$) separately from the powers of $10$ ($10^4 \times 10^2 \times 10^{-7}$).

  - id: 3e-advent-06
    title: The Golden Ticket Engraving
    topic: Remarkable identities
    story: Beneath the gold foil of your ticket hides a daunting four-digit calculation—yet remarkable identities turn it into effortless mental math.
    prompt: |
      Without using a calculator, compute the exact integer value of:

      $$N = 2026^2 - 2024 \times 2028 + 2025^2 - 2024^2$$
    solution: >-
      Apply the identity $(a - b)(a + b) = a^2 - b^2$ twice:
      - First, $2024 \times 2028 = (2026 - 2)(2026 + 2) = 2026^2 - 4$, so $2026^2 - 2024 \times 2028 = 4$.
      - Second, $2025^2 - 2024^2 = (2025 - 2024)(2025 + 2024) = 1 \times 4049 = 4049$.
      Adding both parts yields $N = 4 + 4049 = 4053$.
    hints:
      - Rewrite $2024 \times 2028$ as $(2026 - 2)(2026 + 2)$ to cancel $2026^2$.
      - Factor $2025^2 - 2024^2$ using $a^2 - b^2 = (a - b)(a + b)$.

  - id: 3e-advent-07
    title: Crossing on the Parallel Track
    topic: Affine functions
    story: Through the frosty night, an express North Pole mail sleigh heads south on the parallel track—the signalman needs the exact kilometer post where train and sleigh pass each other.
    prompt: >-
      At $t = 0$ minutes, the Polar Express passes kilometer marker $18$ heading north at $90\text{ km/h}$ ($1.5\text{ km/min}$). At the same instant, an express mail sleigh leaves kilometer marker $128$ heading south at $60\text{ km/h}$ ($1\text{ km/min}$). At what kilometer marker do they meet?
    solution: >-
      Model both positions (in km) after $t$ minutes as affine functions: $f(t) = 18 + 1.5t$ for the train and $g(t) = 128 - t$ for the sleigh. They meet when $18 + 1.5t = 128 - t \iff 2.5t = 110 \iff t = 44$ minutes. Their meeting position is $g(44) = 128 - 44 = 84$ (check: $18 + 1.5 \times 44 = 84$).
    hints:
      - Write an affine function for each vehicle's kilometer position as a function of time $t$ in minutes.
      - Set $f(t) = g(t)$ to find $t$, then substitute $t$ back into either formula.

  - id: 3e-advent-08
    title: The Aurora Gorge Ice Bridge
    topic: Thales' theorem and its converse
    story: Before the Polar Express crosses Aurora Gorge, the bridge inspector checks whether the upper steel deck is strictly parallel to the lower ice-anchored brace.
    prompt: >-
      Two straight steel cables $AC$ and $BD$ cross at a central pylon $O$, with points $A, O, C$ collinear and points $B, O, D$ collinear in that order (butterfly configuration). Engineers measure $OA = 15\text{ m}$, $OC = 21\text{ m}$, $OB = 20\text{ m}$, and $OD = 28\text{ m}$.
      1. Using the converse of Thales' theorem, prove that the upper deck $(AB)$ is parallel to the lower brace $(CD)$.
      2. Given $AB = 25\text{ m}$, calculate the exact length $CD$.
    solution: >-
      1. **Parallelism:** Compute the two ratios separately: $\frac{OA}{OC} = \frac{15}{21} = \frac{5}{7}$ and $\frac{OB}{OD} = \frac{20}{28} = \frac{5}{7}$. Therefore $\frac{OA}{OC} = \frac{OB}{OD}$. Moreover, the points $A, O, C$ and $B, O, D$ are aligned in the same order on the two intersecting lines $(AC)$ and $(BD)$. By the converse of Thales' theorem, $(AB) \parallel (CD)$.
      2. **Length of $CD$:** Now by Thales' theorem, $\frac{AB}{CD} = \frac{OA}{OC} = \frac{5}{7}$, hence $CD = 25 \times \frac{7}{5} = 35\text{ m}$.
    hints:
      - Simplify both ratios $\frac{OA}{OC}$ and $\frac{OB}{OD}$ separately before comparing them.
      - State explicitly that $A, O, C$ and $B, O, D$ lie in the same order when invoking the converse of Thales' theorem.
    rubric:
      - Computes and compares the simplified ratios $\frac{OA}{OC} = \frac{5}{7}$ and $\frac{OB}{OD} = \frac{5}{7}$ separately.
      - States the point-ordering condition ($A, O, C$ and $B, O, D$ aligned in the same order) and invokes the converse of Thales' theorem to conclude $(AB) \parallel (CD)$.
      - Uses Thales' theorem to compute $CD = 25 \times \frac{7}{5} = 35\text{ m}$.

  - id: 3e-advent-09
    title: The Snapped Signal Mast
    topic: Pythagorean theorem and equations
    story: A winter gale cracked the tall wooden lantern mast beside Frosty Junction, leaving its top resting in the snowdrifts.
    prompt: >-
      A vertical signal pole $18\text{ m}$ tall stands on level ground. A gale snaps it partway up; the broken upper section remains hinged at the break while its top touches the snow $12\text{ m}$ away from the base of the pole. At what height above the snow (in meters) did the pole snap?
    solution: >-
      Let $h$ be the height of the standing lower section (in meters). The slanted upper section forms the hypotenuse of a right triangle and has length $18 - h$. By the Pythagorean theorem: $h^2 + 12^2 = (18 - h)^2$, which expands to $h^2 + 144 = 324 - 36h + h^2$. Subtracting $h^2$ from both sides gives $36h = 180$, so $h = 5\text{ m}$ (forming the $(5, 12, 13)$ right triangle).
    hints:
      - Call the break height $h$; then the fallen upper piece (the hypotenuse) has length $18 - h$.
      - Apply the Pythagorean theorem and notice that $h^2$ cancels out cleanly from both sides!

  - id: 3e-advent-10
    title: The Mountain-Pass Speed Trap
    topic: Rates and harmonic mean
    story: The Frost Phantom bets a basket of gingerbread that the train's average speed over Reindeer Pass is $50\text{ km/h}$—do not fall for his arithmetic trap!
    prompt: >-
      The Polar Express climbs a $60\text{ km}$ mountain pass at a steady $40\text{ km/h}$, then descends the exact same $60\text{ km}$ on the far side at a steady $60\text{ km/h}$. What is the train's **true average speed** (in $\text{km/h}$) over the entire $120\text{ km}$ crossing?
    solution: >-
      Compute the duration of each leg: climbing takes $\frac{60}{40} = 1.5\text{ h}$, and descending takes $\frac{60}{60} = 1\text{ h}$, for a total time of $2.5\text{ h}$. Over the total distance of $120\text{ km}$, the average speed is $\frac{120}{2.5} = 48\text{ km/h}$.
    hints:
      - Never average two speeds directly when they last for different amounts of time.
      - Find the time spent climbing and the time spent descending, then divide $120\text{ km}$ by the total time.

  - id: 3e-advent-11
    title: The Switchyard Euclid Lock
    topic: Euclidean algorithm in Python
    story: To realign the frozen railway switches at Silver Junction, you must trace the signal box's Euclidean algorithm and combine its GCD output with its iteration count.
    prompt: |
      Trace the following Python code and find the exact integer value of `result`:

      ```python
      a, b = 156, 66
      steps = 0
      while b != 0:
          a, b = b, a % b
          steps += 1
      result = a * 10 + steps
      ```
    solution: >-
      Follow each pass of the Euclidean algorithm:
      - Step $1$: $156 = 2 \times 66 + 24 \implies (a, b) = (66, 24)$, `steps = 1`.
      - Step $2$: $66 = 2 \times 24 + 18 \implies (a, b) = (24, 18)$, `steps = 2`.
      - Step $3$: $24 = 1 \times 18 + 6 \implies (a, b) = (18, 6)$, `steps = 3`.
      - Step $4$: $18 = 3 \times 6 + 0 \implies (a, b) = (6, 0)$, `steps = 4`.
      The loop terminates with `a = 6` and `steps = 4`, so `result = 6 * 10 + 4 = 64`.
    hints:
      - At each iteration, compute the remainder `a % b` of Euclidean division and increment `steps` by $1$.
      - Stop as soon as `b` becomes $0$; `a` is then $\gcd(156, 66)$.

  - id: 3e-advent-12
    title: The Starlight Lighthouse Cliff
    topic: Right-triangle trigonometry
    story: Across a flat frozen lake, the Starlight Lighthouse guides the train through the mist—two elevation sightings let you measure its cliff height from the observation deck.
    prompt: >-
      From the observation deck on a flat frozen lake, you sight the top of a vertical lighthouse cliff at an angle of elevation of $30^\circ$. The train then glides $40\text{ m}$ straight toward the cliff, where the angle of elevation to the same top is now $60^\circ$. Calculate the height $h$ of the cliff, rounded to the **nearest tenth of a meter** (`0.1 m`).
    solution: >-
      Let $x$ be the horizontal distance from the second observation point to the base of the cliff. In the closer right triangle, $\tan(60^\circ) = \frac{h}{x}$, so $h = x\sqrt{3}$. In the wider right triangle, $\tan(30^\circ) = \frac{h}{x + 40} = \frac{1}{\sqrt{3}}$, so $x + 40 = h\sqrt{3} = 3x$, which yields $2x = 40$ and $x = 20\text{ m}$. Therefore $h = 20\sqrt{3} \approx 34.64\text{ m}$, which rounds to $34.6\text{ m}$.
    hints:
      - Call $x$ the horizontal distance from the closer point to the cliff base, and write $\tan(60^\circ) = \frac{h}{x}$ and $\tan(30^\circ) = \frac{h}{x + 40}$.
      - Alternatively, notice that the oblique triangle formed by the two sightings and the cliff top has angles $30^\circ, 120^\circ, 30^\circ$, so it is isosceles with slant edge $40\text{ m}$!

  - id: 3e-advent-13
    title: The Porcelain Snowman Carafes
    topic: Homothety and scaling volumes
    story: In the gift car sit two geometrically similar porcelain snowmen—one is a scaled-up homothety of the other, and the dining car wants to fill the big one with hot cocoa.
    prompt: >-
      Two porcelain snowman carafes are geometrically similar: the larger snowman is an enlargement of the smaller one by a scale factor (homothety ratio) of $k = 1.5$. The smaller snowman holds $320\text{ mL}$ of hot cocoa and requires $240\text{ cm}^2$ of white glaze. What is the **volume** (in $\text{mL}$) of the larger snowman?
    solution: >-
      Under a scaling of ratio $k = 1.5 = \frac{3}{2}$, surface area scales by $k^2$, while **volume** scales by $k^3 = \left(\frac{3}{2}\right)^3 = \frac{27}{8} = 3.375$. Thus the larger snowman's volume is $320 \times \frac{27}{8} = 40 \times 27 = 1080\text{ mL}$. (The $240\text{ cm}^2$ glaze area is not needed for the volume.)
    hints:
      - Ask yourself how a $3\text{D}$ volume changes when every length is multiplied by $k = 1.5$.
      - Compute $1.5^3 = \left(\frac{3}{2}\right)^3 = \frac{27}{8}$ and multiply by $320\text{ mL}$.

  - id: 3e-advent-14
    title: The Two-Bag Bell Lottery
    topic: Compound probability
    story: In the parlor car, the conductor invites passengers to win a golden sleigh bell by flipping a coin and drawing from one of two velvet bags.
    prompt: >-
      Bag A holds $3$ golden bells and $5$ silver bells; Bag B holds $4$ golden bells and $2$ silver bells. A passenger flips a fair coin: on Heads they draw one bell at random from Bag A; on Tails they draw one bell at random from Bag B. What is the exact probability (as a simplified fraction `a/b`) of drawing a **golden** bell?
    solution: >-
      Build a two-stage probability tree:
      - Path (Heads, Gold): $\frac{1}{2} \times \frac{3}{8} = \frac{3}{16}$.
      - Path (Tails, Gold): $\frac{1}{2} \times \frac{4}{6} = \frac{1}{2} \times \frac{2}{3} = \frac{1}{3}$.
      Summing both mutually exclusive winning paths gives $P(\text{Gold}) = \frac{3}{16} + \frac{1}{3} = \frac{9 + 16}{48} = \frac{25}{48}$.
    hints:
      - Draw a probability tree whose first branch is the coin flip ($\frac{1}{2}$ each) and whose second branch is the bell color.
      - Multiply along each winning branch and add the two resulting fractions.

  - id: 3e-advent-15
    title: The Engine-Room Parity Lock
    topic: Algebraic factorization and divisibility
    story: The Frost Phantom padlocked the engine-room door with an algebraic riddle, boasting that his formula can produce the year $2026$.
    prompt: |
      For any integer $n$, consider the algebraic expression:

      $$E(n) = (2n + 3)^2 - (2n - 1)^2$$

      The Frost Phantom claims that there exists an integer $n$ such that $E(n) = 2026$.
      1. Factor or expand $E(n)$ to prove that $E(n)$ is **always** a multiple of $8$.
      2. Deduce a complete proof that the Frost Phantom is bluffing.
    solution: >-
      1. **Factorization:** Using $a^2 - b^2 = (a - b)(a + b)$ with $a = 2n + 3$ and $b = 2n - 1$, we get $E(n) = \big((2n + 3) - (2n - 1)\big)\big((2n + 3) + (2n - 1)\big) = 4(4n + 2) = 8(2n + 1)$. (Expanding directly also gives $(4n^2 + 12n + 9) - (4n^2 - 4n + 1) = 16n + 8 = 8(2n + 1)$.) Since $2n + 1$ is an integer, $E(n)$ is always divisible by $8$.
      2. **Refuting $2026$:** Perform Euclidean division of $2026$ by $8$: $2026 = 8 \times 253 + 2$, so $2026$ is not a multiple of $8$. Therefore no integer $n$ can satisfy $E(n) = 2026$.
    hints:
      - Apply $a^2 - b^2 = (a - b)(a + b)$ (or expand both squares carefully) to simplify $E(n)$.
      - Factor out $8$ from the simplified expression, then test whether $2026$ is divisible by $8$.
    rubric:
      - Simplifies $E(n)$ accurately to $16n + 8 = 8(2n + 1)$ via expansion or difference of squares.
      - Proves that $E(n)$ is always a multiple of $8$ for every integer $n$.
      - Shows that $2026$ is not divisible by $8$ ($2026 = 8 \times 253 + 2$) and concludes no integer solution exists.

  - id: 3e-advent-16
    title: The Truncated Pine-Cone Lantern
    topic: Spatial geometry and cone sections
    story: A glass cone-shaped lantern sways above the dining table; the glassblower sliced off its tip parallel to the base to vent the candle smoke.
    prompt: >-
      A glass lantern starts as a right circular cone of height $18\text{ cm}$ and base radius $6\text{ cm}$. A plane parallel to the base slices off the top $6\text{ cm}$ of the cone to create a flat vent. What exact fraction (simplified `a/b`) of the original cone's **volume** remains in the lantern (the frustum)?
    solution: >-
      The small top cone removed by the parallel slice is a reduction of the full cone with linear scale factor $k = \frac{6}{18} = \frac{1}{3}$. Its volume is therefore $k^3 = \left(\frac{1}{3}\right)^3 = \frac{1}{27}$ of the original cone's volume. Consequently, the remaining frustum retains $1 - \frac{1}{27} = \frac{26}{27}$ of the original volume.
    hints:
      - Notice that slicing a cone parallel to its base creates a smaller similar cone at the top.
      - Find the height ratio $k = \frac{6}{18}$ and cube it to obtain the fraction of volume removed!

  - id: 3e-advent-17
    title: The Five Passenger Trunks
    topic: Mean, median, and range
    story: Five numbered luggage trunks sit on the baggage scale, but snow obscured their weight tags—only the statistical summary remains readable.
    prompt: >-
      Five gift trunks have integer masses (in kg) written in non-decreasing order: $a \le b \le c \le d \le e$.
      - The **median** mass is $14\text{ kg}$.
      - The **mean** mass is $15\text{ kg}$.
      - The **range** ($e - a$) is $10\text{ kg}$.
      - The value $14$ appears **exactly twice**, while the other three masses are all distinct from each other and from $14$.

      What is the **maximum possible** mass $e$ (in kg) of the heaviest trunk?
    solution: >-
      The sum of all five masses is $5 \times 15 = 75$, the median is $c = 14$, and $a = e - 10$. Since $14$ appears exactly twice in the sorted list, either $b = c = 14$ or $c = d = 14$:
      - **Case 1 ($b = c = 14$):** Then $(e - 10) + 14 + 14 + d + e = 75 \implies 2e + d = 57$ with $15 \le d < e$. The smallest allowed $d$ is $15$, giving $2e = 42 \implies e = 21$ (valid list: $11, 14, 14, 15, 21$).
      - **Case 2 ($c = d = 14$):** Then $(e - 10) + b + 14 + 14 + e = 75 \implies 2e + b = 57$ with $a < b \le 13$. Trying $b = 13$ gives $2e = 44 \implies e = 22$ and $a = 12$, producing the valid list $(12, 13, 14, 14, 22)$ (sum $75$, median $14$, range $10$, unique duplicate $14$). Trying $e \ge 23$ forces $b \le 11 < 13 \le a$, contradicting $a \le b$.
      Hence the maximum possible mass of the heaviest trunk is $e = 22\text{ kg}$.
    hints:
      - Use the mean to find the total sum $a + b + c + d + e = 75$, and substitute $a = e - 10$ and $c = 14$.
      - 'Test both ways for $14$ to appear twice in the ordered list: either $(b, c) = (14, 14)$ or $(c, d) = (14, 14)$, making sure $a < b$ or $d < e$ holds!'

  - id: 3e-advent-18
    title: The Rotating Cipher Dial
    topic: Loops and modular cycles
    story: The Frost Phantom locked the telegraph office with a $2026$-turn brass cipher dial—far too many turns to spin by hand unless you spot the cycle!
    prompt: |
      Determine the exact value of `x` after the following Python loop finishes:

      ```python
      x = 2
      for step in range(2026):
          x = (x * 3) % 13
      ```
    solution: >-
      Compute the first few values of `x`:
      - Start (`step = 0`): $x = 2$.
      - After $1$ step: $(2 \times 3) \bmod 13 = 6$.
      - After $2$ steps: $(6 \times 3) \bmod 13 = 18 \bmod 13 = 5$.
      - After $3$ steps: $(5 \times 3) \bmod 13 = 15 \bmod 13 = 2$!
      The values repeat in a period-$3$ cycle: $(2, 6, 5, 2, 6, 5, \dots)$ (because $3^3 = 27 \equiv 1 \pmod{13}$). Since $2026 = 3 \times 675 + 1$, after $2026$ steps `x` is at position $1$ of the cycle, so `x = 6`.
    hints:
      - Trace the first $4$ iterations by hand to discover a repeating cycle!
      - Divide $2026$ by the cycle length and use the remainder to find the final state.

  - id: 3e-advent-19
    title: The Three Cargo Cars
    topic: Systems of linear equations
    story: Three painted freight cars—Red, Blue, and Green—were weighed in pairs on the mountain bridge scale, and you must recover the exact crate count of the Blue car.
    prompt: >-
      Three cargo cars (Red, Blue, and Green) carry wrapped gifts:
      - Red and Blue together carry $73$ crates.
      - Blue and Green together carry $81$ crates.
      - Red and Green together carry $76$ crates.

      How many crates does the **Blue** car carry?
    solution: >-
      Let $R, B, G$ be the crate counts in Red, Blue, and Green. Adding all three equations gives $2(R + B + G) = 73 + 81 + 76 = 230$, so $R + B + G = 115$. Subtracting the third equation ($R + G = 76$) immediately yields $B = 115 - 76 = 39$ crates. (Check: $R = 34$, $B = 39$, $G = 42$.)
    hints:
      - Add all three pairwise totals together—notice how many times each car is counted!
      - Divide by $2$ to get $R + B + G$, then subtract $R + G$.

  - id: 3e-advent-20
    title: The Frost-Spider on the Gift Trunk
    topic: 3D nets and Pythagorean theorem
    story: A tiny clockwork frost-spider perches on one corner of a rectangular gift trunk and crawls along the outside surface toward the farthest opposite corner.
    prompt: >-
      A rectangular luggage trunk measures $60\text{ cm}$ long, $30\text{ cm}$ wide, and $15\text{ cm}$ high. A clockwork spider starts at one corner $A$ and must crawl **along the outer surface** of the trunk to the diametrically opposite corner $G$. What is the **shortest possible path length**, in centimeters?
    solution: >-
      Unfold two adjacent faces of the trunk into a flat rectangle so the shortest surface path becomes a straight diagonal (hypotenuse of a right triangle). There are three distinct unfoldings:
      1. $\sqrt{(60 + 30)^2 + 15^2} = \sqrt{8100 + 225} = \sqrt{8325}\text{ cm}$.
      2. $\sqrt{(60 + 15)^2 + 30^2} = \sqrt{5625 + 900} = \sqrt{6525}\text{ cm}$.
      3. $\sqrt{60^2 + (30 + 15)^2} = \sqrt{3600 + 2025} = \sqrt{5625} = 75\text{ cm}$.
      The shortest surface path length is exactly $75\text{ cm}$.
    hints:
      - 'Unfold two faces of the rectangular prism flat into a net: the shortest path on the surface becomes a straight line!'
      - Check all three ways to pair the three dimensions $(60, 30, 15)$—putting the two smaller dimensions together minimizes the square sum.

  - id: 3e-advent-21
    title: The Domino Ballroom Floor
    topic: Coloring invariant proof
    story: The Frost Phantom removed two diagonally opposite corner tiles from the Polar Express's checkered ballroom floor and challenged the carpenters to retile it with $2 \times 1$ floorboards.
    prompt: >-
      The ballroom floor is an $8 \times 8$ checkerboard of alternating black and white unit squares. Two **diagonally opposite** corner squares are removed to mount two Christmas trees, leaving $62$ squares. Prove mathematically that it is **impossible** to tile those remaining $62$ squares using $31$ rectangular $2 \times 1$ wooden floorboards without overlaps or overhangs.
    solution: >-
      In a standard $8 \times 8$ checkerboard, there are $32$ white squares and $32$ black squares. Any two diagonally opposite corners share the **same color** (for example, both white). Removing them leaves $30$ squares of that color and $32$ squares of the other color. However, every $2 \times 1$ floorboard placed horizontally or vertically covers two adjacent squares—which always consist of **exactly $1$ white square and $1$ black square**. Therefore, $31$ non-overlapping floorboards must cover exactly $31$ white squares and $31$ black squares, which cannot match $30$ and $32$. Hence no tiling is possible.
    hints:
      - Count how many black squares and how many white squares remain after removing two diagonally opposite corners.
      - Observe the colors of the two squares covered by any single $2 \times 1$ domino.
    rubric:
      - Observes that two diagonally opposite corners of an $8 \times 8$ board have the same color, leaving $32$ squares of one color and $30$ of the other.
      - Shows that every $2 \times 1$ floorboard covers exactly $1$ white square and $1$ black square.
      - Deduces that $31$ floorboards require $31$ of each color, contradicting the $32$ versus $30$ split.

  - id: 3e-advent-22
    title: The Frozen Railway Switch Search
    topic: Binary search (dichotomy)
    story: Somewhere along a $1000$-segment frozen railway line, one single switch is jammed with ice—and the diagnostic pulse battery only has a few shots left!
    prompt: >-
      A railway line consists of $1000$ consecutive segments numbered $1$ to $1000$, and **exactly one** segment has a frozen switch. Each diagnostic pulse tests a chosen segment $k$ and instantly reports whether the frozen switch is strictly before $k$, right at $k$, or strictly after $k$. Using an optimal binary-search (dichotomy) strategy, what is the **minimum number of pulses guaranteed** to pinpoint the frozen switch in the worst case?
    solution: >-
      With $m$ optimal pulses, each pulse checks the midpoint and either finds the switch (`HERE`) or cuts the remaining candidates in half. The maximum number of segments that can be guaranteed in $m$ pulses satisfies $N(1) = 1$ and $N(m) = 2N(m - 1) + 1 = 2^m - 1$. Check powers of $2$:
      - With $9$ pulses, at most $2^9 - 1 = 511 < 1000$ segments can be guaranteed.
      - With $10$ pulses, up to $2^{10} - 1 = 1023 \ge 1000$ segments can be guaranteed.
      Therefore, $10$ pulses is the exact worst-case minimum.
    hints:
      - Ask how many remaining candidate segments can survive in the worst case after testing the middle segment each time.
      - Compare $1000$ against powers of $2$ (specifically $2^9 = 512$ and $2^{10} = 1024$).

  - id: 3e-advent-23
    title: The Twin Steam Boilers
    topic: Rates and fractions
    story: Just outside the North Pole yards, the turntable is frozen solid—two steam boilers pump hot water in while a frosty crack leaks it back out!
    prompt: >-
      To thaw the turntable reservoir:
      - Boiler A running alone fills the empty reservoir in $12$ minutes.
      - Boiler B running alone fills the empty reservoir in $20$ minutes.
      - A leaky frost valve drains a full reservoir in $30$ minutes.

      If both boilers run together while the frost valve leaks, how many minutes does it take to fill the empty reservoir?
    solution: >-
      Express each flow as a fraction of the reservoir per minute: Boiler A adds $\frac{1}{12}$, Boiler B adds $\frac{1}{20}$, and the leak removes $\frac{1}{30}$. The net fill rate per minute is $\frac{1}{12} + \frac{1}{20} - \frac{1}{30} = \frac{5 + 3 - 2}{60} = \frac{6}{60} = \frac{1}{10}$. Filling $\frac{1}{10}$ of the reservoir each minute takes exactly $10$ minutes.
    hints:
      - 'Convert each time into a per-minute rate: $\frac{1}{12}$, $\frac{1}{20}$, and $-\frac{1}{30}$ of the reservoir per minute.'
      - Combine the rates over the common denominator $60$, then take the reciprocal.

  - id: 3e-advent-24
    title: The North Pole Star Arch
    topic: Semicircle geometry, Pythagoras, and areas
    story: Midnight on December 24! The Polar Express glides beneath the shimmering North Pole Star Arch—one final geometric proof verifies the exact elevation of the Christmas Star beacon.
    prompt: >-
      The North Pole Station entrance is framed by a semicircle of diameter $AB = 26\text{ m}$. A star beacon sits at point $C$ on the semicircle such that $AC = 10\text{ m}$, and $H$ is the foot of the perpendicular dropped from $C$ onto diameter $[AB]$.
      1. Prove that triangle $ABC$ is right-angled at $C$ and find the exact length $BC$.
      2. By computing the area of $\triangle ABC$ in two different ways, prove that the exact height of the beacon above the platform is $CH = \frac{120}{13}\text{ m}$.
      3. Calculate $AH$ and $HB$ and verify the metric relation $AH \times HB = CH^2$.
    solution: >-
      1. **Right triangle and $BC$:** Since $C$ lies on the circle of diameter $[AB]$ (distinct from $A$ and $B$), $\triangle ABC$ is right-angled at $C$. By the Pythagorean theorem, $BC = \sqrt{AB^2 - AC^2} = \sqrt{26^2 - 10^2} = \sqrt{676 - 100} = \sqrt{576} = 24\text{ m}$.
      2. **Height $CH$ via area:** Computing the area of $\triangle ABC$ two ways gives $\frac{AC \times BC}{2} = \frac{AB \times CH}{2}$, so $CH = \frac{AC \times BC}{AB} = \frac{10 \times 24}{26} = \frac{240}{26} = \frac{120}{13}\text{ m}$.
      3. **Verification:** In right triangle $AHC$, $AH = \sqrt{AC^2 - CH^2} = \sqrt{100 - \frac{14400}{169}} = \sqrt{\frac{2500}{169}} = \frac{50}{13}\text{ m}$. Then $HB = 26 - \frac{50}{13} = \frac{338 - 50}{13} = \frac{288}{13}\text{ m}$. Finally, $AH \times HB = \frac{50 \times 288}{169} = \frac{14400}{169} = \left(\frac{120}{13}\right)^2 = CH^2$.
    hints:
      - Recall the theorem about a triangle inscribed in a semicircle whose side is the diameter.
      - Write the area of $\triangle ABC$ using legs $AC, BC$ and again using base $AB$ and altitude $CH$.
    rubric:
      - Proves $\triangle ABC$ is right-angled at $C$ (inscribed in a semicircle of diameter $[AB]$) and computes $BC = 24\text{ m}$ by Pythagoras.
      - Uses two expressions for the area of $\triangle ABC$ to prove $CH = \frac{120}{13}\text{ m}$.
      - Computes $AH = \frac{50}{13}\text{ m}$ and $HB = \frac{288}{13}\text{ m}$ and verifies $AH \times HB = \frac{14400}{169} = CH^2$.
---
## All Aboard the Polar Express!

On the stroke of midnight on December 1, the Polar Express departs for the North Pole—but the mischievous **Frost Phantom** has scrambled the train's timetables, luggage manifests, telegraph ciphers, and railway switches!

Every door from **December 1 to December 24** unlocks a Brevet-to-challenge problem spanning the full **3e curriculum**: equations, prime factorization, remarkable identities, affine functions, Thales, Pythagoras, trigonometry, homothety, 3D solids, probability, and Python algorithms—leading all the way to the **North Pole Star Arch** on Christmas Eve.

> Keep your mathematical eye sharp: several doors conceal classic traps (average speeds, scaled volumes, or modular cycles) designed by the Frost Phantom!
