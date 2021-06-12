import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Icon from './404.png'
export class Redirect extends Component {
  state = {
    redirectUrl: null,
  };

  componentDidMount = () => {
    const urlCode = this.props.match.params;
    
    let config = {
      headers: { "Access-Control-Allow-Origin": "*",},
    };
    axios
      .get(`/${urlCode.code}`,config)
      .then((res) => {
        this.setState({ redirectUrl: res.data.url });
        window.location.href = this.state.redirectUrl;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return <React.Fragment><img src={Icon} alt="LandingImage"/></React.Fragment>;
  }
}



const mapStateToProps = (state, ownProps) => {
  return { auth: state };
};
export default connect(mapStateToProps, null)(Redirect);
