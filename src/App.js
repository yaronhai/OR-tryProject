import Home from './Pages/Home/Home';
import NavBar from './Pages/NavBar/NavBar.jsx';
import CurrentUser from './Pages/CurrentUser/CurrentUser';
import Rooms from './Pages/Rooms/Rooms.jsx'
import { Routes, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path = '/' element = {<NavBar />}>
        <Route index element = { <Home />} />
        <Route path='user' element = {<CurrentUser /> } /> 
        <Route path='rooms' element = { <Rooms /> } /> 
      </Route>

    </Routes>
 
  );
}
export default App;
