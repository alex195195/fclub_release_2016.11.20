import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { MediasComponent } from './medias/medias.component';
import { NoveltiesComponent } from './novelties/novelties.component';
import { NOVELTY_ROUTES } from "./novelties/novelty.routes"
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
/*import { LOG_ROUTES} from './login/login.routes';*/
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path: 'members', component: MembersComponent},
  { path: 'novelties', component: NoveltiesComponent, children: NOVELTY_ROUTES},
  { path: 'medias', component: MediasComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
