---
id: harmonize
title: harmonize Endpoint
sidebar_label: harmonize
sidebar_position: 5
---

# Dataset Harmonization Endpoint

The `/harmonize` endpoint is a core part of OMSIM’s API, enabling automated semantic alignment of user-supplied datasets or data dictionaries. It uses ontology-aware natural language processing (NLP) models to map variable names to standardized biomedical terms. This facilitates cross-study data integration, meta-analysis, and downstream harmonization workflows.

This endpoint supports harmonization of either:
- A list of raw variable names (as an array), or
- A complete data dictionary or dataset file (uploaded in base64-encoded format)

It’s particularly useful in research consortia, data coordination centers, or any multi-institution project requiring the reconciliation of inconsistent variable naming across heterogeneous sources.

---

## Method

```http
POST /harmonize
```

## Headers

All requests to this endpoint must include the following headers:
```
Content-Type: application/json
Authorization: Bearer <your_token>
```

* Content-Type: Required. Must be set to application/json.

* Authorization: Required. Include your API token as a Bearer token

## Request Body

You can use one of the following payload formats depending on your use case:

#### Option 1: Harmonize a list of column names

```
{
  "columns": ["Age", "Sex", "Diagnosis Date", "Weight"]
}
```

#### Option 2: Harmonize an entire file (e.g., data dictionary)


```
{
  "file_name": "my_dataset_dictionary.csv",
  "file_content_base64": "U29tZV9zYW1wbGVfYmFzZTY0X2VuY29kZWQgZGF0YQ=="
}
```

The file should be encoded in base64 before submission. You may use tools like base64 CLI (Unix), Python, or R to generate this encoding.

## Sample Response

```
{
  "harmonized_columns": [
    {
      "original": "Age",
      "mapped_term": "age_in_years",
      "ontology": "SNOMED CT",
      "score": 0.96
    },
    {
      "original": "Sex",
      "mapped_term": "biological_sex",
      "ontology": "HPO",
      "score": 0.91
    },
    {
      "original": "Weight",
      "mapped_term": "body_weight",
      "ontology": "LOINC",
      "score": 0.88
    }
  ],
  "summary": {
    "total_variables": 4,
    "matched": 3,
    "unmatched": ["Diagnosis Date"]
  }
}
```


