const measurementsListReducer = (state = [], action) => { 
    switch (action.type) {
      case 'SET_MEASUREMENTS':       
      return action.payload;
      default:
        return state;
    }
  };
  
  export default measurementsListReducer;