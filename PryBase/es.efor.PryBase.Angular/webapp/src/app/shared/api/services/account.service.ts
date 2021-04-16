/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AccountLoginRequest } from '../models/account-login-request';
import { AuthenticationState } from '../models/authentication-state';
import { JsonWebTokenResponse } from '../models/json-web-token-response';
import { PolicyMenu } from '../models/policy-menu';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAccountTokenPost
   */
  static readonly ApiAccountTokenPostPath = '/api/account/token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountTokenPost$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountTokenPost$Plain$Response(params?: {
      body?: AccountLoginRequest
  }): Observable<StrictHttpResponse<JsonWebTokenResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountTokenPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonWebTokenResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountTokenPost$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountTokenPost$Plain(params?: {
      body?: AccountLoginRequest
  }): Observable<JsonWebTokenResponse> {

    return this.apiAccountTokenPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<JsonWebTokenResponse>) => r.body as JsonWebTokenResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountTokenPost$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountTokenPost$Json$Response(params?: {
      body?: AccountLoginRequest
  }): Observable<StrictHttpResponse<JsonWebTokenResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountTokenPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonWebTokenResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountTokenPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountTokenPost$Json(params?: {
      body?: AccountLoginRequest
  }): Observable<JsonWebTokenResponse> {

    return this.apiAccountTokenPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<JsonWebTokenResponse>) => r.body as JsonWebTokenResponse)
    );
  }

  /**
   * Path part for operation apiAccountLoginPost
   */
  static readonly ApiAccountLoginPostPath = '/api/account/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountLoginPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountLoginPost$Response(params?: {
      body?: AccountLoginRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountLoginPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountLoginPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountLoginPost(params?: {
      body?: AccountLoginRequest
  }): Observable<void> {

    return this.apiAccountLoginPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAccountPoliciesGet
   */
  static readonly ApiAccountPoliciesGetPath = '/api/account/policies';

  /**
   * Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountPoliciesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountPoliciesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PolicyMenu>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountPoliciesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PolicyMenu>>;
      })
    );
  }

  /**
   * Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountPoliciesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountPoliciesGet$Plain(params?: {

  }): Observable<Array<PolicyMenu>> {

    return this.apiAccountPoliciesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PolicyMenu>>) => r.body as Array<PolicyMenu>)
    );
  }

  /**
   * Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountPoliciesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountPoliciesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PolicyMenu>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountPoliciesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PolicyMenu>>;
      })
    );
  }

  /**
   * Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountPoliciesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountPoliciesGet$Json(params?: {

  }): Observable<Array<PolicyMenu>> {

    return this.apiAccountPoliciesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PolicyMenu>>) => r.body as Array<PolicyMenu>)
    );
  }

  /**
   * Path part for operation apiAccountLogoutPost
   */
  static readonly ApiAccountLogoutPostPath = '/api/account/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountLogoutPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountLogoutPost$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountLogoutPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountLogoutPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountLogoutPost(params?: {

  }): Observable<void> {

    return this.apiAccountLogoutPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAccountProfileGet
   */
  static readonly ApiAccountProfileGetPath = '/api/account/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountProfileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountProfileGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<AuthenticationState>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountProfileGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticationState>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountProfileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountProfileGet$Plain(params?: {

  }): Observable<AuthenticationState> {

    return this.apiAccountProfileGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthenticationState>) => r.body as AuthenticationState)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountProfileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountProfileGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<AuthenticationState>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountProfileGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticationState>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountProfileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountProfileGet$Json(params?: {

  }): Observable<AuthenticationState> {

    return this.apiAccountProfileGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthenticationState>) => r.body as AuthenticationState)
    );
  }

}
