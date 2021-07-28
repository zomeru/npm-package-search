import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

interface IRepositoriesListProps {}

const RepositoriesList: React.FC<IRepositoriesListProps> = ({}) => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form action='' onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
