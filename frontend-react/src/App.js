import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import AddForm from "./components/addForm";
import DisplayAllVideos from "./components/displayAllVideos";
import PageMissing from './components/PageMissing';
import Layout from './components/layout';
function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/add-video" element={<AddForm />}></Route>
    <Route path="/list" element={<DisplayAllVideos />}></Route>
    <Route path="*" element={<PageMissing />}></Route>
   </Routes>
  );
}

export default App;
