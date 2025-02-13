import {
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { ExperienceService } from '../../../Services/experience.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputsComponent } from '../../Froms/inputs/inputs.component';

@Component({
  selector: 'app-add-experience',
  standalone: true,
  imports: [InputsComponent, ReactiveFormsModule],
  templateUrl: './add-experience.component.html',
  styleUrl: './add-experience.component.css',
})
export class AddExperienceComponent {
  experienceService = inject(ExperienceService);
  AcitveInputSkills = signal(false);
  @ViewChild('Employment_type_Value') employment_type_Value!: ElementRef;
  @ViewChild('Start_Date_Value') start_Date_Value!: ElementRef;
  @ViewChild('End_Date_Value') end_Date_Value!: ElementRef;
  @ViewChild('Location_type_Value') location_type_Value!: ElementRef;

  // getSelectName() {
  //   console.log(this.optionName.nativeElement.value);
  // }

  form = new FormGroup({
    title: new FormControl(''),
    location: new FormControl(''),
    company: new FormControl(''),
  });

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

  createExperience = () => {
    this.experienceService.createExperience(
      this.form.controls.title.value!,
      this.employment_type_Value.nativeElement.value,
      this.form.controls.company.value!,
      this.start_Date_Value.nativeElement.value,
      this.end_Date_Value.nativeElement.value,
      this.form.controls.location.value!,
      this.location_type_Value.nativeElement.value
    );

    this.experienceService.ActiveExperience.set(false);
    window.location.reload();
  };
}
