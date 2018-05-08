import {Injectable} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private _http: HttpClient) {}

  public get(path: string, params?: object, options = null): Observable<any> {

    let resultPath = path;
    let resultOptions = {
      headers: this.httpOptions.headers
    };
    if (options) {
      resultOptions = options;
    }

    if (params) {
      resultPath += '?';
      Object.keys(params).forEach(key => {
        resultPath += `${key}=${params[key]}&`;
      });
      resultPath = resultPath.slice(0, -1);
    }

    return this._http
      .get(resultPath, resultOptions)
      .map((data) => {
        if (!data) {
          throw data;
        }

        return data;
      });
  }

  public post(path: string, params?: object, options = null): Observable<any> {
    const resultPath = path;
    let resultOptions = {
      headers: this.httpOptions.headers
    };
    if (options) {
      resultOptions = options;
    }
    const resultBody = params;

    return this._http
      .post(resultPath, resultBody, resultOptions)
      .map((data) => {
        if (!data) {
          throw data;
        }

        return data;
      });
  }

  public patch(path: string, params?: object, options = null): Observable<any> {
    const resultPath = path;
    let resultOptions = {
      headers: this.httpOptions.headers
    };
    if (options) {
      resultOptions = options;
    }
    const resultBody = params;

    return this._http
      .patch(resultPath, resultBody, resultOptions)
      .map((data) => {
        if (!data) {
          throw data;
        }

        return data;
      });
  }

}
