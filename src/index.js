import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'


const logger = ({dispatch, getState}) => (next)=>(action)=>{
  next(action);
}

const thunk = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action === 'function'){
    action(dispatch);
    return;
  }
  next(action);
}


const store = createStore(rootReducer,applyMiddleware(logger, thunk));
export const StoreContext = createContext(); 
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })


class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return(
    <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>  
    );
  }  
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


