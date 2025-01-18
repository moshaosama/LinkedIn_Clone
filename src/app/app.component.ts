import { Component } from '@angular/core';

import { SignUpComponent } from '../Pages/sign-up/sign-up.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'linkedIn_Clone';
}
