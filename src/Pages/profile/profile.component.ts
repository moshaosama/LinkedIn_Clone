import { Component } from '@angular/core';
import { RecommendationComponent } from '../../Components/recommendation/recommendation.component';
import { ProfileDetailComponent } from '../../Components/Profile/profile-detail/profile-detail.component';

import { CommonModule } from '@angular/common';
import { AddAboutComponent } from '../../Components/About/add-about/add-about.component';
import { AboutSectionComponent } from '../../Components/About/about-section/about-section.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RecommendationComponent,
    ProfileDetailComponent,
    CommonModule,
    AboutSectionComponent,
    AddAboutComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  Url =
    'https://drive.google.com/file/d/1ktaC9tfO3FgInH0G5OjJ0QzY99KswqAW/edit';

  openPortfolio() {
    window.open(this.Url, '_blank', `width=800px,height=800px}`);
  }

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
}
