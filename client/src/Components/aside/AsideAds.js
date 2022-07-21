import React from 'react';

const AsideAds = () => {
    return (
        <div className='aside-ads'>
          <div>
            <h3>Filtros</h3>
            <small>Selecciona más de una opción por filtro si lo deseas</small>
          </div>
          <div>
            <label className='filterCoche'>Tipo de coche</label>
          </div>
          <div className='contentTypeCoche'>

          </div>
        </div>
    );
};

export default AsideAds;