import Carousel from 'react-bootstrap/Carousel'


const Carausel=()=>{
    return <Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100 he"
      src="https://cdn.shopify.com/s/files/1/0017/5010/6173/products/organdycarrots1_2000x.jpg?v=1639010691"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Tales of Craft</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100 he"
      src="https://cdn.shopify.com/s/files/1/2278/0073/products/IMG_5994_776x.jpg?v=1652644811"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Sustainable and sensible</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="100px"
      className="d-block w-100 he"
      src="https://cdn.shopify.com/s/files/1/0612/8133/products/5430b07d-8bd4-51a3-a9a8-cdf45c77c2aa_1024x1024.jpg?v=1582643149"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Celebrating Handicraft</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
}

export default Carausel;