---
title: "Urban Accessibility Dashboard (Demo)"
date: 2025-12-02
tags: ["transport", "accessibility", "urban-planning", "geospatial", "dashboard", "isochrones"]
category: "tools"
image: "/images/projects/dashboard_urban_accessibility.png"
cover_image: "/images/projects/dashboard_urban_accessibility.png"
alt: "Urban Accessibility Dashboard"
relative: false
featured: false
repo:
  name: Dashboard
  link: https://github.com/claudiotomasi/dashboard

description: "Interactive demo web application for visualizing urban accessibility indices and isochrones with geospatial overlays."
---

## 🌍 Overview

This project contains a **demo web application** for exploring **urban accessibility indices** in cities.  
It allows users to compute and visualize **isochrones** — areas reachable within a specified travel time — and overlay contextual geospatial information such as schools or hospitals.

The project demonstrates the feasibility of an interactive, map-based accessibility analysis tool.

---

## 🗺️ Features

- Interactive **Isochrone Map Viewer**
- Adjustable travel-time thresholds (e.g., 1–15 minutes)
- Selectable origin locations (e.g., specific city points)
- Toggle overlays for:
  - ✅ Schools  
  - ✅ Hospitals
- Built with **Leaflet** for map rendering
- Includes GeoJSON layers for real points of interest

---

## 🖼️ Screenshot

[![Isochrone Dashboard](/images/projects/dashboard_screenshot.png)](/images/projects/dashboard_screenshot.png){:target="_blank"}
---

## 🚀 Installation

```bash
git clone <your_repo_url>
cd dashboard
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

---

## ▶️ Running the App
```bash
python app.py
```

Then visit:
```bash
http://127.0.0.1:5000
```

---

## 🔧 Extending the Demo

- Potential extensions include:
- Accessibility metrics (reachability, centrality, travel costs)
- Mode choice modeling (walking, cycling, transit)
- Heatmaps and time-dependent layers
- Additional POIs (pharmacies, public offices, etc.)

---

## ⚙️ My Role

- Developed the web-based dashboard and interactive map visualization
- Integrated isochrone computation and geospatial overlays
- Implemented user interface features for filtering and customization
- Maintained Python environment and project reproducibility
- Coordinated demo deployment for testing and demonstration purposes

---

## 📈 Outcomes & Impact

- Provides a functional prototype for urban accessibility analysis
- Demonstrates interactive visualization of isochrones and service reachability
- Enables testing of urban planning scenarios with geospatial data
- Serves as a foundation for further research and policy applications

---

### 🏷️ Research Areas

Urban Accessibility · Interactive Dashboards · Isochrones · Geospatial Analysis · Public Transport

---

## 🔗 Links

- 🌍 **Live Demo** : https://freeway.streamlit.app/

- 💻 **GitHub Repository**: https://github.com/claudiotomasi/dashboard

<!-- [![Repo](https://img.shields.io/badge/GitHub-Dashboard-black?logo=github)](https://github.com/claudiotomasi/dashboard) -->



