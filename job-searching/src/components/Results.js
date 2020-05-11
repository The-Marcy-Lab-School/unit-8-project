import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import JobSearch from "./JobSearch";

//need to know items, how to get next set of items and prev items
// n amount of pages based of data
// count will be 5

class Results extends React.Component {
  constructor(props) {
    super(props);
    // I want to create a state of pages that generate only if the api results is greater than 5
    this.state = {
      apiResults: [],
      count: 5,
      page: 1,
    };
  }
  render() {
    const { apiResults, currentPage } = this.state;
    console.log("apiResults", apiResults);

    return (
      <Router>
        <Route path="http://localhost:3000/" component={JobSearch}></Route>
      </Router>
    );
  }

  componentDidUpdate(event, value) {
    // console.log("this is for the other results", this.value);
    // this.setState(this.value);
  }
  componentDidMount() {}
  componentWillUnmount() {}
  shouldComponentUpdate() {}
}

export default Results;
