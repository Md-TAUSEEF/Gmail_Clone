import React from "react";
import "./Sidebar.css";
import { GrAdd } from "react-icons/gr";
import { BiSolidInbox } from "react-icons/bi";
import { MdStarRate } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdOutlineLabelImportant } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { MdLabel } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiSolidFileFind } from "react-icons/bi";
import { MdOutlineExpandMore } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./fature/mailSlice";

import Sidebaricon from "./Sidebaricon";

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <button
        className="compose__btn"
        onClick={() => dispatch(openSendMessage())}
      >
        <GrAdd /> Compose
      </button>
      <div className="show">
      <Sidebaricon Icon={<BiSolidInbox />} title="Inbox" number="224" url="/inbox"/>
      <Sidebaricon href="/" Icon={<MdStarRate />} title="Starred" number="224" url="/"/>
      <Sidebaricon Icon={<MdWatchLater />} title="Snoozed" number="224" />
      <Sidebaricon
        Icon={<MdOutlineLabelImportant />}
        title="Important"
        number="224"
      />
      <Sidebaricon Icon={<MdSend />} title="Sent" number="224" url="/sent"/>
      <Sidebaricon Icon={<MdDrafts />} title="Drafts" number="224" url="/drafts" />
      <Sidebaricon Icon={<MdLabel />} title="Category" number="224" />
      <Sidebaricon Icon={<MdDelete />} title="[Map]/Trash" number="224" />
      <Sidebaricon Icon={<BiSolidFileFind />} title="Documents" number="224" />
      <Sidebaricon Icon={<MdOutlineExpandMore />} title="More" number="224" />
      </div>
      <hr></hr>
      <h2 className="sidebaricon__hide">Meet</h2>
      <Sidebaricon
        Icon={<BsFillCameraVideoFill />}
        title="New Meeting"
        number="224"
      />
      <Sidebaricon
        Icon={<FaRegKeyboard />}
        title="Join a Meeting"
        number="224"
      />
    </div>
  );
}
