import { Routes } from '@angular/router';
import { AuthRegister } from './components/auth-register/auth-register';
import { AuthLogin } from './components/auth-login/auth-login';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthLogin
  },
  {
    path: 'register',
    component: AuthRegister
  },
  {
    path: 'home',
    component: Home
  }
];
