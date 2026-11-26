---
id: 5e-advent-calendar
order: 13
title: "Advent of Math: The Clockwork Toymaker's Workshop"
level: 5e
strand: Seasonal Bonus · Problem Solving
difficulty: bonus
estimatedMinutes: 120
summary: Twenty-four festive riddles, algorithms, and proofs set in Master Barnaby's clockwork toy workshop, spanning the entire 5e curriculum from December 1 to December 24.
objectives:
  - Combine arithmetic, geometry, fractions, proportionality, and algebra in festive puzzles
  - Trace and design step-by-step workshop algorithms with loops and conditionals
  - Build short mathematical proofs using parity, invariants, and angle geometry
prerequisites:
  - Signed numbers, fractions, and divisibility
  - Triangles, parallelograms, area, and volume
  - Ratios, percentages, mean, and elementary probability
vocabulary:
  - en: invariant
    fr: invariant
    definition: A property or quantity that stays unchanged after every allowed step.
  - en: parity
    fr: parité
    definition: Whether an integer is even or odd.
  - en: scale
    fr: échelle
    definition: The ratio between a length on a drawing or model and the corresponding real length.
  - en: algorithm
    fr: algorithme
    definition: A finite, unambiguous sequence of instructions that transforms inputs into a result.
flashcards:
  - front: How do you find a fraction of a fraction, such as $\frac{2}{5}$ of $\frac{5}{8}$?
    back: 'Multiply the fractions: $\frac{2}{5} \times \frac{5}{8} = \frac{10}{40} = \frac{1}{4}$.'
  - front: What is the sum of the interior angles of any triangle?
    back: Always $180^\circ$. In an isosceles triangle, the two base angles are equal.
  - front: Why is average speed over two legs NOT simply the average of the two speeds?
    back: Average speed equals total distance divided by total time, and slower legs take more time.
  - front: How do two successive percentage discounts (say $-25\%$ then $-20\%$) combine?
    back: 'Multiply the remaining factors: $0.75 \times 0.80 = 0.60$, giving a $40\%$ overall discount, not $45\%$.'
generator:
  type: signed-arithmetic
  seed: 51224
  count: 4
  min: -12
  max: 12
