import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  ActiveExperience = signal(true);
  ActiveCreatePosition = signal(false);

  changeActiveExperience() {
    this.ActiveExperience.set(!this.ActiveExperience());
  }
  setActiveCreatePosition(): void {
    this.ActiveCreatePosition.set(!this.ActiveCreatePosition());
  }
}
