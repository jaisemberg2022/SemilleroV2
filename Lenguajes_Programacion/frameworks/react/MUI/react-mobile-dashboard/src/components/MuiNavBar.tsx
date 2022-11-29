
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function MuiNavBar() {
  return (
  <>
    <AppBar position='sticky'elevation={0}>
      <Toolbar>
          <TextField fullWidth hiddenLabel placeholder='ID, radicado o asunto' size='small'focused InputProps={{startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),}}variant="standard"/>
          <IconButton  aria-label='send'  size="large"><MoreVertIcon color='action'/> </IconButton>
      </Toolbar>
    </AppBar>
  </> 
  );
}