---
title: "Grammar-Based Anomaly Detection of Microservice Systems Execution Traces"
collection: publications
category: conferences
permalink: /publication/grammar_execution
date: 2024-05-07
venue: 'Companion of the 15th ACM/SPEC International Conference on Performance Engineering'
paperurl: 'https://dl.acm.org/doi/abs/10.1145/3629527.3651844'
bibtexurl: 'https://dangeloandrea14.github.io/bibs/conf/grammar_execution.bib'
authors: "Andrea D'Angelo, Giordano d'Aloisio"
venue_short: "ICPE 2024 Companion"
award: "Best Short Paper"
abstract: "Microservice architectures are a widely adopted architectural pattern for large-scale applications. Given the large adoption of these systems, several works have been proposed to detect performance anomalies starting from analysing the execution traces. However, most of the proposed approaches rely on machine learning (ML) algorithms to detect anomalies. While ML methods may be effective in detecting anomalies, the training and deployment of these systems as been shown to be less efficient in terms of time, computational resources, and energy required. In this paper, we propose a novel approach based on Context-free grammar for anomaly detection of microservice systems execution traces. We employ the SAX encoding to transform execution traces into strings. Then, we select strings encoding anomalies, and for each possible anomaly, we build a Context-free grammar using the Sequitur grammar induction algorithm. We test our approach on two real-world datasets and compare it with a Logistic Regression classifier. We show how our approach is more effective in terms of training time of ~15 seconds with a minimum loss in effectiveness of ~5% compared to the Logistic Regression baseline."
---
