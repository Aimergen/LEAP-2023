import logo from './logo.svg';
import './App.css';
import data from "./data.json";


function Header(){
  return (
  <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menuTarget">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/budget-shoppy/fetch.html">
                    Home
                    </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </header>
  

  );
  
}

// function Main(){
//   return <main className="mt-3">
//     <div className="container-sm">
//       <div className="row g-3" id="productsTarget"></div>
//     </div>
//   </main>
// }

function ProductCard({product}){
  return (    
    <div className="card">
    <div className="ratio ratio-4x3">
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
    </div>
      <div className="card-body">
        <p className="card-name">{product.title}</p>
        <p className="card-category">{product.category}</p>
        <p className="card-name card-price">{product.price}</p>
      </div>
    </div>
  
  );
}

function ButtonBaby(){
  return (
    <div>
      <button type="button" className="btn btn-primary btn-lg m-3" >Large button</button>
      <button type="button" className="btn btn-secondary btn-lg m-3">Large button</button>
    </div>
  );
}

function Carduud(){
  return (
    <div style={{padding: '50px'}}>
      <div className="card" style={{width: '18rem'}}>
      <img src='./logo192.png' className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    </div>
  );
}

function App() {
  return (<>
  <Header />
  <main className='mt-3'>
    <div className='container-sm'>
      <div className='row g-3'>
        {data.products.map((product, index)=>(
        <div className='col-sm-3' key={index}>
            <ProductCard product={product} />
        </div>
        ))}
      </div>
    </div>
  </main>
  <ButtonBaby/>
  <Carduud/>
  </>
  ) 
}

export default App;
