import { Injectable } from '@angular/core';
import { AuthenticationState } from '../../api/models';
import { AppPolicy } from '../../guards/auth/auth.guard';
import { AuthService } from '../auth/auth.service';

/** @deprecated Use AuthService instead */
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  /** Wether the account profile has been recovered at least once */
  _isInitialized = false;
  get isAnonymous() { return this.accountProfile == null || this.accountProfile.isAnonymous; }
  private accountProfile: AuthenticationState = null;

  constructor(
    public authSV: AuthService,
  ) {
  }

  resetAccountProfile() {
    this.authSV.resetAccountProfile();
  }
  refreshAccountProfile() {
    return this.authSV.refreshAccountProfile();
  }
  isInPolicy(policy: AppPolicy) {
    return this.authSV.isInPolicy(policy);
  }
  isInPolicyInstant(policy: AppPolicy) {
    return this.isInPolicyInstant(policy);
  }
}
