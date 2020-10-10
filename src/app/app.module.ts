import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UsersListComponent } from './component/users-list/users-list.component';
import { UserAddComponent } from './component/user-add/user-add.component';
import { CarAddComponent } from './component/car-add/car-add.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { CarsListComponent } from './component/cars-list/cars-list.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    UsersListComponent,
    UserAddComponent,
    CarAddComponent,
    UserDetailComponent,
    CarsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
