import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { NoveltiesComponent } from './novelties/novelties.component';
import { MembersComponent } from './members/members.component';
import { MediasComponent } from './medias/medias.component';
import { routing } from "./app.routing";
import { DropdownDirective } from './dropdown.directive';
import { NoveltyListComponent } from './novelties/novelty-list/novelty-list.component';
import { NoveltyEditComponent } from './novelties/novelty-edit/novelty-edit.component';
import { NoveltyDetailComponent } from './novelties/novelty-detail/novelty-detail.component';
import { NoveltyStartComponent } from './novelties/novelty-start.component';
import { NoveltyService} from './novelties/novelty.service';
import { NoveltyItemComponent } from './novelties/novelty-list/novelty-item.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';

import { fakeBackendProvider } from './fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AlertService} from './alert.service';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

import { AuthGuard } from './auth.guard';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBmorOkeMMSCjBVf-jxRDNg0WotMrJFXpg',
  authDomain: 'fc-star.firebaseapp.com',
  databaseURL: 'https://fc-star.firebaseio.com',
  storageBucket: 'fc-star.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoveltiesComponent,
    MembersComponent,
    MediasComponent,
    DropdownDirective,
    NoveltyListComponent,
    NoveltyEditComponent,
    NoveltyDetailComponent,
    NoveltyStartComponent,
    NoveltyItemComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [
    NoveltyService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

        // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { fakeBackendProvider } from './fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AlertService} from './alert.service';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

import { AuthGuard } from './auth.guard';
import { routing } from './app.routing';

import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/