import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './login.css';
import axios from 'axios';
import backendUrl from '../configBackend';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        try {
            const response = await axios.post(backendUrl + '/user/login', {
                email: data.get('email'),
                password: data.get('password'),
            });
    
            if (response.status === 200) {
                // Código de estado 200 (OK)
                // Realiza acciones específicas para este código de estado
                 // Redirige al usuario a la página deseada
                 navigate('/Home');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Código de estado 401 (Unauthorized)
                // Realiza acciones específicas para este código de estado
                alerta('error', 'Error', 'Credenciales inválidas');
            } else {
                // Otros errores
                console.error('Error al realizar la solicitud:', error.response ? error.response.data.error : error.message);
                // Realiza acciones específicas para otros errores
                
            }
        }
    };
    
    
const alerta = (icon, title, msg) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: msg,
    });
}
    




    return (
    <body>
        <Container component="main" maxWidth="sm" >
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "white",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </body>
    );
}