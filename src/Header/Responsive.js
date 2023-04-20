import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const pages = ["Home" , "About" , "Contact"];
function Responsive() {
    const [openDrawer,setOpenDrawer]=useState(false);
  return (
    <div>
        <Drawer open={openDrawer} onClose={() =>setOpenDrawer(false)}>
             <List>
                {pages.map((pages,index) => (
                <ListItemButton key={index}>
                    <ListItemIcon>
                        <ListItemText>{pages}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                ))}
             </List>
        </Drawer>
        <IconButton sx={{color:"white"}} onClick={() =>setOpenDrawer(!openDrawer)}>
             <MenuIcon/>
        </IconButton>
    </div>
  )
}

export default Responsive;