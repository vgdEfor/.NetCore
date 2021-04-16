import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DtActionColumnButton, DtColumnItem, SetData } from 'ax-toolbox';
import * as moment from 'moment';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  static dtItems: MockupItem[] = [];
  dtColumns: DtColumnItem<MockupItem>[] = [];
  dtItemsInst: MockupItem[] = [];
  constructor(
    public dPipe: DatePipe,
    public translateSV: TranslateService,
  ) {
    this.initDatatables();
  }

  ngOnInit(): void {
    this.dtItemsInst = ListComponent.dtItems;
  }


  private initDatatables() {
    this.initDtColumns();
  }
  private initDtColumns() {
    this.dtColumns = [
      new DtColumnItem().setData({
        thTHeadClass: 'cell-narrow',
        buttons: [
          new DtActionColumnButton<MockupItem, string>().setData({
            url: '/insurance/details/{id}',
            urlTarget: '_self',
            iconPreffix: 'fas',
            iconName: 'eye',
            btnClass: 'btn btn-outline-secondary btn-sm',
          }),
        ],
      }),
      new DtColumnItem().setData({
        columnName: 'Fecha de alta',
        field: 'datetime',
        fieldDisplayType: 'datetime',
        fieldDisplayMiddleware: (data) => {
          if (data == null) { return ''; }
          const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATETIME'));
          return transformed;
        },
      }),
      new DtColumnItem().setData({
        columnName: this.translateSV.instant('PAGE.INSURANCE.LIST.DATATABLE.COLUMN.NAME'),
        field: 'name',
        filter: true,
      }),
      new DtColumnItem().setData({
        columnName: 'Primer apellido',
        field: 'surname1',
        filter: true,
      }),
      new DtColumnItem().setData({
        columnName: 'Segundo apellido',
        field: 'surname2',
        filter: true,
      }),
      new DtColumnItem().setData({
        columnName: 'Precio póliza',
        field: 'amount',
        fieldDisplayType: 'currency'
      }),
      new DtColumnItem().setData({
        columnName: 'Pack premium',
        field: 'isPremium',
        fieldDisplayType: 'boolean',
        filter: true,
      }),
    ];
  }

}

export class MockupItem extends SetData<MockupItem> {
  id: string;
  name = '';
  surname1 = '';
  surname2 = '';
  amount = 34.5;
  datetime: Date; // moment.MomentInput;
  isPremium = false;

  constructor(setId = false) {
    super();
    if (setId) { this.id = uuid(); }
  }
}
