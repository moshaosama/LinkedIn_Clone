import { Routes } from '@angular/router';
import { SignUpComponent } from '../Pages/sign-up/sign-up.component';
import { HomeComponent } from '../Pages/home/home.component';
import { ProfileComponent } from '../Pages/profile/profile.component';
import { ProfileDetailsComponent } from '../Components/Profile/profile-details/profile-details.component';
import { MyExperienceComponent } from '../Components/experience/my-experience/my-experience.component';
import { LoginComponent } from '../Pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
  },
  {
    path: 'signin',
    component: LoginComponent,
  },
  {
    path: 'HomePage',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileDetailsComponent,
      },
      {
        path: 'details/experience',
        component: MyExperienceComponent,
      },
    ],
  },
];
