const UpcomingEvents = () => {
  return (
    <>
      <section
        className='py-20 lg:py-[120px] w-11/12 mx-auto justify-center items-center content-center'
        id='upcomingevents'
      >
        <div className='container'>
          <div
            className={`relative z-10 overflow-hidden rounded bg-indigo-600 py-12 px-8 md:p-[70px]`}
          >
            <div className='flex flex-wrap items-center -mx-4'>
              <div className='w-full px-4 lg:w-1/2'>
                <span className='mb-2 text-[12px] lg:text-[16px] font-light text-white'>
                  Transition to Net Zero Workshop
                </span>
                <h2 className='mb-6 text-[14px] w-[70%] lg:text-3xl lg:w-[60%] font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0'>
                  Register For Up-Coming Events
                </h2>
              </div>
              <div className='w-full px-4 lg:w-1/2'>
                <div className='flex flex-wrap space-x-4 lg:justify-end'>
                  <a
                    href='https://forms.gle/eHmqwMEVodo8QzDx7'
                    target='_blank'
                    rel='noreferrer'
                    className={`my-1 cursor-pointer inline-block rounded bg-info py-4 px-6 text-base font-bold text-white border-2 bg-opacity-90 transition  hover:bg-white hover:text-gray-900 md:px-9 lg:px-6 xl:px-9`}
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
            <div>
              <span className='absolute top-0 left-0 z-[-1]'>
                <svg
                  width={189}
                  height={162}
                  viewBox='0 0 189 162'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <ellipse
                    cx={16}
                    cy='-16.5'
                    rx={173}
                    ry='178.5'
                    transform='rotate(180 16 -16.5)'
                    fill='url(#paint0_linear)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear'
                      x1={-157}
                      y1='-107.754'
                      x2='98.5011'
                      y2='-106.425'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='white' stopOpacity='0.07' />
                      <stop offset={1} stopColor='white' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className='absolute bottom-0 right-0 z-[-1]'>
                <svg
                  width={191}
                  height={208}
                  viewBox='0 0 191 208'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <ellipse
                    cx={173}
                    cy='178.5'
                    rx={173}
                    ry='178.5'
                    fill='url(#paint0_linear)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear'
                      x1='-3.27832e-05'
                      y1='87.2457'
                      x2='255.501'
                      y2='88.5747'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='white' stopOpacity='0.07' />
                      <stop offset={1} stopColor='white' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingEvents;
