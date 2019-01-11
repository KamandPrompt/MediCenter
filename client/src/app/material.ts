import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core'

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule],
})
export class MyOwnCustomMaterialModule { }
