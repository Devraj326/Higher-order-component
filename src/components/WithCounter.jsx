// import React from "react";

// const UpdatedComponent = (OriginalComponent) => {
//     class NewComponent extends React.Component{
//         render(){
//             return <OriginalComponent name="John"/>
//         }
//     }
//     return NewComponent
// }

// export default UpdatedComponent


// import React from "react";

// const UpdatedComponent = (OriginalComponent) => {
//   class NewComponent extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         likeImageCounter: 0,
//       };
//     }

//     handleLikeImageCount = () => {
//       this.setState((prevState) => ({
//         likeImageCounter: prevState.likeImageCounter + 1,
//       }));
//     };

//     render() {
//       return (
//         <OriginalComponent
//           likeImageCounter={this.state.likeImageCounter}
//           handleLikeImageCount={this.handleLikeImageCount}
//         />
//       );
//     }
//   }

//   return NewComponent;
// };

// export default UpdatedComponent;




import React from 'react';

const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    handleCount = () => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          counter={this.state.counter}
          handleCount={this.handleCount}
        />
      );
    }
  }

  return NewComponent;
};

export default withCounter;
