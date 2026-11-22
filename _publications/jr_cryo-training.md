---
title: "Accelerating Deep Neural Network Training with Lightweight Dynamic Freezing"
collection: publications
category: manuscripts
permalink: /publication/cryo-training
date: 2027-02-01
venue: 'Applied Soft Computing (Elsevier)'
paperurl: 'https://doi.org/10.1016/j.asoc.2026.116771'
bibtexurl: 'https://dangeloandrea14.github.io/bibs/journals/cryo-training.bib'
authors: "Andrea D'Angelo, Mattia Masci, Matteo Spezialetti, Giovanni Stilo"
description: "We propose Cryo-SC and Cryo-Seq, two architecture- and optimizer-agnostic training methods that dynamically freeze and unfreeze layers to speed up deep neural network training while preserving accuracy — up to a 29.96% reduction in training time on Transformers — towards greener, more accessible AI. Published in Elsevier Applied Soft Computing."
venue_short: "Applied Soft Computing"
codeurl: "https://github.com/dangeloandrea14/CryoSchemes"
abstract: "Training Deep Neural Networks (DNNs), which can contain millions or billions of learnable parameters, is a computationally intensive and time-consuming process that may hinder the widespread adoption of Artificial Intelligence (AI) technologies. To address this challenge, we propose two novel training methods (independent of the specific architecture and optimizer adopted, by design), Cryo-SC and Cryo-Seq , to speed up DNN training while preserving accuracy. These methods dynamically freeze and unfreeze layers throughout to reduce the training time. We extensively evaluate our approaches across different DNN architectures and datasets and compare them against traditional and state-of-the-art training methods. Results show that the proposed methods outperform state-of-the-art ones by achieving significant reductions in training time (up to 29.96% reduction for the Transformer model with Cryo-SC ) with minor impact on accuracy. This work advances green AI by making deep learning more efficient and sustainable, especially for organizations with constrained computational resources."
---
