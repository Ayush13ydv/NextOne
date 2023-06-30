import React from "react";

const ALert=(props)=>{
      
    return(
        props.alert &&
        <div class="alert alert-success" role="alert">
            <strong>{props.alert.msg}</strong>{props.alert.type}
      </div>
    )
  }


export default ALert;