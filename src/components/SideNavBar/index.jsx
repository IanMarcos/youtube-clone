import MenuAndLogo from 'components/MenuAndLogo';
import SignInButton from 'components/SignInButton';
import SideBarSection from 'components/SideNavBar/SideBarSection';
import data from 'components/SideNavBar/SideBarData.jsx';

const SectionSeparator = () => <hr className='w-11/12 border-gray-300' />;

const SideNavBar = ({ visible, sideBarHandler }) => {
  const {
    navigationSection,
    librariesSection,
    exploreSection,
    browseChannelsSection,
    moreFromYTSection,
    helpSection,
  } = data;

  return (
    <nav className={visible ? 'side-menu visible' : 'side-menu'}>
      <section className='pl-5 my-3'>
        <MenuAndLogo menuHandler={sideBarHandler} />
      </section>
      <SideBarSection items={navigationSection} />
      <SectionSeparator />

      <SideBarSection items={librariesSection} />
      <SectionSeparator />

      <section className='my-2 py-2 pl-5 pr-7'>
        <p className='text-sm mb-2'>
          Sign in to like videos, comment, and subscribe.
        </p>
        <SignInButton />
      </section>
      <SectionSeparator />

      <SideBarSection title='EXPLORE' items={exploreSection} />
      <SectionSeparator />

      <SideBarSection items={browseChannelsSection} />
      <SectionSeparator />

      <SideBarSection title='MORE FROM YOUTUBE' items={moreFromYTSection} />
      <SectionSeparator />

      <SideBarSection items={helpSection} />
      <SectionSeparator />

      <section className='my-2 py-2 pl-5 pr-7 text-xs font-medium'>
        <p>About Press Copyright</p>
        <p>Contact us Creators</p>
        <p>Advertise Developers</p>
        <p className='mt-4 font-light text-gray-400'>© 2022 Ian Ortiz c:</p>
      </section>
    </nav>
  );
};

export default SideNavBar;
