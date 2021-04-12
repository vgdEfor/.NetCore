import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationState } from '../../api/models';
import { AccountService } from '../../api/services';
import { AppPolicy } from '../../guards/auth/auth.guard';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /** Wether the account profile has been recovered at least once */
  _isInitialized = false;
  get isAnonymous() { return this.accountProfile == null || this.accountProfile.isAnonymous; }
  private accountProfile: AuthenticationState = null;

  constructor(
    public accSV: AccountService,
    public tokenSV: TokenService,
  ) { }


  resetAccountProfile() {
    this.accountProfile = null;
  }
  refreshAccountProfile() {
    return new Promise<void>((resolve) => {
      this.accSV.apiAccountProfileGet$Json()
        .subscribe((data) => {
          this.accountProfile = data;
          this._isInitialized = true;
          resolve();
        }, () => {
          resolve();
        });
    });
  }
  async isInPolicy(policy: AppPolicy) {
    if (this.accountProfile == null || this.accountProfile.permissions == null) {
      await this.refreshAccountProfile().catch(() => { });
    }
    const isInPolicy = this.isInPolicyInstant(policy);
    return isInPolicy;
  }
  isInPolicyInstant(policy: AppPolicy) {
    return this.accountProfile != null
      && this.accountProfile.permissions != null
      && this.accountProfile.permissions.indexOf(policy) >= 0;
  }


  async logout() {
    // // JWT does not need to call to server. Instead, just
    // // delete the JWT token.
    // await this.accSV.apiAccountLogoutPost().pipe(first()).toPromise();

    this.tokenSV.setStoredToken(null);
    await this.refreshAccountProfile();
  }
}
