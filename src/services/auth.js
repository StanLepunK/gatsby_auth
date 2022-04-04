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

export const handle_login = ({ username, password }) => {

  // const { allMongodbAuthKnupelUsers } = useStaticQuery(graphql`
  //   query {
  //     allMongodbAuthKnupelUsers {
  //       edges {
  //         node {
  //           firstname
  //           email
  //           password
  //           pseudo
  //           lastname
  //         }
  //       }
  //     }
  //   }
  // `)

  if (username === `stan` && password === `stan`) {
    return set_user({
      username: `stan`,
      name: `Stanislas`,
      email: `stan@knupel.xyz`,
    })
  }
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


// MONGO DB ACCES
// export const pageQuery = graphql`
//   query {
//     allMongodbAuthKnupelUsers {
//       edges {
//         node {
//           firstname
//           email
//           password
//           pseudo
//           lastname
//         }
//       }
//     }
//   }
// `

