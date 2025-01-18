import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { ProfileCardComponent } from '../../Components/profile-card/profile-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
