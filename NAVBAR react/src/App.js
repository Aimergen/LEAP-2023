import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Title from "./components/Content/Title";
import Body from "./components/Content/Body";
import Main from "./components/Main";
import DynamicModal from "./components/utils/Modal";
import { useState } from "react";
import PostCreate from "./components/Blogs/PostCreate";
import { Button } from "react-bootstrap";
import {Routes, Route} from 'react-router-dom';

const Home=()=>{
  return <>
    Home Page
  </>;
};

const Articles=({menuShow, handleShow})=>{
  return <> </>
}

function App() {
  const [show, setShow] = useState(false);
  

  const [menuShow, setMenuShow]= useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleMenu=()=>{

  }
 
  

  return (
    <>
  
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div 
        className={`off-menu bg-dark 
        ${menuShow && 'show'}`}>
          Test
          </div>
        <div className="off-menu-sibling">
          <div className="container-sm body-container">
            {/* <Heading  */}
            {/* title="Blog posts" 
            handleShow={handleShow} /> */}
            {/* <PostList /> */}
          </div>
        </div>
      </div>
      <DynamicModal 
      show={show} 
      handleClose={handleClose} 
      title="Create post" 
      content={<PostCreate />} />
     </>
  );
}

export default App;
