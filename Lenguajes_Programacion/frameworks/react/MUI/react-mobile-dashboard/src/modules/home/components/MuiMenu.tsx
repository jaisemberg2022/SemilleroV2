import React from 'react'
import { FormControlLabel, IconButton, Menu, MenuItem, Typography, Button } from '@mui/material';
import { useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';


export const MuiMenu = () => {
    const [anchorEl, setanchorEl] = useState<null | HTMLElement>(null);
    const Open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setanchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setanchorEl(null)
    }
    return (
        <>

            <Button aria-label='send' color="primary" size="small" id='resources-menu' onClick={handleClick} aria-controls={Open ? 'resources-menu' : undefined} aria-haspopup='true' aria-expanded={Open ? 'true' : undefined}>
                Filtrar
                <ExpandMoreOutlinedIcon />
            </Button>
            <Menu id='resources-menu' anchorEl={anchorEl} open={Open} MenuListProps={{ 'aria-labelledby': 'resources-button' }} onClose={handleClose} PaperProps={{
                style: {
                    maxHeight: 90 * 4.5,
                    width: 330,
                },
            }}>
                <Typography paddingX={1} variant='subtitle2' color={'primary'}>Actividad</Typography>
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Redistribución de correspondencia" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Redistribución de correspondencia" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Redistribución de correspondencia" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Redistribución de correspondencia" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Redistribución de correspondencia" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Redistribución de correspondencia" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
                <Divider />
                <FormControlLabel sx={{ paddingInline: 1 }} onClick={handleClose} control={<Checkbox />} label="Confirmar recibido" />
            </Menu>
        </>
    )
}
