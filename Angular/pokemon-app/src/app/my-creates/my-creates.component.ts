import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-my-creates',
  templateUrl: './my-creates.component.html',
  styleUrls: ['./my-creates.component.scss']
})
export class MyCreatesComponent implements OnInit {

  employeeList: Employee[] = [
    { id: 1, name: 'Jesus', country: 'SPAIN' },
    { id: 2, name: 'Marta', country: 'SPAIN' },
    { id: 3, name: 'Jaime', country: 'SPAIN' },
    { id: 4, name: 'Cristian', country: 'SPAIN' }
  ];

  selectedEmployee: Employee = new Employee(0, '', '');

  constructor() { }

  ngOnInit(): void {
  }

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeList.length + 1;
      this.employeeList.push(this.selectedEmployee);
    }


    this.selectedEmployee = new Employee(0, '', '');
  }
  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  delete() {
    if (confirm('Are you sure to delete ' + this.selectedEmployee.name + '?')) {
      this.employeeList = this.employeeList.filter(e => e != this.selectedEmployee);
      this.selectedEmployee = new Employee(0, '', '');
    }

  }

}
