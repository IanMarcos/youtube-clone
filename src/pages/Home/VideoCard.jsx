import { FaUserCircle } from 'react-icons/fa';

const VideoCard = (props) => {
  const {
    id,
    title,
    fullTitle,
    channelTitle,
    channelId,
    thumbnail,
    viewCount,
    duration,
    publishedAt,
  } = props;
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      title={fullTitle}
      className='flex flex-col items-center grow shrink'
    >
      <div className='w-10/12 max-h-[180px] flex justify-center'>
        <img
          src={thumbnail}
          alt='Video thumbnail'
          className='w-full max-w-xs'
        />
      </div>
      <div className='flex relative'>
        <span className='absolute right-[10%] top-[-35%] px-1 rounded text-white text-sm bg-gray-800 bg-opacity-80'>
          {duration}
        </span>
        <div
          href={`https://www.youtube.com/channel/${channelId}`}
          title={channelTitle}
          className='pt-2 pr-2'
        >
          <FaUserCircle size={32} />
        </div>
        <div className='py-2 pr-4 max-w-[280px]'>
          <h3 className='text-clip text-sm font-medium'>{title}</h3>
          <div className='py-1'>
            <p title={channelTitle} className='xs-gray-text'>
              {channelTitle}
            </p>
            <p className='xs-gray-text'>
              {viewCount} • {publishedAt}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
