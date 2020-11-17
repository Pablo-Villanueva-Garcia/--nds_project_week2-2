
import Myidclone from './Clonar';
import Delete from './Delete';

function Task(props) {
  const { done, title, imageUrl, id ,unfilteredTasks, setunfilteredTasks } = props;
  return (
    <div className="xs100 mb20 flex just_SB p10">
      <label>
        <input id={id} className="" type="checkbox" checked={done} />


      </label>
      <span id={id} className={done ? "throughline size20" : "size20"}>{title}</span>
      {imageUrl && <img className="task_img" src={imageUrl} />}
     <Myidclone id={id} title={title} done={done} unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks} />
     <Delete id={id} title={title} done={done} unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks} />
      

    </div>
  );
}



/*A la variable tasklist le pasamos el array de task y en esta variable retornamos un div en el que
ejecutamos dentro del div la funcion task dando los valores correspondientes al done, al title 
y a su url */


const TaskList = ({ tasks ,unfilteredTasks , setunfilteredTasks }) => {

  
    return (
      <div className="xs20">
        {tasks.map(task => <Task unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks}  id={task.id} done={task.done} title={task.title} imageUrl={task.imageUrl} />)}
        
      </div>);
  };
  
  /*Si las tareas que tengo en tasks son iguales a los que quiero recoger se podria utilizar  
  {tasks.map(task => <Task  {...task} />)} */

  export default TaskList;