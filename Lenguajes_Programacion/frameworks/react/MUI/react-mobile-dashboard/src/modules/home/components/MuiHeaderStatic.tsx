import { AppBar, Box, IconButton, InputAdornment, Paper, Tab, Tabs, TextField, Toolbar } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import React from "react";


export const MuiHeaderStatic = () => {
    const [value, setValue] = React.useState('one');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
    return (
        <Box position={"fixed"} width="100%" zIndex={1}>
            <Paper elevation={5}>
                <AppBar position='static' elevation={0}>
                    <Toolbar>
                        <TextField fullWidth hiddenLabel placeholder='ID, radicado o asunto' size='small' focused InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>), }} variant="standard" />
                        <IconButton aria-label='send' size="large"><MoreVertIcon color='action' /> </IconButton>
                    </Toolbar>
                </AppBar>
                <Box position={'static'}>
                    <Tabs variant="fullWidth" value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="primary tabs example">
                        <Tab iconPosition='start' icon={<PersonOutlinedIcon />} label="Asignadas a mí" />
                        <Tab iconPosition='start' icon={<WorkOutlineOutlinedIcon />} label="Para mi cargo" />
                    </Tabs>
                </Box>
            </Paper>
        </Box>
    )
}
