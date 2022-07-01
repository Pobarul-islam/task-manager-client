
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './Components/Calendar';
import CompletedTask from './Components/CompletedTask';
import Navbar from './Components/Navbar/Navbar';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Todo></Todo>
      <Routes>
       
        <Route path='/completeTask' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calender' element={<Calendar></Calendar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
