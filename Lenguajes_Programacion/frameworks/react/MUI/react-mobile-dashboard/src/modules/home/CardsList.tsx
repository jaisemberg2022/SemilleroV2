import { Stack,CardHeader, Box  } from '@mui/material';
import Divider from '@mui/material/Divider';
import { MuiCard } from './components/MuiCard'
import { MuiChipsButtons } from './components/MuiChipsButtons'

export const CardsList = () => {
  return (
    <>
      <Box pt={17} maxHeight={'100%'}>
      <MuiChipsButtons />
        <MuiCard/>
        <MuiCard/>
        <MuiCard/>
        <MuiCard/>
        <MuiCard/>
        <MuiCard/>
        <MuiCard/>
        <MuiCard/>
        <MuiCard/>
        <MuiCard/>
        <MuiCard/>
      </Box>
    </>
  )
}
