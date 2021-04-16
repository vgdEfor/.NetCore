/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LanguageDto } from '../models/language-dto';

@Injectable({
  providedIn: 'root',
})
export class LanguageService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiLanguageGet
   */
  static readonly ApiLanguageGetPath = '/api/language';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLanguageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLanguageGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<LanguageDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LanguageService.ApiLanguageGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LanguageDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLanguageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLanguageGet$Plain(params?: {

  }): Observable<Array<LanguageDto>> {

    return this.apiLanguageGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LanguageDto>>) => r.body as Array<LanguageDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLanguageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLanguageGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<LanguageDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LanguageService.ApiLanguageGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LanguageDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLanguageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLanguageGet$Json(params?: {

  }): Observable<Array<LanguageDto>> {

    return this.apiLanguageGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LanguageDto>>) => r.body as Array<LanguageDto>)
    );
  }

}
