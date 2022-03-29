import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = (props) => {
  return (
    <Card style={{ width: '12rem', padding: '0', margin: '5px', height: '100%' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/190x220" style={{objectFit: 'contain'}}/> {/* props.urlImg */}
      <Card.Body
        style={{
          background: 'black',
          textAlign: 'center',
          width: '100%',
          color: '#5BA4CF',

        }}
      >
        <Card.Text>Name</Card.Text> {/* props.name */}
      </Card.Body>
    </Card>
  );
};

export default Movie;
