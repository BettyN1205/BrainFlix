

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments';
import Next from './components/NextVideo/Next'

import '../src/App.scss';

import './data/video-details.json';
import './data/videos.json';


function App() {

  return (
    <>
    <Header/>
    <Hero />
    <Comments/>
    <Next/>
      
    </>
  )
}

export default App
