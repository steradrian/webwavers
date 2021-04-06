import React, { useState } from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Dropdown from './Dropdown/Dropdown';
import CloseIcon from '@material-ui/icons/Close';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Navbar(props) {

  const [click, setClick] = useState(false);

    return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar >
          <Toolbar className="navbar">
              <Typography variant="h6"><strong>C</strong>O<strong>SM</strong>O<strong>S</strong></Typography>
              
              {click === false ? <MenuIcon onClick={() => setClick(true)} className="dropdown__menu"/> : <CloseIcon onClick={() => setClick(false)} />}
              
              <Dropdown className={click === true ? 'dropdown__active' : 'dropdown__notActive'} />
              <div className="navbar__menu">
                <Link >
                  Home
                </Link>

                <Link >
                  Projects
                </Link>

                <Link >
                  Services
                </Link>
              </div>
          </Toolbar> 
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
    )
}

export default Navbar
