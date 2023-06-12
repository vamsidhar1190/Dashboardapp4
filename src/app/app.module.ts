import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule } from 'primeng/calendar';
import { NgApexchartsModule } from "ng-apexcharts";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import {HttpClientModule }from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { MessagesComponent } from './messages/messages.component';
import { DateComponent } from './date/date.component';
import { FormsComponent } from './forms/forms.component';
import { ProfileComponent } from './profile/profile.component'




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    UserComponent,
    MessagesComponent,
    DateComponent,
    FormsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    NgApexchartsModule,
    ChartModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
