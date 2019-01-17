import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydashComponent } from './mydash/mydash.component';
import { MytableComponent } from './mytable/mytable.component';
import { AppComponent } from './app.component';
import { MynavComponent } from './mynav/mynav.component';
 
const routes: Routes = [
  {path:'mynav',component:MynavComponent},
  {path: 'dash',component: MydashComponent},
  {path:'table',component:MytableComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
