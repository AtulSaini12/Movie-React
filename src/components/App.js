import React from "react";
import {data} from '../data';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import { addMovies } from "../actions";

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

  render(){
   const {list} = this.props.store.getState();
   return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie,index)=>{
              return <MovieCard movie={movie} key={`movies-${index}`}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
