import { Component } from '@angular/core';

/**
 * Generated class for the PodeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pode',
  templateUrl: 'pode.html' || 'pode.html'
})
export class PodeComponent {

  text: string;

  constructor() {
    debugger
    console.log('Hello PodeComponent Component');
    this.text = 'Hello World';
  }

}
