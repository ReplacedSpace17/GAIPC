
import React from 'react';
import HeaderMenu from "../header";
import './participantes.css';
import Card from './card';
import { useNavigate } from 'react-router-dom';

function Participantes() {
    const navigate = useNavigate();
    const goParticipantes = () => {
    navigate('/FormAddParticipante');
    }

    const texto2 = "Desarrollador Frontend";
    const name = "Jose Javier Gutierrez";
    const username = "ReplacedSpace17";
    const avatar = "mujer";

    return (
        <body className='bodyParticipantes'>
            <HeaderMenu/>
            <div className="contentButton">
                <button className='buttonAdd' onClick={goParticipantes}>Agregar</button>
            </div>
            <Card texto2={texto2} name={name} username={username} avatar={avatar} />
            
        </body>
    );
}

export default Participantes;
