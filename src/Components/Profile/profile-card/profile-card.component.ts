import { Component, effect, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileService } from '../../../Services/profile.service';
import { ProfileCardDetailComponent } from './profile-Card-detail/profile-detail.component';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [RouterModule, ProfileCardDetailComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
  profileService = inject(ProfileService);

  Details = [
    {
      Title: 'Profile Viewers',
      Number: 1,
    },
    {
      Title: 'Post Permissions',
      Number: 1,
    },
  ];
}
