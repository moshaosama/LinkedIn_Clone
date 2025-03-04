import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  linksNavba = [
    {
      Title: 'Home',
      href: 'HomePage',
    },
    {
      Title: 'My Network',
    },
    {
      Title: 'Jops',
    },
    {
      Title: 'Messaging',
    },
    {
      Title: 'Notifications',
    },
  ];
}
