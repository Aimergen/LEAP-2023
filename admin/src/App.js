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
import SigninSuccess from './pages/SigningSuccess';
import Categories from './pages/Categories';

export default function App() {
  // const [me, setMe]=useState(undefined);
  // const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // if(!me){
  //   return (
  //       <Routes>
  //           <Route path='/signin' element={<Signing />}/>
  //           <Route path='/signin/success' element={<SigninSuccess setMe={setMe} />}/>
  //           <Route path='/signup' element={<SignUp />}/>
  //           <Route path='*' element={<SigningError />}/>
  //       </Routes>
  //   )  
  // }

  return (
    <>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && 'show'}`}>Test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/articles" element={<Articles handleShow={handleShow} />} /> */}
            <Route path='/categories' element={<Categories />} />
          </Routes>
        </div>
      </div>

      {/* <DynamicModal show={show} handleClose={handleClose} title="Create post" content={<PostCreate />} /> */}
    </>
  );
}
