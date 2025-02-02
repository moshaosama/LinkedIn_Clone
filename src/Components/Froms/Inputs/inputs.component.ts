import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent {
  @Input({ required: true }) Label!: string;
  @Input({ required: true }) Type!: string;
  @Input() Height!: string;
}
