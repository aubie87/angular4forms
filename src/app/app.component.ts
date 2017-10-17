import { Component } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private languages = ['English', 'Spanish', 'French'];
  private model = new Employee('Adam', 'Apple');

  lastNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.lastName = value;
    }
  }
}