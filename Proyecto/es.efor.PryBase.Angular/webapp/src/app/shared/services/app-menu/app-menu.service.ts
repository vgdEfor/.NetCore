import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutMenuItem } from 'ax-toolbox';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { LayoutMenuService } from '../../api/services';

@Injectable({
  providedIn: 'root'
})
export class AppMenuService {

  //menu item albergará los elementos rescatados de la api
  private _menuItem: LayoutMenuItem[] = [];
  //comprueba el comportamiento de los items y devuelve false toco el rato
  private isReady = new BehaviorSubject<boolean>(false);

  constructor(
    public layoutSv: LayoutMenuService,
    public translateSv: TranslateService
  ) {
    //entramos en el servicio de la api para que nos devuelva ese item y los mapeamos
    this.layoutSv.apiAdminLayoutmenuGet$Json().subscribe((data) =>{
      const asMenuItems = data.map((apiMenu)=> new LayoutMenuItem()
        .setData(apiMenu as any)
        .setData({label: this.translateSv.instant(apiMenu.label)}));
        //asignamos el asmenuitems a _menuitem
      this._menuItem = asMenuItems;
      //lanzamos un true para que sepa que ha terminado
      this.isReady.next(true);
    })
  }

  getMenuItems() {
    //hacemos una promesa que se resolverá cuando, haciendo el pipe, primero el isReady sea true
    return new Promise<LayoutMenuItem[]>((resolve) =>{
      this.isReady.pipe(first(isReady => isReady === true))
        .subscribe(() =>{
          resolve(this._menuItem)
        })
    });
  }//end getMenuItems
}
