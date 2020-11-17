import React, { useState } from 'react';

const Inputtext = (props) => {

/*hook usestate que recoge el texto del input */
    const [text,setText]=React.useState();
    


/*hook usestate que recoge el texto que vemos por pantalla recogiendo el estado de text para mostrarnoslo */
const allfuncion = () =>{
  pickupwithclick();
  plusid ();
  
}

const [newid ,setnewid]=useState(props.id);
const plusid = () => {
  setnewid(newid+1)
  console.log(setnewid)
};

/* En pickupwithclick guardamos el valor de text en setViewtext y limpiamos el setText otorgando un valor vacio
en la nueva linea de codigo mas optimo recogiendo los valores de props del array tasks hacemos la copia añadiendo el array nuevo con 
el valor de text dado en el input */

    const pickupwithclick = () => {
      const newid=props.unfilteredTasks.length+1;
        props.setunfilteredTasks ([...(props.unfilteredTasks) , { done:false , title:text ,id:newid}]);
        
        setText('');
    
    }
    
    return (
      <div>
          <h1>Inserte nuevas tareas</h1>
          {/*Cuando tecleamos contenido en el input cambiamos el estado en setText */}
            <input type="text" value={text} onChange={i=>setText(i.target.value)}/>

            <button onClick={ (allfuncion) }>Añadir Tarea</button>
            { /* <button onClick={ ()(handleclick)=>setViewtext(text)>Añadir Tarea</button> Esta forma haria lo mismo que la funcion pickupwithclick*/}
            
               
      </div>
      
    )
  }

  export default Inputtext;