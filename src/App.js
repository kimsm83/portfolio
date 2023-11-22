import './App.css';
import Home from './routes/home/Home'
import About from './routes/about/About'
import Blog from './routes/blog/Blog'
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
