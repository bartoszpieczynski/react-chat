const INITIAL_STATE = {
   currentUser: {},
};

const applySetCurrentUser = (state, action) => ({
   ...state,
   currentUser: action.currentUser
});

function currentUserReducer(state = INITIAL_STATE, action) {
   switch(action.type) {
      case 'CURRENT_USER_SET' : {
         return applySetCurrentUser(state, action);
      }
      default: return state;
   }
}

export default currentUserReducer;