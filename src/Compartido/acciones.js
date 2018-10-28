const addTaskAtn = task => {
   return {
       type: 'ADD_TASK',
       task: Object.assign ({}, task),
   }; 
};

const getTareas = () => {
    return {
        type: 'GET_TODOS',
    };
};

const deleteTaskAtn = id => {
    return {
        type: 'DELETE_TASK',
        id: id,
    };
};

const toggleTaskAtn = id => {
    return {
        type: 'TOGGLE_STATE',
        id: id,
    };
};

const logoutState = () => {
    return {
        type: 'LOGOUT_STATE',
    };
};

const loginState = (user) => {
    return {
        type: 'LOGIN',
        user,
    };
};

export { loginState, addTaskAtn, deleteTaskAtn, toggleTaskAtn, getTareas, logoutState };