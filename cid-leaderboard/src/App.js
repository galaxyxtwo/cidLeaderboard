import './App.css'
import { useState } from 'react'
import { useLiveQuery, useDocument } from 'use-fireproof'

function App() {
  const [inputCID, setInputCID] = useState('')
  const leaderboardData = useLiveQuery('leaderboard')
  const leaderboard = leaderboardData.docs
  const [leaderboardEntry, setLeaderboardEntry, saveLeaderboardEntry] = useDocument({
    cid: '',
    lastAccessed: '',
    numberAccessed: 0,
  })

  const handleAddCID = async () => {
    // Call the provided API with the input CID
    const response = await fetch('https://api.leto.gg/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cids: [inputCID],
      }),
    })

    const data = await response.json()

    // Save the data to Fireproof
    setLeaderboardEntry(data[0])  // Assuming the API returns an array
    saveLeaderboardEntry()
  }

  const handleInputChange = (event) => {
    setInputCID(event.target.value)
  }

  return (
    <div className="App">
      <div className="container">
        <h2>Leaderboard</h2>
        <ul>
          {leaderboard.map(entry => (
            <li key={entry.cid}>
              CID: {entry.cid}
              <br />
              Last Accessed: {entry.lastAccessed}
              <br />
              Number Accessed: {entry.numberAccessed}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <input
          value={inputCID}
          onChange={handleInputChange}
          placeholder="Enter CID"
        />
        <button onClick={handleAddCID}>Add to Leaderboard</button>
      </div>
    </div>
  )
}

export default App



