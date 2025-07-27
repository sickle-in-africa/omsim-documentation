---
id: architecture
title: System Architecture
sidebar_label: Architecture
sidebar_position: 3
---

# System Architecture

This section provides an overview of the system architecture behind **OMSIM** — the *Ontology-Mediated Semantic Integration and Matching* platform. The architecture is designed to ensure scalability, modularity, and efficiency for variable harmonization across heterogeneous biomedical datasets.

---

## Overview

OMSIM is composed of modular backend services and optional frontend components, orchestrated in a containerized environment. The system is language-agnostic at the API level and can be deployed either on cloud infrastructure (e.g., AWS, GCP) or on-premise.

---

## Core Components

### 1. **API Gateway**
- Acts as the entry point for all external requests.
- Routes requests to appropriate internal services.
- Handles authentication, rate limiting, and error formatting.

### 2. **Matching Engine**
- Uses pretrained NLP models and domain-specific embeddings.
- Matches raw column names to controlled vocabulary terms (e.g., SNOMED CT, HPO, LOINC).
- Implements cosine similarity, fuzzy matching, and ontology graph distance heuristics.

### 3. **Harmonization Service**
- Receives raw datasets and variable metadata.
- Transforms and aligns variable names to standardized representations.
- Outputs harmonized data dictionaries and mapping logs.

### 4. **Validation Service**
- Performs quality checks on incoming datasets.
- Validates against expected data types, missing values, and ontology coverage.
- Returns feedback for corrections before harmonization.

### 5. **Metadata Store**
- Stores user-uploaded dictionaries and harmonized versions.
- Maintains audit logs, harmonization reports, and session-based mappings.
- Enables traceability and reproducibility.

### 6. **Embedding Service**
- Hosts sentence and word embedding models.
- Provides vector representations of variables and ontology terms.
- Supports on-demand model updates and caching.

---

## Data Flow

1. **User submits data** to the `/match` or `/harmonize` endpoint.
2. **API Gateway** validates request and forwards to the relevant service.
3. **Matching Engine** processes variable names and returns semantic alignments.
4. **Harmonization Service** applies transformations based on the matches.
5. **Validation Service** optionally runs final checks.
6. **Results and logs** are returned to the user and stored in the metadata store.

---

## Deployment

OMSIM supports multiple deployment modes:

- **Docker Compose** (development and small-scale testing)
- **Kubernetes** (production-scale with auto-scaling)
- **Serverless APIs** (for lightweight usage)

Environment variables are used to configure model paths, storage, logging levels, and security settings.

---

## Extensibility

OMSIM is designed for extensibility:

- Plug in your own **ontology** via a JSON or OWL file.
- Swap out the **embedding model** (e.g., BioBERT, ClinicalBERT, GloVe).
- Integrate custom post-processing logic.
- Add new endpoints via the modular Flask-based API.

---

## Security & Logging

- All endpoints require authentication tokens.
- Audit logs are stored securely with timestamps and hashed user IDs.
- Sensitive data is not persisted unless explicitly requested and authorized.

---

## Summary

OMSIM is a robust, scalable, and modular platform tailored for semantic harmonization in biomedical research. The architecture supports advanced AI-based matching, structured transformations, and continuous feedback from domain experts — all within a flexible deployment and integration ecosystem.
