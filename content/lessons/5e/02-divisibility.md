---
id: 5e-divisibility
order: 2
title: Divisibility as pattern hunting
level: 5e
strand: Arithmetic and reasoning
difficulty: stretch
estimatedMinutes: 25
summary: Move beyond divisibility rules by explaining why remainders reveal structure.
objectives:
  - Use Euclidean division
  - Interpret a remainder
  - Find repeating patterns
prerequisites:
  - Multiplication tables
  - Whole-number division
vocabulary:
  - en: divisor
    fr: diviseur
    definition: The number by which another number is divided.
  - en: remainder
    fr: reste
    definition: What remains after forming as many complete groups as possible.
  - en: multiple
    fr: multiple
    definition: A number obtained by multiplying an integer by another integer.
flashcards:
  - front: Write the Euclidean division identity.
    back: dividend = divisor × quotient + remainder, with 0 ≤ remainder < divisor.
  - front: What remainder do multiples of 5 have when divided by 5?
    back: Zero.
  - front: Why can a remainder modulo 4 never be 4?
    back: Because another complete group of 4 could be removed; remainders are from 0 to 3.
generator:
  type: remainder
  seed: 51202
  count: 6
  divisorMin: 3
  divisorMax: 11
  quotientMin: 4
  quotientMax: 20
---
## A division tells a story

Euclidean division packages a number into equal groups:

$$n = dq + r \quad\text{with}\quad 0 \le r < d$$

For $47 \div 6$, there are seven complete groups and five left over:

$$47 = 6 \times 7 + 5$$

The restriction $r < d$ matters. If six or more objects remained, we could form another group.

## Remainders classify every integer

When dividing by $3$, every whole number has remainder $0$, $1$, or $2$. So all integers fit one of three forms:

$$3k,\qquad 3k+1,\qquad 3k+2$$

This is more than a calculation trick. It lets us reason about infinitely many numbers at once.

### A first proof pattern

Take two odd numbers. Each can be written as $2k+1$. Their sum is

$$(2a+1)+(2b+1)=2(a+b+1),$$

which is divisible by $2$. Therefore the sum of two odd numbers is always even.

> Olympiad habit: replace examples by a form that represents every possible case.

### Challenge

What are the possible remainders of a square when divided by $4$? Test the four possible input remainders, then explain why you have tested every integer.
