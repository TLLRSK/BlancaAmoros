import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {Nav} from './components.js';
import {Home, About} from './views.js';

function App() {
  const [dateState, setDateState] = useState(new Date());

  // Date and Time strings
  const dateString = `${dateState.getDate() < 10 ? '0' : ''}${dateState.getDate()}.${dateState.getMonth() < 10 ? '0' : ''}${dateState.getMonth()+1}.${dateState.getFullYear()}`
  const timeString = `${dateState.getHours()}:${dateState.getMinutes()}`

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 60000);
  }, [])
  
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
