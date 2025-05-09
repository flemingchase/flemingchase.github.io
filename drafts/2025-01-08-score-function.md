---
layout: post
title: Properties of the score function
date: 2025-01-07 12:00:00-0400
description: some more notes on a paper by D. Shlyakhtenko
tags: math statistics
related_posts: false
---

$$
\begin{aligned} 

f(Z^{(k)}_{N+1} : {Z^{(r)}_{N+1}}_{r\neq k}) &= (N+1)^{1/2}f\left(
\sum_{j=1}^{N+1} X^{(k)}_{j} : {Z_{N+1}^{(r)}}_{r\neq k} \right) \\ 

&= E_{M}\left((N+1)^{1/2}f\left(\sum_{i\neq j} X^{(k)}_{i} : \left\{ \sum_{i\neq j} X^{(r)}_{i}\right\}_{r\neq k}, \{X^{(r)}_{j}\}^{n}_{r=1} \right)\right)\\

&= (N+1)^{1/2}E_{M}f\left(\sum_{i\neq j} X^{(k)}_{i} : \left\{\sum_{i\neq j} X^{(r)}_{i}\right\}_{r \neq k}\right)

\end{aligned}
$$

These were not immediate to us. So, we will justify each equality symbol in this proof. Before, we begin, let's state the setting.

### Background

Let $$\{(X^{(1)}_{j}, \ldots, X^{(n)}_{j})\}_{j=1,2,3,\ldots}$$ be a sequence of
$$n$$-tuples of random variables where each $$X_{i}^{(k)}$$ lives inside some fixed
operator algebra $$A$$. Moreoever, assume that for each $$i,k \in \{1,2,3,\ldots\}, i\neq k$$
the $$n$$-tuples $$(X^{(1)}_{i},\ldots,X^{n}_{i})$$ and
$$(X^{(1)}_{k},\ldots,X^{(n)}_{k})$$ are independent and identically distrubted
with finite second moments. 

We can visualize this as placing these random variables in an $$n \times \{1,2,3,\ldots\}$$
matrix: 

$$\begin{bmatrix}
X^{(1)}_{1} & X^{(2)}_{1} & \ldots & X^{(n)}_{1} \\
X^{(1)}_{2} & X^{(2)}_{2} & \ldots & X^{(n)}_{2} \\
\vdots      & \vdots      & \vdots & \vdots      \\
X^{(1)}_{k} & X^{(2)}_{k} & \ldots & X^{(n)}_{k} \\
\vdots      & \vdots      & \vdots & \vdots
\end{bmatrix}$$

where each row, considered as an $$n$$-tuple is independent and identitcally
distrubted from any other row. 

Next, we define new elements, the $$Z^{(k)}_{N}$$. For every $$1 \leq k \leq
n$$ and $$N \in \{1,2,3,\ldots\}$$, let 

$$
Z^{(k)}_{N} = \frac{1}{\sqrt{N}}\sum_{i=1}^{N} X^{(k)}_{i} = \frac{X_{1}^{(k)}
+ X^{(k)}_{2} + \ldots + X^{(k)}_{N}}{\sqrt{N}}$$

So, we can construct a new $$n\times \{1,2,3,\ldots\}$$ matrix

$$\begin{bmatrix}
Z^{(1)}_{1} & Z^{(2)}_{1} & \ldots & Z^{(n)}_{1} \\
Z^{(1)}_{2} & Z^{(2)}_{2} & \ldots & Z^{(n)}_{2} \\
\vdots      & \vdots      & \vdots & \vdots      \\
Z^{(1)}_{k} & Z^{(2)}_{k} & \ldots & Z^{(n)}_{k} \\
\vdots      & \vdots      & \vdots & \vdots
\end{bmatrix}$$

where the $$(N,k)$$th entry in the above matrix, $$Z^{(k)}_{N}$$ is the statistically normalized
sum of the first $$N$$ elements in the $$k$$th row of the original matrix.

Next, we define this score function $$f$$. For a fixed $$n$$-tuple of random
variables $$(X^{(1)}, X^{(2)}, \ldots, X^{(n)})$$, define the score function
with respect the $$j$$th variable as 

$$f_{j} = f(X^{(j)}: X^{(1)}, \ldots, \hat{X}^{(j)}, \ldots, X^{(n)})
= -\frac{\partial p/\partial x_{j}}{p} $$

