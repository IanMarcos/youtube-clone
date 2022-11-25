import { FaRegUserCircle } from 'react-icons/fa';

const SignInButton = () => (
  <a href='https://accounts.google.com/signin/v2/identifier?service=youtube'>
    <button
      type='button'
      className='flex gap-x-2 px-5 py-2  border border-solid border-blue-600'
    >
      <FaRegUserCircle size={20} color='#0063EB' />
      <span className='text-sm font-medium text-blue-600'>SIGN IN</span>
    </button>
  </a>
);

export default SignInButton;
