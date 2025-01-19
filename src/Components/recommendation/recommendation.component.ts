import { Component } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { GameCardComponent } from "../gameCard/gameCard.component";

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [PersonComponent, GameCardComponent],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css',
})
export class RecommendationComponent {}
