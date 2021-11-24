import { Container, Row, Col, Form } from "react-bootstrap";
import SingleJob from "./SingleJob";
import { useState, useEffect } from "react";
import { fetchsearch } from "../apical";

const Search = () => {
  /* const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    fetchsearch(query).then((res) => setQuery(res));
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3"></Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={useEffect}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Search for jobs"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs &&
            jobs.map((search) => (
              <SingleJob src={search} key={search._id} />
            ))}{" "}
        </Col>
      </Row>
    </Container>
  ); */

  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?search=" + query + "&limit=10"
    );

    if (response.ok) {
      const data = await response.json();

      setJobs(data.data);
    } else {
      alert("Error fetching jobs");
      return;
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3"></Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Search for jobs"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((search) => (
            <SingleJob src={search} key={search._id} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
