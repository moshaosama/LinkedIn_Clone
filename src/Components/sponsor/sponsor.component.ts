import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [],
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.css',
})
export class SponsorComponent {
  links = [
    {
      name: 'About',
    },
    {
      name: 'Accessibility',
    },
    {
      name: 'Help Center',
    },
    {
      name: 'Privacy & Terms ',
    },
    {
      name: 'Ad Choices',
    },
    {
      name: 'Advertising',
    },
    {
      name: 'Business Services ',
    },
    {
      name: 'Get the LinkedIn app',
    },
    {
      name: 'More',
    },
  ];
}
