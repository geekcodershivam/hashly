import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import MenuItem from '@material-ui/core/MenuItem';
import history from '../history'
function Logout(props) {
       
       return (<MenuItem color="inherit" onClick={(e)=>{
         props.logout() 
         history.push('/');
        }}>Logout</MenuItem>);
}

export default connect(null, {logout})(Logout);
