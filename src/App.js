import React, { useCallback, useState } from 'react';
import './App.css';
import './estructura.css';
import TaskCounter from './Taskcounter';
import TaskList from './TaskList';
import data from './Tasks.json';
import Alertlimit from './Alertlimit';
import NextandPreviuspage from './Next&Previuspage';
import Alertlimittotal from './Alertlimittotal';
import Inputtext from './Inputtext';
import Seacrch from './search';

/*La variable getTasks recoge task , page y pagesize definidas en sus diferentes variables en la funcion App
sobre tasks ,realizamos un slice que nos genera una copia del original sin modificarlo con un punto incial y punto final
y en el le pedimos la pagina * tamaño de la pagina que seria la posicion inicial y pagina +1 * el tamaño de pagina como posicion final */
//const [tasks,setTasks] =React.useState();





function App() {

{/*const [unfilteredTasks,setunfilteredTasks] = React.useState([]); */}
   
  const [unfilteredTasks,setunfilteredTasks] = React.useState(data.tasks);
  const amountOfTasks = unfilteredTasks.length;
  const [page, setPage] = React.useState(0);
  const pageSize = 10; 
  const pages = Math.ceil(amountOfTasks / 10);
  const [search,setsearch]=useState('');
  const filtertasks=unfilteredTasks.filter(unfilteredTasks=>unfilteredTasks.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  const tasks = filtertasks.slice(page * pageSize, (page + 1) * pageSize);
  console.log(filtertasks);
  
   return (
  <div className="flex just_center mt20 mb20">
      <div className="centrado relativo flex_dir_col ali_center">
      
      <div class="absoluto alertotal">
      

      </div>
      <div class="absoluto alert">
      <Alertlimit tasks={tasks} page={page} />
      

      </div>
      <Seacrch setsearch={setsearch} search={search}/>
      < Inputtext  unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks}/>
      
      <h1>Lista de tareas</h1>

      <TaskList unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks} tasks={tasks} />
      
      <div className="xs100 flex just_SB mt20">
        
        
        
        <div className="m20 l20 just_center flex">
          <a href="http://localhost:3000/">Ver mas</a>
        </div>
        <div className="flex just_SB xs100 m30 l35 ali_center">
          < NextandPreviuspage  page={page} pages={pages} setPage={setPage} />
        </div>
        
      </div>
      <div className="xs100 flex mt20">
      <TaskCounter  tasks={tasks} unfilteredTasks={unfilteredTasks} />
      
      </div>
      
      </div>
  </div>
  );
}
export default App;
