import React from 'react'
import { useState } from 'react';
import {AppBar,Toolbar,Typography,Tabs, Tab,useMediaQuery,useTheme} from '@mui/material';
import Menu from './Responsive';
export default function Header() {
  const [value,setValue] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <div>
        <AppBar>
            <Toolbar>
              {isMatch ? (
                <>
            <Menu/>
            <Typography sx={{marginLeft:"auto"}}>QUOTE GENERATOR</Typography>
            </>
              ) : (
                
                <>
            <Typography>QUOTE GENERATOR</Typography>
            <Tabs sx={{marginLeft:"auto"}} 
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e,value) => setValue(value)}>
                <Tab label="Home" href='#home'/>
                <Tab label="About" href='#about'/>
                <Tab label="Contact" href='#contact'/>
            </Tabs>
            </>
            )}
            </Toolbar>
        </AppBar>
    </div>
  )
}