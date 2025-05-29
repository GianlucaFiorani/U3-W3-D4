import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { HeartFill } from "react-bootstrap-icons";
import { getJobsAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.content.data);
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getJobsAction(baseEndpoint + query + "&limit=20"));
    // setJobs(useSelector((state) => state.jobs.content.data));
    //   try {
    //     const response = await fetch(baseEndpoint + query + "&limit=20");
    //     if (response.ok) {
    //       const { data } = await response.json();
    //       setJobs(data);
    //     } else {
    //       alert("Error fetching results");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <div className="d-flex gap-2">
            <Form onSubmit={handleSubmit} className="flex-grow-1 ">
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="Inserisci la chiave di ricerca e premi Enter" />
            </Form>
            <Link to={"/favorites"} className="btn btn-primary">
              <HeartFill />
            </Link>
          </div>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs?.map((jobData) => (
            <Job key={jobData._id} data={jobData} h={true} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
