import { Component, OnInit } from '@angular/core';
import { Web3ServiceService } from '../services/web3-service.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  trpcURL: String

  constructor(private web3Service: Web3ServiceService) { 
    this.trpcURL ="http://localhost:8545"
  }

  ngOnInit() {
  }
  doConnect(){
    console.log("connecting to test rpc ", this.trpcURL)
    this.web3Service.connectRpc(this.trpcURL);

  }

}
