import { Injectable } from '@angular/core';
import {
  CanActivateChild, CanLoad, Route,
  UrlSegment, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router, CanActivate, Data
} from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryPolicies, PolicyMenu, PostPolicies, RoleManagementPolicies, ZityEntityPolicies } from '../../api/models';
import { AccessService } from '../../api/services';
import { AuthService } from '../../services/auth/auth.service';


/** @todo KEEP THIS UPDATED WITH POLICY ENUMS FROM API! */
export type AppPolicy = PolicyMenu | CategoryPolicies | PostPolicies | RoleManagementPolicies | ZityEntityPolicies;
interface RouteDataWithPolicy extends Data {
  policy?: AppPolicy;
}
interface ActivatedRouteSnapshotWithPolicy extends ActivatedRouteSnapshot {
  data: RouteDataWithPolicy;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    public accessSV: AccessService,
    public router: Router,
    public authSV: AuthService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshotWithPolicy,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivateChild(route, state, true);
  }

  canActivateChild(
    next: ActivatedRouteSnapshotWithPolicy,
    state: RouterStateSnapshot,
    fromInner = false): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const policy: AppPolicy = next.data && next.data.policy;
    return this.checkAccess(next.toString(), policy);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const policy: AppPolicy = route.data && route.data.policy;
    return this.checkAccess(([''].concat(segments.map(s => s.path))).join('/'), policy);
  }

  private async checkAccess(path: string, policy?: AppPolicy): Promise<boolean> {
    // const pAccess = this.accessSV.apiAccessAccessGet$Json({ p: path }).toPromise().catch(() => false);
    const pPermission = this.checkAccessByPolicy(policy).catch(() => false);

    const results = await Promise.all([/*pAccess,*/ pPermission]);
    const canAccess = results.every((success) => success && true);
    if (!canAccess) { this.router.navigate(['/auth']); }
    return canAccess;
  }

  private async checkAccessByPolicy(policy?: AppPolicy): Promise<boolean> {
    if (policy == null) {
      if (!this.authSV._isInitialized) {
        await this.authSV.refreshAccountProfile();
      }
      return true;
    } else {
      return await this.authSV
        .isInPolicy(policy)
        .catch(() => false);
    }
  }
}
