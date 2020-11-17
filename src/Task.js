import { faClone, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


// variable task es igual a un array de carateres que seria props , estos caracteres serian el done (si es checked)
// el title y urlimagen ,si done es falso devolvemos un div con inputs con un condicional que aplica un estilo segun dnoe sea true o false



  function Task(props) {
    const { done, title, imageUrl, id } = props;
    return (
      <div className="xs100 mb20 flex just_SB p10">
        <label>
          <input id={id} className="" type="checkbox" checked={done} />


        </label>
        <span id={id} className={done ? "throughline size20" : "size20"}>{title}</span>
        {imageUrl && <img className="task_img" src={imageUrl} />}
        <button onClick={id}>
          <FontAwesomeIcon icon={faClone} />
        </button>
        <button >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>

      </div>
    );
  }


  export default Task;