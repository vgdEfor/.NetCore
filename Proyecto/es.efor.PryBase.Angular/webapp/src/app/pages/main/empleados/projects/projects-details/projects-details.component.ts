import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsAutocompleteGetterFn, BsFormSelectGetterFn, DestroySubscriptions, LabelAndValueExtended } from 'ax-toolbox';
import { FormUtilities } from 'src/app/shared/utils/form-utils';
import { Employee, Int32LabelAndValue, PriorityEnum, Project } from 'src/app/shared/api/models';
import { EmployeesService, ProjectService } from 'src/app/shared/api/services';
import { DatePipe } from '@angular/common'
import { ProjectsComponent } from '../projects.component';
import { ModalConfirmationMessageComponent } from 'src/app/shared/components/modals/modal-confirmation-message/modal-confirmation-message.component';
import { elementAt, first } from 'rxjs/operators';
import * as moment from 'moment';


@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss'],

})
export class ProjectsDetailsComponent extends DestroySubscriptions implements OnInit, OnDestroy {

  // inicialización vacía
  _item: Project = {
    id: 0,
    name: "",
    priorityType: 0,
    responsable: { id: 0, name: "", surname: "a" },
    responsableId: 0,
    dend: "",
    dstart: ""
  };

  _itemErrors: FormItemErrors = {};
  _isLoading = true;
  newId: number;
  dstart: Date = moment().toDate();
  dend: Date = moment().add(1, 'month').toDate();

  //para saber si es nuevo o no

  esNuevoItem: boolean = false;

  //para dropbox
  responsables: Employee[] = [];
  responsableSelected: number;
  listaPriority: Int32LabelAndValue[] = [];

  //autocomplete
  autocompleteResponsableGetterFn: BsAutocompleteGetterFn<Employee>;


  //colapse
  isCollapsed: boolean = false;
  isDocumented: boolean = false;

  listError: string[];

  mensaje: string[] = [];
  employeeError: Employee = { id: 0, name: "", surname: "a" };

  selectPostionGetterFn: BsFormSelectGetterFn<number>;

  constructor(
    public cdRef: ChangeDetectorRef,
    public router: Router,
    public aRoute: ActivatedRoute,
    public translate: TranslateService,
    public servicio: ProjectService,
    public employes: EmployeesService,
    public datepipe: DatePipe,
    public projectComponent: ProjectsComponent
  ) {
    super();

  }

  @ViewChild('modalDeleteConfirm') modalDetails: ModalConfirmationMessageComponent;
  @ViewChild('modalCreateConfirm') modalCreate: ModalConfirmationMessageComponent;



  ngOnInit(): void {
    this.inicializaDropList();
    this.initListeners();
    this.initSelectPosition();
    this.initAutocomplete();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }

  private initSelectPosition() {
    this.selectPostionGetterFn = async () => {
      const fromApi = await this.servicio.apiProjectPrioritylistGet$Json({})
        .pipe(first())
        .toPromise();
      return fromApi.map(dvalue => new LabelAndValueExtended<number>().setData({
        label: dvalue.label,
        value: dvalue.value
      }));
    };
  }

  inicializaDropList() {
    if (this.responsables.length <= 0) {
      this.employes.apiEmployeesGetlistcompletaPost$Json().subscribe(data => {
        this.responsables = data.items;
      })
    }
    if (this.listaPriority.length <= 0) {
      this.servicio.apiProjectPrioritylistGet$Json().subscribe(data => {
        this.listaPriority = data;
      })
    }
  }

  onDatepicketValueChange($event: Date, propertyName: string) {

    if (propertyName == "dstart" || propertyName == "dend") {
      FormUtilities.onDatepicketValueChange(this, $event, propertyName, this.cdRef);
    } else {
      FormUtilities.onDatepicketValueChange(this._item, $event, propertyName, this.cdRef);
    }

  }


  // autocomplete
  private initAutocomplete() {
    this.autocompleteResponsableGetterFn = async (filter) => {
      const area = await this.employes.apiEmployeesGetlistcombolistGet$Json({ filtro: filter })
        .pipe(first()).toPromise();
      return area
        .map((v) => new LabelAndValueExtended().setData({ label: v.name, value: v.id, extraData: v.surname }));
    };
  }


  private initListeners(): void {
    this.initARouteListeners();
  }


