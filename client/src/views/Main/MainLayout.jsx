import React from 'react'
import {Grid} from '@material-ui/core'
import TemporaryDrawer from '../../components/Home/SideBar'
import Ruteador from '../../components/Home/Ruteador'
import {NavLink} from 'react-router-dom'
import {
  makeStyles
} from '@material-ui/core/styles'
import Cabecera from '../../components/Cabecera'

const estilos = makeStyles((theme)=>({
  root:{
      minHeight:'100vh',
      minWidth: '100vw'
  },
  containerForm:{
      minHeight:'85vh',
  }
}))

const MainLayout = (props) => {
  const estilosAplicados = estilos()
    return(
      <Grid container className={estilosAplicados.root} justify="center" direction="row">
        <Cabecera titulo="Home"/>
        <Ruteador />
      </Grid>
    )   
}

export default MainLayout