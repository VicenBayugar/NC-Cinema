import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = (props) => {
  return (
    <Card bg='dark' border='secondary' className='p-2' style={{ width: '20rem', height: '35rem' }}>
      <Card.Img variant="top" className='img-fluid w-100 h-100' style={{objectFit: 'cover'}} src={props.imgUrl} /> 
      <Card.Body className='w-100'>
        <Card.Title className='text-wrap text-center'>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Movie;
