import React from "react";

import { NavLink } from "react-router-dom";

const SignInLink = () => {
  return (
    <ul className="right">
        
        <li> <NavLink to ="/"></NavLink>log out</li>
        <li> <NavLink to ="/" className="btn btn-floating pink lighten-1">pp</NavLink> </li>
    </ul>
  );
};

export default SignInLink;