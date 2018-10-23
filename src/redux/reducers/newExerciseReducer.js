const newExerciseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_EXERCISE':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default newExerciseReducer;
  