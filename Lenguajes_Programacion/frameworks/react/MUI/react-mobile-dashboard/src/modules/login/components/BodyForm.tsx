import { Box, Button, Stack, TextField } from '@mui/material';

export const BodyForm = () => {
  return (
    <Stack py={8} spacing={4} direction='column'>
         <TextField fullWidth id="standard-basic" label="Usuario" variant="standard" />
        <TextField fullWidth id="standard-basic" label="Contraseña" variant="standard" />
        <Box mt={3} >
            <Button variant="contained" color="primary" size="large">Ingresar</Button>
        </Box>
    </Stack>
  )
}
