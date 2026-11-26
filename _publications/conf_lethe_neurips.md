---
title: "Lethe: Link Inference Attacks for Evaluation of Edge Unlearning Methods"
collection: publications
category: conferences
permalink: /publication/lethe_neurips
date: 2026-12-01
venue: 'Advances in Neural Information Processing Systems (NeurIPS 2026)'
venue_short: 'NeurIPS 2026'
bibtexurl: 'https://dangeloandrea14.github.io/bibs/conf/lethe_neurips.bib'
selected: true
authors: "Andrea D'Angelo, Francesco Gullo, Davide Mottin, Sayan Ranu, Giovanni Stilo"
paperurl: "https://openreview.net/forum?id=5Fexig0zwY"
abstract: "Graph Unlearning (GU) aims to remove the influence of specific training data from a Graph Neural Network without retraining anew. While most methods address removal of nodes and features, Edge Unlearning (EU), aiming at forgetting edges, has recently attracted dedicated attention as a standalone problem due to the hardness of completely removing the impact of an edge in the model. Despite this, no dedicated benchmark for EU exists besides isolated evaluations on feature-rich datasets such as Cora and Citeseer where GNNs exploit node features rather than graph structure. As such, we show two systematic limitations in existing evaluations: dedicated EU methods can be slower than retraining anew, and accuracy metrics are uninformative due to the negligible impact of edge removal. To address this gap, we introduce Lethe, the first comprehensive benchmark for Edge Unlearning, featuring 15 methods and 8 datasets. Our benchmark emphasizes large graphs, introduces evaluation tasks of varying difficulty, and proposes empirical measures based on link inference attacks rather than proxy accuracy metrics. We provide a comprehensive empirical analysis, demonstrate the shortcomings of current evaluations, and release Lethe as a reproducible, extensible benchmark."
---
