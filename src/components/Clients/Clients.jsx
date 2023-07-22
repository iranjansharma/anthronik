import Carousel from 'react-grid-carousel';

const Clients = () => {
  return (
    <div
      className='bg-[#001C30]  w-full mx-auto justify-center items-center content-center pb-6'
      id='ourclients'
    >
      <div className='flex flex-wrap'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-[60px] max-w-[720px] text-center'>
            <h2 className=' lg:text-3xl font-bold pt-8 pb-2 text-white sm:text-4xl md:text-[40px] uppercase'>
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
      <div className='container mx-auto'>
        <Carousel cols={6} rows={1} gap={'5px'} loop={true} autoplay={2500}>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/1.jpg?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/2.jpg?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/3.png?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/4.jpg?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/5.jpg?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/6.webp?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='25%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/7.png?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/8.jpg?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/9.png?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/10.png?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/11.jpg?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/12.png?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/13.png?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/14.png?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/15.jpg?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/16.jpg?raw=true'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width='40%'
              draggable='false'
              src='https://github.com/iranjansharma/anthronik/blob/main/src/assets/17.jpg?raw=true'
            />
          </Carousel.Item>
        </Carousel>
        <p className='hidden lg:text-[12px] text-center mt-6 mx-auto text-white justify-center font-light italic underline'>
          Join our esteemed clientele and experience the ANTHRONIK difference.
          Together, we can navigate challenges, unlock opportunities, and
          achieve remarkable success.
        </p>
      </div>
    </div>
  );
};

export default Clients;
