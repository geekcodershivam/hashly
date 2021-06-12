import React, { useEffect,useState } from 'react';
import history from '../history';
import { connect } from 'react-redux';
import axios from 'axios';
import FolderList from './FolderList'
import SideView from './SideView'
import './Home.css';
function Home(props) {
  const [result, setResult] = useState([]);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (!props.auth.user) {
      history.push('/');
    }

    let config = {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    };
    axios.get('/urls', config).then((res) => {
      setResult(res.data.result)
    }).catch((err)=>{
      setResult([])
    })

  }, [props]);

  const handleSideView=(idx)=>{
     setIdx(idx);
  }
   const rendenitems=()=>{
     if(result.length===0){
       return (
        <div className="item-detail--MAIN open">
        <div className="bitlink-detail">
        <span className="item-detail--back-nav">Hashlink Details</span>
        <div>
          <time className="item-detail--created-date">
            CREATED
          </time>
          <span>
            <span className="info-wrapper--divider">|</span>
            <span className="item-detail--created-link"></span>
          </span>
          <div className="item-detail--title">No Result Found</div>
        </div>
      </div>
      </div>
       );
     }
     return <SideView renderIdx={result[idx]}/>
   }
  return (
    <div className="container">
       <div className="item sidebar">
         <FolderList handleSideView={handleSideView} result={result}/>
       </div>
       <div className="item content-1"> 
       {rendenitems()}
       </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps,null)(Home);
