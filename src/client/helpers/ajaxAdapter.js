'use strict'

const ajaxAdapter = {

  getTasks(){
    return fetch('/tasks')
      .then( r => r.json())
  },

  createTask(newTask){
    return fetch('/tasks', {
      method:'POST',
      headers:{
        "Content-type":"application/json; charset=UTF-8"
      },
      body: JSON.stringify(newTask)
    })
    .then( r => r.json())
  },

  updateTask(task){
    return fetch(`/tasks/${task.task_id}`, {
      method:'PUT',
      headers:{
        "Content-type":"application/json; charset=UTF-8"
      },
      body: JSON.stringify(task)
    })
    .then( r => r.json())
  },

  deleteTask(id){
    return fetch(`/tasks/${task.task_id}`, {
      method:'DELETE',
      headers:{
        "Content-type":"application/json; charset=UTF-8"
      },
      body: JSON.stringify(task)
    })
    .then( r => r.json())
  }


}


export default ajaxAdapter
