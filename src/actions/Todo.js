import { ADD_TODO } from "../constants/ActionType";

export const addTodo = (input) => async (dispatch) => {
    dispatch({ type: ADDING_START });
    try {
    //   here comes a API if you want this to save in database
        dispatch({ type: ADD_TODO, data: input });
    } catch (error) {
      console.log(error);
      dispatch({ type: ADD_TODO_FAIL });
    }
  };