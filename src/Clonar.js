import React, { useState } from 'react';
import { faClone, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* Recogemos el array y pintamos denuevo en el array el correspondiente a la linea que clickamos , es necesario pasarle los valores de las props 
como estamos en la linea de esa id no tenemos que filtrar solo copiar sus datos dentro del array*/

const Myidclone = (props) =>{

      const myline= () =>{
        const newid=props.unfilteredTasks.length+1;

        console.log(newid);
        props.setunfilteredTasks ([...(props.unfilteredTasks) , {id:newid, title:props.title, done:props.done}]);
      }
      
  
  return(

        <button onClick={myline}>
          <FontAwesomeIcon icon={faClone} />
        </button>

  )

  };

  export default Myidclone;