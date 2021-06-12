import React from 'react';
import RenderList from './RenderList'
export default function SideView(props) {

  // const {createAt,originalUrl,slug,visits,owned} = 

  const err = <div>Empty</div>;
  const renderfun = () => {
    if (props.renderIdx === undefined) {
      return err;
    } else {
      return <RenderList obj={props.renderIdx}/>
    }
  };

  return <div className="item-detail--MAIN open">{renderfun()}</div>;
}
