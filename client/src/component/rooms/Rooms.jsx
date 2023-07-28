import React, { useEffect, useState } from 'react';
import Container from '../shared/Container';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(()=>{
        fetch("rooms.json").then(res => res.json()).then(data => setRooms(data))
        .catch(err => console.log(err))
    },[])
    return (
        <Container>
            {rooms.length}
        </Container>
    );
};

export default Rooms;