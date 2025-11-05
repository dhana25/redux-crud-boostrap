import logo from './logo.svg';
import './App.css';
import Userlist from './component/Userlist';
import Adduser from './component/Adduser';
import Updateuser from './component/Updateuser';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import { ToastContainer } from 'react-toastify';
import store from './Redux/Store';
import {Provider} from "react-redux"
import Viewuser from './component/Viewuser';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <Link className='text' to={"/"}>Home</Link>
            <Link className='text' to={"/list"}>User</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/list" element={<Userlist />}></Route>
            <Route path="/adduser" element={<Adduser />}></Route>
             <Route path="/viewuser/:id" element={<Viewuser />}></Route>
            <Route path="/updateuser/:id" element={<Updateuser />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer position='bottom-right'></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
