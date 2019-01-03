import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { Web3ServiceService } from '../services/web3-service.service';

@Component({
  selector: 'app-compile',
  templateUrl: './compile.component.html',
  styleUrls: ['./compile.component.css']
})
export class CompileComponent implements OnInit {
  compileForm: FormGroup
  solidityCode: String
  deprecated: Boolean

  constructor( private fb: FormBuilder, private web3Service: Web3ServiceService) {
    this.deprecated = true;
    this.solidityCode = `pragma solidity ^0.4.6;
    contract MyContract {
      uint   num;
    event NumberSetEvent(address indexed caller, bytes32 indexed oldNum, bytes32 indexed newNum);
    function getNum()  returns (uint n) {return num;}
    function setNum(uint n) {
      uint old = num;
      num=n;
      NumberSetEvent(msg.sender,bytes32(old),bytes32(num));
  }
    function MyContract(uint x){num=x;}
    } `
   }

  ngOnInit() {
    this.createForm()
  }
  createForm(){
    this.compileForm = this.fb.group({
      compileCode: [this.solidityCode]
    })
  }

  compileSolidity(){
   console.log("compiling ....")
    this.web3Service.doCompileSolidityCode(this.compileForm.value.compileCode)
    .subscribe(resp=>{
      console.log("finished",  resp)
    })
  }

}
