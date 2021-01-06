import React from 'react';
import classes from './NavBar.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { CssBaseline, Slide, AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';

const NavBar = (props) => {
    const { window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <>
        <CssBaseline />
            <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
                <Toolbar>
                  <NavLink to="/home" activeClassName={classes.active} className={classes.navLink}>Home</NavLink>
                  <NavLink to="/about" activeClassName={classes.active} className={classes.navLink}>About</NavLink>
                </Toolbar>
            </AppBar>
            </Slide>
        <Toolbar />
      </>
    )
}

NavBar.propTypes = {
    window: PropTypes.func,
};

export default NavBar;