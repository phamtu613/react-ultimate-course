import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

/*
CRUD
product
BE
GET: /products -> get all items
GET: /product/:id -> get one item
POST: /product -> create new an item
DELETE: /product/:id -> delete an item
PUT: /product/:id -> update item

Promise('xxx')
  .then(() => {})
  .catch(() => {})
  .finally(() => {})
*/

interface Product {
  id: number,
  title: string
}

function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [page, setPage] = React.useState(1);


  console.log('product render', page)

  async function fetchData(_page: number) {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${_page}&_limit=2`, {
        method: 'GET'
      });
      const json = await data.json();
      navigate(`/product?page=${_page}&limit=2`, { replace: true })
      setProducts(json);
    } catch (err) {
      console.log('Error fetch product');
      // hide loading, show alert or popup 
    }
  }

  useEffect(() => {
    fetchData(page);
  }, [page])

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=2`, {
  //         method: 'GET'
  //       });
  //       const json = await data.json();
  //       setProducts(json);
  //     } catch (err) {
  //       console.log('Error fetch product');
  //       // hide loading, show alert or popup 
  //     }
  //   }
  //   fetchData();
  // }, [page])

  return (
    <div>
      {products.map(product => {
        return (
          <div key={product.id}>
            Title: {product.title}
          </div>
        )
      })}
      <br />
      <b>Pagination</b>
      <button type="button" onClick={() => setPage(prev => prev - 1)}>Prev</button>
      <span>{page}</span>
      <button type="button" onClick={() => setPage(prev => prev + 1)}>Next</button>
    </div>
  )
}

export default Product