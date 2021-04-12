import { Component, OnInit } from '@angular/core';
import { EmployeesService, ProjectService } from 'src/app/shared/api/services';
import * as moment from 'moment';
import { ProjectsDatatableComponent } from './projects-datatable/projects-datatable.component';
import { Employee } from 'src/app/shared/api/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  responsables: Employee[] = [];

  constructor(public servicioProject: ProjectService,public employes: EmployeesService,) { 

    //this.addItemsDatatable();
  }

  ngOnInit(): void {
  }


  addItemsDatatable(){

    if (ProjectsDatatableComponent.dtItemsP == null || ProjectsDatatableComponent.dtItemsP.length === 0){

       this.servicioProject.apiProjectDatatablePost$Json().subscribe(result => {
        console.log("cargado correctamente");    
        ProjectsDatatableComponent.dtItemsP = result.items;// this.servicioProject.apiProjectGetlistGet();
        console.log(ProjectsDatatableComponent.dtItemsP);
         
      },error =>{

      });

    }
  

  }

}
