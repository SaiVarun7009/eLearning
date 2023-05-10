import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Pathways from './pages/Pathways'
import PathwayPage from './pages/PathwayPage'
import CoursePage from './pages/CoursePage'
import HtmlCss from './pages/HtmlCss' 
import DummyLearning from './pages/DummyLearning'
// import ErrorBoundary from './pages/ErrorBoundary';
import Dummy from './pages/Dummy';
import Navbar from './components/testNav/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DummyPathway from './pages/DummyPathway';
import  {Register } from "./pages/Register";
import  {Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import {Admin} from './pages/Admin'
import { News } from './pages/News';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/pathways" element={<Pathways />}></Route>
        <Route path="/pathways/pathwayPage" element={<PathwayPage />}></Route>
        <Route path="/courses/coursePage" element={<CoursePage />}></Route>
        <Route path="/course/HtmlCss" element={<HtmlCss />}></Route>
        {/* <Route path="/courses/:courseId" element={
          <ErrorBoundary>
            <Dummy />
          </ErrorBoundary>
        } /> */}
        <Route path="/courses/:courseId" element={<Dummy />} />
        <Route path="/course/:courseId/learning" element={<DummyLearning />}></Route>
        <Route path="/pathways/:pathwayId" element={<DummyPathway />}></Route>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/News" element={<News />}/>
      </Routes>
    </>
    
  );
}

export default App;
