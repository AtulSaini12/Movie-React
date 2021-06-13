
import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, DISPLAY_FAVOURITES } from "../actions";


const initialState = {
    list : [],
    favourites: [],
    showFav : false
};

export default function movies (state=initialState , action) {

    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list : action.movies
    //     };
    // }
    // return state ;

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list : action.movies
            };
        case ADD_TO_FAVOURITE:
            return{
                ...state,
                favourites : [action.movie, ...state.favourites]
            };
        case REMOVE_FROM_FAVOURITE:
            const filteredFav = state.favourites.filter((movie)=>movie.Title !== action.movie.Title);

            return{
                ...state,
                favourites : filteredFav
            };
        case DISPLAY_FAVOURITES:
            return{
                ...state,
                showFav : action.val
            };        
        default:
            return state;        
    }
}