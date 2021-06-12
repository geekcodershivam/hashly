import React from 'react'
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import Chart from './Chart'
export default function RenderList(props) {
  const {originalUrl,owned,slug,visits,visitsFB ,visitsIG,visitsYT}=props.obj;
  let dataArray=[visitsFB,visitsIG,visitsYT,visits];
  let today=props.obj.createAt.split('T');
  
  return (
    
    <div className="bitlink-detail">
    <span className="item-detail--back-nav">Hashlink Details</span>
    <div>
      <time className="item-detail--created-date" datetime={today[0]}>
      CREATED {today[0]}
      </time>
      <span>
        <span className="info-wrapper--divider">|</span>
        <span className="item-detail--created-link">{owned["name"]}</span>
      </span>
      <div className="item-detail--title">{originalUrl}</div>
      <div>
      <span className="item-detail--url" onClick={()=>{ window.open(`${originalUrl}`, 'sharer')}} >{slug}</span>
      </div>
    </div>

    <div class="info-wrapper--MAIN">
          <div className="item-detail--click-stats-wrapper">
            <div className="info-wrapper--user-clicks">
              <div className="info-wrapper--header">
                <span className="info-wrapper--clicks-text">{visits}</span>
                <span className="icon clicks-icon">
                <TrendingUpOutlinedIcon fontSize="large" color="secondary"/>
                </span>
              </div>
              <div className="item-detail--selected-day">total clicks</div>
            </div>
          </div>
    </div>
    <div class="info-wrapper--ALTERNATE">
      <div class="">
        <h4 class="info-wrapper-header"> Referrers </h4>
      </div>
      <div className="doughnut-graph--MAIN" >
        <Chart dataArray={dataArray}/>
      </div>
    </div>
  </div>
  )
}
