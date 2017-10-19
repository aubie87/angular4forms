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
  private languages = [];
  private paymentTypes = [{id: 'w2', value: 'W2'}, {id: '1099', value: '1099'}];
  private model = new Employee('Adam', 'Apple');

  constructor(private formPoster: FormPosterService) {
    formPoster.getLanguages()
      .subscribe(
        data => this.languages = data.languages,
        err => console.log('error: ', err)
      );
  }

  submitForm(form: NgForm) {
    // validate form items
    if (!this.validatePrimaryLanguage(this.model.primaryLanguage)) {
      return;
    }

    // form.value is Angular's model of the form
    console.log('submitForm: ', form.value);
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err )
      );
  }

  validatePrimaryLanguage(value: any): boolean {
    if (value === 'default') {
      return false;
    } else {
      return true;
    }
  }

  lastNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.lastName = value;
    }
  }
}
