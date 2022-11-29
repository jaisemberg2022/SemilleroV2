import { Card, CardHeader, CardContent, Stack, Typography, Chip, Divider } from '@mui/material'
import { light } from '@mui/material/styles/createPalette'
import { border } from '@mui/system'
import React from 'react'
import { DetalleSeguimiento } from './DetalleSeguimiento'

type Estado  = "registrado" | "cancelado" | "rechazado" | "completado"|"reasignado";
type Colors = "default" | "warning" | "error" | "primary" |"success";

interface SeguimientoProps {
  estado: Estado,
  color:Colors
  
}




export const Seguimiento = ({estado,color}:SeguimientoProps) => {
  return (
    <>
        <Card elevation={0} sx={{display:'flex', flexDirection:'column',py:2,px:3,gap:1.5}} >
        
            <CardHeader sx={{ p:0}} title="Adriana Lucia Angarita Rodriguez" titleTypographyProps={{ variant: "body1" }}></CardHeader>

            <CardContent sx={{p:'0 !important'  ,display:'flex', flexDirection:'column',gap:1}} >
                    
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography component="div" variant='subtitle2' color={light.text?.primary}>
                        Paso 0
                        </Typography>
                        <Chip variant='filled' label={estado} color={color} size='small'></Chip>
                    </Stack>

                    <Stack >
                        <DetalleSeguimiento icono={'tag'} titulo={'Actividad'} descripcion={'Registro de Correspondencia'}></DetalleSeguimiento>
                        <DetalleSeguimiento icono={'calendario'} titulo={'fecha'} descripcion={'00:00 30/01/2022'}></DetalleSeguimiento>
                        <DetalleSeguimiento icono={'editar'} titulo={'Observaciones'} descripcion={'Factura sin código de barras'}></DetalleSeguimiento>
                    </Stack>

            </CardContent> 
        </Card>
        <Divider/>
    </>
  )
}
