import { Button, Col, Container, Row, CardBody, CardTitle } from "reactstrap";
import SubHeader from "../components/SubHeader";
import aboutUsFamily from "../app/assets/aboutUsFamily.jpg";

const AboutPage = () => {
  return (
    <div>
      <Container>
        <SubHeader current="About" />
      </Container>
      <Row className="mx-auto mt-5">
        <Col md="5">
          <div className="aboutus-statement ms-5 ">
            <h1 className="">WHO WE ARE</h1>
            <h3>
              Our mission isn't simply to help our members get by. We exist to
              help them realize every ounce of their potential. We exist to
              educate, but to also encourage. We exist to usher their dreams
              into the land of reality.
            </h3>
            
          </div>
        </Col>
        <Col md="7">
          <img className="aboutusimg" src={aboutUsFamily}  alt="A mother holding her child"/>
        </Col>
      </Row>
      <Container className="mt-3">
        <h1>WE HELP OUR MEMBERS DO BETTER</h1>
      </Container>
      <Container>
        <Row xs="1">
          <Col >
            <h1 className="aboutUsStats">$50M</h1>
            <h1>Cash Back</h1>
          </Col>
          <Col >
            <h1 className="aboutUsStats">Over 50,000</h1>
            <h1>Homes Financed</h1>
          </Col>
          <Col >
            <h1 className="aboutUsStats">51,234</h1>
            <h1>New Members This Year</h1>
          </Col>
        </Row>
      </Container>
      <CardBody className="mt-5">
        <CardTitle>Ready to become a member?</CardTitle>
        <Button color="success">Begin Application</Button>
      </CardBody>
    </div>
  );
};

export default AboutPage;
