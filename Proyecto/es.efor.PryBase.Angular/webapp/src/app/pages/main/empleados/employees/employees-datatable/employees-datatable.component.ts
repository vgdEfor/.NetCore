import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/api/models';
import { AxBsDatatableFilterType, BsFormSelectGetterFn, DtActionColumnButton, DtApiResponse, DtColumnItem, DtDataGetterFn, DtFilterItem, FilterFormatType, LabelAndValueExtended } from 'ax-toolbox';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { EmployeesService } from 'src/app/shared/api/services';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-employees-datatable',
  templateUrl: './employees-datatable.component.html',
  styleUrls: ['./employees-datatable.component.scss']
})
export class EmployeesDatatableComponent implements OnInit {

  dtColumns: DtColumnItem<Employee>[] = [];

  filterDataTableGetterFn: DtDataGetterFn<Employee>;

  mostrarTabla: boolean = true;
  mostrarDoc: boolean = true;

  filtroPosition: BsFormSelectGetterFn<number>;


  constructor(
    public dPipe: DatePipe,
    public translateSV: TranslateService,
    public employeesSV: EmployeesService
  ) {
    this.initDatatables();
  }
  ngOnInit(): void {
  }

  private initDatatables() {

    this.initFilterPosition();

    this.initDtColumns();

    this.filterDataTableGetterFn = (queryParams, filters) => {
      return this.employeesSV.apiEmployeesDatatablePost$Json({ body: filters as any, pi: queryParams.pi as any, ps: queryParams.ps as any })
        .pipe(first())
        .pipe(map((d) => new DtApiResponse<Employee>().setData({
          items: d.items,
          pageIndex: Number(queryParams.pi),
          pageSize: Number(queryParams.ps),
          total: d.total
        })
        )).toPromise();
    };
  }
  private initDtColumns() {
    this.dtColumns = [
      new DtColumnItem().setData({
        thTHeadClass: 'cell-narrow',
        buttons: [
          new DtActionColumnButton<Employee, string>().setData({
            url: '/empleados/employees/details/{id}',
            urlTarget: '_self',
            iconPreffix: 'fas',
            iconName: 'eye',
            btnClass: 'btn btn-outline-secondary btn-sm',
          }),
        ],
      }),
      new DtColumnItem().setData({
        columnName: 'Nombre',
        field: 'name',
        filter: true,
      }), new DtColumnItem().setData({
        columnName: 'Apellido',
        field: 'surname',
        filter: true,
      }), new DtColumnItem().setData({
        columnName: 'Fecha de nacimiento',
        field: 'dbirth',
        fieldDisplayType: 'datetime',
        filter: true,
        filterItem: new DtFilterItem().setData({
          format: FilterFormatType.Date,
          type: AxBsDatatableFilterType.date
        }),
        fieldDisplayMiddleware: (data) => {
          if (data == null) { return ''; }
          const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATETIME'));
          return transformed;
        },
      }), new DtColumnItem().setData({
        columnName: 'Fecha de comienzo',
        field: 'dstart',
        fieldDisplayType: 'datetime',
        filter: true,
        filterItem: new DtFilterItem().setData({
          format: FilterFormatType.Date,
          type: AxBsDatatableFilterType.date
        }),
        fieldDisplayMiddleware: (data) => {
          if (data == null) { return ''; }
          const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATETIME'));
          return transformed;
        },
      }),
      new DtColumnItem().setData({
        columnName: 'Posición',
        field: 'positionType',
        fieldDisplayMiddleware: (data) => {
          if (data == 0) {
            return "Jefe";
          } else if (data == 1) {
            return "Gerente";
          } else if (data == 2) {
            return "Supervisor";
          } else if (data == 3) {
            return "Desarrollador";
          } else {
            return "Testeador";
          }

        },
        filter: true,
        filterItem: new DtFilterItem().setData({
          format: FilterFormatType.Int,
          type: AxBsDatatableFilterType.autocomplete,
          getterFn: this.filtroPosition
        })
      }),
    ];
  }

  initFilterPosition() {
    this.filtroPosition = async () => {
      const fromApi = await this.employeesSV.apiEmployeesPositionlistGet$Json({})
        .pipe(first())
        .toPromise();
      return fromApi.map(dvalue => new LabelAndValueExtended<number>().setData({
        label: dvalue.data,
        value: dvalue.value
      }));
    };
  }

}
