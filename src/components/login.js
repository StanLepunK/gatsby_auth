/**
 * Connexion
 * v 0.1.0
 * 2022-2022
 * */

import React from "react"

import { useState, useEffect } from "react";
import { navigate } from "gatsby"
import { handle_login, log_is } from "../services/auth"
import { graphql, useStaticQuery  } from "gatsby"

function Cell({title, type, name, onChange}) {
  return (
  <label>
    {title}
    <input type={type} name={name} onChange={onChange} />
  </label>

  )
}

const Login = () => {
  const [user, set_user] = useState({username: ``});
  const [psswrd, set_psswrd] = useState({password: ``});
  const [log, set_log] = useState({username: user.username, password: psswrd.password});

  const handle_update = event => {
    if(event.target.name === "username") {
      set_user({username: event.target.value});
    }
    if(event.target.name === "password") {
      set_psswrd({password: event.target.value});
    }
  }

  useEffect(() => {
    set_log({username: user.username, password: psswrd.password});
  }, [psswrd])

  const handle_submit = event => {
    event.preventDefault();
    handle_login(log);
  }

  if (log_is()) {
    navigate(`/app/profile`);
  }

  return (
    <>
      <h1>Log in</h1>
      <form
        method="post"
        onSubmit={event => {
          handle_submit(event)
          navigate(`/app/profile`)
        }}
      >
        <Cell title="Username" type="text" name="username" onChange={handle_update} />
        <Cell title="Password" type="text" name="password" onChange={handle_update} />
        <input type="submit" value="Log In" />
      </form>
    </>
  )
}

export default Login


// class Login extends React.Component {

  
//   state = {
//     username: ``,
//     password: ``,
//   }

//   handle_update = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }

//   handle_submit = event => {
//     event.preventDefault()
//     handle_login(this.state)
//   }

//   render() {
//     if (log_is()) {
// 			console.log("je suis identifié");
//       navigate(`/app/profile`);
//     } else {
// 			console.log("en attente");
// 		}

//     return (
//       <>
//         <h1>Log in</h1>
//         <form
//           method="post"
//           onSubmit={event => {
//             this.handle_submit(event)
//             navigate(`/app/profile`)
//           }}
//         >
//           <label>
//             Username
//             <input type="text" name="username" onChange={this.handle_update} />
//           </label>
//           <label>
//             Password
//             <input
//               type="password"
//               name="password"
//               onChange={this.handle_update}
//             />
//           </label>
//           <input type="submit" value="Log In" />
//         </form>
//       </>
//     )
//   }
// }

// export default Login

