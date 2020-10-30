import React, { useContext } from 'react';
import Title from './Title';
import {RoomContext} from '../Context';
import Room from './Room';
import Loading from './Loading';

const FeaturedRooms = () => { 
    const context = useContext(RoomContext);
    let {featuredRooms,loading} = context;
    featuredRooms = featuredRooms.map(room => <Room room={room}></Room>);
    
    return (
        <section className="featured-rooms">
            <Title title="featured rooms"/>
            <div className="featured-rooms-center">
                {loading ? <Loading/> : featuredRooms}
                
            </div>
        </section>
    );
};

export default FeaturedRooms;