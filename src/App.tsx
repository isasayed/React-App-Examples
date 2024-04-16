import { useState, useEffect } from 'react';
import Header from './Site/Header'
import Content from './Site/Content'
import Footer from './Site/Footer'
import './App.css';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [requestUrl, setRequestUrl] = useState('users');
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const reponse = await fetch(`${API_URL}${requestUrl}`);
        if (!reponse.ok)
          throw Error('Items API Error');
        const listItems = await reponse.json();
        // const listItems = storedData ? storedData : [];
        setItems(listItems);
      } catch (err: any) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    (async () => (await fetchItems()))();
  }, [requestUrl]);

  return (
    <div className="App">
      <Header
        setRequestUrl = {setRequestUrl}
        title="React App" />
      {isLoading && <p>Loading...</p>}
      {!isLoading && <Content
        items={items} />}
      <Footer
        fetchError={fetchError} />
    </div>
  );
}

export default App;
