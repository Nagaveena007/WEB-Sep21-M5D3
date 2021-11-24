import { Card } from "react-bootstrap";
const SingleJob = ({ src }) => {
  return (
    <Card className="card mt-3 ml-3 mr-3 mb-3">
      <Card.Body>
        <Card.Link className="job__title mt-2" href={src.url}>
          {src.title}{" "}
          <span>
            <small>({src.job_type})</small>
          </span>
        </Card.Link>
        <Card.Text></Card.Text>
        <Card.Subtitle className="mt-2 text-muted">
          {src.company_name}
        </Card.Subtitle>
        <Card.Text>{src.candidate_required_location}</Card.Text>

        <Card.Text className="active">
          <img src="active.png" />
          <small className="ml-1">Actively recruiting</small>{" "}
        </Card.Text>

        <Card.Text>{src.publication_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleJob;
