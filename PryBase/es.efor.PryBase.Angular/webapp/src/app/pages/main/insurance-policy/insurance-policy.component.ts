import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ListComponent, MockupItem } from './list/list.component';

@Component({
  selector: 'app-insurance-policy',
  templateUrl: './insurance-policy.component.html',
  styleUrls: ['./insurance-policy.component.scss']
})
export class InsurancePolicyComponent implements OnInit {

  constructor() {
    this.initMockupItems();
  }

  ngOnInit(): void {
  }


  private initMockupItems() {
    if (ListComponent.dtItems == null || ListComponent.dtItems.length === 0) {
      ListComponent.dtItems = [
        new MockupItem().setData({
          id: '1c2d475a-7011-4361-b24f-60e4984c9522',
          name: 'Axular',
          surname1: 'Etxeguren',
          surname2: 'Abascal',
          amount: 230,
          datetime: moment().add(-3, 'month').toDate(),
          isPremium: true,
        }),
        new MockupItem(true).setData({
          name: 'Javier',
          surname1: 'Lusarreta',
          surname2: 'Ayestarán',
          amount: 170,
          datetime: moment().add(-3, 'month').toDate(),
          isPremium: true,
        }),
        new MockupItem(true).setData({
          name: 'Mikel',
          surname1: 'Rodriguez',
          surname2: 'Valiño',
          amount: 230,
          datetime: moment().toDate(),
          isPremium: true,
        }),
        new MockupItem(true).setData({
          name: 'Juan José',
          surname1: 'Martinez',
          surname2: '',
          amount: 1280,
          datetime: moment().add(3, 'day').startOf('day').toDate(),
          isPremium: false,
        }),
      ];
    }
  }
}

