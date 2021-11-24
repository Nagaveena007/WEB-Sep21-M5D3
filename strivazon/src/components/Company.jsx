import { useEffect, useState } from "react";
import { fetchcompany } from "../apical";
import { Container, Row, Col } from "react-bootstrap";
/* import { Link } from "react-router-dom";
 */ import SingleJob from "./SingleJob";

const Company = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetchcompany("company").then((res1) => setCompany(res1));
  }, []);
  return (
    <Container>
      <Row md={4} xs={1}>
        {company &&
          company.map((search1) => (
            <SingleJob src={search1} key={search1._id} />
          ))}{" "}
      </Row>
    </Container>
  );
};
export default Company;
