import { useEffect } from 'react';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/categories')
    .then((res)=>{
      // setCategories(res.data.body);
      console.log(res.data);
      setCategories(res.data);
    });
    // fetch()
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCategories(data.body);
    //   });
  }, []);

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <a className="brand" href="/">
                My Blog
              </a>
            </div>
            <div>
              <div className="search-btn">
                <IoSearchOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Nuur</Link>
              </li>
              <li>
                
              </li>
                {categories.map((item) => (
                 <Link to={item.url}>
                    <li key={item.id}>
                      <a >{item.name}</a>
                    </li>    
                  </Link>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
