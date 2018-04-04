import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent implements OnInit {
  displayedColumns = ['no', 'name', 'salary', 'age'];
  dataSource = ELEMENT_DATA;
  

  ngOnInit() {
  }

}
export interface Element {
  name: string;
  no: number;
  salary: number;
  age: number;
}

const ELEMENT_DATA: Element[] = [
  {no: 1, name: 'Sai', salary: 10079, age: 25},
  {no: 2, name: 'Suresh', salary: 40026, age: 26},
  {no: 3, name: 'Ramesh', salary: 6941, age: 23},
  {no: 4, name: 'Ravi', salary: 90122, age: 22},
  {no: 5, name: 'Radha', salary: 10811, age: 21},
  {no: 6, name: 'Rahul', salary: 120107, age: 25},
  {no: 7, name: 'Ram', salary: 140067, age: 25},
  {no: 8, name: 'Karthi', salary: 159994, age: 24},
  {no: 9, name: 'Kumar', salary: 189984, age: 23},
  {no: 10, name: 'Krishna', salary: 201797, age: 27},
  {no: 11, name: 'Sreedhar', salary: 22897, age: 25},
  {no: 12, name: 'Raja', salary: 24305, age: 26},
  {no: 13, name: 'Roja', salary: 269815, age: 28},
  {no: 14, name: 'Sathish', salary: 280855, age: 30},
  {no: 15, name: 'Sushmitha', salary: 280855, age: 27},
];
