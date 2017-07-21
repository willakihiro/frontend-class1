import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileViewComponent } from './profile/view/profile.view.component';
import { ProfileUpdateComponent } from './profile/form/profile.update.component';
import { LoginComponent } from './login/login.component';
import { ProfileAddComponent } from './profile/form/profile.add.component';

const routes: Routes = [
    { path:'', redirectTo: 'login', pathMatch:'full' },
    { path:'login', component: LoginComponent },
    { path:'home/:id', component: HomeComponent },
    { path:'profile-view/:id', component: ProfileViewComponent },
    { path:'profile-update/:id', component: ProfileUpdateComponent },
    { path:'profile-add', component: ProfileAddComponent },
    { path:'profile-add/:id', component: ProfileAddComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);