import {Grid, Card, Container, Typography, Avatar, Icon, TextField, Button } from "@material-ui/core";
import React from "react";
import useStyle from "../../theme/useStyle";
import {Link} from 'react-router-dom';
// alt*62, 60

const Login =()  =>{
    const clases=useStyle();
    return (
       <Container className={clases.containermt}>
        <Grid container justify="center">
            <Grid item lg={5} md={6}>
                <Card className={clases.card} align="center">
                    <Avatar className={clases.avatar}>
                        <Icon className={clases.icon}>
                          account_circle
                        </Icon>
                    </Avatar>
                    <Typography varian="h5" color="primary">Ingrese su usuario</Typography>
                    <form className={clases.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={clases.gridmd}>
                                <TextField label="usuario"
                                variant="outlined"
                                fullWidth
                                type="email"
                                />
                            </Grid>

                            <Grid item xs={12} className={clases.gridmd}>
                                <TextField label="contraseña"
                                variant="outlined"
                                fullWidth
                                type="password"
                                />
                            </Grid>

                            <Grid item xs={12} className={clases.gridmd}>
                             <Button 
                             variant="contained"
                             fullWidth
                             color="primary">
                                Ingresar
                             </Button>
                            </Grid>
                        </Grid>
                        <Link className={clases.link}
                        to="/registrar"
                        variant="body1"> 
                        Crear cuenta
                        </Link>
                    </form>
                </Card>
            </Grid>
        </Grid>
       </Container>
    )
};
export default Login;

