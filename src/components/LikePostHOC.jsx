
import React from 'react';
import withCounter from './WithCounter';

const LikePost = ({ counter, handleCount }) => {
  return (
    <div>
      <button onClick={handleCount}>Like Post {counter}</button>
    </div>
  );
};

export default withCounter(LikePost);
