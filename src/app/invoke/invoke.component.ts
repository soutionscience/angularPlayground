import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Web3ServiceService } from '../services/web3-service.service';
let contractDef = require('../../ethereum/contracts/tutorial.json')



@Component({
  selector: 'app-invoke',
  templateUrl: './invoke.component.html',
  styleUrls: ['./invoke.component.scss']
})
export class InvokeComponent implements OnInit {
  invokeForm: FormGroup;
  options: Boolean;

  constructor(private fb: FormBuilder, private web3Service: Web3ServiceService) { 
    this.options = true;
  }

  ngOnInit() {
    this.createForm()
  }
  createForm(){
    this.invokeForm = this.fb.group({
      gas: [470000],
      parameter: ''
    })
  }
  updateOptions(){
    this.options = this.options = !this.options
    console.log(this.options)
  }
  setParameter(){
    console.log("sending transaction")
    this.web3Service.setNumSend("0x901802e7c765c36d45dede05f40c6605bfbf2e29", 
    this.invokeForm.value.parameter, this.invokeForm.value.gas).subscribe(resp=>{
      console.log('what is responce ',resp)
    })

  }
  callParameter(){
    this.web3Service.getNum("0x901802e7c765c36d45dede05f40c6605bfbf2e29",
    this.invokeForm.value.gas)
    .subscribe(resp=>{
      console.log('value is ', resp)
    })

  }


}