  private async initARouteListeners() {

    const parentS = this.aRoute.parent.url.subscribe((parentUrl) => {
      if (parentUrl[0] == null || !parentUrl[0].path) {
        this.goBack();
        return;
      }

      //comprueba por qué ruta ha venido, si es por nueva, se indicará poniendo el boolean a true
      const childS = this.aRoute.paramMap.subscribe((data) => {
        const id = data.get('id');
        if (parentUrl[0].path === 'new') {
          if (id) {
            this.goBack();
            return;
          }
          console.log("Entra por new");
          this.esNuevoItem = true;
          this._isLoading = false;
        } else {
          if (!id) {
            this.goBack();
            return;
          }

          this._isLoading = true;

          //bloque de carga del servicio
          //guardamos el id como numero
          this.newId = parseInt(id);

          //creamos un objeto de tipo Projecto y nos traemos ese projecto si es igual al id         
          this.servicio.apiProjectGetbyidGet$Json({ clave: this.newId }).subscribe(result => {
            this._item = result;

            if (this._item == null) {
              this.goBack();
              return;
            }
            if (this.newId === result.id) {
              this.dstart = new Date(result.dstart);
              this.dend = new Date(result.dend);
              this.responsableSelected = this._item.responsableId;
              this._isLoading = false;
            }

          });



        }
      });
      this.subs.push(childS);
    });

    this.subs.push(parentS);
  }

  function() {

    this.isCollapsed = !this.isCollapsed;

  }



  //EVENTO DE CLIC
  /*async onBtnSave(ev: MouseEvent) {
    this._isLoading = true;

    //guarda el formato fecha correctamente
    if (this.dstart && this.dstart != undefined) {
      this._item.dstart = this.dstart.getFullYear() + "-" + (this.dstart.getMonth() + 1) + "-" + this.dstart.getDate();
    } else {
      this._item.dstart = "";
    }

    if (this.dend && this.dend != undefined) {
      this._item.dend = this.dend.getFullYear() + "-" + (this.dend.getMonth() + 1) + "-" + this.dend.getDate();
    } else {
      this._item.dend = "";
    }


    //comprueba que el responsable exista, que no sea nulo, que el nombre este introducido, como la fecha
    /*!this.responsables.find(element => element.name == this.employeeError.name)||
    !this.responsables.find(element => element.name == this._item.responsable.name)||
    var isValid = false;
    this.mensaje = [];
    this._item.responsableId = this.responsableSelected;
    if (this._item.responsableId == undefined || this._item.responsableId == null || this._item.responsableId <= 0) {
      this.modalCreate.btnConfirmShown = false;
      this.mensaje.push("Empleado no encontrado o no existe");
      this.modalCreate.open();
      this._isLoading = false;
      return;
    } else {
      this.employes.apiEmployeesGetbyidGet$Json({ id: this.responsableSelected }).subscribe(data => {
        this.employeeError = data;
        if (this.employeeError.id <= 0 ||
          !this.responsables.find(element => element.name == this.employeeError.name) ||
          !this.responsables.find(element => element.name == this._item.responsable.name) ||
          this._item.name.length <= 0 || this._item.dend.length <= 0 || this._item.dstart.length <= 0) {

          this.modalCreate.btnConfirmShown = false;
          this.mensaje.push("Empleado no encontrado o no existe");
          this.modalCreate.open();
          this._isLoading = false;
          isValid = true;
        }


        //comprueba si es nuevo o son los detalles de uno
        if (this.esNuevoItem && !isValid) {
          console.log("Entra en nuevo");
          this.servicio.apiProjectInsertPost$Json({ body: this._item, commit: true }).subscribe(data => {
            this._isLoading = false
            this.contador();

          }, error => {
            this.crearMensajeError(error.errorData);
            this.modalCreate.btnConfirmShown = false;
            this.modalCreate.open();
            this._isLoading = false;
            return;
          }
          );

        } else if (!this.esNuevoItem && !isValid) {
          console.log("Entra en update");
          this.servicio.apiProjectUpdatePost$Json({ body: this._item }).subscribe(data => {
            this._isLoading = false
            this.contador();

          }, error => {
            this.crearMensajeError(error.errorData);
            this.modalCreate.btnConfirmShown = false;
            this.modalCreate.open();
            this._isLoading = false;
            return;
          });
        }

      });
    }

  }*/


  matrizFunction(){
    //prueba de matriz bidimensional
    var matriz = new Array(10);
    var matriz2 = new Array(10);
    var matrizResult = new Array(10);
    //se crea la matriz añadiendo por cada elemento de la matriz, un nuevo array
    for(var o = 0; o<10; o++){
      matriz[o] = new Array(10);
      matriz2[o] = new Array(10);
      matrizResult[o] = new Array(10);
    }

    //se rellenan los espacios de la matriz con numeros aleatorios entre el 10 y el 100
    for(var i = 0; i<10; i++){
      for(var j = 0; j<10; j++){
        matriz[i][j] = Math.floor(Math.random()*(10-1))+1;
        matriz2[i][j] = Math.floor(Math.random()*(10-1))+1;
      }
    }
    //se crea un mensaje que mostrará los elementos correctamente
    var valorMasAlto= 0;
    var mensajete = "";
    for(var i = 0; i<10; i++){
      mensajete += "\n"
      for(var j = 0; j<10; j++){
        matrizResult[i][j] = this.factorial(matriz[i][j] * matriz2[i][j])
        if(valorMasAlto < matrizResult[i][j]){
          valorMasAlto = matrizResult[i][j];
        }       
        mensajete = mensajete + ("{"+(matrizResult[i][j]).toString()+"}");
      }
    }
    console.log(mensajete);
    console.log("El numero mas alto es "+ valorMasAlto);
  }

