/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LogImportDto } from '../models/log-import-dto';

@Injectable({
  providedIn: 'root',
})
export class ImportsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiImportsGetallGet
   */
  static readonly ApiImportsGetallGetPath = '/api/imports/getall';

  /**
   * Returns a list of logs.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsGetallGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetallGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<LogImportDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsGetallGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogImportDto>>;
      })
    );
  }

  /**
   * Returns a list of logs.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsGetallGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetallGet$Plain(params?: {

  }): Observable<Array<LogImportDto>> {

    return this.apiImportsGetallGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogImportDto>>) => r.body as Array<LogImportDto>)
    );
  }

  /**
   * Returns a list of logs.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsGetallGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetallGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<LogImportDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsGetallGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogImportDto>>;
      })
    );
  }

  /**
   * Returns a list of logs.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsGetallGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetallGet$Json(params?: {

  }): Observable<Array<LogImportDto>> {

    return this.apiImportsGetallGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogImportDto>>) => r.body as Array<LogImportDto>)
    );
  }

  /**
   * Path part for operation apiImportsGetlogimportsGet
   */
  static readonly ApiImportsGetlogimportsGetPath = '/api/imports/getlogimports';

  /**
   * Returns a list of logs with filters.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsGetlogimportsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetlogimportsGet$Plain$Response(params?: {
    dateFrom?: null | string;
    dateTo?: null | string;

  }): Observable<StrictHttpResponse<Array<LogImportDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsGetlogimportsGetPath, 'get');
    if (params) {

      rb.query('dateFrom', params.dateFrom, {});
      rb.query('dateTo', params.dateTo, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogImportDto>>;
      })
    );
  }

  /**
   * Returns a list of logs with filters.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsGetlogimportsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetlogimportsGet$Plain(params?: {
    dateFrom?: null | string;
    dateTo?: null | string;

  }): Observable<Array<LogImportDto>> {

    return this.apiImportsGetlogimportsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogImportDto>>) => r.body as Array<LogImportDto>)
    );
  }

  /**
   * Returns a list of logs with filters.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsGetlogimportsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetlogimportsGet$Json$Response(params?: {
    dateFrom?: null | string;
    dateTo?: null | string;

  }): Observable<StrictHttpResponse<Array<LogImportDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsGetlogimportsGetPath, 'get');
    if (params) {

      rb.query('dateFrom', params.dateFrom, {});
      rb.query('dateTo', params.dateTo, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogImportDto>>;
      })
    );
  }

  /**
   * Returns a list of logs with filters.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsGetlogimportsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetlogimportsGet$Json(params?: {
    dateFrom?: null | string;
    dateTo?: null | string;

  }): Observable<Array<LogImportDto>> {

    return this.apiImportsGetlogimportsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogImportDto>>) => r.body as Array<LogImportDto>)
    );
  }

  /**
   * Path part for operation apiImportsGetlogimportbyidGet
   */
  static readonly ApiImportsGetlogimportbyidGetPath = '/api/imports/getlogimportbyid';

  /**
   * Returns LogImportDTO with the specified id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsGetlogimportbyidGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetlogimportbyidGet$Plain$Response(params?: {

    /**
     * Log ID to lookup
     */
    id?: number;

  }): Observable<StrictHttpResponse<LogImportDto>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsGetlogimportbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LogImportDto>;
      })
    );
  }

  /**
   * Returns LogImportDTO with the specified id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsGetlogimportbyidGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetlogimportbyidGet$Plain(params?: {

    /**
     * Log ID to lookup
     */
    id?: number;

  }): Observable<LogImportDto> {

    return this.apiImportsGetlogimportbyidGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<LogImportDto>) => r.body as LogImportDto)
    );
  }

  /**
   * Returns LogImportDTO with the specified id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsGetlogimportbyidGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetlogimportbyidGet$Json$Response(params?: {

    /**
     * Log ID to lookup
     */
    id?: number;

  }): Observable<StrictHttpResponse<LogImportDto>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsGetlogimportbyidGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LogImportDto>;
      })
    );
  }

  /**
   * Returns LogImportDTO with the specified id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsGetlogimportbyidGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsGetlogimportbyidGet$Json(params?: {

    /**
     * Log ID to lookup
     */
    id?: number;

  }): Observable<LogImportDto> {

    return this.apiImportsGetlogimportbyidGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<LogImportDto>) => r.body as LogImportDto)
    );
  }

  /**
   * Path part for operation apiImportsImportfilesGet
   */
  static readonly ApiImportsImportfilesGetPath = '/api/imports/importfiles';

  /**
   * Process to import files.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsImportfilesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsImportfilesGet$Plain$Response(params?: {
    path?: null | string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsImportfilesGetPath, 'get');
    if (params) {

      rb.query('path', params.path, {});

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
   * Process to import files.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsImportfilesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsImportfilesGet$Plain(params?: {
    path?: null | string;

  }): Observable<boolean> {

    return this.apiImportsImportfilesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Process to import files.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsImportfilesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsImportfilesGet$Json$Response(params?: {
    path?: null | string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsImportfilesGetPath, 'get');
    if (params) {

      rb.query('path', params.path, {});

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
   * Process to import files.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsImportfilesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportsImportfilesGet$Json(params?: {
    path?: null | string;

  }): Observable<boolean> {

    return this.apiImportsImportfilesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiImportsSetPost
   */
  static readonly ApiImportsSetPostPath = '/api/imports/set';

  /**
   * Saves the log to DB. If the log already exist, update it.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsSetPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiImportsSetPost$Plain$Response(params?: {
  
    /**
     * Log to save
     */
    body?: LogImportDto
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsSetPostPath, 'post');
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
   * Saves the log to DB. If the log already exist, update it.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsSetPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiImportsSetPost$Plain(params?: {
  
    /**
     * Log to save
     */
    body?: LogImportDto
  }): Observable<boolean> {

    return this.apiImportsSetPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Saves the log to DB. If the log already exist, update it.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportsSetPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiImportsSetPost$Json$Response(params?: {
  
    /**
     * Log to save
     */
    body?: LogImportDto
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ImportsService.ApiImportsSetPostPath, 'post');
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
   * Saves the log to DB. If the log already exist, update it.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportsSetPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiImportsSetPost$Json(params?: {
  
    /**
     * Log to save
     */
    body?: LogImportDto
  }): Observable<boolean> {

    return this.apiImportsSetPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
