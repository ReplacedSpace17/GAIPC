import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderMenu from "../header";
import swal from 'sweetalert2';
import axios from 'axios';
import backendUrl from '../configBackend.js';

function AddRegistro() {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        username: '',
        line: '',
        avatar: ''
    });

    const [termsAccepted, setTermsAccepted] = useState(false);
    const [participantes, setParticipantes] = useState([]);
    const [asistentes, setAsistentes] = useState([]);
   

    useEffect(() => {
        // Realizar solicitud al backend para obtener los participantes
        axios.get(backendUrl + '/api/Module1/Participante/GetAll')
            .then((response) => {
                setParticipantes(response.data);
            })
            .catch((error) => {
                swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error al obtener los participantes',
                    icon: 'error'
                });
            });
    }, []);

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleCheckboxChange = (event) => {
        setTermsAccepted(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { line } = formData;
        const cif = location.state.conferencia.cif;
        console.log(line);
        console.log(cif);
        // Verificar que se haya seleccionado una línea de investigación
        if (line) {
           
            const formData={
                pid:line,
                cid:cif
            }
            // Realizar solicitud al backend para insertar el asistente
            axios.post(backendUrl + '/api/Module1/Asistente/Insert', formData)
                .then((response) => {
                    // Manejar la respuesta del backend
                    if(response.status === 200){
                        swal.fire({
                            title: 'Éxito',
                            text: 'Asistente registrado correctamente',
                            icon: 'success'
                        });
                        getParticipante(cif);
                    }
                })
                .catch((error) => {
                    swal.fire({
                        title: 'Error',
                        text: 'Ha ocurrido un error al insertar el asistente',
                        icon: 'error'
                    });
                });
        } else {
            swal.fire({
                title: 'Error',
                text: 'Debes seleccionar una línea de investigación',
                icon: 'error'
            });
        }
    };

    const goToView = (conferencia) => {
    
        navigate('/ViewConferencia');
    };

    const getParticipante = (id) => {
        axios.get(backendUrl + '/api/Module1/Asistente/GetByConference/' + id)
            .then((response) => {
                setAsistentes(response.data);
                navigate('/ViewConferencia', { state: { asistentes: response.data } });
            })
            .catch((error) => {
                swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error al obtener los participantes',
                    icon: 'error'
                });
            });
    }
    ;
    return (
        <body className='bodyParticipantes'>
            <HeaderMenu />
            <div className="containerForm">
                <h1 className="titleForm">Registro a conferencia</h1>
                <form className="formParticipante" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input type="text" name="nombre" className="input" placeholder="Nombre de conferencia" required onChange={handleInputChange} value={location.state.conferencia.conferencia} readOnly />
                        <div className="highlight"></div>
                    </div>
                    <div className="input-container">
                        <input type="text" name="nombre" className="input" placeholder="Hora" required onChange={handleInputChange} value={location.state.conferencia.ponente} readOnly />
                        <div className="highlight"></div>
                    </div>
                    <div className="input-container">
                        <input type="text" name="nombre" className="input" placeholder="Nombre de conferencia" required onChange={handleInputChange} value={location.state.conferencia.hora} readOnly />
                        <div className="highlight"></div>
                    </div>

                    <div className="input-container">
                        <select name="line" className="input" required onChange={handleInputChange}>
                            <option value="">Selecciona una línea de investigación</option>
                            {participantes.map((participante) => (
                                <option key={participante.pid} value={participante.pid}>{participante.pid} - {participante.nombre} {participante.apellido}</option>
                            ))}
                        </select>
                        <div className="highlight"></div>
                    </div>

                    {/* Resto del formulario */}
                    <button className="btnForm" type="submit">+ Registrar</button>
                </form>
            </div>
        </body>
    );
}

export default AddRegistro;

