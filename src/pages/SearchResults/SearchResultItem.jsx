import { FaUserCircle } from 'react-icons/fa';

const SearchResultItem = (props) => {
  const {
    id,
    title,
    channelTitle,
    channelId,
    thumbnail,
    publishedAt,
    description,
  } = props;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      title={title}
      className='flex'
    >
      <div className='flex justify-center'>
        <img
          src={thumbnail}
          alt='Video thumbnail'
          className='w-full min-w-[200px] object-scale-down'
        />
      </div>
      <div className='px-5 py-2'>
        <h3 className='text-clip text-lg font-medium'>{title}</h3>
        <p className='xs-gray-text'>{publishedAt}</p>
        <div className='flex items-center gap-x-2 py-1'>
          <span
            href={`https://www.youtube.com/channel/${channelId}`}
            title={channelTitle}
          >
            <FaUserCircle size={22} />
          </span>
          <p title={channelTitle} className='xs-gray-text'>
            {channelTitle}
          </p>
        </div>
        <p className='xs-gray-text'>{description}</p>
      </div>
    </a>
  );
};

export default SearchResultItem;
