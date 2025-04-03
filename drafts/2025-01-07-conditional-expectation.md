---
layout: post
title: Conditional expectation with respect to von-Neumann subalgebras
date: 2025-01-07 12:00:00-0400
description: some notes on a paper by D. Shlyakhtenko
tags: math operator-algebras statistics
related_posts: false
---

This post is inspired by this <a href="https://www.jstor.org/stable/25449122">paper</a> by D. Shlyakhtenko (<a
href="https://arxiv.org/pdf/math/0510103"> arxiv link to similar result</a>).
While reading this paper, I came across some notation in formula in the statement of lemma
4 that I was unfamiliar with

$$ 
f\left( \sum_{i=1}^{N+1} X^{(k)}_{i}
: \left\{\sum_{i=1}^{N+1}X^{(r)}_{i}\right\}_{r\neq k}\right)
= E_{W^{\star}\left(\left\{\sum_{i=1}^{N+1} X^{(r)}_{i}\right\}_{r=1}^{n}\right)}f\left(\sum_{i\neq j}X_{i}^{(k)}
: \left\{\sum_{i \neq j} X_{i}^{(r)}\right\}_{r \neq k},
\left\{X_{j}^{r}\right\}_{r=1}^{n}\right)
$$

In particular, what is this 

$$E_{W^{\star}\left(\left\{\sum_{i=1}^{N+1} X^{(r)}_{i}\right\}_{r=1}^{n}\right)}$$

and what does this mean? My advisor told me that the $$E$$ represents a conditional expectation and the $$W^\star$$ 
represents a von-Neumann subalgebra. So, the goal of this post is to unpack this notation entirely.

### Background

Let $$(\Omega, \Sigma, \mathbb{P})$$ be a probability space. Consider the
commutative von-Neumann algebra of real valued random variables $$A
= L^{\infty}(\Omega, \mathbb{P})$$ where we make the identification of $$A \ni f \equiv M_{f} \in \mathcal{B}(L^2(\Omega,
\mathbb{P}))$$ where $$M_{f}$$ as as the multiplication operator acting by $$L^2(\Omega,
\mathbb{P}) \ni g \mapsto fg$$.

In which case we will have the tracial state $$\tau$$ on $$A$$ being equal to simply the expectation
$$E[X] = \int_{\Omega} X(\omega) d\mathbb{P}(\omega)$$. Note: we may sometmes replace
$$\mathbb{P}$$ with $$\mu$$, but both indicate the same probability measure on
$$\Omega$$. 

Let $$(X_{1}, \ldots, X_{n})$$ and $$(Y_{1}, \ldots, Y_{n})$$ be $$n$$-tuples random variables.
Let $P, Q \in A$ be polynomials in $$X_{i}$$s and $$Y_{i}$$s respectively. Then
we have 

$$E[P] = \int_{\Omega} P(X_{1}(\omega), \ldots,
X_{n}(\omega))d\mathbb{P}(\omega) $$ 

and, similarly,

$$E[Q] = \int_{\Omega}
P(Y_{1}(\omega),\ldots,Y_{n}(\omega))d\mathbb{P}(\omega)$$

Moreover, we say that the tuples of $$X_{i}$$s and $$Y_{i}$$s are
**independent** if and only iff $$E[PQ] = E[QP] = E[P]E[Q]$$ whenever $$P$$ and $$Q$$ are
polynomials in $$X_{i}$$s and $$Y_{i}$$s respectively.


Now, we define the space $$L^{2}(A, E(\cdot))$$. 


The standard definition of conditional expectation takes place in the arena of
some probability space $$(\Omega, \Sigma, \mathcal{P})$$ with two random
variables $$X$$ and $$Y$$. Then, intuitively, we can construct a new random
variable $$Z = E[X|Y]$$. This new random variable gives us the expectation of
$$X$$ given $$Y$$ occurs. A simple example of this given on the <a
href="https://en.wikipedia.org/wiki/Conditional_expectation#Example_1:_Dice_rolling">
wikipedia page</a> for conditional expectation. However, 