adventDays:
  - day: 1
    id: 5e-advent-01
    title: The Frozen Thermometer Vault
    topic: Signed numbers
    format: riddle
    difficulty: medium
    story: On December 1, snow seals the brass boiler room of Master Barnaby's toy workshop. You must predict the morning temperature before opening the clockwork doors.
    prompt: >-
      At midnight, the workshop boiler gauge reads $-7^\circ\text{C}$. Every hour from 1:00 AM to 8:00 AM, the furnace warms the room by $+4^\circ\text{C}$, except during the 3rd hour and the 6th hour, when an icy chimney draft drops the temperature by $-6^\circ\text{C}$ instead of warming it. What temperature (in $^\circ\text{C}$) does the gauge show at 8:00 AM?
    solution: >-
      Out of the $8$ hours, $6$ hours warm the room by $+4^\circ\text{C}$ each ($6 \times (+4) = +24^\circ\text{C}$), and $2$ hours cool it by $-6^\circ\text{C}$ each ($2 \times (-6) = -12^\circ\text{C}$). The total change is $+24 - 12 = +12^\circ\text{C}$, so the 8:00 AM reading is $-7 + 12 = 5^\circ\text{C}$.
    hints:
      - Count how many of the $8$ hours are warming hours and how many are draft hours.
      - Add the total warming and total cooling to the starting value $-7$.
    assessment:
      kind: numeric
      expected: 5

  - day: 2
    id: 5e-advent-02
    title: The Brass Toolbox Code
    topic: Divisibility and multiples
    format: puzzle
    difficulty: medium
    story: Barnaby misplaced the key to his brass screwdriver chest, leaving only a divisibility clue engraved on the lid.
    prompt: >-
      The padlock opens with the **largest** $3$-digit integer that is divisible by both $4$ and $9$, and whose tens digit is $6$. What is the $3$-digit code?
    solution: >-
      Write the number as $\overline{a6b}$. For divisibility by $4$, the last two digits $\overline{6b}$ must be divisible by $4$, so $b \in \{0, 4, 8\}$. For divisibility by $9$, the digit sum $a + 6 + b$ must be a multiple of $9$: for $b = 0$, $a = 3$ ($360$); for $b = 4$, $a = 8$ ($864$); for $b = 8$, $a = 4$ ($468$). The largest valid code is $864$.
    hints:
      - Use the divisibility rule for $4$ on the last two digits $6b$ to list the possible units digits $b$.
      - For each possible $b$, use the divisibility rule for $9$ (sum of digits) to find the hundreds digit $a$.
    assessment:
      kind: numeric
      expected: 864

  - day: 3
    id: 5e-advent-03
    title: The Peppermint Lacquer Jug
    topic: Fractions
    format: riddle
    difficulty: medium
    story: The painting elves need an exact refill of glossy crimson lacquer for the wooden nutcrackers, but the measurement label peeled off the jug.
    prompt: >-
      An elf pours $\frac{3}{8}$ of a full jug of crimson lacquer into a bowl, then uses $\frac{2}{5}$ of **what remains in the jug** to paint sleigh runners. Exactly $15\text{ cL}$ of lacquer is left in the jug. What was the full capacity of the jug (in $\text{cL}$)?
    solution: >-
      After the first pour, $1 - \frac{3}{8} = \frac{5}{8}$ of the jug remains. Using $\frac{2}{5}$ of that remainder leaves $1 - \frac{2}{5} = \frac{3}{5}$ of it, which is $\frac{3}{5} \times \frac{5}{8} = \frac{3}{8}$ of the full jug. Since $\frac{3}{8}$ of the jug equals $15\text{ cL}$, one eighth is $5\text{ cL}$, and the full capacity is $8 \times 5 = 40\text{ cL}$.
    hints:
      - Find what fraction of the full jug remains after the first pour.
      - Multiply that remainder by the fraction kept after the second pour ($1 - \frac{2}{5} = \frac{3}{5}$).
    assessment:
      kind: numeric
      expected: 40

  - day: 4
    id: 5e-advent-04
    title: The Candy-Cane Conveyor
    topic: Loops and conditionals
    format: algorithm
    difficulty: medium
    story: Barnaby's sorting robot packs peppermint candy canes according to a short block routine, and you must predict the final basket count before switching it on.
    prompt: |
      A workshop robot starts with `canes = 5` and `step = 1`, then repeats the following block $6$ times:

      ```text
      Repeat 6 times:
        If step is odd:
          canes ← canes × 2
        Else:
          canes ← canes − 3
        step ← step + 1
      ```

      How many candy canes are in the basket when the loop finishes?
    solution: >-
      Trace the execution table step by step: step $1$ (odd): $5 \times 2 = 10$; step $2$ (even): $10 - 3 = 7$; step $3$ (odd): $7 \times 2 = 14$; step $4$ (even): $14 - 3 = 11$; step $5$ (odd): $11 \times 2 = 22$; step $6$ (even): $22 - 3 = 19$. The final count is $19$.
    hints:
      - Build a two-column trace table with columns `step` and `canes`.
      - Remember that `step` increases at the end of each pass, so odd steps double and even steps subtract $3$.
    assessment:
      kind: numeric
      expected: 19

  - day: 5
    id: 5e-advent-05
    title: The Miniature Train Blueprint
    topic: Proportionality and scales
    format: puzzle
    difficulty: medium
    story: The town square commissioned a festive wooden ride-on train scaled up directly from Barnaby's parchment blueprint.
    prompt: >-
      On a blueprint drawn at scale $1 : 25$, the locomotive measures $14.4\text{ cm}$ long. Once built at full size, $4$ identical passenger cars are coupled behind it, each measuring $1.8\text{ m}$ long. What is the total length of the full-size train, in **meters**?
    solution: >-
      At scale $1 : 25$, the real locomotive length is $14.4 \times 25 = 360\text{ cm} = 3.6\text{ m}$. The $4$ passenger cars add $4 \times 1.8 = 7.2\text{ m}$. The total length of the train is $3.6 + 7.2 = 10.8\text{ m}$.
    hints:
      - Multiply the blueprint length by $25$ to get the real locomotive length in centimeters.
      - Convert centimeters to meters ($100\text{ cm} = 1\text{ m}$) before adding the $4$ passenger cars.
    assessment:
      kind: numeric
      expected: 10.8

  - day: 6
    id: 5e-advent-06
    title: The Brass Star-Topper Triangle
    topic: Angles and triangles
    format: riddle
    difficulty: medium
    story: Each point of the workshop's golden tree-topper is cut from a precision isosceles brass triangle, and one bevel angle needs to be checked.
    prompt: >-
      Triangle $ABC$ is isosceles with apex $A$ ($AB = AC$). When side $CB$ is extended past vertex $B$, the exterior angle at $B$ measures $118^\circ$. What is the measure, in degrees, of the apex angle $\widehat{BAC}$?
    solution: >-
      The interior angle $\widehat{ABC}$ and the exterior angle at $B$ form a straight angle of $180^\circ$, so $\widehat{ABC} = 180^\circ - 118^\circ = 62^\circ$. Because $AB = AC$, the base angles are equal: $\widehat{ACB} = 62^\circ$. Since the angles of a triangle sum to $180^\circ$, $\widehat{BAC} = 180^\circ - 2 \times 62^\circ = 56^\circ$.
    hints:
      - An interior angle and its adjacent exterior angle on a straight line add up to $180^\circ$.
      - In an isosceles triangle with $AB = AC$, the two base angles $\widehat{ABC}$ and $\widehat{ACB}$ are equal.
    assessment:
      kind: numeric
      expected: 56

  - day: 7
    id: 5e-advent-07
    title: The Gingerbread Oven Formula
    topic: Expressions and formulas
    format: puzzle
    difficulty: medium
    story: The bakery elf uses Barnaby's formula dial to bake spiced gingerbread wheels without scorching a single batch.
    prompt: >-
      The baking time $T$ (in minutes) for $n$ trays at oven boost setting $k$ is given by the formula $T = 3n + 14 - 2k$. On December 7, the oven ran for $T = 35$ minutes with $n = 9$ trays. What was the oven boost setting $k$?
    solution: >-
      Substitute $T = 35$ and $n = 9$ into the formula: $35 = 3 \times 9 + 14 - 2k = 27 + 14 - 2k = 41 - 2k$. Therefore $2k = 41 - 35 = 6$, which gives $k = 3$.
    hints:
      - Substitute $n = 9$ into $3n + 14$ first.
      - Find what value of $2k$ must be subtracted from $41$ to obtain $35$.
    assessment:
      kind: numeric
      expected: 3

  - day: 8
    id: 5e-advent-08
    title: The Eight Chime Bells
    topic: Parity and invariants
    format: proof
    difficulty: medium
    story: Eight sleigh bells hang above the workbench, all silent. An apprentice insists he can set exactly seven of them ringing by pulling pairs of cords.
    prompt: >-
      Eight brass bells hang in a row, all initially silent (OFF). In each move, an apprentice picks **two** different bells and flips both of their states (ON becomes OFF, and OFF becomes ON). Prove whether the apprentice can ever reach a state where **exactly $7$** bells are ringing (ON) at the same time.
    solution: >-
      Look at the parity (even or odd) of the number of ringing bells. In a single move, flipping two bells can do one of three things: turn two OFF bells ON ($+2$), turn two ON bells OFF ($-2$), or flip one ON and one OFF ($0$). In every case, the number of ringing bells changes by an even number ($+2$, $-2$, or $0$), so its parity is invariant. Initially $0$ bells are ringing (even), so after any number of moves the count of ringing bells must remain even. Since $7$ is odd, it is impossible to make exactly $7$ bells ring.
    hints:
      - 'List the three possible outcomes when you flip two bells: (OFF, OFF), (ON, ON), or (ON, OFF).'
      - Check how the total number of ON bells changes in each of those three cases.
    assessment:
      kind: reasoning
      rubric:
        - Examines all three cases of flipping two bells ($+2$, $-2$, and $0$).
        - Concludes that the parity of the number of ringing bells is invariant (always stays even).
        - Compares the even initial count ($0$) with the odd target ($7$) to prove impossibility.

  - day: 9
    id: 5e-advent-09
    title: The Wooden Block Pyramid
    topic: Powers, squares, and cubes
    format: puzzle
    difficulty: medium
    story: Barnaby stacks a six-layer festive pyramid of unit wooden blocks, then melts down his blueprint to reshape the blocks into one solid music-box cube.
    prompt: >-
      A $6$-layer square pyramid is built from unit cubes: from bottom to top, the layers contain $6^2$, $5^2$, $4^2$, $3^2$, $2^2$, and $1^2$ unit cubes. Barnaby removes $3^3$ unit cubes to carve a music-box chamber, then rearranges **all remaining cubes** into one solid cube with no leftovers. What is the edge length (in unit cubes) of that new solid cube?
    solution: >-
      The total number of unit cubes in the pyramid is $6^2 + 5^2 + 4^2 + 3^2 + 2^2 + 1^2 = 36 + 25 + 16 + 9 + 4 + 1 = 91$. Removing $3^3 = 27$ cubes leaves $91 - 27 = 64$ unit cubes. Since $64 = 4^3$, the solid cube has edge length $4$.
    hints:
      - Compute each square from $1^2$ to $6^2$ and add them up.
      - Subtract $3^3 = 27$, then recognize the remaining number as a perfect cube $a^3$.
    assessment:
      kind: numeric
      expected: 4

  - day: 10
    id: 5e-advent-10
    title: Rudolph's Brass Nose
    topic: Mean and data
    format: riddle
    difficulty: medium
    story: Barnaby weighs his carved reindeer team before mounting them onto the music-box carousel, and Rudolph's glowing brass nose tips the balance.
    prompt: >-
      Six carved wooden reindeer figurines have a mean mass of $145\text{ g}$. When Barnaby adds a seventh figurine—Rudolph—the mean mass of all $7$ figurines rises to $152\text{ g}$. What is Rudolph's mass, in grams?
    solution: >-
      The total mass of the first $6$ figurines is $6 \times 145 = 870\text{ g}$. With Rudolph included, the total mass of all $7$ figurines is $7 \times 152 = 1064\text{ g}$. Therefore Rudolph's mass is $1064 - 870 = 194\text{ g}$.
    hints:
      - Multiply the mean by the number of figurines to find the total mass before and after adding Rudolph.
      - Subtract the smaller total from the larger total.
    assessment:
      kind: numeric
      expected: 194

  - day: 11
    id: 5e-advent-11
    title: The Clockwork Elf Patrol
    topic: Coordinates and loops
    format: algorithm
    difficulty: hard
    story: A wind-up scout elf patrols the tiled workshop floor in an expanding spiral to sweep up stray gold glitter.
    prompt: |
      A clockwork elf starts at coordinates $(0, 0)$ facing East (the $+x$ direction), with step length `d = 2`. It runs this loop $5$ times:

      ```text
      Repeat 5 times:
        Move forward d units
        Turn 90° counterclockwise
        d ← d + 1
      ```

      What are the elf's final coordinates `(x, y)`?
    solution: >-
      Follow each pass of the loop: pass $1$ (East, $d = 2$): $(0, 0) \to (2, 0)$, turn North; pass $2$ (North, $d = 3$): $(2, 0) \to (2, 3)$, turn West; pass $3$ (West, $d = 4$): $(2, 3) \to (-2, 3)$, turn South; pass $4$ (South, $d = 5$): $(-2, 3) \to (-2, -2)$, turn East; pass $5$ (East, $d = 6$): $(-2, -2) \to (4, -2)$. The final coordinates are $(4, -2)$.
    hints:
      - 'List the four directions in counterclockwise order starting from East: East ($+x$), North ($+y$), West ($-x$), South ($-y$).'
      - Update the $(x, y)$ position after each of the $5$ moves with lengths $2, 3, 4, 5, 6$.
    assessment:
      kind: exact
      expected: "(4, -2)"
      accepted:
        - "(4,-2)"
        - "(4;-2)"
        - "(4 ; -2)"

  - day: 12
    id: 5e-advent-12
    title: The Mirrored Snowflake Tile
    topic: Central symmetry and parallelograms
    format: puzzle
    difficulty: hard
    story: Barnaby sets a parallelogram stained-glass pane into the workshop lantern, using the center of symmetry where its diagonals cross.
    prompt: >-
      In a coordinate plane, $ABCD$ is a parallelogram (vertices in order $A, B, C, D$) with $A(-3, 2)$, $B(4, 2)$, and $C(6, -3)$. Find the coordinates of vertex $D$, and enter the sum $x_D + y_D$.
    solution: >-
      In parallelogram $ABCD$, the diagonals $AC$ and $BD$ share the same midpoint $O$. The midpoint of $AC$ is $O\left(\frac{-3 + 6}{2}, \frac{2 + (-3)}{2}\right) = (1.5, -0.5)$. Equivalently, moving from $B(4, 2)$ to $A(-3, 2)$ shifts by $(-7, 0)$, so moving from $C(6, -3)$ to $D$ also shifts by $(-7, 0)$, giving $D(-1, -3)$. Check: midpoint of $BD$ is $\left(\frac{4 - 1}{2}, \frac{2 - 3}{2}\right) = (1.5, -0.5)$. Hence $x_D + y_D = -1 + (-3) = -4$.
    hints:
      - In a parallelogram $ABCD$, the diagonals $AC$ and $BD$ bisect each other (same midpoint).
      - Alternatively, opposite sides $BA$ and $CD$ have the exact same horizontal and vertical displacement.
    assessment:
      kind: numeric
      expected: -4

  - day: 13
    id: 5e-advent-13
    title: The Double-Discount Ribbon Sale
    topic: Percentages
    format: riddle
    difficulty: hard
    story: At the Christmas market, the silk merchant offers two back-to-back discounts on spools of golden wrapping ribbon—but they do not simply add!
    prompt: >-
      A spool of golden ribbon costs $40$ €. The merchant first lowers the price by $25\%$, and then applies a second $20\%$ workshop discount to the **already reduced** price. What is the single overall percentage discount Barnaby received? (Enter only the number, without the `%` symbol.)
    solution: >-
      After the $25\%$ discount, the price drops to $40 \times 0.75 = 30$ €. Taking $20\%$ off $30$ € leaves $30 \times 0.80 = 24$ €. The total savings is $40 - 24 = 16$ €, and $\frac{16}{40} = \frac{2}{5} = 0.40 = 40\%$.
    hints:
      - Compute the intermediate price after the first $25\%$ discount before applying the second discount.
      - Compare the total euros saved with the original price of $40$ €.
    assessment:
      kind: numeric
      expected: 40

  - day: 14
    id: 5e-advent-14
    title: The Thick-Walled Gift Chest
    topic: Solids and volume
    format: puzzle
    difficulty: hard
    story: Barnaby builds a sturdy cedar shipping chest for painted wooden blocks, but thick walls leave less room inside than the outer measurements suggest.
    prompt: >-
      A closed rectangular wooden chest has **outer** dimensions $34\text{ cm}$ long, $24\text{ cm}$ wide, and $18\text{ cm}$ high. Every wall—all four sides, the bottom, and the flat lid—is $2\text{ cm}$ thick. How many toy cubes of edge length $2\text{ cm}$ can fit completely inside the hollow interior of the chest?
    solution: >-
      Each dimension loses $2\text{ cm}$ on **both** opposite faces, so subtract $4\text{ cm}$ from every outer dimension. The inner dimensions are $34 - 4 = 30\text{ cm}$, $24 - 4 = 20\text{ cm}$, and $18 - 4 = 14\text{ cm}$. Along each edge we fit $30 \div 2 = 15$, $20 \div 2 = 10$, and $14 \div 2 = 7$ cubes. The total number of $2\text{ cm}$ cubes is $15 \times 10 \times 7 = 1050$.
    hints:
      - Along the length, width, and height, there are two opposite wooden walls of thickness $2\text{ cm}$ each.
      - Divide each inner dimension by $2\text{ cm}$ to count how many cubes fit along each axis, then multiply.
    assessment:
      kind: numeric
      expected: 1050

  - day: 15
    id: 5e-advent-15
    title: The Skylight Rosette Proof
    topic: Angles and arithmetic reasoning
    format: proof
    difficulty: hard
    story: Barnaby wants to surround the center vertex of his circular stained-glass skylight with a tight ring of equilateral triangles and squares.
    prompt: >-
      Around a single point $O$ on the skylight, Barnaby places equilateral triangles (each angle $60^\circ$) and squares (each angle $90^\circ$) edge to edge with no gaps and no overlaps, so their angles around $O$ sum to exactly $360^\circ$. He must use **at least one triangle and at least one square**. Find **all** valid combinations of triangles and squares, and prove that no other combination is possible.
    solution: >-
      Let $t \ge 1$ be the number of equilateral triangles and $s \ge 1$ be the number of squares. Their angles around $O$ must satisfy $60t + 90s = 360$. Dividing both sides by $30$ gives $2t + 3s = 12$. Test every possible integer $s \ge 1$ with $3s < 12$:
      - If $s = 1$: $2t = 9$, impossible since $9$ is odd.
      - If $s = 2$: $2t = 6 \implies t = 3$ (check: $3 \times 60^\circ + 2 \times 90^\circ = 180^\circ + 180^\circ = 360^\circ$).
      - If $s = 3$: $2t = 3$, impossible since $3$ is odd.
      - If $s \ge 4$: $3s \ge 12$, so $2t \le 0$, impossible since $t \ge 1$.
      Thus the **only** valid combination is $3$ equilateral triangles and $2$ squares.
    hints:
      - Write an angle equation relating the number of triangles $t$ (each $60^\circ$) and squares $s$ (each $90^\circ$) to $360^\circ$.
      - Simplify the equation by dividing by $30$, then test every possible whole number value of $s \ge 1$.
    assessment:
      kind: reasoning
      rubric:
        - Sets up the angle condition $60t + 90s = 360$ (or $2t + 3s = 12$) with $t \ge 1$ and $s \ge 1$.
        - Finds the valid solution $t = 3$ triangles and $s = 2$ squares and verifies $360^\circ$.
        - Exhaustively eliminates $s = 1$, $s = 3$, and $s \ge 4$ to prove uniqueness.

  - day: 16
    id: 5e-advent-16
    title: The Velvet Ornament Bag
    topic: Probability and ratios
    format: riddle
    difficulty: hard
    story: Inside a midnight-blue velvet pouch sit two dozen hand-blown glass ornaments waiting to be hung on the workshop spruce.
    prompt: >-
      A velvet bag holds $24$ glass ornaments: red, gold, and silver. If you pick one ornament at random, the probability of drawing a red ornament is $\frac{3}{8}$. Among the remaining ornaments, there are **twice as many gold ornaments as silver ornaments**. What is the exact probability (as a simplified fraction `a/b`) of drawing an ornament that is **not silver**?
    solution: >-
      The number of red ornaments is $\frac{3}{8} \times 24 = 9$, leaving $24 - 9 = 15$ gold and silver ornaments combined. Since gold is twice silver, the $15$ ornaments split into $3$ equal parts of $5$: $5$ silver and $10$ gold. There are $24 - 5 = 19$ ornaments that are not silver, so the probability is $\frac{19}{24}$.
    hints:
      - First find the number of red ornaments using $\frac{3}{8}$ of $24$.
      - 'Split the remaining ornaments in a $2 : 1$ ratio (gold to silver), then count all non-silver ornaments.'
    assessment:
      kind: exact
      expected: "19/24"

  - day: 17
    id: 5e-advent-17
    title: The Clockwork Sled Test Run
    topic: Functions, graphs, and speed
    format: puzzle
    difficulty: hard
    story: Barnaby tests his miniature rocket-sled along a straight wooden runway and logs its distance-time profile in three stages.
    prompt: >-
      During a $16$-second test run on a straight track:
      - From $t = 0\text{ s}$ to $t = 6\text{ s}$, the sled glides at a steady speed of $4\text{ m/s}$.
      - From $t = 6\text{ s}$ to $t = 10\text{ s}$, it stops to reload snowball ballast.
      - From $t = 10\text{ s}$ to $t = 16\text{ s}$, it races at $6\text{ m/s}$.

      What is the sled's **average speed** over the entire $16$-second test, in $\text{m/s}$?
    solution: >-
      Compute the distance covered in each interval: $6 \times 4 = 24\text{ m}$ in the first stage, $0\text{ m}$ during the pause, and $6 \times 6 = 36\text{ m}$ in the final stage. The total distance is $24 + 0 + 36 = 60\text{ m}$ over a total time of $16\text{ s}$. Thus the average speed is $\frac{60}{16} = \frac{15}{4} = 3.75\text{ m/s}$.
    hints:
      - Calculate the total distance traveled across all three intervals.
      - Remember to include the $4$-second pause in the total time of $16$ seconds when dividing distance by time.
    assessment:
      kind: numeric
      expected: 3.75

  - day: 18
    id: 5e-advent-18
    title: The Synchronized Music-Box Chimes
    topic: Multiples, LCM, and algorithmic counting
    format: algorithm
    difficulty: hard
    story: Three clockwork gears strike tiny silver chimes at different periods, and whenever two or more strike together, a festive chord rings through the workshop.
    prompt: |
      Three gears chime at $t = 0$: the Silver gear chimes every $6\text{ s}$, the Gold gear every $8\text{ s}$, and the Ruby gear every $10\text{ s}$. A counting routine inspects every integer second from $1$ to $120$:

      ```text
      chords ← 0
      For t from 1 to 120:
        hits ← (t divisible by 6) + (t divisible by 8) + (t divisible by 10)
        If hits ≥ 2:
          chords ← chords + 1
      ```

      What is the final value of `chords`?
    solution: >-
      A chord happens at every multiple of $\text{lcm}(6, 8) = 24$, $\text{lcm}(6, 10) = 30$, or $\text{lcm}(8, 10) = 40$ between $1$ and $120$:
      - Multiples of $24$: $24, 48, 72, 96, 120$ ($5$ seconds).
      - Multiples of $30$: $30, 60, 90, 120$ ($4$ seconds).
      - Multiples of $40$: $40, 80, 120$ ($3$ seconds).
      Notice that $t = 120$ appears in all three lists (a triple chord!), so we must count it only once instead of three times: $5 + 4 + 3 - 2 = 10$ distinct chord seconds ($24, 30, 40, 48, 60, 72, 80, 90, 96, 120$).
    hints:
      - 'Find the least common multiple of each pair of gear periods: $(6, 8)$, $(6, 10)$, and $(8, 10)$.'
      - List their multiples up to $120$, being careful not to count $120$ more than once!
    assessment:
      kind: numeric
      expected: 10

  - day: 19
    id: 5e-advent-19
    title: The Nested Gingerbread Plaza
    topic: Area and symmetry
    format: riddle
    difficulty: challenge
    story: Barnaby cuts a nested golden square pattern out of a giant square gingerbread slab using only midpoints and a straightedge.
    prompt: >-
      Start with a square gingerbread slab of side length $12\text{ cm}$. Connect the midpoint of each side to the midpoint of the next side to draw an inner square. Then repeat the exact same midpoint construction once more inside that inner square to form a third, smallest square at the center. What is the area, in $\text{cm}^2$, of this smallest innermost square?
    solution: >-
      The outer square has area $12 \times 12 = 144\text{ cm}^2$. Joining the midpoints of a square creates four congruent corner right triangles that can be folded inward to cover the inner square exactly—meaning each midpoint square has **half** the area of the square containing it. Thus the middle square has area $144 \div 2 = 72\text{ cm}^2$, and the innermost square has area $72 \div 2 = 36\text{ cm}^2$.
    hints:
      - Draw the diagonals of the inner square (which join opposite midpoints of the outer square) to split the outer square into $8$ identical right triangles.
      - Count how many of those $8$ triangles lie inside the inner square, then apply the same ratio a second time.
    assessment:
      kind: numeric
      expected: 36

  - day: 20
    id: 5e-advent-20
    title: The Three Toy Chests
    topic: Algebraic expressions
    format: puzzle
    difficulty: challenge
    story: Ninety-three miniature clockwork trains are packed into three heirloom chests—Oak, Pine, and Cedar—ready for Santa's elves to load.
    prompt: >-
      Barnaby distributes $93$ clockwork trains among three chests (Oak, Pine, and Cedar) so that:
      - The Pine chest holds $7$ more trains than the Oak chest.
      - The Cedar chest holds **twice** as many trains as the Pine chest.

      How many trains are packed in the **Cedar** chest?
    solution: >-
      Let $x$ be the number of trains in the Oak chest. Then Pine holds $x + 7$ trains and Cedar holds $2(x + 7) = 2x + 14$ trains. The total is $x + (x + 7) + (2x + 14) = 4x + 21 = 93$. Subtract $21$ to get $4x = 72$, so $x = 18$ (Oak). Pine has $18 + 7 = 25$, and Cedar has $2 \times 25 = 50$ trains. Check: $18 + 25 + 50 = 93$.
    hints:
      - Represent the number of trains in the Oak chest by a letter $x$, and express Pine and Cedar in terms of $x$.
      - Add the three expressions, set the total equal to $93$, and solve for $x$—then remember to compute Cedar!
    assessment:
      kind: numeric
      expected: 50

  - day: 21
    id: 5e-advent-21
    title: The Bow-Sorting Contraption
    topic: Parity and invariants
    format: proof
    difficulty: challenge
    story: Barnaby's experimental gift-bow recycler pulls two bows at a time and always drops one bow back in—yet the final bow's color is completely predetermined!
    prompt: >-
      A bin holds $15$ red bows and $14$ green bows. In each step, a machine pulls out two bows at random:
      - If the two bows have the **same color**, the machine removes both and puts $1$ **red** bow into the bin.
      - If the two bows have **different colors**, the machine removes both and puts $1$ **green** bow into the bin.

      After $28$ steps, exactly $1$ bow remains in the bin. Determine what color that last bow **must** be, and prove that the answer does not depend on which bows were drawn.
    solution: >-
      Track the number $G$ of green bows in the bin:
      - Drawing (Red, Red) puts back Red, so $G$ changes by $0$.
      - Drawing (Green, Green) puts back Red, so $G$ changes by $-2$.
      - Drawing (Red, Green) puts back Green, so $G$ changes by $0$.
      In every possible step, $G$ decreases by $0$ or $2$, so the **parity** of $G$ is invariant. Initially $G = 14$ (even), so $G$ must remain even after all $28$ steps. When only $1$ bow remains, $G$ can only be $0$ or $1$; since it must be even, $G = 0$. Therefore the last bow **must be red**.
    hints:
      - Focus only on the count of **green** bows $G$, and check how $G$ changes in each of the three draw types.
      - Notice whether $G$ can ever switch between even and odd.
    assessment:
      kind: reasoning
      rubric:
        - Checks how the number of green bows $G$ changes in all three cases ($0$, $-2$, and $0$).
        - Concludes that the parity of $G$ is an invariant and therefore stays even.
        - Deduces that with $1$ bow left, $G$ must be $0$, so the last bow is guaranteed to be red.

  - day: 22
    id: 5e-advent-22
    title: The Nutcracker Battery March
    topic: State-machine algorithm
    format: algorithm
    difficulty: challenge
    story: A wind-up nutcracker marches across the workbench while its brass energy dial ticks down according to a quirky parity rule.
    prompt: |
      The nutcracker's energy counter starts at `E = 46` and `minutes = 0`. It runs this loop until `E ≤ 5`:

      ```text
      While E > 5:
        If E is even:
          E ← E ÷ 2
        Else:
          E ← E + 7
        minutes ← minutes + 1
      ```

      How many minutes does the nutcracker march before the loop stops?
    solution: >-
      Trace the energy value at each minute:
      $46 \xrightarrow{1} 23 \xrightarrow{2} 30 \xrightarrow{3} 15 \xrightarrow{4} 22 \xrightarrow{5} 11 \xrightarrow{6} 18 \xrightarrow{7} 9 \xrightarrow{8} 16 \xrightarrow{9} 8 \xrightarrow{10} 4$.
      Since $4 \le 5$, the loop stops after exactly $10$ minutes.
    hints:
      - Write out each value of $E$ carefully, checking even vs. odd at every step.
      - Stop as soon as $E$ becomes $5$ or less—do not run an extra step once $E = 4$.
    assessment:
      kind: numeric
      expected: 10

  - day: 23
    id: 5e-advent-23
    title: The Sleigh Cargo Ratio
    topic: Ratios and proportional reasoning
    format: riddle
    difficulty: challenge
    story: On the night before Christmas Eve, Barnaby loads an extra crate of wooden trains onto Santa's test sleigh, shifting the balance between trains and bears.
    prompt: >-
      Santa's test sleigh initially carries wooden trains and stuffed bears in the ratio $3 : 5$. Barnaby then adds $18$ more trains (and no bears), changing the ratio of trains to bears to $9 : 10$. How many toys (trains and bears **combined**) are on the sleigh **after** adding the $18$ trains?
    solution: >-
      Because the number of bears does not change, rewrite both ratios with the same number of bear parts ($10$ parts): initially trains : bears $= 3 : 5 = 6 : 10$, and afterward trains : bears $= 9 : 10$. The increase of $9 - 6 = 3$ parts corresponds to the $18$ added trains, so $1$ part $= 18 \div 3 = 6$ toys. Afterward there are $9 + 10 = 19$ parts in total, giving $19 \times 6 = 114$ toys ($54$ trains and $60$ bears).
    hints:
      - 'The number of bears stays constant—rewrite the starting ratio $3 : 5$ so that bears have $10$ parts, matching $9 : 10$.'
      - Compare the change in train parts to the $18$ added trains to find the value of $1$ part.
    assessment:
      kind: numeric
      expected: 114

  - day: 24
    id: 5e-advent-24
    title: The Grand Star Clockwork
    topic: Parity, gears, and inverse proportionality
    format: proof
    difficulty: challenge
    story: Christmas Eve has arrived! Barnaby unveils the centerpiece of his workshop—a ring of twelve interlocking brass gears crowned by a glowing star—and needs your final mathematical clearance before pulling the lever.
    prompt: >-
      Twelve interlocking brass gears are arranged in a closed ring (Gear $1$ meshes with Gear $2$, Gear $2$ with Gear $3$, $\dots$, and Gear $12$ meshes back with Gear $1$). Gear $1$ has $24$ teeth and is driven **clockwise** at $5$ full revolutions per minute. Gear $7$ (directly across the ring) has $15$ teeth.
      1. Prove whether the $12$-gear ring can turn smoothly without jamming, and determine which direction (clockwise or counterclockwise) Gear $7$ rotates.
      2. Calculate how many full revolutions per minute Gear $7$ makes, justifying why the tooth counts of the gears in between do not change the answer.
    solution: >-
      1. **No jamming and direction:** Whenever two gears mesh, they rotate in opposite directions. Starting with Gear $1$ clockwise, every **odd-numbered** gear ($1, 3, 5, 7, 9, 11$) turns clockwise and every **even-numbered** gear ($2, 4, 6, 8, 10, 12$) turns counterclockwise. Because $12$ is even, Gear $12$ turns counterclockwise and meshes consistently with clockwise Gear $1$, so the ring turns freely without jamming. Since $7$ is odd, Gear $7$ turns **clockwise**.
      2. **Speed of Gear 7:** Every single tooth that passes the contact point on one gear pushes exactly one tooth on the next gear. Therefore, the rate of teeth passing per minute is the same for every gear in the chain: $24 \times 5 = 120$ teeth per minute (regardless of the sizes of Gears $2$ through $6$). For Gear $7$ ($15$ teeth), this gives $120 \div 15 = 8$ full revolutions per minute.
    hints:
      - Mark each gear around the ring with CW (clockwise) or CCW (counterclockwise) and check whether Gear $12$ agrees with Gear $1$.
      - Think about how many teeth pass each meshing point in one minute—that quantity is invariant along the entire gear train!
    assessment:
      kind: reasoning
      rubric:
        - Proves that the $12$-gear ring turns without jamming because $12$ is even (alternating CW/CCW around the loop) and concludes Gear $7$ turns clockwise.
        - Identifies that the number of teeth passing per minute ($24 \times 5 = 120$) is identical for every meshing gear, independent of intermediate gears.
        - Computes Gear $7$'s speed as $120 \div 15 = 8$ revolutions per minute.
---
## Welcome to Master Barnaby's Clockwork Workshop

December has arrived, snow is drifting past the arched windows, and Master Barnaby's clockwork toy workshop is racing the clock to finish every wooden train, brass music box, and velvet ornament before Christmas Eve.

Each door from **December 1 to December 24** unlocks a brand-new workshop challenge drawing from every corner of the **5e curriculum**: signed numbers, divisibility, fractions, proportionality, angles, symmetry, area, volume, probability, and block algorithms—culminating in four hands-on proof mysteries and the **Grand Star Clockwork** on Christmas Eve.

> Use the vocabulary chips and quick-recall flashcards above as your apprentice toolkit, and remember: every problem can be solved cleanly by reasoning, without guesswork!
