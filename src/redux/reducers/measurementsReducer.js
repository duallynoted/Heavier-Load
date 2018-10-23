const measurementsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_MEASUREMENT':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default measurementsReducer;
  