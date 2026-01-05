---
title: 'Resources'
type: landing

design:
    spacing: "6rem"

sections:
  - block: logo
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
  - block: markdown
    content:
      title: "Resources"
      text: |
        ### [GRainsaCK](https://github.com/rbarile17/grainsack)
        *A Comprehensive Software Library for Benchmarking Explanations of Link Prediction Tasks on Knowledge Graphs*

        It grounds on the theoretical formulation of the LP-DIXIT method for evaluating explanations of LP tasks. GRainsaCK is developed in Python, adopts the functional paradigm, and reuses existing software components. GRainsaCK also gathers and makes easily available explanation ground-truth datasets. GRainsaCK streamlines benchmarking LP-X methods by formalizing the experiment workflow. It also features several alternative implementations for each task in the workflow, with the possibility of extending them as needed.

        ### [KG-SaF](https://github.com/ivandiliso/kg-saf)
        *Building Complete Datasets for Machine Learning and Reasoning on Knowledge Graphs*

        KG-SaF provides a workflow (KG-SaF-JDeX) and curated datasets (KG-SaF-Data) for knowledge graph refinement (KGR) research. The resource includes datasets with both schema (ontologies) and ground facts, making it ready for machine learning and reasoning services.

        ### [PyKEEN Negative Sampling Library](https://github.com/ivandiliso/refactor-negative-sampler)
        *Enhancing PyKeen with Multiple Negative Sampling Solutions for Knowledge Graph Embedding Models*

        It implements a negative sampling extension for PyKEEN, one of the most widely used and comprehensive libraries for knowledge graph embedding by introducing a suite of advanced negative sampling strategies for KGE models, all unified within a standardized, modular, and extensible architecture.

        ### [TransOWL & TransOWL-HRS](https://github.com/Keehl-Mihael/TransROWL-HRS)
        *Injecting Background Knowledge into Embedding Models for Predictive Tasks on Knowledge Graphs*

        Building on existing models such as TransE and TransR, it includes three semantically enriched variants:

        * TransOWL injecting constraints in the loss function, accounting for equivalent properties, equivalent classes, class hierarchy, inverse properties
        * TransROWL following the same formulation of TransOWL, but extending the TransR model
        * TransOWL-HRS extending TransROWL with relation hierarchies and relation clusters

        ### [LTL4TKG](https://ieeexplore.ieee.org/document/10386573)
        *Characterizing Evolutionary Trends in Temporal Knowledge Graphs with Linear Temporal Logic*

        It operationalizes the discovery of temporal logic patterns in TKGs. Its design is based on a template-driven approach, where predefined LTLf templates are automatically instantiated with data from the TKG.

        ### [PREJUST4WOMAN](https://lod-cloud.net/dataset/PREJUST4WOMAN_PROJECT)
        *A Knowledge Graph on Gender-Based Violence*

        The PREJUST4WOMEN Knowledge Graphs provide structured representations of legal cases related to violence against women, sourced from judgments of the European Court of Human Rights (ECHR). These KGs were developed using two complementary approaches: a bottom-up methodology and an LLM-based approach, leveraging advanced NLP techniques for KG construction. The KGs are designed to support predictive justice, legal reasoning, and enhanced accessibility to legal knowledge for humans and machines. This dataset offers a structured framework for documenting and analyzing cases of violence against women, including types of violence, the involved parties, and legal outcomes. It captures detailed information about the incidents, providing a comprehensive view of the legal ramifications and facilitating in-depth research and analysis in the field of gender-based violence. Published datasets include legal metadata, competency questions, and connections to external resources.
---