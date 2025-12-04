---
title: "TransportFrance Downloader"
date: 2025-01-15
tags: ["python", "automation", "data-engineering", "public-transport", "open-data", "API"]
cover_image: "/images/projects/downloader.png"
image: "/images/projects/downloader.png"
alt: "Transport France Downloader"
relative: false
category: "tools"
featured: false
description: "A Python utility to automatically download and organize public transit datasets from Transport.data.gouv.fr."
ShowReadingTime: true
repo:
  name: TransportDownloader
  link: https://github.com/claudiotomasi/TransportFrance_downloader
---

<div class="justify">

## 🚍 Overview

**TransportFrance Downloader** is a lightweight Python tool designed to automate the retrieval of public transit datasets from  
📊 **Transport.data.gouv.fr**, the French national open data platform for mobility.

The script supports downloading multiple dataset formats (ZIP, GTFS, NeTEx, CSV, JSON, …), organizing them into clean directory structures, and optionally extracting ZIP files. It is built to be fast, reliable, and suitable for large-scale dataset collection thanks to parallel downloading.

This tool is useful for researchers, engineers, and developers working with transportation datasets, network modeling, GTFS/NeTEx analysis, or mobility research.

---

## ⚙️ Features

- 📥 **Automatic download** of datasets from Transport.data.gouv.fr  
- 📂 **Organized folder structure** grouped by dataset, format, and resource date  
- 🧵 **Parallel downloads** with configurable number of threads  
- 🗜️ **Optional ZIP extraction** into dedicated subfolders  
- 🧹 **Filename sanitization** for safe filesystem storage  
- 🧾 **Error logs** for failed downloads or extraction issues  

Example output structure:


```
output_directory/
├── Dataset_Title/
│   ├── Format/
│   │   ├── Resource_Title_YYYY-MM-DD/
│   │   │   ├── file1.zip
│   │   │   └── file2.csv
```

If -zip is used, ZIP files will be extracted into a folder with the same name as the ZIP:
```bash
file1.zip -> file1/
```

## Error Logs

- Download errors are logged into `errors.log` in the output directory.
- ZIP extraction errors are logged into `extraction_errors.log`.

---

## Dependencies

- Python 3.10+
- `requests`
- `pandas`
- `tqdm`
- `colorama`

All dependencies can be installed via:
```bash
pip install -r requirements.txt
```

---

## 💻 Technologies

- **Python 3.10+**
- `requests` · `pandas` · `tqdm` · `colorama`
- Multi-threading for parallel downloads
- Structured logging for error tracking

---

## 📈 Outcomes

This tool provides:

- A reproducible pipeline for acquiring French public transport datasets
- Clean dataset organization for downstream processing
- Automated ZIP extraction and error handling
- Fast large-scale downloads through parallelization

It is suitable for research, data engineering workflows, and mobility analytics.

---

## 🔗 Links

- 💻 **GitHub Repository:** [https://github.com/claudiotomasi/TransportFrance_downloader](https://github.com/claudiotomasi/TransportFrance_downloader)
- 📘 **License:** MIT License