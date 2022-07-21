import axios from "axios";
import React, { useEffect, useState } from "react";

const CardsAds = () => {
  const [allAds, setAllAds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/ads/")
      .then((res) => setAllAds(res.data.getAllAds));
  }, []);

 const capitalizar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="cards-ads">
      {allAds.map((data) => {
        return (
          <div className="card-ads" key={data.id}>
            <img src={data.img} alt="" />
            <div className="card-info-ads">
              <div>
                <p className="title-brand">{capitalizar(data.brand)}</p>
                <p>
                  <span>Modelo:</span> {data.model}
                </p>
                <p>
                  <span>Color:</span> {data.color}
                </p>
              </div>
              <p className="price">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(data.price)}
              </p>
            </div>
            <button>Ver Coche</button>
          </div>
        );
      })}
    </div>
  );
};

export default CardsAds;
