import React from 'react';

const Checked = (props) =>{
    const [done , setdone]=React.useState(0);
   
    
    

    console.log (done);
    return(
        <input className="" type="checkbox" onChange={i=>setdone(i.target.done)}/>
    )
}



export default Checked ; 