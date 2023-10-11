import React from 'react'
import "./Sidebaricon.css";
import { useNavigate } from 'react-router-dom';

export default function Sidebaricon(props) {
  const navigate = useNavigate();
  return (
    <div id='divsection' className='sidebaricon' onClick = {() => {
      navigate(props.url);
    }}>
      {props.Icon}
      <h1>{props.title}</h1>
      <p>{props.number}</p>
    </div>
    
  )
  
}
