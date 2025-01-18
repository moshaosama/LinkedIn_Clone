import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { ProfileCardComponent } from '../../Components/profile-card/profile-card.component';
import { AddPostComponent } from '../../Components/add-post/add-post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileCardComponent, AddPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
