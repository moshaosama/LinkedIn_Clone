import { Component, inject } from '@angular/core';
import { AboutService } from '../../../Services/about.service';
import { ProfileService } from '../../../Services/profile.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutService = inject(AboutService);

  profileSerice = inject(ProfileService);

  
  get ProfileData() {
    return this.profileSerice.profileData();
  }
  changeActiveFormAbout() {
    this.aboutService.chnageActiveFromAbout();
  }

  get AboutMessages() {
    return this.aboutService.AboutMessages();
  }
}
