# Bachelor Thesis: Translating Bayesian Models in General Purpose Languages to PPLs

This project resembles the transpiler developed during my Bachelor thesis. 
It is designed to transpile General Purpose Languages to Probabilistic Programming Languages. 
I implemented the theoretical concept for a traspiler that translated R to Python Pyro code. 
Thereby, I evalued the results based on a exemplary code provided by a reasearch partner.

## Abstract / Motivation

There are many programs regarding Bayesian Models written in
general purpose languages. However, probabilistic programming
languages are a better fit for such problems. Unfortunately, cur-
rently there is no reliable way of translating this kind of programs
between these two types of languages. Therefore, an approach for
a Transpiler that translates Bayesian Models from general purpose
languages to probabilistic programming languages was developed.
It is based on ANTLR and utilizes a loosely coupled approach to
ensure future extendability. Furthermore, this approach is then eval-
uated by implementing a Transpiler that translates R code to the
Python-based Pyro PPL. This Transpiler is then further evaluated
using an exemplary input code.

