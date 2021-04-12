import { Component, OnInit } from '@angular/core';
import { DictionaryService } from './shared/services/dictionary/dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public dictSV: DictionaryService,
  ) {
  }
  ngOnInit() {
  }
}
