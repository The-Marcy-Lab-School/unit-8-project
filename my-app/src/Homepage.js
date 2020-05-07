import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';

class HomePage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Form />
        <Result />
      </div>
    );
  }
}

export default HomePage;
