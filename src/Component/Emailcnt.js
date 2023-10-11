import React from "react";
import { BiSolidInbox } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
export default function Emailcnt() {
  return (
    <div className="emailcnt">
      <div className="emailop  emailop--active">
        <BiSolidInbox />
        <p>Primary</p>
      </div>
      <div className="emailop">
        <IoPeopleSharp />
        <p>Primary</p>
      </div>
      <div className="emailop">
        <MdLocalOffer />
        <p>Primary</p>
      </div>
    </div>
  );
}
