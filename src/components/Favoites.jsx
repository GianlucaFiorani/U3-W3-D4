import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { HouseDoor } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Favorites = () => {
  const jobs = useSelector((state) => state.favorites.content);
  return (
    <Container className="mt-5">
      <Link to={"/"} className="position-absolute top-0 start-0 p-3 fs-2">
        <HouseDoor />
      </Link>
      <h1>Preferites</h1>

      {jobs.map((jobData, i) => (
        <Job key={jobData._id} data={jobData} i={i} />
      ))}
    </Container>
  );
};
export default Favorites;
