import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserWorkingHoursComponent} from './Components/user-working-hours/user-working-hours.component';
import {MatTabsModule} from '@angular/material/tabs';
import {UserService} from "./Services/user.service";
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    UserWorkingHoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule
  ],
  exports: [MatTabsModule],
  providers: [MatTabsModule, UserService, HttpClient, MatTableModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
