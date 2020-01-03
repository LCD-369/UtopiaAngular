import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogincardComponent} from './logincard/logincard.component';
// import { UserpageComponent } from './userpage/userpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { ProfilemodalComponent } from './profilemodal/profilemodal.component';

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login', component:LogincardComponent},
  {path:'register', component:RegistrationComponent},
  {path:'profile', component:ProfilemodalComponent},
  {path:'home', component:AppComponent},
  // {path:'user/:id', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
