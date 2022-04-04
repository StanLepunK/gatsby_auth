/**
 * Profil
 * v 0.0.1
 * 2022-2022
 * */
import React from "react"
import { get_user } from "../services/auth"


const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {get_user().name}</li>
      <li>Email: {get_user().email}</li>
    </ul>
  </>
)
export default Profile