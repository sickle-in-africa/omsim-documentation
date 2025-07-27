---
id: authentication
title: Authentication
sidebar_label: Authentication
sidebar_position: 2
---

# Authentication

To ensure secure access, all OMSIM API endpoints require authentication via a **Bearer token** system. This allows us to track, authorize, and manage access for users, systems, and third-party services interacting with OMSIM.

OMSIM does **not** allow unauthenticated API access in production environments.

---

## Why Authentication is Required

Authentication ensures:

- **Security**: Protects the API from unauthorized use and malicious actors.
- **Auditability**: Tracks user activity for transparency and reproducibility.
- **Role-based Access Control (RBAC)**: Allows differential access levels to endpoints (e.g., public users vs. admin-only tools).
- **Rate Limiting**: Helps enforce fair usage policies across users and clients.

---

## How to Authenticate

### 1. Get Your API Token

To use the API, you must first obtain an API token. You can do this by:

- Registering for an account on the OMSIM platform (if applicable).
- Requesting access credentials from the system administrator.

Tokens may be revoked or rotated periodically, so be sure to store and manage them securely.

---

## Request Format

All authenticated requests must include the token in the `Authorization` header:

### Required HTTP Headers

```http
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json
```

- `Authorization`: A Bearer token issued by OMSIM.
- `Content-Type`: Always set to `application/json` for POST requests.

---

## Example Usage

### Python (requests)

```python
import requests

url = "https://api.omsim.org/match"
headers = {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
}
data = {
    "columns": ["Patient Age", "Sex", "Weight"]
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

### JavaScript (Fetch API)

```javascript
fetch("https://api.omsim.org/match", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    columns: ["Weight", "Diagnosis Date"]
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## Common Authentication Errors

| HTTP Status | Error                | Cause                                                              |
|-------------|----------------------|--------------------------------------------------------------------|
| 401         | Unauthorized         | Missing or invalid token. Ensure you're including the correct `Authorization` header. |
| 403         | Forbidden            | You have a valid token but are not authorized to access this endpoint. |
| 429         | Too Many Requests    | You exceeded your request quota. Try again later or contact support. |

---

## Best Practices for Secure Token Handling

- Do not hard-code tokens in public code. Use environment variables or encrypted secrets.
- Do not share your token with anyone or upload it to version control (e.g., GitHub).
- Rotate tokens periodically and invalidate old ones.
- Use HTTPS for all requests to prevent interception of tokens.

---

## Tip

If you lose access to your token, contact the OMSIM support team immediately. Tokens can be reissued or revoked at any time.

You can read more on error handling in the [Errors](./errors) section.
