const setSelectedDayReducer = (state = 0, action) => {
    console.log('SETSELECTEDDAY',action.payload);
    switch (action.type) {
        case 'SET_SELECTED_DAY':
            return Number(action.payload);
        default:
            return state;
    }
};

export default setSelectedDayReducer;