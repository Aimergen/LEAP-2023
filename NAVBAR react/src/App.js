import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Title from "./components/Content/Title";
import Body from "./components/Content/Body";
import Main from "./components/Main";
import DynamicModal from "./components/utils/Modal";
import { useState } from "react";
import PostCreate from "./components/Blogs/PostCreate";

function App() {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  

  return (
    <>
      <Navbar />
      <Main handleShow={handleShow}/>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
            
              <img src="/img/product5.jpg"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DynamicModal 
      show={show} 
      handleClose={handleClose} 
      title="Create post" content={PostCreate}/>

    </>
  );
}

export default App;
