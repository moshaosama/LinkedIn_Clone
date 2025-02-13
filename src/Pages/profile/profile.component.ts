import { Component, inject } from '@angular/core';

import { AboutService } from '../../Services/about.service';
import { ExperienceService } from '../../Services/experience.service';
import { RouterOutlet } from '@angular/router';
import { ProfileService } from '../../Services/profile.service';
import { RecommendationProfileComponent } from '../../Components/recommendation/recommendation-profile/recommendation-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, RecommendationProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  experienceService = inject(ExperienceService);
  profileService = inject(ProfileService);
  aboutService = inject(AboutService);

  ngOnInit() {
    this.profileService.editViewers(4);
  }

  ////////////
  // getter
  get activeFromAbout() {
    return this.aboutService.activeFormAbout();
  }

  get ActiveExperience() {
    return this.experienceService.ActiveExperience();
  }

  get ProfileData() {
    return this.profileService.profileData();
  }

  //////////
  // Methods

  changeActiveExperience() {
    this.experienceService.changeActiveExperience();
  }

  onClick(name: string) {
    console.log(name); // This will log the data received from the child
  }
}
