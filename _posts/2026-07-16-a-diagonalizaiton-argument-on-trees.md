---
layout: post
title: A Diagonlization Argument on Trees
date: 2026-07-16 12:00:00-0400
description: Looking at complete countably infinite branching trees
tags: math set-theory trees
related_posts: false
---

This argument was used in my most recent paper, and it arose by looking for a counterexample for a tree that does not witness a discrete $$(0,1)$$-generator. Taking a step back, I realized that it is simply a classical diagonilization argument. Instead of choosing numbers in the sequences of all ``listed'' real numbers, we are choosing successors points at elements in the complete $$\omega$$-ary tree at every successor stage.

### Background

The classical Cantor diagonlization argument proceeds roughly as follows. First, assume that the real numbers in the interval $$(0,1)$$ are countable, and simply list them out with their decimal expansion. Then, you construct a new real umber $$x$$ by selecting a different digit for the $$n$$th decimal place from the $$n$$th digit of the $$n$$th number. This new number $$x$$ will be an element of the interval $$(0,1)$$, and will be different from every number that is listed. This is an extremely low level overview of the argument as there is some care still needed.

### The Setup

Let 

$$T = \omega^{\leq\omega}$$ 

be the complete $$\omega$$-ary tree of height $$\omega +
1$$. For every limit point $$t_{\alpha} \in \omega^{\omega}$$, pick some point
$$\phi(t_{\alpha}) \in \omega^{<\omega}$$ such that $$\phi(t_{\alpha}) <
t_{\alpha}$$. Then, for every point $$s \in \omega^{<\omega}$$, let $$F_s$$ be a
finite collection of isolated points $$\{s_1, s_2, \ldots, s_n\}$$ such that $$s_i
\> s$$ for each $$i\leq n$$ and $$s_i$$ are not limit points.

The question is the following: does there exist a limit point $$t$$ such that for
every $$\phi(t) \leq s < t$$, $$t$$ is incomparable with every $$s_i \in F_s$$? 

The answer in a simpler case is easily no. If $$T$$ were instead the complete
$$n$$-ary tree of height $$\omega + 1$$ for any $$2 \leq n < \omega$$, take
$$F_s = s^+$$ for every $$ s \in n^{<\omega}$$. Then, this statement is
completely false. However, when the codomain of the partial and full functions
is $$\omega$$, there now becomes enough choices available to make such a
selection possible. And, in fact, the argument is extremely akin to that for the
classical diagonlization argument.


### The Proof

The proof proceeds by a recursive construction of a limit point $$x \in
\omega^{\omega}$$. 

For every $$ s \in \omega^{<\omega}$$,  with $$\operatorname{dom}(s) = n
$$ define the set

$$ E_s = \omega \setminus \{ s_i(n) : s_i \in F_s \} $$

The set $$E_s$$ captures all the directions above $$s$$ that lead towards one of
the $$s_i$$ in $$F_s$$. Moreover, $$|E_s| = \omega$$ as each $$F_s$$ is assumed
finite.

Now, starts the diagonalization. Let $$ s = \emptyset$$ be the empty function.
Define a function $p_0 \in \omega^1$ by choosing some $$k \in E_{s}$$. Then, set
$$p_0(0) = k$$.

Assume that $$p_n$$ has been built for some $$ n < \omega $$. We define a
function $$p_{n+1} \in \omega^{n+2}$$. Pick some $$k \in E_{p_{n}}$$ and let 

$$p_{n+1}(n+1) = k$$ 

and 

$$p_{n+1}(i) = p_{n}(i)$$ 

for each $$i < n+1$$. 

Lastly, we define our limit point $$x$$ as the limit of these partial functions.
Notice that $$\{ p_n : n < \omega \}$$ is a chain, and by Dedekind completeness,
there must be a least upper bound $$x \in \omega^{\omega}$$. Moreover, $$x(n) =
p_n(n)$$ for all $$ n < \omega $$. 

Now, by construction it is clear that $$ x $$ has our desired property. Every
point between $$\phi(x)$$ and $$x$$ itself will not be an element of $$F_s$$
for any $$s \in \omega^{<\omega}$$.

This fact may be astounding, and it is not a result of the fact that there are
$$2^{\omega}$$ many limit points of the tree. This is apparent because this
property failes for aforementioned trees. The infinite breadth of the immediate
successors at every point, in fact the non-emptiness of the set $$E_s$$, is
truly what guarantees this. And, indeed, this shows that $$T$$ cannot have a
discrete $$(0,1)$$-generator, a result shown in my most recent publication.

