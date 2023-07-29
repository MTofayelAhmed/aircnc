import React from "react";
import Container from "../../component/shared/Container";
import Header from "./Header";
import RoomInfo from "../../component/rooms/RoomInfo";
import RoomReservation from "../../component/rooms/RoomReservation";



const RoomDetails = () => {
  return (
    <Container>
      <div className=" max-w-screen-lg mx-auto">
        <div className=" flex flex-col gap-6">
          <Header></Header>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>

            <RoomInfo></RoomInfo>
            <div className=" mb-10 md:col-span-3 order-first md:order-last">
            <RoomReservation></RoomReservation>
            </div>
            
        
          </div>
         
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
