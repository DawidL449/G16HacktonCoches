import axios from "axios";
import React, { useEffect, useState } from "react";

const Offers = () => {

  const [ getOffers, setGetOffers ] = useState([]) 
  console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format());
// expected output: "123.456,79 €"


  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/ads/getdiscount")
    .then( res => setGetOffers(res.data.getAllAds))    
  }, []);
  
  console.log(getOffers);

  const car = {
    img: {
      seat: "https://firebasestorage.googleapis.com/v0/b/marketplace-64f7d.appspot.com/o/ads%2Fpage-1.jpeg?alt=media&token=88223502-27df-4fa9-8d65-a17e998a3aab",
      renault:
        "https://firebasestorage.googleapis.com/v0/b/marketplace-64f7d.appspot.com/o/coches%2Fda89a351c530c87afd2bf9c7798a5e85-8650624-ebdd99a62f0c0c32166891228d5f83f7222588b8-vehicle-gallery-large.jpg?alt=media&token=362227f8-7ad5-4a40-aed6-cc8dda9e58f6",
      nissan:
        "https://res.cloudinary.com/dag3rmkxg/image/upload/f_auto,c_limit,w_750,q_auto/v1/car_model/nissan/juke",
    },

    brand: "Renault Scenic",
    model: "2016",
    color: "Blanco",
    price: "12000",
  };



  return (
    <div className="content-offers">
      <h2>Ofertas Destacadas</h2>
      <p>Nuestras ofertas del mes de julio</p>   

      <div className="content-card-offers" >
        { getOffers.map( data => {
            return(

                <div className="content-car" key={data.id}>
                
                  <img src={data.img} alt="" />
                  <div className="content-info">                
                    <div>
                      <p className="title-brand">{data.brand}</p>
                      <p>
                        <span>Modelo:</span> {data.model}
                      </p>
                      <p>
                        <span>Color:</span> {data.color}
                      </p>
                    </div>
      
                    <p className="price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data.price)}</p>
                  </div>
                  <button id="button">Ver Coche</button>
                </div>
      
              
              

            )
        } ) }
      </div>
    
    </div>
  );
};

export default Offers;
