import React from "react"

import { Link } from "gatsby"
import { get_user, log_is } from "../services/auth"

import Layout from "./../components/layout";

// https://www.gatsbyjs.com/tutorial/authentication-tutorial/

export default function Home() {
  return (
    <Layout>
      <h1>Hello {log_is() ? get_user().name : "world"}!</h1>
      <p>
        {log_is() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  )
}
