
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './Components/Calendar';
import CompletedTask from './Components/CompletedTask';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import Todo from './Components/Todo';
import UpdateTask from './Components/UpdateTask';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Todo></Todo>
      <Routes>
       
        <Route path='/completeTask' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calender' element={<Calendar></Calendar>}></Route>
        <Route path='/update/:id' element={<UpdateTask></UpdateTask>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
