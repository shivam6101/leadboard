import React, { useEffect, useState } from "react";
import axios from "axios";

const Delete=(props)=>{

    const handleclick=(id)=>{
        const requestoption={
            method:'DELETE'
        };
        fetch(`https://backendsem.herokuapp.com/form/taskdelete/${props.id}`,requestoption).then(alert("deleted"))
        window.location.reload();
    }
    

    return(
        <button className="btn btn-sm btn-outline-danger" onClick={handleclick}>
            Del
        </button>
    )
}

export default Delete