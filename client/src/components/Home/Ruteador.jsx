import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Usuarios from './Usuarios'
import Fotos from './Fotos'

export default function Ruteador(props){
    return(
        <Switch>
            <Route exact path="/main/usuarios" component={Usuarios}/>
            <Route exact path="/main/fotos" component={Fotos} />
        </Switch>
    )
}