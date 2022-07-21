import React from 'react';

const Form = () => {
    return (
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
    );
};

export default Form;