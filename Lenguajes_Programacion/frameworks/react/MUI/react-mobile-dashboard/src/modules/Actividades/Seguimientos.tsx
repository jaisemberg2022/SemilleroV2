import { Box } from '@mui/material'
import React from 'react'
import { AppBarActividad } from './components/AppBarActividad'
import { BottomMenu } from './components/BottomMenu'
import { Seguimiento } from './components/Seguimiento/Seguimiento'

export const Seguimientos = () => {
  return (
    <>
      <AppBarActividad/>
      <Box py={7}   >
        <Seguimiento estado='registrado' color='default'/>
        <Seguimiento estado='cancelado' color='warning'/>
        <Seguimiento estado='rechazado' color='error'/>
        <Seguimiento estado='reasignado' color='primary'/>
        <Seguimiento estado='completado' color='success'/>
      </Box>
      <BottomMenu/>
    </>
  )
}
