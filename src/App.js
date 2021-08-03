import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Description from './components/Description';

function App() {
  return <div>
    <ImageSlider slides={SliderData}/>
    <Description/>
  </div>;
}

export default App;
