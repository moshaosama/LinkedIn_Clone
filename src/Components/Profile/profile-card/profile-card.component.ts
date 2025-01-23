import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileDetailComponent } from '../profile-detail/profile-detail.component';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [RouterModule, ProfileDetailComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
  Details = [
    {
      Title: 'Profile Viewers',
      Number: 53,
    },
    {
      Title: 'Post Permissions',
      Number: 1,
    },
  ];
}
