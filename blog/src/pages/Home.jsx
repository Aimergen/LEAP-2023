import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'bootstrap';


export default function Home() {
  const [articles, setArticles]= useState([]);
  useEffect(()=>{
    axios
      .get('http://localhost:8000/products')
      .then((res)=>{
        setArticles(res.data.items);
      });
  },[]);
  // const articles = [
  //   {
  //     image: 'https://mgl.gogo.mn/newsn/story/06e0257950004107a2aaa7ec830365a8-63c939980075e396370671.jpg',
  //     title: 'Цагдаагийн 102 албан хаагч англи хэл сурахаар Филиппин явна',
  //   },
  //   {
  //     image: 'https://mgl.gogo.mn/newsn/story/article-image-weddinggowns-kim-kardashian-174821-361256301-63c7593367c31750659072.jpeg',
  //     title: 'Цагдаагийн 102 албан хаагч англи хэл сурахаар Филиппин явна',
  //   },
  //   {
  //     image: 'https://mgl.gogo.mn/newsn/story/article-image-weddinggowns-kim-kardashian-174821-361256301-63c7593367c31750659072.jpeg',
  //     title: 'Цагдаагийн 102 албан хаагч англи хэл сурахаар Филиппин явна',
  //   },
  // ];

  return (
    <main>
      <div className="container">
        <div className="row gy-4">
          {articles.map((home) => (
            <div className="col-md-3 col-sm-6 col-12" key={home.id}>
              <Link to={`/articles/${home.id}`}>
                <Card 
                title={home.name} 
                image={home.price}/>
              </Link>
            </div>
          ))}
        </div>
          <Link>
            <div className='d-flex justify-content-between m-3'>
              <button type="button" class="btn btn-success">Preview</button>
              <button type="button" class="btn btn-outline-secondary">Next</button>
            </div>
          </Link>
      </div>
    </main>
  );
}