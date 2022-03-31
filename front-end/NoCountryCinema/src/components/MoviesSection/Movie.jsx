import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = (props) => {
  return (
    <Card className='movieCard' style={{ width: '12rem', padding: '0', margin: '5px', height: '100%'}}>
      <Card.Img variant="top" src={props.imgUrl} style={{objectFit: 'contain', width: 'auto', height: '15em', background: 'black'}}/> 
      <Card.Body
        style={{
          background: 'black',
          textAlign: 'center',
          width: '100%',
          color: '#5BA4CF',

        }}
      >
        <Card.Text className='text-wrap'>{props.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
