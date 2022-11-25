import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Utils from 'models/utils';
import LoadingCircle from 'components/LoadingCircle';
import SearchResultItem from 'pages/SearchResults/SearchResultItem';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorFetching, setErrorFetching] = useState(false);

  const searchForVideos = async () => {
    setIsLoading(true);
    try {
      let searchQuery = searchParams.get('search_query');
      searchQuery = Utils.addSpacesToSearchQuery(searchQuery);

      const items = await Utils.searchVideos(searchQuery);
      setSearchResults(items);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorFetching(true);
    }
  };

  useEffect(() => {
    searchForVideos();
  }, []);

  useEffect(() => {
    searchForVideos();
  }, [searchParams]);

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (errorFetching) {
    return <main>Unexpected error. Please try reloading the page later</main>;
  }

  return (
    <main className='p-8'>
      <ul>
        {searchResults.map((YTitem) => {
          const formattedItem = Utils.formatSearchItem(YTitem);
          return (
            <li key={nanoid()} className='my-3'>
              <SearchResultItem {...formattedItem} key={nanoid()} />
            </li>
          );
        })}
        <li>
          <SearchResultItem />
        </li>
      </ul>
    </main>
  );
};

export default SearchResults;
