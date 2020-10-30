import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Room = ({room}) => {

    const {price,name,images,slug} = room;

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="single room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
};

export default Room;

Room.propTypes = {
    room: propTypes.shape({
        name: propTypes.string.isRequired,
        slug: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        images: propTypes.arrayOf(propTypes.string).isRequired
    })
}