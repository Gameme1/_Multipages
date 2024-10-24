import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Products.css'
function Product({ products, carts, setCarts }) {
    return (
        <div className='products-contrainer'>
            <div className='product-items-contrainer'>
                {products.map((product) => {
                    return (
                        <Card style={{ width: '18rem' }} key={product.id}>
                            <Card.Img variant="top" src={product.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    <b>${product.price.toFixed(2)}</b>
                                </Card.Text>

                                {carts.find((cart) => cart.id === product.id) ? (
                                    <span className='badge bg-danger'>Added to Carts</span>
                                ) : (
                                    <Button variant="outline-primary" onClick={() => {
                                        setCarts([...carts, product])
                                    }}>Add to Carts</Button>
                                )}

                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}

export default Product;