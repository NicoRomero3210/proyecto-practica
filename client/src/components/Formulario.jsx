import React from 'react'
import {Grid, TextField} from '@material-ui/core'

export default function Formulario(props){
    const cambioInput = (e)=>{
        props.cambiarValorCampo(e)
    }
    return(
        <>
            {Object.keys(props.campos).map((campo,index)=>{
                return (
                    <Grid 
                        key={campo} 
                            item 
                            xs={12} 
                            style={{
                                textAlign:"center",
                                height:"20%",
                                marginTop: index=== 0 ? 30: 0
                            }}
                            >
                        <TextField 
                            key={index} 
                            value={props.campos[campo]} 
                            name={campo} 
                            onChange={cambioInput}
                            label={campo}
                            color='secondary'
                        />
                    </Grid>
                )
            })}
        </>
    )
}