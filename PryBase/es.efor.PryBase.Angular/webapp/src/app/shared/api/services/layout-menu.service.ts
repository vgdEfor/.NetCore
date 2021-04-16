/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LayoutMenuItem } from '../models/layout-menu-item';

@Injectable({
  providedIn: 'root',
})
export class LayoutMenuService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminLayoutmenuGet
   */
  static readonly ApiAdminLayoutmenuGetPath = '/api/admin/layoutmenu';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLayoutmenuGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLayoutmenuGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<LayoutMenuItem>>> {

    const rb = new RequestBuilder(this.rootUrl, LayoutMenuService.ApiAdminLayoutmenuGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LayoutMenuItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLayoutmenuGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLayoutmenuGet$Plain(params?: {

  }): Observable<Array<LayoutMenuItem>> {

    return this.apiAdminLayoutmenuGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LayoutMenuItem>>) => r.body as Array<LayoutMenuItem>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLayoutmenuGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLayoutmenuGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<LayoutMenuItem>>> {

    const rb = new RequestBuilder(this.rootUrl, LayoutMenuService.ApiAdminLayoutmenuGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LayoutMenuItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLayoutmenuGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLayoutmenuGet$Json(params?: {

  }): Observable<Array<LayoutMenuItem>> {

    return this.apiAdminLayoutmenuGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LayoutMenuItem>>) => r.body as Array<LayoutMenuItem>)
    );
  }

}
