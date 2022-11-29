import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, IconButton, Stack, Typography } from "@mui/material"
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
// subheader="September 14, 2016"
export const MuiCard = () => {
  return (
    <Card variant="outlined">
      <CardContent sx={{ textAlign:'left'}} >
        <Typography variant='body2'>Acta de entrega Apto. 1705</Typography>

          <Stack my={1} direction='row' alignItems={'center'} justifyContent={'space-between'} >
            <Stack >
              <Chip label="Confirmar recibido" />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <TodayOutlinedIcon />
              <Stack direction={"column"} >
                <Typography variant="caption">Vencimiento:</Typography>
                <Typography variant="body1">30/01/2022</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack my={1} direction='row' alignItems={'center'} justifyContent={'space-between'} >
            <Stack direction={"column"} alignItems={"flex-start"} >
              <Typography variant="caption">Proveedor</Typography>
              <Typography  color='"text.disabled"' variant='body2'>800140949- CAFESALUD</Typography>
            </Stack>
            <Button variant="outlined" color="primary" size="small">
              <ExpandMoreOutlinedIcon />
            </Button>
          </Stack>

      </CardContent>
    </Card>
  )
}


