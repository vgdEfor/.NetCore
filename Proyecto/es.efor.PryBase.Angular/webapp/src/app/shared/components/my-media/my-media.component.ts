import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MediaService } from '../../api/services';
import { DestroySubscriptionsDirective } from '../../models/_basic/destroy-subscriptions';
import { ImageDto } from '../../api/models';
import { FiledropCallback } from '../../_third-party/ep-components/components/filedrop/models';
import { SetData } from '../../models/_basic/set-data';
import { ModalConfirmationMessageComponent } from '../modals/modal-confirmation-message/modal-confirmation-message.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

@Component({
  selector: 'app-my-media',
  templateUrl: './my-media.component.html',
  styleUrls: ['./my-media.component.scss']
})
export class MyMediaComponent extends DestroySubscriptionsDirective implements OnInit {
  @ViewChild('modalConfirmDeleteImage', { static: true }) modalConfirmDeleteImage: ModalConfirmationMessageComponent;

  @Input() imgBaseUrl = '/api/media/';

  @Input() canSelect = true;
  @Input() canUpload = true;
  @Input() refreshAfterUpload = true;

  @Input() thumbnailWidth = '170px';
  @Input() thumbnailHeight = this.thumbnailWidth;

  @Input() labelTabUpload = 'Upload new file';
  @Input() labelTabViewAlbum = 'Uploaded files';
  @Input() labelAlbumNoItems = 'Your album is empty';

  @Input() set selectedIds(value: string[]) {
    if (value == null) value = [];
    this._selectedIds = value;

    this.refreshImageCheckboxes();
  }
  private _selectedIds: string[] = [];

  @Input() labelPaginationPrev = '<';
  @Input() labelPaginationNext = '>';

  @Input() cssClassPagination = 'pagination-sm';

  @Output() onMediaSelect = new EventEmitter<ImageDto>();
  @Output() onUploadSuccess = new EventEmitter<FiledropCallback>();
  @Output() onUploadError = new EventEmitter<FiledropCallback>();

  _pIndex = 0;
  _pSize = 8;
  _total = 0;
  _albumImages: ImageDtoCheckbox[] = [];

  _isLoadingDeleteImage = false;
  _imageForDelete: ImageDtoCheckbox = null;
  constructor(
    public mediaSV: MediaService,
  ) {
    super();
    this.refreshUploaded();
  }

  ngOnInit(): void {
  }

  _onUploadSuccess(data: FiledropCallback) {
    this.onUploadSuccess.next(data);
    if (this.refreshAfterUpload) {
      this.refreshUploaded();
    }
  }
  _onUploadError(data: FiledropCallback) {
    this.onUploadError.next(data);
  }


  _onMediaSelect(image: ImageDtoCheckbox) {
    this.onMediaSelect.next(image);
  }
  _onMediaDelete(ev: MouseEvent, image: ImageDtoCheckbox) {
    ev.stopPropagation();
    if (!ev.isTrusted) { return; }

    this._imageForDelete = image;
    setTimeout(() => {
      this.modalConfirmDeleteImage.open();
    }, 0);
  }
  _onMediaDeleteConfirm() {
    this._isLoadingDeleteImage = true;
    this.mediaSV.apiAdminMediaDelete({ id: this._imageForDelete.id })
      .subscribe(() => {
        this._isLoadingDeleteImage = false;
        this._onMediaDeleteClose();
        this.refreshUploaded();
      }, () => {
        this._isLoadingDeleteImage = false;
      });
  }
  _onMediaDeleteClose() {
    this._imageForDelete = null;
    this.modalConfirmDeleteImage.close();
  }

  refreshUploaded() {
    this.mediaSV.apiAdminMediaAlbumPost$Json({ pi: this._pIndex, ps: this._pSize, sn: 'FileName', sd: false })
      .subscribe((data) => {
        this._albumImages = data.items
          .map((i) => new ImageDtoCheckbox().setData(i));
        this._total = data.total;
        this.refreshImageCheckboxes();
      });
  }
  refreshImageCheckboxes() {
    for (const i of this._albumImages) {
      i.isChecked = this._selectedIds.find(id => id === i.id) != null;
    }
  }
}

class ImageDtoCheckbox extends SetData<ImageDto> implements ImageDto {
  description?: null | string;
  fileName?: null | string;
  format?: null | string;
  id?: string;
  size?: null | string;
  sizeKb?: number;

  isChecked = false;
  isDeletable = true;
}
