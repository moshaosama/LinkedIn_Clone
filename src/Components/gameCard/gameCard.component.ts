import { Component } from '@angular/core';
import { GameComponent } from "./game/game.component";

@Component({
  selector: 'app-gameCard',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './gameCard.component.html',
  styleUrl: './gameCard.component.css',
})
export class GameCardComponent {}
