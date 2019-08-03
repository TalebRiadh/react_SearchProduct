import React, {Component} from 'react'
//import ToDoListItem from './ToDoListItem'
import Product from './Product'
import '../css/style.css';
import ProductsData from './ProductsData'
import SearchProduct from './SearchProduct'
//import TodosData from './TodosData'


class App extends Component{

    //const productsAvailable = ProductsData.filter(ProductData => ProductData.state === "available");

   /* const TodoComponent = TodosData.map(item =>
        <ToDoListItem
            key={item.id}
            item={item}
        />
    );*/

   state ={
       products: ProductsData
   }


   handleAdd = Name =>{
       const productsAvailable = ProductsData.filter(ProductData => ProductData.name === Name)
        this.setState({products: productsAvailable})

   }
render(){

    const ProductsComponent = this.state.products.map(item =>
        <Product
            key={item.id}
            product={item}
        />
    );
    return (
        <div className="todo-list">
            <h1>Welcome to Store</h1>
            <SearchProduct onAdd = {this.handleAdd} />
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">price</th>

                </tr>
                </thead>
                <tbody>
                {ProductsComponent}
                </tbody>
            </table>
        </div>
    )

}


}


export default App