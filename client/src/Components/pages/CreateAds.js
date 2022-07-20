import React from 'react';

const CreateAds = () => {
    return (
        <div className='App'>
            <nav>
                <img src="https://firebasestorage.googleapis.com/v0/b/marketplace-64f7d.appspot.com/o/img%2FlogoMarketPlace.svg?alt=media&token=637841f3-155a-4a11-b430-10c86fd719fb" alt="" />
                <button type='button'>Inicio</button>
            </nav>
            <div className='headerForm'>
                <h2 className='headerForm-title'>Renting para tu empresa<br></br>No esperes más<br></br>Anúnciate!</h2>
                <div>
                    <img src='https://res.cloudinary.com/dag3rmkxg/image/upload/w_1050,,c_pad,q_auto,g_south/v1/car_model/seat/arona' alt='' />
                </div>
            </div>
            <h2 className='beforeTitle'>Datos de tu anuncio</h2>
            <form>
                <div className='file'>
                    <label>Fotografía del anuncio</label>
                    <input accept="image/jpeg, image/png, image/gif" type="file" />
                </div>
                <div className='inputs'>
                    <label>Marca</label>
                    <select>
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
                    <input type="text" />
                    <label>Color</label>
                    <select>
                        <option value="rojo">Rojo</option>
                        <option value="blanco">Blanco</option>
                        <option value="negro">Negro</option>
                        <option value="gris">Gris</option>
                        <option value="amarillo">Amarillo</option>
                        <option value="azul">Azul</option>
                    </select>
                    <label>Precio</label>
                    <input type="number" />
                </div>
            </form>
            <div className='buttons'>
                <button class="backButton" type='button'>Volver</button>
                <button type='button'>Publicar</button>
            </div>
        </div>
    );
};

export default CreateAds;