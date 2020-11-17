/*variable TaskCounter le pasamos el array de task declaramos una variable amountOfNotDone en la que flitramos 
que si done es lo contrario al valar de done en task lo contamosy con un return lo pintamos dentro de un div 
y en ese div tambien ponemos el total de tasks*/

const TaskCounter = ({ tasks }) => {
  
    const amountOfNotDone = tasks.filter(task => !task.done).length;
    return (
      <div class="xs100 m30 l30">
        {amountOfNotDone} tareas pendientes de {tasks.length}
      </div>);
  }


export default TaskCounter;