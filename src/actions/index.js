// {
//     type : 'ADD_MOVIES',
//     movies : []
// }

//Action Types

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const DISPLAY_FAVOURITES = 'DISPLAY_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

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

export function addMoviesToList(movie){
    return{
        type : ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    const url = `https://omdbapi.com/?apikey=3ca5df7&t=${movie}`;

    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
            dispatch(movieSearchResult(movie)); 
        })

    //adding dispatch to fetch the movie and add it to store
    } 
}

export function movieSearchResult(movie){
    return{
        type : ADD_SEARCH_RESULT,
        movie : movie
    }
}