import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/60x80" />
      <Card.Body
        style={{
          background: 'black',
          textAlign: 'center',
          width: '100%',
          color: '#5BA4CF',
        }}
      >
        <Card.Title>Name</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Movie;
