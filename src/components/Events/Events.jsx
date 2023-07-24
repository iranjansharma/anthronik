const Events = () => {
  return (
    <div className='container w-11/12 mx-auto justify-center items-center content-center'>
      <div className='flex flex-wrap' id='events'>
        <div className='w-full px-4'>
          <div className='mx-auto lg:mb-20 max-w-[1024px] text-center lg:mb-12'>
            <h2 className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] uppercase'>
              Our Events
            </h2>
            <p className='text-[14px] lg:text-[18px] font-medium mb-4'>
              Explore our dynamic lineup of conferences, seminars, and summits
              that provide valuable opportunities for knowledge exchange,
              networking, and inspiration in the fields of Strategic
              Intervention, Learning and Innovation, and Collaboration.
            </p>
          </div>
          <p className='text-gray-900 font-bold -mx-4 py-2'>Past Events</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
