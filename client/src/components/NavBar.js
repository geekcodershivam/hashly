import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import Logout from './Logout'
import { connect } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import CreateUrl from './CreateUrl'
import Error from  './Error'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 290,
    overflow:'hidden'
  },
  fullList: {
    width: 'auto',
  },
}));

function NavBar(props) {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  
  
  const guestLinks = (
    <div>
      <Link to='/signin' className="Base-root Btn-root Btn-text Btn-colorInherit" color="inherit">Signin</Link>
      <Link to='/signup' className="Base-root Btn-root Btn-text Btn-colorInherit" color="inherit">Signup</Link>
    </div>
  );
  const authLinks = (
    <div>
      <strong>
            {props.auth && props.auth.user ? `Welcome` : ''}
          </strong>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
          <Logout onClick={handleClose}/>
       
      </Menu>
    </div>
  );

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      
    >
      <div className="action-sheet--header"> 
      <Typography variant="h4" className={classes.title}>Create Link</Typography>
      </div>
     {props.auth && props.auth.isAuthenticated ? <CreateUrl /> : <Error ren="error" msg="Please Sign In"/>}
    </div>
  );
  

  return (
    <div className={classes.root}>
      <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <strong>Hashly</strong>
          </Typography>
          {props.auth && props.auth.isAuthenticated ? authLinks : guestLinks}

        </Toolbar>
      </AppBar>
      <Drawer
            anchor='left'
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </Drawer>
          </React.Fragment>
    </div>
  );
}

const mapStateToProps=(state)=>{

  return{auth:state.auth}
}

export default connect(mapStateToProps,null)(NavBar)
