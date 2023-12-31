const Team = () => {
  return (
    <section
      className='pt-10 container w-11/12 mx-auto justify-center items-center content-center'
      id='team'
    >
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <div className='mx-auto mb-[60px] max-w-[720px] text-center'>
              <h2 className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] uppercase'>
                Our Team
              </h2>
              <p className='text-[16px] w-fit font-light text-body-color'>
                Our team of experts facilitates mentors and develops
                entrepreneurs, new manufacturing opportunities, and time-bound
                technical research initiatives which are of commercial value and
                create a value chain success model for all stakeholders.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-center'>
          <TeamCard
            name='Shri Rahul Deo  '
            profession='Director (Business Development)'
            imageSrc='/rahuldeo.jpg'
          />
          <TeamCard
            name='Dr. Swarnim J. Dixit  '
            profession='Director( Marketing )'
            imageSrc='/dixit.jpg'
          />
          <TeamCard
            name='Dr. Anil Wali '
            profession='(Ex MD & CEO – FITT – IIT Delhi)'
            imageSrc='/anil.jpg'
          />
          <TeamCard
            name='Dr. S. S. Bhattacharyya'
            profession='Consultant – ANTHRONIK & FITT – IIT Delhi '
            imageSrc='/bhattacharya.jpg'
          />
          <TeamCard
            name='Dr. Snehasis Mukhopadhyay'
            profession='Professor, Department of Computer & Information Science Indiana University – Purdue University – Indianapolis (Advisor)'
            imageSrc='https://placehold.co/540x660.png'
          />
          <TeamCard
            name='Prof. Srabani Taraphder'
            profession='Department of Chemistry, Indian Institute of Technology Kharagpur (Advisor)'
            imageSrc='https://placehold.co/540x660.png'
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <>
      <div className='w-full px-4 md:w-1/2 xl:w-1/4'>
        <div className='mx-auto mb-10 w-full max-w-[370px]'>
          <div className='relative overflow-hidden rounded-lg'>
            <img
              src={imageSrc}
              alt=''
              className='h-[360px] w-full'
              draggable='false'
            />
            <div className='absolute left-0 w-full text-center bottom-5'>
              <div className='relative py-2 mx-5 overflow-hidden bg-white rounded-lg'>
                <h3 className='text-[16px] font-bold text-dark'>{name}</h3>
                <p className='text-[12px] text-body-color'>{profession}</p>
                <div>
                  <span className='absolute bottom-0 left-0'>
                    <svg
                      width={61}
                      height={30}
                      viewBox='0 0 61 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx={16}
                        cy={45}
                        r={45}
                        fill='#13C296'
                        fillOpacity='0.11'
                      />
                    </svg>
                  </span>
                  <span className='absolute top-0 right-0'>
                    <svg
                      width={20}
                      height={25}
                      viewBox='0 0 20 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='0.706257'
                        cy='24.3533'
                        r='0.646687'
                        transform='rotate(-90 0.706257 24.3533)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='6.39669'
                        cy='24.3533'
                        r='0.646687'
                        transform='rotate(-90 6.39669 24.3533)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='12.0881'
                        cy='24.3533'
                        r='0.646687'
                        transform='rotate(-90 12.0881 24.3533)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='17.7785'
                        cy='24.3533'
                        r='0.646687'
                        transform='rotate(-90 17.7785 24.3533)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='0.706257'
                        cy='18.6624'
                        r='0.646687'
                        transform='rotate(-90 0.706257 18.6624)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='6.39669'
                        cy='18.6624'
                        r='0.646687'
                        transform='rotate(-90 6.39669 18.6624)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='12.0881'
                        cy='18.6624'
                        r='0.646687'
                        transform='rotate(-90 12.0881 18.6624)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='17.7785'
                        cy='18.6624'
                        r='0.646687'
                        transform='rotate(-90 17.7785 18.6624)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='0.706257'
                        cy='12.9717'
                        r='0.646687'
                        transform='rotate(-90 0.706257 12.9717)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='6.39669'
                        cy='12.9717'
                        r='0.646687'
                        transform='rotate(-90 6.39669 12.9717)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='12.0881'
                        cy='12.9717'
                        r='0.646687'
                        transform='rotate(-90 12.0881 12.9717)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='17.7785'
                        cy='12.9717'
                        r='0.646687'
                        transform='rotate(-90 17.7785 12.9717)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='0.706257'
                        cy='7.28077'
                        r='0.646687'
                        transform='rotate(-90 0.706257 7.28077)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='6.39669'
                        cy='7.28077'
                        r='0.646687'
                        transform='rotate(-90 6.39669 7.28077)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='12.0881'
                        cy='7.28077'
                        r='0.646687'
                        transform='rotate(-90 12.0881 7.28077)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='17.7785'
                        cy='7.28077'
                        r='0.646687'
                        transform='rotate(-90 17.7785 7.28077)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='0.706257'
                        cy='1.58989'
                        r='0.646687'
                        transform='rotate(-90 0.706257 1.58989)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='6.39669'
                        cy='1.58989'
                        r='0.646687'
                        transform='rotate(-90 6.39669 1.58989)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='12.0881'
                        cy='1.58989'
                        r='0.646687'
                        transform='rotate(-90 12.0881 1.58989)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='17.7785'
                        cy='1.58989'
                        r='0.646687'
                        transform='rotate(-90 17.7785 1.58989)'
                        fill='#3056D3'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
