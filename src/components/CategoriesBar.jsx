import { nanoid } from 'nanoid';
import { useState } from 'react';

const CategoryItem = ({ text, selectedCategory, categoryHandler }) => {
  const buttonClasses =
    'py-1 px-3 border border-gray-400 rounded-2xl whitespace-nowrap text-sm ';
  const grayBg = 'bg-gray-100';
  const blackBg = 'bg-gray-900 text-white';

  return (
    <button
      type='button'
      onClick={categoryHandler}
      className={
        selectedCategory === text
          ? buttonClasses.concat(blackBg)
          : buttonClasses.concat(grayBg)
      }
    >
      {text}
    </button>
  );
};

const CategoriesBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const hadleCategorySelection = (e) => {
    setSelectedCategory(e.target.innerText);
  };

  const categories = [
    'All',
    'Live',
    'Gaming',
    'Music',
    'Bad Bunny',
    'K-Pop',
    'Chocolate',
    'Comedy',
    'Drawings',
    'Dogs',
    'Recently uploaded',
    'Cars',
  ];
  return (
    <nav className='sticky top-[60px] z-10 border-y border-gray-400 py-3 px-6 bg-white overflow-auto'>
      <ul className='flex gap-x-3'>
        {categories.map((category) => (
          <li key={nanoid()}>
            <CategoryItem
              text={category}
              selectedCategory={selectedCategory}
              categoryHandler={hadleCategorySelection}
              key={nanoid()}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoriesBar;
