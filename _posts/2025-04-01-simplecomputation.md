---
layout: post
title: A simple computation
date: 2025-04-01 12:00:00-0400
description: the Fock state's action on Weyl Operators 
tags: math
related_posts: false
---

Let $$\mathfrak{h}$$ be a complex (pre-)Hilbert space. We define 

$$
\mathfrak{F}(\mathfrak{h})_{+} = \bigoplus_{n=0}^{\infty} \mathfrak{h}^{n}_{+}
$$

to be the symmetrized Fock space over $$\mathfrak{h}$$. Let 

$$
\Omega = (1,0,0,\ldots)
$$

be the vacuum vector. Then we define the vector state 

$$
\omega(\cdot) = \langle \Omega | \cdot | \Omega \rangle
$$

If we consider the Weyl operators

$$
W(f) = \operatorname{exp}\left(\frac{i}{\sqrt{2}}(a(f) + a^*(f))\right)
$$ 

for all $$f \in \mathfrak{h}$$, then we will show

$$
\omega(W(f)) = \operatorname{exp}\left(-\frac{||f||^2}{4}\right)
$$

### Background

The (symmetrized) Fock space is a beautiful construction because the Weyl operators given
by $$\operatorname{exp}(i\Phi(f))$$ where $$\Phi(f) = \frac{1}{\sqrt{2}}(a(f) + a^*(f))$$ give a representation of the CCR algebra over $$(\mathfrak{h}, \sigma)$$ where $$\sigma(f,g) = \operatorname{Im}\langle f,g\rangle_{\mathfrak{h}}$$ for $$f,g\in\mathfrak{h}$$.

What is more magical is that that vector states on the bounded operators over
the symmetrized Fock space can take quite simple forms. In this case, we are
concered with what may be the simplest vector state, called the Fock state,
which maps every Weyl operator $$W(f) \mapsto
\operatorname{exp}\left(-\frac{||f||^2}{4}\right)$$. However, it remains to be
shown that this state is indeed the vector state given by the vacuum vector
$$\Omega = (1, 0, \ldots)$$. 

A useful tool in our kit is that of the Baker-Campbell-Hausdorff formula. It
relates how we can break down exponentials of sums of operators. Indeed, if two
operators $$A$$ and $$B$$ commute with their own commutator, then it takes the
form 

$$
\operatorname{exp}\left(A + B + \frac{[A,B]}{2}\right)
= \operatorname{exp}(A)\operatorname{exp}(B)
$$

This formulation holds whether or not $$A$$ and $$B$$ are bounded or unbounded.
In particular, we will be taking the annihilation and creation operators on
$$\mathfrak{F}_{+}(\mathfrak{h})$$ which are unbounded, commuting with their
commutator, and have commutator 

$$
[a(f), a^*(g)] = \langle f, g\rangle_{\mathfrak{h}} \mathbb{1}
$$

### Computation

Let $$\beta = \frac{i}{\sqrt{2}}$$. We use Baker-Campbell-Hausdorff formula (more specifically, the Glauber formula) to write

$$
\begin{align*}
\operatorname{exp}\left(\frac{i}{\sqrt{2}}(a(f) + a^*(f))\right)
&= \operatorname{exp}\left(-\frac{[\beta a(f),\beta a^*(f)]}{2}\right)\operatorname{exp}\left(\beta a(f)\right)\operatorname{exp}\left(\beta a^*(f)\right)\\
&=\operatorname{exp}\left(\frac{[\beta a(f),\beta a^*(f)]}{2}\right)\operatorname{exp}\left(\beta a^*(f)\right)\operatorname{exp}\left(\beta a(f)\right)
\end{align*}
$$

Then we see that 

$$
[\beta a(f), \beta a^*(f)] = \beta^2 [a(f), a^*(f)] = -\frac{||f||^2}{2}
$$

Hence, our operator becomes 

$$
\operatorname{exp}\left(-\frac{||f||^2}{4}\right)\operatorname{exp}\left(\beta
a^*(f)\right)\operatorname{exp}\left(\beta a(f)\right)
$$


Now, we determine the action of the right two operators on $$\Omega$$. Since
$$\Omega$$ is cyclic for both $$a(f)$$ and $$a^*(f)$$, it is cyclic for both $$\beta
a(f)$$ and $$ a^*(f)$$.

We focus on $$ \exp(\beta a(f))\Omega $$. From the above, it is clear that it
is equal to 

$$
\sum_{n=0}^{\infty} \frac{\beta^n a(f)^n\Omega}{n!} = \beta^0a(f)^0\Omega + \beta a(f)\Omega
+ \ldots + \frac{\beta^n a(f)^n \Omega}{n!} + \ldots
$$

Notice, that since $$a(f) \Omega = (0,0,\ldots)$$, all the terms after the
identity operator are $$(0,0,\ldots)$$. Hence 

$$\operatorname{exp}\left(\beta a(f) \right)\Omega = \Omega$$ 

Then, we simply need to focus on 

$$\operatorname{exp}\left(\beta a^*(f)\right)\Omega$$

This operator will act by, for all $$n\geq 1$$ by 

$$n! \cdot \psi_{n} = \beta^na^*(f)^n\Omega = (0,\ldots,\beta^n\sqrt{n}f^{\otimes n}, 0, \ldots)$$

Hence, 

$$\operatorname{exp}\left(\beta^n a^*(f)\right)\Omega = (1, \psi_1,
\psi_2,\ldots)$$

Thus, it is immediate that 

$$\langle \Omega| \exp(\beta a^*(f) | \Omega \rangle = 1$$ 

Combining all the above facts, we see that 

$$ \langle \Omega | W(f) | \Omega \rangle
= \operatorname{exp}\left(-\frac{||f||^2}{4}\right)$$ 

as desired.


