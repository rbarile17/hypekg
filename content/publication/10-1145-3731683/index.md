---
title: Joint Factual and Counterfactual Explanations for Top-k GNN-based Recommendations
authors:
- Ziheng Chen
- Jin Huang
- Fabrizio Silvestri
- Yongfeng Zhang
- Hongshik Ahn
- Gabriele Tolomei
date: '2025-05-01'
publishDate: '2025-05-27T21:34:10.534178Z'
publication_types:
- article-journal
publication: '*ACM Trans. Recomm. Syst.*'
doi: 10.1145/3731683
abstract: Recently, graph neural networks (GNNs) have become the new state-of-the-art
  approach to developing powerful recommender systems. However, it is hard for GNN-based
  recommender systems to attach tangible explanations of why a specific item ends
  up in the list of top-k suggestions for a given user. Indeed, explaining GNN-based
  recommendations is unique, and existing GNN explanation methods are inappropriate
  since they are designed to explain node, edge, or graph classification rather than
  ranking. In this work, we propose GREASE, a novel method for explaining the list
  of top-k suggested items to a given user provided by any black-box GNN-based recommender
  system. Specifically, for each recommended item, GREASE first trains a surrogate
  GNN model on the subgraph obtained as the union of the target user-item pair and
  its l-hop neighborhood. Then, it jointly generates factual and counterfactual explanations
  by finding optimal adjacency matrix perturbations to capture the sufficient and
  necessary conditions for the item to be recommended. Experiments on real-world datasets
  show that GREASE can generate concise and compelling explanations for popular GNN-based
  recommender models.
tags:
- Graph Neural Networks (GNNs)
- GNN-based recommender systems
- Explainable GNNs
- Explainable GNN-based recommendations
- Factual explanations
- Counterfactual explanations
links:
- name: URL
  url: https://doi.org/10.1145/3731683
---