Where $$p$$ is the joint densitiy function of the random variables $$X^{(1)},
\ldots X^{(n)}$$.

Finally, we restate two important lemmas from the paper.

**Lemma 3** *Assume that $$X$$ is independent from $$Y^{(1)}, \ldots,
Y^{(n)}$$. Then one has the equality*

$$f(Y^{(j)}:Y^{(1)}, \ldots,
\hat{Y}^{(j)}, \ldots Y^{(n)},
X) = f(Y^{(j)}: Y^{(1)}, \ldots, \hat{Y}^{(j)},\ldots, Y^{(n)})$$.

Essentially, this lemma states that score function is unchanged for an
$$n$$-tuple of random variables if you consider an $$n+1$$-tuple where the
random variable appended is independent from all previous random variables. The
proof is immediate from definition of joint density and the product rule.


**Lemma 4** *Assume that $$\{X^{(k)}_{j}\}, 1\leq k \leq n, j= 1, 2,3, \ldots$$ are random variables. Then, for each $$j = 1,2,3,\ldots, N+1$$ and each $$1 \leq k \leq n$$ we have the equality*

$$ 
f\left( \sum_{i=1}^{N+1} X^{(k)}_{i} : \left\{ \sum_{i=1}^{N+1} X^{(r)}_{i}
\right\}_{r\neq k} \right) = E_{M} f\left( \sum_{i\neq j}^{N+1} X^{(k)}_{i} : \left\{
\sum_{i\neq j}^{N+1} X^{(r)}_{i} \right\}_{r\neq k}, \{X^{(r)}_{j}\}_{r=1}^{n}\right)
$$

*where $$M = W^{\star}\left( \left\{ \sum_{i=1}^{N+1} X^{(r)}_{i}
\right\}_{r=1}^{n} \right)$$.*

Lemma $$4$$ at first glance seems very difficult to parse. So, let's unpack it.
Fix some $$1 \leq j < N+1$$. Let's do some variable replacement. Let 

$$Y^{(k)} = \sum_{i=1}^{N+1} X^{(k)}_{i} \text{and} $$

and 


$$Y^{(k)\prime} = \sum_{i\neq j}^{N+1} X^{(k)}_{i}$$


With this replacement, we see that $$Y^{(k)}$$ is just the sum of the first
$$N+1$$ random variables in the $$k$$th column, and $$Y^{(k)\prime}$$ is the sum of
the first $$N+1$$ random variables in the $$k$$th column excluding the $$j$$th
row entry.

We may now restate lemma $$4$$ as 

$$f(Y^{(k)} : Y^{(1)}, \ldots, \hat{Y}^{(k)}, \ldots, Y^{(n)}) = E_{M}
f(Y^{(k)\prime} : Y^{(1)\prime}, \ldots, \hat{Y}^{(k)\prime}, \ldots,
Y^{(k)\prime}, X^{(1)}_{j}, \ldots, X^{(n)}_{j}) $$

where $$M$$ is the smallest subalgebra containing all the $$Y^{(k)}$$s.

Then, in words, lemma 4 then says that the score of $$Y^{(k)}$$ with respect to
the joint distribution of $$Y^{(1)},\ldots, Y^{(n)}$$ is equal to the
conditional expectation with respect to the smallest subalgebra containing all
the $$Y^{(k)}$$s of the score of $$Y^{(k)\prime}$$ with respect to the joint
distrubtion of $$Y^{(1)\prime},\ldots, Y^{(n)\prime}, X^{(1)}_{j}, \ldots,
X^{(n)}_{j}$$ (see my previous <a href="/blog/2025/conditional-expectation/">
blog</a> on conditional expectation in this context).

We are now ready to justify each of the three equalities. So, let's state the
assumptions of lemma $$5$$.

**Lemma 5** *Let $$(X^{(1)}_{j}, \ldots, X^{(n)}_{j}), j=1, 2, 3, \ldots$$ be a sequence of
$$n$$-tuples so that these tuples of independent and identitically distrubuted
and have finite second moments. Let* 

$$Z^{(k)}_{N} = X^{(k)}_{1} + \ldots + X^{(k)}_{N}/ \sqrt{N}$$

### First equality

