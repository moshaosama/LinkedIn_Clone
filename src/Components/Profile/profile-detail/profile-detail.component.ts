import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css',
})
export class ProfileDetailComponent {
  Router = inject(Router);

  get RouterPath(): boolean {
    if (this.Router.url === '/profile') {
      return true;
    } else {
      return false;
    }
  }
}
