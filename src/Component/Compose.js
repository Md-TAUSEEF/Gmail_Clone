import React, { useState } from "react";
import "./Compose.css";
import { MdOutlineHeight } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdTextFormat } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";
import { MdInsertEmoticon } from "react-icons/md";
import { LiaGoogleDrive } from "react-icons/lia";
import { MdInsertPhoto } from "react-icons/md";
import { MdPhonelinkLock } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RiSpeakFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./fature/mailSlice";
import { db } from "../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export default function Compose() {
  const navigate = useNavigate();
  const [to, setTo] = useState("");
  const [use, setUse] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const onformsubmit = (e) => {
    e.preventDefault();

    if(to===""){
      return alert("fill email");
    }

    if(use===""){
      return alert("this use file");
    }

    if(message===""){
      return alert("fill message");
    }
    
  
    db.collection("email").add({
      to,
      use,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

      
    });

    alert("Email sent successfully");
    setTo("");
    setUse("");
    setMessage("");
    dispatch(closeSendMessage());
  };
  return (
    <div className="emailCompose">
      <div className="compose__header">
        <div className="composehr_left">
          <span>New Message</span>
        </div>

        <div className="composehr__right">
          <IoMdRemove />
          <MdOutlineHeight
            style={{ transform: "rotate(45deg)", transformorigin: "center" }}
          />
          <AiOutlineClose onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>

      <form onSubmit={onformsubmit}>
        <div className="composebody_form">
          <input
            type="email"
            name="email"
            placeholder="Reciepents"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            aria-describedby="emailHelp"
            required
          />
          <input
            type="text"
            name="text"
            placeholder="Subject"
            value={use}
            onChange={(e) => setUse(e.target.value)}
            aria-describedby="textHelp"
            required
          />
          <textarea
            rows="20"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          >
            {message}
          </textarea>
        </div>

        <div className="compose__footer">
          <div className="composefooter__left">
            <button type="submit">
              send
              <IoMdArrowDropdown />
            </button>
          </div>
          <div className="composefooter__right">
            <RiSpeakFill   onClick = {() => {
      navigate('/Speech');
    }}/>
            <MdTextFormat />
            <IoMdAttach />
            <FiLink2 />
            <MdInsertEmoticon />
            <LiaGoogleDrive />
            <MdInsertPhoto />
            <MdPhonelinkLock />
            <MdCreate />
            <IoMdMore />
            <MdDelete />
          </div>
        </div>
      </form>
    </div>
  );
}
