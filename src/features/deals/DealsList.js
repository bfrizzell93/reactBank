import { Col, Row } from "reactstrap";
import DealCard from "./DealCard";
import { selectAllDeals } from "./DealsSlice"
import { useSelector } from "react-redux";

const DealsList = () => {
    const deals = useSelector(selectAllDeals);
  return (
    <Row className='ms-auto'>
          {deals.map((deal) => {
              return (
                  <Col md='5' className='m-4' key={deal.id}>
                      <DealCard deal={deal} />
                  </Col>
              );
          })}
      </Row>
  )
}

export default DealsList