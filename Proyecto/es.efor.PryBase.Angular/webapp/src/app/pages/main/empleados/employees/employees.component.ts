import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/api/services';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(public employeesSV : EmployeesService) {
    
   }
   
  ngOnInit(): void {
  }

}
