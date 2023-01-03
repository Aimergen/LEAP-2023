import logo from './logo.svg';
import './App.css';
import data from "./data.json";
import Header from "./components/Header";
import ProductCard from "./components/Product";
  
// function Main(){
//   return <main className="mt-3">
//     <div className="container-sm">
//       <div className="row g-3" id="productsTarget"></div>
//     </div>
//   </main>
// }



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
