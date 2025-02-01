import { HttpClient } from '@angular/common/http';
import { AfterViewInit, inject, Injectable, signal } from '@angular/core';

interface profileData {
  id: number;
  userName: string;
  title: string;
  about: {
    id: number;
    title: string;
  };
  Experience: {
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
  providedIn: 'root',
})
export class ProfileService {
  httpClient = inject(HttpClient);
  profileData = signal<profileData[]>([]);
  profilDataasObject = signal<profileData | null>(null);
  profiles = signal<profileData[]>([]);
  constructor() {
    this.httpClient
      .get<profileData[]>('http://localhost:8080/profileArray/1') // This is Profile Details like UserName and Jops and other
      .subscribe({
        next: (val) => {
          this.profileData.set(val);
        },
      });

    this.httpClient
      .get<profileData>('http://localhost:8080/profile/2')
      .subscribe({
        next: (val) => {
          this.profilDataasObject.set(val);
          console.log(val.userName);
        },
      });

    this.httpClient
      .get<profileData[]>('http://localhost:8080/Profiles')
      .subscribe({
        next: (val) => this.profiles.set(val),
      });
  }
}
