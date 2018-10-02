import { Component, OnInit } from '@angular/core';
import { Web3ServiceService } from '../services/web3-service.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  trpcURL: String
  version: any

  constructor(private web3Service: Web3ServiceService) { 
    this.trpcURL ="http://localhost:8545";
    this.version = ''
    
 
  }

  ngOnInit() {
   this.checkVersion()


  }
  doConnect(){
    console.log("connecting to test rpc ", this.trpcURL)
    this.web3Service.connectRpc(this.trpcURL);
    this.checkVersion()
    

  }
  checkVersion(){
   this.web3Service.checkversion().subscribe((resp)=>{
     this.version = resp
     
    })
  }

}
