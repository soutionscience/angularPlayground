import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Web3ServiceService } from '../services/web3-service.service';


@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent implements OnInit {
  accountsForm: FormGroup;
  unLockedAccount: any
  @Input() accounts: String [];
  // selected: String


  constructor(private fb: FormBuilder, private web3Service: Web3ServiceService) { }

  ngOnInit() {
    this.checkAccounts()
    this.createForm()
  }

createForm(){
  this.accountsForm = this.fb.group({
    selected: '',
    password: ''
  })
}

  checkAccounts(){
    console.log("test single")
 
 
  }
  unlockSelected(){
    console.log("htiing unlock")
    this.web3Service.doUnlock(this.accountsForm.value.selected, this.accountsForm.value.password)
    .subscribe(resp=> console.log(resp))
  }

}
