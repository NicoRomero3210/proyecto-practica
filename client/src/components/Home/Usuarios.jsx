import React from 'react'
import {Grid} from '@material-ui/core'

export default function Usuarios(){
    return(
        
            <Grid 
                justify="center" 
                direction="row"
                xs={12}
                style={{
                    backgroundColor:"black",
                    height:"70%",
                    width: '100%'
                }}
            >
                <h1>Usuarios</h1>
            </Grid>
        
    )
}