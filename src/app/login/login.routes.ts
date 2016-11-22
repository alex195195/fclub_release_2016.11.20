import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../auth.guard';

const LOG_ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

/*    // otherwise redirect to home
    { path: '**', redirectTo: '' }*/
];
/*
export const routes = RouterModule.forRoot(LOG_ROUTES);*/