import React from 'react';
import './card.css';
import avatarMujer from '../assets/avatarMujer.png';
import avatarHombre from '../assets/avatarHombre.png';

const Card = ({ texto2, name, username, avatar }) => {

const evaluarAvatar = (avatar) => {
    if (avatar === 'mujer') {
        return avatarMujer;
    }
    if (avatar === 'hombre') {
        return avatarHombre;
    }
}
    return (
        <div className='containerCard'>
                <img src={evaluarAvatar(avatar)} alt="logo" className="imgAvatar" />
                <div className="containerInfo">
                        <h1 className="name">{name}</h1>
                        <div className="containerRedes">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" className="imgRedes" />
                                <p className='username'>@{username}</p>
                        </div>
                        <p className='texto2'>{texto2}</p>
                </div>
         
        </div>
    );
};

export default Card;