  factorial (n) {
    var total = 1; 
    for (var i=1; i<=n; i++) {
      total = total * i; 
    }
    return total; 
  }

  //EVENTO DE CLIC
  async onBtnSave(ev: MouseEvent) {
    this._isLoading = true;
    this.matrizFunction();
    //guarda el formato fecha correctamente
    if (this.dstart && this.dstart != undefined) {
      this._item.dstart = this.dstart.getFullYear() + "-" + (this.dstart.getMonth() + 1) + "-" + this.dstart.getDate();
    } else {
      this._item.dstart = "";
    }

    if (this.dend && this.dend != undefined) {
      this._item.dend = this.dend.getFullYear() + "-" + (this.dend.getMonth() + 1) + "-" + this.dend.getDate();
    } else {
      this._item.dend = "";
    }

    
    //comprueba que el responsable exista, que no sea nulo, que el nombre este introducido, como la fecha
    this.mensaje = [];
    this._item.responsableId = this.responsableSelected;
    if (this._item.responsableId == undefined || this._item.responsableId == null || this._item.responsableId <= 0) {
      this.modalCreate.btnConfirmShown = false;
      this.mensaje.push("Empleado no encontrado o no existe");
      this.modalCreate.open();
      this._isLoading = false;
      return;
    }

    this.employeeError = await this.employes.apiEmployeesGetbyidGet$Json({ id: this.responsableSelected }).toPromise();


    if (this.employeeError == null || this.employeeError.id <= 0 ||
      !this.responsables.find(element => element.name == this.employeeError.name) ||
      !this.responsables.find(element => element.name == this._item.responsable.name)) {

      this.modalCreate.btnConfirmShown = false;
      this.mensaje.push("Empleado no encontrado o no existe");
      this.modalCreate.open();
      this._isLoading = false;
      return
    }

    //comprueba si es nuevo o son los detalles de uno
    if (this.esNuevoItem) {
      console.log("Entra en nuevo");
      this.servicio.apiProjectInsertPost$Json({ body: this._item, commit: true }).subscribe(data => {
        this._isLoading = false
        this.contador();

      }, error => {
        this.crearMensajeError(error.errorData);
        this.modalCreate.btnConfirmShown = false;
        this.modalCreate.open();
        this._isLoading = false;
        return;
      }
      );

    } else {
      console.log("Entra en update");
      this.servicio.apiProjectUpdatePost$Json({ body: this._item }).subscribe(data => {
        this._isLoading = false
        this.contador();

      }, error => {
        this.crearMensajeError(error.errorData);
        this.modalCreate.btnConfirmShown = false;
        this.modalCreate.open();
        this._isLoading = false;
        return;
      });
    }

    ;

  }


  // Recibe los errores del servidor y los guarda en un array de strings
  crearMensajeError(errors: any) {
    console.log(errors);


    if (errors["errors"]) { // Errores de validación en el servidor. No llega al controller
      Object.keys(errors["errors"]).forEach((key: string) => {

        if (key == "dstart") {
          this.mensaje[this.mensaje.length] = "La fecha de comienzo es obligatoria";
        } else if (key == "dend") {
          this.mensaje[this.mensaje.length] = "La fecha de finalización es obligatoria";
        } else if (key == "Responsable.Name" || key == "responsableId") {
          this.mensaje[this.mensaje.length] = "Nombre del responsable no asignado";
        } else {
          this.mensaje[this.mensaje.length] = errors["errors"][key][0];
        }
      });
    } else { // Errores de validación en el servidor. LLega al controler

      Object.keys(errors).forEach((keyErrors: string) => {
        this.mensaje[this.mensaje.length] = errors[keyErrors][0];
      });
    }

  }


  contador() {
    setTimeout(async () => {
      await this.router.navigate(['/empleados/project/details', this._item.id]);
      this._isLoading = false;
      this.goBack();
    }, 3000);
  }

  onModalDeleteConfirmed() {
    this.servicio.apiProjectDeleteDelete$Json({ data: this._item.id }).subscribe((data) => {
      this._isLoading = false;
      this.goBack();
    });

    this.modalDetails.close();
  }

  async onBtnDelete(ev: MouseEvent) {
    this.modalDetails.open();
  }

  private goBack() {
    this.router.navigate(['/empleados/project']);
  }
}

export type FormItemErrors = { [fieldId: string]: (string | string[]) };
