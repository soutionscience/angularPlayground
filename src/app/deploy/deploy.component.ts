import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Web3ServiceService } from '../services/web3-service.service';

let tutorialCode = require('../../ethereum/contracts/tutorial.json')


@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.css']
})
export class DeployComponent implements OnInit {
  deployForm: FormGroup
  hashes: any []

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
    console.log("hitting deploy contract");
    console.log("what is in ,", this.deployForm.value.abi)
    this.web3Api.doDeployContract(this.deployForm.value.byteCode, 
      this.deployForm.value.abi, this.deployForm.value.gas).subscribe(resp=>{
        console.log("the responce is ", resp)
        this.hashes.push(resp)
        console.log("what is in hash ", this.hashes)
      })
      console.log("what is in hash ", this.hashes)
  }
 

}
