import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel fade variant='primary'>
      <Carousel.Item className='d-flex flex-column justify-content-center align-items-center'>
        <img
          className="d-block w-75"
          src="/NAC_2022.jpeg"
          alt="CEO"
        />
        <div className=''>
          <div className='fs-6'>CEO</div>
          <div><i className='fs-6 fw-lighter'>Jamie Dimon</i></div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='d-flex flex-column justify-content-center align-items-center'>
        <img
          className="d-block w-75 h-100"
          src="/NAC_1949.jpg"
          alt="CEO"
        />
        <div className=''>
        <div className='fs-6'>Co-CEO</div>
          <div><i className='fs-6 fw-lighter'>Marianne Lake, Jennifer Piepszak, Jennifer Roberts</i></div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;