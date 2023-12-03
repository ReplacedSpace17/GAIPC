import React, { useEffect, useState } from 'react';
import HeaderMenu from "../header";
import './registros.css';
import { useNavigate } from 'react-router-dom';
import backendUrl from '../configBackend.js';
import axios from 'axios';
import swal from 'sweetalert2';


function Registros() {
    const navigate = useNavigate();
    const [conferencias, setConferencias] = useState([]);

    useEffect(() => {
        fetch(`${backendUrl}/api/Module1/Conferencia/GetAll`)
            .then(response => response.json())
            .then(data => setConferencias(data))
            .catch(error => console.log(error));
    }, []);

    const registrar = (conferencia) => {
        navigate('/AddRegistro', { state: { conferencia } });
    };
    return (
        <body className='bodyParticipantes'>
            <HeaderMenu />
            <h1 className='tituloParticipantes'>Programa de conferencias</h1>
            <div className="containerTable">
                <table>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Conferencia</th>
                            <th>Ponente</th>
                            <th>Accions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conferencias.map(conferencia => (
                            <tr key={conferencia.cif}>
                                <td>{conferencia.hora}</td>
                                <td>{conferencia.conferencia}</td>
                                <td>{conferencia.ponente}</td>
                                <td><button className='buttonAdd' onClick={() => registrar(conferencia)}>Registrar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </body>
    );
}

export default Registros;
