import React from 'react'
import './switchbutton.css'

const SwitchButton = ({setState}) => {
    return <>
        <div className="btn">
                {["All Team" ,"4th Year","3rd Year","2nd Year"].map((sclass) => {
                    return  <button className="button" key={sclass} value={sclass} onClick={(e)=> {
                    const selectedstate = e.target.value;
                    setState(selectedstate);
                    }}>{sclass}</button>
                }) 
                }
        </div>
    </>
}

export default SwitchButton