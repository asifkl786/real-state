import React,{ useState, useEffect, createContext} from 'react';

// import data
import { housesData } from '../data';

// create context
export const HouseContext = createContext();


const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location type (any)');
  const [countries, setCountries] = useState([]);
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState('Property type(any)');
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState((false));


  // return all countries
  useEffect(() => {
      const allCountries = houses.map((house) => {
         return house.country;
      });
     // console.log(allCountries);
      // remove duplicates
      const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
     // console.log(uniqueCountries);
      setCountries(uniqueCountries);
  },[]);

   // return all properties
   useEffect(() => {
    const allProperties = houses.map((house) => {
       return house.type;
    });
    // remove duplicates
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)]
    setProperties(uniqueProperties);
   },[]);


  const handleClick = () => {
    // set loading
    setLoading(true);
  // create a function that checks if string include '(any)'
      const isDefault = (str) => {
        return 
          str.split(' ').includes('(any)');
         // str.split(' ').join('(any)')
         
      };
      console.log(price.split(' '));
      console.log(country.split(' '));
      console.log(property.split(' '));
     console.log(country,property,price)
     console.log(typeof(price));
     

    
    // const minPrice = parseInt(price.split(' ')[0]);
    // const maxPrice = parseInt(price.split(' ')[2]);
     
     const newHouse = housesData.filter((house) => {
            const housePrice = parseInt(house.price);
            
          // if all vlaues are selected 
          if(
            house.country === country &&
            house.type === property 
         //   housePrice >= minPrice &&
          //  housePrice <= maxPrice
          ){
          return house;
          }

          // if all values are default
          if(isDefault(country) && isDefault(property) 
            && isDefault(price)){
              return house;
            }

          // if country is not default
          if(!isDefault(country) && isDefault(property) 
            && isDefault(price)){
             return house.country === country;
          }  

          // if property is not default
          if(!isDefault(property) && isDefault(country)
          && isDefault(price)) {
           return house.type === property;
          }

          // if price is not default
          if(!isDefault(price) && isDefault(country)
            && isDefault(property)) {
             return house;
            }
          // if country & property is not default
          if(!isDefault(country) && (!isDefault(property)) 
            && (isDefault(price))){
             return house.country === country && house.type === property;
            } 
            
          // if country and price is not default
          if(!isDefault(country) && isDefault(property)
              && !isDefault(price))  {
               return house.country === country;
              }

          // property and price is not default 
            if(!isDefault(country) && !isDefault(property)
              && !isDefault(price))  {
             // if(housePrice >= minPrice && housePrice <= maxPrice){
                return house.country === country;
                 
            }  
     });  
     console.log(newHouse);

     setTimeout(() => {
        return newHouse.length < 1 ? setHouses([]) : 
            setHouses(newHouse),
            setLoading(false)
     },1000);
       
  
  };

  return (
    <HouseContext.Provider
     value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
      loading,
     }}>
      { children }
          
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
