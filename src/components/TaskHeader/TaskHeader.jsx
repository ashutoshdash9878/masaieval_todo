import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h3 className={styles.head}>TODO LIST</h3>
      
      <b data-cy="header-remaining-task" className={styles.uncomp}>you have {unCompletedTask}</b>
  
      <b data-cy="header-total-task" className={styles.remain}> of {totalTask} task remaining</b>
      
      {/* <p className={styles.headd}>you have 3 of 5 task remaining </p> */}


    
    
    
    </div>
  );
};

export default TaskHeader;
