import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProfileService } from '../../../../Services/profile.service';

@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css',
})
export class ProfileCardDetailComponent {
  Router = inject(Router);
  profileSerice = inject(ProfileService);

  get RouterPath(): boolean {
    if (this.Router.url === '/profile') {
      return true;
    } else {
      return false;
    }
  }

  get ProfileData() {
    return this.profileSerice.profileData();
  }
}
