import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

function JobSearch() {
  const [position, setPosition] = useState("python");
  const [location, setLocation] = useState("new york");
  const [jobs, setJob] = useState(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    getData(position, location)
      .then((jobArr) => {
        setJob(jobArr);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div>
      <label htmlFor="position">Enter position</label>
      <input
        id="position"
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />

      <label htmlFor="location">Enter location</label>
      <input
        id="location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input type="submit" value="Search" onClick={handleSumbit} />

      <div>
        {jobs &&
          jobs.map((job) => {
            return (
              <React.Fragment key={job.id}>
                <Col sm="6">
                  <Card inverse color="primary">
                    <CardImg
                      top
                      width="50%"
                      src={job.company_logo}
                      alt="Company logo"
                    />
                    <CardBody>
                      <CardTitle>Company Title: {job.company}</CardTitle>
                      <CardSubtitle>Job Title: {job.title}</CardSubtitle>
                      <a href={job.url}>Job link</a>
                      <CardText>{job.location}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}

async function getData(position, location) {
  const url = `https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=${position}&location=${location}`;
  const response = await fetch(url);
  return await response.json();
}

// getData('python','new york');

export default JobSearch;
