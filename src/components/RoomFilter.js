import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

const getUniqueValues = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({rooms}) => {
 
const context = useContext(RoomContext);

const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

let types = getUniqueValues(rooms,'type');
types = ["all",...types];
types = types.map((type,index) => <option key={index}>{type}</option>) 

let people = getUniqueValues(rooms,'capacity');
people = people.map((capacity,index) => <option key={index}>{capacity}</option>)


    return (
        <section className="filter-container">
            <Title title="search rooms"></Title>

            <form action="" className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                    name="type" 
                    id="type"
                    value={type}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select 
                    name="capacity" 
                    id="capacity"
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>


                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input 
                    name="price" 
                    id="price"
                    type="range"
                    value={price}
                    min={minPrice}
                    max={maxPrice}
                    className="form-control"
                    onChange={handleChange}
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input
                        type="number" 
                        name="minSize" 
                        id="size"
                        value={minSize}
                        className="size-input"
                        onChange={handleChange}
                        />
                        <input 
                        type="number" 
                        name="maxSize" 
                        id="size"
                        value={maxSize}
                        className="size-input"
                        onChange={handleChange}
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                        type="checkbox" 
                        name="breakfast" 
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                        type="checkbox" 
                        name="pets" 
                        id="pets"
                        checked={pets}
                        onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>

            </form>
        </section>
    );
};

export default RoomFilter;