import './Header.css';
import React from 'react';
import gmail from "./Image/gmail.png"

import { IoMdReorder } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineExpandMore } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';
import { AiFillSetting} from 'react-icons/ai';
import {GrApps } from 'react-icons/gr';

import {Avatar} from '@mui/material';

export default function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <IoMdReorder style={{width:35,height:35,cursor:"pointer"}}/>
        <img src={gmail} alt='Gmail logo' style={{width:100,height:35}}/>
      </div>
      <div className='header__mid'>
        <div className='log'>
            <AiOutlineSearch style={{margin:"8px 6px"}}/>
            <input type='text' placeholder='search email'/>
            <MdOutlineExpandMore style={{marginTop:8}}/>
        </div>
      </div>

      <div className='header__right'>
        <div className='rightitem' >
          <BiHelpCircle className='icon' />
          <AiFillSetting className='icon'/>
          <GrApps className='icon'/>
          
        </div>
        <Avatar className='icon1' src="https://media.licdn.com/dms/image/D4D35AQHOytTqvvg_sw/profile-framedphoto-shrink_400_400/0/1693315131027?e=1697256000&v=beta&t=_dop6aCO05tK_yWai25HKQEnOYiInchu4pqK0fErMj8"/>
      </div>
    </div>
  );
}

