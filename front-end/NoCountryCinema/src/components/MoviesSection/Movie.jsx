import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Movie = props => {
  return (
    <Card
      bg="dark"
      border="secondary"
      className="p-2 m-3 "
      style={{ width: '17rem', height: '35rem' }}>
      <Card.Img
        variant="top"
        className="img-fluid w-100"
        style={{ objectFit: 'cover', height: '82%' }}
        src={props.imgUrl}
      />
      <Link to={`/detalle/${props.name}`} style={{ height: '18%' }} className='movieTitle'>
        <Card.Body className="w-100">
          <Card.Title className="text-wrap text-center">
            {props.name}
          </Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Movie;
