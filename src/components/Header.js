import React from 'react';

// import link
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-6 mb-6 border-b'>
         <div className='container mx-auto flex justify-between items-center'>
             {/*logo*/}
             <Link to='/'>
                <img src={Logo} alt=''/>
             </Link>

              {/*Button*/}
              <div className='flex items-center gap-6'>
                <Link className='hover:text-violet-800 transition' to=''> Log in </Link>
                <Link className='bg-violet-900 hover:bg-violet-700 text-white px-4 py-3 rounded-lg transition' to=''> Sign up </Link>
              </div>
         </div>
    </header>  
  ); 
};

export default Header;
