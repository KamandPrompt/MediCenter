import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MynavComponent } from './mynav/mynav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MydashComponent } from './mydash/mydash.component';
import { MytableComponent } from './mytable/mytable.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    MydashComponent,
    MytableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule, MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
