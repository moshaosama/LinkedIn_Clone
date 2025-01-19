import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  @Input({ required: true }) gameName!: string;
  @Input({ required: true }) hrefImage!: string;
  @Input({ required: true }) Bio!: string;
}
