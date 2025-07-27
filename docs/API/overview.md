---
id: overview
title: API Overview
sidebar_label: Overview
sidebar_position: 4
---

# OMSIM API Overview

The OMSIM API enables seamless semantic harmonization of data dictionaries and clinical datasets by leveraging natural language processing, ontology integration, and intelligent variable matching. It is designed to help researchers and data managers align diverse datasets to standard biomedical ontologies with minimal manual effort.

---

## What Does the API Do?

OMSIM provides a set of RESTful endpoints that allow you to:

- Submit free-text variable names and receive ontology-based matches (`/match`)
- Automatically harmonize entire datasets (`/harmonize`)
- Validate input files for format consistency and metadata completeness (`/validate`)

---

## Base URL

All endpoints are accessible under the following base URL:


---

## Endpoints Summary

| Endpoint     | Method | Purpose                                                        |
|--------------|--------|----------------------------------------------------------------|
| `/match`     | POST   | Matches free-text variables to ontology concepts               |
| `/harmonize` | POST   | Harmonizes input files (dictionary or dataset) using ontology  |
| `/validate`  | POST   | Checks structure, completeness, and compatibility              |

---

## Required Headers

Include the following headers in every request:

```http
Content-Type: application/json
Authorization: Bearer <your_token>
