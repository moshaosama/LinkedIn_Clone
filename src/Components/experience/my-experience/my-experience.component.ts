import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../../../Services/profile.service';

@Component({
  selector: 'app-my-experience',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './my-experience.component.html',
  styleUrl: './my-experience.component.css',
})
export class MyExperienceComponent {
  profileService = inject(ProfileService);

  get ProfileData() {
    return this.profileService.profileData();
  }
}
