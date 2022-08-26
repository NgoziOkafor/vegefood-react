import { Route, Routes } from 'react-router-dom';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';
import Register from './components/pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
