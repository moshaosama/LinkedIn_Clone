import { Component } from '@angular/core';

import { SignUpComponent } from '../Pages/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'linkedIn_Clone';
}
