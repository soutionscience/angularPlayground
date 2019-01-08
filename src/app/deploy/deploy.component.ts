import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Web3ServiceService } from '../services/web3-service.service';
import { TouchSequence } from 'selenium-webdriver';

let tutorialCode = require('../../ethereum/contracts/tutorial.json')


@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.css']
})
export class DeployComponent implements OnInit {
  deployForm: FormGroup
  hashes: any [];
  etherscanLink: String;
  contractAddress: String

  constructor(private fb: FormBuilder, private web3Api: Web3ServiceService) {
    this.hashes = [ ]
   }

  ngOnInit() {
    this.createForm()
    
    
  }
  createForm(){

   
     this.deployForm = this.fb.group({
       gas: [4700000],
      byteCode: [tutorialCode.bytecode],
      abi:[tutorialCode.abi]

     })
  }


  deployContract(){
   
    this.web3Api.doDeployContract(this.deployForm.value.byteCode, 
      this.deployForm.value.abi, this.deployForm.value.gas).subscribe(resp=>{
         this.web3Api.getMyTransactionReceipt(resp).subscribe(newResp=>{
           console.log('new responce', newResp);
           this.etherscanLink = newResp.transactionHash;
           this.contractAddress = newResp.contractAddress;
         })

        //this.hashes.push(resp)
        // this.etherscanLink = `https://ropsten.etherscan.io/tx/${this.hashes[0].transactionHash}`
      //  console.log('hashes ', this.hashes)
      })

     
      
  }
 

}
