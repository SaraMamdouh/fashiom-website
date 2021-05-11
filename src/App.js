import React,{Component}from 'react';
import Products from './components/products/product';
import Filter from './components/filter/filter';
import Cart from './components/cart/cart';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component{
  state={
    products:[],
    cartItem:[],
    size:"",
    sort:""
  }
  
  

render(){
  return (
    <Provider store={store}>
         
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart </a> 
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter />
            <Products/>
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
    </Provider>
  );
}
}


export default App;
