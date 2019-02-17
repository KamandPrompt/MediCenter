import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydashComponent } from './mydash/mydash.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ConsultComponent } from './consult/consult.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'dash', component: MydashComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'consult', component: ConsultComponent},
  {path: 'signin', component: SigninComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
