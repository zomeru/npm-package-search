import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import {
  textWhite,
  formStyles,
  linkDivStyles,
  linkStyles,
} from '../styles/styles';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    state => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form style={formStyles} action='' onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3 style={textWhite}>{error}</h3>}
      {loading && <h3 style={textWhite}>Loading...</h3>}
      {!error &&
        !loading &&
        data.map(name => {
          const packageName = name.replace(
            'https://www.npmjs.com/package/',
            ''
          );

          const pckg = packageName
            .replaceAll('-', ' ')
            .replace(/[0-9]/g, '')
            .replaceAll('%', ' ')
            .replace(/F/g, '');

          return (
            <div style={linkDivStyles} key={name}>
              <a style={linkStyles} href={name} target='_blank'>
                {pckg}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default RepositoriesList;
