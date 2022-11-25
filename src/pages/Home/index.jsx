import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Utils from 'models/utils';
import VideoCard from 'pages/Home/VideoCard';
import CategoriesBar from 'components/CategoriesBar';
import LoadingCircle from 'components/LoadingCircle';

const Home = () => {
  const [videosList, setVideosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorFetching, setErrorFetching] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      if (!isLoading) {
        Utils.fetchPopularVideos().then((items) => {
          setVideosList(items);
          setIsLoading(false);
        });
      }
    } catch (error) {
      setIsLoading(false);
      setErrorFetching(true);
    }
  }, []);

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (errorFetching) {
    return <main>Unexpected error. Please try reloading the page later</main>;
  }

  return (
    <main>
      <CategoriesBar />
      <div className='flex flex-wrap gap-x-3 gap-y-8 px-4 py-6'>
        {videosList.map((YTitem) => {
          const formattedItem = Utils.formatVideoItem(YTitem);
          return <VideoCard {...formattedItem} key={nanoid()} />;
        })}
      </div>
    </main>
  );
};

export default Home;
