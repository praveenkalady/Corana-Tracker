import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import SecondaryApp from './SecondaryApp';
 function App (){
    return(
        <Provider store={store}>
        <SecondaryApp />
        </Provider>
    )
 }

 export default App;

      