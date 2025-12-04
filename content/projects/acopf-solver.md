---
title: "Surrogate Modeling for Power Grid Optimization"
date: 2024-08-01
tags: ["optimization", "power-systems", "machine-learning", "graph-neural-networks", "bilevel-optimization", "neural-networks", "Python", "Julia"]

cover_image : "/images/projects/hexagon.png"
image: "/images/projects/hexagon.png"
alt: "Power Grid Optimization"
relative: false
category: "research" 
featured : false
description: "Neural and graph neural networks for bilevel optimization in electrical power grids."
ShowReadingTime: true

---

<div class="justify">

## 🧠 Overview

This work was conducted within the **HEXAGON Project** (PRIN-PNRR grant P20227CTY3) at the **Università degli Studi di Bergamo**. HEXAGON focuses on developing highly specialized **exact algorithms for large-scale power network operations**. Power grids are among the most complex engineered systems, requiring energy delivery from producers to consumers while satisfying physical constraints and minimizing operating costs. 

The project addresses one of the most challenging optimization problems in industry: the Optimal Power Flow (OPF) problem, which becomes a Mixed Integer Nonlinear Optimization (MINLP) problem when discrete operational decisions are included. 

Within this context, my research explored the use of surrogate models based on Neural Networks and Graph Neural Networks to approximate solutions of bilevel optimization problems in power systems. The goal is to reduce the computational cost of repeated exact solver evaluations and improve real-time decision support tools for grid management.

---

## 🧪 Methods & Technologies

The research activities combined theoretical analysis, dataset generation, and surrogate model development:

- **Theoretical study:** In-depth review of AC Optimal Power Flow (ACOPF), bilevel optimization, RCOPF formulations, surrogate modeling, and graph-based learning, including graph convolutional networks and hypergraph learning.  
- **Dataset generation:** Creation of perturbed instances of IEEE test networks, solving each instance using Gurobi to produce input-output pairs for training surrogate models. Automation scripts handled perturbations, solver execution, feasibility checks, and data normalization. HPC resources were used to manage computationally intensive tasks, though scalability was limited to small networks (up to IEEE 57-bus).  
- **Surrogate model development:** Initial experiments with feed-forward neural networks showed low prediction errors on small networks. Graph Convolutional Networks (GCNs) were then implemented to exploit grid topology, though they faced limitations in generalizing to larger networks. Hyperparameter tuning was performed using Ray Tune, and all code is organized in a reproducible GitHub repository for training and evaluation.

**Technologies used:** Python, Julia, Gurobi, high-performance computing environments, Neural Networks, Graph Neural Networks, Ray Tune.


---

## ⚙️ My Role

I contributed to the HEXAGON project as part of a collaborative effort involving multiple Italian universities, aiming to equip practitioners with scalable optimization tools for power grids. My responsibilities included:

- Studying the ACOPF problem and understanding its mathematical structure, numerical behavior, and solver limitations.  
- Focusing on Transformer Rating Optimization (TRO) as a bilevel problem with RCOPF follower.  
- Designing and evaluating surrogate models (feed-forward NNs and GCNs) to approximate RCOPF solutions under varying network parameters.  
- Constructing datasets for model training through automated pipelines using Gurobi and HPC resources.  
- Documenting results, analyzing performance trends, and maintaining reproducible scripts and notebooks.

This work contributed both to methodological insights in surrogate modeling and to understanding the practical limitations of exact solvers for large-scale OPF problems.

---

## 📈 Outcomes

The research highlighted the potential and challenges of surrogate models for bilevel optimization in power systems:

- Small-scale surrogate models achieved good accuracy in approximating RCOPF solutions.  
- Dataset generation for training remains computationally intensive, limiting scalability to larger networks.  
- Extensive analyses clarified the limitations of standard GCN architectures for capturing power grid topologies.  
- The work produced a complete, reproducible computational framework for dataset generation, model training, and evaluation.

Although large-scale scalable models were not achieved, the project provided valuable methodological insights and a solid foundation for future research, including alternative solvers, approximation schemes, and more expressive neural architectures.

---

## 🏷️ Research Areas

Power Systems · Machine Learning · Optimization · Graph Neural Networks · High-Performance Computing

---

## 🔗 Links

- 📄 **Related Paper:** _(coming soon)_
- 💻 **GitHub:** https://github.com/your-repo
- 🌍 **Demo / Documentation:** _(to be added)_

</div>