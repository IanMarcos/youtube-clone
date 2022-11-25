import SideNavBar from 'components/SideNavBar';
import TopNavBar from 'components/TopNavBar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// delete this
// const Layout = () => <Outlet />;

const Layout = () => {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const handleToogleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };

  return (
    <>
      <div
        className={
          sideBarVisible
            ? 'bg-gray-800 bg-opacity-40 fixed top-0 left-0 z-40 w-screen h-screen'
            : 'hidden'
        }
        role='none'
        onClick={handleToogleSideBar}
        onKeyDown={handleToogleSideBar}
      />
      <TopNavBar sideBarHandler={handleToogleSideBar} />
      <SideNavBar
        visible={sideBarVisible}
        sideBarHandler={handleToogleSideBar}
      />
      <Outlet />
    </>
  );
};

export default Layout;
