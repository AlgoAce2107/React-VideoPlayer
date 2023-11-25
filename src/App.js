import ReactPlayer from 'react-player/youtube'
import './App.css';

function App() {
  return (
    <div className="App">
      React-Video Player
      <div className='player'>
        <ReactPlayer url="https://www.youtube.com/watch?v=SwQhKFMxmDY" controls={true} width={800} height={500}/>
      </div>
      
    </div>
    
  );
}

export default App;
