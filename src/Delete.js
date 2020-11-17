import React, { useState } from 'react';
import { faClone, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* En este caso para borrar tendremos que filtrar el array y quedarnos con los que sean distintos a la linea en la que estamos para que la omita al
volver a pintarla*/


const Delete = (props) =>{

      const deltask= () =>{
        
        props.setunfilteredTasks (props.unfilteredTasks.filter(x=>x.id!=props.id));
        
      }
      
  
  return(

        <button onClick={deltask}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>

  )

  };

  export default Delete;