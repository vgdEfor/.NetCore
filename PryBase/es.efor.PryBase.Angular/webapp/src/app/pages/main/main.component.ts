import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router, NavigationStart } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';
import { DestroySubscriptionsDirective } from 'src/app/shared/models/_basic/destroy-subscriptions';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { LayoutMenuItem } from 'ax-toolbox';
import { LayoutMenuService } from 'src/app/shared/api/services/layout-menu.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { AppMenuService } from 'src/app/shared/services/app-menu/app-menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends DestroySubscriptionsDirective implements OnInit {
  _menuItems: LayoutMenuItem[] = [];
  _menuOpenned = false;

  constructor(
    public cdRef: ChangeDetectorRef,
    public router: Router,
    public translate: TranslateService,
    public menuService: AppMenuService,
    public bsLocaleService: BsLocaleService,
    public authSV: AuthService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initMenuItems();
    this.initRouterListeners();
    this.initLangListeners();
  }


  private async initMenuItems() {
    const data = await this.menuService.getMenuItems();
    const asMenuItems = data.map((apiMenu) => new LayoutMenuItem()
      .setData(apiMenu as any)
      .setData({ label: this.translate.instant(apiMenu.label) }));
    this._menuItems = asMenuItems;
  }

  private initRouterListeners() {
    const s = this.router.events
      .pipe(filter(e => e instanceof NavigationStart), debounceTime(100))
      .subscribe((data) => {
        this._menuOpenned = false;
      });
    this.subs.push(s);
  }

  private initLangListeners() {
    this.bsLocaleService.use('es');
    const s = this.translate.onLangChange
      .subscribe((data: LangChangeEvent) => {
        this.bsLocaleService.use(data.lang);
      });
    this.subs.push(s);
  }
}
