import React, { useEffect, useState } from 'react';
import HeaderMenu from "../header";
import './participantes.css';
import Card from './card';
import { useNavigate } from 'react-router-dom';
import backendUrl from '../configBackend.js';

function Participantes() {
    const navigate = useNavigate();
    const goParticipantes = () => {
        
        navigate('/FormAddParticipante');
    }

    const [participantes, setParticipantes] = useState([]);

    const goEditParticipantes = (participante) => {
        navigate('/FormEditParticipante', { state: participante });
    }

    useEffect(() => {
        const fetchParticipantes = async () => {
            try {
                const response = await fetch(`${backendUrl}/api/Module1/Participante/GetAll`);
                const data = await response.json();
                setParticipantes(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchParticipantes();
    }, []);

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
            <div className="containerCards" >
            {participantes.map((participante) => (
                <div className="cardCon"  onClick={() => goEditParticipantes(participante)}>
                <Card
                    key={participante.pid}
                    texto2={participante.linea}
                    name={participante.nombre + ' ' + participante.apellido}
                    username={participante.username}
                    avatar={participante.avatar}
                   
                />
                </div>
            ))}
            </div>
           
        </body>
    );
}

export default Participantes;

