import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import TemporaryDrawer from '../Home/SideBar'

const estilos = makeStyles(theme=>({
    cabecera:{
        height:'5vh'
    },
    linkColor:{
        color: "#CAA127",
        textDecorationLine: "none"
    }
}))

export default function Cabecera(props){
    const estilosAplicados = estilos()
    return(
        <Grid 
          container 
          direction="row"
          className={estilosAplicados.cabecera}
        >
          <Grid item xs={12} md={1} style={{textAlign:"center"}}>
            <TemporaryDrawer nav={props.history}/>
          </Grid>
          <Grid item xs={12} md={9} style={{textAlign:"center"}}>
            <h1>{props.titulo}</h1>
          </Grid>
          <Grid item xs={12} md={2} style={{textAlign:"center"}}>
            <p>
                <Link 
                    to="/registrarse" 
                    className={estilosAplicados.linkColor}
                >  
                    Registrarse
                </Link>
            </p>
          </Grid>
        </Grid>
    )
}