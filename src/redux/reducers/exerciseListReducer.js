const exerciseListReducer = (state = [], action) => {  
  switch (action.type) {
      case 'SET_EXERCISES':        
      return action.payload;//COME BACK TO THIS
      case 'SET_DAYS':
      return action.payload;
      default:
        return state;
    }
  };
  
  export default exerciseListReducer;