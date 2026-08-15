# Curriculum direction

This repository uses anonymous learner tracks. Names and other identifying data do not belong in source control.

## Entering 5e

The core route follows the French `cycle 4` transition while repairing any fragile `cycle 3` foundations.

- Numbers and calculations: signed integers and decimals, fractions, divisibility criteria, mental arithmetic, powers, squares and cubes
- Proportionality and dependencies: ratios, unit rates, percentages, scales, formulas, tables, coordinate points and graphs
- Algebra: operation language, substitution, literal expressions, distributivity and plausibility checks
- Geometry: angles, triangle construction and remarkable lines, central symmetry, parallelograms and special quadrilaterals
- Measurement and space: perimeter, area, unit conversion, nets, views, prisms, cylinders and volume
- Data and chance: tables, bar/circle/Cartesian displays, simple mean, frequencies and elementary probability
- Computational thinking: inputs/outputs, block programs, parameters, loops, coordinates and execution tables
- Stretch: invariants, systematic counting, optimization and proof language

The implemented 5e route contains 12 ordered lessons covering every domain above.

## Entering 3e

The core route builds fluent `Brevet` knowledge while turning procedural work into reasoning.

- Numbers: prime factors, Euclidean algorithm, signed rational calculations, powers and scientific notation
- Algebra and functions: equations, identities, factorization, linear/affine functions, formulas, tables and graphs
- Proportionality and measurement: ratios, proportional sharing, percentages, speed, flow rate, density, compound units and volumes
- Geometry: symmetries, transformations, homothety, Thales, Pythagoras, trigonometry, spatial sections and solids
- Data and probability: mean, weighted mean, median, range, charts, events, complements and compound experiments
- Computational thinking: variables, conditionals, loops, functions, debugging, simulation and algorithm design
- Stretch: modular arithmetic, Diophantine problems, combinatorics and olympiad geometry

The implemented 3e route contains 15 core lessons plus one optional modular-arithmetic extension.

## Entering 1re

The core route follows `Première générale`, with mathematics as a speciality and supporting links to physics-chemistry and engineering science. The long runway points toward `Terminale`, then CPGE mathematics.

- Algebra: quadratics, equations, inequalities and representation changes
- Analysis: functions, sequences, derivatives and optimisation
- Geometry: vectors, coordinate methods and trigonometry
- Probability: conditional probability and random variables
- Computational work: Python, numerical experiments and modelling
- CPGE runway: proof, inequalities, recurrence, complex problems, invariants and olympiad methods

## Terminale spécialité

The core route follows `Terminale générale`, mathematics speciality, while the advanced tier prepares students for proof-intensive post-baccalaureate study.

- Analysis: induction, sequence limits, continuity, intermediate value theorem and logarithms
- Geometry: vector and coordinate methods in three-dimensional space
- Probability and combinatorics: counting, binomial coefficients and proof by double counting
- CPGE runway: strengthened induction, quantitative convergence, parameter classification and general proofs

## Terminale mathématiques expertes

The expert route deepens algebraic structure and discrete mathematics.

- Complex numbers: algebraic, trigonometric and exponential forms, roots and geometry
- Arithmetic: congruences, Euclidean algorithm, Bézout, Gauss and Diophantine equations
- Matrices and graphs: linear systems, adjacency matrices and stochastic processes
- CPGE runway: roots of unity, simultaneous congruences and matrix identities

## Adaptation model

The current system is deliberately deterministic:

1. A learner studies a short Markdown lesson.
2. Flashcards provide retrieval practice.
3. A reviewed four-tier set provides a repeatable progression from direct application to advanced proof.
4. A score of at least 80% across exercises labelled `core` marks the lesson mastered in local browser storage; stretch, olympiad and Tier 4 work remains optional.
5. Future routing can use attempt history to prescribe revision, core, or stretch work.

An LLM may later propose variants, hints, or explanations, but generated material should remain untrusted until validated against a schema and, for new mathematical claims, reviewed.
