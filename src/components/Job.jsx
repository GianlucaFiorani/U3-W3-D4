import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Heart, HeartFill, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFaoritesAction, removeFromFavoritesAction } from "../redux/action";

const Job = ({ data, h, i }) => {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(true);
  const jobs = useSelector((state) => state.favorites.content);

  useEffect(() => {
    jobs.map((jobData) => jobData._id === data._id && setHeart(false));
  }, [jobs]);
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <div className="d-flex justify-content-between">
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
          {h ? (
            <Button
              onClick={() => {
                heart ? dispatch(addToFaoritesAction(data)) : dispatch(removeFromFavoritesAction(data._id));
                setHeart(!heart);
              }}
            >
              {heart ? <Heart /> : <HeartFill />}
            </Button>
          ) : (
            <Button
              variant="danger"
              onClick={() => {
                dispatch(removeFromFavoritesAction(data._id));
              }}
            >
              <Trash />
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Job;
