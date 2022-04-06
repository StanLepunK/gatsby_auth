/**
 * Authentification 
 * v 0.1.0
 * 2022-2022
 * 
 * */
import { graphql, useStaticQuery  } from "gatsby"


export const browser_is = () => typeof window !== "undefined"
export const get_user = () =>
	browser_is() && window.localStorage.getItem("gatsby_user")
    ? JSON.parse(window.localStorage.getItem("gatsby_user"))
    : {}

const set_user = user => window.localStorage.setItem("gatsby_user", JSON.stringify(user));

export const handle_login = ({ username, password }, users_base) => {
  users_base.map((elem) => {
    if (username === elem.username && password === elem.password) {
      return set_user({
        username: elem.username,
        name: elem.pseudo,
        email: elem.email,
      })
    }

  })

  return false;
}

export const log_is = () => {
  const user = get_user();
  return !!user.username
}

export const logout = callback => {
  set_user({});
  callback();
}

