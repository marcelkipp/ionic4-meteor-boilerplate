import { MongoObservable } from 'meteor-rxjs';
import { Game } from '../models';

export const Games = new MongoObservable.Collection<Game>('games');