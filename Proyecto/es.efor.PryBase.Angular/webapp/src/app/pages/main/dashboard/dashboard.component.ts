import { Route } from '@angular/compiler/src/core';
import { NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutMenuItem } from 'ax-toolbox';
import { SetData } from 'src/app/shared/models/_basic/set-data';
import { AppMenuService } from 'src/app/shared/services/app-menu/app-menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  _menuItems: LayoutMenuItem[] = [];
  
  // se genera el ngZone para recargar completamente lo que sería la vista para que cargue los elementos correctamente
  constructor(private serviceMenu: AppMenuService ,private zone: NgZone, private ruta: Router) { }

  ngOnInit(): void {
    this.initMenuItems();
  }

  private async initMenuItems(){
    this._menuItems = await this.serviceMenu.getMenuItems();
  }

  navegation(num: number) {
    if (num == 1) {
      this.zone.run((data) => {
        this.ruta.navigate(['/empleados/employees/datatable'])
      })
    } else if (num == 2) {
      this.zone.run((data) => {
        this.ruta.navigate(['/empleados/employees/new'])
      })
    } else if (num == 3) {
      this.zone.run((data) => {
        this.ruta.navigate(['/empleados/project/datatable'])
      })
    } else if (num == 4) {
      this.zone.run((data) => {
        this.ruta.navigate(['/empleados/project/new'])
      })
    }
  }

}

export class YouTubeLink extends SetData<YouTubeLink> {
  videoId: string;
  quality: YT.SuggestedVideoQuality = 'highres';
}
