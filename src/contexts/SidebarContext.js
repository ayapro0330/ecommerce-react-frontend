import React,{useState,createContext} from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handlecloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return <SidebarContext.Provider value={{isSidebarOpen , setIsSidebarOpen , handlecloseSidebar}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
