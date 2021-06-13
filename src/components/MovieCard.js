import React from 'react';
import { addFavourite,removeFavourite } from '../actions';

class MovieCard extends React.Component{
    
    handleFavClick = ()=>{
        // console.log("FAV CLICK")
        const {movie} = this.props;
         this.props.dispatch(addFavourite(movie));
    }
    handleUnfavClick = ()=>{
        // console.log("UNFAV CLICK")
        const {movie} = this.props;
       this.props.dispatch(removeFavourite(movie));
    }
    render(){
        const {movie, isFav} = this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="Movie-Poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFav ? 
                            <button className="unfavourite-btn" onClick={this.handleUnfavClick}>Unfavourite</button>
                            : 
                            <button className="favourite-btn" onClick={this.handleFavClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;