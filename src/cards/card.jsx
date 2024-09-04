import Card from 'react-bootstrap/Card';

function Basiccard({ title, category, description,image, rate, rat,price }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>

        <Card.Title>{title}</Card.Title>
        <Card.Title>{category}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{rate}</Card.Title>
        <Card.Title>{rat}</Card.Title>
        <button variant="dark">{price}</button>
        </Card.Body>
    </Card>
  );
}

export default Basiccard;