/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { FilterCriteria } from '../models/filter-criteria';
import { Int32LabelAndValue } from '../models/int-32-label-and-value';
import { Project } from '../models/project';
import { ProjectCollectionList } from '../models/project-collection-list';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProjectInsertPost
   */
  static readonly ApiProjectInsertPostPath = '/api/project/insert';

  /**
   * Añade un nuevo proyecto.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectInsertPost$Plain$Response(params?: {
    commit?: boolean;
      body?: Project
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectInsertPostPath, 'post');
    if (params) {

      rb.query('commit', params.commit, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Añade un nuevo proyecto.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectInsertPost$Plain(params?: {
    commit?: boolean;
      body?: Project
  }): Observable<Project> {

    return this.apiProjectInsertPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Añade un nuevo proyecto.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectInsertPost$Json$Response(params?: {
    commit?: boolean;
      body?: Project
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectInsertPostPath, 'post');
    if (params) {

      rb.query('commit', params.commit, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Añade un nuevo proyecto.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectInsertPost$Json(params?: {
    commit?: boolean;
      body?: Project
  }): Observable<Project> {

    return this.apiProjectInsertPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation apiProjectUpdatePost
   */
  static readonly ApiProjectUpdatePostPath = '/api/project/update';

  /**
   * Edita un proyecto.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectUpdatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectUpdatePost$Plain$Response(params?: {
    commit?: boolean;
      body?: Project
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectUpdatePostPath, 'post');
    if (params) {

      rb.query('commit', params.commit, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Edita un proyecto.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectUpdatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectUpdatePost$Plain(params?: {
    commit?: boolean;
      body?: Project
  }): Observable<Project> {

    return this.apiProjectUpdatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Edita un proyecto.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectUpdatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectUpdatePost$Json$Response(params?: {
    commit?: boolean;
      body?: Project
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectUpdatePostPath, 'post');
    if (params) {

      rb.query('commit', params.commit, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Edita un proyecto.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectUpdatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectUpdatePost$Json(params?: {
    commit?: boolean;
      body?: Project
  }): Observable<Project> {

    return this.apiProjectUpdatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation apiProjectDeleteDelete
   */
  static readonly ApiProjectDeleteDeletePath = '/api/project/delete';

  /**
   * Borra proyecto.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectDeleteDelete$Plain$Response(params?: {
    data?: number;
    commit?: boolean;

  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectDeleteDeletePath, 'delete');
    if (params) {

      rb.query('data', params.data, {});
      rb.query('commit', params.commit, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Borra proyecto.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectDeleteDelete$Plain(params?: {
    data?: number;
    commit?: boolean;

  }): Observable<Project> {

    return this.apiProjectDeleteDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Borra proyecto.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectDeleteDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectDeleteDelete$Json$Response(params?: {
    data?: number;
    commit?: boolean;

  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectDeleteDeletePath, 'delete');
    if (params) {

      rb.query('data', params.data, {});
      rb.query('commit', params.commit, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Borra proyecto.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectDeleteDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectDeleteDelete$Json(params?: {
    data?: number;
    commit?: boolean;

  }): Observable<Project> {

    return this.apiProjectDeleteDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation apiProjectGetbyidGet
   */
  static readonly ApiProjectGetbyidGetPath = '/api/project/getbyid';

  /**
   * Get project by Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetbyidGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetbyidGet$Plain$Response(params?: {
    clave?: number;

  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetbyidGetPath, 'get');
    if (params) {

      rb.query('clave', params.clave, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Get project by Id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetbyidGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetbyidGet$Plain(params?: {
    clave?: number;

  }): Observable<Project> {

    return this.apiProjectGetbyidGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Get project by Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetbyidGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetbyidGet$Json$Response(params?: {
    clave?: number;

  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetbyidGetPath, 'get');
    if (params) {

      rb.query('clave', params.clave, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Get project by Id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetbyidGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetbyidGet$Json(params?: {
    clave?: number;

  }): Observable<Project> {

    return this.apiProjectGetbyidGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation apiProjectGetlistPost
   */
  static readonly ApiProjectGetlistPostPath = '/api/project/getlist';

  /**
   * Get Project.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetlistPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetlistPost$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<ProjectCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetlistPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectCollectionList>;
      })
    );
  }

  /**
   * Get Project.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetlistPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetlistPost$Plain(params?: {

  }): Observable<ProjectCollectionList> {

    return this.apiProjectGetlistPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectCollectionList>) => r.body as ProjectCollectionList)
    );
  }

  /**
   * Get Project.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetlistPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetlistPost$Json$Response(params?: {

  }): Observable<StrictHttpResponse<ProjectCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetlistPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectCollectionList>;
      })
    );
  }

  /**
   * Get Project.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetlistPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetlistPost$Json(params?: {

  }): Observable<ProjectCollectionList> {

    return this.apiProjectGetlistPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectCollectionList>) => r.body as ProjectCollectionList)
    );
  }

  /**
   * Path part for operation apiProjectPrioritylistGet
   */
  static readonly ApiProjectPrioritylistGetPath = '/api/project/prioritylist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectPrioritylistGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectPrioritylistGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Int32LabelAndValue>>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectPrioritylistGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Int32LabelAndValue>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectPrioritylistGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectPrioritylistGet$Plain(params?: {

  }): Observable<Array<Int32LabelAndValue>> {

    return this.apiProjectPrioritylistGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Int32LabelAndValue>>) => r.body as Array<Int32LabelAndValue>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectPrioritylistGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectPrioritylistGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Int32LabelAndValue>>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectPrioritylistGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Int32LabelAndValue>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectPrioritylistGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectPrioritylistGet$Json(params?: {

  }): Observable<Array<Int32LabelAndValue>> {

    return this.apiProjectPrioritylistGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Int32LabelAndValue>>) => r.body as Array<Int32LabelAndValue>)
    );
  }

  /**
   * Path part for operation apiProjectDatatablePost
   */
  static readonly ApiProjectDatatablePostPath = '/api/project/datatable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectDatatablePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectDatatablePost$Plain$Response(params?: {
    pi?: number;
    ps?: number;
    sn?: null | string;
    sd?: boolean;
      body?: null | Array<FilterCriteria>
  }): Observable<StrictHttpResponse<ProjectCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectDatatablePostPath, 'post');
    if (params) {

      rb.query('pi', params.pi, {});
      rb.query('ps', params.ps, {});
      rb.query('sn', params.sn, {});
      rb.query('sd', params.sd, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectCollectionList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectDatatablePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectDatatablePost$Plain(params?: {
    pi?: number;
    ps?: number;
    sn?: null | string;
    sd?: boolean;
      body?: null | Array<FilterCriteria>
  }): Observable<ProjectCollectionList> {

    return this.apiProjectDatatablePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectCollectionList>) => r.body as ProjectCollectionList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectDatatablePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectDatatablePost$Json$Response(params?: {
    pi?: number;
    ps?: number;
    sn?: null | string;
    sd?: boolean;
      body?: null | Array<FilterCriteria>
  }): Observable<StrictHttpResponse<ProjectCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectDatatablePostPath, 'post');
    if (params) {

      rb.query('pi', params.pi, {});
      rb.query('ps', params.ps, {});
      rb.query('sn', params.sn, {});
      rb.query('sd', params.sd, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectCollectionList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectDatatablePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectDatatablePost$Json(params?: {
    pi?: number;
    ps?: number;
    sn?: null | string;
    sd?: boolean;
      body?: null | Array<FilterCriteria>
  }): Observable<ProjectCollectionList> {

    return this.apiProjectDatatablePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectCollectionList>) => r.body as ProjectCollectionList)
    );
  }

}
