import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderMenu from "../header.jsx";
import swal from 'sweetalert2';
import axios from 'axios';
import backendUrl from '../configBackend.js';
import CardAsistente from './cardAsistente.jsx';

function ViewConferencia() {
    const location = useLocation();
    const navigate = useNavigate();

    const [participantes, setParticipantes] = useState(location.state.asistentes);
    
    

    return (
        <body className='bodyParticipantes'>
            <HeaderMenu />
            <h1 className='titleParticipantesCards'>{participantes[0].conferencia}</h1>
            <div className="containerCardConferencias">
                {participantes.map((participante) => (

                    <CardAsistente name={participante.nombre} avataType={participante.avatar} />

                ))}
            </div>
            <br />
                    <button className='btnRegresar' onClick={() => navigate('/Registros')}>Regresar</button>
        </body>
    );
}

export default ViewConferencia;
