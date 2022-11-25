import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegBell, FaUserCircle } from 'react-icons/fa';
import { VscDeviceCameraVideo } from 'react-icons/vsc';
import { IoMicCircle, IoSearchOutline } from 'react-icons/io5';
import { MdMic } from 'react-icons/md';
import MenuAndLogo from 'components/MenuAndLogo';
import Utils from 'models/utils';

const TopNavBar = ({ sideBarHandler }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchQuery === '') return;

    // const baseURL = Utils.getSiteBaseUrl();
    const validSearchQuery = Utils.removeSpacesFromSearchQuery(searchQuery);

    const url = `/results?search_query=${validSearchQuery}`;
    navigate(url);
  };

  return (
    <nav className='flex justify-between px-4 py-3 sticky top-0 z-10 h-[60px] bg-white'>
      <MenuAndLogo menuHandler={sideBarHandler} />
      <div className='x-y-flex-center gap-x-1 w-3/5 shown-flex-at-600'>
        <form
          onSubmit={handleSearchSubmit}
          className='flex items-center justify-between w-3/4 h-full border border-slate-200'
        >
          <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearchInput}
            className='w-2/3 pl-1.5'
          />
          <button
            type='submit'
            className='flex x-y-flex-center w-16 h-full bg-slate-200'
          >
            <IoSearchOutline size={20} />
          </button>
        </form>
        <IoMicCircle size={36} />
      </div>
      <div className='navigation-icons-group'>
        <IoSearchOutline size={20} className='hidden-at-600' />
        <MdMic size={24} className='shown-at-400 hidden-at-600' />
        <VscDeviceCameraVideo size={28} />
        <FaRegBell size={22} className='shown-at-400' />
        <FaUserCircle size={30} />
      </div>
    </nav>
  );
};

export default TopNavBar;
