
import HeaderMenu from "../header";
import './Home.css';
import teclogo from '../assets/tecnm.png';
import clubes from '../assets/clubesLogo.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const goParticipantes = () => {
    navigate('/Participantes');
    }
    
    return (
        <body>
            <div className="containerLeft">
                <img src={teclogo} alt="logo" className="img1" />
                <h1 className="title">¡Bienvenido/as!</h1>
                <div className="contButton">
                    <button onClick={goParticipantes}>
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">🚀 Vamos</span>
                    </button>
                </div>

            </div>
            <div className="containerRight">
                <img src={clubes} alt="logo" className="img2" />
            </div>
        </body>
    )
}
export default Home;