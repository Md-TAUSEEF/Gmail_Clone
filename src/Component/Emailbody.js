import React from 'react'
import "./Emaillist.css";
import { IoCheckboxOutline } from 'react-icons/io5';
import { CiStar } from 'react-icons/ci';
import { MdLabelOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMessage } from './fature/mailSlice';

export default function Emailbody({name,subject,message,time}) {
  const navigate = useNavigate();
const dispatch=useDispatch();
 
  const setEmail=()=>{
    dispatch(openMessage({
      name,
      subject,
      message,
      time
    }));
    navigate('/Emailbodyaction');
  }

 
  return (
    <div className='emailbody' onClick={setEmail}>
      
     
    
    <div className='emailbody__left'>
    <IoCheckboxOutline/>
    <CiStar/>
    <MdLabelOutline/>
    
    <h5>{name}</h5>

    </div>

    <div className='emailbody__mid'>
    <div className='emailbody_msg'>
        <p>{subject}</p> - <p><i>{message}</i></p>
    </div>

    </div>

    <div className='emailbody__right'>
<p>{time}</p>
    </div>
      
    </div>

  
  )
}
