import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  { path: "", pathMatch:'full',  component: HomeComponent },
  { path: "user/:id", component: UserComponent },
  { path: "newuser", component: UserComponent },
  { path: "updateuser/:id", component: UserComponent },
  { path: "**", redirectTo: 'home' },
];
