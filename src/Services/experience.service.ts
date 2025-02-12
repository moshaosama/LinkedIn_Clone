import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ExperienceService {
  ActiveExperience = signal(false);
  ActiveCreatePosition = signal(false);
  HTTPClient = inject(HttpClient);
  User = JSON.parse(window.localStorage.getItem("Profile")!);

  changeActiveExperience() {
    this.ActiveExperience.set(!this.ActiveExperience());
  }
  setActiveCreatePosition(): void {
    this.ActiveCreatePosition.set(!this.ActiveCreatePosition());
  }

  createExperience(
    title: string,
    employmentType: string,
    company: string,
    startData: string,
    endData: string,
    location: string,
    locationType: string
  ) {
    this.HTTPClient.post("http://localhost:8080/createExperience", {
      title,
      employmentType,
      company,
      startData,
      endData,
      location,
      locationType,
      profile: {
        id: this.User?.id,
      },
    }).subscribe({
      next: (val) => console.log(val),
      error: (err) => console.log(err),
    });
  }
}
