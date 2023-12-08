import './App.css';
import Common from './components/Common';
import LikeImage from './components/LikeImage';
import LikeImageHOC from './components/LikeImageHOC';
import LikePost from './components/LikePost';
import LikePostHOC from './components/LikePostHOC';
import Img from './Img';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        {/* <LikePostHOC/>
        <LikeImageHOC/> */}
        <Common render={(arg1,arg2)=> {return <Img data={arg1} functionality={arg2}/>}}/>
      </div>
    </div>
  );
}

export default App;
