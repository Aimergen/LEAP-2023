import './styles/bootstrap.min.css';
import './styles/styles.css';
import Navbar from './components/Navbar';
import DynamicModal from './components/utils/DynamicModal';
import { useState } from 'react';
import PostCreate from './components/Blogs/PostCreate';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Signing from './pages/Signing';
import SigningError from './pages/SigningError';
import SignUp from './pages/SignUp';

export default function App() {
  const [signedIn, setSignedIn]=useState(false);
  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if(!signedIn){
    return (
        <Routes>
            <Route path='/signin' element={<Signing />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='*' element={<SigningError />}/>
        </Routes>
    )  
  }

  return (
    <>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && 'show'}`}>Test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles handleShow={handleShow} />} />
          </Routes>
        </div>
      </div>

      <DynamicModal show={show} handleClose={handleClose} title="Create post" content={<PostCreate />} />
    </>
  );
}
