import { Component, OnInit } from '@angular/core';
import { Games } from 'api/collections';
import { Game } from 'api/models';
import { Observable, Subscription } from 'rxjs';
import { MeteorObservable, zoneOperator } from 'meteor-rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  games: Observable<any>;
  gamesSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.gamesSubscription = MeteorObservable.subscribe('games').subscribe(
        () => {
          MeteorObservable.autorun().subscribe(
              () => {
                this.games = Games.find().pipe(zoneOperator());
              }
          );
        }
    );
  }

  add() {
    MeteorObservable.call('addGame').subscribe((response) => {
      // Handle success and response from server!
    }, (err) => {
      // Handle error
    });
  }

}
