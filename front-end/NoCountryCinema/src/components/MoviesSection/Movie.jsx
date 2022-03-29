import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = () => {
  return (
    <Card style={{ width: 'auto', padding: '0', margin: '10px', height: '100%' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/190x220" />
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
