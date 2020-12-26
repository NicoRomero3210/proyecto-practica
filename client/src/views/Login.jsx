import React,{useState} from 'react'
import {
    Grid,
    Card,
    CardHeader,
    Button,
    Paper
} from '@material-ui/core'
import {
    makeStyles
} from '@material-ui/core/styles'
import Formulario from '../components/Formulario'
import Cabecera from '../components/Cabecera'
import {axiosRouteUnlogued} from '../axiosRoute'

const estilos = makeStyles((theme)=>({
    root:{
        minHeight:'100vh',
        minWidth: '100vw'
    },
    containerForm:{
        minHeight:'85vh',
    },
    cardStyles:{
        minWidth: "40%",
        minHeight: "60%",
        backgroundColor: "white"
    }
}))

export default function Login(props){
    const [usuario,setUsuario] = useState({
        usuario: "",
        password: ""
    })
    const handleChangeUsuario = (e) => {
        let {value,name} = e.target 
        setUsuario({
            ...usuario,
            [name]:value
        })
        console.log(value)
    }

    const loguearse = async() => {
        const parametros = {
            "datosUsuario[username]" : usuario.usuario,
            "datosUsuario[password]": usuario.password
        }
        const {data,status} = await axiosRouteUnlogued.get('usuarios/registrarse',{
            params: parametros
        })
        console.log(data)
        //props.history.push('/main')
    }

    const clases = estilos()
    return(
        <Grid
        className={clases.root}
        container
        justify="center" 
        direction="row"
        >
            <Cabecera titulo="Login" />
            <Grid container direction="row" 
                justify="center" 
                className={clases.containerForm}
                component={Paper}
                alignContent="center"
            >
            <Card className={clases.cardStyles}>
                <Grid container style={{height:"20%"}}>
                    <CardHeader title="Ingrese sus datos" />
                </Grid>
                <Grid container style={{height:"58%"}}>
                    <Formulario campos={usuario} cambiarValorCampo={handleChangeUsuario}/>
                </Grid>
                <Grid container style={{height:"20%"}} justify="center">
                    <Button variant="contained" disableElevation={true} onClick={loguearse}>
                        <p>Ingresar</p>
                    </Button>
                </Grid>
            </Card>
            </Grid>
        </Grid>
    )
}