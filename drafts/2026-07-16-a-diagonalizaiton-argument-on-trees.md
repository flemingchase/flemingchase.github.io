---
layout: post
title: A Diagonlization Argument on Trees
date: 2027-07-16 12:00:00-0400
description: Looking at complete countably infinite branching trees
tags: math set-theory trees
related_posts: false
---

This argument was used in my most recent paper, and it arose by looking for a counterexample for a tree that does not witness a discrete $(0,1)$-generator. Taking a step back, I realized that it is simply a classical diagonilization argument. Instead of choosing numbers in the sequences of all ``listed'' real numbers, we are choosing successors points at elements in the complete $\omega$-ary tree at every successor stage.

### Background

The classical Cantor diagonlization argument proceeds roughly as follows. First, assume that the real numbers in the interval $(0,1)$ are countable, and simply list them out with their decimal expansion. Then, you construct a new real umber $x$ by selecting a different digit for the $n$th decimal place from the $n$th digit of the $n$th number. This new number $x$ will be an element of the interval $(0,1)$, and will be different from every number that is listed. This is an extremely low level overview of the argument as there is some care needed to ensure that we do not end up with an infini

### The Setup

Let $T = \omega^{\leq\omega}$ be the complete $\omega$-ary tree of height $\omega +
1$. For every limit point $t_{\alpha} \in \omega^{\omega}$, pick some point
$\phi(t_{\alpha})$ in $\omega^{<\omega}$ such that $\phi(t_{\alpha}) <
t_{\alpha}$. Then, for every point $s \in \omega^{<\omega}$, let $F_s$ be a
finite collection of isolated points $\{s_1, s_2, \ldots, s_n\}$ such that $s_i
> s$ for each $i\leq n$ and $s_i$ are not limit points.

The question is the following: does there exist a limit point $t$ such that for
every $\phi(t) \leq s < t$, $t$ is incomparable with every $s_i \in F_s$? 

The answer is rather intuitive. Construct this limit point of the tree by
traversing down the tree and choosing, at every level, an immediate successor
which does not go in the direction of any of $F_s$. 
