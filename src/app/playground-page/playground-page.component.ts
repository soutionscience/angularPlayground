import { Component, OnInit } from '@angular/core';
import { Web3ServiceService} from '../services/web3-service.service'

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.css']
})
export class PlaygroundPageComponent implements OnInit {

  message: String
  heading: String
  installedMetamask : boolean
  accounts: any [];

  constructor(private webService: Web3ServiceService) { }

  ngOnInit() {
    this.installedMetamask =false;
    this.heading ='';
    this.message ='';
    this.checkMetamask()
    this.checknumberOfAccounts()
 
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
    this.webService.getAccounts().subscribe(resp=>{console.log(resp)})
  }

}
