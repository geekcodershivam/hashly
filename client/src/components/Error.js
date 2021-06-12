import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function Error(props) {
  const classes = useStyles();
  const title=()=> {
    return (props.ren==="error" ? "Error" : "Success")
  }
  
  return (
    <div className={classes.root}>
    <Alert severity={props.ren}>
        <AlertTitle>{title()}</AlertTitle> <strong>{props.msg}</strong>
      </Alert>
      </div>
  );
}
