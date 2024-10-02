import React, { useEffect, useState } from "react";
import useStyle from "../../theme/useStyle";

import {MenuItem, Card, Button, Container, Grid, TextField, Typography, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table, Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { agregarLibro, eliminarLibro, guardarDataLibro, listarLibros, obtenerLibroKey } from "../data/libros";

const clearLibro={
    categoria:'',
    titulo:'',
    autor:''
}

const Libro = () =>{
    const [libro, setLibro] =useState({
        categoria:'',
        titulo:'',
        autor:''

    });
    const handleChange=(e) =>{
        const{name,value}=e.target;
        setLibro(prev =>({
            ...prev,
            [name]:value
        }))
    }

    const guardarData =()=>{
        
        agregarLibro(libro);
        setLibro(clearLibro);
    }

    const [librosArray, setLibrosArray] = useState([]);

    const listarDataLibros =()=>{
        const data = listarLibros();
        setLibrosArray(data);
    }
    useEffect(()=>{
        listarDataLibros();

    }, [librosArray.length])

    const abrirDialog=(key)=>{
        setOpen(true);
        const dataLibro = obtenerLibroKey(key);
        setLibroEdita({
            key:key,
            categoriaE: dataLibro.categoria,
            tituloE: dataLibro.titulo,
            autorE: dataLibro.autor
        });
        console.log("Boton editar:");
    }
    const eliminarData=(data)=>{
        const listaNuevaLibros = eliminarLibro(data);
        setLibrosArray(listaNuevaLibros);
        console.log("eliminar");
    }
    const [libroEdita, setLibroEdita]=useState({
        key:0,
        categoriaE:'',
        tituloE:'',
        autorE:''
    })

    const handleChangeEdita =(e)=>{
        const{name,value}=e.target;
        setLibroEdita(prev =>({
            ...prev,
            [name]:value
        }))
    }
    const [open, setOpen]=useState(false);
    const cerrarDialog =()=>{
        setOpen(false);
    }
    const editarData=()=>{
        
        const nuevaData = guardarDataLibro(libroEdita);
        console.log("Editar data guardar: ", nuevaData);
        cerrarDialog();
    }

    const clases = useStyle();
    return (
        <Container 
        className={clases.containermt}>
            <Grid Container justify="center">
                <Grid item lg={7} md={8}>
                    <Card className={clases.card} align="center">
                        <Typography variant="h4">Libros</Typography>
                        <form className={clases.form} onSubmit={(e) =>e.preventDefault()}>
                           <Grid container spacing={2}>
                              <Grid item md={12} xs={12} className={clases.gridmd}>
                                 <TextField
                                 select
                                 label="Categoria"
                                 variant="outlined"
                                 fullWidth
                                 align="left"
                                 name="categoria"
                                 value={libro.categoria}
                                 onChange={handleChange}
                                 >
                                    <MenuItem value="Programacion">Programacion</MenuItem>
                                    <MenuItem value="Historia">Historia</MenuItem>
                                    <MenuItem value="Matematica">Matematica</MenuItem>
                                </TextField>   
                               </Grid>
                               <Grid item md={6} xs={12} className={clases.gridmd}>
                                <TextField
                                label="Título"
                                variant="outlined"
                                fullWidth
                                name="titulo"
                                value={libro.titulo}
                                onChange={handleChange}
                                />
                               </Grid>

                               <Grid item md={6} xs={12} className={clases.gridmd}>
                                <TextField
                                label="Autor"
                                variant="outlined"
                                fullWidth
                                name="autor"
                                value={libro.autor}
                                onChange={handleChange}
                                />
                               </Grid>
                               <Grid item md={12} xs={12} className={clases.gridmd}>
                                <Button
                                variant="contained"
                                fullWidth
                                color="primary"
                                type="submit"
                                onClick={guardarData}
                                >Guardar
                                </Button>
                               </Grid>
                            </Grid>         
                        </form>
                    </Card>
                </Grid>
            </Grid>
        
          <TableContainer component={Paper} className={clases.containermt}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Categoría</TableCell>
                        <TableCell>Titulo</TableCell>
                        <TableCell>Autor</TableCell>
                        <TableCell align="center" colSpan={2}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {librosArray.map((libroObj)=>(

                            <TableRow key={libroObj.key}>
                            <TableCell>{libroObj.categoria}</TableCell>
                            <TableCell>{libroObj.titulo}</TableCell>
                            <TableCell>{libroObj.autor}</TableCell>
                            <TableCell>
                                <Button 
                                variant="contained" 
                                color="primary"
                                onClick={ ()=> abrirDialog(libroObj.key)}
                                >
                                Editar</Button>
                            </TableCell>
                            <TableCell>
                            <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={()=>eliminarData(libroObj)}
                            >
                            Eliminar</Button>
                            </TableCell>
                            </TableRow>

                    ))}
                  
                </TableBody>
            </Table>

          </TableContainer>

          <Dialog 
          open={open}
          onClose={cerrarDialog}
          maxWidth="xs"
          fullWidth
          align="center"
          >
            <DialogTitle>Editar libro</DialogTitle>
            <DialogContent>
                <form onSubmit={(e)=>e.preventDefault()}>
                <TextField
                   className={clases.gridmd}
                    select
                    label="Categoria"
                    variant="outlined"
                    fullWidth
                    align="left"
                    name="categoriaE"
                    value={libroEdita.categoriaE}
                    onChange={handleChangeEdita}
                    >
                    <MenuItem value="Programacion">Programacion</MenuItem>
                    <MenuItem value="Historia">Historia</MenuItem>
                    <MenuItem value="Matematica">Matematica</MenuItem>
                </TextField>  

                <TextField
                 className={clases.gridmd}
                  label="Título"
                  variant="outlined"
                  fullWidth
                  name="tituloE"
                  value={libroEdita.tituloE}
                  onChange={handleChangeEdita}
                  />

                 <TextField
                 className={clases.gridmd}
                 label="Autor"
                 variant="outlined"
                 fullWidth
                 name="autorE"
                 value={libroEdita.autorE}
                 onChange={handleChangeEdita}
                 />

                <Button
                className={clases.gridmd}
                 variant="contained"
                 fullWidth
                 color="primary"
                 type="submit"
                 onClick={editarData}
                 >Guardar
                 </Button>

                </form>
            </DialogContent>

          </Dialog>

        </Container>
    )
}
export default Libro;