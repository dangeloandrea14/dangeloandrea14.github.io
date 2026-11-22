---
title: "HybridKAN: Leveraging Multi-Sized Sub-MLPs for Enhanced Performance"
collection: publications
category: conferences
permalink: /publication/hybridkan
date: 2025-09-01
venue: 'ITADATA 2025 (Italian Conference on Big Data and Data Science)'
paperurl: 'https://ceur-ws.org/Vol-4152/paper60.pdf'
bibtexurl: 'https://dangeloandrea14.github.io/bibs/conf/hybridkan.bib'
authors: "Fabio D'Andreamatteo, Andrea D'Angelo, Giovanni Stilo"
description: "HybridKAN is a hybrid architecture that leverages multi-sized sub-MLPs to combine the expressiveness of Kolmogorov-Arnold Networks with the efficiency of traditional MLPs, achieving enhanced performance on benchmark tasks. Presented at ITADATA 2025."
venue_short: "ITADATA 2025"
abstract: "In recent years, Kolmogorov-Arnold Networks (KANs), based on the homonymous theorem, have been explored as an alternative to the classic Multi-Layer Perceptron (MLPs) architecture for deep neural networks. Despite showing some promising results for specific tasks, KANs are still limited by pathological cases where poor gradient behavior causes the network to fail. Moreover, the tuning and training requirements of KANs can be higher than those of MLPs. In this paper, we introduce a novel architecture called HybridKAN, which retains the overall structure of KANs but replaces the B-spline functions with sub-MLPs that approximate them. Our architecture is grounded in the Universal Approximation Theorem (UAT) and avoids abnormal gradient behavior by relying on sub-MLPs instead of B-spline functions. We test our new architecture under the same experimental setting as the original KAN paper and record significant improvements in both accuracy and training time."
---
