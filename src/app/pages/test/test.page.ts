import { Component, OnInit } from '@angular/core';
import { Games } from 'api/collections';
import { Game } from 'api/models';
import { Observable } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  games: Observable<Game>[];
  gamesSubscription: Subscription;

  constructor() { }

  ngOnInit() {

  }

  add(){
    Meteor.call('addGame');
  }

}
