/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DetailDto } from '../models/detail-dto';
import { FunctionalityDto } from '../models/functionality-dto';
import { MenuDto } from '../models/menu-dto';
import { ModuleDto } from '../models/module-dto';
import { PermissionDto } from '../models/permission-dto';
import { UserDto } from '../models/user-dto';
import { UserDepartmentDto } from '../models/user-department-dto';
import { UserLevelDto } from '../models/user-level-dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUsersGetallusersGet
   */
  static readonly ApiUsersGetallusersGetPath = '/api/users/getallusers';

  /**
   * Returns a list of registered users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetallusersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallusersGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetallusersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDto>>;
      })
    );
  }

  /**
   * Returns a list of registered users.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetallusersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallusersGet$Plain(params?: {

  }): Observable<Array<UserDto>> {

    return this.apiUsersGetallusersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>) => r.body as Array<UserDto>)
    );
  }

  /**
   * Returns a list of registered users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetallusersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallusersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetallusersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDto>>;
      })
    );
  }

  /**
   * Returns a list of registered users.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetallusersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallusersGet$Json(params?: {

  }): Observable<Array<UserDto>> {

    return this.apiUsersGetallusersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>) => r.body as Array<UserDto>)
    );
  }

  /**
   * Path part for operation apiUsersGetuserbynameGet
   */
  static readonly ApiUsersGetuserbynameGetPath = '/api/users/getuserbyname';

  /**
   * Returns userDTO for the username specified.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetuserbynameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetuserbynameGet$Plain$Response(params?: {

    /**
     * Username to lookup
     */
    user?: null | string;

  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetuserbynameGetPath, 'get');
    if (params) {

      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * Returns userDTO for the username specified.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetuserbynameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetuserbynameGet$Plain(params?: {

    /**
     * Username to lookup
     */
    user?: null | string;

  }): Observable<UserDto> {

    return this.apiUsersGetuserbynameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * Returns userDTO for the username specified.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetuserbynameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetuserbynameGet$Json$Response(params?: {

    /**
     * Username to lookup
     */
    user?: null | string;

  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetuserbynameGetPath, 'get');
    if (params) {

      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * Returns userDTO for the username specified.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetuserbynameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetuserbynameGet$Json(params?: {

    /**
     * Username to lookup
     */
    user?: null | string;

  }): Observable<UserDto> {

    return this.apiUsersGetuserbynameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * Path part for operation apiUsersGetuserbyidGet
   */
  static readonly ApiUsersGetuserbyidGetPath = '/api/users/getuserbyid';

  /**
   * Returns userDTO for the user with the specified id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetuserbyidGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetuserbyidGet$Plain$Response(params?: {

    /**
     * User ID to lookup
     */
    id?: string;

  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetuserbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * Returns userDTO for the user with the specified id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetuserbyidGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetuserbyidGet$Plain(params?: {

    /**
     * User ID to lookup
     */
    id?: string;

  }): Observable<UserDto> {

    return this.apiUsersGetuserbyidGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * Returns userDTO for the user with the specified id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetuserbyidGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetuserbyidGet$Json$Response(params?: {

    /**
     * User ID to lookup
     */
    id?: string;

  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetuserbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * Returns userDTO for the user with the specified id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetuserbyidGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetuserbyidGet$Json(params?: {

    /**
     * User ID to lookup
     */
    id?: string;

  }): Observable<UserDto> {

    return this.apiUsersGetuserbyidGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * Path part for operation apiUsersGetusersbydepartmentGet
   */
  static readonly ApiUsersGetusersbydepartmentGetPath = '/api/users/getusersbydepartment';

  /**
   * Returns a number of users by department Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetusersbydepartmentGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetusersbydepartmentGet$Plain$Response(params?: {

    /**
     * Department Id
     */
    departmentId?: number;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetusersbydepartmentGetPath, 'get');
    if (params) {

      rb.query('departmentId', params.departmentId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Returns a number of users by department Id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetusersbydepartmentGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetusersbydepartmentGet$Plain(params?: {

    /**
     * Department Id
     */
    departmentId?: number;

  }): Observable<number> {

    return this.apiUsersGetusersbydepartmentGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Returns a number of users by department Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetusersbydepartmentGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetusersbydepartmentGet$Json$Response(params?: {

    /**
     * Department Id
     */
    departmentId?: number;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetusersbydepartmentGetPath, 'get');
    if (params) {

      rb.query('departmentId', params.departmentId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Returns a number of users by department Id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetusersbydepartmentGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetusersbydepartmentGet$Json(params?: {

    /**
     * Department Id
     */
    departmentId?: number;

  }): Observable<number> {

    return this.apiUsersGetusersbydepartmentGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiUsersGetalladusersGet
   */
  static readonly ApiUsersGetalladusersGetPath = '/api/users/getalladusers';

  /**
   * Return list of all users of Active Directory.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetalladusersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalladusersGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetalladusersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Return list of all users of Active Directory.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetalladusersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalladusersGet$Plain(params?: {

  }): Observable<Array<string>> {

    return this.apiUsersGetalladusersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Return list of all users of Active Directory.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetalladusersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalladusersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetalladusersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Return list of all users of Active Directory.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetalladusersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalladusersGet$Json(params?: {

  }): Observable<Array<string>> {

    return this.apiUsersGetalladusersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation apiUsersGetmenubyuserGet
   */
  static readonly ApiUsersGetmenubyuserGetPath = '/api/users/getmenubyuser';

  /**
   * Returns the menu nodes for the user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetmenubyuserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetmenubyuserGet$Plain$Response(params?: {

    /**
     * Selected user
     */
    user?: null | string;

  }): Observable<StrictHttpResponse<MenuDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetmenubyuserGetPath, 'get');
    if (params) {

      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MenuDto>;
      })
    );
  }

  /**
   * Returns the menu nodes for the user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetmenubyuserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetmenubyuserGet$Plain(params?: {

    /**
     * Selected user
     */
    user?: null | string;

  }): Observable<MenuDto> {

    return this.apiUsersGetmenubyuserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MenuDto>) => r.body as MenuDto)
    );
  }

  /**
   * Returns the menu nodes for the user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetmenubyuserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetmenubyuserGet$Json$Response(params?: {

    /**
     * Selected user
     */
    user?: null | string;

  }): Observable<StrictHttpResponse<MenuDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetmenubyuserGetPath, 'get');
    if (params) {

      rb.query('user', params.user, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MenuDto>;
      })
    );
  }

  /**
   * Returns the menu nodes for the user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetmenubyuserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetmenubyuserGet$Json(params?: {

    /**
     * Selected user
     */
    user?: null | string;

  }): Observable<MenuDto> {

    return this.apiUsersGetmenubyuserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MenuDto>) => r.body as MenuDto)
    );
  }

  /**
   * Path part for operation apiUsersGetalldepartmentsGet
   */
  static readonly ApiUsersGetalldepartmentsGetPath = '/api/users/getalldepartments';

  /**
   * Returns all departments.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetalldepartmentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalldepartmentsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserDepartmentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetalldepartmentsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDepartmentDto>>;
      })
    );
  }

  /**
   * Returns all departments.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetalldepartmentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalldepartmentsGet$Plain(params?: {

  }): Observable<Array<UserDepartmentDto>> {

    return this.apiUsersGetalldepartmentsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDepartmentDto>>) => r.body as Array<UserDepartmentDto>)
    );
  }

  /**
   * Returns all departments.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetalldepartmentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalldepartmentsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserDepartmentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetalldepartmentsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDepartmentDto>>;
      })
    );
  }

  /**
   * Returns all departments.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetalldepartmentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalldepartmentsGet$Json(params?: {

  }): Observable<Array<UserDepartmentDto>> {

    return this.apiUsersGetalldepartmentsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDepartmentDto>>) => r.body as Array<UserDepartmentDto>)
    );
  }

  /**
   * Path part for operation apiUsersGetalllevelsGet
   */
  static readonly ApiUsersGetalllevelsGetPath = '/api/users/getalllevels';

  /**
   * Returns all levels.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetalllevelsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalllevelsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserLevelDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetalllevelsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserLevelDto>>;
      })
    );
  }

  /**
   * Returns all levels.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetalllevelsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalllevelsGet$Plain(params?: {

  }): Observable<Array<UserLevelDto>> {

    return this.apiUsersGetalllevelsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserLevelDto>>) => r.body as Array<UserLevelDto>)
    );
  }

  /**
   * Returns all levels.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetalllevelsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalllevelsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserLevelDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetalllevelsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserLevelDto>>;
      })
    );
  }

  /**
   * Returns all levels.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetalllevelsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalllevelsGet$Json(params?: {

  }): Observable<Array<UserLevelDto>> {

    return this.apiUsersGetalllevelsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserLevelDto>>) => r.body as Array<UserLevelDto>)
    );
  }

  /**
   * Path part for operation apiUsersGetdepartmentbyidGet
   */
  static readonly ApiUsersGetdepartmentbyidGetPath = '/api/users/getdepartmentbyid';

  /**
   * Returns UserDepartmentDTO for the department with the specified id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetdepartmentbyidGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetdepartmentbyidGet$Plain$Response(params?: {

    /**
     * Department ID to lookup
     */
    id?: number;

  }): Observable<StrictHttpResponse<UserDepartmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetdepartmentbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDepartmentDto>;
      })
    );
  }

  /**
   * Returns UserDepartmentDTO for the department with the specified id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetdepartmentbyidGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetdepartmentbyidGet$Plain(params?: {

    /**
     * Department ID to lookup
     */
    id?: number;

  }): Observable<UserDepartmentDto> {

    return this.apiUsersGetdepartmentbyidGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDepartmentDto>) => r.body as UserDepartmentDto)
    );
  }

  /**
   * Returns UserDepartmentDTO for the department with the specified id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetdepartmentbyidGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetdepartmentbyidGet$Json$Response(params?: {

    /**
     * Department ID to lookup
     */
    id?: number;

  }): Observable<StrictHttpResponse<UserDepartmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetdepartmentbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDepartmentDto>;
      })
    );
  }

  /**
   * Returns UserDepartmentDTO for the department with the specified id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetdepartmentbyidGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetdepartmentbyidGet$Json(params?: {

    /**
     * Department ID to lookup
     */
    id?: number;

  }): Observable<UserDepartmentDto> {

    return this.apiUsersGetdepartmentbyidGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserDepartmentDto>) => r.body as UserDepartmentDto)
    );
  }

  /**
   * Path part for operation apiUsersGetlevelbyidGet
   */
  static readonly ApiUsersGetlevelbyidGetPath = '/api/users/getlevelbyid';

  /**
   * Returns UserLevelDTO for the level with the specified id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetlevelbyidGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetlevelbyidGet$Plain$Response(params?: {

    /**
     * Level ID to lookup
     */
    id?: number;

  }): Observable<StrictHttpResponse<UserLevelDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetlevelbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserLevelDto>;
      })
    );
  }

  /**
   * Returns UserLevelDTO for the level with the specified id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetlevelbyidGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetlevelbyidGet$Plain(params?: {

    /**
     * Level ID to lookup
     */
    id?: number;

  }): Observable<UserLevelDto> {

    return this.apiUsersGetlevelbyidGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserLevelDto>) => r.body as UserLevelDto)
    );
  }

  /**
   * Returns UserLevelDTO for the level with the specified id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetlevelbyidGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetlevelbyidGet$Json$Response(params?: {

    /**
     * Level ID to lookup
     */
    id?: number;

  }): Observable<StrictHttpResponse<UserLevelDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetlevelbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserLevelDto>;
      })
    );
  }

  /**
   * Returns UserLevelDTO for the level with the specified id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetlevelbyidGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetlevelbyidGet$Json(params?: {

    /**
     * Level ID to lookup
     */
    id?: number;

  }): Observable<UserLevelDto> {

    return this.apiUsersGetlevelbyidGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserLevelDto>) => r.body as UserLevelDto)
    );
  }

  /**
   * Path part for operation apiUsersGetallmodulesGet
   */
  static readonly ApiUsersGetallmodulesGetPath = '/api/users/getallmodules';

  /**
   * Returns all modules.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetallmodulesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallmodulesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ModuleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetallmodulesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ModuleDto>>;
      })
    );
  }

  /**
   * Returns all modules.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetallmodulesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallmodulesGet$Plain(params?: {

  }): Observable<Array<ModuleDto>> {

    return this.apiUsersGetallmodulesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ModuleDto>>) => r.body as Array<ModuleDto>)
    );
  }

  /**
   * Returns all modules.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetallmodulesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallmodulesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ModuleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetallmodulesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ModuleDto>>;
      })
    );
  }

  /**
   * Returns all modules.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetallmodulesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallmodulesGet$Json(params?: {

  }): Observable<Array<ModuleDto>> {

    return this.apiUsersGetallmodulesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ModuleDto>>) => r.body as Array<ModuleDto>)
    );
  }

  /**
   * Path part for operation apiUsersGetallfunctionalitiesGet
   */
  static readonly ApiUsersGetallfunctionalitiesGetPath = '/api/users/getallfunctionalities';

  /**
   * Returns all functionalities.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetallfunctionalitiesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallfunctionalitiesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<FunctionalityDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetallfunctionalitiesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FunctionalityDto>>;
      })
    );
  }

  /**
   * Returns all functionalities.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetallfunctionalitiesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallfunctionalitiesGet$Plain(params?: {

  }): Observable<Array<FunctionalityDto>> {

    return this.apiUsersGetallfunctionalitiesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FunctionalityDto>>) => r.body as Array<FunctionalityDto>)
    );
  }

  /**
   * Returns all functionalities.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetallfunctionalitiesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallfunctionalitiesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<FunctionalityDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetallfunctionalitiesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FunctionalityDto>>;
      })
    );
  }

  /**
   * Returns all functionalities.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetallfunctionalitiesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetallfunctionalitiesGet$Json(params?: {

  }): Observable<Array<FunctionalityDto>> {

    return this.apiUsersGetallfunctionalitiesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FunctionalityDto>>) => r.body as Array<FunctionalityDto>)
    );
  }

  /**
   * Path part for operation apiUsersGetalldetailsGet
   */
  static readonly ApiUsersGetalldetailsGetPath = '/api/users/getalldetails';

  /**
   * Returns all details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetalldetailsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalldetailsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<DetailDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetalldetailsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DetailDto>>;
      })
    );
  }

  /**
   * Returns all details.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetalldetailsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalldetailsGet$Plain(params?: {

  }): Observable<Array<DetailDto>> {

    return this.apiUsersGetalldetailsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DetailDto>>) => r.body as Array<DetailDto>)
    );
  }

  /**
   * Returns all details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetalldetailsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalldetailsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<DetailDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetalldetailsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DetailDto>>;
      })
    );
  }

  /**
   * Returns all details.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetalldetailsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetalldetailsGet$Json(params?: {

  }): Observable<Array<DetailDto>> {

    return this.apiUsersGetalldetailsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DetailDto>>) => r.body as Array<DetailDto>)
    );
  }

  /**
   * Path part for operation apiUsersGetpermissionbyfilterGet
   */
  static readonly ApiUsersGetpermissionbyfilterGetPath = '/api/users/getpermissionbyfilter';

  /**
   * Returns the permission by filter.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetpermissionbyfilterGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetpermissionbyfilterGet$Plain$Response(params?: {

    /**
     * Department to search permissions
     */
    department?: number;

    /**
     * Level to search permissions
     */
    level?: number;

    /**
     * Functionality to search permissions
     */
    functionality?: number;

    /**
     * Detail to search permissions
     */
    detail?: number;

  }): Observable<StrictHttpResponse<PermissionDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetpermissionbyfilterGetPath, 'get');
    if (params) {

      rb.query('department', params.department, {});
      rb.query('level', params.level, {});
      rb.query('functionality', params.functionality, {});
      rb.query('detail', params.detail, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PermissionDto>;
      })
    );
  }

  /**
   * Returns the permission by filter.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetpermissionbyfilterGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetpermissionbyfilterGet$Plain(params?: {

    /**
     * Department to search permissions
     */
    department?: number;

    /**
     * Level to search permissions
     */
    level?: number;

    /**
     * Functionality to search permissions
     */
    functionality?: number;

    /**
     * Detail to search permissions
     */
    detail?: number;

  }): Observable<PermissionDto> {

    return this.apiUsersGetpermissionbyfilterGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PermissionDto>) => r.body as PermissionDto)
    );
  }

  /**
   * Returns the permission by filter.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetpermissionbyfilterGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetpermissionbyfilterGet$Json$Response(params?: {

    /**
     * Department to search permissions
     */
    department?: number;

    /**
     * Level to search permissions
     */
    level?: number;

    /**
     * Functionality to search permissions
     */
    functionality?: number;

    /**
     * Detail to search permissions
     */
    detail?: number;

  }): Observable<StrictHttpResponse<PermissionDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetpermissionbyfilterGetPath, 'get');
    if (params) {

      rb.query('department', params.department, {});
      rb.query('level', params.level, {});
      rb.query('functionality', params.functionality, {});
      rb.query('detail', params.detail, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PermissionDto>;
      })
    );
  }

  /**
   * Returns the permission by filter.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetpermissionbyfilterGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetpermissionbyfilterGet$Json(params?: {

    /**
     * Department to search permissions
     */
    department?: number;

    /**
     * Level to search permissions
     */
    level?: number;

    /**
     * Functionality to search permissions
     */
    functionality?: number;

    /**
     * Detail to search permissions
     */
    detail?: number;

  }): Observable<PermissionDto> {

    return this.apiUsersGetpermissionbyfilterGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PermissionDto>) => r.body as PermissionDto)
    );
  }

  /**
   * Path part for operation apiUsersGetpermissionsbydepartmentGet
   */
  static readonly ApiUsersGetpermissionsbydepartmentGetPath = '/api/users/getpermissionsbydepartment';

  /**
   * Returns number of permissions by department Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetpermissionsbydepartmentGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetpermissionsbydepartmentGet$Plain$Response(params?: {

    /**
     * Department Id
     */
    departmentId?: number;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetpermissionsbydepartmentGetPath, 'get');
    if (params) {

      rb.query('departmentId', params.departmentId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Returns number of permissions by department Id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetpermissionsbydepartmentGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetpermissionsbydepartmentGet$Plain(params?: {

    /**
     * Department Id
     */
    departmentId?: number;

  }): Observable<number> {

    return this.apiUsersGetpermissionsbydepartmentGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Returns number of permissions by department Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetpermissionsbydepartmentGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetpermissionsbydepartmentGet$Json$Response(params?: {

    /**
     * Department Id
     */
    departmentId?: number;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetpermissionsbydepartmentGetPath, 'get');
    if (params) {

      rb.query('departmentId', params.departmentId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Returns number of permissions by department Id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetpermissionsbydepartmentGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGetpermissionsbydepartmentGet$Json(params?: {

    /**
     * Department Id
     */
    departmentId?: number;

  }): Observable<number> {

    return this.apiUsersGetpermissionsbydepartmentGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiUsersSetuserPost
   */
  static readonly ApiUsersSetuserPostPath = '/api/users/setuser';

  /**
   * Saves the user to DB. If the user already exist, update it.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersSetuserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetuserPost$Plain$Response(params?: {
  
    /**
     * User to save
     */
    body?: UserDto
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersSetuserPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Saves the user to DB. If the user already exist, update it.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersSetuserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetuserPost$Plain(params?: {
  
    /**
     * User to save
     */
    body?: UserDto
  }): Observable<boolean> {

    return this.apiUsersSetuserPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Saves the user to DB. If the user already exist, update it.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersSetuserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetuserPost$Json$Response(params?: {
  
    /**
     * User to save
     */
    body?: UserDto
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersSetuserPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Saves the user to DB. If the user already exist, update it.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersSetuserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetuserPost$Json(params?: {
  
    /**
     * User to save
     */
    body?: UserDto
  }): Observable<boolean> {

    return this.apiUsersSetuserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUsersSetdepartmentPost
   */
  static readonly ApiUsersSetdepartmentPostPath = '/api/users/setdepartment';

  /**
   * Saves the department to DB. If the department already exist, update it.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersSetdepartmentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetdepartmentPost$Plain$Response(params?: {
  
    /**
     * Department to save
     */
    body?: UserDepartmentDto
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersSetdepartmentPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Saves the department to DB. If the department already exist, update it.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersSetdepartmentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetdepartmentPost$Plain(params?: {
  
    /**
     * Department to save
     */
    body?: UserDepartmentDto
  }): Observable<boolean> {

    return this.apiUsersSetdepartmentPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Saves the department to DB. If the department already exist, update it.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersSetdepartmentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetdepartmentPost$Json$Response(params?: {
  
    /**
     * Department to save
     */
    body?: UserDepartmentDto
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersSetdepartmentPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Saves the department to DB. If the department already exist, update it.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersSetdepartmentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetdepartmentPost$Json(params?: {
  
    /**
     * Department to save
     */
    body?: UserDepartmentDto
  }): Observable<boolean> {

    return this.apiUsersSetdepartmentPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUsersGetpermissionsPost
   */
  static readonly ApiUsersGetpermissionsPostPath = '/api/users/getpermissions';

  /**
   * Returns all the permission for the specified user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetpermissionsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersGetpermissionsPost$Plain$Response(params?: {

    /**
     * Level to search permissions
     */
    level?: number;
  
    /**
     * Department
     */
    body?: null | Array<string>
  }): Observable<StrictHttpResponse<Array<PermissionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetpermissionsPostPath, 'post');
    if (params) {

      rb.query('level', params.level, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PermissionDto>>;
      })
    );
  }

  /**
   * Returns all the permission for the specified user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetpermissionsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersGetpermissionsPost$Plain(params?: {

    /**
     * Level to search permissions
     */
    level?: number;
  
    /**
     * Department
     */
    body?: null | Array<string>
  }): Observable<Array<PermissionDto>> {

    return this.apiUsersGetpermissionsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PermissionDto>>) => r.body as Array<PermissionDto>)
    );
  }

  /**
   * Returns all the permission for the specified user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGetpermissionsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersGetpermissionsPost$Json$Response(params?: {

    /**
     * Level to search permissions
     */
    level?: number;
  
    /**
     * Department
     */
    body?: null | Array<string>
  }): Observable<StrictHttpResponse<Array<PermissionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetpermissionsPostPath, 'post');
    if (params) {

      rb.query('level', params.level, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PermissionDto>>;
      })
    );
  }

  /**
   * Returns all the permission for the specified user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGetpermissionsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersGetpermissionsPost$Json(params?: {

    /**
     * Level to search permissions
     */
    level?: number;
  
    /**
     * Department
     */
    body?: null | Array<string>
  }): Observable<Array<PermissionDto>> {

    return this.apiUsersGetpermissionsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PermissionDto>>) => r.body as Array<PermissionDto>)
    );
  }

  /**
   * Path part for operation apiUsersSetpermissionsPost
   */
  static readonly ApiUsersSetpermissionsPostPath = '/api/users/setpermissions';

  /**
   * Saves the lines for a set of permissions to DB.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersSetpermissionsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetpermissionsPost$Plain$Response(params?: {
  
    /**
     * Department to save
     */
    body?: null | Array<PermissionDto>
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersSetpermissionsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Saves the lines for a set of permissions to DB.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersSetpermissionsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetpermissionsPost$Plain(params?: {
  
    /**
     * Department to save
     */
    body?: null | Array<PermissionDto>
  }): Observable<boolean> {

    return this.apiUsersSetpermissionsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Saves the lines for a set of permissions to DB.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersSetpermissionsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetpermissionsPost$Json$Response(params?: {
  
    /**
     * Department to save
     */
    body?: null | Array<PermissionDto>
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersSetpermissionsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Saves the lines for a set of permissions to DB.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersSetpermissionsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersSetpermissionsPost$Json(params?: {
  
    /**
     * Department to save
     */
    body?: null | Array<PermissionDto>
  }): Observable<boolean> {

    return this.apiUsersSetpermissionsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUsersDeleteuserDelete
   */
  static readonly ApiUsersDeleteuserDeletePath = '/api/users/deleteuser';

  /**
   * Logic delete the user from DB.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersDeleteuserDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeleteuserDelete$Plain$Response(params?: {
    id?: string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersDeleteuserDeletePath, 'delete');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Logic delete the user from DB.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersDeleteuserDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeleteuserDelete$Plain(params?: {
    id?: string;

  }): Observable<boolean> {

    return this.apiUsersDeleteuserDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Logic delete the user from DB.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersDeleteuserDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeleteuserDelete$Json$Response(params?: {
    id?: string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersDeleteuserDeletePath, 'delete');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Logic delete the user from DB.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersDeleteuserDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeleteuserDelete$Json(params?: {
    id?: string;

  }): Observable<boolean> {

    return this.apiUsersDeleteuserDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUsersDeletedepartmentDelete
   */
  static readonly ApiUsersDeletedepartmentDeletePath = '/api/users/deletedepartment';

  /**
   * Logic delete the department from DB.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersDeletedepartmentDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeletedepartmentDelete$Plain$Response(params?: {

    /**
     * Department ID to delete
     */
    id?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersDeletedepartmentDeletePath, 'delete');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Logic delete the department from DB.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersDeletedepartmentDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeletedepartmentDelete$Plain(params?: {

    /**
     * Department ID to delete
     */
    id?: number;

  }): Observable<boolean> {

    return this.apiUsersDeletedepartmentDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Logic delete the department from DB.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersDeletedepartmentDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeletedepartmentDelete$Json$Response(params?: {

    /**
     * Department ID to delete
     */
    id?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersDeletedepartmentDeletePath, 'delete');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Logic delete the department from DB.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersDeletedepartmentDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeletedepartmentDelete$Json(params?: {

    /**
     * Department ID to delete
     */
    id?: number;

  }): Observable<boolean> {

    return this.apiUsersDeletedepartmentDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
