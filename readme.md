### **1. Success Responses (2xx)**

These indicate that the request was successful.

- **200 OK** → The request was successful.

  - _Example:_ A `GET /users/1` request returns user details.

- **201 Created** → A new resource was successfully created.

  - _Example:_ A `POST /users` request successfully creates a new user.

- **204 No Content** → The request was successful, but there’s no response body.
  - _Example:_ A `DELETE /users/1` request removes a user but returns no data.

---

### **2. Redirection Responses (3xx)**

These indicate that further action is required.

- **301 Moved Permanently** → The resource has moved to a new URL.

  - _Example:_ `example.com` permanently redirects to `www.example.com`.

- **302 Found** → Temporary redirection.

  - _Example:_ Redirecting users to a login page when not authenticated.

- **304 Not Modified** → The resource hasn’t changed since the last request (used for caching).
  - _Example:_ A browser checks if an image has been updated but gets a 304 if it's still the same.

---

### **3. Client Errors (4xx)**

These indicate that there’s something wrong with the request.

- **400 Bad Request** → The request is malformed.

  - _Example:_ Sending invalid JSON data to an API.

- **401 Unauthorized** → Authentication is required but not provided or invalid.

  - _Example:_ Trying to access a protected API route without a valid token.

- **403 Forbidden** → The client is authenticated but doesn’t have permission.

  - _Example:_ A user tries to access an admin page without admin privileges.

- **404 Not Found** → The requested resource does not exist.

  - _Example:_ Visiting `example.com/nonexistent-page` returns a 404.

- **405 Method Not Allowed** → The HTTP method is not allowed for this endpoint.

  - _Example:_ Sending a `PUT` request to an endpoint that only accepts `GET` and `POST`.

- **429 Too Many Requests** → Rate limiting is triggered.
  - _Example:_ Too many login attempts in a short time.

---

### **4. Server Errors (5xx)**

These indicate that the server has encountered a problem.

- **500 Internal Server Error** → A generic error for unexpected failures.

  - _Example:_ A bug in backend code crashes the server.

- **502 Bad Gateway** → A server received an invalid response from an upstream server.

  - _Example:_ A load balancer or reverse proxy gets an error from the backend.

- **503 Service Unavailable** → The server is overloaded or down for maintenance.

  - _Example:_ A website is temporarily down due to high traffic.

- **504 Gateway Timeout** → A request to an external service took too long to respond.
  - _Example:_ A payment gateway API call doesn’t return a response in time.

---
