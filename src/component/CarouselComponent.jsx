import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel fade variant='primary'>
      <Carousel.Item className='d-flex justify-content-center align-items-center'>
        <img
          className="d-block w-75"
          src="/NAC_2022.jpeg"
          alt="CEO"
        />
        <Carousel.Caption>
          <h4>CEO</h4>
          <p><i className='fs-6'>Jamie Dimon</i></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='d-flex justify-content-center align-items-center'>
        <img
          className="d-block w-75 h-100"
          src="/NAC_1949.jpg"
          alt="CEO"
        />

        <Carousel.Caption>
          <h5>Co-CEO</h5>
          <p><i className='fs-6'>Marianne Lake, Jennifer Piepszak, Jennifer Roberts</i></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;