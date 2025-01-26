import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExperienceService } from '../../Services/experience.service';
import { ProfileService } from '../../Services/profile.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experienceService = inject(ExperienceService);
  profileSerice = inject(ProfileService);

  get ProfileData() {
    return this.profileSerice.profileData();
  }

  get ActiveCreatePosition() {
    return this.experienceService.ActiveCreatePosition();
  }

  setActiveCreatePosition(): void {
    this.experienceService.setActiveCreatePosition();
  }

  changeActiveAddExperience() {
    this.experienceService.changeActiveExperience();
  }
  onCLickBtns(chnage: () => any) {
    chnage();
    this.setActiveCreatePosition();
  }
}
