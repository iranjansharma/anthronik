import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from './images';

const Clients = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className='container mx-auto' id='ourclients'>
      <div>
        <p className='text-center text-[18px] lg:text-3xl uppercase'>
          Our clientele
        </p>
        <p className='container mx-auto text-[12px] w-10/12 lg:text-[18px] font-light text-center lg:w-8/12 py-2'>
          At ANTHRONIK, our esteemed clientele consists of a diverse range of
          individuals, businesses, and organizations across various industries.
          We are proud to serve clients who share our commitment to excellence,
          innovation, and collaborative growth.
        </p>
      </div>
      <motion.div
        ref={carousel}
        className='carousel conatiner mx-auto'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='inner-carousel'
        >
          {images.map((img, key) => {
            return (
              <motion.div key={key} className='item'>
                <img src={img} alt='img' draggable='false' />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Clients;
