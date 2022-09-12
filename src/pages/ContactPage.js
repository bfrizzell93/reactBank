import { Container, Col, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact Us" />
      <Row className="row-content align-items-center">
        <Col sm="4">
          <address>
            123 Bankers Lane
            <br />
            Seattle, WA 98001
            <br />
            U.S.A.
          </address>
        </Col>
        <Col>
          <a role="button" className="btn btn-link" href="tel:+15555555555">
            <i className="fa fa-phone" /> 1-555-555-5555
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:fakeemail@fakeemail.co"
          >
            <i className="fa fa-envelope-o" /> ArrowBank@banking.com
          </a>
        </Col>
      </Row>

      <Row className="row-content">
        <Col xs="12">
          <h2>Tell us more about your needs</h2>
          <hr />
        </Col>
        <Col md="8">
          <ContactForm />
        </Col>
        <Col>
          <h3>Customer Contact Center</h3>
          <a href="tel:800-555-5555">Call 1-800-555-5555</a>
          <p>7 am to 6pm PST <br></br>
          Monday through Friday</p>
          <h3>Account Information 24/7</h3>
          <a href="tel:18665555555">Call 1-866-555-5555</a>
          <p>To access account information 24/7</p>
          <h3>Business Online Banking</h3>
          <p>To set up or access Business Banking call
            <a href="tel:8555555555">1-855-555-555</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;