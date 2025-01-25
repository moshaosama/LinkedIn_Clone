import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileCardDetailComponent } from './profile-Card-detail/profile-detail.component';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [RouterModule, ProfileCardDetailComponent],
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
