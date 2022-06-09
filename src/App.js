// import logo from './logo.svg';
import './App.css';
import Konva from './Konva';
import Uploader from './Uploader';
import useImage from './hook/useImage';

function App() {
  const { handleChange, handleClick, image, imageInputRef } = useImage();

  return (
    <div className="App">
      <Uploader
        handleChange={handleChange}
        handleClick={handleClick}
        imageInputRef={imageInputRef}
      />

      {!image ? <div> Please upload bg</div> : <Konva bg={image} />}
    </div>
  );
}

// 1. should upload image
// 2. should drag and drop shape
// 3. should store shape location and load its location

export default App;
