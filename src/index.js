import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Cheeselist from './components/cheese-list';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render( 
 <Provider store={store}>
  <Cheeselist />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
