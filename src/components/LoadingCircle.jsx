import ReactLoading from 'react-loading';

const LoadingCircle = () => (
  <main className='h-screen flex x-y-flex-center'>
    <ReactLoading
      type='spinningBubbles'
      color='#141414'
      height={150}
      width={90}
    />
  </main>
);

export default LoadingCircle;
