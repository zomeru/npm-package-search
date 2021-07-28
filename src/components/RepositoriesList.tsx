import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';

interface IRepositoriesListProps {}

const RepositoriesList: React.FC<IRepositoriesListProps> = ({}) => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const state = useSelector(state => state);
  const { data, error, loading } = useTypedSelector(
    state => state.repositories
  );

  console.log(state);

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
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map(name => {
          const packageName = name.replace(
            'https://www.npmjs.com/package/',
            ''
          );
          const noDash = packageName.replaceAll('-', ' ');
          const noNum = noDash.replace(/[0-9]/g, '');
          const finalName = noNum.replaceAll('%', ' ');
          return (
            <div key={name}>
              <a href={name} target='_blank'>
                {finalName}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default RepositoriesList;
