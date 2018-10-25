const exerciseListReducer = (state = [], action) => {  
  switch (action.type) {
      case 'SET_EXERCISES':        
      return action.payload;//COME BACK TO THIS
      default:
        return state;
    }
  };
  
  export default exerciseListReducer;