import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import  { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Create/> */}
    <Router>
      <Routes>
        <Route path='/' element={<Create/>} />
      <Route path='/read' element={<Read/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
