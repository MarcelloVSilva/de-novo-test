import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {UserProvider} from 'ionic-ola-package';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  usuarios;
  constructor(public navCtrl: NavController, private userProvider: UserProvider) {
    this.usuarios = this.userProvider.Usuarios();
  }

}
