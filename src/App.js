import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ items: [], error: null });
  const [clickedLink, setClickedLink] = useState(null);


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
              'bafkreibm6ku4kcsbzlby3c6st57cyk2t5vztgvntwxkp56xtqdxqq5oqhi',
              'bafkreifnleeor5evyiblrfqibr4wrscv2sviztf4g7jel5xnfdft74pqxe', 
              'bafkreia4fwo76dt6igw7wwc65mfqlwim44hjt4zcxkc27vbcj4ylu75cva',
              'bafkreibe7fjfh5nzkz56qtqkkntp6aeog64wmcjk3qyjswzwfqc534o5pe', 
              
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
  }, []); // Empty dependency array means useEffect will only run once

  return (
    <div className="App">
    <nav className="App-navbar">
        {/* You can add navbar content below, e.g., links, logo, etc. */}
        <span></span>
    </nav>
      <h1>Community Stats</h1>
      <h2> Total views per IPFS cid</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Content</th>
            <th>IPFS CID</th>
            <th>Total Views</th>
          </tr>
        </thead>
<tbody>
  {
    [...data.items].sort((a, b) => b.numbersAccessed - a.numbersAccessed)

.map((item, index) => (
  <tr key={index}>
    <td>
      <a
        href={`https://leto.gg/ipfs/${item.cid}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setClickedLink(item.cid)}
      >
        {clickedLink === item.cid ? (
          item.isImage ? (
            <img src={`https://leto.gg/ipfs/${item.cid}`} alt={item.cid} />
          ) : (
            `Click to view`
          )
        ) : (
          "Click to view"
        )}
      </a>
    </td>
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