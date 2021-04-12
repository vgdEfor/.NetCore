import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-array-translator',
  templateUrl: './array-translator.component.html',
  styleUrls: ['./array-translator.component.scss']
})
export class ArrayTranslatorComponent implements OnInit {
  _labels: string[] = [];
  @Input() set labels(values: string | string[]) {
    if (values == null) { values = []; }
    if (typeof (values) === 'string') { values = [values]; }
    this._labels = values;
    this.checkTranslations().finally(() => { });
  }
  @Input() isHtml = false;
  @Input() labelCssClass = null;

  constructor(
    public translateSV: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  private async checkTranslations() {
    if (environment.production) { return; }

    if (this._labels.length === 0) { return; }
    const translations: string | { [key: string]: string } = await this.translateSV.get(this._labels)
      .pipe(first(() => true))
      .toPromise();
    for (const l of this._labels) {
      if (translations[l] == null || (translations[l]).length === 0) {
        console.warn(`No translation for [${l}]`);
      }
    }
  }
}
