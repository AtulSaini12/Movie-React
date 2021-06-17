import React from "react";
import {data} from '../data';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import { addMovies, displyFav } from "../actions";
import {StoreContext} from '../index';

class App extends React.Component {
  
  componentDidMount() {
    const { store }= this.props;
    //Listen to Api call
    //add dispatch function to take data from the api to state
      store.subscribe( () => {
      this.forceUpdate();
    });

    this.props.store.dispatch(addMovies(data));

  }

  isMovieFav = (movie)=>{
    const {movies} = this.props.store.getState();

    var index = movies.favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }
  clickedFav = (val)=>{
    this.props.store.dispatch(displyFav(val));
  }

  render(){
    const {movies, search} = this.props.store.getState();
   const {list, favourites, showFav} = movies;
   
   console.log(this.props.store.getState());
   const displayList = showFav ? favourites : list;
   
   return (
    <div className="App">
      <NavBar 
        dispatch = {this.props.store.dispatch}
        search = {search}
      />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFav ? '' : 'active-tabs'}`} onClick={()=>this.clickedFav(false)}>Movies</div>
          <div className={`tab ${showFav ? 'active-tabs': ''}`}  onClick={()=>this.clickedFav(true)}>Favourites</div>
        </div>

        <div className="list">
          {displayList.map((movie,index)=>{
            return <MovieCard movie={movie}
            key={`movies-${index}`}
            dispatch={this.props.store.dispatch}
            isFav = {this.isMovieFav(movie)}
          />
          })}
        </div>
      </div>
    </div>
   );
  } 
}

class AppWrapper extends React.Component{
  render(){
    return (
      <StoreContext.Consumer>
        {(store)=>{
          <App store={store}/>
         }
        }
      </StoreContext.Consumer>
    );
  }
}

export default App;
