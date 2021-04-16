import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/shared/api/services';
import { ServerSideError } from 'src/app/shared/interceptors/api-error/api-error.interceptor';
import { MetadataRobotConfiguration, SeoService } from 'src/app/shared/services/seo/seo.service';
import { first } from 'rxjs/operators';
import { TokenService } from 'src/app/shared/services/token/token.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { StringUtilities } from 'ax-toolbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  _isLoading = false;
  _userData: any = {};
  _errors: any = {};
  _errorMessage: string = null;

  private subs: Subscription[] = [];
  private returnUrl;
  constructor(
    public cdref: ChangeDetectorRef,
    public aRoute: ActivatedRoute,
    public router: Router,
    public accSV: AccountService,
    public authSV: AuthService,
    public seo: SeoService,
    public tokenSV: TokenService,
  ) {
    this.initListeners();

    this.seo.clearMetadata();
    this.seo.setMetadata({}, [MetadataRobotConfiguration.None]);
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }

  onFormSubmit(ev: SubmitEvent) {
    if (!ev.isTrusted) { return; }

    this._isLoading = true;
    this._errors = {};
    this.cdref.detectChanges();

    this.authWithJwt()
    // this.authWithCookies()
      .then(
        () => {
          let redirectTo = this.returnUrl;
          this.authSV.refreshAccountProfile()
            .then(() => {
              this._userData = {};
              this.cdref.detectChanges();
              if (StringUtilities.isNullOrWhitespace(redirectTo) || redirectTo === '/') {
                redirectTo = '/';
              }
              const angularRoute = this.router.parseUrl(redirectTo);
              this.router.navigateByUrl(angularRoute).then(() => { });
            });
        },
        (err) => {
          if (err instanceof ServerSideError) {
            this._errors = err.errorData;
          }

          this._isLoading = false;
          this.cdref.detectChanges();
        });
  }

  private authWithJwt() {
    return new Promise<void>((resolve, reject) => {
      this.accSV.apiAccountTokenPost$Json({ body: this._userData })
        .pipe(first(() => true))
        .subscribe(
          (data) => {
            this.tokenSV.setStoredToken(data);
            resolve();
          }, (err: ServerSideError | any) => {
            reject(err);
          });
    });
  }
  private authWithCookies() {
    return new Promise<void>((resolve, reject) => {
      this.accSV.apiAccountLoginPost({ body: this._userData })
        .pipe(first(() => true))
        .subscribe(
          () => {
            resolve();
          }, (err: ServerSideError | any) => {
            reject(err);
          });
    });
  }


  private initListeners() {
    const s = this.aRoute.queryParamMap.subscribe((p) => {
      this._errorMessage = p.get('errMsg');
      this.returnUrl = p.get('ReturnUrl');
    });
    this.subs.push(s);
  }
}
interface SubmitEvent {
  bubbles: boolean;
  cancelBubble: boolean;
  cancelable: boolean;
  composed: boolean;
  currentTarget?: HTMLElement;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  path: HTMLElement[];
  returnValue: boolean;
  srcElement: HTMLElement;
  submitter: HTMLButtonElement | HTMLElement;
  target: HTMLFormElement;
  timeStamp: number;
  type: string;
}
