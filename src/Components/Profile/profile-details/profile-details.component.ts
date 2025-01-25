import { Component, inject } from '@angular/core';
import { ProfileCardDetailComponent } from '../profile-card/profile-Card-detail/profile-detail.component';
import { AboutComponent } from '../../About/about/about.component';
import { ExperienceComponent } from '../../experience/experience.component';
import { AboutService } from '../../../Services/about.service';
import { ExperienceService } from '../../../Services/experience.service';
import { AddAboutComponent } from '../../About/add-about/add-about.component';
import { AddExperienceComponent } from '../../experience/add-experience/add-experience.component';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [
    ProfileCardDetailComponent,
    AboutComponent,
    ExperienceComponent,
    AddAboutComponent,
    AddExperienceComponent,
  ],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css',
})
export class ProfileDetailsComponent {
  aboutService = inject(AboutService);
  experienceService = inject(ExperienceService);
  Url =
    'https://drive.google.com/file/d/1ktaC9tfO3FgInH0G5OjJ0QzY99KswqAW/edit';

  Btns = [
    {
      Title: 'Open to',
    },
    {
      Title: 'Add profile section',
    },
    {
      Title: 'enhance profile',
    },
    {
      Title: 'resources',
    },
  ];

  get activeFromAbout() {
    return this.aboutService.activeFormAbout();
  }

  get ActiveExperience() {
    return this.experienceService.ActiveExperience();
  }

  openPortfolio() {
    window.open(this.Url, '_blank', `width=800px,height=800px}`);
  }
}
