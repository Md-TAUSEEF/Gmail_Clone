import React from "react";
import "./Emaillistsetting.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";
import { MdMoreVert } from "react-icons/md";
import { BiSolidChevronLeft } from "react-icons//bi";
import { BiSolidChevronRight } from "react-icons/bi";
import { MdLabelImportant } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
import {MdLaunch } from "react-icons/md";
import {RxAvatar } from "react-icons/rx";
import {CiStar } from "react-icons/ci";
import { BiSolidShare} from "react-icons/bi";
import { PiDotsThreeOutlineVerticalFill} from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { selectedMail } from "./fature/mailSlice";
import { useSelector } from 'react-redux'


export default function Emailbodyaction() {
  const mail = useSelector(selectedMail)
    const navigate = useNavigate();
   
    
  return (
    <div>
    <div className="emailbodyaction">
        <div className="emaillistsetting_left">
          <BiLeftArrowAlt  onClick = {() => {
      navigate('/inbox');
    }}/>
          <IoMdArrowDropdown />
          <GrRefresh />
          <MdMoreVert />
        </div>

        <div className="emaillistsetting__righta">
           <p>1-50 of 10,222</p>
          <BiSolidChevronLeft />
         <BiSolidChevronRight />


        </div>
    </div> 
    <div className="emailbodycont">
        <div className="emaidetails__header">
            <div className="emaildetails__hdleft">
           <h4>{mail.name}</h4>

              <MdLabelImportant/>

            </div>

            <div className="emaildetails__hdright">
              <FiPrinter/>
              <MdLaunch/>

            </div>
        </div>

        <div className="emaidetails__midheader">
            <div className="emaildetails__midhdleft">
            <RxAvatar style={{fontSize:28}}/>
              <h4>{mail.subject}</h4>
              

            </div>

            <div className="emaildetails__midhdright">
             <p>{mail.time}</p>
             <CiStar/>
             <BiSolidShare/>
             <PiDotsThreeOutlineVerticalFill/>

            </div>
        </div>

        <div className="emaildetails__mess">
            <p>{mail.message}</p>
        </div>
    </div>
    </div>
  );
}
