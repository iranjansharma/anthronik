function Header() {
  return (
    <div
      className='w-screen h-3/12 text-white'
      style={{
        background:
          'linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)',
      }}
    >
      <div className='container mx-auto flex px-5 py-36 items-center justify-center flex-col'>
        <div className='text-center w-full lg:w-3/4'>
          <h1 className='text-[33px] text-black my-4 lg:text-7xl  font-bold leading-tight'>
            Corporate Bonding
          </h1>
          <p className='text-xl lg:text-4xl mb-8'>Learning Innovation</p>
          <div className='flex justify-center mx-auto'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://forms.gle/eHmqwMEVodo8QzDx7'
              className='capitalize bg-white text-gray-800 font-bold rounded-full text-[14px] lg:text-[16px] py-2 px-4 cursor-pointer lg:px-4 lg:py-2'
            >
              Register
            </a>
            <a className='ml-4 bg-white text-gray-800 font-bold rounded-full px-[15px] py-2 cursor-pointer lg:px-4 lg:py-2'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
