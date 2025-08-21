import React from "react"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Oops! The page you’re looking for doesn’t exist.  
        It may have been moved or deleted.
      </p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Go to Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default NotFound
