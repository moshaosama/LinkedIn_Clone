import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";

export interface profileData {
  id: number;
  userName: string;
  title: string;
  viewers: number;
  about: {
    id: number;
    title: string;
  };
  post: {
    comments: Array<string>;
    id: number;
    likes: number;
    title: string;
    userName: string;
  }[];
  experience: {
    id: number;
    employmentType: string;
    location: string;
    title: string;
    locationType: string;
    startData: string;
    company: string;
    endData: string;
  }[];
  education: {
    id: number;
    title: string;
    startDate: string;
    department: string;
    degree: string;
    endDate: string;
  };
  language: {
    id: number;
    language: string;
    proficiency: string;
  }[];
  password: string;
  email: string;
}

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  httpClient = inject(HttpClient);
  profileData = signal<profileData[]>([]);
  profilDataasObject = signal<profileData | null>(null);
  profiles = signal<profileData[]>([]);
  loginProfile = JSON.parse(window.localStorage.getItem("Profile")!);
  Viewrs = signal(0);

  constructor() {
    this.loginProfile &&
      this.httpClient
        .get<profileData[]>(
          `http://localhost:8080/profileArray/${this.loginProfile.id}`
        ) // This is Profile Details like UserName and Jops and other
        .subscribe({
          next: (val) => {
            this.profileData.set(val);
          },
        });

    this.loginProfile &&
      this.httpClient
        .get<profileData>(
          `http://localhost:8080/profile/${this.loginProfile.id}`
        )
        .subscribe({
          next: (val) => {
            this.profilDataasObject.set(val);
            this.Viewrs.set(val.viewers);
          },
        });

    this.httpClient
      .get<profileData[]>("http://localhost:8080/Profiles")
      .subscribe({
        next: (val) => this.profiles.set(val),
      });
  }

  editViewers(newView: number) {
    this.httpClient
      .put(`http://localhost:8080/editViewers/1/${newView}`, {})
      .subscribe({
        next: (val) => console.log(val),
      });
  }
}
