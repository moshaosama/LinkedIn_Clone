import { Component, inject, signal } from '@angular/core';
import { ExperienceService } from '../../../Services/experience.service';
import { InputsComponent } from '../../Froms/Inputs/inputs.component';

@Component({
  selector: 'app-add-experience',
  standalone: true,
  imports: [InputsComponent],
  templateUrl: './add-experience.component.html',
  styleUrl: './add-experience.component.css',
})
export class AddExperienceComponent {
  experienceService = inject(ExperienceService);
  AcitveInputSkills = signal(false);

  changeActiveAddExperience() {
    this.experienceService.changeActiveExperience();
  }
  Options_Employment_type = [
    {
      name: 'Please Select',
    },
    {
      name: 'Full Time',
    },
    {
      name: 'Part Time',
    },
    {
      name: 'Self-employed',
    },
    {
      name: 'FreeLance',
    },
    {
      name: 'Contract',
    },
    {
      name: 'internShip',
    },
    {
      name: 'Apprenticeship',
    },
    {
      name: 'Seasonal',
    },
  ];

  months = [
    { id: 1, name: 'January', days: 31 },
    { id: 2, name: 'February', days: 28 },
    { id: 3, name: 'March', days: 31 },
    { id: 4, name: 'April', days: 30 },
    { id: 5, name: 'May', days: 31 },
    { id: 6, name: 'June', days: 30 },
    { id: 7, name: 'July', days: 31 },
    { id: 8, name: 'August', days: 31 },
    { id: 9, name: 'September', days: 30 },
    { id: 10, name: 'October', days: 31 },
    { id: 11, name: 'November', days: 30 },
    { id: 12, name: 'December', days: 31 },
  ];
  Location_Type = [
    {
      name: 'Please Select',
    },
    {
      name: 'on-site',
    },
    {
      name: 'hyprid',
    },
    {
      name: 'remote',
    },
  ];
}
