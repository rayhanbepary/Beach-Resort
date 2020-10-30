import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import RoomList from './RoomsList';
import RoomFilter from './RoomFilter';
import Loading from './Loading';



const RoomsContainer = () => {

    const context = useContext(RoomContext);
    let {loading,rooms,sortedRooms} = context;

    return (
        <div>
            <RoomFilter rooms={rooms}/>
            {loading ? <Loading /> : <RoomList rooms={sortedRooms}/>}
        </div>
    );
};

export default RoomsContainer;