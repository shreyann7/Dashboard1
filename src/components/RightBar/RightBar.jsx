import React from "react";
import { BiBell } from "react-icons/bi";
import { RiEnglishInput } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import UserAv from "../RightBar/userav.png";
import Image from "next/image";
import Transaction from "./Transaction";
import Overview from "./Overview";
import Summary from "./Summary";
const RightBar = () => {
  return (
    <div className="">
      <div className="tp-1 flex flex-row space-x-2 ">
        <RiEnglishInput />
        <RiArrowDropDownLine />
        <BiBell size={25} />
        <div className="pl-4 ">
          <Image
            src={UserAv}
            alt="Picture of the author"
            width={46}
            height={46}
          />
        </div>
      </div>
    <Transaction/>
    <Overview/>
    <Summary/>
    </div>
  );
};

export default RightBar;
