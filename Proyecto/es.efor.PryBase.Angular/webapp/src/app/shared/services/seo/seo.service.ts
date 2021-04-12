import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
// import { AppInfoService } from '../layout/app-info/app-info.service';
import { SetData } from '../../models/_basic/set-data';
import { TranslateService } from '@ngx-translate/core';
import { removeHtml } from '../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private _isInitted = false;
  public get isInitted() { return this._isInitted; }

  private tagsInUse: string[] = [];
  constructor(
    // public appInfoSV: AppInfoService,
    public metaSV: Meta,
    public titleSV: Title,
    public translate: TranslateService,
  ) { }

  /**
   * Sets the initial metadata values.
   */
  init() {
    // if (this.isInitted) { throw new Error('Metadata has already been initialized.'); }
    if (this.isInitted) { return new Promise<void>((resolve) => { resolve(); }); }
    this._isInitted = true;
    return this.setMetadata({});
  }

  setMetadata(data: Partial<SeoMetadata>, robots: MetadataRobotConfiguration[] = []) {
    return new Promise<void>((resolve) => {
      this.translate.get('APP_NAME').toPromise().then((APP_NAME) => {
        const phData = new SeoMetadata()
          .setData(this.sanitizeMetadata(data))
          .setData({ Author: data.Author || APP_NAME });
        this.titleSV.setTitle(`${(phData.Title ? `${phData.Title} | ` : '')}${APP_NAME}`);

        this.clearMetadata();

        const asMetadataDefinitions = phData.toMetaDefinitions(robots);
        this.tagsInUse = asMetadataDefinitions.map((t) => t.name);

        this.metaSV.addTags(asMetadataDefinitions, true);

        resolve();
      });
    });
  }
  clearMetadata() {
    for (const t of this.tagsInUse) {
      this.removeMetadataByName(t);
    }
  }

  private removeMetadataByName(tagName: string) {
    this.metaSV.removeTag(`name=${tagName}`);
  }

  private sanitizeMetadata(data: Partial<SeoMetadata>) {
    if (data == null) { data = {}; }
    if (data.Author) { data.Author = removeHtml(data.Author); }
    if (data.Description) { data.Description = removeHtml(data.Description); }
    if (data.Keywords) { data.Keywords = removeHtml(data.Keywords); }
    if (data.ObjUrl) { data.ObjUrl = removeHtml(data.ObjUrl); }
    if (data.ObjUrlFull) { data.ObjUrlFull = removeHtml(data.ObjUrlFull); }
    if (data.Title) { data.Title = removeHtml(data.Title); }

    return data;
  }
}

export class SeoMetadata extends SetData<SeoMetadata> {
  Description: string;
  Keywords: string;
  ObjId: number;
  ObjUrl: string;
  ObjUrlFull: string;
  Title: string;
  Author: string;

  toMetaDefinitions(robots: MetadataRobotConfiguration[]): MetaDefinition[] {
    if (!robots || robots.length === 0) { robots = [MetadataRobotConfiguration.Index, MetadataRobotConfiguration.Follow]; }
    return [
      { name: 'keywords', content: this.Keywords || '' },
      { name: 'description', content: this.Description || '' },
      { name: 'author', content: this.Author || '' },
      { name: 'robots', content: robots.join(', ') },
    ];
  }
}
export enum MetadataRobotConfiguration {
  All = 'all',
  NoIndex = 'noindex',
  NoFollow = 'nofollow',
  None = 'none',
  NoArchive = 'noarchive',
  NoSnippet = 'nosnippet',
  NoOdp = 'noodp',
  NoTranslate = 'notranslate',
  NoImageIndex = 'noimageindex',
  Index = 'index',
  Follow = 'follow',
  Archive = 'archive',
  Snippet = 'snippet',
  Odp = 'odp',
  Translate = 'translate',
  ImageIndex = 'imageindex',
}
