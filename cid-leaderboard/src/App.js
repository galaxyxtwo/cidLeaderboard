import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ items: [], error: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cids: [
              'bafkreiedazv25tc7idkywbco3jxrywdnb3g4ff3pqegrmshhtcpk5zgsyi',
              'bafkreibm6ku4kcsbzlby3c6st57cyk2t5vztgvntwxkp56xtqdxqq5oqhi',
              'bafkreicml3xokhxca4h3qvxas42u54ynqtjpkpbyodjjh2sr2xg7g6nkgq'
              
            ],
            page: 1,
            size: 5
          })
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const fetchedData = await response.json();
        if (fetchedData.success && fetchedData.data && Array.isArray(fetchedData.data.data)) {
            setData({ items: fetchedData.data.data, error: null });
        } else {
            throw new Error("Invalid data format from the server.");
        }
        
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means useEffect will only run once, similar to componentDidMount

  return (
      <div className="App">
        <h1>CID leaderboard</h1>
        <ul>
          {
            [...data.items].sort((a, b) => b.numbersAccessed - a.numbersAccessed)
            .map((item, index) => (
              <li key={index}>
                {item.cid} - {item.numbersAccessed}
              </li>
            ))
          }
        </ul>
        {data.error && <p>Error: {data.error.message}</p>}
      </div>
    );
  


}

export default App;