Let us compute the left and right hand side of the equality. Let $$f_{k}$$ be
the density of the random variable $$X^{(k)}_{1}$$. Note that by the
assumptions, that $$f_{k}$$ is also the density of $$X^{(k)}_{j}$$ for all
$$j=1, 2, 3, \ldots$$. Then, the density of $$Z^{(k)}_{N+1}$$ is given by 

$$p_{N+1}^{(k)}(z_{k}) = (N+1)^{1/2}(f_{1}^{\star(N+1)})((N+1)^{1/2}z)
= (N+1)^{1/2}(f_{1} \star \ldots \star f_{1})((N+1)^{1/2}z_{k})$$ 

where the convolution is taken $$N+1$$. See <a
href="https://en.wikipedia.org/wiki/Convolution_of_probability_distributions">this</a>
and <a href="https://math.stackexchange.com/a/1689639/220841>">this</a> for
justification.

Thus, the joint density function for $$Z_{N+1}^{(1)}, \ldots, Z^{(n)}_{N+1}$$
is given by

$$ p(z_{1},\ldots, z_{n}) = \prod_{i=1}^{n} p_{N+1}^{(i)}(z_{i})$$

as each column is independent.

**Left hand side**

Therefore, we can compute the score with respect to $$Z_{N+1}^{(k)}$$ as 

$$
\begin{aligned}

f(Z_{N+1}^{(k)}: Z^{(1)}, \ldots, \hat{Z}^{(k)}_{N+1}, \ldots, Z^{(k)}_{N+1}) &= - \frac{\partial p / \partial z_{j}}{p}\\

&= -\frac{1}{\prod_{i=1}^{n} p_{N+1}^{(i)}(z_{i})} \frac{\partial}{\partial
z_{k}} \prod_{i=1}^{n} p_{N+1}^{(i)}(z_{i}) \\

&= -\frac{1}{\prod_{i=1}^{n} p_{N+1}^{(i)}} \frac{\partial
p_{N+1}^{(k)}(z_{k})}{\partial z_{k}} \prod_{i\neq k} p_{N+1}^{(i)} \\ 

&= -\frac{\partial p_{N+1}^{(k)}(z_{k}) / \partial
z_{k}}{p_{N+1}^{(k)}(z_{k})} \\

&=-\frac{(N+1)^{1/2}(N+1)^{1/2}f_{k}^{\star(N+1)\prime}((N+1)^{1/2}z_{k})}{(N+1)^{1/2}f_{k}^{\star(N+1)}((N+1)^{1/2}z_{k})}\\

&= - (N+1)^{1/2} \frac{f^{\star(N+1)\prime}}{f^{\star(N+1)}}((N+1)^{1/2}z_{k})


\end{aligned}
$$

**Right hand side**

We note compute the score of $$(N+1)^{1/2}Z_{N+1}^{(k)}=\sum_{j=1}^{N+1} X^{(k)}_{j}$$ with respect to
the joint density of $$Z_{N+1}^{(1)}, \ldots, (N+1)^{1/2}Z_{N+1}^{(k)}, \ldots,
Z^{(k)}_{N+1}$$

We note that the density of $$(N+1)^{1/2}Z_{N+1}^{(k)}$$ is simply

$$\rho_{N+1}^{(k)}(z_{k}) = (f_{k}^{\star(N+1)})(z_{k})$$

Then the joint density function is 

$$p = \rho_{N+1}^{(k)}(z_{k})\prod_{i\neq k}
p_{N+1}^{(i)}(z_{i})$$

Then we compute the score as follows

$$
\begin{aligned}

f((N+1)^{1/2}Z_{N+1}^{(k)} : Z_{N+1}^{(1)}, \ldots,
(N+1)^{1/2}\hat{Z}^{(k)}_{N+1}, \ldots, Z^{(n)}_{N+1}) &= - \frac{\partial
p / \partial z_{k}}{p} \\

&= - \frac{1}{\rho_{N+1}^{(k)}(z_{k})\prod_{i\neq k} p_{N+1}^{(i)}(z_{i})} \frac{\partial}{\partial z_{k}}
\rho_{N+1}^{(k)}(z_{k}) \prod_{i\neq k} p_{N+1}^{(i)}(z_{i})\\

&= -\frac{f^{\star(N+1)\prime}}{f^{\star(N+1)}}(z_{k})
\end{aligned}
$$


### Second equality


### Third equality
