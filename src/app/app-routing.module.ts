import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MessagesComponent } from './messages/messages.component';
import { DateComponent } from './date/date.component';
import { FormsComponent } from './forms/forms.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:"",component:SidenavComponent,
    children:[
      {
        path:'',component:DashboardComponent
      },
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'user',component:UserComponent
      },
      {
        path:'messages',component:MessagesComponent
      },
      {
        path:'date',component:DateComponent
      },
      {
        path:'forms',component:FormsComponent
      },
      {
        path:'profile',component:ProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
