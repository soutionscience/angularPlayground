import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Web3ServiceService } from '../services/web3-service.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  sendForm: FormGroup;
  code: String;
  @Input() accounts: String [];

  constructor(private fb: FormBuilder, private web3Service: Web3ServiceService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.sendForm = this.fb.group({
      from:'',
      to: '',
      value:'',
      gas:[4500000],
      gasPrice:[10000000000],
      data:''

    })

  }
  send(){
    console.log("submitting")
    this.web3Service.doSendTransaction(this.sendForm.value).subscribe(resp=>{
     this.code= resp;
    })
  }

}
