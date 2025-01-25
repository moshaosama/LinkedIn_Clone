import { Component } from '@angular/core';
import { ProfileCardComponent } from "../../Components/Profile/profile-card/profile-card.component";
import { AddPostComponent } from "../../Components/post/add-post/add-post.component";
import { RecommendationComponent } from "../../Components/recommendation/recommendation.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProfileCardComponent,
    AddPostComponent,
    RecommendationComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
