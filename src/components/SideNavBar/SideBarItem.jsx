const SideBarItem = ({ icon, text, hyperlink }) => (
  <li className='px-6'>
    <a href={hyperlink} className='flex gap-x-5 py-1.5'>
      <div className='w-6'>{icon}</div>
      <p>{text}</p>
    </a>
  </li>
);

export default SideBarItem;
