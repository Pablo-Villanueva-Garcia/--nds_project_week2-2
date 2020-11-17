

  const Alertlimittotal = ({unfilteredTasks}) =>{
    const amountOfNotDone = unfilteredTasks.filter(unfilteredTasks=> !unfilteredTasks.done).length;
    const tasklimitthatanotfinish = 20;
    if (amountOfNotDone>=tasklimitthatanotfinish){
      return <div className="Alertlimit">Se te acumula el trabajo!</div>
    }
    return null;
  }
  
  export default Alertlimittotal;