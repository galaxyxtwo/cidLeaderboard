# cidLeaderboard
Display a leaderboard of CIDs in descending order based on view count (numberAccessed).


<img width="656" alt="Screenshot 2023-09-26 at 8 36 22 AM" src="https://github.com/galaxyxtwo/cidLeaderboard/assets/90220293/eff91783-6d2d-4e22-9b97-241e166adf26">


> **_NOTE:_** This app has an example list of CIDs in src/app.js. Before launching the app, change these CIDs to the production CIDs that you want to display in the leaderboard. Cid Leaderboard uses the Leto Analytics API to return this data. Any CID retrieved through the Leto IPFS Gateway will return a view count, called "numberAccessed, via the Analytics API".


# Getting Started
Follow the steps below to set up and run the cid-leaderboard React App in development mode:

1. **Clone the Repository**:
  
    ```
    git clone [https://github.com/galaxyxtwo/cidLeaderboard]
    cd [cid-leaderboard]
    ```



2. **Run the Development Server**:
    ```
    npm install
    npm start
    ```

After executing the above command, the react app should be running in development mode. Navigate to the specified local server address in your browser to view the website.
