---
title: 'Home'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: logo
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
  - block: hero
    content:
      title: HypeKG
      text: Hybrid Prediction and Explanation with Knowledge Graphs
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      background:
        video:
          # Add your image background to `assets/media/`.
          filename: graph.mp4
          brightness: 0.5
  - block: stats
    content:
      items:
        - statistic: "CUP"
          description: H53D23003700006
        - statistic: "Principal Investigator"
          description: |
            Claudia d'Amato  
            <u>claudia.damato@uniba.it</u>  
            <u>claudia.damato@pec.it</u>
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      # Reduce spacing
      spacing:
        padding: ["1rem", 0, "1rem", 0]
  - block: features
    id: partners
    content:
      title: Project Partners
      text:
      items:
        - name: University of Bari Aldo Moro
          link: https://www.uniba.it
          icon:
          description: |
            **Principal Investigator**  
            Claudia d'Amato - claudia.damato@uniba.it  
            **Operating Office**  
            Dipartimento di Informatica  
            Via Edoardo Orabona, 4 - Bari (BA), 70125
        - name: University of Calabria
          link: https://www.unical.it
          icon:
          description: |
            **Associated Investigator**  
            Valeria Fionda - valeria.fionda@unical.it 
            **Operating Office**  
            Dipartimento di Matematica e Informatica  
            Via Pietro Bucci - Cosenza (CS), 87100
        - name: Sapienza University of Rome
          link: https://www.uniroma1.it/it/pagina-strutturale/home
          icon:
          description: |
            **Associated Investigator**  
            Gabriele Tolomei -  tolomei@di.uniroma1.it
            **Operating Office**  
            Dipartimento di Informatica  
            Viale Regina Elena, 295 - Roma (RM), 00161
  - block:
    content:
      title:
      text: |
        Data pervades everyday life: data creation, sharing, usage, transformation is influencing the way we live. Managing and mining knowledge from the available data deluge calls for an update of existing data management solutions. Web giants such as Google and Amazon, companies like BBC, AstraZeneca, and crucial fields such as the legal domain rely more and more on Knowledge Graphs (KGs) as a shared substrate of knowledge. KGs combine characteristics of databases by enabling structured querying mechanisms graphs by treating relations (edges) between different kinds of entities (nodes) as first-class citizens and knowledge bases because of the underlying semantic support allowing also to infer new knowledge. KGs have been applied in a variety of contexts: design of digital assistants (Amazon Alexa), question answering (IBM Watson), and recently legal contract compliance (Lynx). 

        The rise of KGs has contributed to novel machine learning (ML) approaches centered on low-dimensional representations (embeddings) that can preserve structural information from the original graph. Embeddings can be used in tasks such as link prediction and node/graph/triple classification that subsume a variety of application-oriented tasks like user-item-recommendation (link prediction/node classification), biological compound classification (graph classification), fact validation (triple classification). 

        We recognize two main aspects currently overlooked by existing KG-based learning solutions: a) the usage of formalisms like ontologies, that would allow reasoning about the semantics of nodes and edges in the KGs, is disregarded; b) a black-box approach is mainly adopted, which supplies predictions but cannot provide explanations for them. The HypeKG project aims at delivering hybrid semantic-based explainable AI methods grounded on KGs. It builds upon: 1) a semantic-driven learning framework; 2) an explanation component. Leveraging the semantic of nodes/edges of a KG and underlying ontological knowledge (e.g., a schema) allows incorporating fine-grained semantic information into state-of-the-art numeric AI models, like embedding models and Graph Neural Networks, designed to learn from graphs. This hybridization can be beneficial to define: semantically-aware notions of node neighbors, in contrast to current topological notions based on direct connections; novel subgraph sampling mechanisms leveraging node and edge types, in contrast to current semantic-oblivious notions based on probabilities; and novel mechanisms based on logical axioms incorporated in the learning process. 

        HypeKG also makes a step toward explainable AI (XAI) thanks to an explanation component which, by working in synergy with our novel hybrid learning models, allows us to understand to what extent model predictions are consistent/inconsistent wrt the available knowledge. We will show the generality of HypeKG in both general and domain-specific KGs with application to the legal domain.
    design:
      css_class: 'text-2xl'
---
---