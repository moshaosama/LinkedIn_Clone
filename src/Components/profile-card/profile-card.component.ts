import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
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
