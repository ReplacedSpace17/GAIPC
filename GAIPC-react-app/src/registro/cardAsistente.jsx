import React from 'react';
import avatarMujer from '../assets/avatarMujer.png';
import avatarHombre from '../assets/avatarHombre.png';


const CardAsistente = ({ name, avataType }) => {

const evaluarAvatar = (avatar) => {
    if (avatar === 'mujer') {
        return avatarMujer;
    }
    if (avatar === 'hombre') {
        return avatarHombre;
    }
}
const avatar = 'mujer';
    return (
        <div className='containerCardPersonal'>
              <img src={evaluarAvatar(avataType)} alt="logo" className="imgAvatar" />
             <h1 className="nameCard">{name}</h1>
        </div>
    );
};

export default CardAsistente;

