import React from 'react'
import Typography from '@material-ui/core/Typography';
import icon from './imgg.jpg'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import history from '../history';
const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  
  
}));
export default function LandigPage() {
  const classes = useStyles();
  return (
    <div className="containers">
    <div className="item-1">
    <Container style={{marginTop:'24%'}}>
            <Typography component="h2" variant="h2" style={{color:'#6514dd' ,fontWeight:'900'}} color="textPrimary" gutterBottom>
            Short links,  big results
            </Typography>
            <Typography variant="h5" style={{fontWeight:'500'}} color="textSecondary" paragraph>
            A URL shortener built with powerful tools to help you grow and protect your brand.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained" color="secondary" onClick={(e)=> history.push('/signin')}>
                  Get Started for Free
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
    </div>
    <div className="item-2"><img src={icon} alt="LandingImage"/></div>
    </div>
  )
}
