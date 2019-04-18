import { Games } from './collections/games';

Meteor.publish('games', function() {
   return Games.collection.find();
});
