import React, { Component } from 'react'
import Product from './Product'
import '../css/style.css';
import ProductsData from './ProductsData'
import SearchProduct from './SearchProduct'


class App extends Component {


    state = {
        products: ProductsData
    }


    handleAdd = Name => {
        const productsAvailable = ProductsData.filter(ProductData => ProductData.name === Name)
        this.setState({ products: productsAvailable })

    }
    render() {

        const ProductsComponent = this.state.products.map(item =>
            <Product
                key={item.id}
                product={item}
            />
        );
        return (
            <div className="todo-list">
                <h1>Welcome to Store</h1>
                <SearchProduct onAdd={this.handleAdd} />
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