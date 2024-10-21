import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [count, setCount] = useState(0)

  // let num=10

  // let [num2, setNum2] = useState(5)

 

  // function updateNum(){
  //   num+=10
  //   setNum2(num2+5)
  //   alert("working")
  // }

  // function getinputval(event){

  //   console.log(event.target.value)
  // }


  return (
    <>
      <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="Cart">Cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // onChange= {getinputval}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

    <Container>
      {/* <h1>num={num}</h1>
      <h1>num2={num2}</h1> */}
    {/* <Button onClick={updateNum}>Update</Button> */}

    <h1 className='text-secondary'>Products</h1>
    <Row>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <Card.Body>
            <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title>
            <p className='text-success'>$ 109.95</p>
            <Card.Text>
            Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
          <Card.Body>
            <Card.Title>Mens Cotton Jacket</Card.Title>
            <p className='text-success'>$ 55.99</p>
            <Card.Text>
            great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" />
          <Card.Body>
            <Card.Title>White Gold Plated Princess</Card.Title>
            <p className='text-success'>$ 9.99</p>
            <Card.Text>
            Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
            
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://4.imimg.com/data4/AX/OL/MY-13223178/nikon-camera.jpg" />
          <Card.Body>
            <Card.Title>Camera</Card.Title>
            <p className='text-success'>$ 1500</p>
            <Card.Text>
            PROFESSIONAL PHOTO AND VIDEO PERFORMANCE: 16 megapixel Micro Four Thirds sensor with no low pass filter to confidently capture sharp images with a high dynamic range and artifact free performance; WiFi enabled.
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" />
          <Card.Body>
            <Card.Title>Solid Gold Petite Micropave</Card.Title>
            <p className='text-success'>$ 168</p>
            <Card.Text>
            Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" />
          <Card.Body>
            <Card.Title>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</Card.Title>
            <p className='text-success'>$ 109</p>
            <Card.Text>
            Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" />
          <Card.Body>
            <Card.Title>Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin</Card.Title>
            <p className='text-success'>$ 599</p>
            <Card.Text>
            21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" />
          <Card.Body>
            <Card.Title>Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</Card.Title>
            <p className='text-success'>$ 29.95</p>
            <Card.Text>
            100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" />
          <Card.Body>
            <Card.Title>DANVOUY Womens T Shirt Casual Cotton Short</Card.Title>
            <p className='text-success'>$ 12.99</p>
            <Card.Text>
            95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} sm={6} lg={4} xl={3}>
        <Card>
          <Card.Img variant="top" src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" />
          <Card.Body>
            <Card.Title>Pierced Owl Rose Gold Plated Stainless Steel Double</Card.Title>
            <p className='text-success'>$ 10.99</p>
            <Card.Text>
            Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel
            </Card.Text>
            <Button className='me-2' variant="primary">View Product</Button>
            <Button variant='warning'>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
    </>
  )
}

export default App
