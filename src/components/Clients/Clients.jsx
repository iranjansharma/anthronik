import Carousel from 'react-grid-carousel';

const Clients = () => {
  return (
    <div
      className='bg-[#001C30] w-full mx-auto justify-center items-center content-center pb-6'
      id='ourclients'
    >
      <div className='flex flex-wrap'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-[60px] max-w-[720px] text-center'>
            <h2 className=' text-3xl font-bold pt-8 pb-2 text-white sm:text-4xl md:text-[40px] uppercase'>
              Our clientele
            </h2>
            <p className='text-[12px] lg:text-[16px] w-fit font-light text-white'>
              At ANTHRONIK, our esteemed clientele consists of a diverse range
              of individuals, businesses, and organizations across various
              industries. We are proud to serve clients who share our commitment
              to excellence, innovation, and collaborative growth.
            </p>
          </div>
        </div>
      </div>
      <Carousel cols={2} rows={1} gap={0} autoplay={3000}>
        <Carousel.Item>
          <img width='40%' src='https://picsum.photos/800/600?random=1' />
        </Carousel.Item>
        <Carousel.Item>
          <img width='40%' src='https://picsum.photos/800/600?random=2' />
        </Carousel.Item>
        <Carousel.Item>
          <img width='40%' src='https://picsum.photos/800/600?random=3' />
        </Carousel.Item>
        <Carousel.Item>
          <img width='40%' src='https://picsum.photos/800/600?random=3' />
        </Carousel.Item>
        <Carousel.Item>
          <img width='40%' src='https://picsum.photos/800/600?random=3' />
        </Carousel.Item>
        <Carousel.Item>
          <img width='40%' src='https://picsum.photos/800/600?random=3' />
        </Carousel.Item>
        <Carousel.Item>
          <img width='40%' src='https://picsum.photos/800/600?random=3' />
        </Carousel.Item>
        <Carousel.Item>
          <img width='40%' src='https://picsum.photos/800/600?random=3' />
        </Carousel.Item>
      </Carousel>
      <p className='hidden lg:text-[12px] text-center mt-6 mx-auto text-white justify-center font-light italic underline'>
        Join our esteemed clientele and experience the ANTHRONIK difference.
        Together, we can navigate challenges, unlock opportunities, and achieve
        remarkable success.
      </p>
    </div>
  );
};

export default Clients;
