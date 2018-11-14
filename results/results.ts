
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  //Declaration 
 
  months: number = 0;
  mortgageAmount = this.navParams.get('param1');
  ///bank type :=this.navParams.get('param2')
  //select function @ call procedure/function database
  //dapat return value reassign kepada interest 
  interest = this.navParams.get('param2');
  payment = this.navParams.get('param3');
 //Bank = this.navParams.get('param4');
  list: any = [];
 
  CreditDurationMonth: any;
  TotalCredithMonth : any;
  BankList : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//duration = dauer
  ionViewDidLoad() {
    //controller
    console.log('ionViewDidLoad ResultsPage');
    console.log(this.mortgageAmount);
    console.log(this.interest);
    console.log(this.payment);
    //console.log(this.Bank);
    this.calculateMortgage();
    this.BankList();
  }
  calculateMortgage() {// function

    while(parseFloat(this.mortgageAmount) > parseFloat(this.payment)) {
      console.log("while loop was executed");
      var pay = this.payment - (this.mortgageAmount*(this.interest/100))/12;
      this.mortgageAmount = this.mortgageAmount - pay;
      this.months++;
      this.list.push(this.months + ". Balance: " + this.mortgageAmount.toFixed(2) + "MYR Payment: " + pay.toFixed(2) + "MYR Interest: " + (this.payment - pay).toFixed(2) + "MYR");
      console.log(this.months + " Rest: " + this.mortgageAmount + " Payment: " + pay + " Interest: " + (this.payment - pay));
    }

    /*this.BankList()
{//Funtion
      var valueInterest;
  if(this.Bank == "Bank Rakyat")
  {
    valueInterest = "3.5%"
  }
  else if(this.Bank == "Bank MayBank")
  {
    valueInterest = "3.2%"
  }
  else
  {
  valueInterest = "3.0%"
    }
  }
*/
    var CreditDurationMth = this.months + 1;
    var TotalcreditMnth = CreditDurationMth/12;
    this.CreditDurationMonth = CreditDurationMth;
    this.TotalCredithMonth =  TotalcreditMnth.toFixed(1);

    
    console.log(CreditDurationMth + "Last month Balance " + this.mortgageAmount + " Loan Paid Out");
    console.log("Credit Duration: " + CreditDurationMth + " Monthly Payment. " +  TotalcreditMnth + " Years");
  //console.log("Bank Being selected" + this.BankList + "Interest" + valueInterest);
    this.months = 0;
//Letzter monat mit Restbetrag von = last month balance
// tillgunt = payment
//zinsen = interset
//rest = balance
}
}
