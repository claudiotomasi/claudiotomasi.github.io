---
title: "NeTEx2gtfs"
date: 2025-01-20
tags: ["c++", "transport", "netex", "gtfs", "data-engineering", "scheduling"]
cover_image: "/images/projects/netex2gtfs.png"
image: "/images/projects/netex2gtfs.png"
alt: "NeTEx to GTFS Converter"
relative: false
category: "tools"
featured: true
description: "A C++ tool to convert public-transport schedules from NeTEx format into GTFS feeds."
ShowReadingTime: true
repo:
  name: NeTEx2gtfs
  link: https://github.com/claudiotomasi/NeTEx2gtfs
---

<div class="justify">

## 🔄 Overview

**NeTEx2gtfs** is a lightweight **C++ tool** that converts public-transport schedule data from the **NeTEx** (Network Timetable Exchange) standard into the widely-used **GTFS** (General Transit Feed Specification) format.  

The converter is designed for transport agencies, researchers, and developers who need high-quality NeTEx datasets transformed into GTFS-compatible feeds for analysis, routing engines, or integration with GTFS-based applications.

---

## ⚙️ Features

- Converts NeTEx XML datasets into GTFS format  
- Supports the **Nordic NeTEx profile** (additional profiles can be added)  
- Generates all standard GTFS tables: `stops.txt`, `routes.txt`, `trips.txt`, `stop_times.txt`, …  
- Stand-alone **C++ tool** with minimal external dependencies  
- Build-ready using **CMake** or **Makefile**  
- Easily integrable into transport-data pipelines  

---

## 🧪 Tech Stack

- **C++**  
- **tinyxml2** for XML parsing  
- **CMake / Make** build system  
- Tested on Linux and macOS (Windows may work with MinGW)  

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/claudiotomasi/NeTEx2gtfs.git
cd NeTEx2gtfs
```

### 2. Build the tool  
Using **CMake**:
```bash
mkdir build  
cd build  
cmake ..  
make  
```

Or using **Make** directly:
```bash
make
```

### 3. Run the converter  
```bash
./netex2gtfs --input /path/to/input.xml --output /path/to/gtfs_output_folder
```

Replace paths with your NeTEx source file and the desired GTFS export directory.

### Example  
```bash
./netex2gtfs --input data/NordicNeTExDataset.xml --output output_gtfs
```

## Project Structure  
```
NeTEx2gtfs/
├── include/
├── external/tinyxml2/
├── main_Nordic.cpp
├── CMakeLists.txt
├── Makefile
└── README.md
```


## 🔗 Links

- 💻 **GitHub Repository:** https://github.com/claudiotomasi/NeTEx2gtfs  
- 📘 **License:** MIT License


