import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Results extends React.Component {
  constructor(props) {
    super(props);
    // I want to create a state of pages that generate only if the api results is greater than 5
    this.state = {
      apiResults: ["a", "b"],
      currentPage: 1,
    };
    
  }
  render() {

    const { apiResults,currentPage } = this.state;
    console.log('apiResults',apiResults);
    
    return (
      <Router>
        <li>
        <Link to='/'>Suppose to be api results</Link>
        </li>

      </Router>
    );
  }

  componentDidUpdate(event,value) {
    console.log('this is for the other results', this.value)
    this.setState(this.value)
  }
  componentDidMount() {}
  componentWillUnmount() {}
  shouldComponentUpdate() {}
}

export default Results;