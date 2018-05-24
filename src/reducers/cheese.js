import {
  FETCH_CHEESE_REQUEST,
  FETCH_CHEESE_SUCCESS,
  FETCH_CHEESE_ERROR
} from '../actions/cheese';

const initialState = {
  cheeses: [],
      loading: false,
      error: null
};

export function cheeseReducer(state=initialState, action) {
  // Handle these sync actions
  if (action.type === FETCH_CHEESE_REQUEST) {
      console.log("fetch Cheeses requested");
          return Object.assign({}, state, {
                ...state,
                loading:action.loading
            })
          }
      
 
  else if (action.type === FETCH_CHEESE_SUCCESS) {
      return Object.assign({}, state, {
          ...state,
          cheeses: action.cheeses,
          loading:action.loading
      })
    }
 
  else if (action.type === FETCH_CHEESE_ERROR) {
      return Object.assign({}, state, {
          ...state,
          error:action.error,
          loading:action.loading
         
      })
    }
  
  return state;
}
