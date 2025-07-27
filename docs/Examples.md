---
id: examples
title: Example Workflows
sidebar_label: Examples
sidebar_position: 5
---

# Example Workflows

This page demonstrates real-world use cases for the OMSIM API. These examples show how to interact with the `/match`, `/harmonize`, and `/validate` endpoints using sample datasets or data dictionaries.

---

## 1. Matching Free-Text Variables to Ontologies

You have a raw list of variable names from a legacy dataset:

```json
["Age", "Sex", "Blood Pressure", "Weight"]
```

#### Example curl Command

```
curl -X POST https://your-server.com/api/match \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "columns": ["Age", "Sex", "Blood Pressure", "Weight"]
  }'
```

#### Sample Response

```
[
  {
    "original": "Age",
    "matched_term": "age_in_years",
    "ontology": "SNOMED",
    "score": 0.97
  },
  {
    "original": "Sex",
    "matched_term": "biological_sex",
    "ontology": "HPO",
    "score": 0.95
  }
]
```

## 2. Harmonizing a Dataset Dictionary

You have a CSV data dictionary located at:

```
https://example.org/data_dictionary.csv
```

You want OMSIM to harmonize all columns to ontologies via /harmonize.


#### Python Example

```
import requests

url = "https://your-server.com/api/harmonize"
headers = {
    "Authorization": "Bearer YOUR_TOKEN",
    "Content-Type": "application/json"
}
payload = {
    "file_url": "https://example.org/data_dictionary.csv",
    "file_type": "dictionary"
}

response = requests.post(url, headers=headers, json=payload)
print(response.json())
```

## 3. Validating a Dataset Before Harmonization

Before running /harmonize, you want to make sure your CSV is correctly formatted.

#### Validation Request

```
curl -X POST https://your-server.com/api/validate \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "file_url": "https://example.org/data_dictionary.csv",
    "file_type": "dictionary"
  }
```

#### Possible Response

```
{
  "status": "valid",
  "issues": [],
  "metadata": {
    "column_count": 10,
    "row_count": 120
  }
}
```

## 4. Automating OMSIM in a Pipeline

Many users incorporate OMSIM into ETL workflows. A common pattern:

1. Use /validate to check incoming files

2. If valid, call /harmonize

3. Post-process results (e.g., rename headers, map values)

4. Store harmonized version for analysis

This pattern ensures consistent, ontology-aligned data across datasets and timepoints.

## Notes

* All endpoints require a Bearer token.

* OMSIM supports datasets in CSV and XLSX format.

* In future versions, we will support drag-and-drop UI uploads and dataset versioning.
