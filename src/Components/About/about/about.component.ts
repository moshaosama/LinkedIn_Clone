import { Component, inject } from '@angular/core';
import { AboutService } from '../../../Services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutService = inject(AboutService);
  changeActiveFormAbout() {
    this.aboutService.chnageActiveFromAbout();
  }

  get AboutMessages() {
    return this.aboutService.AboutMessages();
  }
}
