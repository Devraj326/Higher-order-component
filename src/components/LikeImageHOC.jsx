// import React from 'react';
// import UpdatedComponent from './WithCounter';

// const LikeImage = ({ likeImageCounter, handleLikeImageCount }) => {
//   return (
//     <div>
//       <button onClick={handleLikeImageCount}>Like Image {likeImageCounter}</button>
//     </div>
//   );
// };

// export default UpdatedComponent(LikeImage);




import React from 'react';
import withCounter from './WithCounter';

const LikeImage = ({ counter, handleCount }) => {
  return (
    <div>
      <button onClick={handleCount}>Like Image {counter}</button>
    </div>
  );
};

export default withCounter(LikeImage);

