import { ADDING_START, ADD_TODO, ADD_TODO_FAIL, COMPLETE_TODO } from "../constants/ActionType";

const todoReducer = (
  state = { todoData: [], loading: false, error: false },
  action
) => {
  switch (action.type) {
    case ADDING_START:
      return {...state, loading: true};
    case ADD_TODO:
      return {...state, todoData: [...state.todoData, action.data], loading: false}
    case ADD_TODO_FAIL:
      return {...state, error: true}
    default:
      return state;
  }
};

export default todoReducer;