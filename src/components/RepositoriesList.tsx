import React from 'react';

interface IRepositoriesListProps {}

const RepositoriesList: React.FC<IRepositoriesListProps> = ({}) => {
  return (
    <div>
      <form action=''>
        <input type='text' />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
