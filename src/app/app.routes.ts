import { Routes } from '@angular/router';
import { SignUpComponent } from '../Pages/sign-up/sign-up.component';
import { HomeComponent } from '../Pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
  },
  {
    path: 'HomePage',
    component: HomeComponent,
  },
  //   {
  //     path: 'Home',
  //   },
  //   {
  //     path: 'myNetwork',
  //   },
  //   {
  //     path: 'Jops',
  //   },
  //   {
  //     path: 'Messaging',
  //   },
  //   {
  //     path: 'Notifications',
  //   },
];
