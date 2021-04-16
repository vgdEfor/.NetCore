/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Employee } from '../models/employee';
import { EmployeeCollectionList } from '../models/employee-collection-list';
import { FilterCriteria } from '../models/filter-criteria';
import { Int32LabelAndValue } from '../models/int-32-label-and-value';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiEmployeesGetbyidGet
   */
  static readonly ApiEmployeesGetbyidGetPath = '/api/employees/getbyid';

  /**
   * Obtiene un empleado con la id seleccionada.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesGetbyidGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetbyidGet$Plain$Response(params?: {

    /**
     * ID del empleado a buscar
     */
    id?: number;

  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesGetbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * Obtiene un empleado con la id seleccionada.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesGetbyidGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetbyidGet$Plain(params?: {

    /**
     * ID del empleado a buscar
     */
    id?: number;

  }): Observable<Employee> {

    return this.apiEmployeesGetbyidGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Obtiene un empleado con la id seleccionada.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesGetbyidGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetbyidGet$Json$Response(params?: {

    /**
     * ID del empleado a buscar
     */
    id?: number;

  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesGetbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * Obtiene un empleado con la id seleccionada.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesGetbyidGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetbyidGet$Json(params?: {

    /**
     * ID del empleado a buscar
     */
    id?: number;

  }): Observable<Employee> {

    return this.apiEmployeesGetbyidGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Path part for operation apiEmployeesGetlistPost
   */
  static readonly ApiEmployeesGetlistPostPath = '/api/employees/getlist';

  /**
   * Obtiene la lista de empleados.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesGetlistPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistPost$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<EmployeeCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesGetlistPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmployeeCollectionList>;
      })
    );
  }

  /**
   * Obtiene la lista de empleados.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesGetlistPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistPost$Plain(params?: {

  }): Observable<EmployeeCollectionList> {

    return this.apiEmployeesGetlistPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<EmployeeCollectionList>) => r.body as EmployeeCollectionList)
    );
  }

  /**
   * Obtiene la lista de empleados.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesGetlistPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistPost$Json$Response(params?: {

  }): Observable<StrictHttpResponse<EmployeeCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesGetlistPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmployeeCollectionList>;
      })
    );
  }

  /**
   * Obtiene la lista de empleados.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesGetlistPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistPost$Json(params?: {

  }): Observable<EmployeeCollectionList> {

    return this.apiEmployeesGetlistPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EmployeeCollectionList>) => r.body as EmployeeCollectionList)
    );
  }

  /**
   * Path part for operation apiEmployeesGetlistcompletaPost
   */
  static readonly ApiEmployeesGetlistcompletaPostPath = '/api/employees/getlistcompleta';

  /**
   * Obtiene la lista de empleados.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesGetlistcompletaPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistcompletaPost$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<EmployeeCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesGetlistcompletaPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmployeeCollectionList>;
      })
    );
  }

  /**
   * Obtiene la lista de empleados.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesGetlistcompletaPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistcompletaPost$Plain(params?: {

  }): Observable<EmployeeCollectionList> {

    return this.apiEmployeesGetlistcompletaPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<EmployeeCollectionList>) => r.body as EmployeeCollectionList)
    );
  }

  /**
   * Obtiene la lista de empleados.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesGetlistcompletaPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistcompletaPost$Json$Response(params?: {

  }): Observable<StrictHttpResponse<EmployeeCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesGetlistcompletaPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmployeeCollectionList>;
      })
    );
  }

  /**
   * Obtiene la lista de empleados.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesGetlistcompletaPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistcompletaPost$Json(params?: {

  }): Observable<EmployeeCollectionList> {

    return this.apiEmployeesGetlistcompletaPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EmployeeCollectionList>) => r.body as EmployeeCollectionList)
    );
  }

  /**
   * Path part for operation apiEmployeesPositionlistGet
   */
  static readonly ApiEmployeesPositionlistGetPath = '/api/employees/positionlist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesPositionlistGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesPositionlistGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Int32LabelAndValue>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesPositionlistGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiEmployeesPositionlistGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesPositionlistGet$Plain(params?: {

  }): Observable<Array<Int32LabelAndValue>> {

    return this.apiEmployeesPositionlistGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Int32LabelAndValue>>) => r.body as Array<Int32LabelAndValue>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesPositionlistGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesPositionlistGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Int32LabelAndValue>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesPositionlistGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiEmployeesPositionlistGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesPositionlistGet$Json(params?: {

  }): Observable<Array<Int32LabelAndValue>> {

    return this.apiEmployeesPositionlistGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Int32LabelAndValue>>) => r.body as Array<Int32LabelAndValue>)
    );
  }

  /**
   * Path part for operation apiEmployeesDatatablePost
   */
  static readonly ApiEmployeesDatatablePostPath = '/api/employees/datatable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesDatatablePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesDatatablePost$Plain$Response(params?: {
    pi?: number;
    ps?: number;
    sn?: null | string;
    sd?: boolean;
      body?: null | Array<FilterCriteria>
  }): Observable<StrictHttpResponse<EmployeeCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesDatatablePostPath, 'post');
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
        return r as StrictHttpResponse<EmployeeCollectionList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesDatatablePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesDatatablePost$Plain(params?: {
    pi?: number;
    ps?: number;
    sn?: null | string;
    sd?: boolean;
      body?: null | Array<FilterCriteria>
  }): Observable<EmployeeCollectionList> {

    return this.apiEmployeesDatatablePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<EmployeeCollectionList>) => r.body as EmployeeCollectionList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesDatatablePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesDatatablePost$Json$Response(params?: {
    pi?: number;
    ps?: number;
    sn?: null | string;
    sd?: boolean;
      body?: null | Array<FilterCriteria>
  }): Observable<StrictHttpResponse<EmployeeCollectionList>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesDatatablePostPath, 'post');
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
        return r as StrictHttpResponse<EmployeeCollectionList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesDatatablePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesDatatablePost$Json(params?: {
    pi?: number;
    ps?: number;
    sn?: null | string;
    sd?: boolean;
      body?: null | Array<FilterCriteria>
  }): Observable<EmployeeCollectionList> {

    return this.apiEmployeesDatatablePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EmployeeCollectionList>) => r.body as EmployeeCollectionList)
    );
  }

  /**
   * Path part for operation apiEmployeesGetlistcombolistGet
   */
  static readonly ApiEmployeesGetlistcombolistGetPath = '/api/employees/getlistcombolist';

  /**
   * Obtiene la lista de empleados filtrada por name Contains.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesGetlistcombolistGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistcombolistGet$Plain$Response(params?: {
    filtro?: null | string;

  }): Observable<StrictHttpResponse<Array<Employee>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesGetlistcombolistGetPath, 'get');
    if (params) {

      rb.query('filtro', params.filtro, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Employee>>;
      })
    );
  }

  /**
   * Obtiene la lista de empleados filtrada por name Contains.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesGetlistcombolistGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistcombolistGet$Plain(params?: {
    filtro?: null | string;

  }): Observable<Array<Employee>> {

    return this.apiEmployeesGetlistcombolistGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Employee>>) => r.body as Array<Employee>)
    );
  }

  /**
   * Obtiene la lista de empleados filtrada por name Contains.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesGetlistcombolistGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistcombolistGet$Json$Response(params?: {
    filtro?: null | string;

  }): Observable<StrictHttpResponse<Array<Employee>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesGetlistcombolistGetPath, 'get');
    if (params) {

      rb.query('filtro', params.filtro, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Employee>>;
      })
    );
  }

  /**
   * Obtiene la lista de empleados filtrada por name Contains.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesGetlistcombolistGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGetlistcombolistGet$Json(params?: {
    filtro?: null | string;

  }): Observable<Array<Employee>> {

    return this.apiEmployeesGetlistcombolistGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Employee>>) => r.body as Array<Employee>)
    );
  }

  /**
   * Path part for operation apiEmployeesInsertPost
   */
  static readonly ApiEmployeesInsertPostPath = '/api/employees/insert';

  /**
   * Crea un nuevo empleado en la BD.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesInsertPost$Plain$Response(params?: {

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;
  
    /**
     * Datos del nuevo empleado
     */
    body?: Employee
  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesInsertPostPath, 'post');
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
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * Crea un nuevo empleado en la BD.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesInsertPost$Plain(params?: {

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;
  
    /**
     * Datos del nuevo empleado
     */
    body?: Employee
  }): Observable<Employee> {

    return this.apiEmployeesInsertPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Crea un nuevo empleado en la BD.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesInsertPost$Json$Response(params?: {

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;
  
    /**
     * Datos del nuevo empleado
     */
    body?: Employee
  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesInsertPostPath, 'post');
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
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * Crea un nuevo empleado en la BD.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesInsertPost$Json(params?: {

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;
  
    /**
     * Datos del nuevo empleado
     */
    body?: Employee
  }): Observable<Employee> {

    return this.apiEmployeesInsertPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Path part for operation apiEmployeesUpdatePost
   */
  static readonly ApiEmployeesUpdatePostPath = '/api/employees/update';

  /**
   * Busca al antiguo empleado en la BD y actualiza sus datos.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesUpdatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesUpdatePost$Plain$Response(params?: {

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;
  
    /**
     * Datos del nuevo empleado
     */
    body?: Employee
  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesUpdatePostPath, 'post');
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
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * Busca al antiguo empleado en la BD y actualiza sus datos.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesUpdatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesUpdatePost$Plain(params?: {

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;
  
    /**
     * Datos del nuevo empleado
     */
    body?: Employee
  }): Observable<Employee> {

    return this.apiEmployeesUpdatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Busca al antiguo empleado en la BD y actualiza sus datos.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesUpdatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesUpdatePost$Json$Response(params?: {

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;
  
    /**
     * Datos del nuevo empleado
     */
    body?: Employee
  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesUpdatePostPath, 'post');
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
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * Busca al antiguo empleado en la BD y actualiza sus datos.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesUpdatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesUpdatePost$Json(params?: {

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;
  
    /**
     * Datos del nuevo empleado
     */
    body?: Employee
  }): Observable<Employee> {

    return this.apiEmployeesUpdatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Path part for operation apiEmployeesDeleteDelete
   */
  static readonly ApiEmployeesDeleteDeletePath = '/api/employees/delete';

  /**
   * Borra un empleado de la BD.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesDeleteDelete$Plain$Response(params?: {

    /**
     * ID del empleado a borrar
     */
    id?: number;

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;

  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesDeleteDeletePath, 'delete');
    if (params) {

      rb.query('id', params.id, {});
      rb.query('commit', params.commit, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * Borra un empleado de la BD.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesDeleteDelete$Plain(params?: {

    /**
     * ID del empleado a borrar
     */
    id?: number;

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;

  }): Observable<Employee> {

    return this.apiEmployeesDeleteDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Borra un empleado de la BD.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesDeleteDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesDeleteDelete$Json$Response(params?: {

    /**
     * ID del empleado a borrar
     */
    id?: number;

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;

  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesDeleteDeletePath, 'delete');
    if (params) {

      rb.query('id', params.id, {});
      rb.query('commit', params.commit, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * Borra un empleado de la BD.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesDeleteDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesDeleteDelete$Json(params?: {

    /**
     * ID del empleado a borrar
     */
    id?: number;

    /**
     * Establece si se hara un commit en la BD
     */
    commit?: boolean;

  }): Observable<Employee> {

    return this.apiEmployeesDeleteDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

}
