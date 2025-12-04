---
title: "VelociRAPTOR: Multimodal Schedule-Based Route Planner"
date: 2022-04-01
tags: ["public-transport", "routing", "graph-algorithms", "c++", "multimodal", "optimization", "accessibility"]
category: "research" 
image: "/images/projects/velociraptor.png"
cover_image: "/images/projects/cover_velociraptor.png"
alt: "Multimodal Public Transport Routing"


featured: true
description: "A high-performance C++ engine for large-scale multimodal public transport routing based on the RAPTOR algorithm."
---

## 🚆 Overview

**VelociRAPTOR** is a **high-performance multimodal route planning engine** designed to compute fast and scalable routing queries on **large public transport networks**, integrating both **schedule-based transit data and road infrastructure**.

The project, conducted in collaboration with the Joint Research Centre (JRC) of the European Commission in Seville, aimed to develop a high-performance, multimodal schedule-based route planner for entire European countries. The system computes all-pairs shortest paths on large-scale networks to evaluate accessibility to essential services such as schools and hospitals. The resulting data enables both nationwide and metropolitan-level analyses, supporting evidence-based decision-making in transport planning and accessibility assessment.


The project is based on an optimized implementation of the **RAPTOR algorithm**, extended to handle:

- Multimodal transport
- Large-scale national and continental networks
- High query throughput for decision-support applications

The software was developed within an academic and institutional research framework with applications in **accessibility analysis and transport policy evaluation**.

---

## 🗺️ Methods & Technologies

The project leveraged advanced graph algorithms and schedule-based routing techniques, building on the [RAPTOR algorithm](https://www.microsoft.com/en-us/research/wp-content/uploads/2012/01/raptor_alenex.pdf) for efficient public transport routing. A key component of the system was a high-performance GTFS parser, designed to quickly read and process large timetable files across multiple countries. The system was implemented in C++ with careful attention to high-performance computing techniques to handle large-scale datasets efficiently.

- **RAPTOR algorithm** for schedule-based routing  
- Multimodal integration:
  - Public transport
  - Walking
  - Road-based transfers  
- Time-dependent shortest paths  
- Large-scale timetable preprocessing  
- Memory-optimized data structures for high query throughput  

**Tools & Languages:**  
C++ · Graph Algorithms · GTFS Data · High-Performance Computing · Spatial Indexing

---

## ⚙️ My Role

- Designed and implemented **core routing kernel** in C++  
- Optimized the RAPTOR algorithm for:
  - Large transport networks
  - High query concurrency
- Built preprocessing pipelines for:
  - Timetables
  - Stop-to-stop transfer graphs
- Integrated multimodal transfers between:
  - Transit
  - Walking networks
  - Road networks
- Developed experimental frameworks for:
  - Benchmarking
  - Performance profiling

---

## 📈 Outcomes & Impact

The project resulted in a fully functional, high-performance multimodal routing tool capable of computing accessibility across entire European countries. Using VelociRAPTOR, we produced detailed accessibility maps and density analyses that measure reachability of services such as schools and hospitals within defined time budgets. A comprehensive user guide was created to enable other users to effectively utilize the tool. Additionally, the methodology and results are being documented in a scientific paper for publication, highlighting both the computational techniques and practical applications of the system.

<!-- 
- Enabled **nation-scale and EU-scale public transport routing**
- Achieved **significant performance improvements** over baseline implementations
- Used as a core component in:
  - Accessibility analysis tools
  - Policy support systems at institutional level
- Contributed to a **technical reference manual** and research dissemination -->

---

## 🏷️ Research Areas

Public Transport · Multimodal Routing · Algorithm Engineering · Graph Algorithms · High-Performance C++

---

## 🔗 Links

- 📄 **Related Paper:** _(coming soon)_
- 💻 **GitHub:** https://github.com/your-repo
- 🌍 **Demo / Documentation:** _(to be added)_
