/**
 * Barre de navigation
 * 0.0.1
 * 2022-2022
 */


import React from "react"
// import { Link } from "gatsby"
import { Link, navigate } from "gatsby"
import { get_user, log_is, logout } from "../services/auth"

export default function NavBar() {
  let message = ""
  if (log_is()) {
    message = `Hello ${get_user().name}`
  } else {
    message = "You are not logged in"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{message}</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        {/* <Link to="/">Profile</Link> */}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {/* <Link to="/">Logout</Link> */}
        {log_is() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}