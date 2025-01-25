import { Component, inject } from '@angular/core';
import { AboutService } from '../../../Services/about.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-about',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-about.component.html',
  styleUrl: './add-about.component.css',
})
export class AddAboutComponent {
  aboutService = inject(AboutService);

  form = new FormGroup({
    About: new FormControl(''),
  });

  createAbout() {
    this.aboutService.createAbout(this.form.controls.About.value!);
  }

  get activeFromAbout() {
    return this.aboutService.activeFormAbout();
  }
  public changeActiveFormAbout() {
    this.aboutService.chnageActiveFromAbout();
  }
}
