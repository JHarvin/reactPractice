import React from "react";
import Login from "./componentes/seguridad/Login";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import MenuAppBar from "./componentes/Navegacion.js/MenuAppBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Libro from "./componentes/modulos/Libro";

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Router>
    <MenuAppBar/>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registrar" component={RegistrarUsuario}/>
        <Route exact path="/" component={Libro}/>
      </Switch>
    </Router>
  </ThemeProvider>
    
   
  );
};

export default App;
