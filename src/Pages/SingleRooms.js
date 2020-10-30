import React, { useContext, useState }from 'react';
import { RoomContext } from '../Context';
import defaultBcg from '../images/room-1.jpeg'
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';

import {Link} from 'react-router-dom'


const SingleRooms = (props) => {

const context = useContext(RoomContext);

    const [RoomsSlug, setSlug] = useState({
        slug: props.match.params.slug,
        defaultBcg
    })

    let {rooms} = context;
    let room = rooms.find(item => item.slug === RoomsSlug.slug)

    if(!room){
        return (
            <div className="error">
                <h3>No such room could be found</h3>
                <Link to="/rooms/" className="btn-primary">Back to Rooms</Link>
            </div>
        );
    }

    const {name, price, description, capacity, size, extras, breakfast, pets, images} = room;
    const [mainImage,...defaultImages] = images;

    return (
        <div>
            <StyledHero img={mainImage || RoomsSlug.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms/" className="btn-primary">back to rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImages.map((image,index) => <img key={index} src={image} alt=""/>)}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>
                            max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person` }
                        </h6>
                        <h6>{pets && "pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => <li key={index}> - {item}</li> )}
                </ul>
            </section>
        </div>
    );
};

export default SingleRooms;