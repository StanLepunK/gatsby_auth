/**
 * Layout
 * 0.0.1
 * 2022-2022
 */

import React from "react"
import NavBar from "./nav_bar"
const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)
export default Layout