export enum CardStatus {
  Up = 'UP',
  Down = 'DOWN'
}

export interface Card {
  status: CardStatus;
}
