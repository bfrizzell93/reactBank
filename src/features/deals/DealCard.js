import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import {Link} from 'react-router-dom';

const DealCard = ({deal}) => {
    const {image, name, description} = deal;
  return (
    
    <Card className="card">
      <CardImg className='card-img' src={image} alt={name}/>
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
        </CardBody>
    </Card>
    
  )
}

export default DealCard