import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { QuartosProvider } from 'h5-quartos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    quartos;
    constructor(public navCtrl: NavController, private quartosProvider: QuartosProvider) {
      this.quartos = this.quartosProvider.Quartos();
    }
}
