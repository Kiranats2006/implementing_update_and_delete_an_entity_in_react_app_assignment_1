import { useState, useEffect } from 'react';
import UpdateItem from './components/UpdateItem';

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);
  const doorId = "2";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_URI}/${doorId}`);
        if (!response.ok) throw new Error('Failed to fetch item');
        setItem(await response.json());
      } catch (err) {
        alert(err.message);
      }
    };
    fetchItem();
  }, [doorId]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Update Door Item</h1>
      <UpdateItem item={item} setItem={setItem} />
    </div>
  );
}

export default App;