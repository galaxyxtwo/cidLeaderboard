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
              'QmYipSwcyLsv9FYndT1aUrA5FpBFAA2zYGstq1enjPLTyj',
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
    <nav className="App-navbar">
        {/* You can add navbar content here, e.g., links, logo, etc. */}
        <span>The most popular NFTs on my social app</span>
    </nav>
      <h1>Leaderboard</h1>
      <h2>Private activity data for NFTs on IPFS!</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>NFT CID</th>
            <th>Total Views</th>
          </tr>
        </thead>
<tbody>
  {
    [...data.items].sort((a, b) => b.numbersAccessed - a.numbersAccessed)
    .map((item, index) => (
      <tr key={index}>
        <td className="cid-column">
          <a href={`https://leto.gg/ipfs/${item.cid}`} target="_blank" rel="noopener noreferrer">
            {item.cid}
          </a>
        </td>
        <td>{item.numbersAccessed}</td>
      </tr>
    ))
  }
</tbody>

      </table>
      {data.error && <p>Error: {data.error.message}</p>}
    </div>
  );
}

export default App;

