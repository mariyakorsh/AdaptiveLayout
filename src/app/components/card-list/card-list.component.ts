import { Component, OnInit } from '@angular/core';
import { cards } from '../../../data';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cards = cards;
  constructor() { }

  ngOnInit() {
  }

}
