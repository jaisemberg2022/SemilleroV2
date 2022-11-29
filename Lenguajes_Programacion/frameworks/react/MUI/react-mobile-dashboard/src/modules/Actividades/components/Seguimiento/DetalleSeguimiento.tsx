import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditIcon from '@mui/icons-material/Edit';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { light } from '@mui/material/styles/createPalette';

type TipoIcono = "calendario"|"tag"|"editar"
interface DetalleSeguimientoProps{
  icono:TipoIcono,
  titulo:string,
  descripcion:string
}

export const DetalleSeguimiento = ({icono,titulo,descripcion}:DetalleSeguimientoProps) => {
  
  const Iconos = {
    calendario:<CalendarMonthIcon fontSize='small' color='disabled'/>,
    editar:<EditIcon fontSize='small' color='disabled'/>,
    tag:<TurnedInIcon fontSize='small' color='disabled'/>

  }
  return (
    <Stack direction='row' gap={2} alignItems='center'>
      {Iconos[icono]}
      <Stack justifyContent="space-between">
          <Typography variant="caption" color={light.text?.primary}>{titulo}</Typography>
          <Typography variant='body2' color={light.text?.secondary}> {descripcion} </Typography>
      </Stack>
    </Stack>
  )
}
