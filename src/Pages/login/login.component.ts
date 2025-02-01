import { Component } from '@angular/core';
import { InputsComponent } from "../../Components/Froms/Inputs/inputs.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
