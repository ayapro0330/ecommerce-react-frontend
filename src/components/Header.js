import React ,{useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isSidebarOpen,setIsSidebarOpen} = useContext(SidebarContext)
  return <header className='bg-pink-200' >
    <div>
      Header
    </div>
    <div onClick={() => setIsSidebarOpen(!isSidebarOpen)  }  className ='cursor-pointer flex relative'>
      <BsBag className='text-2xl'/>
    </div>
  </header >;
};

export default Header;
