import { Games } from '../collections/games';

Meteor.methods({

    addGame(): void {
        Games.insert({
            name: 'spiel_1',
            player: Math.floor((Math.random() * 1000))
        });
    }

});
