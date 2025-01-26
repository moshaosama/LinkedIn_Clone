import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../Services/profile.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  profileSerice = inject(ProfileService);

  get ProfileData() {
    return this.profileSerice.profileData();
  }
}
