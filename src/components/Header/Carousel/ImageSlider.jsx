import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/bundle';
import 'swiper/css';

const ImageSlider = () => {
  return (
    <div>
      <Swiper
        className='container justify-center mx-auto items-center content-center'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className='sm:h-[500px] lg:h-full lg:w-full'>
            <img
              src='/banner1.jpg'
              alt='Events Images'
              className='h-[500px] w-[400px] object-cover lg:h-full lg:w-full'
            />
            <div className='absolute z-10 top-[84%] left-[18%] text-black text-lg px-6 border-[#90b75a] border-[2px] font-black rounded-full uppercase'>
              <a
                href='https://forms.gle/eHmqwMEVodo8QzDx7'
                target='_blank'
                rel='noreferrer'
                className='hover:text-gray-600 duration-400 ease-in-out'
              >
                Register Here
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='sm:h-[500px] lg:h-full lg:w-ful'>
            <img
              src='/banner2.jpg'
              alt=''
              className='h-[500px] w-[400px] object-cover lg:h-full lg:w-full'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='sm:h-[500px] lg:h-full lg:w-ful'>
            <img
              src='/banner3.jpg'
              alt=''
              className='h-[500px] w-[400px] object-cover lg:h-full lg:w-full'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='sm:h-[500px] lg:h-full lg:w-ful'>
            <img
              src='/banner4.jpg'
              alt=''
              className='h-[500px] w-[400px] object-cover lg:h-full lg:w-full'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
