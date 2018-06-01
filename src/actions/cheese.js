import {API_BASE_URL} from '../config';

export const FETCH_RECIPE_REQUEST = 'FETCH_RECIPE_REQUEST';
export const fetchRecipeRequest = () => ({
    type: FETCH_RECIPE_REQUEST,    
});

export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const fetchRecipesSuccess = recipes => ({
    type: FETCH_RECIPE_SUCCESS,
    loading:false,
    error:null,
    recipes
     
})


export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESE_REQUEST,
    loading:true
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
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

export const POST_NEW_CHEESE = 'POST_NEW_CHEESE';
export const postNewCheese = cheese => ({
    type: POST_NEW_CHEESE, 
    loading: false,
    cheese
});
export const POST_CHEESE_SUCCESS = 'POST_CHEESE_SUCCESS';
export const postCheeseSuccess = (cheese) => ({
	type: POST_CHEESE_SUCCESS,
	cheese
});

export const DELETE_CHEESE = 'DELETE_CHEESE';
export const deleteCheese = cheese => ({
    type: DELETE_CHEESE, 
    loading: false,
    cheese
});

export const fetchCheeses = () => (dispatch) => {
    
    dispatch(fetchCheesesRequest());
      return fetch(`${API_BASE_URL}/`)
       .then(res => {            
          if (!res.ok) { return dispatch(fetchCheesesError(res.statusText))}
          return res.json()
        })
        .then(cheeses => {
          dispatch(fetchCheesesSuccess(cheeses))})
         .catch(error => dispatch(fetchCheesesError(error)));
        }

export const postCheese = (data) => (dispatch) => {
 
  dispatch(fetchCheesesRequest());
  return fetch(`${API_BASE_URL}/`, {
    body: JSON.stringify(data), 
    cache: 'no-cache', 
    headers: { 'content-type': 'application/json' },
    method: 'POST',
    mode: 'cors', 
    redirect: 'follow', 
    referrer: 'no-referrer',})

    .then(res => {
      if (!res.ok) { return Promise.reject(res.statusText)}
      return res.json();
    })
    .then(cheese =>  dispatch(postCheeseSuccess(cheese)) )
    .then(() =>  dispatch(fetchCheeses()) )
    .catch(error => dispatch(fetchCheesesError(error)));
    };

export const removeCheese = (id) => (dispatch) => {
    return fetch(`${API_BASE_URL}/cheese/${id}`, {
        cache: 'no-cache', 
        headers: { 'content-type': 'application/json' },
        method: 'DELETE',
        mode: 'cors', 
        redirect: 'follow',
        referrer: 'no-referrer', 
      })
      .then(() =>  dispatch(fetchCheeses()) )
      .catch(error => dispatch(fetchCheesesError(error)));
    }



//     ///------for a side project



//find by ingredients
export const fetchRecipes = (queryString) => (dispatch) => {
        //apples%2Cflour%2Csugar
    dispatch(fetchRecipeRequest());
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${queryString}&limitLicense=false&number=5&ranking=1`, {
   
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: {
      'X-Mashape-Key': 'KIpcxoopqbmshgBnI6jbDfqaTFdep1CtFMajsnNSg0vp2OPTmY',
      'content-type': 'application/json'
    },
    method: 'GET', 
    mode: 'cors', 
    redirect: 'follow', 
    referrer: 'no-referrer', 
  })
     .then(res => {            
        //if (!res.ok) { return dispatch(fetchCheesesError(res.statusText))}
        return res.json()
      })
      .then(recipes =>  {
        console.log(recipes);  
        dispatch(fetchRecipesSuccess(recipes))})
       .catch(error => dispatch(fetchCheesesError(error)));
}

export const fetchRecipesById = (id) => (dispatch) => {

    //dispatch(fetchRecipeRequest());
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`, {
   
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: {
      'X-Mashape-Key': 'KIpcxoopqbmshgBnI6jbDfqaTFdep1CtFMajsnNSg0vp2OPTmY',
      'content-type': 'application/json'
    },
    method: 'GET', 
    mode: 'cors', 
    redirect: 'follow', 
    referrer: 'no-referrer', 
  })
     .then(results => {            
       console.log(results.body);
        return results.json()
      })
      .then(recipe =>  {
       console.log(recipe);
       // return recipes.sourceUrl.toString();
     }) 
        //dispatch(fetchRecipesSuccess(recipes))})
       .catch(error => dispatch(fetchCheesesError(error)));
}



export const getLinkToRecipe = (id) => (dispatch) => {
    return fetchRecipesById(id)
    .then(result => console.log(result))
}


export const fetchRecipesInBulk = (idString) => (dispatch) => {
      //dispatch(fetchRecipeRequest());
      return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids=${idString}`, {
   
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
          'X-Mashape-Key': 'KIpcxoopqbmshgBnI6jbDfqaTFdep1CtFMajsnNSg0vp2OPTmY',
          'content-type': 'application/json'
        },
        method: 'GET', 
        mode: 'cors', 
        redirect: 'follow', 
        referrer: 'no-referrer', 
      })
         .then(results => {            
           console.log(results.body);
           console.log(results)
            return results.json()
          })
          .then(recipes =>  {
           console.log(recipes);
           // return recipes.sourceUrl.toString();
         }) 
            //dispatch(fetchRecipesSuccess(recipes))})
           .catch(error => dispatch(fetchCheesesError(error)));
    }
    



//recipes in bulk endpoint
//.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids=456%2C987%2C321")

 //GEThttps://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information
//  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/977701/information?includeNutrition=false")
//  .header("X-Mashape-Key", "KIpcxoopqbmshgBnI6jbDfqaTFdep1CtFMajsnNSg0vp2OPTmY")
//  .header("Accept", "application/json")
//  .end(function (result) {
//    console.log(result.status, result.headers, result.body);
//  });