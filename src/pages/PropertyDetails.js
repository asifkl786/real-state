import React from 'react';
import { housesData } from '../data';
import { useParams, Link } from 'react-router-dom';
import {BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
  // Get the house id 
  const { id } = useParams();
  console.log(id);

  // get the house based on the id 
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  console.log(house);


  return 
      (
        <section>
          
          <h1>PropertyDetails</h1>
        <div className='container mx-auto min-h-[700px] mb-14'>
            <div>
              <div>
                <h2>{house.name}</h2>
                <h3>{house.address}</h3>
              </div>
              <div>
                <div>{house.type}</div>
              </div>
            </div>
        </div>;
      </section>
      )
};

export default PropertyDetails;
