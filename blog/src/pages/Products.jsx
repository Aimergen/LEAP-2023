import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products() {
    const [page ,setPage] = useState(null);

    useEffect (()=>{
        axios
            .get('http://localhost:8000/products')
            .then((res)=>{
                setPage(res.data);
            });
    },[]);

    useState(()=>{
        console.log(page);
    },[page]);
  return (
    <main>
        <div className="containrer">
            <div className="row">
                {page?.items?.map((product)=>{
                    return (
                        <div className='col-sm-4' key={product.id}>
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={product.imageUrl} alt={product.name} />
                                </div>
                                <div className="product-card-desc">
                                    <div className="product-card-date">{product.createdAt}</div>
                                    <div className="product-card-name">{product.name}</div>
                                    <div className="product-card-price">{product.price}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                baraa
            </div>
        </div>
    </main>
  )
}
