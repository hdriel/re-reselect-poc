import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProductList from './components/ProductList';
import Title from './components/Title';
import './App.css';

function App() {
  return (


      <Provider store={store}>
          <div className='app'>
              <Title />
              <ProductList />
          </div>
      </Provider>
  )
}

export default App
