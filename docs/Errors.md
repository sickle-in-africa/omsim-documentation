---
id: errors
title: Error Handling
sidebar_label: Errors
sidebar_position: 6
---

# Error Handling

The OMSIM API follows standard HTTP status code conventions and provides clear error messages for troubleshooting. This guide outlines common error types, their meanings, and how to resolve them.

---

## Error Format

All errors follow a consistent structure:

```json
{
  "error": "InvalidRequest",
  "message": "The 'file_url' field is required.",
  "status": 400
}
```

* error: A short machine-readable error code.

* message: A descriptive, human-readable explanation.

* status: HTTP status code.

## Common Error Codes

| HTTP Status | Error Code             | Meaning                                                | How to Resolve                                                                         |
| ----------- | ---------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| 400         | `InvalidRequest`       | Missing or invalid fields in your request              | Ensure required fields like `columns` or `file_url` are present and properly formatted |
| 401         | `Unauthorized`         | Missing or incorrect authentication token              | Include a valid Bearer token in the `Authorization` header                             |
| 403         | `Forbidden`            | Token does not have permission to access this resource | Check token scope or privileges                                                        |
| 404         | `NotFound`             | The requested endpoint or resource does not exist      | Verify the URL and endpoint name                                                       |
| 415         | `UnsupportedMediaType` | Content-Type not supported                             | Use `application/json` in the `Content-Type` header                                    |
| 422         | `ValidationError`      | Semantic or structural problems with input             | Check file format, missing metadata, or broken schema                                  |
| 500         | `InternalError`        | Unexpected error on the server                         | Try again later or contact support if persistent                                       |
