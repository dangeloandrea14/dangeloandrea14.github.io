---
title: "GRACE: Gradient-guided Coreset Selection for LLM Unlearning"
collection: publications
category: conferences
permalink: /publication/grace_emnlp
date: 2026-10-01
venue: 'Findings of the Association for Computational Linguistics: EMNLP 2026'
venue_short: 'EMNLP 2026 Findings'
paperurl: 'https://aclanthology.org/2026.findings-emnlp.1212/'
bibtexurl: 'https://dangeloandrea14.github.io/bibs/conf/grace_emnlp.bib'
selected: true
authors: "Praveen Bushipaka, Andrea D'Angelo, Lucia Passaro, Tommaso Cucinotta"
abstract: "Machine Unlearning methods for Large Language Models typically assume pre-specified forget and retain sets. In realistic settings, however, requests may provide only a few examples of undesired behaviour, requiring forget and retain sets to be inferred from heterogeneous corpora. We study this data-selection problem and propose GRACE, a gradient-guided coreset selection method that constructs both forget and retain sets for LLM unlearning. GRACE first computes a forget direction from seed examples that elicit the undesired behaviour, then selects a compact forget coreset whose gradients approximate this direction using non-negative orthogonal matching pursuit. To preserve model utility, it selects retain examples after projecting out the forget direction and applying clustered orthogonal matching pursuit in the remaining gradient space. Across two target domains, two model families, and four unlearning algorithms, GRACE improves model utility while maintaining comparable forget quality, with particularly consistent gains over prior gradient-based selection methods."
---
