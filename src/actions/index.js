// {
//     type : 'ADD_MOVIES',
//     movies : []
// }

//Action Types

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const DISPLAY_FAVOURITES = 'DISPLAY_FAVOURITES';

//action creators
export function addMovies(movies){
    return {
    
        type: ADD_MOVIES,
        movies : movies
    
    } 
}    

export function addFavourite(movie){
    return{
        type: ADD_TO_FAVOURITE,
        movie : movie
    }
}

export function removeFavourite(movie){
    return{
        type: REMOVE_FROM_FAVOURITE,
        movie : movie
    }
}

export function displyFav(val){
    return{
        type: DISPLAY_FAVOURITES,
        val
    }
}