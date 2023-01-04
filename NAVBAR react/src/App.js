import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Title from "./components/Content/Title";
import Body from "./components/Content/Body";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Navbar />
      <Main />
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
    </>
  );
}

export default App;
