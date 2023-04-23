import React from "react";
import { useState } from "react";
import Usercontext from "./Usercontext";
import axios from "axios";

const Userstate = (props) => {
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [id, setId] = useState("");



  return (
    <Usercontext.Provider
      value={{
        user,
        userName,
        setUser,setUserName,
        setId,
        id
      }}
    >
      {props.children}
    </Usercontext.Provider>
  );
};

export default Userstate;
