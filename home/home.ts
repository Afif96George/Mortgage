import { ResultsPage } from './../results/results';
import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
  
  })
export class HomePage {
  // declarATION 
 
  mortgageAmount: number;
  interest: number;
  payment: number;
  Bank: string;

  constructor(public navCtrl: NavController) {
    


  }
 
  clicked() {
    console.log("button clicked!");
    console.log("mortgage: " + this.mortgageAmount);
    console.log("interest: " + this.interest);
    console.log("payment: " + this.payment);
    console.log("Bank: " + this.Bank);
    this.navCtrl.push(ResultsPage, {param1: this.mortgageAmount, param2: this.interest, param3: this.payment,param4:this.Bank});
  }


}


