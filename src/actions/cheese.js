// In client/src/actions/cheese.js 
// add an async action called fetchCheeses which uses the Fetch
//  API to make a GET request to your /api/cheeses endpoint.

// The async action should dispatch its sync counterparts,
//  fetchCheesesRequest, fetchCheesesSuccess
//   and fetchCheesesError.

  // This function will make an AJAX request to the Star Wars API
// It will randomly fail for 25% of requests, and has a 0.5s delay artifically
// inserted so you can check your loading state
import {API_BASE_URL} from '../config';

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESE_REQUEST,
    loading:true
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheesesSuccess = cheeses=> ({
    type: FETCH_CHEESE_SUCCESS,
    loading:false,
    error:null,
    cheeses
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheesesError = error => ({
    type: FETCH_CHEESE_ERROR, 
    loading: false,
    error
});



//create a double function with dispatch passed in 
export const fetchCheeses = () => (dispatch) => {
    
    //dispatches the function??self-dispatch
    dispatch(fetchCheesesRequest());
    
    //makes a fetch call to the api
    return fetch(`${API_BASE_URL}/api/cheeses`)
        .then(res => {
            
            if (!res.ok) {
                return dispatch(fetchCheesesError(res.statusText));
            }
            //thinking this is where its converted to response??if server sends json why change here?
            return res.json()
        })
        
        //with a succes it then dispatches the success call with cheeses passes in
        .then(cheeses => {
            console.log("Cheeses:",{cheeses});
            dispatch(fetchCheesesSuccess(cheeses))});
}

//  export const fetchCheeses = () => (dispatch) =>  {
//     return  fetch(`http://localhost:8080/api/cheeses`)
//     .then(data=>console.log(data));
//  }
// dispatch(FETCHCheesesRequest());
//     dispatch(fetchCheeseRequest());
//     fetch(`http://localhost:8080/api/cheeses`)
//     //FETCH(name)
//    .then(data => dispatch(FETCHCheesesSuccess(data)))
//    .catch(error => console.log(error))
//   .then(results=>console.log(results));
//.then(results => console.log(results));
// .then(data => console.log(data.body.locked))
//.then(data => data.results.map(character => character.name))
//  .then(dispatch(this.FETCHCheesesRequest()))
//  .then(data => dispatch(this.FETCHCharactersSuccess(data)))
//  .then(data => dispatch(this.FETCHCheesesError))
//  .catch(error => console.log(error))