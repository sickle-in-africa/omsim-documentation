---
id: validate
title: validate Endpoint
sidebar_label: validate
sidebar_position: 7
---

# Dataset Validation Endpoint

The `/validate` endpoint allows you to check if a data dictionary or dataset meets the structural, syntactic, and metadata requirements before proceeding to harmonization. This step is crucial for ensuring that the uploaded file has all required fields, uses the correct formats, and follows OMSIM standards.

---

## Method

```http
POST /validate
```

## Headers

```
Content-Type: application/json
Authorization: Bearer <your_token>
```

## Request Body

```
{
  "file_url": "https://example.com/dictionary.csv",
  "file_type": "dictionary"
}
```

### Fields:

* file_url: Publicly accessible URL to the dataset or data dictionary to validate.

* file_type: Either "dictionary" or "dataset" depending on the input.

In future versions, direct file upload support may be added via multipart/form-data.

## Sample Response

```
{
  "status": "valid",
  "issues": [],
  "metadata": {
    "column_count": 12,
    "row_count": 150,
    "required_fields_present": true,
    "missing_values": {
      "description": 3,
      "unit": 0
    }
  }
}
```

## Response Fields:

* status: "valid" or "invalid"

* issues: List of structural or formatting issues (empty if valid)

* metadata: Summary stats about the file’s structure

## Common Validation Checks

* Presence of mandatory columns (e.g., variable name, description, unit)

* Allowed data types and formats

* Missing values and empty rows

* Duplicate variable names or keys

* Non-standard characters or encodings