---
id: match
title: match Endpoint
sidebar_label: match
sidebar_position: 6
---

# Variable Matching Endpoint

The `/match` endpoint performs intelligent semantic matching between raw variable names (e.g., from a dataset or data dictionary) and standardized biomedical ontology terms. This endpoint is especially useful for curating or harmonizing variables before full dataset processing.

---

## Method

```http
POST /match
```

## Headers

Every request must include:

```
Content-Type: application/json
Authorization: Bearer <your_token>
```

* Content-Type: Must be application/json

* Authorization: Your bearer token

## Request Body

#### Example Payload

```
{
  "columns": ["Age", "Sex", "Weight", "Diagnosis Date"]
}
```

## Sample Response

```
{
  "matched_variables": [
    {
      "original": "Age",
      "matched_term": "age_in_years",
      "ontology": "SNOMED CT",
      "score": 0.96
    },
    {
      "original": "Sex",
      "matched_term": "biological_sex",
      "ontology": "HPO",
      "score": 0.91
    },
    {
      "original": "Weight",
      "matched_term": "body_weight",
      "ontology": "LOINC",
      "score": 0.89
    },
    {
      "original": "Diagnosis Date",
      "matched_term": "date_of_diagnosis",
      "ontology": "NCIT",
      "score": 0.87
    }
  ]
}
```

* original: The user-supplied variable

* matched_term: The best-matching ontology term

* ontology: Source ontology or vocabulary

* score: Semantic similarity score (0.0–1.0)

## Best Practices

* Clean input variables before sending (e.g., remove underscores, fix typos).

* Use lowercase or title case to improve matching reliability.

* Review scores below 0.85 manually for potential mismatches.


