import React, { Component } from 'react';
import Basiccard from '../cards/card';

export default class Api extends Component {
  state = {
    products: [],
    result: null
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
      .catch(error => console.log(error));
  }

  clickData = (product) => {
    this.setState({ result: product });
  }

  render() {
    return (

      <div style={{ display: 'flex', gap: '20px' }}>
        <h2>hellowrold</h2>
        {/* Product List */}
        <div style={{ width: '50%' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {this.state.products.map(product => (
              <li
                key={product.id}
                onClick={() => this.clickData(product)}
                style={{
                  cursor: 'pointer',
                  marginBottom: '20px',
                  border: '1px solid #ccc',
                  padding: '10px',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',

                }}
              >
                <Basiccard rate={product.rating.rate} rat={product.rating.count} title={product.title}
                  category={product.category} price={`$${product.price}`}
                  image={product.image}
                  description={product.description}
                />
              </li>
            ))}
          </ul>
        </div>


        <div style={{ width: '50%' }}>
          {this.state.result && (
            <Basiccard
              title={this.state.result.title}
              category={this.state.result.category}
              price={`$${this.state.result.price}`}
              image={this.state.result.image}
              description={this.state.result.description}
            />
          )}
        </div>
      </div>
    );
  }
}
