import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import ProductList from './ProductList'

export default class BaiTapLayOut extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "CybersoftABCC"
    }
  }

  changeName = (name) => {
    this.setState({name: name});
  }
  render() {
    console.log(this.props.greetingProps);
    return (
      <div>
        <Header nameProps={this.state.name} />
        <Carousel />
        <button onClick={() => this.changeName('New Cybersoft')}>Click</button>
        <ProductList />
      </div>

    )
  }
}
