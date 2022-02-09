# Slack Logging POC
  This is the third task from the NodeJS list to have a utility that specifically communicate with a source API and keeps logging the data at specific intervals. We have used setInterval for that purpose to demonstrate the continuous hitting to the API. In Ideal world although its good idea to constantly schedule and monitor such things with help of some queueing mechanism like Bull With Redis.

  For the purposes of the task most of the things are for demonstration purpose and estabilishes the Proof of concept.
## Dev Environment setup

 * Clone the repository
```
git clone https://github.com/shubham43MP/slack-logging-poc.git
```
 * Go to project directory terminal 
```
cd slack-logging-poc
```
 * Install the dependencies:
```
yarn OR npm install
```
 * Create a .env file in the root directory and have a valid slack token that corresponds to some slack channel in real. Data in the .env file would look something like:
```
SLACK_TOKEN=<Some valid slack token>
```

 * Start the server in dev mode
```
yarn dev OR npm run dev
```
 * The server starts at `localhost:8080`. Dont move forward untill you successfully start the development server

## How it works
 *  As soon as the server gets up at `localhost:8080`, the setInterval keeps hitting the movieApiFaker to get the latest movie data every 10 seconds
 *  movieApiFaker is a function that returns a promise which resolves into some new movie data. We can then throw this data wherever required like and wherever required like 'Slack', 'UI'(through socket), 'Database' and 'Logging systems'
 * For the demonstration purposes we have only used slack message publication and logging.