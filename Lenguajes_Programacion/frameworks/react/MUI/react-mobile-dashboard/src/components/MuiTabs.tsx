import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Paper } from '@mui/material';
import { useState } from 'react';

export const MuiTabs = () => {
  const [value, setValue] = React.useState('one');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <Box position={'fixed'} width={'100%'} zIndex={1} >
        <Paper elevation={5} >
              <Tabs  value={value}  variant="fullWidth"onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="primary tabs example">
                  <Tab iconPosition='start' icon={<PersonOutlineOutlinedIcon />} label="Asignadas a mí" />
                  <Tab iconPosition='start' icon={<WorkOutlineOutlinedIcon />} label="Para mi cargo" />
              </Tabs>
        </Paper>
    </Box>
      
  )
}
