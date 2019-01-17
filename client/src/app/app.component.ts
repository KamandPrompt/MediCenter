import { Component } from '@angular/core';
export interface specialist{
  value: string;
  viewValue: string;
}
export interface gend{
  value:string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  spec: specialist[]=[
    {value:'1',viewValue:'Dermatologist'},
    {value:'2',viewValue:'Physiotherapist'},
    {value:'3',viewValue:'Gynaecologist'}
  ]
  gender: gend[]=[
    {value:'F',viewValue:'Female'},
    {value:'M',viewValue:'Male'}
  ];
}
