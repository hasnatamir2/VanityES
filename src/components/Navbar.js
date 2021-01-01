import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Grid, 
    Hidden,
    SwipeableDrawer,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import './style.css';

import logo from '../public/graphics/vanity.png';
import logoSm from '../public/graphics/vanity-horizontal.png';

function Navbar() {

    const [state, setState] = React.useState(false)
    const handleDrawerOpen = () => {
        setState(true);
    };

    const handleDrawerClose = (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(false);
    };

    const list = (
        <div
          className={''}
          role="presentation"
          onClick={handleDrawerOpen}
          onKeyDown={handleDrawerClose}
        >
          <List>
            <ListItem>
                <img src={logoSm} alt='vanity-ES' style={{width: '150px'}}/>
            </ListItem>
            <hr/>
            <a href="/" className="nav-item-sm">
                <ListItem button key='home'>
                    <ListItemIcon>
                        <FontAwesomeIcon className="nav-icons" icon={['fas', 'home']}/>
                    </ListItemIcon>
                    <ListItemText primary='Home' className="nav-links"/>
                </ListItem>
            </a>
            <a href="#game" className="nav-item-sm">
                <ListItem button key='game'>
                    <ListItemIcon>
                        <FontAwesomeIcon className="nav-icons" icon={['fas', 'gamepad']}/>
                    </ListItemIcon>
                    <ListItemText primary='Game' className="nav-links"/>
                </ListItem>
            </a>
            <a href="#participate" className="nav-item-sm">
                <ListItem button key='participate'>
                    <ListItemIcon>
                        <FontAwesomeIcon className="nav-icons" icon={['fas', 'thumbs-up']}/>
                    </ListItemIcon>
                    <ListItemText primary='Participate' className="nav-links"/>
                </ListItem>
            </a>
            <a href="#whyUs" className="nav-item-sm">
                <ListItem button key='whyUs'>
                    <ListItemIcon>
                        <FontAwesomeIcon className="nav-icons" icon={['fas', 'hands']}/>
                    </ListItemIcon>
                    <ListItemText primary='Why Us' className="nav-links"/>
                </ListItem>
            </a>
            <a href="#contact" className="nav-item-sm">
                <ListItem button key='contact'>
                    <ListItemIcon>
                        <FontAwesomeIcon className="nav-icons" icon={['fas', 'hashtag']}/>
                    </ListItemIcon>
                    <ListItemText primary='Contact Us' className="nav-links"/>
                </ListItem>
            </a>
          </List>
        </div>
    );

    return (
        <nav className="navbar">

            <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-around"
            >

                <Hidden mdUp>
                    <Grid item md={1} lg={0}>
                        <Button onClick={handleDrawerOpen} className='toggle-button'>
                            <FontAwesomeIcon className="nav-icons" icon={['fas', 'bars']}/>
                        </Button>
                    </Grid>
                </Hidden>
                <Grid item md={11} lg={2}>
                    <img src={logo} alt="vanity" className="logo" />
                </Grid>
                <Grid item lg={10}>
                    <Hidden smDown>
                        
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <FontAwesomeIcon className="nav-icons" icon={['fas', 'home']}/>
                                <a href="/" className="nav-links" >home</a>
                            </li>
                            <li className="nav-item">
                                <FontAwesomeIcon className="nav-icons" icon={['fas', 'gamepad']}/>
                                <a href="#game" className="nav-links" >Game</a>
                            </li>
                            <li className="nav-item">
                                <FontAwesomeIcon className="nav-icons" icon={['fas', 'thumbs-up']}/>
                                <a href="#participate" className="nav-links" >participate</a>
                            </li>
                            <li className="nav-item">
                                <FontAwesomeIcon className="nav-icons" icon={['fas', 'hands']}/>
                                <a href="#whyUs" className="nav-links" >Why Us?</a>
                            </li>
                            <li className="nav-item">
                                <FontAwesomeIcon className="nav-icons" icon={['fas', 'hashtag']}/>
                                <a href="#contact" className="nav-links" >Contact Us</a>
                            </li>
                        </ul>
                    </Hidden>
                </Grid>
            </Grid>
            <React.Fragment >
                <SwipeableDrawer
                    open={state}
                    onClose={handleDrawerClose}
                >
                    {list}
                </SwipeableDrawer>
            </React.Fragment>
        </nav>
    )
}

export default Navbar
