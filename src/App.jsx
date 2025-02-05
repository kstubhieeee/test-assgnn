import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data.products,
        })
      })
  }

  render() {
    const { products } = this.state
    return (
      <div className="app-container">
        <h1>Products</h1>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="product-details">
                <span className="price">${product.price}</span>
                <span className="rating">Rating: {product.rating}⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
