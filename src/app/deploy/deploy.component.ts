import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Web3ServiceService } from '../services/web3-service.service';

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
      byteCode: [`{
        "linkReferences": {},
        "object": "608060405234801561001057600080fd5b5060405160208061018e8339810180604052810190808051906020019092919050505080600081905550506101448061004a6000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806367e0badb14610051578063cd16ecbf1461007c575b600080fd5b34801561005d57600080fd5b506100666100a9565b6040518082815260200191505060405180910390f35b34801561008857600080fd5b506100a7600480360381019080803590602001909291905050506100b2565b005b60008054905090565b600080549050816000819055506000546001026000191681600102600019163373ffffffffffffffffffffffffffffffffffffffff167f108fd0bf2253f6baf35f111ba80fb5369c2e004b88e36ac8486fcee0c87e61ce60405160405180910390a450505600a165627a7a723058203d8a79ac835d371482e73762067f4b677799fb30c4eaefb08eb8e9bc3aceb17a0029",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 PUSH2 0x18E DUP4 CODECOPY DUP2 ADD DUP1 PUSH1 0x40 MSTORE DUP2 ADD SWAP1 DUP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP DUP1 PUSH1 0x0 DUP2 SWAP1 SSTORE POP POP PUSH2 0x144 DUP1 PUSH2 0x4A PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x67E0BADB EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0xCD16ECBF EQ PUSH2 0x7C JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x66 PUSH2 0xA9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x88 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xA7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xB2 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP DUP2 PUSH1 0x0 DUP2 SWAP1 SSTORE POP PUSH1 0x0 SLOAD PUSH1 0x1 MUL PUSH1 0x0 NOT AND DUP2 PUSH1 0x1 MUL PUSH1 0x0 NOT AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x108FD0BF2253F6BAF35F111BA80FB5369C2E004B88E36AC8486FCEE0C87E61CE PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 RETURNDATASIZE DUP11 PUSH26 0xAC835D371482E73762067F4B677799FB30C4EAEFB08EB8E9BC3A 0xce 0xb1 PUSH27 0x2900000000000000000000000000000000000000000000000000 ",
        "sourceMap": "25:431:0:-;;;418:35;8:9:-1;5:2;;;30:1;27;20:12;5:2;418:35:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;450:1;446:3;:5;;;;418:35;25:431;;;;;;"
      }`],
      abi:[`[
        {
          "constant": false,
          "inputs": [],
          "name": "getNum",
          "outputs": [
            {
              "name": "n",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "caller",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "oldNum",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "newNum",
              "type": "bytes32"
            }
          ],
          "name": "NumberSetEvent",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "n",
              "type": "uint256"
            }
          ],
          "name": "setNum",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "x",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        }
      ]`]

     })
  }


  deployContract(){
    this.web3Api.doDeployContract(this.deployForm.value.byteCode, 
      this.deployForm.value.abi, this.deployForm.value.gas).subscribe(resp=>{
        console.log("the responce is ", resp)
        this.hashes.push(resp)
        console.log("what is in hash ", this.hashes)
      })
      console.log("what is in hash ", this.hashes)
  }
 

}
