import { Component, inject } from '@angular/core';

import { AboutService } from '../../Services/about.service';
import { ExperienceService } from '../../Services/experience.service';
import { RecommendationComponent } from '../../Components/recommendation/recommendation.component';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from '../../Components/experience/experience.component';
import { AddAboutComponent } from '../../Components/About/add-about/add-about.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterOutlet,
    RecommendationComponent,
    ExperienceComponent,
    AddAboutComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  experienceService = inject(ExperienceService);

  aboutService = inject(AboutService);

  ////////////
  // getter
  get activeFromAbout() {
    return this.aboutService.activeFormAbout();
  }

  get ActiveExperience() {
    return this.experienceService.ActiveExperience();
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
