import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Nav = () => {
  const [display, setDisplay] = useState('hidden');

  const displayDropdown = () => {
    setDisplay('');
    setTimeout(() => {
      setDisplay('hidden');
    }, 6000);
  };

  const displayNone = () => {
    setDisplay('hidden');
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 mx-auto justify-center items-center content-center'>
      <div className='container mx-auto max-w-screen-xl flex flex-wrap items-center justify-between py-[4px] px-8'>
        <a href='/' className='flex items-center'>
          <img src={Logo} className='h-12 mr-3' alt='Anthronik Logo' />
        </a>
        <div className='flex md:order-2'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://forms.gle/eHmqwMEVodo8QzDx7'
            className='bg-white text-[12px] text-gray-800 font-bold py-1 px-[8px] rounded-full lg:py-2 lg:px-4 ease-in-out cursor-pointer'
          >
            Register For Events
          </a>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-cta'
        >
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                aria-current='page'
              >
                Home
              </a>
            </li>

            <li>
              <a
                href='#services'
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Services
              </a>
            </li>

            <li>
              <a
                href='#events'
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ease-in-out'
                onMouseOver={displayDropdown}
                // onMouseLeave={displayNone}
              >
                Events
                <RiArrowDropDownLine className='inline text-[20px]' />
              </a>
              <div
                className={`${display} flex flex-col absolute my-2 bg-gray-800 rounded`}
              >
                <a
                  href='#events'
                  onClick={displayNone}
                  className='text-white my-2 mx-2 text-[16px] font-semibold'
                >
                  Past Events
                </a>
                <a
                  onClick={displayNone}
                  href='#events'
                  className='text-white my-2 mx-2 text-[16px] font-semibold'
                >
                  Upcoming Events
                </a>
              </div>
            </li>

            <li>
              <a
                href='#gallery'
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href='#ourclients'
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Our Clients
              </a>
            </li>
            <li>
              <a
                href='#aboutus'
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Contact
              </a>
            </li>
            <li>
              <a
                // onMouseOver={displayDropdown2}
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Insights
                <RiArrowDropDownLine className='inline text-[20px]' />
              </a>
              {/* <div
                className={`${display2} flex flex-col absolute my-2 bg-gray-800 rounded`}
              >
                <a
                  href='#events'
                  onClick={displayNone2}
                  className='text-white my-2 mx-2 text-[16px] font-semibold'
                >
                  Blogs
                </a>
                <a
                  onClick={displayNone2}
                  href='#events'
                  className='text-white my-2 mx-2 text-[16px] font-semibold'
                >
                  Corporate Publication
                </a>
                <a
                  onClick={displayNone2}
                  href='#events'
                  className='text-white my-2 mx-2 text-[16px] font-semibold'
                >
                  Podcast & Webinars
                </a>
                <a
                  onClick={displayNone2}
                  href='#events'
                  className='text-white my-2 mx-2 text-[16px] font-semibold'
                >
                  Trainings & Certifications
                </a>
                <a
                  onClick={displayNone2}
                  href='#events'
                  className='text-white my-2 mx-2 text-[16px] font-semibold'
                >
                  Reports & Insights
                </a>
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
