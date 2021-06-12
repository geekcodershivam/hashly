import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Error from './Error';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '28ch',
      marginTop: '20px',
    },
  },
}));

function CreateUrl(props) {
  const classes = useStyles();
  const [url, seturl] = useState('');
  const [short, setshort] = useState('');
  const [message, setmessage] = useState('');
  const m = message === '' ? 100 : 74;
  const onCREATEClick = (e) => {
    e.preventDefault();
    let obj = {
      original: url,
      short: short,
    };

    let config = {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    };
    axios
      .post('/createurl', obj, config)
      .then((res) => {
        setmessage('success');
      })
      .catch((err) => {
        console.log(err.response.data['error']);
        setmessage(err.response.data['error']);

        


      });
  };

  const renderErrorSuccess = () => {
    if (message === 'success') {
      return <Error ren="success" msg="Successfully Created" />;
    } else if (message !== '') {
      return <Error ren="error" msg={message} />;
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {renderErrorSuccess()}
      <TextField
        id="outlined-secondary"
        label="Paste Long URL"
        variant="outlined"
        color="secondary"
        value={url}
        onChange={(e) => {
          seturl(e.target.value);
        }}
      />
      <TextField
        id="outlined-secondary"
        label="Short Name"
        variant="outlined"
        color="secondary"
        value={short}
        onChange={(e) => {
          setshort(e.target.value);
        }}
      />

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
        style={{ marginTop: `${m}%` }}
        onClick={(e) => onCREATEClick(e)}
      >
        CREATE
      </Button>
    </form>
  );
}

export default CreateUrl;
