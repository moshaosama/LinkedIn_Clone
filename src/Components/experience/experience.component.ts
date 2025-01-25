import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExperienceService } from '../../Services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experienceService = inject(ExperienceService);

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
