import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserWorkingHoursComponent} from "./Components/user-working-hours/user-working-hours.component";


const routes: Routes = [
  {
    path: '',
    component: UserWorkingHoursComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
