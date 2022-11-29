import { Stack, Chip, Typography, IconButton, Box } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { MuiMenu } from './MuiMenu';
import { styled } from '@mui/material/styles';
{/* <ExpandMoreOutlinedIcon color='inherit' fontSize='medium'/> */}
export const MuiChipsButtons = () => {
  return (
    <Box display='flex'  p={1.5} >
        <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} width={'100%'} >
            
            <Stack direction={'row'} spacing={1}>
              <Chip variant='outlined' label="Todas" color="primary" />
              <Chip variant='outlined' label="Vencidas" color="primary" />
              <Chip variant='outlined' label="Actuales" color="primary" />
            </Stack>

            <Stack direction={'row'} alignItems={'center'} gap={1}>
                <MuiMenu  />
            </Stack>
            
        </Stack>
    </Box>
  )
}
