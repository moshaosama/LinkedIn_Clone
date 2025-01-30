import { Component, inject } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css',
})
export class LanguageComponent {
  profileService = inject(ProfileService);

  get ProfileData() {
    return this.profileService.profileData();
  }

}
