const updateMemberInfoReducer = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_MEMBER_INFO':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default updateMemberInfoReducer;
  