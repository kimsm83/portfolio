import './App.css';
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;
