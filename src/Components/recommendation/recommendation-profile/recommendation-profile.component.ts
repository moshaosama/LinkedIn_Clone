import { Component } from '@angular/core';
import { SponsorComponent } from "../../sponsor/sponsor.component";
import { PersonComponent } from "../recommendationHomePage/person/person.component";

@Component({
  selector: 'app-recommendation-profile',
  standalone: true,
  imports: [SponsorComponent, PersonComponent],
  templateUrl: './recommendation-profile.component.html',
  styleUrl: './recommendation-profile.component.css'
})
export class RecommendationProfileComponent {

}
