import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css',
})
export class ProfileDetailComponent {
  @Input() Height!: string;
  @Input() heightImageProfile!: string;
  @Input() weightImageProfile!: string;
  @Input() fontSizeName!: string;
  @Input() fontSizeJop!: string;
  @Input() marginY!: string;
}
