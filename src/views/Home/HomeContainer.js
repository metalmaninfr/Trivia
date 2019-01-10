import React, { Component } from 'react';
import Home from './Home';
import api from '../../helpers/api';

class HomeContainer extends Component {
  state = {
    categories: [],
  }
  async componentDidMount() {
    const data = await api.getCategories();
    this.setState({
      categories: data,
    });
  }
  render() {
    let getlocalStorageId = localStorage.getItem('getId');
    return (
      <Home categories={this.state.categories} />
    );
  }
}

export default HomeContainer;
