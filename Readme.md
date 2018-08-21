# serverless-video-chat

Push Notification Server that uses Expo Api to deliver notifications. Currently developed for serverless architecture and deployed to webtask.io

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To be able to use and deploy project you need to install __Node.js__ and __npm__ (https://nodejs.org/en/download/). 

Once you have installed __Node.js__ and __npm__, you will need to globally install __webtask.io__ to be able to deploy and test project using serverless architecture. 

```
npm install wt-cli -g
```

### Installing

A step by step series of examples that tell you how to get a development env running

Create a Pusher account (https://pusher.com/).

Setup your secrets.txt file with you pusher app data.

After cloning repo navigate to project folder and run the following command.

```
wt create video-chat.js --secrets-file secrets.txt
```
If it is the first time you are running this command you will be redirected to an authentication flow on your browser. Just follow the instructions.
After the authentication flow is down, the command executed will output a url where you will be able to test you deployed solution.