import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id)
  
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Awesome {product.title} description</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        { productQuantity > 0 ? <>
          <Form as={Row}>
            <Form.Label column='true' sm='6'>In Cart: {productQuantity}</Form.Label>
            <Col sm='6'>
              <Button sm='6' className="mx-2" onClick={() => cart.addOneToCart(product.id)}>+</Button>
              <Button sm='6' className="mx-2"onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
            </Col>
          </Form>
          <Button variant="danger"  onClick={() => cart.deleteFromCart(product.id)}>Remove From Cart</Button>
        </>
          : 
          <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add</Button>
          }
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
