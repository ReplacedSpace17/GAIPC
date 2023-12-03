
import React from 'react';
import HeaderMenu from "../header";
import './participantes.css';
import avatarMujer from '../assets/avatarMujer.png';
import avatarHombre from '../assets/avatarHombre.png';

function FormAddParticipante() {

    return (
        <body className='bodyParticipantes'>
            <HeaderMenu />
            <div className="containerForm">
                <h1 className="titleForm">Agregar participante</h1>
                <form className="formParticipante">
                <div class="input-container">
                        <input type="text" name="text" class="input" placeholder="Nombre" required/>
                        <div class="highlight"></div>
                    </div>
                    <div class="input-container">
                        <input type="text" name="text" class="input" placeholder="Apellido" required/>
                        <div class="highlight"></div>
                    </div>
                    <div class="input-container">
                        <input type="text" name="email" class="input" placeholder="Email" required/>
                        <div class="highlight"></div>
                    </div>
                    <div class="input-container">
                        <input type="text" name="text" class="input" placeholder="GitHub Username" required/>
                        <div class="highlight"></div>
                    </div>
                    <div class="input-container">
                        <input type="text" name="text" class="input" placeholder="Línea de investigación" required/>
                        <div class="highlight"></div>
                    </div>
                    <div className="ContentcontentAvatar">
                        <div className="contentAvatar">
                            <img className="imgAvatarForm" src={avatarHombre} alt="Avatar" />
                            <label>
                                <input type="radio" name="avatar" value="hombre" />
                                Hombre
                            </label>
                        </div>
                        <div className="contentAvatar">
                            <img className="imgAvatarForm" src={avatarMujer} alt="Avatar" />
                            <label>
                                <input type="radio" name="avatar" value="mujer" />
                                Mujer
                            </label>
                        </div>
                    </div>
                    
                    <div className="contentCheckbox">
                        <input type="checkbox" name="checkbox" value="checkbox" />
                        <label>Acepto los términos y condiciones</label>
                    </div>
                    <button className="btnForm" type="submit">+ Agregar</button>
                </form>
            </div>
        </body>
    );
}

export default FormAddParticipante;
