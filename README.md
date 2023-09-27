# cidLeaderboard

## Overview
A leaderboard to display IPFS CIDs based on view count (in descending order). Easily showcase activity data for NFTs, webpages, and more! 

CidLeaderboard uses the [Leto Analytics API](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api) to display the view count for each CID. 

> **_Note_**: Only IPFS CIDs that have been accessed through the [Leto IPFS Gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api) will return a view count, called "numberAccessed.


<img width="1167" alt="Screenshot 2023-09-27 at 5 05 56 PM" src="https://github.com/galaxyxtwo/cidLeaderboard/assets/90220293/3cd122c3-b18b-4bdb-9d3c-b64d5cfad95d">


## Getting Started
Follow the steps below to set up and run the cidLeaderboard React App in development mode:

1. **Clone the Repository**:
  
    ```
    git clone [https://github.com/galaxyxtwo/cidLeaderboard]
    cd [cid-leaderboard]
2. **Add your CIDs**: 

    This app has an example list of IPFS CIDs in src/app.js. Before launching your app, change these CIDs to the
    production CIDs that you want to display in the leaderboard. 
3. **Run the Development Server**:
    ```
    npm install
    npm start
    ```

  After executing the above command, the react app should be running in development mode. Navigate to the specified local server address in your browser to view the website.
    
  Learn more by visiting the [Leto docs](https://letodev.gitbook.io/getting-started/)!
