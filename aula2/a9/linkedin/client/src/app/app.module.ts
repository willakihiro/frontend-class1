import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';
import { AddsComponent } from './adds/adds.component';
import { ProfileViewComponent } from './profile/view/profile.view.component';
import { ProfileUpdateComponent } from './profile/form/profile.update.component';
import { LoginComponent } from './login/login.component';
import { ProfileAddComponent } from './profile/form/profile.add.component';
import { VacancyComponent } from './vacancy/vacancy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PhotoComponent,
    AddsComponent,
    ProfileViewComponent,
    ProfileUpdateComponent,
    LoginComponent,
    ProfileAddComponent,
    VacancyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }