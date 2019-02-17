import { Component} from '@angular/core';
export interface Specialist {
  value: string;
  viewValue: string;
}
export interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent {
  specialist: Specialist[] = [
    {value: '1', viewValue: 'Dermatologist'},
    {value: '2', viewValue: 'Physiotherapist'},
    {value: '3', viewValue: 'Gynaecologist'}
  ];
  gender: Gender[] = [
    {value: 'F', viewValue: 'Female'},
    {value: 'M', viewValue: 'Male'}
  ];
}
