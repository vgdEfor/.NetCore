import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-base-modal-footer',
  templateUrl: './base-modal-footer.component.html',
  styleUrls: ['./base-modal-footer.component.scss']
})
export class BaseModalFooterComponent implements OnInit {
  @Output() onClickClose = new EventEmitter<null>();
  @Output() onClickConfirm = new EventEmitter<null>();

  @Input() btnLabelConfirm = 'Confirmar';
  @Input() btnLabelClose = 'Cerrar';

  @Input() btnConfirmShown = 'Confirmar';
  @Input() btnCloseShown = 'Cerrar';

  @Input() isLoadingConfirm = false;
  @Input() isDisabledConfirm = false;
  @Input() isLoadingClose = false;
  @Input() isDisabledClose = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
