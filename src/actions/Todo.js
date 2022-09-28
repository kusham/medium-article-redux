import { ADDING_START, ADD_TODO, ADD_TODO_FAIL, COMPLETE_TODO } from "../constants/ActionType";

export const addTodo = (input) => (dispatch) => {
    dispatch({ type: ADDING_START });
    try {
    //   here comes a API if you want this to save in database
        dispatch({ type: ADD_TODO, data: input });
    } catch (error) {
      console.log(error);
      dispatch({ type: ADD_TODO_FAIL });
    }
  };

  export const markComplete = (id) => (dispatch) => {
    try {
        dispatch({ type: COMPLETE_TODO, data: id });
    } catch (error) {
      console.log(error);
    }
  };