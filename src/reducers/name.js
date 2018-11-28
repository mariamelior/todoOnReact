
const initialState = {
    tasks: [
        {
            id: 1,
            name: "To do Test",
            status: 0
        },
        {
            id: 2,
            name: "Washing",
            status: 0
        },
        {
            id: 3,
            name: "Study",
            status: 1
        }, {
            id: 4,
            name: "Workbook english",
            status: 2
        },
    ]
}

export default (state = initialState, action) => {

    function changeName(id, name) {
        let tasks = Array.from(state.tasks);
        let task=  tasks.find(t => t.id == id);
        task.name = name;
        return tasks;
    } ;

    function changeStatus(id) {
        let tasks = Array.from(state.tasks);
        let task = tasks.find(t => t.id == id);
        console.log('task', task)
        task.status ++;
        return tasks;
    } ;

    function addTask(name, id) {       
        let tasks = Array.from(state.tasks);
        tasks.push({name, id: id+1, status: 0});
        return tasks;
    }

  switch (action.type) {
    case 'CHANGE_NAME': 
        return Object.assign({}, state, {tasks: changeName(action.payload.id, action.payload.name) });
    case 'CHANGE_STATUS': 
        return Object.assign({}, state, {tasks: changeStatus(action.payload) });
    case 'ADD_TASK':
        return Object.assign({}, state, {tasks: addTask(action.payload.name, action.payload.id)}) 

    default:
      return state;
  }

}
