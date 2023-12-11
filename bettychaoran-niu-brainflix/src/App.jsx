
import Homepage from './pages/home/homePage';
import Upload from './pages/upload/uploadePage';
import '../src/App.scss';

import { Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Homepage />}/>
      <Route path='/video/:id' element={<Homepage />} />
      <Route path='/upload' element={  <Upload />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
