import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsFormSelectGetterFn, DestroySubscriptions, LabelAndValueExtended } from 'ax-toolbox';
import { first } from 'rxjs/operators';
import { Employee, Int32LabelAndValue, PositionEnum } from 'src/app/shared/api/models';
import { EmployeesService } from 'src/app/shared/api/services';
import { ModalConfirmationMessageComponent } from 'src/app/shared/components/modals/modal-confirmation-message/modal-confirmation-message.component';
import { FormUtilities } from 'src/app/shared/utils/form-utils';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.scss']
})
export class EmployeesDetailsComponent extends DestroySubscriptions implements OnInit, OnDestroy {

  _item: Employee = {
    id: 0,
    name: "",
    surname: "",
    positionType: 0,
    position: PositionEnum.Chief,
    dbirth: "",
    dstart: ""
  }
  _itemErrors: FormItemErrors = {};
  _isLoading = true;

  datestart: Date;
  datebirth: Date;

  _isNewItem : boolean = false;

  listaPositions : Int32LabelAndValue[]=[];
  selectPostionGetterFn: BsFormSelectGetterFn<number>;

  @ViewChild('modalDeleteConfirm') modalDetails:ModalConfirmationMessageComponent;
  @ViewChild('modalEmpleadoConProyectos') modalEmpleadoConProyectos:ModalConfirmationMessageComponent;
  @ViewChild('modalDatosRequired') modalDatosRequired:ModalConfirmationMessageComponent;

  mensaje : string[] = [];

  mostrarSelect : boolean = true;
  mostrarDoc : boolean = true;

  constructor(
    public router: Router,
    public aRoute: ActivatedRoute,
    public translate: TranslateService,
    public employeesSV: EmployeesService,
    public cdRef: ChangeDetectorRef
  ) {
    super();
   }

  ngOnInit(): void {

    if(this.listaPositions.length <= 0){
        this.employeesSV.apiEmployeesPositionlistGet$Json().subscribe(data =>{      
        this.listaPositions = data;
      });
    }
    this.initSelectPosition();

    this.initListeners();

  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }

  onBtnSave(ev: MouseEvent): void {
      // GUardar
      this._isLoading = true;

      /*if (this._item.name.trim() == "" || this._item.surname.trim() == "" 
      || !this.datebirth || this.datebirth === undefined 
      || !this.datestart || this.datestart === undefined){
        this.modalDatosRequired.btnConfirmShown = false;
        this.modalDatosRequired.open();
        this._isLoading = false;
        return;
      }*/

      if(this.datebirth && this.datebirth != undefined){
        this._item.dbirth = this.datebirth.getFullYear() + "-" + (this.datebirth.getMonth()+1) + "-" + this.datebirth.getDate();
      } else {
        this._item.dbirth = "0000-00-00";
      }
      
      if(this.datestart && this.datestart != undefined){
        this._item.dstart = this.datestart.getFullYear() + "-" + (this.datestart.getMonth()+1) + "-" + this.datestart.getDate();
      } else {
        this._item.dstart = "0000-00-00";
      }
      
      if (this._isNewItem){
        //console.log(this._item);
        this.employeesSV.apiEmployeesInsertPost$Json({body:this._item}).subscribe((data) => {
         // console.log("Creado: " + data.id + " - " + data.name);
          this._isLoading = false;
          this.goBack();
        }, error => {
          console.log(error);
          this.crearMensajeError(error.errorData);

          this.modalDatosRequired.btnConfirmShown = false;
          this.modalDatosRequired.open();
          this._isLoading = false;
          return;
        });
      } else {
        this.employeesSV.apiEmployeesUpdatePost$Json({body:this._item}).subscribe((data) => {
         // console.log("Actualizado: " + data.id + " - " + data.name);
          this._isLoading = false;
          this.goBack();
        }, error => {
          
          this.crearMensajeError(error.errorData);

          this.modalDatosRequired.btnConfirmShown = false;
          this.modalDatosRequired.open();
          this._isLoading = false;
          return;
        });
      }
      
  }

  // Recibe los errores del servidor y los guarda en un array de strings
  crearMensajeError(errors : any) {
    this.mensaje = ["Error"];
    
    if(errors["errors"]){ // Errores de validación en el servidor. No llega al controller
      Object.keys(errors["errors"]).forEach((key:string)=>{

        if(key=="dbirth"){
          this.mensaje[this.mensaje.length] = "The Birth date is required"; 
        } else if(key == "dstart"){
          this.mensaje[this.mensaje.length] = "The Start date is required";
        } else {
          this.mensaje[this.mensaje.length] = errors["errors"][key][0];
        }
      }); 
    } else { // Errores de validación en el servidor. LLega al controler
        Object.keys(errors).forEach((keyErrors:string)=>{
          this.mensaje[this.mensaje.length] = errors[keyErrors][0];
      });
    }

  }

  onModalDeleteConfirmed(){
    this.employeesSV.apiEmployeesDeleteDelete$Json({id:this._item.id}).subscribe((data) => {
     // console.log("Borrado: " + data.id + " - " + data.name);
      this._isLoading = false;
      this.goBack();
    });

    this.modalDetails.close();
  }

  onBtnDelete (){
    if (this._item.projects.length > 0){ 
      this.modalEmpleadoConProyectos.btnConfirmShown = false;
      this.modalEmpleadoConProyectos.open();
    } else {
      this.modalDetails.open();
    }
    
  }
 
  onDatepicketValueChange($event: Date, propertyName: string) {
    if(propertyName == "datebirth" || propertyName == "datestart")
    {
      FormUtilities.onDatepicketValueChange(this, $event, propertyName, this.cdRef);
    } else {
      FormUtilities.onDatepicketValueChange(this._item, $event, propertyName, this.cdRef);
    }
     
  }

  private initSelectPosition(){
      this.selectPostionGetterFn = async ()=>{
        const fromApi = await this.employeesSV.apiEmployeesPositionlistGet$Json({})
        .pipe(first())
        .toPromise();
        return fromApi.map(dvalue => new LabelAndValueExtended<number>().setData( {
           label: dvalue.label,
           value: dvalue.data
         }));
      };
  }

  private initListeners(): void {
    this.initARouteListeners();
  }

  private initARouteListeners() {

    const parentS = this.aRoute.parent.url.subscribe((parentUrl) => {
      
      // Illegal navigation
      if (parentUrl[0] == null || !parentUrl[0].path) {
        this.goBack();
        return;
      }

      const childS = this.aRoute.paramMap.subscribe((data) => {
        // New does not need ID.
        const id = data.get('id');
        if (parentUrl[0].path === 'new') {
          if (id) {
            this.goBack();
            return;
          }
          this._isNewItem = true;
          this._isLoading = false;
        } else {
          if (!id) {
            this.goBack();
            return;
          }

          // Cargar empleado BD
          this.employeesSV.apiEmployeesGetbyidGet$Json({id:parseInt(id)}).subscribe((data) => {
              this._item = data;
              this._isLoading = true;

              // 404
              if (this._item == null) {
                this.goBack();
                return;
              }

              if (parseInt(id) === this._item.id) {
                this.datebirth = new Date(this._item.dbirth);
                this.datestart = new Date(this._item.dstart);
                this._isLoading = false;
              }

          });
        }
      });
      this.subs.push(childS);
    });

    this.subs.push(parentS);
  }

  private goBack() {
    this.router.navigate(['/empleados/employees']);
  }

}

export type FormItemErrors = { [fieldId: string]: (string | string[]) };
