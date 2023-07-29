import React from "react";
import Calender from "../rooms/Calender";

const RoomReservation = () => {
  return (
    <div className=" bg-white  rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className=" flex flex-row item-center gap-1 p-4">
        <div className=" font-semibold text-2xl"> $200</div>
        <div className=" font-light text-neutral-600"></div>
      </div>
      <hr />
      <Calender></Calender>
      <hr />
      <div className=" p-4 flex flex-row justify-between items-center font-semibold text-lg">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
