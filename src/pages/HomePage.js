import { Container } from 'reactstrap'
import DealsList from '../features/deals/DealsList'
import SubHeader from '../components/SubHeader'

const HomePage = () => {
  return (
    <Container>
        <SubHeader current='Home' />
        <DealsList />
    </Container>
  )
}

export default HomePage