import React, { useState, useEffect } from 'react';
import HeaderMenu from "../header";
import './participantes.css';
import avatarMujer from '../assets/avatarMujer.png';
import avatarHombre from '../assets/avatarHombre.png';
import swal from 'sweetalert2';
import axios from 'axios';
import backendUrl from '../configBackend.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


    

function FormEditParticipante() {
    const navigate = useNavigate();
    const location = useLocation();
    const participante = location.state;

    const [formData, setFormData] = useState({
        nombre: participante.nombre,
        apellidos: participante.apellido,
        email: participante.email,
        username: participante.username,
        line: participante.linea,
        avatar: participante.avatar
    });

    const [termsAccepted, setTermsAccepted] = useState(false);



    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleCheckboxChange = (event) => {
        setTermsAccepted(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!termsAccepted) {
            swal.fire({
                title: 'Error',
                text: 'Debe aceptar los términos y condiciones',
                icon: 'error'
            });
            return;
        }

        for (const key in formData) {
            if (formData[key] === '') {
                swal.fire({
                    title: 'Error',
                    text: 'Debe completar todos los campos',
                    icon: 'error'
                });
                return;
            }
        }

        const jsonData = {
            nombre: formData.nombre,
            apellidos: formData.apellidos,
            email: formData.email,
            username: formData.username,
            line: formData.line,
            avatar: formData.avatar
        };

        axios.put(backendUrl + '/api/Module1/Participante/Update/' + participante.pid, jsonData)
            .then((response) => {
                swal.fire({
                    title: '¡Participante actualizado!',
                    text: 'Los datos del participante han sido actualizados correctamente',
                    icon: 'success'
                }).then(() => {
                    // Navigate to '/participantes' after closing the alert
                    navigate('/Participantes');
                });
            })
            .catch((error) => {
                swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error al actualizar los datos del participante',
                    icon: 'error'
                });
            });
    };

    return (
        <body className='bodyParticipantes'>
            <HeaderMenu />
            <div className="containerForm">
                <h1 className="titleForm">Editar participante</h1>
                <form className="formParticipante" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input type="text" name="nombre" className="input" placeholder="Nombre" required value={formData.nombre} onChange={handleInputChange} />
                        <div className="highlight"></div>
                    </div>
                    <div className="input-container">
                        <input type="text" name="apellidos" className="input" placeholder="Apellido" required value={formData.apellidos} onChange={handleInputChange} />
                        <div className="highlight"></div>
                    </div>
                    <div className="input-container">
                        <input type="email" name="email" className="input" placeholder="Email" required value={formData.email} onChange={handleInputChange} />
                        <div className="highlight"></div>
                    </div>
                    <div className="input-container">
                        <input type="text" name="username" className="input" placeholder="GitHub Username" required value={formData.username} onChange={handleInputChange} />
                        <div className="highlight"></div>
                    </div>
                    <div className="input-container">
                        <input type="text" name="line" className="input" placeholder="Línea de investigación" required value={formData.line} onChange={handleInputChange} />
                        <div className="highlight"></div>
                    </div>
                    <div className="ContentcontentAvatar">
                        <div className="contentAvatar">
                            <img className="imgAvatarForm" src={avatarHombre} alt="Avatar" />
                            <label>
                                <input type="radio" name="avatar" value="hombre" checked={formData.avatar === 'hombre'} onChange={handleInputChange} />
                                Hombre
                            </label>
                        </div>
                        <div className="contentAvatar">
                            <img className="imgAvatarForm" src={avatarMujer} alt="Avatar" />
                            <label>
                                <input type="radio" name="avatar" value="mujer" checked={formData.avatar === 'mujer'} onChange={handleInputChange} />
                                Mujer
                            </label>
                        </div>
                    </div>
                    <div className="contentCheckbox">
                        <input type="checkbox" name="checkbox" value="checkbox" required checked={termsAccepted} onChange={handleCheckboxChange} />
                        <label>Acepto los términos y condiciones</label>
                    </div>
                    <button className="btnForm" type="submit">Guardar cambios</button>
                </form>
            </div>
        </body>
    );
}

export default FormEditParticipante;
