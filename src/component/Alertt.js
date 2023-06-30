import React from "react";

const Alertt=(props)=>{
      
    return(
        props.alert &&
            <div className="alert alert-success" role="alert">
            <strong>{props.alert.msg}</strong>{props.alert.type}
      </div>
    )
  }


export default Alertt;