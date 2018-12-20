import { Component, OnInit, Output } from '@angular/core';
import { Web3ServiceService} from '../services/web3-service.service'
import { EventEmitter } from 'protractor';
import { AccountsInfo } from '../shared/accountsInfo';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.css']
})
export class PlaygroundPageComponent implements OnInit {
  //@Output()Myaccounts = new EventEmitter();
  accountsInfo: AccountsInfo[];
  message: String
  heading: String
  installedMetamask : boolean;
  accounts: any [];
  totalAccounts: any;
  balance: String;

  constructor(private webService: Web3ServiceService) { }

  ngOnInit() {
    this.installedMetamask =false;
    this.heading ='';
    this.message ='';
    this.checkMetamask();
    //this.checknumberOfAccounts();
 }

  getInfo(){
    this.checknumberOfAccounts()
   // this.getAccountBalance(this.accounts[0])

  }
  checkMetamask(){
  
    if(this.webService.checkAndInstatiateWeb3()){
      this.installedMetamask = true;
      this.heading= "metamsk is installed"
      this.message ="Metamask is installed please ensure you unlock it to get the full experience"
    }else{
      this.installedMetamask = false;
      this.heading ="Metamask is NOT!! installed"
      this.message = "Metamask is not Installed. Add mask to chrome, firefox or opera "
    }
  }
  checknumberOfAccounts(){
    this.webService.getAccounts().subscribe(resp=>{
     this.accounts= resp;
    // resp.forEach(element => {
    //   this.webService.getBalance(element).subscribe(resp=>{
    //     console.log('id: ', element, 'balance: ', resp)
    //     this.accountsInfo.push({_id: element, balance: 100})
    //     // console.log('objects', this.accountsInfo)

    //   })
    //  });
     
     this.totalAccounts = this.accounts.length;


      this.webService.getBalance(this.accounts[0]).subscribe(resp=>{
        this.balance = resp
      })
    })
    //add account balances

  }
  getAccountBalance(account){
    this.webService.getBalance(account).subscribe(resp=>{
      this.balance = resp;
      console.log(this.balance)
    })
  }

}
