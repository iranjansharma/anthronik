import {
  FaHandshakeSimple,
  FaIndustry,
  FaArrowUpRightDots,
  FaBookBookmark,
  FaArrowTrendUp,
  FaBookOpen,
} from 'react-icons/fa6';

const Services = () => {
  return (
    <section
      className='p-6 pb-12 lg:pt-[120px] lg:pb-[90px] mx-auto justify-center items-center content-center'
      id='services'
    >
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-12 max-w-[510px] text-center lg:mb-20'>
              <span className='block mb-2 text-[14px] font-semibold text-primary'>
                Our Services
              </span>
              <h2 className='mb-4 text-2xl font-bold text-dark sm:text-4xl md:text-[40px] uppercase'>
                At ANTHRONIK
              </h2>
              <p className='text-[14px] lg:text-[16px] font-thin '>
                We offer a range of services to meet diverse needs and drive
                success for our clients. Our services include
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-4'>
          <ServiceCard
            title='Strategic Intervention'
            details='We provide customized strategies and interventions to help individuals, businesses, and organizations achieve their goals. Through strategic thinking and innovative approaches, we navigate challenges and create pathways to success.'
            icon={<FaArrowUpRightDots />}
          />
          <ServiceCard
            title='Learning & Innovation'
            details='We foster a culture of continuous learning and innovation. Our expertise helps clients stay at the forefront of industry trends, embrace new technologies, and unlock their potential for growth and transformation.'
            icon={<FaBookBookmark />}
          />
          <ServiceCard
            title='Collaboration'
            details='We believe in the power of collaboration.By fostering meaningful partnerships and bringing together diverse perspectives,we create collaborative ecosystems that drive innovation,accelerate growth,deliver exceptional results.'
            icon={<FaHandshakeSimple />}
          />
          <ServiceCard
            title='Technical Evaluation Consulting & Project Execution'
            details='Our Technical Evaluation Consulting and Project Execution services provide expert guidance and seamless execution, ensuring successful outcomes for your projects. Trust our expertise to navigate the complexities and deliver exceptional results.'
            icon={<FaArrowTrendUp />}
          />
          <ServiceCard
            title='Conferences & Seminars'
            details='We organize and facilitate engaging events that provide platforms for knowledge exchange, networking, and inspiration. Our conferences, seminars, and summits bring together industry leaders, experts, and thought influencers to share insights and explore emerging trends'
            icon={<FaBookOpen />}
          />
          <ServiceCard
            title='Summits'
            details='We organize and facilitate engaging events that provide platforms for knowledge exchange, networking, and inspiration. Our conferences, seminars, and summits bring together industry leaders, experts, and thought influencers to share insights and explore emerging trends'
            icon={<FaIndustry />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className='w-full px-4 md:w-1/2 lg:w-1/3 p-4'>
        <div className='mb-8 rounded-[20px] text-center bg-white p-10 border-[1px] shadow-md hover:shadow-lg md:px-7 xl:px-10'>
          <div
            className={`mb-8 flex w-54 items-center justify-center rounded-2xl bg-primary text-5xl text-indigo-700`}
          >
            {icon}
          </div>
          <h4 className='mb-3 text-[16px] lg:text-[19px] font-bold text-dark text-gray-900'>
            {title}
          </h4>
          <p className='text-[14px] lg:text-[16px] font-light text-gray-800'>
            {details}
          </p>
        </div>
      </div>
    </>
  );
};
