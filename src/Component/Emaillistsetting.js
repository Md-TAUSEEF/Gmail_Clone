import React from 'react'
import "./Emaillistsetting.css";
import { GrCheckbox } from 'react-icons/gr';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GrRefresh } from 'react-icons/gr';
import { MdMoreVert } from 'react-icons/md';
import { BiSolidChevronLeft } from 'react-icons//bi';
import { BiSolidChevronRight } from 'react-icons/bi';

export default function Emaillistsetting() {
  return (
    <div className='emaillistsetting'>
    <div className='emaillistsetting_left'>
        <GrCheckbox/>
        <IoMdArrowDropdown/>
        <GrRefresh/>
        <MdMoreVert/>
    </div>

    <div className='emaillistsetting__right'>
    <p>1-50 of 10,222</p>
    <BiSolidChevronLeft/>
    <BiSolidChevronRight/>
  

    </div>
      
    </div>
  )
}
