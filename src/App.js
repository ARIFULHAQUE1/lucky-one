import { useEffect, useState } from 'react';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className="App">

      {
        products.map(product => <Shop product={product}
          key={product.id}></Shop>)
      }
    </div>
  );
}

export default App;
