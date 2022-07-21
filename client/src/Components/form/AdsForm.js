import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [adsCreate, setAdsCreate] = useState(false);
  const [ car, setCar ] = useState({})
  const capitalizar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


  const dataForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setLoading(true);

    setTimeout(() => {
      axios({
        method: "post",
        url: "http://localhost:5000/api/v1/ads/createads",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (response) {
        console.log(response.data.createAds);
        setCar(response.data.createAds)
        setLoading(false);
        setAdsCreate(true);
      });
    }, 2000);
  };

  if (loading) {
    return (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  if (adsCreate) {
    return (
      <div className="contentCreateCard">
        <h1>🎉 Enhorabuena tu anuncio se creo con exito 🎉</h1>

        <div className="cardCreate">
          <img src={car.img} alt="" />
          <div className="infoCardCreate">
            <div>
              <p className="title-brand">{capitalizar(car.brand)}</p>
              <p>
                <span>Modelo:</span> {car.model}
              </p>
              <p>
                <span>Color:</span> {car.color}
              </p>
            </div>
            <p className="price">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(car.price)}
              </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="beforeTitle">Datos de tu anuncio</h2>
      <form onSubmit={dataForm} encType="multipart/form-data">
        <div className="file">
          <label>Fotografía del anuncio</label>
          <input
            accept="image/jpeg, image/png, image/gif"
            type="file"
            name="img"
          />
        </div>
        <div className="inputs">
          <label>Marca</label>
          <select name="brand">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
            <option value="seat">Seat</option>
            <option value="renault">Renault</option>
            <option value="ford">Ford</option>
            <option value="peugeot">Peugeot</option>
            <option value="mercedes">Mercedes</option>
            <option value="subaru">Subaru</option>
            <option value="citroen">Citroen</option>
            <option value="nissan">Nissan</option>
            <option value="kia">Kia</option>
          </select>
          <label>Modelo</label>
          <input type="text" name="model" />
          <label>Color</label>
          <select name="color">
            <option value="rojo">Rojo</option>
            <option value="blanco">Blanco</option>
            <option value="negro">Negro</option>
            <option value="gris">Gris</option>
            <option value="amarillo">Amarillo</option>
            <option value="azul">Azul</option>
          </select>
          <label>Precio</label>
          <input type="number" name="price" />
          <div>
            <h3 className="titleH3">¿Producto en descuento?</h3>
            <div className="discount">
              <div>
                <label htmlFor="">Si</label>
                <input type="radio" name="discount" value="active" />
              </div>
              <div>
                <label htmlFor="">No</label>
                <input type="radio" name="discount" value="delete" />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="backButton" type="button">
            Volver
          </button>
          <button type="">Publicar</button>
        </div>
      </form>
    </>
  );
};

export default Form;
