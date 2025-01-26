import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

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
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  httpClient = inject(HttpClient);
  profileData = signal<profileData[]>([]);
  constructor() {
    this.httpClient
      .get<profileData[]>('http://localhost:8080/Profiles')
      .subscribe({
        next: (val) => this.profileData.set(val),
      });
  }
}
