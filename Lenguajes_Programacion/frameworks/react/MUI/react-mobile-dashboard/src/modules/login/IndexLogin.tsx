import Box from '@mui/material/Box';
import { Stack, Container, Grid, Typography, TextField, Button } from '@mui/material';
import { SdgLogo } from "../../assets/images/SdgLogo";
import { HeaderForm } from './components/HeaderForm';
import { BodyForm } from './components/BodyForm';

export default function index() {
  return (
    // sx={{ backgroundColor: 'red' }}
    // height="100%"
      <Grid container pt={8} direction="row" justifyContent="center" alignItems={'center'} >
          <Grid item xs={9} >
            <HeaderForm />
            <BodyForm/>
          </Grid>
      </Grid>
     
  )
}
