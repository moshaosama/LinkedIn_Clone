import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { profileData } from './profile.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  httpClient = inject(HttpClient);
  ProfileByEmail = signal<profileData | null>(null);

  Login(email: string) {
    this.httpClient
      .get<profileData>(`http://localhost:8080/profile/email/${email}`)
      .subscribe({
        next: (val) => {
          this.ProfileByEmail.set(val);
          window.localStorage.setItem('Profile', JSON.stringify(val));
        },
      });
  }
}
