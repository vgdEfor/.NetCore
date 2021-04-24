import { Component, OnInit } from '@angular/core';
import { AxBsDatatableFilterType, BsFormSelectGetterFn, DtActionColumnButton, DtColumnItem, DtDataGetterFn, DtFilterItem, FilterFormatType, FilterOpType, LabelAndValueExtended, SetData } from 'ax-toolbox';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { Project } from 'src/app/shared/api/models';
import { ProjectService } from 'src/app/shared/api/services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-projects-datatable',
  templateUrl: './projects-datatable.component.html',
  styleUrls: ['./projects-datatable.component.scss']
})
export class ProjectsDatatableComponent implements OnInit {

  //project
  static dtItemsP: Project[] = [];
  dtColumns2: DtColumnItem<Project>[] = [];
  dtItemsInst2: Project[] = [];

  //booleans 
  isDocumented: boolean = false;

  constructor(
    public dPipe: DatePipe,
    public translateSV: TranslateService,
    public servicio: ProjectService
  ) {
    this.initDatatables();
  }

  ngOnInit(): void {

    this.dtItemsInst2 = ProjectsDatatableComponent.dtItemsP;
  }
  //getter
  filtroPriority: BsFormSelectGetterFn<number>;
  //filtro
  addFilterPriority() {
    this.filtroPriority = async () => {
      const fromApi = await this.servicio.apiProjectPrioritylistGet$Json({})
        .pipe(first())
        .toPromise();
      return fromApi.map(dvalue => new LabelAndValueExtended<number>().setData({
        label: dvalue.data,
        value: dvalue.value
      }));
    };
  }

  private initDatatables() {
    this.initDtColumns();
  }

  private initDtColumns() {
    this.dtColumns2 = [

      new DtColumnItem().setData({
        thTHeadClass: 'cell-narrow',

        buttons: [
          new DtActionColumnButton<Project, string>().setData({
            url: '/empleados/project/details/{id}',
            urlTarget: '_self',
            iconPreffix: 'fas',
            iconName: 'eye',
            btnClass: 'btn btn-outline-secondary btn-sm',
          }),
        ],
      }),

      new DtColumnItem().setData({
        columnName: this.translateSV.instant('PAGE.PROJECT.LIST.DATATABLE.COLUMN.NAME'),
        field: 'name',
        filter: true,
        filterItem: new DtFilterItem().setData({
          op: FilterOpType.Cn
        })
      }),
      new DtColumnItem().setData({
        columnName: 'Responsable',
        field: 'responsable.name',
        filter: true,
        isShown: false,
        canChangeIsShown: true
      }),

      new DtColumnItem().setData({
        columnName: 'Priority',
        field: 'priorityType',
        fieldDisplayMiddleware: (data) => {
          if (data == 0) {
            return "Low";
          } else if (data == 1) {
            return "Medium";
          } else
            return "High";
        },
        canChangeIsShown: true,
        filter: true,
        filterItem: new DtFilterItem().setData({
          format: FilterFormatType.String,
          op: FilterOpType.Eq,
          type: AxBsDatatableFilterType.autocomplete,
          options: [

            new LabelAndValueExtended().setData({
              label: 'Low',
              value: '0'
            }),
            new LabelAndValueExtended().setData({
              label: 'Medium',
              value: '1'
            }),
            new LabelAndValueExtended().setData({
              label: 'High',
              value: '2'
            }),
          ]
        })

      }),
      new DtColumnItem().setData({
        columnName: 'Inicio',
        field: 'dstart',
        fieldDisplayType: 'date',
        filterItem: new DtFilterItem().setData({
          format: FilterFormatType.Date,
          type: AxBsDatatableFilterType.date
        }),
        fieldDisplayMiddleware: (data) => {
          if (data == null) { return ''; }
          const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATE'));
          return transformed;
        },
        filter: true,
      }),
      new DtColumnItem().setData({
        columnName: 'Fin',
        field: 'dend',
        fieldDisplayType: 'date',
        fieldDisplayMiddleware: (data) => {
          if (data == null) { return ''; }
          const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATE'));
          return transformed;
        },
        filter: true,
      }),

    ];
  }

}



