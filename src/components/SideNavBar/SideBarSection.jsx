import { nanoid } from 'nanoid';
import SideBarItem from 'components/SideNavBar/SideBarItem';

const SideBarSection = ({ title, items }) => (
  <section className='my-2'>
    {title ? <h2 className='px-6 py-2 text-gray-500'>{title}</h2> : null}
    <ul>
      {items.map((item) => (
        <SideBarItem
          key={nanoid()}
          icon={item.icon}
          text={item.text}
          hyperlink={item.hyperlink}
        />
      ))}
    </ul>
  </section>
);

export default SideBarSection;
