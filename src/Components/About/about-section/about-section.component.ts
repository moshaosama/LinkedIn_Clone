import { Component, inject } from '@angular/core';
import { AboutService } from '../../../Services/about.service';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {
  aboutService = inject(AboutService);

  changeActiveFormAbout() {
    this.aboutService.chnageActiveFromAbout();
  }

  get AboutMessages() {
    return this.aboutService.AboutMessages();
  }
}
