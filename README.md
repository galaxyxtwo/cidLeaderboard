# communityStats

## Overview
Communities need analytics as much as developers. CommunityStats is a simple tool to share analytics stats from [Leto](https://leto.gg/) with your community. Easily showcase activity data for NFTs, webpages, and more with a public stats page (in descending order). Feel free to spice up this app with your own custom colors, branding, and design!

<img width="1281" alt="Screenshot 2023-10-16 at 12 25 50 PM" src="https://github.com/galaxyxtwo/communityStats/assets/90220293/56b26e1d-c191-4416-b691-68f8c8e76d02">

## Background

communityStats uses the [Leto Analytics API](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api) to display a view count for each CID. To make it easy, steps are included to host the communityStats page on IPFS hosting provider, Spheron. This is an awesome IPFS hosting provider, but technically communityStats can be hosted on any cloud provider.

Before uploading to any hosting provider, simply change out the hardcoded CIDs currently in the code to your CIDs and the stats page is ready to go!

> **_Note_**: Only IPFS CIDs that have been accessed through the [Leto IPFS Gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api) will return a view count, called "numberAccessed.


## Getting Started
Follow the steps below to set up and run the commuityStats React App in development mode:

1. **Clone the Repository**:
  
    ```
    git clone [https://github.com/galaxyxtwo/communityStats]
    cd [communityStats]
2. **Add your CIDs**: 

    This app has an example list of IPFS CIDs in src/app.js. Before launching your app, change these CIDs to the
    production CIDs that you want to display in the leaderboard. 
3. **Run the Development Server**:
    ```
    npm install
    npm start
    ```

  After executing the above command, the react app should be running in development mode. Navigate to the specified local server address in your browser to view the website.
    
  Learn more about Leto by visiting the [Leto docs](https://letodev.gitbook.io/getting-started/)!
