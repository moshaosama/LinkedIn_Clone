import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginService = inject(LoginService);
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onClick() {
    this.loginService.Login(this.form.controls.email.value!);
  }
}
