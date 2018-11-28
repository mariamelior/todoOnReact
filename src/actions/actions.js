
  export function changeName(id, name) {
    return {
        type: 'CHANGE_NAME',
        payload: {id, name}
      }
  }

  export function changeStatus(id) {
    return {
        type: 'CHANGE_STATUS',
        payload: id
      }
  }

  export function addTask(name, id) {
      console.log(name,id)
      return {
          type: 'ADD_TASK',
          payload: {name, id}
      }
  }