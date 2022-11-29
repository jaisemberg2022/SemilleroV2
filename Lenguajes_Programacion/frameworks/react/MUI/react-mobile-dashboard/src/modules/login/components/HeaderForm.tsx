import Box from '@mui/material/Box';
import { SdgLogo } from '../../../assets/images/SdgLogo';
import Typography from '@mui/material/Typography';

export const HeaderForm = () => {
  return (
    <Box>
        <SdgLogo width={70} height={70} />
        <Typography variant='subtitle1' color="primary.dark">Sistema de gestión documental</Typography>
    </Box>
  )
}
