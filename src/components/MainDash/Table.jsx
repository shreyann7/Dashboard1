import React from "react";
import Wcard from "../Cards/Wcard";
import WOcard from "../Cards/WOcard";


const Table = () => {
  return (
    <div className="flex flex-row w-t">
        <Wcard day="Mo" date="12" />
        <WOcard day="Tu" date="13" />
        <Wcard day="We" date="14" />
        <Wcard day="Th" date="15" />
        <Wcard day="Fr" date="16" />
        <Wcard day="Sa" date="17" />
        <Wcard day="Su" date="18" />
        <Wcard day="Mo" date="19" />  
    </div>
  );
};

export default Table;
