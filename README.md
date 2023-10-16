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

  ## Hosting on IPFS

  There are many providers that you can use to host this app. To host the app on IPFS, let's use industry provider, Spheron.

  1. Login to Spheron. In the dashboard, choose "Static Website" and select "New Project".
  <img width="847" alt="Spheron1" src="https://github.com/galaxyxtwo/communityStats/assets/90220293/e1c644a1-93df-4c77-9437-606811dd58a4">
  
  2. Connect your Github account and then choose the repo for communityStats. Select "IPFS" as the protocol.

  <img width="1160" alt="spheron2" src="https://github.com/galaxyxtwo/communityStats/assets/90220293/89866d40-e8ef-4be5-a26e-cc6d0e6425d1">

  3. See the configuration settings below to launch the app. Once ready, click "Deploy". Spheron will build the app and launch it on IPFS. If needed, choose a domain for this app and setup through Spheron.
 <img width="762" alt="spheron3" src="https://github.com/galaxyxtwo/communityStats/assets/90220293/493128c5-1682-4f1c-9c79-134e6e12b458">

    
  Learn more about Leto by visiting the [Leto docs](https://letodev.gitbook.io/getting-started/)!
