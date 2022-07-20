import React from "react";

const Offers = () => {
  const car = {
    img: "https://firebasestorage.googleapis.com/v0/b/marketplace-64f7d.appspot.com/o/coches%2Fda89a351c530c87afd2bf9c7798a5e85-8650624-ebdd99a62f0c0c32166891228d5f83f7222588b8-vehicle-gallery-large.jpg?alt=media&token=362227f8-7ad5-4a40-aed6-cc8dda9e58f6",
    brand: "Renault Scenic",
    model: "2016",
    color: "Blanco",
    price: "12000",
  };

  return (
    <div className="content-offers">
      <h2>Ofertas Destacadas</h2>
      <p>Nuestras ofertas del mes de julio</p>

        <div>
            <div className="content-car">
                <div>
                    <img src={car.img} alt="" />
                    <div className="content-info">
                        <div>
                        <p className="title-brand">{car.brand}</p>
                        <p>
                            <span>Modelo:</span> {car.model}
                        </p>
                        <p>
                            <span>Color:</span> {car.color}
                        </p>
                        </div>          
                        
                        <p className="price">{car.price} €</p>                    
                    </div>
                    <button>Ver Coche</button>
                </div>      

                  <div>
                    <img src={car.img} alt="" />
                    <div className="content-info">
                        <div>
                        <p className="title-brand">{car.brand}</p>
                        <p>
                            <span>Modelo:</span> {car.model}
                        </p>
                        <p>
                            <span>Color:</span> {car.color}
                        </p>
                        </div>          
                        
                        <p className="price">{car.price} €</p>                    
                    </div>
                    <button>Ver Coche</button>
                </div>      

                  <div>
                    <img src={car.img} alt="" />
                    <div className="content-info">
                        <div>
                        <p className="title-brand">{car.brand}</p>
                        <p>
                            <span>Modelo:</span> {car.model}
                        </p>
                        <p>
                            <span>Color:</span> {car.color}
                        </p>
                        </div>          
                        
                        <p className="price">{car.price} €</p>                    
                    </div>
                    <button>Ver Coche</button>
                </div>              
            </div>

            
        </div>
    </div>
  );
};

export default Offers;
