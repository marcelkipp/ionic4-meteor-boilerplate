# Blank Ionic4 + Meteor ☄️ Boilerplate

This is a blank Ionic4 + Meteor Boilerplate that I created based on this (https://angular-meteor.com/tutorials/whatsapp2/ionic/setup)
Tutorial. The Boilerplate includes one simple collection 'games' and an button to ad an document to the database. This is only
for testing the connection to the server.

Currently only tested on Mac OSX. Feel free to clone and make changes to the boilerplate. ☄️

### Start the boilerplate
For me it worked to simply run the following commands:

```
$ git clone https://github.com/marcelkipp/ionic4-meteor-boilerplate.git
$ cd ionic4-meteor-boilerplate
$ npm install
$ meteor-client bundle -s api

In a new terminal - run the server:
$ cd api
$ meteor run

Run the client:
$ ionic serve
```

Then browse to http://localhost:8100/test
