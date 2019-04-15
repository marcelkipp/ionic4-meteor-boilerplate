import {Game} from '../models';
import {Games} from '../collections/games';

Meteor.methods({


    addGame():void {
        Games.insert({
            name: "spiel_1",
            player: 3,
        });
    }


});