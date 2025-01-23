import { Component } from '@angular/core';
import { RecommendationComponent } from '../../Components/recommendation/recommendation.component';
import { ProfileDetailComponent } from "../../Components/Profile/profile-detail/profile-detail.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RecommendationComponent, ProfileDetailComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
