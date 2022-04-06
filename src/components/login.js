/**
 * Connexion
 * v 0.2.0
 * 2022-2022
 * */

import React from "react"

import { useState, useEffect } from "react";
import { navigate } from "gatsby"
import { handle_login, log_is } from "../services/auth"
import { graphql, useStaticQuery  } from "gatsby"

function build_users_list(nodes) {
  let list = [];
  let buf = [];
  if (nodes === undefined) {
    return null;
  }
  for (let i = 0; i < nodes.length; i++) {
    const obj = {
      id: nodes[i].id,
      pseudo: nodes[i].pseudo,
      username: nodes[i].username,
      email: nodes[i].email,
      firstname: nodes[i].firstname,
      lastname: nodes[i].lastname,
      password: nodes[i].password,
    };
    buf.push(obj);
  }

  // Not really necessary but just in case there a crossing list with element with a same id
  for (let i = 0; i < buf.length; i++) {
    let obj_temp = buf[i];
    if (list.length === 0) {
      list.push(obj_temp);
    } else {
      let add_is = true;
      for (let k = 0; k < list.length; k++) {
        if (obj_temp.id === list[k].id) {
          add_is = false;
          break;
        }
      }
      if (add_is) {
        list.push(obj_temp);
      }
    }
  }
  return list;
}

function Cell({title, type, name, onChange}) {
  return (
  <label>
    {title}
    <input type={type} name={name} onChange={onChange} />
  </label>
  )
}

const Login = () => {
  const all = useStaticQuery(graphql`
    query {
      allMongodbAuthKnupelUsers {
        nodes {
          id
          pseudo
          username
          email
          firstname
          lastname
          password
        }
      }
    }
  `)

  const [users_base, set_users_base] = useState(build_users_list(all.allMongodbAuthKnupelUsers.nodes));
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
    handle_login(log,users_base);
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


