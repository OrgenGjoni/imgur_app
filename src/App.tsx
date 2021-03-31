import React from 'react';
import Main from './components/Main';
import {Provider} from 'react-redux';
import store from './store/store';        //Yeah I know too may stores...


function App(){



  return (
    <Provider store = {store}>
    <Main />
    </Provider>
  );
}

export default App;
