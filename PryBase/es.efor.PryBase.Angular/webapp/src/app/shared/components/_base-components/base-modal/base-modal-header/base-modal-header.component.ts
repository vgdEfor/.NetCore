import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-base-modal-header',
  templateUrl: './base-modal-header.component.html',
  styleUrls: ['./base-modal-header.component.scss']
})
export class BaseModalHeaderComponent implements OnInit {
  @Input() isLoadingClose = false;
  @Input() isDisabledClose = false;
  @Input() headerLabelId = uuid();
  @Input() cssClass = null;

  @Output() onClickClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
