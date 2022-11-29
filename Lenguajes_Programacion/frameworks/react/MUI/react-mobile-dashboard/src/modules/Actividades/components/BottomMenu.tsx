import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { AttachFile, Create, History } from "@mui/icons-material";
import DescriptionIcon from '@mui/icons-material/Description';
import React from 'react';



export const BottomMenu = () => {
  const [value, setValue] = React.useState(3);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }} elevation={5}>
      <BottomNavigation value={value} sx={{ px: 3 }} showLabels >
        <BottomNavigationAction sx={{pt:0.75,px:1.5,pb:1 }} label="Resumen" icon={<DescriptionIcon />} />
        <BottomNavigationAction sx={{pt:0.75,px:1.5,pb:1 }} label="Adjuntos" icon={<AttachFile />} />
        <BottomNavigationAction sx={{pt:0.75,px:1.5,pb:1 }} label="Editar" icon={<Create />} />
        <BottomNavigationAction sx={{pt:0.75,px:1.5,pb:1 }} label="Seguimiento" icon={<History />} />
      </BottomNavigation>
    </Paper>
  )
}
