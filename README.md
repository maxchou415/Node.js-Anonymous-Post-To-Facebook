#Getting Started

## Installation
1. Install npm
2. Run ``npm install package.json``

## Need
You need creat a application on [Facebook Developer Page](https://developers.facebook.com/apps/)
and use that application get a Access Token on [Graph Api Expolor](https://developers.facebook.com/tools/explorer/).

# How to use
Insert your Accrss Token from Graph Api Expolor in ``app.js:40``<br />
Insert your Facebook Page Name in<br />

- app.js:27
- app.js:37
- view/index.ejs:11
- view/index.ejs:30
- view/index.ejs:54




Please Run ``node app`` or ``node app.js`` in Terminal, If all done!

# Notice
Server default run on localhost, Port 8080.<br />
If you want change IP Address or Port, you can edit in  ``app.js:20``.<br />
If you want run on openshift, please read [Offical documentation](https://developers.openshift.com/en/node-js-overview.html) and change ``app.js`` to ``server.js``. 

# Demo
I will build on Openshift!
