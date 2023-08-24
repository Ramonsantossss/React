import React, { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState({
    recentData: [],
    top1Data: [],
    top2Data: []
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const recentResponse = await axios.get('https://ruby-careful-skunk.cyclic.app/recents');
        const top1Response = await axios.get('https://ruby-careful-skunk.cyclic.app/top/1');
        const top2Response = await axios.get('https://ruby-careful-skunk.cyclic.app/top/2');
        
        setApiData({
          recentData: recentResponse.data,
          top1Data: top1Response.data,
          top2Data: top2Response.data
        });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="api-results">
        <h2>API Data</h2>
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
