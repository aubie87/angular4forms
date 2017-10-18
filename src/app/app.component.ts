import { Component } from '@angular/core';

import { Employee } from './employee';
import { FormPosterService } from './services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private languages = ['English', 'Spanish', 'French'];
  private paymentTypes = [{id: 'w2', value: 'W2'}, {id: '1099', value: '1099'}];
  private model = new Employee('Adam', 'Apple');

  constructor(private formPoster: FormPosterService) {

  }

  submitForm(form: NgForm) {
    console.log('submitForm: ', form.value);
    this.formPoster.postEmployeeForm(this.model);
  }

  lastNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.lastName = value;
    }
  }
}
