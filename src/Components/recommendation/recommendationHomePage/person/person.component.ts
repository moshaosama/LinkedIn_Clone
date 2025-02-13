import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../../Services/profile.service';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  profilService = inject(ProfileService);

  get Profiles() {
    return this.profilService.profiles();
  }

  constructor() {
    console.log(this.Profiles);
  }
}
