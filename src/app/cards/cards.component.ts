import { Component, Input, OnInit } from '@angular/core';
import { Card, CardStatus } from './models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() count: number = 0;

  cards: Card[] = [];

  CardStatus = CardStatus;

  constructor() { }

  ngOnInit(): void {
    this.cards = Array.apply(null, Array(this.count)).map(() => ({
      status: CardStatus.Down
    }));
  }

  flipCard(index: number): void {
    this.cards.forEach(card => card.status = CardStatus.Down);
    this.cards[index].status = CardStatus.Up;
  }

}
