import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Employee } from '../employee';

@Injectable()
export class FormPosterService {

  constructor(private http: Http) {
  }

  postEmployeeForm(employee: Employee) {
    console.log('posting employee: ', employee);
  }
}
