import React, { useEffect, useState } from "react";
import "./Emaillist.css";
import Emaillistsetting from "./Emaillistsetting";
import Emailcnt from "./Emailcnt";
import Emailbody from "./Emailbody";
import { db } from "../firebase";
// import { useState } from "react";

export default function Emaillist() {
  const [email, setEmail] = useState([]);
  useEffect(() => {
    db.collection("email").orderBy("timestamp","desc").onSnapshot((snapshot) => {
      setEmail(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="emaillist">
      <Emaillistsetting />
      <Emailcnt />

      {  email.map(({ id, data }) => {
 return <Emailbody key={id} name={data.to} subject={data.use} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
  
  })
 }

    </div>
  );
}
