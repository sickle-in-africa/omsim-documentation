---
id: introduction
title: Introduction to OMSIM
sidebar_label: Introduction
slug: /
sidebar_position: 1
---

# OMSIM

Welcome to the official documentation for **OMSIM** - the **Ontology-Mediated Semantic Integration and Matching** engine. This platform is designed to assist researchers, developers, and data stewards in the automated harmonization and alignment of variable names across heterogeneous datasets using semantic and ontological principles.

## Introduction

OMSIM is a RESTful API service that enables high-quality data harmonization by intelligently mapping free-text variable names to standardized biomedical ontology terms. It is particularly useful in domains such as clinical research, public health registries, and longitudinal cohort studies, where data is often collected across diverse settings and formats.

The system combines natural language processing, ontology-aware reasoning, and scalable API endpoints to automate what was traditionally a manual and error-prone process.

---

## Key Features

- **Semantic Matching Engine**  
  Uses pretrained sentence embeddings and similarity metrics to match variables such as `"Age of patient"` to standard concepts like `"age_in_years"`.

- **Ontology-Aware Mapping**  
  Aligns inputs to public biomedical ontologies such as **SNOMED CT**, **LOINC**, **HPO**, and **UMLS**, supporting both general-purpose and domain-specific harmonization.

- **Validation Services**  
  OMSIM includes automated validation tools to identify unmatched, ambiguous, or low-confidence variables in a dataset and flag them for review.

- **RESTful API Interface**  
  All functionalities are accessible via simple `POST` requests with JSON payloads, making it easy to integrate into any pipeline or toolchain.

- **Batch Processing Support**  
  The API supports multiple columns and files at once, making it suitable for use in high-throughput harmonization workflows.

---

## Use Cases

OMSIM is ideal for:

- Research consortia harmonizing data dictionaries across countries or hospitals.
- Standardizing forms and surveys in clinical trials or epidemiological studies.
- Aligning legacy datasets to modern ontologies.
- Developing tools for data integration, warehouse ingestion, or phenotype curation.

---

## How It Works

OMSIM operates in three primary stages:

1. **Ingestion**  
   You provide variable names (or entire column headers) as part of a JSON payload to one of the API endpoints.

2. **Semantic Matching & Ontology Alignment**  
   The system computes embeddings for each input and compares them to ontology term vectors using cosine similarity or other NLP techniques.

3. **Output Generation**  
   Results include the matched ontology term, similarity score, and ontology source. Optional endpoints can validate or harmonize full datasets.

---

## Example Workflow

Here’s a basic example of how OMSIM might be used:

1. A research team uploads a CSV file containing variables like `"Sex"`, `"Weight_kg"`, `"DOB"`.
2. A script sends these variables to the `/match` endpoint.
3. OMSIM returns standardized terms like `"biological_sex"`, `"body_weight"`, `"date_of_birth"` with similarity scores and ontology references.
4. The team then uses the `/harmonize` endpoint to apply the mappings and return a fully harmonized version of the dataset.

---

## Getting Started

Before using the API, ensure you have the following:

- A valid API key (if authentication is enabled)
- Basic familiarity with JSON and REST requests
- A dataset or list of variable names for harmonization

Once ready, explore the following documentation pages:

- [Authentication](authentication.md)
- [Match Endpoint](/docs/api/match)
- [Harmonize Endpoint](/docs/api/harmonize)
- [Validate Endpoint](/docs/api/validate)
- [Example Scripts](examples.md)

---

## Support and Contribution

OMSIM is an open-source, evolving platform. We welcome:

- **Feature requests and bug reports** via the [GitHub repository](https://github.com/YOUR-REPO)
- **Community contributions** in the form of mappings, ontology improvements, or integrations
- **Feedback** from institutions implementing OMSIM at scale

For further assistance, contact the development team or refer to the [Support](support.md) section.

---

## Final Notes

OMSIM was built to simplify, scale, and standardize data harmonization — a task that is critical for reproducible, FAIR-compliant research. By combining ontologies with NLP, we aim to reduce the cost and increase the quality of data integration projects across disciplines.

Let this documentation guide you in deploying OMSIM in your workflows with clarity, transparency, and confidence.
