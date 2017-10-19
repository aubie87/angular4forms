import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Employee } from '../employee';

@Injectable()
export class FormPosterService {

  constructor(private http: Http) {
  }

  extractData(res: Response): any {
    const body = res.json();
    return body.data || {};
  }

  extractLanguages(res: Response): any {
    const body = res.json();
    return body.data || {};
  }

  handleError(error: any) {
    console.error('post error: ', error);
    return Observable.throw(error.statusText);
  }

  getLanguages(): Observable<any> {
    return this.http.get('http://localhost:3100/languages')
      .map(this.extractLanguages)
      .catch(this.handleError);
  }

  postEmployeeForm(employee: Employee): Observable<any> {
    console.log('posting employee: ', employee);

    const body = JSON.stringify(employee);
    const headers = new Headers({'Content-Type': 'application/json' });
    const options = new RequestOptions({ 'headers': headers});

    return this.http.post('http://localhost:3100/postemployee', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
