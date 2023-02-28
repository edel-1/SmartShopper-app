/* eslint-disable react/display-name */
import React, { useCallback } from 'react';
//import Say from 'react-say';
import { useSynthesize } from 'react-say';

export default () => {
  const synthesize = useSynthesize();
  const handleClick = useCallback(() => {
    synthesize('A quick brown fox jumped over the lazy dogs.');
  }, [synthesize]);

  return (
    <button onClick={handleClick} className="voice">
      voice assist activated
    </button>
  );
};
